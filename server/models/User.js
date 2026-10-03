const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  profile: {
    age: { type: Number, default: null },
    gender: { type: String, enum: ['male', 'female', 'other', null], default: null },
    state: { type: String, default: null },
    district: { type: String, default: null },
    income: { type: Number, default: null },
    category: { 
      type: String, 
      enum: ['general', 'obc', 'sc', 'st', 'ews', null], 
      default: null 
    },
    occupation: { type: String, default: null },
    isFarmer: { type: Boolean, default: false },
    isStudent: { type: Boolean, default: false },
    hasBusiness: { type: Boolean, default: false }
  },
  savedSchemes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scheme'
  }],
  appliedSchemes: [{
    scheme: { type: mongoose.Schema.Types.ObjectId, ref: 'Scheme' },
    appliedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);