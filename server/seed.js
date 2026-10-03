const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Scheme = require('./models/Scheme');
const schemes = require('./data/schemes');

dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Purane schemes delete karo
    await Scheme.deleteMany({});
    console.log('🗑️  Old schemes deleted');

    // Naye schemes insert karo
    const inserted = await Scheme.insertMany(schemes);
    console.log(`✅ ${inserted.length} schemes inserted successfully!`);

    console.log('');
    console.log('═══════════════════════════════════════════');
    console.log('📊 DATABASE SEEDED!');
    console.log('═══════════════════════════════════════════');
    console.log(`Total Schemes: ${inserted.length}`);
    console.log('═══════════════════════════════════════════');
    console.log('');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

seedDB();