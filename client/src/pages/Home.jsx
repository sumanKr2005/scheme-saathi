import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const { t, language } = useLanguage();
  const [schemeCount, setSchemeCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/schemes')
      .then(res => {
        setSchemeCount(res.data.length);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  // Animated counter
  const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (target === 0) return;
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target, duration]);
    return count;
  };

  const schemeCounter = useCounter(schemeCount);
  const statesCounter = useCounter(22);
  const usersCounter = useCounter(1000);

  const isHindi = language === 'hi';

  return (
    <div className="min-h-screen bg-[#050810] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffa3] rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7c3aed] rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#ff2e93] rounded-full blur-[150px] opacity-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ffa3]/10 border border-[#00ffa3]/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-[#00ffa3] text-xs font-bold tracking-wider uppercase">
              {isHindi ? 'भारत का पहला AI योजना नेविगेटर' : "India's First AI Scheme Navigator"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="gradient-text">Scheme Saathi</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-medium">
            {isHindi ? 'सही योजना, सही समय पर' : 'Right Scheme, Right Time'}
          </p>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            {isHindi 
              ? 'AI-आधारित प्लेटफॉर्म जो आपके लिए सही सरकारी योजनाएं खोजता है — आपकी उम्र, आय, राज्य और जरूरतों के आधार पर।'
              : 'AI-powered platform that finds the right government schemes for you — based on your age, income, state, and needs.'}
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link 
              to="/profile"
              className="px-8 py-4 bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-full hover:scale-105 transition shadow-lg shadow-[#00ffa3]/50 cursor-pointer"
            >
              🚀 {isHindi ? 'मेरी योजनाएं खोजें' : 'Find My Schemes'}
            </Link>
            <a 
              href="#how-it-works"
              className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-full hover:border-[#00ffa3] hover:text-[#00ffa3] transition cursor-pointer"
            >
              📖 {isHindi ? 'कैसे काम करता है' : 'How It Works'}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur">
              <p className="text-3xl font-bold text-[#00ffa3]">{schemeCounter}+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                {isHindi ? 'योजनाएं' : 'Schemes'}
              </p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur">
              <p className="text-3xl font-bold text-[#00d4ff]">{statesCounter}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                {isHindi ? 'राज्य' : 'States'}
              </p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur">
              <p className="text-3xl font-bold text-[#7c3aed]">{usersCounter}+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                {isHindi ? 'उपयोगकर्ता' : 'Users'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#00ffa3] text-xs font-bold tracking-wider uppercase mb-3 block">
              {isHindi ? 'विशेषताएं' : 'Features'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isHindi ? 'क्यों चुनें ' : 'Why Choose '}
              <span className="gradient-text">Scheme Saathi</span>
              ?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {isHindi 
                ? 'आपकी जरूरत के हिसाब से डिज़ाइन किया गया'
                : 'Designed for your needs'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00ffa3]/50 transition">
              <div className="w-14 h-14 bg-[#00ffa3]/10 border border-[#00ffa3]/30 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                🤖
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isHindi ? 'AI-संचालित' : 'AI-Powered'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'AI आपकी प्रोफ़ाइल के आधार पर सही योजनाएं सुझाता है'
                  : 'AI suggests the right schemes based on your profile'}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00d4ff]/50 transition">
              <div className="w-14 h-14 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isHindi ? 'सटीक पात्रता' : 'Accurate Eligibility'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'सिर्फ वही योजनाएं जिनके आप वास्तव में पात्र हैं'
                  : 'Only schemes you are truly eligible for'}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#7c3aed]/50 transition">
              <div className="w-14 h-14 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                🌐
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isHindi ? 'हिंदी + English' : 'Hindi + English'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'अपनी भाषा में पूरी जानकारी पढ़ें'
                  : 'Read complete info in your language'}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#ff2e93]/50 transition">
              <div className="w-14 h-14 bg-[#ff2e93]/10 border border-[#ff2e93]/30 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                📊
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isHindi ? 'पूरी जानकारी' : 'Complete Information'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'लाभ, दस्तावेज, आवेदन प्रक्रिया — सब कुछ'
                  : 'Benefits, documents, apply process — everything'}
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00ffa3]/50 transition">
              <div className="w-14 h-14 bg-[#00ffa3]/10 border border-[#00ffa3]/30 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isHindi ? 'मुफ्त सेवा' : 'Free Service'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? '100% मुफ्त, कोई छिपा शुल्क नहीं'
                  : '100% free, no hidden charges'}
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00d4ff]/50 transition">
              <div className="w-14 h-14 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-2xl flex items-center justify-center mb-4 text-3xl">
                📞
              </div>
              <h3 className="text-xl font-bold mb-2">
                {isHindi ? 'हेल्पलाइन सहायता' : 'Helpline Support'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'हर योजना का आधिकारिक हेल्पलाइन नंबर'
                  : 'Official helpline number for every scheme'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section id="how-it-works" className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[#00ffa3] text-xs font-bold tracking-wider uppercase mb-3 block">
              {isHindi ? 'कैसे काम करता है' : 'How It Works'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {isHindi ? 'सिर्फ 3 आसान चरण' : 'Just 3 Easy Steps'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00ffa3] to-[#00d4ff] flex items-center justify-center text-3xl font-bold text-black shadow-lg shadow-[#00ffa3]/50">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">
                {isHindi ? 'प्रोफ़ाइल भरें' : 'Fill Profile'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'अपनी उम्र, आय, राज्य और श्रेणी बताएं'
                  : 'Tell us your age, income, state and category'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-3xl font-bold text-black shadow-lg shadow-[#00d4ff]/50">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">
                {isHindi ? 'AI विश्लेषण करता है' : 'AI Analyzes'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'AI आपकी पात्रता की जांच करता है'
                  : 'AI checks your eligibility instantly'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#ff2e93] flex items-center justify-center text-3xl font-bold text-black shadow-lg shadow-[#7c3aed]/50">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">
                {isHindi ? 'योजनाएं प्राप्त करें' : 'Get Schemes'}
              </h3>
              <p className="text-gray-400 text-sm">
                {isHindi 
                  ? 'अपनी पात्र योजनाएं देखें और आवेदन करें'
                  : 'See your eligible schemes and apply'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 md:p-14 bg-gradient-to-br from-[#00ffa3]/10 via-[#00d4ff]/10 to-[#7c3aed]/10 border border-white/10 rounded-3xl text-center relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffa3] rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7c3aed] rounded-full blur-[120px] opacity-20"></div>

            <div className="relative z-10">
              <span className="text-[#00ffa3] text-xs font-bold tracking-wider uppercase mb-3 block">
                {isHindi ? 'शुरू करें' : 'Get Started'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {isHindi ? 'आज ही अपनी योजनाएं खोजें' : 'Find Your Schemes Today'}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                {isHindi 
                  ? '50+ सरकारी योजनाओं में से अपनी पात्र योजनाएं खोजें'
                  : 'Discover your eligible schemes from 50+ government programs'}
              </p>
              <Link 
                to="/profile"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-full hover:scale-105 transition shadow-lg shadow-[#00ffa3]/50 cursor-pointer"
              >
                🚀 {isHindi ? 'मुफ्त शुरू करें' : 'Start Free'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;