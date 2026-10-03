import { useState } from 'react';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const currentLang = LANGUAGES[language];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full hover:border-[#00ffa3] transition"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-xs font-bold text-white">{currentLang.native}</span>
        <span className="text-xs text-gray-500">▼</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          ></div>

          <div className="absolute right-0 top-full mt-2 w-48 bg-[#0a0f1a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
            {Object.entries(LANGUAGES).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-[#00ffa3]/10 transition ${
                  language === code ? 'bg-[#00ffa3]/10 text-[#00ffa3]' : 'text-gray-300'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div>
                  <div className="font-semibold">{lang.native}</div>
                  <div className="text-xs text-gray-500">{lang.name}</div>
                </div>
                {language === code && (
                  <span className="ml-auto text-[#00ffa3]">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageSwitcher;
