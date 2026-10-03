import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { language } = useLanguage();
  const isHindi = language === 'hi';

  return (
    <footer className="border-t border-white/10 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00ffa3] to-[#7c3aed] flex items-center justify-center font-bold text-black">
                SS
              </div>
              <span className="text-xl font-bold text-white">
                Scheme<span className="text-[#00ffa3]">Saathi</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {isHindi 
                ? 'AI-संचालित सरकारी योजना नेविगेटर — सही योजना, सही समय पर।'
                : 'AI-powered government scheme navigator — right scheme, right time.'}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              {isHindi ? 'नेविगेट' : 'Navigate'}
            </h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-gray-400 hover:text-[#00ffa3] transition">
                {isHindi ? 'होम' : 'Home'}
              </Link>
              <Link to="/profile" className="block text-gray-400 hover:text-[#00ffa3] transition">
                {isHindi ? 'योजनाएं खोजें' : 'Find Schemes'}
              </Link>
              <a href="#how-it-works" className="block text-gray-400 hover:text-[#00ffa3] transition">
                {isHindi ? 'कैसे काम करता है' : 'How It Works'}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              {isHindi ? 'संपर्क' : 'Contact'}
            </h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:sumankumarkulna04@gmail.com" className="block text-gray-400 hover:text-[#00ffa3] transition">
                📧 sumankumarkulna04@gmail.com
              </a>
              <a href="https://github.com/sumanKr2005" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[#00ffa3] transition">
                🐙 GitHub
              </a>
              <a href="https://linkedin.com/in/suman-kumar-munu-07baa82b9" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[#00ffa3] transition">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Scheme Saathi · Built by Suman Kumar Munu
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;