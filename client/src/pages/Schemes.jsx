import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Schemes() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { schemes = [], count = 0, profile = {} } = location.state || {};
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (count === 0) {
    return (
      <div className="min-h-screen bg-[#050810] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            😔 {t('noSchemesFound')}
          </h1>
          <p className="text-gray-400 mb-8">{t('adjustProfile')}</p>
          <button
            onClick={() => navigate('/profile')}
            className="px-8 py-4 bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-full cursor-pointer"
          >
            ← {t('tryAgain')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050810] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        <button 
          onClick={() => navigate('/profile')}
          className="text-gray-400 hover:text-[#00ffa3] mb-8 flex items-center gap-2 transition cursor-pointer"
        >
          ← {t('backToProfile')}
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              {count} {t('schemesFound')}
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            {t('basedOnProfile')} — {profile.age} {t('years')}, {profile.state}, ₹{profile.income}
          </p>
        </div>

        <div className="space-y-6">
          {schemes.map((scheme) => {
            const isExpanded = expandedId === scheme._id;
            
            return (
              <div
                key={scheme._id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00ffa3]/50 transition"
              >
                {/* CARD HEADER */}
                <div className="p-6">
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#00ffa3]/10 text-[#00ffa3] text-xs font-bold uppercase tracking-wider rounded-full">
                      {scheme.category}
                    </span>
                    {scheme.launchedYear && (
                      <span className="text-xs text-gray-500">
                        {scheme.launchedYear}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {language === 'hi' ? scheme.nameHindi : scheme.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {language === 'hi' ? scheme.name : scheme.nameHindi}
                  </p>

                  <p className="text-gray-300 text-base mb-4">
                    {language === 'hi' ? scheme.shortDescriptionHindi : scheme.shortDescription}
                  </p>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                    {scheme.cost && (
                      <div className="p-3 bg-[#00ffa3]/5 border border-[#00ffa3]/20 rounded-lg">
                        <p className="text-xs text-[#00ffa3] font-semibold mb-1">
                          💰 {t('cost')}
                        </p>
                        <p className="text-sm text-gray-300">
                          {language === 'hi' ? scheme.costHindi : scheme.cost}
                        </p>
                      </div>
                    )}
                    {scheme.processingTime && (
                      <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                        <p className="text-xs text-blue-400 font-semibold mb-1">
                          ⏱️ {t('processingTime')}
                        </p>
                        <p className="text-sm text-gray-300">
                          {language === 'hi' ? scheme.processingTimeHindi : scheme.processingTime}
                        </p>
                      </div>
                    )}
                    {scheme.validity && (
                      <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                        <p className="text-xs text-purple-400 font-semibold mb-1">
                          📅 {t('validity')}
                        </p>
                        <p className="text-sm text-gray-300">
                          {language === 'hi' ? scheme.validityHindi : scheme.validity}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => toggleExpand(scheme._id)}
                      className="flex-1 py-3 px-6 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:border-[#00ffa3] hover:text-[#00ffa3] transition cursor-pointer"
                    >
                      {isExpanded ? `▲ ${t('showLess')}` : `▼ ${t('showMore')}`}
                    </button>
                    <a
                      href={scheme.officialLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!scheme.officialLink) {
                          e.preventDefault();
                          alert('Official link not available yet.');
                        }
                      }}
                      className="flex-1 py-3 px-6 text-center bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-xl hover:scale-[1.02] transition cursor-pointer"
                    >
                      {t('applyNow')} →
                    </a>
                  </div>
                </div>

                {/* EXPANDED DETAILS */}
                {isExpanded && (
                  <div className="border-t border-white/10 bg-black/20 p-6 space-y-6">
                    
                    {/* Full Description */}
                    {scheme.fullDescription && (
                      <div>
                        <h4 className="text-lg font-bold text-[#00ffa3] mb-3 flex items-center gap-2">
                          📝 {language === 'hi' ? 'पूरी जानकारी' : 'About This Scheme'}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {language === 'hi' ? scheme.fullDescriptionHindi : scheme.fullDescription}
                        </p>
                      </div>
                    )}

                    {/* Who Can Apply */}
                    {scheme.whoCanApply && (
                      <div>
                        <h4 className="text-lg font-bold text-[#00ffa3] mb-3 flex items-center gap-2">
                          👥 {language === 'hi' ? 'कौन आवेदन कर सकता है' : 'Who Can Apply'}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {language === 'hi' ? scheme.whoCanApplyHindi : scheme.whoCanApply}
                        </p>
                      </div>
                    )}

                    {/* Detailed Benefits */}
                    {scheme.benefitsDetailed && scheme.benefitsDetailed.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-[#00ffa3] mb-3 flex items-center gap-2">
                          ✅ {language === 'hi' ? 'पूरे लाभ' : 'Complete Benefits'}
                        </h4>
                        <ul className="space-y-2">
                          {scheme.benefitsDetailed.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                              <span className="text-[#00ffa3] mt-1">▸</span>
                              <span>{language === 'hi' ? benefit.hi : benefit.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Not Covered */}
                    {scheme.notCovered && (
                      <div>
                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                          ❌ {language === 'hi' ? 'क्या शामिल नहीं है' : "What's Not Covered"}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {language === 'hi' ? scheme.notCoveredHindi : scheme.notCovered}
                        </p>
                      </div>
                    )}

                    {/* Documents */}
                    {scheme.documentsDetailed && scheme.documentsDetailed.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-[#00ffa3] mb-3 flex items-center gap-2">
                          📄 {language === 'hi' ? 'जरूरी दस्तावेज' : 'Required Documents'}
                        </h4>
                        <ul className="space-y-2">
                          {scheme.documentsDetailed.map((doc, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                              <span className="text-[#00ffa3] mt-1">✓</span>
                              <span>{language === 'hi' ? doc.hi : doc.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Where to Apply */}
                    {scheme.whereToApply && scheme.whereToApply.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-[#00ffa3] mb-3 flex items-center gap-2">
                          📍 {language === 'hi' ? 'कहां आवेदन करें' : 'Where to Apply'}
                        </h4>
                        <ul className="space-y-2">
                          {scheme.whereToApply.map((place, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                              <span className="text-[#00ffa3] mt-1">→</span>
                              <span>{language === 'hi' ? place.hi : place.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* FAQs */}
                    {scheme.faqs && scheme.faqs.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-[#00ffa3] mb-3 flex items-center gap-2">
                          ❓ {language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'FAQs'}
                        </h4>
                        <div className="space-y-4">
                          {scheme.faqs.map((faq, i) => (
                            <div key={i} className="p-4 bg-white/5 rounded-lg">
                              <p className="font-semibold text-white mb-2">
                                Q: {language === 'hi' ? faq.q.hi : faq.q.en}
                              </p>
                              <p className="text-gray-400 text-sm">
                                A: {language === 'hi' ? faq.a.hi : faq.a.en}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Helpline */}
                    {scheme.helpline && (
                      <div className="p-4 bg-[#00ffa3]/5 border border-[#00ffa3]/20 rounded-lg">
                        <p className="text-sm text-[#00ffa3] font-semibold mb-1">
                          📞 {language === 'hi' ? 'हेल्पलाइन' : 'Helpline'}
                        </p>
                        <p className="text-white font-bold text-lg">
                          {scheme.helpline}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Schemes;