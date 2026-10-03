import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { language } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHindi = language === 'hi';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050810]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00ffa3] to-[#7c3aed] flex items-center justify-center font-bold text-black text-sm">
            SS
          </div>
          <span className="text-xl font-bold text-white">
            Scheme<span className="text-[#00ffa3]">Saathi</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-400 hover:text-[#00ffa3] transition text-sm font-medium">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <Link to="/profile" className="text-gray-400 hover:text-[#00ffa3] transition text-sm font-medium">
            {isHindi ? 'खोजें' : 'Find'}
          </Link>
          <Link to="/chat" className="text-gray-400 hover:text-[#00ffa3] transition text-sm font-medium">
            🤖 {isHindi ? 'AI चैट' : 'AI Chat'}
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />

          <Link
            to="/profile"
            className="px-4 py-2 bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-full text-sm hover:scale-105 transition shadow-lg shadow-[#00ffa3]/30"
          >
            {isHindi ? 'शुरू करें' : 'Get Started'}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050810] p-6 space-y-4">
          <Link to="/" className="block text-gray-300 hover:text-[#00ffa3] font-medium py-2">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <Link to="/profile" className="block text-gray-300 hover:text-[#00ffa3] font-medium py-2">
            {isHindi ? 'खोजें' : 'Find'}
          </Link>
          <Link to="/chat" className="block text-gray-300 hover:text-[#00ffa3] font-medium py-2">
            🤖 {isHindi ? 'AI चैट' : 'AI Chat'}
          </Link>

          <div className="pt-2">
            <LanguageSwitcher />
          </div>

          <Link
            to="/profile"
            className="block px-4 py-2 bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-full text-center"
          >
            {isHindi ? 'शुरू करें' : 'Get Started'}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;