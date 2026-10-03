const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Scheme = require('../models/Scheme');

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ============================================
// MODEL FALLBACK LIST — try in order
// ============================================
const MODEL_FALLBACKS = [
  'gemini-flash-latest',
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-flash-lite-latest'
];

// ============================================
// POST /api/ai/chat — AI Chat with Streaming
// ============================================
router.post('/chat', async (req, res) => {
  try {
    const {
      message,
      language: requestedLang,
      profile = {},
      history = []
    } = req.body;

    if (!message) {
      return res.status(400).json({ message: 'Message is required' });
    }

    // ============================================
    // LANGUAGE DETECTION
    // ============================================
    let language = requestedLang;
    const hindiRegex = /[\u0900-\u097F]/;

    if (!language) {
      const hindiRomanWords = ['kya', 'kaunsi', 'kaise', 'kisan', 'mahila', 'chhatra', 'ghar', 'paise', 'milega', 'yojana', 'batao', 'chahiye', 'mujhe'];
      const lowerMsgLang = message.toLowerCase();
      const hasHindiRoman = hindiRomanWords.some(word => lowerMsgLang.includes(word));
      language = (hindiRegex.test(message) || hasHindiRoman) ? 'hi' : 'en';
    }

    if (hindiRegex.test(message)) {
      language = 'hi';
    }

    // Setup SSE headers EARLY
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // ============================================
    // INTENT DETECTION
    // ============================================
    const lowerMsg = message.toLowerCase().trim();

    const thanksWords = ['thanks', 'thank you', 'thankyou', 'thx', 'shukriya', 'dhanyavad', 'धन्यवाद', 'शुक्रिया', 'थैंक्स'];
    const greetingWords = ['hi', 'hello', 'hey', 'namaste', 'namaskar', 'नमस्ते', 'नमस्कार', 'हाय', 'हैलो'];
    const byeWords = ['bye', 'goodbye', 'see you', 'alvida', 'अलविदा', 'बाय'];
    const okWords = ['ok', 'okay', 'got it', 'samajh gaya', 'समझ गया', 'ठीक है', 'theek hai'];

    let quickReply = null;
    let intent = 'question';

    if (thanksWords.some(w => lowerMsg === w || lowerMsg.includes(w))) {
      intent = 'thanks';
      const replies = language === 'hi'
        ? ['आपका स्वागत है! 🙏', 'कोई बात नहीं! 😊', 'खुशी हुई मदद करके! 🌟', 'बिल्कुल! 🙌']
        : ["You're welcome! 🙏", "No problem! 😊", "My pleasure! 🌟", "Anytime! 🙌"];
      quickReply = replies[Math.floor(Math.random() * replies.length)];
    }
    else if (byeWords.some(w => lowerMsg === w || lowerMsg.includes(w))) {
      intent = 'bye';
      const replies = language === 'hi'
        ? ['अलविदा! 👋', 'बाय! 🌟 अपना ख्याल रखिए।']
        : ['Goodbye! 👋', 'Take care! ✨'];
      quickReply = replies[Math.floor(Math.random() * replies.length)];
    }
    else if (greetingWords.some(w => lowerMsg === w || lowerMsg === w + '!')) {
      intent = 'greeting';
      const replies = language === 'hi'
        ? ['नमस्ते! 🙏 मैं Scheme Saathi AI हूँ। कोई भी योजना पूछिए।', 'नमस्कार! 🌟 कैसे मदद करूं?']
        : ["Hello! 🙏 I'm Scheme Saathi AI. Ask about any scheme.", "Hi there! 🌟 How can I help?"];
      quickReply = replies[Math.floor(Math.random() * replies.length)];
    }
    else if (okWords.some(w => lowerMsg === w || lowerMsg.includes(w))) {
      intent = 'ok';
      const replies = language === 'hi'
        ? ['बहुत बढ़िया! 👍', 'ठीक है! 😊']
        : ['Great! 👍', 'Okay! 😊'];
      quickReply = replies[Math.floor(Math.random() * replies.length)];
    }

    // Stream quick reply character by character
    if (quickReply) {
      const chars = quickReply.split('');
      for (const char of chars) {
        res.write(`data: ${JSON.stringify({ chunk: char })}\n\n`);
        await new Promise(r => setTimeout(r, 15));
      }
      const followUps = (intent !== 'bye') 
        ? (language === 'hi' 
            ? ['किसान के लिए schemes?', 'महिलाओं के लिए schemes?', 'छात्रों के लिए schemes?']
            : ['Schemes for farmers?', 'Schemes for women?', 'Schemes for students?'])
        : [];
      res.write(`data: ${JSON.stringify({ done: true, followUps, language })}\n\n`);
      return res.end();
    }

    // ============================================
    // GET SCHEMES FOR CONTEXT
    // ============================================
    const schemes = await Scheme.find({ isActive: true })
      .select('name nameHindi category benefits benefitsHindi eligibility officialLink')
      .limit(50);

    const schemeContext = schemes.map(s => ({
      name: s.name,
      nameHindi: s.nameHindi,
      category: s.category,
      benefits: s.benefits,
      benefitsHindi: s.benefitsHindi
    }));

    // ============================================
    // PROFILE + COUNT
    // ============================================
    const hasProfile = profile && (profile.age || profile.state || profile.income);
    const profileContextHindi = hasProfile
      ? `\nउपयोगकर्ता: उम्र ${profile.age || '?'}, राज्य ${profile.state || '?'}, आय ₹${profile.income || '?'}, श्रेणी ${profile.category || '?'}`
      : '';
    const profileContextEn = hasProfile
      ? `\nUser: Age ${profile.age || '?'}, State ${profile.state || '?'}, Income ₹${profile.income || '?'}, Category ${profile.category || '?'}`
      : '';

    const numberWords = { '1': 1, 'एक': 1, '2': 2, 'दो': 2, '3': 3, 'तीन': 3, '4': 4, 'चार': 4, '5': 5, 'पांच': 5 };
    let schemeCount = null;
    const lowerMsgForCount = message.toLowerCase();
    for (const [word, num] of Object.entries(numberWords)) {
      if (lowerMsgForCount.includes(word)) { schemeCount = num; break; }
    }
    if (lowerMsgForCount.includes('all') || lowerMsgForCount.includes('सभी')) schemeCount = 10;
    else if (lowerMsgForCount.includes('best') || lowerMsgForCount.includes('top')) schemeCount = 3;

    const countInstructionHi = schemeCount ? `\n🚨 सिर्फ ${schemeCount} योजना दें।` : `\n🚨 3 योजनाएँ suggest करें।`;
    const countInstructionEn = schemeCount ? `\n🚨 Give ONLY ${schemeCount} scheme(s).` : `\n🚨 Suggest 3 schemes.`;

    // ============================================
    // SYSTEM INSTRUCTION
    // ============================================
    const systemInstruction = language === 'hi'
      ? `आप "Scheme Saathi" हैं।${profileContextHindi}${countInstructionHi}

नियम:
1. हिंदी में जवाब दें
2. हर योजना: नाम, लाभ (₹), पात्रता, आवेदन लिंक

योजनाएँ:
${JSON.stringify(schemeContext, null, 2)}`
      : `You are "Scheme Saathi".${profileContextEn}${countInstructionEn}

Rules:
1. Reply in English
2. Each scheme: Name, Benefits (₹), Eligibility, Apply Link

Schemes:
${JSON.stringify(schemeContext, null, 2)}`;

    // ============================================
    // BUILD HISTORY
    // ============================================
    const chatHistory = history
      .filter(h => h.role === 'user' || h.role === 'ai')
      .slice(-6)
      .map(h => ({
        role: h.role === 'ai' ? 'model' : 'user',
        parts: [{ text: h.text }]
      }));

    const contents = [
      ...chatHistory,
      { role: 'user', parts: [{ text: message }] }
    ];

    // ============================================
    // TRY MODELS IN FALLBACK ORDER (Streaming)
    // ============================================
    let streamResult = null;
    let lastError = null;
    let successModel = null;

    for (const modelName of MODEL_FALLBACKS) {
      console.log(`\n🔄 Trying model: ${modelName}`);
      
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemInstruction,
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 1500
        }
      });

      // Try this model up to 2 times
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          streamResult = await model.generateContentStream({ contents });
          successModel = modelName;
          console.log(`✅ Success with ${modelName} (attempt ${attempt})`);
          break;
        } catch (err) {
          lastError = err;
          console.log(`⚠️ ${modelName} attempt ${attempt} failed: ${err.message.substring(0, 100)}`);
          
          // If busy, wait before retry
          if ((err.message.includes('503') || err.message.includes('429')) && attempt < 2) {
            console.log(`⏳ Waiting 3 seconds before retry...`);
            await new Promise(r => setTimeout(r, 3000));
            continue;
          }
          break; // try next model
        }
      }

      if (streamResult) break; // got a working model
    }

    // ============================================
    // ALL MODELS FAILED — LOCAL FALLBACK
    // ============================================
    if (!streamResult) {
      console.log('❌ All models failed — using local fallback');
      
      // Find matching schemes locally
      const fallbackReply = generateLocalFallback(message, schemes, language, schemeCount);
      
      // Stream it character by character
      const chars = fallbackReply.split('');
      for (const char of chars) {
        res.write(`data: ${JSON.stringify({ chunk: char })}\n\n`);
        await new Promise(r => setTimeout(r, 10));
      }
      
      const followUps = generateFollowUps(message, fallbackReply, language);
      res.write(`data: ${JSON.stringify({ done: true, followUps, language })}\n\n`);
      return res.end();
    }

    // ============================================
    // STREAM SUCCESSFUL RESPONSE
    // ============================================
    let fullText = '';

    try {
      for await (const chunk of streamResult.stream) {
        const chunkText = chunk.text();
        if (chunkText) {
          fullText += chunkText;
          res.write(`data: ${JSON.stringify({ chunk: chunkText })}\n\n`);
        }
      }
    } catch (streamErr) {
      console.error('Streaming interrupted:', streamErr.message);
      
      // If streaming fails mid-way, use local fallback
      if (!fullText) {
        const fallbackReply = generateLocalFallback(message, schemes, language, schemeCount);
        for (const char of fallbackReply.split('')) {
          res.write(`data: ${JSON.stringify({ chunk: char })}\n\n`);
          await new Promise(r => setTimeout(r, 10));
        }
        fullText = fallbackReply;
      }
    }

    const followUps = generateFollowUps(message, fullText, language);
    res.write(`data: ${JSON.stringify({ done: true, followUps, language })}\n\n`);
    res.end();

  } catch (error) {
    console.error('AI chat error:', error);

    if (!res.headersSent) {
      res.status(500).json({ message: 'AI service error', error: error.message });
    } else {
      // Emergency fallback
      try {
        const fallback = 'क्षमा करें, अभी कुछ तकनीकी समस्या है। कृपया कुछ देर बाद पुनः प्रयास करें।';
        for (const char of fallback.split('')) {
          res.write(`data: ${JSON.stringify({ chunk: char })}\n\n`);
          await new Promise(r => setTimeout(r, 10));
        }
        res.write(`data: ${JSON.stringify({ done: true, followUps: [], language: 'hi' })}\n\n`);
      } catch (e) {}
      res.end();
    }
  }
});

// ============================================
// LOCAL FALLBACK — uses database, no AI
// ============================================
function generateLocalFallback(message, schemes, language, count) {
  const lowerMsg = message.toLowerCase();
  const limit = count || 3;

  // Filter schemes by keywords
  let matched = schemes.filter(s => {
    const text = `${s.name} ${s.nameHindi} ${s.category} ${s.benefits} ${s.benefitsHindi}`.toLowerCase();
    const keywords = lowerMsg.split(/\s+/).filter(w => w.length > 3);
    return keywords.some(kw => text.includes(kw));
  });

  if (matched.length === 0) matched = schemes;
  matched = matched.slice(0, limit);

  const intro = language === 'hi'
    ? `आपके सवाल के आधार पर ये ${matched.length} योजनाएँ उपयुक्त हैं:\n\n`
    : `Based on your question, here are ${matched.length} suitable schemes:\n\n`;

  const schemeTexts = matched.map((s, i) => {
    const name = language === 'hi' ? (s.nameHindi || s.name) : s.name;
    const benefits = language === 'hi' ? (s.benefitsHindi || s.benefits) : s.benefits;
    const link = s.officialLink || '';
    
    return `${i + 1}. **${name}**\n💰 ${benefits}\n🔗 ${link}\n`;
  }).join('\n');

  const footer = language === 'hi'
    ? '\n\n💡 और जानकारी के लिए और सवाल पूछ सकते हैं।'
    : '\n\n💡 Ask more questions for details.';

  return intro + schemeTexts + footer;
}

// ============================================
// GENERATE FOLLOW-UP QUESTIONS
// ============================================
function generateFollowUps(userMessage, aiReply, language) {
  const lowerMsg = userMessage.toLowerCase();

  const hindiBase = ['क्या मैं eligible हूं?', 'कैसे apply करें?', 'कौन से documents चाहिए?'];
  const englishBase = ['Am I eligible?', 'How to apply?', 'What documents are needed?'];
  const base = language === 'hi' ? hindiBase : englishBase;
  const contextSuggestions = [];

  if (lowerMsg.includes('kisan') || lowerMsg.includes('किसान') || lowerMsg.includes('farmer')) {
    contextSuggestions.push(language === 'hi' ? 'Kisan Credit Card kaise milega?' : 'How to get Kisan Credit Card?');
  }
  if (lowerMsg.includes('mahila') || lowerMsg.includes('महिला') || lowerMsg.includes('women')) {
    contextSuggestions.push(language === 'hi' ? 'Sukanya Samriddhi kya hai?' : 'What is Sukanya Samriddhi?');
  }
  if (lowerMsg.includes('student') || lowerMsg.includes('छात्र')) {
    contextSuggestions.push(language === 'hi' ? 'Post Matric Scholarship kaise milega?' : 'How to get Post Matric Scholarship?');
  }
  if (lowerMsg.includes('ghar') || lowerMsg.includes('घर') || lowerMsg.includes('awas')) {
    contextSuggestions.push(language === 'hi' ? 'PM Awas Yojana eligibility?' : 'PM Awas eligibility?');
  }
  if (lowerMsg.includes('business') || lowerMsg.includes('मुद्रा') || lowerMsg.includes('mudra')) {
    contextSuggestions.push(language === 'hi' ? 'Mudra loan eligibility?' : 'Mudra loan eligibility?');
  }

  const combined = [...contextSuggestions, ...base];
  const unique = [...new Set(combined)];

  return unique.slice(0, 3);
}

module.exports = router;