import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Chat() {
  const { language, toggleLanguage } = useLanguage();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'नमस्ते! मैं Scheme Saathi AI हूँ। आप मुझसे किसी भी सरकारी योजना के बारे में पूछ सकते हैं।',
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [followUps, setFollowUps] = useState([]);
  const recognitionRef = useRef(null);

  // Auto-scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        role: 'ai',
        text: language === 'hi'
          ? 'नमस्ते! मैं Scheme Saathi AI हूँ। आप मुझसे किसी भी सरकारी योजना के बारे में पूछ सकते हैं। आप हिंदी या English में पूछ सकते हैं।'
          : 'Hello! I am Scheme Saathi AI. You can ask me about any government scheme. You can ask in Hindi or English.',
      }
    ]);
    setFollowUps([]);
  }, [language]);

  // Voice input setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'hi' ? 'hi-IN' : 'en-IN';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        inputRef.current?.focus();
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [language]);

  // Text-to-speech
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('Your browser does not support voice output.');
      return;
    }

    window.speechSynthesis.cancel();

    const cleanText = text
      .replace(/[*#_`]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\n+/g, '. ');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const hindiRegex = /[\u0900-\u097F]/;
    utterance.lang = hindiRegex.test(cleanText) ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Your browser does not support voice input. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Send message
  const handleSend = async (e, customMessage = null) => {
    e?.preventDefault();

    const userMessage = customMessage || input.trim();
    if (!userMessage || loading) return;

    stopSpeaking();

    const msgLang = language;

    setInput('');
    setFollowUps([]);
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      // Add empty AI message (will fill with streaming)
      setMessages(prev => [...prev, {
        role: 'ai',
        text: '',
        streaming: true
      }]);

      // Send last 6 messages as history for memory
      const history = messages.slice(-6).map(m => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch(`${API_URL}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          language: msgLang,
          history
        })
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.chunk) {
                fullText += data.chunk;
                setMessages(prev => {
                  const updated = [...prev];
                  const lastIdx = updated.length - 1;
                  updated[lastIdx] = { ...updated[lastIdx], text: fullText };
                  return updated;
                });
              }

              if (data.done) {
                setFollowUps(data.followUps || []);
                setMessages(prev => {
                  const updated = [...prev];
                  const lastIdx = updated.length - 1;
                  updated[lastIdx] = { ...updated[lastIdx], streaming: false };
                  return updated;
                });

                if (autoSpeak) {
                  setTimeout(() => speakText(fullText), 300);
                }
              }

              if (data.error) {
                throw new Error(data.error);
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      const errorMsg = msgLang === 'hi'
        ? 'क्षमा करें, AI सेवा अभी व्यस्त है। कृपया कुछ देर बाद पुनः प्रयास करें।'
        : 'Sorry, AI service is busy. Please try again in a moment.';

      setMessages(prev => [...prev, {
        role: 'ai',
        text: errorMsg,
        error: true
      }]);
    }

    setLoading(false);
  };

  // Suggested questions
  const suggestedQuestions = language === 'hi' ? [
    { icon: '🌾', text: 'किसान के लिए कौनसी योजनाएं हैं?' },
    { icon: '👩', text: 'महिलाओं के लिए क्या मिलेगा?' },
    { icon: '🎓', text: 'छात्रों के लिए योजनाएं बताओ' },
    { icon: '🏠', text: 'घर बनाने के लिए क्या मिलेगा?' },
    { icon: '💼', text: 'बिजनेस के लिए क्या विकल्प हैं?' },
    { icon: '💰', text: 'Atal Pension Yojana क्या है?' },
  ] : [
    { icon: '🌾', text: 'What schemes are for farmers?' },
    { icon: '👩', text: 'What schemes are for women?' },
    { icon: '🎓', text: 'Tell me student schemes' },
    { icon: '🏠', text: 'Schemes for housing?' },
    { icon: '💼', text: 'Options for business?' },
    { icon: '💰', text: 'What is Atal Pension Yojana?' },
  ];

  return (
    <div className="min-h-screen bg-[#050810] flex flex-col">
      <Navbar />

      <div className="flex-1 pt-24 pb-6 px-4">
        <div className="max-w-4xl mx-auto h-[calc(100vh-180px)] flex flex-col">

          {/* Header */}
          <div className="text-center mb-3">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">
                {language === 'hi' ? 'AI से पूछें' : 'Ask AI'}
              </span>
              <span className="ml-2 text-xl">🤖</span>
            </h1>
            <p className="text-gray-400 text-sm">
              {language === 'hi'
                ? 'हिंदी में पूछें — AI हिंदी में जवाब देगा'
                : 'Ask in English — AI will reply in English'}
            </p>
          </div>

          {/* Language + Voice toggles */}
          <div className="flex justify-center gap-2 mb-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-full border transition ${
                language === 'hi'
                  ? 'bg-orange-500/10 border-orange-500/40 text-orange-400'
                  : 'bg-blue-500/10 border-blue-500/40 text-blue-400'
              }`}
            >
              <span>{language === 'hi' ? '🇮🇳' : '🇬🇧'}</span>
              <span>{language === 'hi' ? 'हिंदी AI' : 'English AI'}</span>
            </button>

            <button
              onClick={() => setAutoSpeak(!autoSpeak)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-full border transition ${
                autoSpeak
                  ? 'bg-[#00ffa3]/10 border-[#00ffa3]/40 text-[#00ffa3]'
                  : 'bg-white/5 border-white/10 text-gray-400'
              }`}
            >
              {autoSpeak ? '🔊' : '🔇'}
              <span>{autoSpeak ? 'Voice ON' : 'Voice OFF'}</span>
            </button>
          </div>

          {/* Chat Box */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col mb-3">

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black'
                        : msg.error
                          ? 'bg-red-500/10 border border-red-500/30 text-red-300'
                          : 'bg-white/5 border border-white/10 text-gray-200'
                    }`}
                  >
                    {msg.role === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-[#00ffa3]">
                          🤖 Scheme Saathi AI
                        </span>
                        {!msg.error && (
                          <button
                            onClick={() => speakText(msg.text)}
                            className="text-xs text-gray-400 hover:text-[#00ffa3] transition"
                            title="Speak"
                          >
                            🔊
                          </button>
                        )}
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {msg.text}
                      {msg.streaming && (
                        <span className="inline-block w-2 h-4 bg-[#00ffa3] ml-1 animate-pulse"></span>
                      )}
                   </p>
                  </div>
                </div>
              ))}

              {/* Loading */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#00ffa3] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#00ffa3] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                      <div className="w-2 h-2 bg-[#00ffa3] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      <span className="text-xs text-gray-400 ml-2">
                        {language === 'hi' ? 'AI सोच रहा है...' : 'AI is thinking...'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="border-t border-white/10 p-3">
              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  disabled={loading}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition ${
                    isListening
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:border-[#00ffa3] hover:text-[#00ffa3]'
                  } disabled:opacity-50`}
                  title={isListening ? 'Stop listening' : 'Speak your question'}
                >
                  {isListening ? '⏹' : '🎤'}
                </button>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    isListening
                      ? (language === 'hi' ? '🎤 सुन रहा हूँ... बोलिए' : '🎤 Listening... Speak')
                      : (language === 'hi' ? 'सवाल लिखें या 🎤 दबाएं...' : 'Type or press 🎤...')
                  }
                  disabled={loading}
                  className={`flex-1 px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition disabled:opacity-50 ${
                    isListening ? 'border-red-500' : 'border-white/10 focus:border-[#00ffa3]'
                  }`}
                />

                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-xl hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? '...' : '➤'}
                </button>
              </div>

              {isListening && (
                <p className="text-xs text-red-400 mt-2 text-center animate-pulse">
                  🎤 {language === 'hi' ? 'बोलिए... सुन रहा हूँ' : 'Speak now... listening'}
                </p>
              )}

              {isSpeaking && (
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-xs text-[#00ffa3]">
                    🔊 {language === 'hi' ? 'AI बोल रहा है...' : 'AI is speaking...'}
                  </span>
                  <button
                    type="button"
                    onClick={stopSpeaking}
                    className="text-xs text-red-400 hover:text-red-300 underline"
                  >
                    Stop
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Suggested Questions — only initially */}
          {messages.length <= 1 && (
            <div>
              <p className="text-xs text-gray-500 mb-2 text-center">
                💡 {language === 'hi' ? 'सुझाए गए सवाल — tap करें:' : 'Suggested questions — tap:'}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(null, q.text)}
                    className="px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-[#00ffa3] hover:text-[#00ffa3] hover:bg-[#00ffa3]/5 transition"
                  >
                    {q.icon} {q.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Follow-up Chips — after each AI reply */}
          {followUps.length > 0 && messages.length > 1 && (
            <div className="mt-2">
              <p className="text-xs text-gray-500 mb-2 text-center">
                🎯 {language === 'hi' ? 'आगे पूछें:' : 'Ask next:'}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {followUps.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(null, q)}
                    className="px-3 py-2 text-xs bg-gradient-to-r from-[#00ffa3]/10 to-[#00d4ff]/10 border border-[#00ffa3]/30 rounded-full text-[#00ffa3] hover:border-[#00ffa3] hover:bg-[#00ffa3]/20 transition"
                  >
                    💬 {q}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Chat;