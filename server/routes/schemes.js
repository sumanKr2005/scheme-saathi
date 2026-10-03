const express = require('express');
const Scheme = require('../models/Scheme');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// ============================================
// GET /api/schemes — Get All Schemes
// ============================================
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;

    let query = { isActive: true };

    if (category && category !== 'all') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { nameHindi: { $regex: search, $options: 'i' } }
      ];
    }

    const schemes = await Scheme.find(query).sort({ createdAt: -1 });
    res.json(schemes);
  } catch (error) {
    console.error('Get schemes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ============================================
// GET /api/schemes/:id — Single Scheme
// ============================================
router.get('/:id', async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);
    if (!scheme) {
      return res.status(404).json({ message: 'Scheme not found' });
    }
    res.json(scheme);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ============================================
// POST /api/schemes/eligibility — Check Eligibility
// ============================================
router.post('/eligibility', async (req, res) => {
  try {
    const { profile } = req.body;

    if (!profile) {
      return res.status(400).json({ message: 'Profile is required' });
    }

    const allSchemes = await Scheme.find({ isActive: true });
    const eligible = [];

    for (const scheme of allSchemes) {
      let isEligible = true;
      const elig = scheme.eligibility;

      // Age check
      if (elig.minAge && profile.age && profile.age < elig.minAge) isEligible = false;
      if (elig.maxAge && profile.age && profile.age > elig.maxAge) isEligible = false;

      // Income check
      if (elig.maxIncome && profile.income && profile.income > elig.maxIncome) isEligible = false;

      // Gender check
      if (elig.gender && elig.gender !== 'any' && profile.gender && profile.gender !== elig.gender) {
        isEligible = false;
      }

      // Category check
      if (elig.category && elig.category.length > 0 && profile.category) {
        if (!elig.category.includes(profile.category)) isEligible = false;
      }

      // Farmer check
      if (elig.isFarmer && !profile.isFarmer) isEligible = false;

      // Student check
      if (elig.isStudent && !profile.isStudent) isEligible = false;

      // Business check
      if (elig.hasBusiness && !profile.hasBusiness) isEligible = false;

      // State check
      if (elig.states && elig.states.length > 0 && profile.state) {
        if (!elig.states.includes(profile.state)) isEligible = false;
      }

      if (isEligible) eligible.push(scheme);
    }

    res.json({
      count: eligible.length,
      schemes: eligible
    });
  } catch (error) {
    console.error('Eligibility error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ============================================
// POST /api/schemes/save/:id — Save Scheme
// ============================================
router.post('/save/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const schemeId = req.params.id;
    const index = user.savedSchemes.indexOf(schemeId);

    if (index > -1) {
      user.savedSchemes.splice(index, 1);
    } else {
      user.savedSchemes.push(schemeId);
    }

    await user.save();
    res.json({ savedSchemes: user.savedSchemes });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;