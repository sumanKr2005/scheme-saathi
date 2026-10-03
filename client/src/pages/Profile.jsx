import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

function Profile() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    age: '',
    gender: '',
    state: '',
    income: '',
    category: '',
    occupation: '',
    isFarmer: false,
    isStudent: false,
    hasBusiness: false,
  });

  const states = [
    'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha', 'Punjab',
    'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/schemes/eligibility',
        { profile }
      );

      navigate('/schemes', { 
        state: { 
          schemes: response.data.schemes,
          count: response.data.count,
          profile 
        } 
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error finding schemes. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050810] py-12 px-4 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ffa3] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7c3aed] rounded-full blur-[150px] opacity-10"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        <button 
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-[#00ffa3] mb-8 flex items-center gap-2 transition cursor-pointer"
        >
          ← {t('backHome')}
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('profileTitle')}</span>
          </h1>
          <p className="text-gray-400 text-lg">
            {t('profileSubtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t('age')} *
              </label>
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                required
                min="1"
                max="120"
                placeholder={t('agePlaceholder')}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#00ffa3] focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t('gender')} *
              </label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#00ffa3] focus:outline-none transition"
              >
                <option value="">{t('selectGender')}</option>
                <option value="male">{t('male')}</option>
                <option value="female">{t('female')}</option>
                <option value="other">{t('other')}</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t('state')} *
              </label>
              <select
                name="state"
                value={profile.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#00ffa3] focus:outline-none transition"
              >
                <option value="">{t('selectState')}</option>
                {states.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t('income')} *
              </label>
              <input
                type="number"
                name="income"
                value={profile.income}
                onChange={handleChange}
                required
                min="0"
                placeholder={t('incomePlaceholder')}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#00ffa3] focus:outline-none transition"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t('category')} *
              </label>
              <select
                name="category"
                value={profile.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#00ffa3] focus:outline-none transition"
              >
                <option value="">{t('selectCategory')}</option>
                <option value="general">{t('general')}</option>
                <option value="obc">{t('obc')}</option>
                <option value="sc">{t('sc')}</option>
                <option value="st">{t('st')}</option>
                <option value="ews">{t('ews')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                {t('occupation')}
              </label>
              <input
                type="text"
                name="occupation"
                value={profile.occupation}
                onChange={handleChange}
                placeholder={t('occupationPlaceholder')}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#00ffa3] focus:outline-none transition"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              {t('additionalInfo')}
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="isFarmer"
                  checked={profile.isFarmer}
                  onChange={handleChange}
                  className="w-5 h-5 accent-[#00ffa3]"
                />
                <span className="text-gray-300">🌾 {t('iAmFarmer')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="isStudent"
                  checked={profile.isStudent}
                  onChange={handleChange}
                  className="w-5 h-5 accent-[#00ffa3]"
                />
                <span className="text-gray-300">🎓 {t('iAmStudent')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="hasBusiness"
                  checked={profile.hasBusiness}
                  onChange={handleChange}
                  className="w-5 h-5 accent-[#00ffa3]"
                />
                <span className="text-gray-300">💼 {t('iHaveBusiness')}</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-[#00ffa3] to-[#00d4ff] text-black font-bold rounded-xl hover:scale-[1.02] transition shadow-lg shadow-[#00ffa3]/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? `🔍 ${t('findingSchemes')}` : `🚀 ${t('findMySchemes')}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;