const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  // ===== BASIC INFO =====
  name: { type: String, required: true, trim: true },
  nameHindi: { type: String, trim: true },
  
  // ===== SHORT DESCRIPTION =====
  shortDescription: { type: String, required: true },
  shortDescriptionHindi: { type: String },
  
  // ===== FULL DESCRIPTION =====
  fullDescription: { type: String },
  fullDescriptionHindi: { type: String },
  
  // ===== WHO CAN APPLY =====
  whoCanApply: { type: String },
  whoCanApplyHindi: { type: String },
  
  // ===== DETAILED BENEFITS =====
  benefitsDetailed: [{
    en: { type: String },
    hi: { type: String }
  }],
  
  // ===== WHAT'S NOT COVERED =====
  notCovered: { type: String },
  notCoveredHindi: { type: String },
  
  // ===== COSTS =====
  cost: { type: String },
  costHindi: { type: String },
  
  // ===== VALIDITY =====
  validity: { type: String },
  validityHindi: { type: String },
  
  // ===== PROCESSING TIME =====
  processingTime: { type: String },
  processingTimeHindi: { type: String },
  
  // ===== WHERE TO APPLY =====
  whereToApply: [{
    en: { type: String },
    hi: { type: String }
  }],
  
  // ===== DOCUMENTS =====
  documentsDetailed: [{
    en: { type: String },
    hi: { type: String }
  }],
  
  // ===== FAQ =====
  faqs: [{
    q: { en: String, hi: String },
    a: { en: String, hi: String }
  }],
  
  // ===== CATEGORY & MINISTRY =====
  category: { 
    type: String,
    enum: ['agriculture', 'education', 'health', 'housing', 'business', 'women', 'pension', 'employment', 'other'],
    required: true
  },
  ministry: { type: String, default: 'Government of India' },
  
  // ===== ELIGIBILITY =====
  eligibility: {
    minAge: { type: Number, default: null },
    maxAge: { type: Number, default: null },
    maxIncome: { type: Number, default: null },
    gender: { type: String, enum: ['male', 'female', 'other', 'any'], default: 'any' },
    category: [{ type: String }],
    isFarmer: { type: Boolean, default: false },
    isStudent: { type: Boolean, default: false },
    isBPL: { type: Boolean, default: false },
    hasBusiness: { type: Boolean, default: false },
    states: [{ type: String }],
    other: { type: String, default: '' }
  },
  
  // ===== CONTACT & LINKS =====
  officialLink: { type: String },
  helpline: { type: String },
  launchedYear: { type: Number },
  
  // ===== STATUS =====
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Scheme', schemeSchema);