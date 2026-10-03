// Full Detailed Government Schemes Data
const schemes = [
  // ========== HEALTH ==========
  {
    name: "Ayushman Bharat PM-JAY",
    nameHindi: "आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना",
    shortDescription: "Free health insurance of ₹5 lakh per family per year for poor families.",
    shortDescriptionHindi: "गरीब परिवारों को हर साल ₹5 लाख का मुफ्त स्वास्थ्य बीमा।",
    fullDescription: "Ayushman Bharat PM-JAY is the world's largest health insurance scheme launched in 2018. It provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization. The scheme is completely cashless and paperless at empanelled hospitals across India. It covers all pre-existing diseases from day one, hospitalization expenses, ICU charges, medicines, diagnostic tests, doctor consultation, and expenses 3 days before + 15 days after hospitalization.",
    fullDescriptionHindi: "आयुष्मान भारत PM-JAY दुनिया की सबसे बड़ी स्वास्थ्य बीमा योजना है जो 2018 में शुरू की गई थी। यह हर परिवार को हर साल ₹5 लाख तक का स्वास्थ्य बीमा देती है। योजना पूरी तरह से कैशलेस है। इसमें पहले से मौजूद बीमारियां, अस्पताल में भर्ती का खर्च, ICU चार्ज, दवाइयां, टेस्ट, डॉक्टर की फीस, भर्ती से 3 दिन पहले और 15 दिन बाद तक का खर्च शामिल है।",
    whoCanApply: "Families included in SECC 2011 data — rural families without a pucca house, no adult member aged 16-59, female-headed households, SC/ST families, landless families.",
    whoCanApplyHindi: "SECC 2011 डेटा में शामिल परिवार — बिना पक्के घर वाले, 16-59 साल का कोई वयस्क सदस्य नहीं, महिला मुखिया वाले परिवार, SC/ST परिवार, बिना जमीन वाले परिवार।",
    benefitsDetailed: [
      { en: "₹5,00,000 per family per year for hospitalization", hi: "अस्पताल में भर्ती के लिए हर परिवार को हर साल ₹5,00,000" },
      { en: "Completely cashless — no payment at hospital", hi: "पूरी तरह से कैशलेस — अस्पताल में कोई भुगतान नहीं" },
      { en: "Covers all pre-existing diseases from day 1", hi: "पहले से मौजूद सभी बीमारियां पहले दिन से शामिल" },
      { en: "Includes medicines, tests, ICU, doctor fees", hi: "दवाइयां, टेस्ट, ICU, डॉक्टर की फीस शामिल" },
      { en: "3 days before + 15 days after hospitalization covered", hi: "भर्ती से 3 दिन पहले और 15 दिन बाद तक शामिल" },
      { en: "Covers both government AND private hospitals", hi: "सरकारी और प्राइवेट दोनों अस्पताल शामिल" }
    ],
    notCovered: "OPD consultations, medicines bought outside hospital, cosmetic surgery, fertility treatment.",
    notCoveredHindi: "OPD परामर्श, अस्पताल के बाहर खरीदी गई दवाइयां, कॉस्मेटिक सर्जरी, प्रजनन उपचार।",
    cost: "FREE — No premium, no registration fee",
    costHindi: "मुफ्त — कोई प्रीमियम नहीं, कोई रजिस्ट्रेशन फीस नहीं",
    validity: "Lifetime coverage — auto renewal",
    validityHindi: "आजीवन कवरेज — स्वचालित नवीनीकरण",
    processingTime: "Instant — e-card issued immediately",
    processingTimeHindi: "तत्काल — ई-कार्ड तुरंत जारी",
    whereToApply: [
      { en: "Online: pmjay.gov.in", hi: "ऑनलाइन: pmjay.gov.in" },
      { en: "Visit any empanelled hospital", hi: "किसी भी सूचीबद्ध अस्पताल में जाएं" },
      { en: "Call helpline: 14555", hi: "हेल्पलाइन पर कॉल करें: 14555" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Ration Card", hi: "राशन कार्ड" },
      { en: "Income Certificate", hi: "आय प्रमाण पत्र" }
    ],
    faqs: [
      { q: { en: "Is the scheme really free?", hi: "क्या योजना वाकई मुफ्त है?" }, a: { en: "Yes, completely free. No hidden fees.", hi: "हां, पूरी तरह मुफ्त। कोई छिपा शुल्क नहीं।" } },
      { q: { en: "Can I use it in any hospital?", hi: "क्या मैं किसी भी अस्पताल में उपयोग कर सकता हूं?" }, a: { en: "Only at empanelled hospitals.", hi: "सिर्फ सूचीबद्ध अस्पतालों में।" } }
    ],
    category: "health",
    ministry: "Ministry of Health & Family Welfare",
    eligibility: { isBPL: true, maxIncome: 300000, gender: "any", states: [] },
    officialLink: "https://pmjay.gov.in",
    helpline: "14555",
    launchedYear: 2018
  },
  
  // ========== AGRICULTURE ==========
  {
    name: "PM Kisan Samman Nidhi",
    nameHindi: "प्रधानमंत्री किसान सम्मान निधि",
    shortDescription: "Direct cash support of ₹6,000 per year to small and marginal farmers.",
    shortDescriptionHindi: "छोटे और सीमांत किसानों को हर साल ₹6,000 की सीधी नकद सहायता।",
    fullDescription: "PM Kisan Samman Nidhi was launched in 2019 to provide direct income support to small and marginal farmer families. ₹6,000 per year is transferred directly into bank accounts in three equal installments of ₹2,000 each — every four months. The scheme covers all landholding farmer families who own cultivable land up to 2 hectares. Money is transferred via DBT — no middleman involved.",
    fullDescriptionHindi: "प्रधानमंत्री किसान सम्मान निधि 2019 में शुरू की गई थी। इस योजना के तहत ₹6,000 प्रति वर्ष तीन समान किस्तों में (₹2,000 प्रत्येक) किसानों के बैंक खातों में सीधे स्थानांतरित किए जाते हैं। यह योजना उन किसान परिवारों को कवर करती है जिनके पास 2 हेक्टेयर तक खेती योग्य भूमि है।",
    whoCanApply: "All landholding farmer families with cultivable land up to 2 hectares. Small and marginal farmers.",
    whoCanApplyHindi: "2 हेक्टेयर तक खेती योग्य भूमि वाले सभी किसान परिवार। छोटे और सीमांत किसान।",
    benefitsDetailed: [
      { en: "₹6,000 per year — direct to bank account", hi: "हर साल ₹6,000 — सीधे बैंक खाते में" },
      { en: "Paid in 3 installments of ₹2,000", hi: "3 किस्तों में ₹2,000" },
      { en: "No middleman — Direct Benefit Transfer", hi: "कोई बिचौलिया नहीं — सीधा हस्तांतरण" },
      { en: "Can be used for seeds, fertilizers, equipment", hi: "बीज, खाद, उपकरण के लिए उपयोग" }
    ],
    notCovered: "Farmers with more than 2 hectares, income tax payers, government employees.",
    notCoveredHindi: "2 हेक्टेयर से अधिक जमीन वाले, आयकर दाता, सरकारी कर्मचारी।",
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई आवेदन शुल्क नहीं",
    validity: "Ongoing",
    validityHindi: "जारी",
    processingTime: "30-45 days after application",
    processingTimeHindi: "आवेदन के 30-45 दिन बाद",
    whereToApply: [
      { en: "Online: pmkisan.gov.in", hi: "ऑनलाइन: pmkisan.gov.in" },
      { en: "Visit nearest CSC center", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Call helpline: 155261", hi: "हेल्पलाइन: 155261" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Land Records", hi: "भूमि रिकॉर्ड" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" }
    ],
    faqs: [
      { q: { en: "How do I check my payment?", hi: "मैं अपना भुगतान कैसे जांचूं?" }, a: { en: "Check on pmkisan.gov.in", hi: "pmkisan.gov.in पर जांचें" } }
    ],
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://pmkisan.gov.in",
    helpline: "155261",
    launchedYear: 2019
  },
  
  // ========== WOMEN ==========
  {
    name: "Ujjwala Yojana",
    nameHindi: "प्रधानमंत्री उज्ज्वला योजना",
    shortDescription: "Free LPG gas connection for women from poor families.",
    shortDescriptionHindi: "गरीब परिवारों की महिलाओं को मुफ्त LPG गैस कनेक्शन।",
    fullDescription: "Pradhan Mantri Ujjwala Yojana was launched in 2016 to provide clean cooking fuel (LPG) to women from BPL families. The scheme provides a free LPG connection with financial assistance of ₹1,600 for first refill and stove. It aims to reduce indoor air pollution and health issues caused by traditional cooking methods.",
    fullDescriptionHindi: "प्रधानमंत्री उज्ज्वला योजना 2016 में शुरू की गई थी जो BPL परिवारों की महिलाओं को स्वच्छ खाना पकाने का ईंधन (LPG) प्रदान करती है। योजना में मुफ्त LPG कनेक्शन और पहली रिफिल और चूल्हे के लिए ₹1,600 की सहायता मिलती है।",
    whoCanApply: "Adult women (18+) from BPL families who don't have LPG connection. Must have Aadhaar and BPL card.",
    whoCanApplyHindi: "BPL परिवारों की वयस्क महिलाएं (18+) जिनके पास LPG कनेक्शन नहीं है। आधार और BPL कार्ड जरूरी।",
    benefitsDetailed: [
      { en: "FREE LPG gas connection", hi: "मुफ्त LPG गैस कनेक्शन" },
      { en: "₹1,600 assistance for first refill + stove", hi: "पहली रिफिल + चूल्हे के लिए ₹1,600" },
      { en: "Clean cooking fuel — better health", hi: "स्वच्छ ईंधन — बेहतर स्वास्थ्य" },
      { en: "Subsidized refills", hi: "सब्सिडी वाली रिफिल" }
    ],
    notCovered: "Women who already have LPG connection.",
    notCoveredHindi: "जिन महिलाओं के पास पहले से LPG कनेक्शन है।",
    cost: "FREE connection — subsidized refills",
    costHindi: "मुफ्त कनेक्शन — सब्सिडी रिफिल",
    validity: "One-time connection",
    validityHindi: "एक बार कनेक्शन",
    processingTime: "7-15 days",
    processingTimeHindi: "7-15 दिन",
    whereToApply: [
      { en: "Online: pmuy.gov.in", hi: "ऑनलाइन: pmuy.gov.in" },
      { en: "Visit nearest LPG distributor", hi: "नजदीकी LPG वितरक" },
      { en: "Call helpline: 1800-266-6696", hi: "हेल्पलाइन: 1800-266-6696" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "BPL Ration Card", hi: "BPL राशन कार्ड" },
      { en: "Bank Account Passbook", hi: "बैंक पासबुक" }
    ],
    faqs: [
      { q: { en: "Can non-BPL apply?", hi: "क्या गैर-BPL आवेदन कर सकते हैं?" }, a: { en: "No, only BPL women are eligible.", hi: "नहीं, सिर्फ BPL महिलाएं पात्र हैं।" } }
    ],
    category: "women",
    ministry: "Ministry of Petroleum & Natural Gas",
    eligibility: { minAge: 18, gender: "female", isBPL: true, category: [], states: [] },
    officialLink: "https://pmuy.gov.in",
    helpline: "1800-266-6696",
    launchedYear: 2016
  },
  
  // ========== BUSINESS ==========
  {
    name: "PM Mudra Yojana",
    nameHindi: "प्रधानमंत्री मुद्रा योजना",
    shortDescription: "Collateral-free business loans up to ₹10 lakh for small business owners.",
    shortDescriptionHindi: "छोटे व्यवसायियों के लिए ₹10 लाख तक का बिना गारंटी ऋण।",
    fullDescription: "Pradhan Mantri Mudra Yojana was launched in 2015 to provide financial support to micro and small enterprises. Banks provide collateral-free loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. The loans are categorized into three types: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).",
    fullDescriptionHindi: "प्रधानमंत्री मुद्रा योजना 2015 में सूक्ष्म और लघु उद्यमों को वित्तीय सहायता के लिए शुरू की गई थी। बैंक ₹10 लाख तक का बिना गारंटी ऋण प्रदान करते हैं। ऋण तीन प्रकार: शिशु (₹50,000 तक), किशोर (₹50,001 से ₹5 लाख), और तरुण (₹5 लाख से ₹10 लाख)।",
    whoCanApply: "Small business owners, shopkeepers, artisans, fruit/vegetable vendors, small manufacturers. Must be a non-default borrower.",
    whoCanApplyHindi: "छोटे व्यवसायी, दुकानदार, कारीगर, फल/सब्जी विक्रेता, छोटे निर्माता। डिफ़ॉल्ट ऋणी नहीं होना चाहिए।",
    benefitsDetailed: [
      { en: "Loans up to ₹10 lakh without collateral", hi: "बिना गारंटी के ₹10 लाख तक" },
      { en: "Low interest rates (8-12%)", hi: "कम ब्याज दरें (8-12%)" },
      { en: "No processing fee for Shishu loans", hi: "शिशु ऋण पर कोई शुल्क नहीं" },
      { en: "Women get special benefits", hi: "महिलाओं को विशेष लाभ" }
    ],
    notCovered: "Corporate entities, large businesses, agricultural activities.",
    notCoveredHindi: "कॉर्पोरेट संस्थाएं, बड़े व्यवसाय, कृषि गतिविधियां।",
    cost: "No processing fee for Shishu. Interest 8-12% p.a.",
    costHindi: "शिशु के लिए कोई शुल्क नहीं। ब्याज 8-12% वार्षिक।",
    validity: "Loan tenure up to 5 years",
    validityHindi: "ऋण अवधि 5 साल तक",
    processingTime: "7-15 working days",
    processingTimeHindi: "7-15 कार्य दिवस",
    whereToApply: [
      { en: "Online: mudra.org.in", hi: "ऑनलाइन: mudra.org.in" },
      { en: "Visit any bank branch", hi: "किसी भी बैंक शाखा में जाएं" },
      { en: "Visit nearest CSC center", hi: "नजदीकी CSC केंद्र" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "PAN Card", hi: "पैन कार्ड" },
      { en: "Business Plan", hi: "व्यवसाय योजना" },
      { en: "Bank Statements", hi: "बैंक स्टेटमेंट" }
    ],
    faqs: [
      { q: { en: "Do I need collateral?", hi: "क्या गारंटी चाहिए?" }, a: { en: "No, completely collateral-free.", hi: "नहीं, पूरी तरह बिना गारंटी।" } }
    ],
    category: "business",
    ministry: "Ministry of Finance",
    eligibility: { minAge: 18, hasBusiness: true, gender: "any", category: [], states: [] },
    officialLink: "https://www.mudra.org.in",
    helpline: "1800-180-1111",
    launchedYear: 2015
  },
  
  // ========== WOMEN ==========
  {
    name: "Sukanya Samriddhi Yojana",
    nameHindi: "सुकन्या समृद्धि योजना",
    shortDescription: "High-interest savings scheme for girl child with tax benefits.",
    shortDescriptionHindi: "बालिका के लिए उच्च ब्याज बचत योजना, कर लाभ के साथ।",
    fullDescription: "Sukanya Samriddhi Yojana was launched in 2015 as part of Beti Bachao Beti Padhao. It's a small deposit scheme for the girl child where parents can open an account for a girl below 10 years. Offers one of the highest interest rates (8.2% per annum). Deposits for 15 years, matures after 21 years. Contributions, interest, and maturity all tax-free.",
    fullDescriptionHindi: "सुकन्या समृद्धि योजना 2015 में बेटी बचाओ बेटी पढ़ाओ के हिस्से के रूप में शुरू की गई। यह बालिका के लिए बचत योजना है जहां 10 साल से कम उम्र की बालिका के नाम पर खाता खुलता है। सबसे अधिक ब्याज दर (8.2% प्रति वर्ष)। 15 साल तक जमा, 21 साल बाद परिपक्व। सब कर-मुक्त।",
    whoCanApply: "Parents/guardians of a girl child below 10 years. Maximum 2 accounts per family.",
    whoCanApplyHindi: "10 साल से कम उम्र की बालिका के माता-पिता/अभिभावक। प्रति परिवार अधिकतम 2 खाते।",
    benefitsDetailed: [
      { en: "Highest interest — 8.2% per annum", hi: "सबसे अधिक ब्याज — 8.2% प्रति वर्ष" },
      { en: "Tax-free — EEE status", hi: "कर-मुक्त — EEE स्थिति" },
      { en: "Deposit ₹250 to ₹1.5 lakh per year", hi: "हर साल ₹250 से ₹1.5 लाख जमा" },
      { en: "Partial withdrawal for education after 18", hi: "18 के बाद शिक्षा के लिए आंशिक निकासी" }
    ],
    notCovered: "More than 2 girl children per family.",
    notCoveredHindi: "प्रति परिवार 2 से अधिक बालिकाएं।",
    cost: "FREE — No opening charges",
    costHindi: "मुफ्त — कोई खाता शुल्क नहीं",
    validity: "Matures after 21 years",
    validityHindi: "21 साल बाद परिपक्व",
    processingTime: "Same day",
    processingTimeHindi: "उसी दिन",
    whereToApply: [
      { en: "Visit any Post Office", hi: "किसी भी डाकघर में जाएं" },
      { en: "Visit any authorized bank", hi: "किसी भी अधिकृत बैंक में जाएं" }
    ],
    documentsDetailed: [
      { en: "Birth Certificate of girl", hi: "बालिका का जन्म प्रमाण पत्र" },
      { en: "Parent's Aadhaar", hi: "माता-पिता का आधार" },
      { en: "Address Proof", hi: "पता प्रमाण" }
    ],
    faqs: [
      { q: { en: "What's the minimum deposit?", hi: "न्यूनतम जमा क्या है?" }, a: { en: "₹250 per year minimum.", hi: "प्रति वर्ष न्यूनतम ₹250।" } }
    ],
    category: "women",
    ministry: "Ministry of Finance",
    eligibility: { minAge: 0, maxAge: 10, gender: "female", category: [], states: [] },
    officialLink: "https://www.india.gov.in",
    helpline: "1800-11-2011",
    launchedYear: 2015
  },
  
  // ========== EMPLOYMENT ==========
  {
    name: "MGNREGA",
    nameHindi: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम",
    shortDescription: "Guarantees 100 days of wage employment per year to rural households.",
    shortDescriptionHindi: "ग्रामीण परिवारों को हर साल 100 दिन के रोजगार की गारंटी।",
    fullDescription: "MGNREGA is a flagship scheme launched in 2006 that guarantees 100 days of wage employment in a financial year to every rural household. It's a legal guarantee — if government fails to provide work within 15 days, applicant is entitled to unemployment allowance. Work includes water conservation, irrigation, land development, and rural infrastructure.",
    fullDescriptionHindi: "मनरेगा 2006 में शुरू की गई योजना है जो हर ग्रामीण परिवार को 100 दिन के रोजगार की गारंटी देती है। कानूनी गारंटी — 15 दिनों में काम न मिले तो बेरोजगारी भत्ता। काम में जल संरक्षण, सिंचाई, भूमि विकास शामिल।",
    whoCanApply: "Any rural household whose adult members (18+) are willing to do unskilled manual work.",
    whoCanApplyHindi: "कोई भी ग्रामीण परिवार जिसके वयस्क सदस्य (18+) अकुशल श्रम करने को इच्छुक हैं।",
    benefitsDetailed: [
      { en: "100 days guaranteed employment per year", hi: "हर साल 100 दिन का गारंटीशुदा रोजगार" },
      { en: "Minimum wage ₹220-350 per day", hi: "न्यूनतम मजदूरी ₹220-350 प्रति दिन" },
      { en: "Wages paid within 15 days", hi: "मजदूरी 15 दिनों में" },
      { en: "Unemployment allowance if no work", hi: "काम न मिलने पर भत्ता" },
      { en: "Equal wages for men and women", hi: "पुरुष-महिला समान मजदूरी" }
    ],
    notCovered: "Urban residents, skilled labor, private employment.",
    notCoveredHindi: "शहरी निवासी, कुशल श्रमिक, निजी रोजगार।",
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई शुल्क नहीं",
    validity: "Ongoing",
    validityHindi: "जारी",
    processingTime: "Job card 15 days. Work 15 days after demand.",
    processingTimeHindi: "जॉब कार्ड 15 दिन। काम मांग के 15 दिन बाद।",
    whereToApply: [
      { en: "Visit local Gram Panchayat", hi: "स्थानीय ग्राम पंचायत जाएं" },
      { en: "Online: nrega.nic.in", hi: "ऑनलाइन: nrega.nic.in" },
      { en: "Call helpline: 1800-345-0225", hi: "हेल्पलाइन: 1800-345-0225" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Residence Proof", hi: "निवास प्रमाण" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" },
      { en: "Photo", hi: "फोटो" }
    ],
    faqs: [
      { q: { en: "How do I get work?", hi: "मुझे काम कैसे मिलेगा?" }, a: { en: "Apply for job card at Gram Panchayat.", hi: "ग्राम पंचायत में जॉब कार्ड के लिए आवेदन करें।" } }
    ],
    category: "employment",
    ministry: "Ministry of Rural Development",
    eligibility: { minAge: 18, isBPL: true, gender: "any", category: [], states: [] },
    officialLink: "https://nrega.nic.in",
    helpline: "1800-345-0225",
    launchedYear: 2006
  },
  
  // ========== SCHEME 7: Post Matric Scholarship ==========
  {
    name: "Post Matric Scholarship",
    nameHindi: "पोस्ट मैट्रिक छात्रवृत्ति",
    
    shortDescription: "Scholarship for SC/ST/OBC students pursuing post-matriculation education.",
    shortDescriptionHindi: "SC/ST/OBC छात्रों के लिए मैट्रिक के बाद की शिक्षा हेतु छात्रवृत्ति।",
    
    fullDescription: "Post Matric Scholarship is a centrally sponsored scheme providing financial assistance to students from SC, ST, OBC, and minority communities pursuing post-matriculation or post-secondary education. The scheme covers tuition fees, maintenance allowance, book grant, and other expenses. It helps students complete their higher education without financial burden. Both government and private institution students are eligible. The scholarship is renewable every year based on academic performance.",
    fullDescriptionHindi: "पोस्ट मैट्रिक छात्रवृत्ति एक केंद्र प्रायोजित योजना है जो SC, ST, OBC और अल्पसंख्यक समुदायों के छात्रों को मैट्रिक के बाद की शिक्षा के लिए वित्तीय सहायता प्रदान करती है। योजना में ट्यूशन फीस, रखरखाव भत्ता, पुस्तक अनुदान और अन्य खर्च शामिल हैं। यह छात्रों को बिना आर्थिक बोझ के उच्च शिक्षा पूरी करने में मदद करती है। सरकारी और निजी दोनों संस्थानों के छात्र पात्र हैं। छात्रवृत्ति हर साल शैक्षणिक प्रदर्शन के आधार पर नवीनीकरण योग्य है।",
    
    whoCanApply: "SC/ST/OBC/Minority students who have passed class 10th and are pursuing higher education (Class 11, 12, Graduation, PG). Family income should be below ₹2.5 lakh for SC/ST and ₹1 lakh for OBC.",
    whoCanApplyHindi: "SC/ST/OBC/अल्पसंख्यक छात्र जिन्होंने 10वीं पास की है और उच्च शिक्षा (11वीं, 12वीं, स्नातक, PG) कर रहे हैं। SC/ST के लिए पारिवारिक आय ₹2.5 लाख से कम और OBC के लिए ₹1 लाख से कम।",
    
    benefitsDetailed: [
      { en: "Full tuition fee reimbursement", hi: "पूरी ट्यूशन फीस की प्रतिपूर्ति" },
      { en: "Monthly maintenance allowance (₹230-₹1,200)", hi: "मासिक रखरखाव भत्ता (₹230-₹1,200)" },
      { en: "Book grant and study material allowance", hi: "पुस्तक अनुदान और अध्ययन सामग्री भत्ता" },
      { en: "Extra allowance for hostel/dayscholar", hi: "हॉस्टल/डे स्कॉलर के लिए अतिरिक्त भत्ता" },
      { en: "Available for full duration of course", hi: "पूरे कोर्स की अवधि के लिए उपलब्ध" },
      { en: "Covers both government and private institutions", hi: "सरकारी और निजी दोनों संस्थानों में" },
      { en: "Direct transfer to bank account", hi: "सीधे बैंक खाते में हस्तांतरण" }
    ],
    
    notCovered: "Students who failed to pass previous class. Students already receiving other scholarships. Distance education students. Students pursuing diploma below 10th.",
    notCoveredHindi: "जो छात्र पिछली कक्षा पास नहीं कर पाए। जो अन्य छात्रवृत्ति पा रहे हैं। दूरस्थ शिक्षा के छात्र। 10वीं से नीचे डिप्लोमा करने वाले छात्र।",
    
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई आवेदन शुल्क नहीं",
    
    validity: "Renewable every year until course completion",
    validityHindi: "कोर्स पूरा होने तक हर साल नवीनीकरण",
    
    processingTime: "2-3 months after application",
    processingTimeHindi: "आवेदन के 2-3 महीने बाद",
    
    whereToApply: [
      { en: "Online: scholarships.gov.in (National Scholarship Portal)", hi: "ऑनलाइन: scholarships.gov.in (राष्ट्रीय छात्रवृत्ति पोर्टल)" },
      { en: "Apply through your institution's scholarship cell", hi: "अपने संस्थान के छात्रवृत्ति प्रकोष्ठ के माध्यम से आवेदन करें" },
      { en: "Visit nearest CSC center", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Call helpline: 0120-6619540", hi: "हेल्पलाइन: 0120-6619540" }
    ],
    
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Caste Certificate (SC/ST/OBC)", hi: "जाति प्रमाण पत्र (SC/ST/OBC)" },
      { en: "Income Certificate (from Tehsildar)", hi: "आय प्रमाण पत्र (तहसीलदार से)" },
      { en: "Previous Year Marksheet", hi: "पिछले साल की मार्कशीट" },
      { en: "Fee Receipt from Institution", hi: "संस्थान से फीस रसीद" },
      { en: "Bank Passbook", hi: "बैंक पासबुक" },
      { en: "Bonafide Certificate from Institution", hi: "संस्थान से बोनाफाइड प्रमाण पत्र" }
    ],
    
    faqs: [
      { 
        q: { en: "Can I apply if I'm in 11th class?", hi: "क्या मैं 11वीं में आवेदन कर सकता हूं?" }, 
        a: { en: "Yes, from class 11 onwards you can apply.", hi: "हां, 11वीं से आवेदन कर सकते हैं।" } 
      },
      { 
        q: { en: "Is there an income limit?", hi: "क्या आय सीमा है?" }, 
        a: { en: "Yes, ₹2.5 lakh for SC/ST, ₹1 lakh for OBC.", hi: "हां, SC/ST के लिए ₹2.5 लाख, OBC के लिए ₹1 लाख।" } 
      },
      { 
        q: { en: "Can I get scholarship for full course?", hi: "क्या पूरे कोर्स के लिए छात्रवृत्ति मिलेगी?" }, 
        a: { en: "Yes, you need to renew every year.", hi: "हां, हर साल नवीनीकरण करना होगा।" } 
      },
      { 
        q: { en: "What if I fail one subject?", hi: "अगर एक विषय में फेल हो जाऊं तो?" }, 
        a: { en: "You may not get renewal for that year.", hi: "उस साल नवीनीकरण नहीं मिल सकता।" } 
      }
    ],
    
    category: "education",
    ministry: "Ministry of Social Justice and Empowerment",
    eligibility: { 
      minAge: 14, 
      isStudent: true, 
      maxIncome: 250000, 
      category: ["sc", "st", "obc"], 
      gender: "any", 
      states: [] 
    },
    officialLink: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    launchedYear: 2003
    },
  
  // ========== SCHEME 8: Atal Pension Yojana ==========
  {
    name: "Atal Pension Yojana",
    nameHindi: "अटल पेंशन योजना",
    shortDescription: "Pension scheme for unorganized sector workers with guaranteed monthly pension after 60.",
    shortDescriptionHindi: "असंगठित क्षेत्र के कामगारों के लिए 60 के बाद गारंटीशुदा मासिक पेंशन योजना।",
    fullDescription: "Atal Pension Yojana (APY) was launched in 2015 to provide a guaranteed minimum pension to workers in the unorganized sector. The scheme is focused on all citizens in the age group of 18-40 years. Subscribers receive a guaranteed minimum pension of ₹1,000 to ₹5,000 per month after attaining the age of 60 years. The contribution amount depends on the pension amount chosen and the age of joining. The government co-contributes 50% of the total contribution or ₹1,000 per annum, whichever is lower, for eligible subscribers.",
    fullDescriptionHindi: "अटल पेंशन योजना (APY) 2015 में असंगठित क्षेत्र के कामगारों को गारंटीशुदा न्यूनतम पेंशन प्रदान करने के लिए शुरू की गई थी। योजना 18-40 साल की उम्र के सभी नागरिकों पर केंद्रित है। ग्राहकों को 60 साल की उम्र के बाद ₹1,000 से ₹5,000 प्रति माह की गारंटीशुदा न्यूनतम पेंशन मिलती है। योगदान राशि चुनी गई पेंशन राशि और जुड़ने की उम्र पर निर्भर करती है। सरकार पात्र ग्राहकों के लिए कुल योगदान का 50% या ₹1,000 प्रति वर्ष, जो भी कम हो, सह-योगदान देती है।",
    whoCanApply: "Any Indian citizen aged between 18-40 years with a savings bank account. Must not be an income taxpayer. Not applicable to NPS/EPF subscribers.",
    whoCanApplyHindi: "18-40 साल की उम्र का कोई भी भारतीय नागरिक जिसका बचत बैंक खाता हो। आयकर दाता नहीं होना चाहिए। NPS/EPF ग्राहकों पर लागू नहीं।",
    benefitsDetailed: [
      { en: "Guaranteed pension of ₹1,000 to ₹5,000 per month", hi: "₹1,000 से ₹5,000 प्रति माह गारंटीशुदा पेंशन" },
      { en: "Pension starts at age 60", hi: "60 साल की उम्र में पेंशन शुरू" },
      { en: "Government co-contribution of 50% or ₹1,000/year", hi: "सरकार का 50% या ₹1,000/वर्ष सह-योगदान" },
      { en: "Spouse gets pension after subscriber's death", hi: "ग्राहक की मृत्यु के बाद पति/पत्नी को पेंशन" },
      { en: "Nominee gets corpus amount", hi: "नॉमिनी को पूरी राशि मिलती है" },
      { en: "Auto-debit from bank account", hi: "बैंक खाते से ऑटो-डेबिट" },
      { en: "Tax benefits under Section 80CCD", hi: "धारा 80CCD के तहत कर लाभ" }
    ],
    notCovered: "Income tax payers, existing NPS/EPF subscribers, government employees.",
    notCoveredHindi: "आयकर दाता, मौजूदा NPS/EPF ग्राहक, सरकारी कर्मचारी।",
    cost: "Contribution varies — ₹42 to ₹210 per month (age-based)",
    costHindi: "योगदान अलग-अलग — ₹42 से ₹210 प्रति माह (उम्र के आधार पर)",
    validity: "Lifetime pension from age 60",
    validityHindi: "60 साल की उम्र से आजीवन पेंशन",
    processingTime: "Same day — account activated immediately",
    processingTimeHindi: "उसी दिन — खाता तुरंत सक्रिय",
    whereToApply: [
      { en: "Visit any bank branch", hi: "किसी भी बैंक शाखा में जाएं" },
      { en: "Visit any Post Office", hi: "किसी भी डाकघर में जाएं" },
      { en: "Online through your bank's net banking", hi: "अपने बैंक के नेट बैंकिंग के माध्यम से" },
      { en: "Call helpline: 1800-110-069", hi: "हेल्पलाइन: 1800-110-069" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Savings Bank Account", hi: "बचत बैंक खाता" },
      { en: "Mobile Number", hi: "मोबाइल नंबर" },
      { en: "Nominee Details", hi: "नॉमिनी विवरण" }
    ],
    faqs: [
      { q: { en: "What is the minimum age to join?", hi: "जुड़ने की न्यूनतम उम्र क्या है?" }, a: { en: "18 years. Maximum 40 years.", hi: "18 साल। अधिकतम 40 साल।" } },
      { q: { en: "When will I get pension?", hi: "पेंशन कब मिलेगी?" }, a: { en: "From age 60 onwards, monthly.", hi: "60 साल की उम्र से, मासिक।" } },
      { q: { en: "Can I withdraw before 60?", hi: "क्या 60 से पहले निकाल सकते हैं?" }, a: { en: "Only in exceptional cases.", hi: "सिर्फ विशेष स्थितियों में।" } },
      { q: { en: "What happens to my money if I die?", hi: "अगर मेरी मृत्यु हो जाए तो?" }, a: { en: "Spouse gets pension, nominee gets corpus.", hi: "पति/पत्नी को पेंशन, नॉमिनी को राशि।" } }
    ],
    category: "pension",
    ministry: "Ministry of Finance",
    eligibility: { minAge: 18, maxAge: 40, gender: "any", category: [], states: [] },
    officialLink: "https://www.npscra.nsdl.co.in",
    helpline: "1800-110-069",
    launchedYear: 2015
  },
  
  // ========== SCHEME 9: PM Awas Yojana - Gramin ==========
  {
    name: "PM Awas Yojana - Gramin",
    nameHindi: "प्रधानमंत्री आवास योजना - ग्रामीण",
    shortDescription: "Financial assistance for building pucca houses for rural homeless families.",
    shortDescriptionHindi: "ग्रामीण बेघर परिवारों के लिए पक्का घर बनाने हेतु वित्तीय सहायता।",
    fullDescription: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G) was launched in 2016 with the aim of providing 'Housing for All' in rural areas. The scheme provides financial assistance of ₹1.20 lakh in plain areas and ₹1.30 lakh in hilly areas for construction of pucca houses. Beneficiaries also get assistance for toilet construction, MGNREGA wages for unskilled labor, and 90-95 days of unskilled labor wages. The scheme targets homeless families and those living in kutcha (temporary) houses. Money is transferred directly to the beneficiary's bank account in 3-4 installments based on construction progress.",
    fullDescriptionHindi: "प्रधानमंत्री आवास योजना - ग्रामीण (PMAY-G) 2016 में ग्रामीण क्षेत्रों में 'सभी के लिए आवास' के लक्ष्य के साथ शुरू की गई थी। योजना मैदानी क्षेत्रों में ₹1.20 लाख और पहाड़ी क्षेत्रों में ₹1.30 लाख की वित्तीय सहायता प्रदान करती है। लाभार्थियों को शौचालय निर्माण, मनरेगा मजदूरी और 90-95 दिनों की अकुशल श्रम मजदूरी का सहयोग भी मिलता है। योजना बेघर परिवारों और कच्चे घरों में रहने वालों को लक्षित करती है। पैसा निर्माण प्रगति के आधार पर 3-4 किस्तों में सीधे लाभार्थी के बैंक खाते में स्थानांतरित किया जाता है।",
    whoCanApply: "Rural families who are homeless or living in kutcha (temporary) houses. Must be included in SECC 2011 data. Priority to SC/ST, minorities, and women-headed households. Family should not own a pucca house.",
    whoCanApplyHindi: "ग्रामीण परिवार जो बेघर हैं या कच्चे घरों में रहते हैं। SECC 2011 डेटा में शामिल होना चाहिए। SC/ST, अल्पसंख्यक और महिला मुखिया वाले परिवारों को प्राथमिकता। परिवार के पास पक्का घर नहीं होना चाहिए।",
    benefitsDetailed: [
      { en: "₹1.20 lakh (plains) or ₹1.30 lakh (hilly areas)", hi: "₹1.20 लाख (मैदानी) या ₹1.30 लाख (पहाड़ी)" },
      { en: "Additional ₹12,000 for toilet construction", hi: "शौचालय निर्माण के लिए अतिरिक्त ₹12,000" },
      { en: "90-95 days MGNREGA wages for labor", hi: "मजदूरी के लिए 90-95 दिन मनरेगा मजदूरी" },
      { en: "Free house design and technical support", hi: "मुफ्त घर डिजाइन और तकनीकी सहायता" },
      { en: "Money in 3-4 installments directly to bank", hi: "3-4 किस्तों में सीधे बैंक में पैसा" },
      { en: "Priority to women-headed households", hi: "महिला मुखिया परिवारों को प्राथमिकता" },
      { en: "Convergence with other schemes (MGNREGA, SBM)", hi: "अन्य योजनाओं के साथ समन्वय (मनरेगा, SBM)" }
    ],
    notCovered: "Families who already own a pucca house. Urban residents. Families with 2+ pucca houses. Government employees.",
    notCoveredHindi: "जिन परिवारों के पास पहले से पक्का घर है। शहरी निवासी। 2+ पक्के घर वाले परिवार। सरकारी कर्मचारी।",
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई आवेदन शुल्क नहीं",
    validity: "One-time assistance for house construction",
    validityHindi: "घर निर्माण के लिए एक बार सहायता",
    processingTime: "6-12 months (house construction time)",
    processingTimeHindi: "6-12 महीने (घर बनने का समय)",
    whereToApply: [
      { en: "Visit local Gram Panchayat", hi: "स्थानीय ग्राम पंचायत में जाएं" },
      { en: "Online: pmayg.nic.in", hi: "ऑनलाइन: pmayg.nic.in" },
      { en: "Contact Block Development Officer", hi: "ब्लॉक विकास अधिकारी से संपर्क करें" },
      { en: "Call helpline: 1800-11-6446", hi: "हेल्पलाइन: 1800-11-6446" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Job Card (MGNREGA)", hi: "जॉब कार्ड (मनरेगा)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "SECC Data Verification", hi: "SECC डेटा सत्यापन" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" },
      { en: "Residence Certificate", hi: "निवास प्रमाण पत्र" }
    ],
    faqs: [
      { q: { en: "How do I check my name in PMAY-G list?", hi: "मैं PMAY-G सूची में अपना नाम कैसे देखूं?" }, a: { en: "Visit pmayg.nic.in and search by your name or Aadhaar.", hi: "pmayg.nic.in पर जाएं और नाम या आधार से खोजें।" } },
      { q: { en: "When do I get the money?", hi: "पैसा कब मिलेगा?" }, a: { en: "In installments based on construction progress.", hi: "निर्माण प्रगति के आधार पर किस्तों में।" } },
      { q: { en: "Can I build a 2-story house?", hi: "क्या मैं 2 मंजिला घर बना सकता हूं?" }, a: { en: "Yes, but assistance is limited to approved amount.", hi: "हां, but सहायता स्वीकृत राशि तक।" } },
      { q: { en: "What if I don't have land?", hi: "अगर मेरे पास जमीन नहीं है तो?" }, a: { en: "State may provide land under landless scheme.", hi: "राज्य भूमिहीन योजना के तहत जमीन दे सकती है।" } }
    ],
    category: "housing",
    ministry: "Ministry of Rural Development",
    eligibility: { isBPL: true, maxIncome: 300000, gender: "any", category: [], states: [] },
    officialLink: "https://pmayg.nic.in",
    helpline: "1800-11-6446",
    launchedYear: 2016
   },
  
  // ========== SCHEME 10: PM Fasal Bima Yojana ==========
  {
    name: "PM Fasal Bima Yojana",
    nameHindi: "प्रधानमंत्री फसल बीमा योजना",
    shortDescription: "Crop insurance scheme providing financial support to farmers in case of crop failure.",
    shortDescriptionHindi: "फसल खराब होने पर किसानों को वित्तीय सहायता प्रदान करने वाली फसल बीमा योजना।",
    fullDescription: "Pradhan Mantri Fasal Bima Yojana (PMFBY) was launched in 2016 to provide comprehensive crop insurance coverage from pre-sowing to post-harvest losses. The scheme provides financial support to farmers in case of crop failure due to natural calamities, pests, or diseases. Farmers pay a nominal premium — 2% for Kharif crops, 1.5% for Rabi crops, and 5% for commercial/horticultural crops. The remaining premium is shared by the government. Claims are settled quickly through remote sensing and smartphone technology. It covers both loanee and non-loanee farmers.",
    fullDescriptionHindi: "प्रधानमंत्री फसल बीमा योजना (PMFBY) 2016 में बुवाई से पहले से कटाई के बाद तक के नुकसान के लिए व्यापक फसल बीमा कवरेज प्रदान करने के लिए शुरू की गई थी। योजना प्राकृतिक आपदाओं, कीटों या बीमारियों के कारण फसल खराब होने पर किसानों को वित्तीय सहायता प्रदान करती है। किसान नाममात्र प्रीमियम देते हैं — खरीफ के लिए 2%, रबी के लिए 1.5%, और वाणिज्यिक/बागवानी फसलों के लिए 5%। बाकी प्रीमियम सरकार वहन करती है। रिमोट सेंसिंग और स्मार्टफोन तकनीक से क्लेम जल्दी निपटाए जाते हैं।",
    whoCanApply: "All farmers growing notified crops in notified areas — including tenant farmers, sharecroppers, and oral lessees. Mandatory for loanee farmers (crop loan), voluntary for non-loanee farmers.",
    whoCanApplyHindi: "अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान — किरायेदार किसान, बटाईदार और मौखिक पट्टेदार सहित। फसल ऋण लेने वाले किसानों के लिए अनिवार्य, गैर-ऋणी किसानों के लिए स्वैच्छिक।",
    benefitsDetailed: [
      { en: "Coverage from pre-sowing to post-harvest losses", hi: "बुवाई से पहले से कटाई के बाद तक कवरेज" },
      { en: "Low premium — 2% for Kharif, 1.5% for Rabi", hi: "कम प्रीमियम — खरीफ के लिए 2%, रबी के लिए 1.5%" },
      { en: "Full insured amount for crop loss", hi: "फसल नुकसान पर पूरी बीमित राशि" },
      { en: "Quick claim settlement via technology", hi: "तकनीक से तेज क्लेम निपटान" },
      { en: "Covers natural calamities, pests, diseases", hi: "प्राकृतिक आपदाएं, कीट, बीमारियां कवर" },
      { en: "Localized calamity coverage for small areas", hi: "छोटे क्षेत्रों के लिए स्थानीय आपदा कवरेज" },
      { en: "Post-harvest losses covered for 14 days", hi: "कटाई के बाद 14 दिन तक नुकसान कवर" }
    ],
    notCovered: "War, nuclear risks, malicious damage, theft. Crops outside notified areas. Farmers who don't pay premium.",
    notCoveredHindi: "युद्ध, परमाणु जोखिम, दुर्भावनापूर्ण नुकसान, चोरी। अधिसूचित क्षेत्रों से बाहर की फसलें। जो किसान प्रीमियम नहीं देते।",
    cost: "Premium: 2% (Kharif), 1.5% (Rabi), 5% (Commercial) — Govt pays rest",
    costHindi: "प्रीमियम: 2% (खरीफ), 1.5% (रबी), 5% (वाणिज्यिक) — बाकी सरकार देती है",
    validity: "One crop season (renewable every season)",
    validityHindi: "एक फसल मौसम (हर मौसम नवीनीकरण)",
    processingTime: "Within 2 months after crop loss report",
    processingTimeHindi: "फसल नुकसान रिपोर्ट के 2 महीने के भीतर",
    whereToApply: [
      { en: "Through your bank (if you have crop loan)", hi: "अपने बैंक के माध्यम से (अगर फसल ऋण है)" },
      { en: "Online: pmfby.gov.in", hi: "ऑनलाइन: pmfby.gov.in" },
      { en: "Visit nearest CSC center", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Call helpline: 14447", hi: "हेल्पलाइन: 14447" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Land Records (Khatauni/Khasra)", hi: "भूमि रिकॉर्ड (खतौनी/खसरा)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Sowing Certificate", hi: "बुवाई प्रमाण पत्र" },
      { en: "Crop Loan Details (if any)", hi: "फसल ऋण विवरण (अगर हो)" }
    ],
    faqs: [
      { q: { en: "Is crop insurance mandatory?", hi: "क्या फसल बीमा अनिवार्य है?" }, a: { en: "For crop loan farmers, yes. Others voluntary.", hi: "फसल ऋण किसानों के लिए हां। अन्य स्वैच्छिक।" } },
      { q: { en: "When should I report crop loss?", hi: "फसल नुकसान कब रिपोर्ट करूं?" }, a: { en: "Within 72 hours via app, bank, or helpline.", hi: "72 घंटे के भीतर ऐप, बैंक या हेल्पलाइन से।" } },
      { q: { en: "How much claim do I get?", hi: "मुझे कितना क्लेम मिलेगा?" }, a: { en: "As per the sum insured for your crop.", hi: "आपकी फसल की बीमित राशि के अनुसार।" } },
      { q: { en: "Can I insure multiple crops?", hi: "क्या कई फसलों का बीमा कर सकते हैं?" }, a: { en: "Yes, each crop needs separate enrollment.", hi: "हां, हर फसल के लिए अलग नामांकन।" } }
    ],
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://pmfby.gov.in",
    helpline: "14447",
    launchedYear: 2016
  },
  
  // ========== SCHEME 11: Kisan Credit Card ==========
  {
    name: "Kisan Credit Card",
    nameHindi: "किसान क्रेडिट कार्ड",
    shortDescription: "Provides farmers with affordable credit for agricultural needs at low interest rates.",
    shortDescriptionHindi: "किसानों को कम ब्याज दरों पर कृषि आवश्यकताओं के लिए सस्ता ऋण।",
    fullDescription: "Kisan Credit Card (KCC) scheme was introduced in 1998 to provide adequate and timely credit support to farmers for their cultivation and other needs. Under this scheme, farmers can get a credit limit up to ₹3 lakh at a subsidized interest rate of 4% per annum (7% base rate minus 3% government subsidy). The card is valid for 5 years and covers crop production, post-harvest expenses, farm maintenance, and household needs. It also provides insurance coverage for accidental death and disability. KCC has been extended to dairy farmers, fisheries, and animal husbandry.",
    fullDescriptionHindi: "किसान क्रेडिट कार्ड (KCC) योजना 1998 में किसानों को उनकी खेती और अन्य जरूरतों के लिए पर्याप्त और समय पर ऋण सहायता प्रदान करने के लिए शुरू की गई थी। इस योजना के तहत किसान 4% प्रति वर्ष की सब्सिडी वाली ब्याज दर पर ₹3 लाख तक की ऋण सीमा प्राप्त कर सकते हैं। कार्ड 5 साल के लिए वैध है और फसल उत्पादन, कटाई के बाद के खर्च, खेत रखरखाव और घरेलू जरूरतों को कवर करता है। दुर्घटना मृत्यु और विकलांगता के लिए बीमा कवर भी मिलता है।",
    whoCanApply: "All farmers — owner cultivators, tenant farmers, oral lessees, and sharecroppers. Self-help groups and joint liability groups can also apply. Age limit: 18-75 years.",
    whoCanApplyHindi: "सभी किसान — स्वामी किसान, किरायेदार किसान, मौखिक पट्टेदार और बटाईदार। स्वयं सहायता समूह और संयुक्त देयता समूह भी आवेदन कर सकते हैं। आयु सीमा: 18-75 वर्ष।",
    benefitsDetailed: [
      { en: "Credit up to ₹3 lakh at 4% interest rate", hi: "4% ब्याज दर पर ₹3 लाख तक ऋण" },
      { en: "No collateral for loans up to ₹1.6 lakh", hi: "₹1.6 लाख तक के ऋण पर कोई गारंटी नहीं" },
      { en: "Card valid for 5 years", hi: "कार्ड 5 साल के लिए वैध" },
      { en: "Covers crop, household, and farm expenses", hi: "फसल, घरेलू और खेत खर्च कवर" },
      { en: "Accidental death insurance cover", hi: "दुर्घटना मृत्यु बीमा कवर" },
      { en: "Flexible repayment — after harvest", hi: "लचीली चुकौती — कटाई के बाद" },
      { en: "Withdraw money anytime from ATM", hi: "ATM से कभी भी पैसे निकालें" }
    ],
    notCovered: "Non-agricultural activities. Farmers above 75 years of age. Defaulters of previous loans.",
    notCoveredHindi: "गैर-कृषि गतिविधियां। 75 साल से अधिक उम्र के किसान। पिछले ऋण के डिफ़ॉल्टर।",
    cost: "Interest: 4% per annum (with subsidy). No processing fee for small loans.",
    costHindi: "ब्याज: 4% प्रति वर्ष (सब्सिडी के साथ)। छोटे ऋणों पर कोई प्रोसेसिंग शुल्क नहीं।",
    validity: "5 years (renewable)",
    validityHindi: "5 साल (नवीनीकरण योग्य)",
    processingTime: "7-15 days after application",
    processingTimeHindi: "आवेदन के 7-15 दिन बाद",
    whereToApply: [
      { en: "Visit any bank branch (SBI, PNB, etc.)", hi: "किसी भी बैंक शाखा में जाएं (SBI, PNB, आदि)" },
      { en: "Visit nearest Cooperative Bank", hi: "नजदीकी सहकारी बैंक में जाएं" },
      { en: "Visit nearest CSC center", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Call helpline: 1800-180-1551", hi: "हेल्पलाइन: 1800-180-1551" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "PAN Card", hi: "पैन कार्ड" },
      { en: "Land Documents (Khatauni/Khasra)", hi: "भूमि दस्तावेज (खतौनी/खसरा)" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" }
    ],
    faqs: [
      { q: { en: "What is the maximum loan amount?", hi: "अधिकतम ऋण राशि क्या है?" }, a: { en: "Up to ₹3 lakh at subsidized rate.", hi: "सब्सिडी दर पर ₹3 लाख तक।" } },
      { q: { en: "Do I need collateral?", hi: "क्या गारंटी चाहिए?" }, a: { en: "No collateral for loans up to ₹1.6 lakh.", hi: "₹1.6 लाख तक के ऋण पर कोई गारंटी नहीं।" } },
      { q: { en: "How long is the card valid?", hi: "कार्ड कितने समय के लिए वैध है?" }, a: { en: "5 years, then renewable.", hi: "5 साल, फिर नवीनीकरण।" } }
    ],
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, maxAge: 75, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://www.nabard.org",
    helpline: "1800-180-1551",
    launchedYear: 1998
  },
  
  // ========== SCHEME 12: Janani Suraksha Yojana ==========
  {
    name: "Janani Suraksha Yojana",
    nameHindi: "जननी सुरक्षा योजना",
    shortDescription: "Cash assistance to pregnant women for institutional delivery to reduce maternal mortality.",
    shortDescriptionHindi: "मातृ मृत्यु दर कम करने के लिए संस्थागत प्रसव हेतु गर्भवती महिलाओं को नकद सहायता।",
    fullDescription: "Janani Suraksha Yojana (JSY) was launched in 2005 as a safe motherhood intervention under the National Health Mission. The scheme provides cash assistance to pregnant women to encourage institutional delivery (delivery in hospital/health center) instead of home delivery. This has significantly reduced maternal and infant mortality rates in India. The cash amount varies by state — ₹1,400 in rural areas and ₹1,000 in urban areas (for BPL women). ASHA workers also receive incentives for facilitating deliveries. The scheme is 100% centrally sponsored.",
    fullDescriptionHindi: "जननी सुरक्षा योजना (JSY) 2005 में राष्ट्रीय स्वास्थ्य मिशन के तहत एक सुरक्षित मातृत्व हस्तक्षेप के रूप में शुरू की गई थी। योजना गर्भवती महिलाओं को घर पर प्रसव के बजाय संस्थागत प्रसव (अस्पताल/स्वास्थ्य केंद्र में प्रसव) को प्रोत्साहित करने के लिए नकद सहायता प्रदान करती है। इससे भारत में मातृ और शिशु मृत्यु दर में उल्लेखनीय कमी आई है। नकद राशि राज्य के अनुसार अलग-अलग होती है — ग्रामीण क्षेत्रों में ₹1,400 और शहरी क्षेत्रों में ₹1,000 (BPL महिलाओं के लिए)। आशा कार्यकर्ताओं को भी प्रसव में सहायता के लिए प्रोत्साहन मिलता है। योजना 100% केंद्र प्रायोजित है।",
    whoCanApply: "Pregnant women (19+ years) from BPL families, SC/ST families, and women in Low Performing States (LPS). All women in rural areas are eligible regardless of income. Women in urban areas must be BPL.",
    whoCanApplyHindi: "BPL परिवारों, SC/ST परिवारों और कम प्रदर्शन वाले राज्यों (LPS) की गर्भवती महिलाएं (19+ वर्ष)। ग्रामीण क्षेत्रों की सभी महिलाएं आय की परवाह किए बिना पात्र हैं। शहरी क्षेत्रों की महिलाओं को BPL होना चाहिए।",
    benefitsDetailed: [
      { en: "₹1,400 cash for rural institutional delivery", hi: "ग्रामीण संस्थागत प्रसव के लिए ₹1,400 नकद" },
      { en: "₹1,000 cash for urban BPL delivery", hi: "शहरी BPL प्रसव के लिए ₹1,000 नकद" },
      { en: "Free delivery and C-section at government hospitals", hi: "सरकारी अस्पतालों में मुफ्त प्रसव और सिजेरियन" },
      { en: "Free medicines, tests, and blood", hi: "मुफ्त दवाइयां, टेस्ट और रक्त" },
      { en: "ASHA worker support throughout pregnancy", hi: "पूरी गर्भावस्था में आशा कार्यकर्ता का सहयोग" },
      { en: "Free transport to hospital", hi: "अस्पताल तक मुफ्त परिवहन" },
      { en: "Post-delivery care and check-ups", hi: "प्रसव के बाद देखभाल और जांच" }
    ],
    notCovered: "Non-BPL women in urban areas. Private hospital deliveries. Women below 19 years (special cases considered).",
    notCoveredHindi: "शहरी क्षेत्रों की गैर-BPL महिलाएं। निजी अस्पताल में प्रसव। 19 साल से कम उम्र की महिलाएं (विशेष मामले माने जाते हैं)।",
    cost: "FREE — No charges for delivery at government hospitals",
    costHindi: "मुफ्त — सरकारी अस्पतालों में प्रसव के लिए कोई शुल्क नहीं",
    validity: "Per delivery",
    validityHindi: "प्रति प्रसव",
    processingTime: "Cash given at time of discharge",
    processingTimeHindi: "नकद डिस्चार्ज के समय दिया जाता है",
    whereToApply: [
      { en: "Register at nearest ASHA/ANM center", hi: "नजदीकी आशा/ANM केंद्र पर पंजीकरण करें" },
      { en: "Visit government hospital's maternity ward", hi: "सरकारी अस्पताल के प्रसूति वार्ड में जाएं" },
      { en: "Contact local Anganwadi center", hi: "स्थानीय आंगनवाड़ी केंद्र से संपर्क करें" },
      { en: "Call helpline: 104", hi: "हेल्पलाइन: 104" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "MCP Card (Mother and Child Protection Card)", hi: "MCP कार्ड (माता और शिशु सुरक्षा कार्ड)" },
      { en: "BPL Card (if applicable)", hi: "BPL कार्ड (यदि लागू हो)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Hospital Registration Slip", hi: "अस्पताल पंजीकरण पर्ची" }
    ],
    faqs: [
      { q: { en: "When do I get the cash?", hi: "मुझे नकद कब मिलेगा?" }, a: { en: "At the time of hospital discharge after delivery.", hi: "प्रसव के बाद अस्पताल से छुट्टी के समय।" } },
      { q: { en: "Can I deliver at a private hospital?", hi: "क्या मैं निजी अस्पताल में प्रसव कर सकती हूं?" }, a: { en: "No, cash benefit only for government hospitals.", hi: "नहीं, नकद लाभ सिर्फ सरकारी अस्पतालों के लिए।" } },
      { q: { en: "How many times can I get this benefit?", hi: "मैं यह लाभ कितनी बार ले सकती हूं?" }, a: { en: "For up to 2 live births.", hi: "2 जीवित प्रसव तक।" } }
    ],
    category: "health",
    ministry: "Ministry of Health & Family Welfare",
    eligibility: { minAge: 19, gender: "female", isBPL: true, category: [], states: [] },
    officialLink: "https://nhm.gov.in",
    helpline: "104",
    launchedYear: 2005
   },
  
  // ========== SCHEME 13: PM Matru Vandana Yojana ==========
  {
    name: "PM Matru Vandana Yojana",
    nameHindi: "प्रधानमंत्री मातृ वंदना योजना",
    shortDescription: "Maternity benefit of ₹5,000 for pregnant women and lactating mothers.",
    shortDescriptionHindi: "गर्भवती महिलाओं और स्तनपान कराने वाली माताओं के लिए ₹5,000 का मातृत्व लाभ।",
    fullDescription: "Pradhan Mantri Matru Vandana Yojana (PMMVY) was launched in 2017 to provide partial compensation for wage loss to pregnant women and lactating mothers. Under this scheme, pregnant women and lactating mothers receive ₹5,000 in three installments for their first living child. The scheme promotes institutional delivery and provides cash incentive to ensure proper nutrition and health of mother and child. PMMVY 2.0 (2022) extended benefits to the second child if it's a girl — additional ₹6,000. The scheme is implemented through Anganwadi centers and health facilities.",
    fullDescriptionHindi: "प्रधानमंत्री मातृ वंदना योजना (PMMVY) 2017 में गर्भवती महिलाओं और स्तनपान कराने वाली माताओं को मजदूरी के नुकसान के लिए आंशिक मुआवजा प्रदान करने के लिए शुरू की गई थी। इस योजना के तहत गर्भवती महिलाओं और स्तनपान कराने वाली माताओं को अपने पहले जीवित बच्चे के लिए तीन किस्तों में ₹5,000 मिलते हैं। योजना संस्थागत प्रसव को बढ़ावा देती है और मां और बच्चे के उचित पोषण और स्वास्थ्य को सुनिश्चित करने के लिए नकद प्रोत्साहन प्रदान करती है। PMMVY 2.0 (2022) ने दूसरे बच्चे के लिए लाभ बढ़ाया अगर वह लड़की है — अतिरिक्त ₹6,000।",
    whoCanApply: "Pregnant women and lactating mothers (19+ years) for their first living child. Women who are not receiving any other paid maternity leave benefits. Must be registered at Anganwadi or health facility.",
    whoCanApplyHindi: "गर्भवती महिलाएं और स्तनपान कराने वाली माताएं (19+ वर्ष) अपने पहले जीवित बच्चे के लिए। जो महिलाएं कोई अन्य वेतन सहित मातृत्व अवकाश लाभ नहीं ले रही हैं। आंगनवाड़ी या स्वास्थ्य केंद्र में पंजीकृत होना चाहिए।",
    benefitsDetailed: [
      { en: "₹5,000 cash in 3 installments for first child", hi: "पहले बच्चे के लिए 3 किस्तों में ₹5,000 नकद" },
      { en: "₹6,000 for second child if it's a girl", hi: "अगर दूसरा बच्चा लड़की है तो ₹6,000" },
      { en: "Promotes institutional delivery", hi: "संस्थागत प्रसव को बढ़ावा" },
      { en: "Supports nutrition and health of mother & child", hi: "मां और बच्चे के पोषण और स्वास्थ्य का समर्थन" },
      { en: "Cash transferred directly to bank account", hi: "नकद सीधे बैंक खाते में" },
      { en: "Free registration and check-ups at Anganwadi", hi: "आंगनवाड़ी में मुफ्त पंजीकरण और जांच" }
    ],
    notCovered: "Women receiving paid maternity leave from employer. Women with second child (if boy). Government employees with maternity benefits.",
    notCoveredHindi: "नियोक्ता से वेतन सहित मातृत्व अवकाश पाने वाली महिलाएं। दूसरे बच्चे के साथ महिलाएं (अगर लड़का है)। सरकारी कर्मचारी जिनके पास मातृत्व लाभ है।",
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई आवेदन शुल्क नहीं",
    validity: "One-time for first child (+second if girl)",
    validityHindi: "पहले बच्चे के लिए एक बार (+दूसरा अगर लड़की)",
    processingTime: "Cash in 3 installments (at registration, 6 months, and delivery)",
    processingTimeHindi: "3 किस्तों में नकद (पंजीकरण, 6 महीने, और प्रसव पर)",
    whereToApply: [
      { en: "Visit nearest Anganwadi center", hi: "नजदीकी आंगनवाड़ी केंद्र पर जाएं" },
      { en: "Visit government health facility/PHC", hi: "सरकारी स्वास्थ्य केंद्र/PHC में जाएं" },
      { en: "Online: pmmvy.wcd.gov.in", hi: "ऑनलाइन: pmmvy.wcd.gov.in" },
      { en: "Call helpline: 181", hi: "हेल्पलाइन: 181" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "MCP Card (Mother & Child Protection)", hi: "MCP कार्ड (माता और शिशु सुरक्षा)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Husband's Aadhaar Card", hi: "पति का आधार कार्ड" },
      { en: "Child Birth Certificate", hi: "बच्चे का जन्म प्रमाण पत्र" }
    ],
    faqs: [
      { q: { en: "When do I get the money?", hi: "पैसा कब मिलेगा?" }, a: { en: "In 3 installments — at registration, after 6 months, and after delivery.", hi: "3 किस्तों में — पंजीकरण पर, 6 महीने बाद, और प्रसव के बाद।" } },
      { q: { en: "Can I get for second child?", hi: "क्या दूसरे बच्चे के लिए मिल सकता है?" }, a: { en: "Yes, if second child is a girl.", hi: "हां, अगर दूसरा बच्चा लड़की है।" } },
      { q: { en: "Do I need to be BPL?", hi: "क्या मुझे BPL होना चाहिए?" }, a: { en: "No, all pregnant women are eligible.", hi: "नहीं, सभी गर्भवती महिलाएं पात्र हैं।" } }
    ],
    category: "women",
    ministry: "Ministry of Women and Child Development",
    eligibility: { minAge: 19, gender: "female", category: [], states: [] },
    officialLink: "https://pmmvy.wcd.gov.in",
    helpline: "181",
    launchedYear: 2017
  },
  
  // ========== SCHEME 14: PM Shram Yogi Maan-dhan ==========
  {
    name: "PM Shram Yogi Maan-dhan",
    nameHindi: "पीएम श्रम योगी मान-धन",
    shortDescription: "Pension scheme for unorganized workers with assured monthly pension after 60.",
    shortDescriptionHindi: "असंगठित कामगारों के लिए 60 के बाद सुनिश्चित मासिक पेंशन योजना।",
    fullDescription: "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM) was launched in 2019 to provide old age protection and social security to unorganized workers. Under this scheme, subscribers receive a guaranteed monthly pension of ₹3,000 after attaining the age of 60 years. The scheme is voluntary and contribution-based — subscribers pay a small monthly contribution based on their age. The Central Government matches the contribution contributed by the subscriber. It targets workers in the unorganized sector like street vendors, domestic workers, agricultural laborers, construction workers, and rickshaw pullers.",
    fullDescriptionHindi: "प्रधानमंत्री श्रम योगी मान-धन (PM-SYM) 2019 में असंगठित कामगारों को वृद्धावस्था सुरक्षा और सामाजिक सुरक्षा प्रदान करने के लिए शुरू की गई थी। इस योजना के तहत ग्राहकों को 60 साल की उम्र के बाद ₹3,000 की गारंटीशुदा मासिक पेंशन मिलती है। योजना स्वैच्छिक और योगदान आधारित है — ग्राहक अपनी उम्र के आधार पर छोटा मासिक योगदान देते हैं। केंद्र सरकार ग्राहक द्वारा दिए गए योगदान का मिलान करती है। यह सड़क विक्रेता, घरेलू कामगार, कृषि मजदूर, निर्माण श्रमिक और रिक्शा चालक जैसे असंगठित क्षेत्र के कामगारों को लक्षित करती है।",
    whoCanApply: "Unorganized sector workers aged between 18-40 years with monthly income up to ₹15,000. Must have a savings bank account. Not an income taxpayer. Not covered under EPFO/ESIC/NPS.",
    whoCanApplyHindi: "18-40 साल की उम्र के असंगठित क्षेत्र के कामगार जिनकी मासिक आय ₹15,000 तक है। बचत बैंक खाता होना चाहिए। आयकर दाता नहीं। EPFO/ESIC/NPS के तहत कवर नहीं।",
    benefitsDetailed: [
      { en: "Guaranteed pension of ₹3,000 per month after 60", hi: "60 के बाद ₹3,000 प्रति माह गारंटीशुदा पेंशन" },
      { en: "Government matches your contribution 100%", hi: "सरकार आपके योगदान का 100% मिलान करती है" },
      { en: "Very low monthly contribution (₹55-₹200)", hi: "बहुत कम मासिक योगदान (₹55-₹200)" },
      { en: "Spouse gets pension after subscriber's death", hi: "ग्राहक की मृत्यु के बाद पति/पत्नी को पेंशन" },
      { en: "Family gets ₹8 lakh corpus on accidental death", hi: "दुर्घटना मृत्यु पर परिवार को ₹8 लाख" },
      { en: "Auto-debit from savings account", hi: "बचत खाते से ऑटो-डेबिट" }
    ],
    notCovered: "Income tax payers. Workers covered under EPFO/ESIC/NPS. Government employees.",
    notCoveredHindi: "आयकर दाता। EPFO/ESIC/NPS के तहत कवर कामगार। सरकारी कर्मचारी।",
    cost: "Monthly contribution ₹55 to ₹200 (age-based). Govt matches it.",
    costHindi: "मासिक योगदान ₹55 से ₹200 (उम्र के आधार पर)। सरकार मिलाती है।",
    validity: "Lifetime pension from age 60",
    validityHindi: "60 साल की उम्र से आजीवन पेंशन",
    processingTime: "Same day — enrollment at CSC",
    processingTimeHindi: "उसी दिन — CSC पर नामांकन",
    whereToApply: [
      { en: "Visit nearest Common Service Centre (CSC)", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Online: maandhan.in", hi: "ऑनलाइन: maandhan.in" },
      { en: "Call helpline: 1800-267-6888", hi: "हेल्पलाइन: 1800-267-6888" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Savings Bank Account Passbook", hi: "बचत बैंक खाता पासबुक" },
      { en: "Mobile Number", hi: "मोबाइल नंबर" }
    ],
    faqs: [
      { q: { en: "What is the age limit?", hi: "आयु सीमा क्या है?" }, a: { en: "18-40 years. Pension starts at 60.", hi: "18-40 वर्ष। पेंशन 60 पर शुरू।" } },
      { q: { en: "How much do I need to pay?", hi: "कितना देना होगा?" }, a: { en: "₹55 to ₹200 per month depending on age.", hi: "उम्र के आधार पर ₹55 से ₹200 प्रति माह।" } },
      { q: { en: "Can I join if I'm above 40?", hi: "क्या 40 से अधिक उम्र में जुड़ सकते हैं?" }, a: { en: "No, maximum age is 40.", hi: "नहीं, अधिकतम उम्र 40 है।" } }
    ],
    category: "pension",
    ministry: "Ministry of Labour and Employment",
    eligibility: { minAge: 18, maxAge: 40, maxIncome: 15000, gender: "any", category: [], states: [] },
    officialLink: "https://maandhan.in",
    helpline: "1800-267-6888",
    launchedYear: 2019
   },
  
  // ========== SCHEME 15: Stand-Up India ==========
  {
    name: "Stand-Up India",
    nameHindi: "स्टैंड-अप इंडिया",
    shortDescription: "Bank loans for SC/ST and women entrepreneurs to set up greenfield enterprises.",
    shortDescriptionHindi: "SC/ST और महिला उद्यमियों को नए उद्यम स्थापित करने के लिए बैंक ऋण।",
    fullDescription: "Stand-Up India Scheme was launched in 2016 to promote entrepreneurship among SC/ST and women entrepreneurs. The scheme provides bank loans between ₹10 lakh and ₹1 crore for setting up greenfield enterprises in manufacturing, services, trading, or agriculture-allied activities. At least one SC/ST borrower and one woman borrower per bank branch must be provided this facility. The loan is composite — covering term loan and working capital. The scheme helps entrepreneurs who lack collateral and want to start their own business.",
    fullDescriptionHindi: "स्टैंड-अप इंडिया योजना 2016 में SC/ST और महिला उद्यमियों में उद्यमशीलता को बढ़ावा देने के लिए शुरू की गई थी। योजना विनिर्माण, सेवाओं, व्यापार या कृषि से जुड़ी गतिविधियों में नए उद्यम स्थापित करने के लिए ₹10 लाख से ₹1 करोड़ तक का बैंक ऋण प्रदान करती है। प्रत्येक बैंक शाखा को कम से कम एक SC/ST उधारकर्ता और एक महिला उधारकर्ता को यह सुविधा प्रदान करनी होती है। ऋण समग्र है — टर्म लोन और कार्यशील पूंजी दोनों शामिल।",
    whoCanApply: "SC/ST and women entrepreneurs aged 18+ years. First-time entrepreneurs (greenfield). For non-individual entities, 51% shareholding must be with SC/ST or women. Must not be a defaulter with any bank.",
    whoCanApplyHindi: "18+ आयु के SC/ST और महिला उद्यमी। पहली बार उद्यमी (ग्रीनफील्ड)। गैर-व्यक्तिगत संस्थाओं के लिए, 51% हिस्सेदारी SC/ST या महिलाओं के पास होनी चाहिए। किसी भी बैंक का डिफ़ॉल्टर नहीं होना चाहिए।",
    benefitsDetailed: [
      { en: "Loan from ₹10 lakh to ₹1 crore", hi: "₹10 लाख से ₹1 करोड़ तक ऋण" },
      { en: "Composite loan — term + working capital", hi: "समग्र ऋण — टर्म + कार्यशील पूंजी" },
      { en: "Low interest rates as per bank norms", hi: "बैंक मानदंडों के अनुसार कम ब्याज दरें" },
      { en: "Handholding support and mentorship", hi: "सहायता और मेंटरशिप" },
      { en: "Credit guarantee via CGFSIL", hi: "CGFSIL के माध्यम से ऋण गारंटी" },
      { en: "Priority sector lending benefits", hi: "प्राथमिकता क्षेत्र ऋण लाभ" }
    ],
    notCovered: "Existing businesses (only greenfield). Defaulters. Individuals below 18 years. Non-SC/ST and non-women applicants (except joint ventures with 51% shareholding).",
    notCoveredHindi: "मौजूदा व्यवसाय (सिर्फ ग्रीनफील्ड)। डिफ़ॉल्टर। 18 साल से कम उम्र के व्यक्ति। गैर-SC/ST और गैर-महिला आवेदक (51% हिस्सेदारी वाले संयुक्त उद्यमों को छोड़कर)।",
    cost: "Standard bank interest rates (usually 9-12%). No processing fee for SC/ST.",
    costHindi: "मानक बैंक ब्याज दरें (आमतौर पर 9-12%)। SC/ST के लिए कोई प्रोसेसिंग शुल्क नहीं।",
    validity: "Loan tenure up to 7 years (with moratorium)",
    validityHindi: "ऋण अवधि 7 साल तक (मोहलत के साथ)",
    processingTime: "15-30 days after application",
    processingTimeHindi: "आवेदन के 15-30 दिन बाद",
    whereToApply: [
      { en: "Online: standupmitra.in", hi: "ऑनलाइन: standupmitra.in" },
      { en: "Visit any scheduled commercial bank branch", hi: "किसी भी अनुसूचित वाणिज्यिक बैंक शाखा में जाएं" },
      { en: "Apply through SIDBI", hi: "SIDBI के माध्यम से आवेदन करें" },
      { en: "Call helpline: 1800-180-1111", hi: "हेल्पलाइन: 1800-180-1111" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "PAN Card", hi: "पैन कार्ड" },
      { en: "Caste Certificate (for SC/ST)", hi: "जाति प्रमाण पत्र (SC/ST के लिए)" },
      { en: "Business Plan / Project Report", hi: "व्यवसाय योजना / प्रोजेक्ट रिपोर्ट" },
      { en: "Bank Statements (last 6 months)", hi: "बैंक स्टेटमेंट (पिछले 6 महीने)" },
      { en: "Address Proof", hi: "पता प्रमाण" }
    ],
    faqs: [
      { q: { en: "Can I get loan without collateral?", hi: "क्या बिना गारंटी ऋण मिल सकता है?" }, a: { en: "Yes, loans are covered under Credit Guarantee Scheme.", hi: "हां, ऋण क्रेडिट गारंटी योजना के तहत कवर हैं।" } },
      { q: { en: "Can I start any type of business?", hi: "क्या कोई भी व्यवसाय शुरू कर सकता हूं?" }, a: { en: "Yes — manufacturing, services, trading, agriculture-allied.", hi: "हां — विनिर्माण, सेवाएं, व्यापार, कृषि से जुड़ी।" } },
      { q: { en: "How much loan can I get?", hi: "कितना ऋण मिल सकता है?" }, a: { en: "₹10 lakh to ₹1 crore.", hi: "₹10 लाख से ₹1 करोड़।" } }
    ],
    category: "business",
    ministry: "Ministry of Finance",
    eligibility: { minAge: 18, hasBusiness: true, category: ["sc", "st"], gender: "any", states: [] },
    officialLink: "https://www.standupmitra.in",
    helpline: "1800-180-1111",
    launchedYear: 2016
  },
  
  // ========== SCHEME 16: Startup India ==========
  {
    name: "Startup India",
    nameHindi: "स्टार्टअप इंडिया",
    shortDescription: "Support for startups with tax benefits, funding, mentorship, and simplified compliance.",
    shortDescriptionHindi: "कर लाभ, फंडिंग, मेंटरशिप और सरलीकृत अनुपालन के साथ स्टार्टअप के लिए सहायता।",
    fullDescription: "Startup India initiative was launched in 2016 to build a strong ecosystem for nurturing innovation and startups in India. The scheme offers a range of benefits including tax exemptions for 3 years, easier compliance, self-certification, and a ₹10,000 crore Fund of Funds managed by SIDBI. Startups can register on the Startup India portal to get DPIIT recognition. Once recognized, they can apply for tax benefits under Section 80-IAC and 56(2)(viib). The initiative also provides mentorship through various programs, access to incubators, and support for intellectual property filing.",
    fullDescriptionHindi: "स्टार्टअप इंडिया पहल 2016 में भारत में नवाचार और स्टार्टअप के पोषण के लिए मजबूत पारिस्थितिकी तंत्र बनाने के लिए शुरू की गई थी। योजना कई लाभ प्रदान करती है जिनमें 3 साल के लिए कर छूट, आसान अनुपालन, स्व-प्रमाणन, और SIDBI द्वारा प्रबंधित ₹10,000 करोड़ का फंड ऑफ फंड्स शामिल है। स्टार्टअप DPIIT मान्यता के लिए स्टार्टअप इंडिया पोर्टल पर पंजीकरण कर सकते हैं। मान्यता मिलने के बाद वे धारा 80-IAC और 56(2)(viib) के तहत कर लाभ के लिए आवेदन कर सकते हैं।",
    whoCanApply: "Startups incorporated as private limited company or LLP, with annual turnover less than ₹100 crore, working towards innovation/development of new products. Entity should not be older than 10 years from incorporation.",
    whoCanApplyHindi: "प्राइवेट लिमिटेड कंपनी या LLP के रूप में शामिल स्टार्टअप, जिनका वार्षिक कारोबार ₹100 करोड़ से कम हो, जो नवाचार/नए उत्पादों के विकास की दिशा में काम कर रहे हों। संस्था की स्थापना से 10 साल से अधिक पुरानी नहीं होनी चाहिए।",
    benefitsDetailed: [
      { en: "3-year income tax exemption (Section 80-IAC)", hi: "3 साल की आयकर छूट (धारा 80-IAC)" },
      { en: "Access to ₹10,000 crore Fund of Funds", hi: "₹10,000 करोड़ फंड ऑफ फंड्स तक पहुंच" },
      { en: "Simplified compliance — self-certification", hi: "सरलीकृत अनुपालन — स्व-प्रमाणन" },
      { en: "Tax exemption on investment (Section 56)", hi: "निवेश पर कर छूट (धारा 56)" },
      { en: "Free IPR filing support", hi: "मुफ्त IPR फाइलिंग सहायता" },
      { en: "Mentorship through incubators and accelerators", hi: "इनक्यूबेटर और एक्सेलेरेटर के माध्यम से मेंटरशिप" },
      { en: "Faster exit mechanism for startups", hi: "स्टार्टअप के लिए तेज निकास तंत्र" }
    ],
    notCovered: "Non-registered startups. Entities with turnover > ₹100 crore. Companies formed by splitting existing businesses. Partnership firms.",
    notCoveredHindi: "गैर-पंजीकृत स्टार्टअप। ₹100 करोड़ से अधिक कारोबार वाली संस्थाएं। मौजूदा व्यवसाय को तोड़कर बनाई गई कंपनियां। पार्टनरशिप फर्म।",
    cost: "FREE — No registration fee",
    costHindi: "मुफ्त — कोई पंजीकरण शुल्क नहीं",
    validity: "10 years from incorporation",
    validityHindi: "निगमन से 10 साल",
    processingTime: "2-4 weeks for DPIIT recognition",
    processingTimeHindi: "DPIIT मान्यता के लिए 2-4 सप्ताह",
    whereToApply: [
      { en: "Online: startupindia.gov.in", hi: "ऑनलाइन: startupindia.gov.in" },
      { en: "Register on Startup India portal", hi: "स्टार्टअप इंडिया पोर्टल पर पंजीकरण करें" },
      { en: "Call helpline: 1800-115-565", hi: "हेल्पलाइन: 1800-115-565" }
    ],
    documentsDetailed: [
      { en: "Certificate of Incorporation", hi: "निगमन प्रमाण पत्र" },
      { en: "PAN Card of Company", hi: "कंपनी का पैन कार्ड" },
      { en: "Pitch Deck / Business Plan", hi: "पिच डेक / व्यवसाय योजना" },
      { en: "Directors' Aadhaar", hi: "निदेशकों का आधार" },
      { en: "Bank Account Details", hi: "बैंक खाता विवरण" }
    ],
    faqs: [
      { q: { en: "How do I register my startup?", hi: "मैं अपना स्टार्टअप कैसे पंजीकृत करूं?" }, a: { en: "Register on startupindia.gov.in and apply for DPIIT recognition.", hi: "startupindia.gov.in पर पंजीकरण करें और DPIIT मान्यता के लिए आवेदन करें।" } },
      { q: { en: "Do I need to be a private limited company?", hi: "क्या मुझे प्राइवेट लिमिटेड कंपनी होना चाहिए?" }, a: { en: "Yes, Pvt Ltd or LLP only.", hi: "हां, सिर्फ Pvt Ltd या LLP।" } },
      { q: { en: "What is the tax benefit?", hi: "कर लाभ क्या है?" }, a: { en: "3 years income tax exemption under Section 80-IAC.", hi: "धारा 80-IAC के तहत 3 साल की आयकर छूट।" } }
    ],
    category: "business",
    ministry: "Ministry of Commerce and Industry",
    eligibility: { minAge: 18, hasBusiness: true, gender: "any", category: [], states: [] },
    officialLink: "https://www.startupindia.gov.in",
    helpline: "1800-115-565",
    launchedYear: 2016
  },
  
  // ========== SCHEME 17: e-Shram Portal ==========
  {
    name: "e-Shram Portal",
    nameHindi: "ई-श्रम पोर्टल",
    shortDescription: "National database of unorganized workers for social security benefits.",
    shortDescriptionHindi: "सामाजिक सुरक्षा लाभों के लिए असंगठित कामगारों का राष्ट्रीय डेटाबेस।",
    fullDescription: "The e-Shram Portal was launched in 2021 to create a national database of unorganized workers including construction workers, migrant workers, gig workers, street vendors, domestic workers, and agricultural laborers. Registration on the portal is free and voluntary. Once registered, workers get an e-Shram card with a Universal Account Number (UAN). The card helps workers access various social security schemes and benefits from central and state governments. In case of accidental death or disability, registered workers get insurance benefits up to ₹2 lakh. The portal aims to formalize the unorganized workforce and provide them targeted benefits.",
    fullDescriptionHindi: "ई-श्रम पोर्टल 2021 में असंगठित कामगारों का राष्ट्रीय डेटाबेस बनाने के लिए शुरू किया गया था जिसमें निर्माण श्रमिक, प्रवासी श्रमिक, गिग श्रमिक, सड़क विक्रेता, घरेलू कामगार और कृषि मजदूर शामिल हैं। पोर्टल पर पंजीकरण मुफ्त और स्वैच्छिक है। पंजीकरण के बाद कामगारों को सार्वभौमिक खाता संख्या (UAN) के साथ ई-श्रम कार्ड मिलता है। कार्ड कामगारों को विभिन्न सामाजिक सुरक्षा योजनाओं और केंद्र व राज्य सरकारों के लाभों तक पहुंचने में मदद करता है। दुर्घटना मृत्यु या विकलांगता की स्थिति में, पंजीकृत कामगारों को ₹2 लाख तक का बीमा लाभ मिलता है।",
    whoCanApply: "All unorganized workers aged 16-59 years, not covered under EPFO/ESIC/NPS. Includes gig workers, platform workers, migrant workers, construction workers, domestic workers, street vendors, agriculture laborers, and self-employed.",
    whoCanApplyHindi: "16-59 साल की उम्र के सभी असंगठित कामगार, जो EPFO/ESIC/NPS के तहत कवर नहीं हैं। इसमें गिग श्रमिक, प्लेटफॉर्म श्रमिक, प्रवासी श्रमिक, निर्माण श्रमिक, घरेलू कामगार, सड़क विक्रेता, कृषि मजदूर और स्व-रोजगार शामिल हैं।",
    benefitsDetailed: [
      { en: "FREE e-Shram card with Universal Account Number", hi: "सार्वभौमिक खाता संख्या के साथ मुफ्त ई-श्रम कार्ड" },
      { en: "₹2 lakh insurance on accidental death/disability", hi: "दुर्घटना मृत्यु/विकलांगता पर ₹2 लाख बीमा" },
      { en: "Access to all social security schemes", hi: "सभी सामाजिक सुरक्षा योजनाओं तक पहुंच" },
      { en: "Direct benefit transfer for government schemes", hi: "सरकारी योजनाओं के लिए सीधा लाभ हस्तांतरण" },
      { en: "Priority in PDS, housing, and education schemes", hi: "PDS, आवास और शिक्षा योजनाओं में प्राथमिकता" },
      { en: "Portable across states — no need to re-register", hi: "राज्यों में पोर्टेबल — दोबारा पंजीकरण की जरूरत नहीं" },
      { en: "Registration is completely FREE", hi: "पंजीकरण पूरी तरह मुफ्त" }
    ],
    notCovered: "Workers covered under EPFO/ESIC/NPS. Income tax payers. Government employees. Workers above 59 years or below 16 years.",
    notCoveredHindi: "EPFO/ESIC/NPS के तहत कवर कामगार। आयकर दाता। सरकारी कर्मचारी। 59 साल से अधिक या 16 साल से कम उम्र के कामगार।",
    cost: "FREE — No registration fee",
    costHindi: "मुफ्त — कोई पंजीकरण शुल्क नहीं",
    validity: "Lifetime card validity",
    validityHindi: "आजीवन कार्ड वैधता",
    processingTime: "Same day — card issued instantly",
    processingTimeHindi: "उसी दिन — कार्ड तुरंत जारी",
    whereToApply: [
      { en: "Online: eshram.gov.in", hi: "ऑनलाइन: eshram.gov.in" },
      { en: "Visit nearest Common Service Centre (CSC)", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Call helpline: 14434", hi: "हेल्पलाइन: 14434" },
      { en: "Through the e-Shram mobile app", hi: "ई-श्रम मोबाइल ऐप के माध्यम से" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Mobile Number (linked with Aadhaar)", hi: "मोबाइल नंबर (आधार से लिंक)" }
    ],
    faqs: [
      { q: { en: "Who can register on e-Shram?", hi: "ई-श्रम पर कौन पंजीकरण कर सकता है?" }, a: { en: "All unorganized workers aged 16-59.", hi: "16-59 साल के सभी असंगठित कामगार।" } },
      { q: { en: "Is registration free?", hi: "क्या पंजीकरण मुफ्त है?" }, a: { en: "Yes, completely free.", hi: "हां, पूरी तरह मुफ्त।" } },
      { q: { en: "What benefits do I get?", hi: "मुझे क्या लाभ मिलते हैं?" }, a: { en: "₹2 lakh insurance + access to all social security schemes.", hi: "₹2 लाख बीमा + सभी सामाजिक सुरक्षा योजनाओं तक पहुंच।" } }
    ],
    category: "employment",
    ministry: "Ministry of Labour and Employment",
    eligibility: { minAge: 16, maxAge: 59, gender: "any", category: [], states: [] },
    officialLink: "https://eshram.gov.in",
    helpline: "14434",
    launchedYear: 2021
  },
  
  // ========== SCHEME 18: Ayushman Bharat Digital Mission ==========
  {
    name: "Ayushman Bharat Digital Mission",
    nameHindi: "आयुष्मान भारत डिजिटल मिशन",
    shortDescription: "Digital health ecosystem with unique ABHA health ID for every citizen.",
    shortDescriptionHindi: "हर नागरिक के लिए यूनिक ABHA स्वास्थ्य आईडी के साथ डिजिटल स्वास्थ्य पारिस्थितिकी।",
    fullDescription: "Ayushman Bharat Digital Mission (ABDM) was launched in 2021 to develop the backbone necessary to support the integrated digital health infrastructure of the country. It aims to create a seamless online platform that enables interoperability of health data across different healthcare providers. Every citizen gets a unique 14-digit ABHA (Ayushman Bharat Health Account) number which acts as a health ID. Health records, prescriptions, and reports are linked to this ID. This eliminates the need to carry physical files and allows doctors to access patient history instantly.",
    fullDescriptionHindi: "आयुष्मान भारत डिजिटल मिशन (ABDM) 2021 में देश के एकीकृत डिजिटल स्वास्थ्य बुनियादी ढांचे का समर्थन करने के लिए आवश्यक रीढ़ विकसित करने के लिए शुरू किया गया था। इसका उद्देश्य एक निर्बाध ऑनलाइन प्लेटफॉर्म बनाना है जो विभिन्न स्वास्थ्य सेवा प्रदाताओं के बीच स्वास्थ्य डेटा की अंतर-संचालनशीलता को सक्षम बनाता है। प्रत्येक नागरिक को एक अद्वितीय 14-अंकीय ABHA (आयुष्मान भारत स्वास्थ्य खाता) संख्या मिलती है जो स्वास्थ्य आईडी के रूप में कार्य करती है।",
    whoCanApply: "Every Indian citizen — no age limit. Voluntary scheme. Can register with Aadhaar or mobile number.",
    whoCanApplyHindi: "प्रत्येक भारतीय नागरिक — कोई आयु सीमा नहीं। स्वैच्छिक योजना। आधार या मोबाइल नंबर से पंजीकरण कर सकते हैं।",
    benefitsDetailed: [
      { en: "Unique 14-digit ABHA health ID", hi: "अद्वितीय 14-अंकीय ABHA स्वास्थ्य आईडी" },
      { en: "Digital health records — no physical files", hi: "डिजिटल स्वास्थ्य रिकॉर्ड — कोई भौतिक फाइल नहीं" },
      { en: "Access to verified doctors & hospitals", hi: "सत्यापित डॉक्टरों और अस्पतालों तक पहुंच" },
      { en: "Link all health records to one ID", hi: "सभी स्वास्थ्य रिकॉर्ड एक आईडी से लिंक" },
      { en: "Paperless prescriptions", hi: "पेपरलेस प्रिस्क्रिप्शन" },
      { en: "Easy teleconsultation", hi: "आसान टेली-परामर्श" },
      { en: "Portable across all hospitals in India", hi: "भारत के सभी अस्पतालों में पोर्टेबल" }
    ],
    notCovered: "Non-Indian citizens. Voluntary — no compulsion to register.",
    notCoveredHindi: "गैर-भारतीय नागरिक। स्वैच्छिक — पंजीकरण की कोई बाध्यता नहीं।",
    cost: "FREE — No registration charges",
    costHindi: "मुफ्त — कोई पंजीकरण शुल्क नहीं",
    validity: "Lifetime validity",
    validityHindi: "आजीवन वैधता",
    processingTime: "Instant — ABHA generated immediately",
    processingTimeHindi: "तत्काल — ABHA तुरंत जनरेट",
    whereToApply: [
      { en: "Online: abha.abdm.gov.in", hi: "ऑनलाइन: abha.abdm.gov.in" },
      { en: "ABHA mobile app (Android/iOS)", hi: "ABHA मोबाइल ऐप (Android/iOS)" },
      { en: "Visit any empanelled hospital", hi: "किसी भी सूचीबद्ध अस्पताल में जाएं" },
      { en: "Call helpline: 1800-11-4477", hi: "हेल्पलाइन: 1800-11-4477" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (recommended)", hi: "आधार कार्ड (अनुशंसित)" },
      { en: "Mobile Number (for OTP)", hi: "मोबाइल नंबर (OTP के लिए)" }
    ],
    faqs: [
      { q: { en: "Is ABHA mandatory?", hi: "क्या ABHA अनिवार्य है?" }, a: { en: "No, completely voluntary.", hi: "नहीं, पूरी तरह स्वैच्छिक।" } },
      { q: { en: "Is my health data safe?", hi: "क्या मेरा स्वास्थ्य डेटा सुरक्षित है?" }, a: { en: "Yes, data is encrypted and only accessible with your consent.", hi: "हां, डेटा एन्क्रिप्टेड है और सिर्फ आपकी सहमति से सुलभ।" } }
    ],
    category: "health",
    ministry: "Ministry of Health & Family Welfare",
    eligibility: { gender: "any", category: [], states: [] },
    officialLink: "https://abdm.gov.in",
    helpline: "1800-11-4477",
    launchedYear: 2021
  },
  
  // ========== SCHEME 19: PM Suraksha Bima Yojana ==========
  {
    name: "PM Suraksha Bima Yojana",
    nameHindi: "प्रधानमंत्री सुरक्षा बीमा योजना",
    shortDescription: "Accident insurance scheme providing ₹2 lakh cover at just ₹20 per year.",
    shortDescriptionHindi: "सिर्फ ₹20 प्रति वर्ष में ₹2 लाख का दुर्घटना बीमा योजना।",
    fullDescription: "Pradhan Mantri Suraksha Bima Yojana (PMSBY) was launched in 2015 to provide accidental death and disability insurance cover to people at a very affordable premium. The scheme offers ₹2 lakh cover for accidental death or total disability and ₹1 lakh for partial disability. The annual premium is just ₹20. It is auto-debited from the bank account once a year. The scheme is open to all savings bank account holders aged 18-70 years. Enrollment can be done through bank branches, net banking, or mobile apps.",
    fullDescriptionHindi: "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) 2015 में लोगों को बहुत सस्ते प्रीमियम पर दुर्घटना मृत्यु और विकलांगता बीमा कवर प्रदान करने के लिए शुरू की गई थी। योजना दुर्घटना मृत्यु या पूर्ण विकलांगता के लिए ₹2 लाख और आंशिक विकलांगता के लिए ₹1 लाख का कवर प्रदान करती है। वार्षिक प्रीमियम सिर्फ ₹20 है। यह बैंक खाते से साल में एक बार ऑटो-डेबिट होता है। योजना 18-70 साल के सभी बचत बैंक खाताधारकों के लिए खुली है।",
    whoCanApply: "All savings bank/post office account holders aged 18-70 years. Must give auto-debit consent. One account = one enrollment.",
    whoCanApplyHindi: "18-70 साल के सभी बचत बैंक/डाकघर खाताधारक। ऑटो-डेबिट सहमति देनी होगी। एक खाता = एक नामांकन।",
    benefitsDetailed: [
      { en: "₹2 lakh for accidental death", hi: "दुर्घटना मृत्यु के लिए ₹2 लाख" },
      { en: "₹2 lakh for total disability (both eyes/hands/feet)", hi: "पूर्ण विकलांगता के लिए ₹2 लाख" },
      { en: "₹1 lakh for partial disability", hi: "आंशिक विकलांगता के लिए ₹1 लाख" },
      { en: "Annual premium only ₹20", hi: "वार्षिक प्रीमियम सिर्फ ₹20" },
      { en: "Auto-debit from bank account", hi: "बैंक खाते से ऑटो-डेबिट" },
      { en: "Coverage from June 1 to May 31 each year", hi: "हर साल 1 जून से 31 मई तक कवरेज" },
      { en: "Nominee gets claim amount", hi: "नॉमिनी को क्लेम राशि मिलती है" }
    ],
    notCovered: "Death due to natural causes (only accidents covered). Self-inflicted injuries. Death during war. People above 70 years.",
    notCoveredHindi: "प्राकृतिक कारणों से मृत्यु (सिर्फ दुर्घटनाएं कवर)। स्व-प्रेरित चोटें। युद्ध के दौरान मृत्यु। 70 साल से अधिक उम्र के लोग।",
    cost: "₹20 per year only",
    costHindi: "सिर्फ ₹20 प्रति वर्ष",
    validity: "1 year (June to May) — renewable",
    validityHindi: "1 साल (जून से मई) — नवीनीकरण योग्य",
    processingTime: "Same day enrollment",
    processingTimeHindi: "उसी दिन नामांकन",
    whereToApply: [
      { en: "Visit your bank branch", hi: "अपनी बैंक शाखा में जाएं" },
      { en: "Online through your bank's net banking", hi: "अपने बैंक की नेट बैंकिंग से ऑनलाइन" },
      { en: "Through bank mobile app", hi: "बैंक मोबाइल ऐप के माध्यम से" },
      { en: "Call helpline: 1800-180-1111", hi: "हेल्पलाइन: 1800-180-1111" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Savings Bank Account", hi: "बचत बैंक खाता" },
      { en: "Nominee Details", hi: "नॉमिनी विवरण" },
      { en: "Consent Form", hi: "सहमति फॉर्म" }
    ],
    faqs: [
      { q: { en: "How do I enroll?", hi: "मैं नामांकन कैसे करूं?" }, a: { en: "Fill the form at your bank or use net banking.", hi: "बैंक में फॉर्म भरें या नेट बैंकिंग का उपयोग करें।" } },
      { q: { en: "When is premium deducted?", hi: "प्रीमियम कब कटता है?" }, a: { en: "Auto-debited on June 1 each year.", hi: "हर साल 1 जून को ऑटो-डेबिट।" } }
    ],
    category: "other",
    ministry: "Ministry of Finance",
    eligibility: { minAge: 18, maxAge: 70, gender: "any", category: [], states: [] },
    officialLink: "https://www.jansuraksha.gov.in",
    helpline: "1800-180-1111",
    launchedYear: 2015
  },
  
  // ========== SCHEME 20: PM Jeevan Jyoti Bima Yojana ==========
  {
    name: "PM Jeevan Jyoti Bima Yojana",
    nameHindi: "प्रधानमंत्री जीवन ज्योति बीमा योजना",
    shortDescription: "Life insurance scheme providing ₹2 lakh cover at just ₹436 per year.",
    shortDescriptionHindi: "सिर्फ ₹436 प्रति वर्ष में ₹2 लाख का जीवन बीमा योजना।",
    fullDescription: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) was launched in 2015 to provide life insurance cover to people at an affordable premium. The scheme provides ₹2 lakh life insurance cover for death due to any reason (natural or accidental). The annual premium is ₹436. It is auto-debited from the bank account. The scheme is open to all savings bank account holders aged 18-50 years. If the subscriber dies at any time, the nominee gets ₹2 lakh. Enrollment can be done through bank branches, net banking, or mobile apps.",
    fullDescriptionHindi: "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY) 2015 में लोगों को सस्ते प्रीमियम पर जीवन बीमा कवर प्रदान करने के लिए शुरू की गई थी। योजना किसी भी कारण (प्राकृतिक या दुर्घटना) से मृत्यु के लिए ₹2 लाख का जीवन बीमा कवर प्रदान करती है। वार्षिक प्रीमियम ₹436 है। यह बैंक खाते से ऑटो-डेबिट होता है। योजना 18-50 साल के सभी बचत बैंक खाताधारकों के लिए खुली है।",
    whoCanApply: "All savings bank/post office account holders aged 18-50 years. Must give auto-debit consent. One account = one enrollment.",
    whoCanApplyHindi: "18-50 साल के सभी बचत बैंक/डाकघर खाताधारक। ऑटो-डेबिट सहमति देनी होगी। एक खाता = एक नामांकन।",
    benefitsDetailed: [
      { en: "₹2 lakh life insurance cover", hi: "₹2 लाख जीवन बीमा कवर" },
      { en: "Covers death due to ANY reason", hi: "किसी भी कारण से मृत्यु कवर" },
      { en: "Annual premium only ₹436", hi: "वार्षिक प्रीमियम सिर्फ ₹436" },
      { en: "Auto-debit from bank account", hi: "बैंक खाते से ऑटो-डेबिट" },
      { en: "Nominee gets ₹2 lakh on death", hi: "मृत्यु पर नॉमिनी को ₹2 लाख" },
      { en: "No medical test required", hi: "कोई चिकित्सा परीक्षण नहीं" },
      { en: "Coverage till age 55 (if continuously renewed)", hi: "55 साल की उम्र तक कवरेज (लगातार नवीनीकरण पर)" }
    ],
    notCovered: "Death before enrollment or after age 55. Suicides in first year. Enrolment after 50 years.",
    notCoveredHindi: "नामांकन से पहले या 55 साल की उम्र के बाद मृत्यु। पहले साल में आत्महत्या। 50 साल के बाद नामांकन।",
    cost: "₹436 per year only",
    costHindi: "सिर्फ ₹436 प्रति वर्ष",
    validity: "1 year (June to May) — renewable till age 55",
    validityHindi: "1 साल (जून से मई) — 55 साल की उम्र तक नवीनीकरण योग्य",
    processingTime: "Same day enrollment",
    processingTimeHindi: "उसी दिन नामांकन",
    whereToApply: [
      { en: "Visit your bank branch", hi: "अपनी बैंक शाखा में जाएं" },
      { en: "Online through your bank's net banking", hi: "अपने बैंक की नेट बैंकिंग से ऑनलाइन" },
      { en: "Through bank mobile app", hi: "बैंक मोबाइल ऐप के माध्यम से" },
      { en: "Call helpline: 1800-180-1111", hi: "हेल्पलाइन: 1800-180-1111" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Savings Bank Account", hi: "बचत बैंक खाता" },
      { en: "Nominee Details", hi: "नॉमिनी विवरण" },
      { en: "Consent Form", hi: "सहमति फॉर्म" }
    ],
    faqs: [
      { q: { en: "What is the maximum age?", hi: "अधिकतम आयु क्या है?" }, a: { en: "50 years for enrollment.", hi: "नामांकन के लिए 50 साल।" } },
      { q: { en: "Is medical test required?", hi: "क्या चिकित्सा परीक्षण चाहिए?" }, a: { en: "No medical test required.", hi: "कोई चिकित्सा परीक्षण नहीं चाहिए।" } }
    ],
    category: "other",
    ministry: "Ministry of Finance",
    eligibility: { minAge: 18, maxAge: 50, gender: "any", category: [], states: [] },
    officialLink: "https://www.jansuraksha.gov.in",
    helpline: "1800-180-1111",
    launchedYear: 2015
  },
  
  // ========== SCHEME 21: PM Jan Dhan Yojana ==========
  {
    name: "PM Jan Dhan Yojana",
    nameHindi: "प्रधानमंत्री जन धन योजना",
    shortDescription: "Financial inclusion scheme providing zero-balance bank account for every household.",
    shortDescriptionHindi: "हर परिवार के लिए जीरो-बैलेंस बैंक खाता प्रदान करने वाली वित्तीय समावेशन योजना।",
    fullDescription: "Pradhan Mantri Jan Dhan Yojana (PMJDY) was launched in 2014 to ensure financial inclusion of every household in India. The scheme provides a zero-balance savings bank account with no minimum balance requirement. It comes with a free RuPay debit card, ₹2 lakh accident insurance, and ₹10,000 overdraft facility. The scheme also provides access to credit, insurance, and pension products. More than 50 crore accounts have been opened under this scheme since inception. It has been a game-changer for direct benefit transfers (DBT) of government subsidies.",
    fullDescriptionHindi: "प्रधानमंत्री जन धन योजना (PMJDY) 2014 में भारत के हर परिवार के वित्तीय समावेशन को सुनिश्चित करने के लिए शुरू की गई थी। योजना जीरो-बैलेंस बचत बैंक खाता प्रदान करती है जिसमें कोई न्यूनतम शेष राशि की आवश्यकता नहीं होती। इसमें मुफ्त RuPay डेबिट कार्ड, ₹2 लाख दुर्घटना बीमा, और ₹10,000 ओवरड्राफ्ट सुविधा मिलती है। योजना ऋण, बीमा और पेंशन उत्पादों तक पहुंच भी प्रदान करती है।",
    whoCanApply: "Any Indian citizen aged 10+ years who doesn't have a bank account. Aadhaar and mobile number required for account opening. Migrant workers can open account in any city.",
    whoCanApplyHindi: "कोई भी भारतीय नागरिक जो 10+ साल का है और जिसका बैंक खाता नहीं है। खाता खोलने के लिए आधार और मोबाइल नंबर जरूरी। प्रवासी कामगार किसी भी शहर में खाता खोल सकते हैं।",
    benefitsDetailed: [
      { en: "Zero-balance savings account", hi: "जीरो-बैलेंस बचत खाता" },
      { en: "Free RuPay debit card", hi: "मुफ्त RuPay डेबिट कार्ड" },
      { en: "₹2 lakh accident insurance cover", hi: "₹2 लाख दुर्घटना बीमा कवर" },
      { en: "₹10,000 overdraft facility after 6 months", hi: "6 महीने बाद ₹10,000 ओवरड्राफ्ट सुविधा" },
      { en: "Direct benefit transfer for subsidies", hi: "सब्सिडी के लिए सीधा लाभ हस्तांतरण" },
      { en: "Access to PMJJBY and PMSBY insurance", hi: "PMJJBY और PMSBY बीमा तक पहुंच" },
      { en: "No minimum balance requirement", hi: "कोई न्यूनतम शेष राशि की आवश्यकता नहीं" }
    ],
    notCovered: "People who already have a bank account. Interest not paid on zero-balance accounts (only on savings variants).",
    notCoveredHindi: "जिन लोगों के पास पहले से बैंक खाता है। जीरो-बैलेंस खातों पर ब्याज नहीं मिलता (सिर्फ बचत वेरिएंट पर)।",
    cost: "FREE — No minimum balance, no account opening charges",
    costHindi: "मुफ्त — कोई न्यूनतम शेष नहीं, कोई खाता खोलने का शुल्क नहीं",
    validity: "Lifetime account validity",
    validityHindi: "आजीवन खाता वैधता",
    processingTime: "Same day account opening",
    processingTimeHindi: "उसी दिन खाता खुल जाता है",
    whereToApply: [
      { en: "Visit any bank branch", hi: "किसी भी बैंक शाखा में जाएं" },
      { en: "Visit any Bank Mitra (Business Correspondent)", hi: "किसी भी बैंक मित्र (व्यवसाय संवाददाता) से मिलें" },
      { en: "Visit nearest Post Office", hi: "नजदीकी डाकघर में जाएं" },
      { en: "Call helpline: 1800-11-0001", hi: "हेल्पलाइन: 1800-11-0001" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Mobile Number", hi: "मोबाइल नंबर" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "Is there a minimum balance?", hi: "क्या न्यूनतम शेष राशि है?" }, a: { en: "No, zero-balance account.", hi: "नहीं, जीरो-बैलेंस खाता।" } },
      { q: { en: "What is the age limit?", hi: "आयु सीमा क्या है?" }, a: { en: "10+ years.", hi: "10+ साल।" } },
      { q: { en: "Do I get interest?", hi: "क्या मुझे ब्याज मिलता है?" }, a: { en: "Yes, same as regular savings account.", hi: "हां, नियमित बचत खाते की तरह।" } }
    ],
    category: "other",
    ministry: "Ministry of Finance",
    eligibility: { minAge: 10, gender: "any", category: [], states: [] },
    officialLink: "https://pmjdy.gov.in",
    helpline: "1800-11-0001",
    launchedYear: 2014
  },
  
  // ========== SCHEME 22: PM Garib Kalyan Anna Yojana ==========
  {
    name: "PM Garib Kalyan Anna Yojana",
    nameHindi: "प्रधानमंत्री गरीब कल्याण अन्न योजना",
    shortDescription: "Free food grains to poor families under National Food Security Act.",
    shortDescriptionHindi: "राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत गरीब परिवारों को मुफ्त खाद्यान्न।",
    fullDescription: "Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY) was launched in 2020 during the COVID-19 pandemic to provide free food grains to poor families. Under this scheme, beneficiaries of the National Food Security Act (NFSA) receive 5 kg free food grains per person per month. This is over and above the subsidized grains they get under NFSA. The scheme has been extended multiple times and now covers over 80 crore beneficiaries. It ensures food security for the most vulnerable sections of society including migrant workers, daily wagers, and BPL families.",
    fullDescriptionHindi: "प्रधानमंत्री गरीब कल्याण अन्न योजना (PMGKAY) 2020 में COVID-19 महामारी के दौरान गरीब परिवारों को मुफ्त खाद्यान्न प्रदान करने के लिए शुरू की गई थी। इस योजना के तहत राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) के लाभार्थियों को प्रति व्यक्ति प्रति माह 5 किलो मुफ्त खाद्यान्न मिलता है। यह NFSA के तहत मिलने वाले सब्सिडी वाले अनाज के अतिरिक्त है।",
    whoCanApply: "All beneficiaries covered under National Food Security Act (NFSA) — including Antyodaya Anna Yojana (AAY) and Priority Households (PHH) cardholders. Must have a valid ration card.",
    whoCanApplyHindi: "राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) के तहत कवर सभी लाभार्थी — जिनमें अंत्योदय अन्न योजना (AAY) और प्राथमिकता परिवार (PHH) कार्डधारक शामिल हैं। वैध राशन कार्ड होना चाहिए।",
    benefitsDetailed: [
      { en: "5 kg free food grains per person per month", hi: "प्रति व्यक्ति प्रति माह 5 किलो मुफ्त खाद्यान्न" },
      { en: "In addition to regular NFSA quota", hi: "नियमित NFSA कोटा के अतिरिक्त" },
      { en: "Wheat or rice — as per state allocation", hi: "गेहूं या चावल — राज्य आवंटन के अनुसार" },
      { en: "Covers 80+ crore beneficiaries", hi: "80+ करोड़ लाभार्थियों को कवर" },
      { en: "Available at fair price shops", hi: "उचित मूल्य दुकानों पर उपलब्ध" },
      { en: "No payment required — completely free", hi: "कोई भुगतान नहीं — पूरी तरह मुफ्त" }
    ],
    notCovered: "Families without ration card. Families not covered under NFSA. Above poverty line families (as per state criteria).",
    notCoveredHindi: "बिना राशन कार्ड वाले परिवार। NFSA के तहत कवर नहीं परिवार। गरीबी रेखा से ऊपर के परिवार (राज्य मानदंडों के अनुसार)।",
    cost: "FREE — No payment required",
    costHindi: "मुफ्त — कोई भुगतान आवश्यक नहीं",
    validity: "Extended till further notice",
    validityHindi: "अगली सूचना तक बढ़ाया गया",
    processingTime: "Immediate at fair price shop",
    processingTimeHindi: "उचित मूल्य दुकान पर तत्काल",
    whereToApply: [
      { en: "Visit your local Fair Price Shop (Ration Shop)", hi: "अपनी स्थानीय उचित मूल्य दुकान (राशन दुकान) पर जाएं" },
      { en: "Contact local Food & Civil Supplies Office", hi: "स्थानीय खाद्य एवं नागरिक आपूर्ति कार्यालय से संपर्क करें" },
      { en: "Call helpline: 1967 (toll-free)", hi: "हेल्पलाइन: 1967 (टोल-फ्री)" }
    ],
    documentsDetailed: [
      { en: "Ration Card (mandatory)", hi: "राशन कार्ड (अनिवार्य)" },
      { en: "Aadhaar Card", hi: "आधार कार्ड" }
    ],
    faqs: [
      { q: { en: "How much food grain do I get?", hi: "मुझे कितना खाद्यान्न मिलता है?" }, a: { en: "5 kg per person per month, free.", hi: "प्रति व्यक्ति प्रति माह 5 किलो, मुफ्त।" } },
      { q: { en: "Is this in addition to my regular quota?", hi: "क्या यह मेरे नियमित कोटा के अतिरिक्त है?" }, a: { en: "Yes, additional.", hi: "हां, अतिरिक्त।" } },
      { q: { en: "Do I need to pay?", hi: "क्या मुझे भुगतान करना होगा?" }, a: { en: "No, completely free.", hi: "नहीं, पूरी तरह मुफ्त।" } }
    ],
    category: "other",
    ministry: "Ministry of Consumer Affairs, Food and Public Distribution",
    eligibility: { isBPL: true, gender: "any", category: [], states: [] },
    officialLink: "https://dfpd.gov.in",
    helpline: "1967",
    launchedYear: 2020
  },
    // ========== SCHEME 23: SWAYAM ==========
  {
    name: "SWAYAM",
    nameHindi: "स्वयं",
    shortDescription: "Free online education platform with courses from IITs, IIMs, and top institutes.",
    shortDescriptionHindi: "IIT, IIM और शीर्ष संस्थानों के पाठ्यक्रमों के साथ मुफ्त ऑनलाइन शिक्षा मंच।",
    fullDescription: "SWAYAM (Study Webs of Active Learning for Young Aspiring Minds) is a Government of India initiative launched in 2017 to provide free online education to all. The platform hosts courses from Class 9 to Post-Graduation level, taught by faculty from IITs, IIMs, central universities, and other top institutions. Courses include video lectures, reading material, self-assessment tests, and discussion forums. Students can earn certificates after passing proctored exams. Over 3000 courses are available in various subjects including engineering, science, humanities, management, and skill development.",
    fullDescriptionHindi: "स्वयं (SWAYAM) भारत सरकार की एक पहल है जो 2017 में सभी को मुफ्त ऑनलाइन शिक्षा प्रदान करने के लिए शुरू की गई थी। यह मंच कक्षा 9 से स्नातकोत्तर स्तर तक के पाठ्यक्रम प्रदान करता है, जो IIT, IIM, केंद्रीय विश्वविद्यालयों और अन्य शीर्ष संस्थानों के संकाय द्वारा पढ़ाए जाते हैं। पाठ्यक्रमों में वीडियो व्याख्यान, पठन सामग्री, स्व-मूल्यांकन परीक्षण और चर्चा मंच शामिल हैं। छात्र प्रोक्टर्ड परीक्षा पास करने के बाद प्रमाण पत्र प्राप्त कर सकते हैं।",
    whoCanApply: "Anyone with internet access — students, professionals, lifelong learners. No age limit. Free registration with email ID. Some courses may have prerequisites.",
    whoCanApplyHindi: "इंटरनेट एक्सेस वाला कोई भी — छात्र, पेशेवर, आजीवन शिक्षार्थी। कोई आयु सीमा नहीं। ईमेल आईडी के साथ मुफ्त पंजीकरण। कुछ पाठ्यक्रमों में पूर्वापेक्षाएं हो सकती हैं।",
    benefitsDetailed: [
      { en: "Free online courses from IITs, IIMs, and top institutes", hi: "IIT, IIM और शीर्ष संस्थानों से मुफ्त ऑनलाइन पाठ्यक्रम" },
      { en: "3000+ courses in various subjects", hi: "विभिन्न विषयों में 3000+ पाठ्यक्रम" },
      { en: "Video lectures + reading material + tests", hi: "वीडियो व्याख्यान + पठन सामग्री + परीक्षण" },
      { en: "Certificate after passing proctored exam", hi: "प्रोक्टर्ड परीक्षा पास करने पर प्रमाण पत्र" },
      { en: "Credit transfer to academic degrees", hi: "शैक्षणिक डिग्री में क्रेडिट स्थानांतरण" },
      { en: "Learn at your own pace", hi: "अपनी गति से सीखें" },
      { en: "Completely free course material", hi: "पूरी तरह मुफ्त पाठ्यक्रम सामग्री" }
    ],
    notCovered: "Certificate fee (small amount ₹500-₹1000). Some specialized courses may have fees. No placement guarantee.",
    notCoveredHindi: "प्रमाण पत्र शुल्क (छोटी राशि ₹500-₹1000)। कुछ विशेष पाठ्यक्रमों में शुल्क हो सकता है। कोई प्लेसमेंट गारंटी नहीं।",
    cost: "FREE course material. Certificate: ₹500-₹1000 (optional)",
    costHindi: "मुफ्त पाठ्यक्रम सामग्री। प्रमाण पत्र: ₹500-₹1000 (वैकल्पिक)",
    validity: "Course duration varies (4-12 weeks)",
    validityHindi: "पाठ्यक्रम अवधि अलग (4-12 सप्ताह)",
    processingTime: "Instant enrollment",
    processingTimeHindi: "तत्काल नामांकन",
    whereToApply: [
      { en: "Online: swayam.gov.in", hi: "ऑनलाइन: swayam.gov.in" },
      { en: "SWAYAM mobile app (Android/iOS)", hi: "SWAYAM मोबाइल ऐप (Android/iOS)" },
      { en: "Call helpline: 1800-121-3001", hi: "हेल्पलाइन: 1800-121-3001" }
    ],
    documentsDetailed: [
      { en: "Email ID", hi: "ईमेल आईडी" },
      { en: "Aadhaar (for certificate)", hi: "आधार (प्रमाण पत्र के लिए)" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "Is SWAYAM free?", hi: "क्या स्वयं मुफ्त है?" }, a: { en: "Yes, courses are free. Only certificate has small fee.", hi: "हां, पाठ्यक्रम मुफ्त हैं। सिर्फ प्रमाण पत्र पर छोटा शुल्क।" } },
      { q: { en: "Do I get a certificate?", hi: "क्या मुझे प्रमाण पत्र मिलता है?" }, a: { en: "Yes, after passing proctored exam.", hi: "हां, प्रोक्टर्ड परीक्षा पास करने के बाद।" } }
    ],
    category: "education",
    ministry: "Ministry of Education",
    eligibility: { minAge: 12, isStudent: true, gender: "any", category: [], states: [] },
    officialLink: "https://swayam.gov.in",
    helpline: "1800-121-3001",
    launchedYear: 2017
  },
  
  // ========== SCHEME 24: National Career Service ==========
  {
    name: "National Career Service",
    nameHindi: "राष्ट्रीय करियर सेवा",
    shortDescription: "Free job portal connecting job seekers with employers across India.",
    shortDescriptionHindi: "पूरे भारत में नौकरी चाहने वालों को नियोक्ताओं से जोड़ने वाला मुफ्त नौकरी पोर्टल।",
    fullDescription: "National Career Service (NCS) is a Government of India project launched in 2015 to provide a one-stop solution for all career-related services. It connects job seekers with employers, offers career counseling, skill development courses, and information about various government schemes. Job seekers can create profiles, upload resumes, and apply to jobs for free. Employers can post job vacancies and search for candidates. NCS also has partnerships with private job portals and provides job fairs and career counseling sessions across the country.",
    fullDescriptionHindi: "राष्ट्रीय करियर सेवा (NCS) भारत सरकार की एक परियोजना है जो 2015 में सभी करियर संबंधी सेवाओं के लिए एक वन-स्टॉप समाधान प्रदान करने के लिए शुरू की गई थी। यह नौकरी चाहने वालों को नियोक्ताओं से जोड़ती है, करियर परामर्श, कौशल विकास पाठ्यक्रम और विभिन्न सरकारी योजनाओं की जानकारी प्रदान करती है। नौकरी चाहने वाले मुफ्त में प्रोफाइल बना सकते हैं, रिज्यूमे अपलोड कर सकते हैं और नौकरियों के लिए आवेदन कर सकते हैं।",
    whoCanApply: "Any Indian citizen looking for a job — freshers, experienced professionals, students. No age limit. Free registration with email/mobile. Both job seekers and employers can register.",
    whoCanApplyHindi: "नौकरी की तलाश करने वाला कोई भी भारतीय नागरिक — फ्रेशर्स, अनुभवी पेशेवर, छात्र। कोई आयु सीमा नहीं। ईमेल/मोबाइल से मुफ्त पंजीकरण। नौकरी चाहने वाले और नियोक्ता दोनों पंजीकरण कर सकते हैं।",
    benefitsDetailed: [
      { en: "Free job portal — no charges", hi: "मुफ्त नौकरी पोर्टल — कोई शुल्क नहीं" },
      { en: "Access to lakhs of job opportunities", hi: "लाखों नौकरी के अवसरों तक पहुंच" },
      { en: "Career counseling by experts", hi: "विशेषज्ञों द्वारा करियर परामर्श" },
      { en: "Free skill development courses", hi: "मुफ्त कौशल विकास पाठ्यक्रम" },
      { en: "Job fairs across India", hi: "भारत भर में जॉब फेयर" },
      { en: "Resume building assistance", hi: "रिज्यूमे बनाने में सहायता" },
      { en: "Direct connection with employers", hi: "नियोक्ताओं से सीधा संपर्क" }
    ],
    notCovered: "No government job guarantee. No placement guarantee. Services only matching — final selection by employer.",
    notCoveredHindi: "कोई सरकारी नौकरी की गारंटी नहीं। कोई प्लेसमेंट गारंटी नहीं। सेवाएं सिर्फ मिलान — अंतिम चयन नियोक्ता द्वारा।",
    cost: "FREE — No registration or service charges",
    costHindi: "मुफ्त — कोई पंजीकरण या सेवा शुल्क नहीं",
    validity: "Lifetime profile validity",
    validityHindi: "आजीवन प्रोफाइल वैधता",
    processingTime: "Instant registration",
    processingTimeHindi: "तत्काल पंजीकरण",
    whereToApply: [
      { en: "Online: ncs.gov.in", hi: "ऑनलाइन: ncs.gov.in" },
      { en: "NCS mobile app (Android/iOS)", hi: "NCS मोबाइल ऐप (Android/iOS)" },
      { en: "Visit nearest Employment Exchange", hi: "नजदीकी रोजगार कार्यालय में जाएं" },
      { en: "Call helpline: 1800-425-1514", hi: "हेल्पलाइन: 1800-425-1514" }
    ],
    documentsDetailed: [
      { en: "Email ID", hi: "ईमेल आईडी" },
      { en: "Mobile Number", hi: "मोबाइल नंबर" },
      { en: "Resume (PDF)", hi: "रिज्यूमे (PDF)" },
      { en: "Education Certificates", hi: "शिक्षा प्रमाण पत्र" }
    ],
    faqs: [
      { q: { en: "Is NCS free?", hi: "क्या NCS मुफ्त है?" }, a: { en: "Yes, completely free for both job seekers and employers.", hi: "हां, नौकरी चाहने वालों और नियोक्ताओं दोनों के लिए पूरी तरह मुफ्त।" } },
      { q: { en: "Does NCS guarantee a job?", hi: "क्या NCS नौकरी की गारंटी देता है?" }, a: { en: "No, only connects with employers.", hi: "नहीं, सिर्फ नियोक्ताओं से जोड़ता है।" } }
    ],
    category: "employment",
    ministry: "Ministry of Labour and Employment",
    eligibility: { minAge: 18, gender: "any", category: [], states: [] },
    officialLink: "https://www.ncs.gov.in",
    helpline: "1800-425-1514",
    launchedYear: 2015
  },
  
  // ========== SCHEME 25: PM Kaushal Vikas Yojana ==========
  {
    name: "PM Kaushal Vikas Yojana",
    nameHindi: "प्रधानमंत्री कौशल विकास योजना",
    shortDescription: "Free skill training and certification to youth for better employment opportunities.",
    shortDescriptionHindi: "बेहतर रोजगार के अवसरों के लिए युवाओं को मुफ्त कौशल प्रशिक्षण और प्रमाणन।",
    fullDescription: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY) was launched in 2015 to enable Indian youth to take up industry-relevant skill training. The scheme provides free short-term training (150-300 hours) in various sectors like IT, healthcare, construction, textiles, electronics, and beauty & wellness. After training, candidates appear for assessment and receive a certificate from NSDC (National Skill Development Corporation). The scheme also provides placement assistance and monetary rewards. PMKVY 4.0 (2023) focuses on emerging technologies like AI, robotics, and drones.",
    fullDescriptionHindi: "प्रधानमंत्री कौशल विकास योजना (PMKVY) 2015 में भारतीय युवाओं को उद्योग-प्रासंगिक कौशल प्रशिक्षण लेने में सक्षम बनाने के लिए शुरू की गई थी। योजना IT, स्वास्थ्य सेवा, निर्माण, वस्त्र, इलेक्ट्रॉनिक्स और सौंदर्य एवं कल्याण जैसे विभिन्न क्षेत्रों में मुफ्त अल्पकालिक प्रशिक्षण (150-300 घंटे) प्रदान करती है। प्रशिक्षण के बाद, उम्मीदवार मूल्यांकन के लिए उपस्थित होते हैं और NSDC से प्रमाण पत्र प्राप्त करते हैं।",
    whoCanApply: "Indian youth aged 15-45 years. School/college dropouts, unemployed youth, and those looking for skill upgradation. No specific educational requirement for most courses.",
    whoCanApplyHindi: "15-45 साल के भारतीय युवा। स्कूल/कॉलेज ड्रॉपआउट, बेरोजगार युवा, और कौशल उन्नयन चाहने वाले। अधिकांश पाठ्यक्रमों के लिए कोई विशेष शैक्षिक आवश्यकता नहीं।",
    benefitsDetailed: [
      { en: "FREE skill training in various sectors", hi: "विभिन्न क्षेत्रों में मुफ्त कौशल प्रशिक्षण" },
      { en: "NSDC certification after training", hi: "प्रशिक्षण के बाद NSDC प्रमाणन" },
      { en: "Placement assistance after completion", hi: "पूरा होने के बाद प्लेसमेंट सहायता" },
      { en: "Monetary reward on successful completion", hi: "सफल समापन पर मौद्रिक पुरस्कार" },
      { en: "Short-term courses (3-6 months)", hi: "अल्पकालिक पाठ्यक्रम (3-6 महीने)" },
      { en: "Industry-relevant curriculum", hi: "उद्योग-प्रासंगिक पाठ्यक्रम" },
      { en: "PMKVY 4.0 includes AI, robotics, drones", hi: "PMKVY 4.0 में AI, रोबोटिक्स, ड्रोन शामिल" }
    ],
    notCovered: "Candidates already enrolled in other government skill schemes. People above 45 years (special cases considered). No job guarantee.",
    notCoveredHindi: "अन्य सरकारी कौशल योजनाओं में पहले से नामांकित उम्मीदवार। 45 साल से अधिक उम्र के लोग (विशेष मामले माने जाते हैं)। कोई नौकरी की गारंटी नहीं।",
    cost: "FREE — No training fee",
    costHindi: "मुफ्त — कोई प्रशिक्षण शुल्क नहीं",
    validity: "Course duration 3-6 months",
    validityHindi: "पाठ्यक्रम अवधि 3-6 महीने",
    processingTime: "Depends on course — usually 3-6 months",
    processingTimeHindi: "पाठ्यक्रम पर निर्भर — आमतौर पर 3-6 महीने",
    whereToApply: [
      { en: "Online: pmkvyofficial.org", hi: "ऑनलाइन: pmkvyofficial.org" },
      { en: "Visit nearest PMKVY training center", hi: "नजदीकी PMKVY प्रशिक्षण केंद्र पर जाएं" },
      { en: "Call helpline: 8800055555", hi: "हेल्पलाइन: 8800055555" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Education Certificate", hi: "शिक्षा प्रमाण पत्र" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "Is PMKVY really free?", hi: "क्या PMKVY वाकई मुफ्त है?" }, a: { en: "Yes, complete free training with certification.", hi: "हां, प्रमाणन के साथ पूरी तरह मुफ्त प्रशिक्षण।" } },
      { q: { en: "Do I get a job after training?", hi: "प्रशिक्षण के बाद नौकरी मिलती है?" }, a: { en: "Placement assistance provided, but no guarantee.", hi: "प्लेसमेंट सहायता प्रदान की जाती है, लेकिन कोई गारंटी नहीं।" } }
    ],
    category: "employment",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    eligibility: { minAge: 15, maxAge: 45, gender: "any", category: [], states: [] },
    officialLink: "https://www.pmkvyofficial.org",
    helpline: "8800055555",
    launchedYear: 2015
  },
  
  // ========== SCHEME 26: Digital India ==========
  {
    name: "Digital India",
    nameHindi: "डिजिटल इंडिया",
    shortDescription: "Digital literacy and internet access for all citizens.",
    shortDescriptionHindi: "सभी नागरिकों के लिए डिजिटल साक्षरता और इंटरनेट पहुंच।",
    fullDescription: "Digital India is a flagship programme launched in 2015 to transform India into a digitally empowered society and knowledge economy. The programme aims to provide broadband connectivity to all villages, digital literacy to citizens, and online delivery of government services. Key initiatives include Common Service Centers (CSC), DigiLocker, e-Hospital, e-Kranti, and BharatNet. Digital India has brought government services online — Aadhaar, PAN, passports, land records, and more. It has made citizens digitally aware and enabled direct benefit transfer (DBT) of subsidies. Over 4 lakh CSCs are operational across India.",
    fullDescriptionHindi: "डिजिटल इंडिया 2015 में शुरू किया गया एक प्रमुख कार्यक्रम है जो भारत को डिजिटल रूप से सशक्त समाज और ज्ञान अर्थव्यवस्था में बदलने के लिए है। कार्यक्रम का उद्देश्य सभी गांवों को ब्रॉडबैंड कनेक्टिविटी, नागरिकों को डिजिटल साक्षरता, और सरकारी सेवाओं की ऑनलाइन डिलीवरी प्रदान करना है।",
    whoCanApply: "All Indian citizens. Free digital literacy training through CSCs. No age limit. Village-level internet connectivity being expanded.",
    whoCanApplyHindi: "सभी भारतीय नागरिक। CSC के माध्यम से मुफ्त डिजिटल साक्षरता प्रशिक्षण। कोई आयु सीमा नहीं। गांव स्तर पर इंटरनेट कनेक्टिविटी बढ़ाई जा रही है।",
    benefitsDetailed: [
      { en: "Free digital literacy training", hi: "मुफ्त डिजिटल साक्षरता प्रशिक्षण" },
      { en: "Access to online government services", hi: "ऑनलाइन सरकारी सेवाओं तक पहुंच" },
      { en: "DigiLocker — digital documents", hi: "डिजिलॉकर — डिजिटल दस्तावेज" },
      { en: "Common Service Centers in villages", hi: "गांवों में सामान्य सेवा केंद्र" },
      { en: "BharatNet — broadband for villages", hi: "भारतनेट — गांवों के लिए ब्रॉडबैंड" },
      { en: "Online bill payments and applications", hi: "ऑनलाइन बिल भुगतान और आवेदन" },
      { en: "Direct benefit transfer via Aadhaar", hi: "आधार के माध्यम से सीधा लाभ हस्तांतरण" }
    ],
    notCovered: "Physical/offline services are not part of Digital India. Internet connection cost (except BharatNet villages). Some services may have nominal fees.",
    notCoveredHindi: "भौतिक/ऑफलाइन सेवाएं डिजिटल इंडिया का हिस्सा नहीं हैं। इंटरनेट कनेक्शन लागत (भारतनेट गांवों को छोड़कर)। कुछ सेवाओं में मामूली शुल्क हो सकता है।",
    cost: "FREE — Government digital services",
    costHindi: "मुफ्त — सरकारी डिजिटल सेवाएं",
    validity: "Ongoing programme",
    validityHindi: "चल रहा कार्यक्रम",
    processingTime: "Immediate for most services",
    processingTimeHindi: "अधिकांश सेवाओं के लिए तत्काल",
    whereToApply: [
      { en: "Online: digitalindia.gov.in", hi: "ऑनलाइन: digitalindia.gov.in" },
      { en: "Visit nearest Common Service Centre (CSC)", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Call helpline: 1800-3000-3468", hi: "हेल्पलाइन: 1800-3000-3468" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Mobile Number", hi: "मोबाइल नंबर" },
      { en: "Email ID", hi: "ईमेल आईडी" }
    ],
    faqs: [
      { q: { en: "Is Digital India free?", hi: "क्या डिजिटल इंडिया मुफ्त है?" }, a: { en: "Yes, most government digital services are free.", hi: "हां, अधिकांश सरकारी डिजिटल सेवाएं मुफ्त हैं।" } },
      { q: { en: "What is DigiLocker?", hi: "डिजिलॉकर क्या है?" }, a: { en: "Digital storage for your documents — Aadhaar, PAN, etc.", hi: "आपके दस्तावेजों के लिए डिजिटल भंडारण — आधार, पैन, आदि।" } }
    ],
    category: "other",
    ministry: "Ministry of Electronics and Information Technology",
    eligibility: { gender: "any", category: [], states: [] },
    officialLink: "https://digitalindia.gov.in",
    helpline: "1800-3000-3468",
    launchedYear: 2015
  },
  
  // ========== SCHEME 27: PM Vishwakarma Yojana ==========
  {
    name: "PM Vishwakarma Yojana",
    nameHindi: "पीएम विश्वकर्मा योजना",
    shortDescription: "Support for traditional artisans and craftspeople with toolkit and loans.",
    shortDescriptionHindi: "पारंपरिक कारीगरों और शिल्पकारों को टूलकिट और ऋण के साथ सहायता।",
    fullDescription: "Pradhan Mantri Vishwakarma Yojana was launched in 2023 to provide end-to-end support to artisans and craftspeople who work with their hands and tools. The scheme covers 18 traditional trades including carpenter, blacksmith, potter, sculptor, tailor, and more. Beneficiaries get a toolkit incentive of ₹15,000, skill training, and collateral-free credit up to ₹3 lakh at 5% interest rate. The scheme also provides digital transaction incentives and marketing support. Over 30 lakh families are expected to benefit from this scheme. It aims to strengthen the traditional artisan ecosystem of India.",
    fullDescriptionHindi: "प्रधानमंत्री विश्वकर्मा योजना 2023 में शुरू की गई थी जो अपने हाथों और औजारों से काम करने वाले कारीगरों और शिल्पकारों को एंड-टू-एंड सहायता प्रदान करती है। योजना में 18 पारंपरिक व्यवसाय शामिल हैं जिनमें बढ़ई, लोहार, कुम्हार, मूर्तिकार, दर्जी और अन्य शामिल हैं। लाभार्थियों को ₹15,000 का टूलकिट प्रोत्साहन, कौशल प्रशिक्षण, और 5% ब्याज दर पर ₹3 लाख तक का बिना गारंटी ऋण मिलता है।",
    whoCanApply: "Traditional artisans and craftspeople aged 18+ years working in 18 notified trades. Must be self-employed. Family should not have availed similar scheme benefits. Aadhaar and bank account required.",
    whoCanApplyHindi: "18+ आयु के पारंपरिक कारीगर और शिल्पकार जो 18 अधिसूचित व्यवसायों में काम कर रहे हैं। स्व-रोजगार होना चाहिए। परिवार ने समान योजना लाभ नहीं लिया होना चाहिए। आधार और बैंक खाता जरूरी।",
    benefitsDetailed: [
      { en: "₹15,000 toolkit incentive (in 2 installments)", hi: "₹15,000 टूलकिट प्रोत्साहन (2 किस्तों में)" },
      { en: "Skill training with ₹500 daily stipend", hi: "₹500 दैनिक वजीफे के साथ कौशल प्रशिक्षण" },
      { en: "Collateral-free loan up to ₹3 lakh at 5% interest", hi: "5% ब्याज पर ₹3 लाख तक बिना गारंटी ऋण" },
      { en: "Digital transaction incentive ₹1 per transaction", hi: "डिजिटल लेनदेन प्रोत्साहन ₹1 प्रति लेनदेन" },
      { en: "Marketing support and branding", hi: "विपणन सहायता और ब्रांडिंग" },
      { en: "Free toolkit of modern tools", hi: "आधुनिक उपकरणों का मुफ्त टूलकिट" },
      { en: "Recognition as 'Vishwakarma' with certificate", hi: "प्रमाण पत्र के साथ 'विश्वकर्मा' के रूप में मान्यता" }
    ],
    notCovered: "Non-traditional workers. Families who already availed similar benefits. Government employees. People not in the 18 notified trades.",
    notCoveredHindi: "गैर-पारंपरिक कामगार। जिन परिवारों ने पहले से समान लाभ प्राप्त किया है। सरकारी कर्मचारी। 18 अधिसूचित व्यवसायों में नहीं वाले लोग।",
    cost: "FREE toolkit + 5% interest on loans",
    costHindi: "मुफ्त टूलकिट + ऋण पर 5% ब्याज",
    validity: "Loan tenure 18 months (repayable)",
    validityHindi: "ऋण अवधि 18 महीने (चुकाने योग्य)",
    processingTime: "Registration: 2-4 weeks",
    processingTimeHindi: "पंजीकरण: 2-4 सप्ताह",
    whereToApply: [
      { en: "Visit nearest Common Service Centre (CSC)", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Online: pmvishwakarma.gov.in", hi: "ऑनलाइन: pmvishwakarma.gov.in" },
      { en: "Call helpline: 1800-267-7777", hi: "हेल्पलाइन: 1800-267-7777" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Proof of Trade (self-declaration)", hi: "व्यवसाय का प्रमाण (स्व-घोषणा)" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "Who is eligible?", hi: "कौन पात्र है?" }, a: { en: "Traditional artisans in 18 notified trades.", hi: "18 अधिसूचित व्यवसायों में पारंपरिक कारीगर।" } },
      { q: { en: "What is the interest rate on loan?", hi: "ऋण पर ब्याज दर क्या है?" }, a: { en: "5% per annum, collateral-free.", hi: "5% प्रति वर्ष, बिना गारंटी।" } },
      { q: { en: "Do I get free tools?", hi: "क्या मुफ्त उपकरण मिलते हैं?" }, a: { en: "Yes, ₹15,000 toolkit incentive.", hi: "हां, ₹15,000 टूलकिट प्रोत्साहन।" } }
    ],
    category: "business",
    ministry: "Ministry of Micro, Small and Medium Enterprises",
    eligibility: { minAge: 18, hasBusiness: true, gender: "any", category: [], states: [] },
    officialLink: "https://pmvishwakarma.gov.in",
    helpline: "1800-267-7777",
    launchedYear: 2023
  },
    // ========== SCHEME 28: PM Poshan Shakti Nirman ==========
  {
    name: "PM Poshan Shakti Nirman",
    nameHindi: "प्रधानमंत्री पोषण शक्ति निर्माण",
    shortDescription: "Free nutritious mid-day meals for school children studying in classes 1-8.",
    shortDescriptionHindi: "कक्षा 1-8 में पढ़ने वाले स्कूली बच्चों के लिए मुफ्त पौष्टिक मध्याह्न भोजन।",
    fullDescription: "PM POSHAN (earlier known as Mid-Day Meal Scheme) was renamed in 2021 and provides free nutritious meals to children studying in Government and Government-aided schools from Class 1 to Class 8. The scheme aims to improve nutritional status of school-age children, encourage school attendance, and support their cognitive development. The menu includes rice, dal, vegetables, and other nutritious items — usually 450 calories and 12 grams of protein per meal. Over 11.8 crore children benefit from this scheme across 11.2 lakh schools. The scheme is implemented by state governments with central assistance.",
    fullDescriptionHindi: "पीएम पोषण (पहले मिड-डे मील योजना के रूप में जानी जाती थी) 2021 में नाम बदल दिया गया और यह सरकारी और सरकारी सहायता प्राप्त स्कूलों में कक्षा 1 से 8 तक पढ़ने वाले बच्चों को मुफ्त पौष्टिक भोजन प्रदान करती है। योजना का उद्देश्य स्कूली बच्चों की पोषण स्थिति में सुधार करना, स्कूल उपस्थिति को प्रोत्साहित करना और उनके संज्ञानात्मक विकास का समर्थन करना है।",
    whoCanApply: "All children studying in Government, Government-aided, and local body schools from Class 1 to Class 8. Also covers children in Special Training Centers and Madrasas/Maktabs supported by government.",
    whoCanApplyHindi: "सरकारी, सरकारी सहायता प्राप्त और स्थानीय निकाय स्कूलों में कक्षा 1 से 8 तक पढ़ने वाले सभी बच्चे। विशेष प्रशिक्षण केंद्रों और सरकार द्वारा समर्थित मदरसों/मकतबों के बच्चे भी शामिल।",
    benefitsDetailed: [
      { en: "Free nutritious mid-day meal every school day", hi: "हर स्कूल दिन मुफ्त पौष्टिक मध्याह्न भोजन" },
      { en: "450 calories and 12 grams protein per meal", hi: "प्रति भोजन 450 कैलोरी और 12 ग्राम प्रोटीन" },
      { en: "Improves nutrition and cognitive development", hi: "पोषण और संज्ञानात्मक विकास में सुधार" },
      { en: "Encourages school attendance and retention", hi: "स्कूल उपस्थिति और प्रतिधारण को प्रोत्साहित" },
      { en: "Menu changes daily (rice, dal, vegetables)", hi: "मेनू रोज बदलता है (चावल, दाल, सब्जियां)" },
      { en: "No cost to parents — completely free", hi: "माता-पिता के लिए कोई लागत नहीं — पूरी तरह मुफ्त" },
      { en: "Special meals on festivals and events", hi: "त्योहारों और कार्यक्रमों पर विशेष भोजन" }
    ],
    notCovered: "Children in private unaided schools (unless they wish to opt-in). Children in Anganwadi (covered under separate scheme).",
    notCoveredHindi: "निजी स्वायत्त स्कूलों के बच्चे (जब तक वे ऑप्ट-इन न करें)। आंगनवाड़ी के बच्चे (अलग योजना के तहत कवर)।",
    cost: "FREE — 100% government funded",
    costHindi: "मुफ्त — 100% सरकार द्वारा वित्त पोषित",
    validity: "Ongoing programme",
    validityHindi: "चल रहा कार्यक्रम",
    processingTime: "Immediate — meal provided daily",
    processingTimeHindi: "तत्काल — भोजन रोज प्रदान",
    whereToApply: [
      { en: "Contact your school's Headmaster/Principal", hi: "अपने स्कूल के प्रधानाचार्य से संपर्क करें" },
      { en: "No application needed — automatic for eligible students", hi: "कोई आवेदन आवश्यक नहीं — पात्र छात्रों के लिए स्वचालित" },
      { en: "Call helpline: 1800-11-1555", hi: "हेल्पलाइन: 1800-11-1555" }
    ],
    documentsDetailed: [
      { en: "School Enrollment", hi: "स्कूल नामांकन" },
      { en: "Aadhaar Card (for verification)", hi: "आधार कार्ड (सत्यापन के लिए)" }
    ],
    faqs: [
      { q: { en: "Is the meal really free?", hi: "क्या भोजन वाकई मुफ्त है?" }, a: { en: "Yes, completely free for eligible students.", hi: "हां, पात्र छात्रों के लिए पूरी तरह मुफ्त।" } },
      { q: { en: "What if I study in a private school?", hi: "अगर मैं निजी स्कूल में पढ़ता हूं?" }, a: { en: "Usually not covered, unless opted-in.", hi: "आमतौर पर कवर नहीं, जब तक ऑप्ट-इन न किया जाए।" } }
    ],
    category: "education",
    ministry: "Ministry of Education",
    eligibility: { minAge: 6, maxAge: 14, isStudent: true, gender: "any", category: [], states: [] },
    officialLink: "https://pmposhan.education.gov.in",
    helpline: "1800-11-1555",
    launchedYear: 2021
  },
  
  // ========== SCHEME 29: PM Vidyalaxmi Scheme ==========
  {
    name: "PM Vidyalaxmi Scheme",
    nameHindi: "पीएम विद्यालक्ष्मी योजना",
    shortDescription: "Collateral-free education loan with credit guarantee for meritorious students.",
    shortDescriptionHindi: "मेधावी छात्रों के लिए क्रेडिट गारंटी के साथ बिना गारंटी शिक्षा ऋण।",
    fullDescription: "PM Vidyalaxmi Scheme was launched in 2024 to provide financial support to meritorious students who want to pursue higher education but face financial constraints. Under this scheme, students can get education loans up to ₹10 lakh without any collateral or third-party guarantee. The loan is backed by a credit guarantee fund managed by the National Credit Guarantee Trustee Company (NCGTC). The scheme provides full interest subvention during the moratorium period. It covers all courses in recognized institutions — engineering, medical, management, law, and more. The loan covers tuition fees, hostel fees, books, equipment, and other educational expenses.",
    fullDescriptionHindi: "पीएम विद्यालक्ष्मी योजना 2024 में शुरू की गई थी जो उन मेधावी छात्रों को वित्तीय सहायता प्रदान करती है जो उच्च शिक्षा प्राप्त करना चाहते हैं लेकिन वित्तीय बाधाओं का सामना करते हैं। इस योजना के तहत, छात्र बिना किसी गारंटी या तीसरे पक्ष की गारंटी के ₹10 लाख तक का शिक्षा ऋण प्राप्त कर सकते हैं।",
    whoCanApply: "Indian students who have secured admission in recognized higher education institutions (UG, PG, PhD). Family income should be below ₹8 lakh per year for priority. No age limit. Must be a first-time borrower under this scheme.",
    whoCanApplyHindi: "भारतीय छात्र जिन्होंने मान्यता प्राप्त उच्च शिक्षा संस्थानों (UG, PG, PhD) में प्रवेश प्राप्त किया है। प्राथमिकता के लिए पारिवारिक आय ₹8 लाख प्रति वर्ष से कम होनी चाहिए। कोई आयु सीमा नहीं।",
    benefitsDetailed: [
      { en: "Education loan up to ₹10 lakh without collateral", hi: "बिना गारंटी ₹10 लाख तक शिक्षा ऋण" },
      { en: "100% interest subvention during moratorium", hi: "मोहलत अवधि के दौरान 100% ब्याज सब्सिडी" },
      { en: "Covers tuition fees, hostel, books, equipment", hi: "ट्यूशन फीस, हॉस्टल, किताबें, उपकरण कवर" },
      { en: "Credit guarantee by NCGTC", hi: "NCGTC द्वारा क्रेडिट गारंटी" },
      { en: "Repayment after course completion + 1 year", hi: "कोर्स पूरा होने + 1 साल के बाद चुकौती" },
      { en: "Covers all recognized courses", hi: "सभी मान्यता प्राप्त पाठ्यक्रम कवर" },
      { en: "Simple online application process", hi: "सरल ऑनलाइन आवेदन प्रक्रिया" }
    ],
    notCovered: "Students in non-recognized institutions. Second-time borrowers. Family income above ₹8 lakh (higher interest applies).",
    notCoveredHindi: "गैर-मान्यता प्राप्त संस्थानों के छात्र। दूसरी बार उधार लेने वाले। ₹8 लाख से अधिक पारिवारिक आय (अधिक ब्याज लागू)।",
    cost: "Interest rates 8-10% (with subvention for eligible students)",
    costHindi: "ब्याज दरें 8-10% (पात्र छात्रों के लिए सब्सिडी के साथ)",
    validity: "Repayment: course duration + 1 year moratorium + 15 years",
    validityHindi: "चुकौती: कोर्स अवधि + 1 साल मोहलत + 15 साल",
    processingTime: "15-30 days after application",
    processingTimeHindi: "आवेदन के 15-30 दिन बाद",
    whereToApply: [
      { en: "Online: vidyalakshmi.co.in", hi: "ऑनलाइन: vidyalakshmi.co.in" },
      { en: "Visit any bank branch (SBI, PNB, etc.)", hi: "किसी भी बैंक शाखा में जाएं (SBI, PNB, आदि)" },
      { en: "Apply through your institution's financial aid office", hi: "अपने संस्थान के वित्तीय सहायता कार्यालय के माध्यम से आवेदन करें" },
      { en: "Call helpline: 1800-180-1111", hi: "हेल्पलाइन: 1800-180-1111" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "PAN Card", hi: "पैन कार्ड" },
      { en: "Admission Letter from Institution", hi: "संस्थान से प्रवेश पत्र" },
      { en: "Fee Structure", hi: "शुल्क संरचना" },
      { en: "Income Certificate", hi: "आय प्रमाण पत्र" },
      { en: "Previous Marksheets", hi: "पिछली मार्कशीट" }
    ],
    faqs: [
      { q: { en: "Do I need collateral?", hi: "क्या गारंटी चाहिए?" }, a: { en: "No, loans up to ₹10 lakh are collateral-free.", hi: "नहीं, ₹10 लाख तक के ऋण बिना गारंटी हैं।" } },
      { q: { en: "When do I start repaying?", hi: "मैं चुकौती कब शुरू करूं?" }, a: { en: "After course completion + 1 year moratorium.", hi: "कोर्स पूरा होने + 1 साल मोहलत के बाद।" } }
    ],
    category: "education",
    ministry: "Ministry of Education",
    eligibility: { minAge: 16, isStudent: true, maxIncome: 800000, gender: "any", category: [], states: [] },
    officialLink: "https://www.vidyalakshmi.co.in",
    helpline: "1800-180-1111",
    launchedYear: 2024
  },
  // ========== SCHEME 30: Atal Innovation Mission ==========
  {
    name: "Atal Innovation Mission",
    nameHindi: "अटल इनोवेशन मिशन",
    shortDescription: "Grants and incubation support for innovative startups and student innovators.",
    shortDescriptionHindi: "नवीन स्टार्टअप और छात्र नवप्रवर्तकों के लिए अनुदान और इनक्यूबेशन सहायता।",
    fullDescription: "Atal Innovation Mission (AIM) was launched in 2016 to promote a culture of innovation and entrepreneurship in India. The mission has several programs: Atal Tinkering Labs (ATLs) in schools for students to experiment with STEM, Atal Incubation Centers (AICs) for startups, Atal New India Challenges (ANIC) for solving national problems, and Mentor India for mentorship. AIM provides grants up to ₹10 lakh for prototype development, ₹10 crore for setting up incubation centers, and support for scaling innovations. Over 10,000 Atal Tinkering Labs have been established in schools across India, benefiting over 75 lakh students.",
    fullDescriptionHindi: "अटल इनोवेशन मिशन (AIM) 2016 में भारत में नवाचार और उद्यमशीलता की संस्कृति को बढ़ावा देने के लिए शुरू किया गया था। मिशन में कई कार्यक्रम हैं: छात्रों के लिए STEM के साथ प्रयोग करने के लिए स्कूलों में अटल टिंकरिंग लैब्स (ATL), स्टार्टअप के लिए अटल इनक्यूबेशन सेंटर (AIC), राष्ट्रीय समस्याओं को हल करने के लिए अटल न्यू इंडिया चैलेंज (ANIC), और मेंटरशिप के लिए मेंटर इंडिया।",
    whoCanApply: "Students (Class 6-12) for ATL. Startups and entrepreneurs for AIC and ANIC. Innovators with prototype-stage ideas. Educational institutions for setting up ATLs. Incubation centers for partnership.",
    whoCanApplyHindi: "ATL के लिए छात्र (कक्षा 6-12)। AIC और ANIC के लिए स्टार्टअप और उद्यमी। प्रोटोटाइप-चरण के विचारों वाले नवप्रवर्तक। ATL स्थापित करने के लिए शैक्षणिक संस्थान। साझेदारी के लिए इनक्यूबेशन सेंटर।",
    benefitsDetailed: [
      { en: "Grants up to ₹10 lakh for prototype development", hi: "प्रोटोटाइप विकास के लिए ₹10 लाख तक अनुदान" },
      { en: "Atal Tinkering Labs in schools (₹20 lakh setup)", hi: "स्कूलों में अटल टिंकरिंग लैब्स (₹20 लाख सेटअप)" },
      { en: "Incubation support and mentorship", hi: "इनक्यूबेशन सहायता और मेंटरशिप" },
      { en: "Access to industry experts and investors", hi: "उद्योग विशेषज्ञों और निवेशकों तक पहुंच" },
      { en: "National and international exposure", hi: "राष्ट्रीय और अंतर्राष्ट्रीय एक्सपोजर" },
      { en: "Support for patent filing", hi: "पेटेंट फाइलिंग के लिए सहायता" },
      { en: "Networking with other innovators", hi: "अन्य नवप्रवर्तकों के साथ नेटवर्किंग" }
    ],
    notCovered: "Non-innovative ventures. Non-Indian entities. Established large companies. Ventures without prototype feasibility.",
    notCoveredHindi: "गैर-नवीन उद्यम। गैर-भारतीय संस्थाएं। स्थापित बड़ी कंपनियां। प्रोटोटाइप व्यवहार्यता के बिना उद्यम।",
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई आवेदन शुल्क नहीं",
    validity: "Program-based (varies)",
    validityHindi: "कार्यक्रम-आधारित (अलग-अलग)",
    processingTime: "2-6 months after application",
    processingTimeHindi: "आवेदन के 2-6 महीने बाद",
    whereToApply: [
      { en: "Online: aim.gov.in", hi: "ऑनलाइन: aim.gov.in" },
      { en: "Visit nearest Atal Incubation Centre", hi: "नजदीकी अटल इनक्यूबेशन सेंटर में जाएं" },
      { en: "Contact your school for ATL program", hi: "ATL कार्यक्रम के लिए अपने स्कूल से संपर्क करें" },
      { en: "Call helpline: 011-24604213", hi: "हेल्पलाइन: 011-24604213" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Innovation / Business Plan", hi: "नवाचार / व्यवसाय योजना" },
      { en: "Prototype Details", hi: "प्रोटोटाइप विवरण" },
      { en: "Institution Certificate (if student)", hi: "संस्थान प्रमाण पत्र (यदि छात्र हो)" }
    ],
    faqs: [
      { q: { en: "Can school students apply?", hi: "क्या स्कूली छात्र आवेदन कर सकते हैं?" }, a: { en: "Yes, through Atal Tinkering Labs in their school.", hi: "हां, अपने स्कूल में अटल टिंकरिंग लैब्स के माध्यम से।" } },
      { q: { en: "How much grant can I get?", hi: "मुझे कितना अनुदान मिल सकता है?" }, a: { en: "Up to ₹10 lakh for prototype development.", hi: "प्रोटोटाइप विकास के लिए ₹10 लाख तक।" } }
    ],
    category: "business",
    ministry: "NITI Aayog",
    eligibility: { minAge: 12, hasBusiness: true, gender: "any", category: [], states: [] },
    officialLink: "https://aim.gov.in",
    helpline: "011-24604213",
    launchedYear: 2016
  },
  
  // ========== SCHEME 31: National Health Mission ==========
  {
    name: "National Health Mission",
    nameHindi: "राष्ट्रीय स्वास्थ्य मिशन",
    shortDescription: "Free healthcare access at PHCs, CHCs, and government hospitals for all.",
    shortDescriptionHindi: "सभी के लिए PHC, CHC और सरकारी अस्पतालों में मुफ्त स्वास्थ्य सेवा।",
    fullDescription: "National Health Mission (NHM) was launched in 2013 by merging the National Rural Health Mission (NRHM) and National Urban Health Mission (NUHM). It aims to provide accessible, affordable, and quality healthcare to all citizens, especially the rural and vulnerable populations. The mission provides free healthcare at Primary Health Centers (PHCs), Community Health Centers (CHCs), and District Hospitals. Services include maternal and child health, immunization, family planning, disease control, and free medicines. Over 1.5 lakh health facilities are covered under NHM with a network of ASHA workers, ANMs, and doctors.",
    fullDescriptionHindi: "राष्ट्रीय स्वास्थ्य मिशन (NHM) 2013 में राष्ट्रीय ग्रामीण स्वास्थ्य मिशन (NRHM) और राष्ट्रीय शहरी स्वास्थ्य मिशन (NUHM) को मिलाकर शुरू किया गया था। इसका उद्देश्य सभी नागरिकों, विशेष रूप से ग्रामीण और कमजोर आबादी को सुलभ, किफायती और गुणवत्तापूर्ण स्वास्थ्य सेवा प्रदान करना है। मिशन प्राथमिक स्वास्थ्य केंद्रों (PHC), सामुदायिक स्वास्थ्य केंद्रों (CHC), और जिला अस्पतालों में मुफ्त स्वास्थ्य सेवा प्रदान करता है।",
    whoCanApply: "All Indian citizens — no age limit, no income limit, no category restriction. Everyone can avail free healthcare services at government health facilities.",
    whoCanApplyHindi: "सभी भारतीय नागरिक — कोई आयु सीमा नहीं, कोई आय सीमा नहीं, कोई श्रेणी प्रतिबंध नहीं। हर कोई सरकारी स्वास्थ्य सुविधाओं में मुफ्त स्वास्थ्य सेवाएं प्राप्त कर सकता है।",
    benefitsDetailed: [
      { en: "Free OPD and IPD services at PHCs/CHCs", hi: "PHC/CHC पर मुफ्त OPD और IPD सेवाएं" },
      { en: "Free medicines and diagnostic tests", hi: "मुफ्त दवाइयां और नैदानिक परीक्षण" },
      { en: "Free maternal and child healthcare", hi: "मुफ्त मातृ और शिशु स्वास्थ्य सेवा" },
      { en: "Free immunization for children and mothers", hi: "बच्चों और माताओं के लिए मुफ्त टीकाकरण" },
      { en: "Free family planning services", hi: "मुफ्त परिवार नियोजन सेवाएं" },
      { en: "ASHA workers provide door-to-door support", hi: "आशा कार्यकर्ता घर-घर सहायता प्रदान करती हैं" },
      { en: "Free emergency ambulance (108)", hi: "मुफ्त आपातकालीन एम्बुलेंस (108)" }
    ],
    notCovered: "Private hospitals (except under specific schemes). OPD consultations at private clinics. Specialized treatment not available at PHC/CHC (referral to higher center).",
    notCoveredHindi: "निजी अस्पताल (विशिष्ट योजनाओं को छोड़कर)। निजी क्लीनिक में OPD परामर्श। PHC/CHC पर उपलब्ध नहीं विशेष उपचार (उच्च केंद्र में रेफरल)।",
    cost: "FREE — For all at government health facilities",
    costHindi: "मुफ्त — सरकारी स्वास्थ्य सुविधाओं में सभी के लिए",
    validity: "Ongoing programme",
    validityHindi: "चल रहा कार्यक्रम",
    processingTime: "Immediate at health facility",
    processingTimeHindi: "स्वास्थ्य सुविधा पर तत्काल",
    whereToApply: [
      { en: "Visit nearest Primary Health Center (PHC)", hi: "नजदीकी प्राथमिक स्वास्थ्य केंद्र (PHC) में जाएं" },
      { en: "Visit Community Health Center (CHC)", hi: "सामुदायिक स्वास्थ्य केंद्र (CHC) में जाएं" },
      { en: "Contact nearest ASHA worker", hi: "नजदीकी आशा कार्यकर्ता से संपर्क करें" },
      { en: "Call health helpline: 104 / 108", hi: "स्वास्थ्य हेल्पलाइन: 104 / 108" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (for registration)", hi: "आधार कार्ड (पंजीकरण के लिए)" },
      { en: "Ration Card (if available)", hi: "राशन कार्ड (यदि उपलब्ध हो)" }
    ],
    faqs: [
      { q: { en: "Is healthcare really free?", hi: "क्या स्वास्थ्य सेवा वाकई मुफ्त है?" }, a: { en: "Yes, at all government health facilities.", hi: "हां, सभी सरकारी स्वास्थ्य सुविधाओं में।" } },
      { q: { en: "Can anyone avail this?", hi: "क्या कोई भी इसका लाभ ले सकता है?" }, a: { en: "Yes, all Indian citizens.", hi: "हां, सभी भारतीय नागरिक।" } }
    ],
    category: "health",
    ministry: "Ministry of Health & Family Welfare",
    eligibility: { gender: "any", category: [], states: [] },
    officialLink: "https://nhm.gov.in",
    helpline: "104",
    launchedYear: 2013
  },
  
  // ========== SCHEME 32: PM National Dialysis Programme ==========
  {
    name: "PM National Dialysis Programme",
    nameHindi: "पीएम राष्ट्रीय डायलिसिस कार्यक्रम",
    shortDescription: "Free dialysis services for BPL patients at government hospitals.",
    shortDescriptionHindi: "सरकारी अस्पतालों में BPL रोगियों के लिए मुफ्त डायलिसिस सेवाएं।",
    fullDescription: "Pradhan Mantri National Dialysis Programme (PMNDP) was launched in 2016 to provide free dialysis services to poor patients suffering from kidney failure. The programme is implemented under the National Health Mission with support from state governments. It establishes dialysis units at district hospitals with modern equipment and trained technicians. Patients from BPL families, Ayushman Bharat beneficiaries, and other poor categories get dialysis completely free. Each dialysis session costs around ₹1,500-₹2,000 in private hospitals, but under this scheme, it's free for eligible patients. The scheme currently operates over 1,000 dialysis centers across India.",
    fullDescriptionHindi: "प्रधानमंत्री राष्ट्रीय डायलिसिस कार्यक्रम (PMNDP) 2016 में गुर्दे की विफलता से पीड़ित गरीब रोगियों को मुफ्त डायलिसिस सेवाएं प्रदान करने के लिए शुरू किया गया था। कार्यक्रम राष्ट्रीय स्वास्थ्य मिशन के तहत राज्य सरकारों के समर्थन से लागू किया जाता है। यह जिला अस्पतालों में आधुनिक उपकरणों और प्रशिक्षित तकनीशियनों के साथ डायलिसिस इकाइयां स्थापित करता है।",
    whoCanApply: "Patients suffering from chronic kidney disease (CKD) or acute kidney injury requiring dialysis. BPL card holders, Ayushman Bharat beneficiaries, and economically weaker sections get free treatment. Non-BPL patients pay subsidized rates.",
    whoCanApplyHindi: "गुर्दे की पुरानी बीमारी (CKD) या तीव्र गुर्दे की चोट से पीड़ित रोगी जिन्हें डायलिसिस की आवश्यकता है। BPL कार्ड धारक, आयुष्मान भारत लाभार्थी, और आर्थिक रूप से कमजोर वर्ग को मुफ्त उपचार मिलता है। गैर-BPL रोगी सब्सिडी दरों पर भुगतान करते हैं।",
    benefitsDetailed: [
      { en: "FREE dialysis for BPL patients", hi: "BPL रोगियों के लिए मुफ्त डायलिसिस" },
      { en: "Modern dialysis machines at district hospitals", hi: "जिला अस्पतालों में आधुनिक डायलिसिस मशीनें" },
      { en: "Trained technicians and nephrologists", hi: "प्रशिक्षित तकनीशियन और नेफ्रोलॉजिस्ट" },
      { en: "Free medicines and consumables", hi: "मुफ्त दवाइयां और उपभोग्य सामग्री" },
      { en: "Subsidized rates for non-BPL patients", hi: "गैर-BPL रोगियों के लिए सब्सिडी दरें" },
      { en: "Multiple sessions per week covered", hi: "प्रति सप्ताह कई सत्र कवर" },
      { en: "No hidden charges for eligible patients", hi: "पात्र रोगियों के लिए कोई छिपा शुल्क नहीं" }
    ],
    notCovered: "Private hospital dialysis. Patients who are not BPL or Ayushman beneficiaries (subsidized rate applies). Kidney transplant (separate scheme). Home dialysis (limited availability).",
    notCoveredHindi: "निजी अस्पताल डायलिसिस। जो रोगी BPL या आयुष्मान लाभार्थी नहीं हैं (सब्सिडी दर लागू)। गुर्दा प्रत्यारोपण (अलग योजना)। होम डायलिसिस (सीमित उपलब्धता)।",
    cost: "FREE for BPL / subsidized for others",
    costHindi: "BPL के लिए मुफ्त / अन्य के लिए सब्सिडी",
    validity: "Per session (lifetime if chronic)",
    validityHindi: "प्रति सत्र (आजीवन यदि पुरानी हो)",
    processingTime: "Immediate after registration",
    processingTimeHindi: "पंजीकरण के बाद तत्काल",
    whereToApply: [
      { en: "Visit nearest District Hospital", hi: "नजदीकी जिला अस्पताल में जाएं" },
      { en: "Visit nearest Medical College Hospital", hi: "नजदीकी मेडिकल कॉलेज अस्पताल में जाएं" },
      { en: "Contact PMNDP center in your district", hi: "अपने जिले में PMNDP केंद्र से संपर्क करें" },
      { en: "Call health helpline: 104", hi: "स्वास्थ्य हेल्पलाइन: 104" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "BPL Card (for free dialysis)", hi: "BPL कार्ड (मुफ्त डायलिसिस के लिए)" },
      { en: "Ayushman Bharat Card (if applicable)", hi: "आयुष्मान भारत कार्ड (यदि लागू हो)" },
      { en: "Medical Reports (kidney function tests)", hi: "चिकित्सा रिपोर्ट (गुर्दा कार्य परीक्षण)" },
      { en: "Doctor's Prescription", hi: "डॉक्टर का प्रिस्क्रिप्शन" }
    ],
    faqs: [
      { q: { en: "Is dialysis really free?", hi: "क्या डायलिसिस वाकई मुफ्त है?" }, a: { en: "Yes for BPL and Ayushman beneficiaries.", hi: "BPL और आयुष्मान लाभार्थियों के लिए हां।" } },
      { q: { en: "How many sessions can I get?", hi: "मुझे कितने सत्र मिल सकते हैं?" }, a: { en: "As many as medically required.", hi: "जितने चिकित्सकीय रूप से आवश्यक हों।" } }
    ],
    category: "health",
    ministry: "Ministry of Health & Family Welfare",
    eligibility: { isBPL: true, gender: "any", category: [], states: [] },
    officialLink: "https://nhm.gov.in",
    helpline: "104",
    launchedYear: 2016
  },
    // ========== SCHEME 33: Rashtriya Swasthya Bima Yojana ==========
  {
    name: "Rashtriya Swasthya Bima Yojana",
    nameHindi: "राष्ट्रीय स्वास्थ्य बीमा योजना",
    shortDescription: "Health insurance for BPL families (now merged with PM-JAY).",
    shortDescriptionHindi: "BPL परिवारों के लिए स्वास्थ्य बीमा (अब PM-JAY में विलय)।",
    fullDescription: "Rashtriya Swasthya Bima Yojana (RSBY) was launched in 2008 to provide health insurance coverage to Below Poverty Line (BPL) families and other vulnerable sections. The scheme provided ₹30,000 health cover per family per year for hospitalization. It was a smart-card based cashless scheme where beneficiaries could get treatment at any empanelled hospital across India. RSBY has now been subsumed into Ayushman Bharat PM-JAY (launched 2018) which provides much higher coverage of ₹5 lakh. Beneficiaries who had RSBY cards are now eligible under PM-JAY automatically.",
    fullDescriptionHindi: "राष्ट्रीय स्वास्थ्य बीमा योजना (RSBY) 2008 में गरीबी रेखा से नीचे (BPL) परिवारों और अन्य कमजोर वर्गों को स्वास्थ्य बीमा कवर प्रदान करने के लिए शुरू की गई थी। योजना अस्पताल में भर्ती के लिए प्रति परिवार प्रति वर्ष ₹30,000 का स्वास्थ्य कवर प्रदान करती थी। यह स्मार्ट-कार्ड आधारित कैशलेस योजना थी जहां लाभार्थी भारत भर के किसी भी सूचीबद्ध अस्पताल में इलाज प्राप्त कर सकते थे।",
    whoCanApply: "BPL families, unorganized sector workers, street vendors, domestic workers, building and construction workers, MGNREGA beneficiaries, and other vulnerable sections. Now integrated with PM-JAY.",
    whoCanApplyHindi: "BPL परिवार, असंगठित क्षेत्र के कामगार, सड़क विक्रेता, घरेलू कामगार, भवन और निर्माण श्रमिक, मनरेगा लाभार्थी, और अन्य कमजोर वर्ग। अब PM-JAY के साथ एकीकृत।",
    benefitsDetailed: [
      { en: "₹30,000 health cover per family per year", hi: "प्रति परिवार प्रति वर्ष ₹30,000 स्वास्थ्य कवर" },
      { en: "Cashless treatment at empanelled hospitals", hi: "सूचीबद्ध अस्पतालों में कैशलेस उपचार" },
      { en: "Smart card based — no paperwork", hi: "स्मार्ट कार्ड आधारित — कोई कागजी कार्रवाई नहीं" },
      { en: "Covers pre-existing diseases", hi: "पहले से मौजूद बीमारियां कवर" },
      { en: "Transportation allowance", hi: "परिवहन भत्ता" },
      { en: "Family floater — covers all members", hi: "परिवार फ्लोटर — सभी सदस्य कवर" },
      { en: "Now upgraded to PM-JAY (₹5 lakh cover)", hi: "अब PM-JAY (₹5 लाख कवर) में अपग्रेड" }
    ],
    notCovered: "OPD treatment. Medicines bought outside hospital. Cosmetic surgery. Maternity benefits (now covered under PM-JAY). Non-BPL families.",
    notCoveredHindi: "OPD उपचार। अस्पताल के बाहर खरीदी गई दवाइयां। कॉस्मेटिक सर्जरी। मातृत्व लाभ (अब PM-JAY के तहत कवर)। गैर-BPL परिवार।",
    cost: "FREE — Fully government funded",
    costHindi: "मुफ्त — पूरी तरह सरकार द्वारा वित्त पोषित",
    validity: "Now merged with PM-JAY (lifetime coverage)",
    validityHindi: "अब PM-JAY के साथ विलय (आजीवन कवरेज)",
    processingTime: "Instant — smart card issued after verification",
    processingTimeHindi: "तत्काल — सत्यापन के बाद स्मार्ट कार्ड जारी",
    whereToApply: [
      { en: "Visit any empanelled hospital", hi: "किसी भी सूचीबद्ध अस्पताल में जाएं" },
      { en: "Check eligibility at pmjay.gov.in", hi: "pmjay.gov.in पर पात्रता जांचें" },
      { en: "Call helpline: 14555", hi: "हेल्पलाइन: 14555" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "BPL Card / Ration Card", hi: "BPL कार्ड / राशन कार्ड" },
      { en: "Income Certificate", hi: "आय प्रमाण पत्र" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "Is RSBY still active?", hi: "क्या RSBY अभी भी सक्रिय है?" }, a: { en: "It's now merged with PM-JAY.", hi: "यह अब PM-JAY के साथ विलय हो गई है।" } },
      { q: { en: "How much coverage do I get?", hi: "मुझे कितना कवरेज मिलता है?" }, a: { en: "Now ₹5 lakh under PM-JAY (upgraded from ₹30,000).", hi: "अब PM-JAY के तहत ₹5 लाख (₹30,000 से अपग्रेड)।" } }
    ],
    category: "health",
    ministry: "Ministry of Health & Family Welfare",
    eligibility: { isBPL: true, maxIncome: 300000, gender: "any", category: [], states: [] },
    officialLink: "https://www.rsby.gov.in",
    helpline: "14555",
    launchedYear: 2008
  },
  
  // ========== SCHEME 34: Deen Dayal Upadhyaya Grameen Kaushalya Yojana ==========
  {
    name: "DDU-GKY",
    nameHindi: "दीन दयाल उपाध्याय ग्रामीण कौशल्या योजना",
    shortDescription: "Placement-linked skill development for rural poor youth.",
    shortDescriptionHindi: "ग्रामीण गरीब युवाओं के लिए प्लेसमेंट-लिंक्ड कौशल विकास।",
    fullDescription: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY) was launched in 2014 as part of the National Rural Livelihood Mission. The scheme aims to provide placement-linked skill development training to rural poor youth aged 15-35 years. It focuses on enabling rural youth to get sustainable employment with regular monthly income. Training is provided in various sectors — retail, hospitality, healthcare, IT, construction, and more. The scheme guarantees 70% placement after training, with a minimum salary of ₹6,000 per month. Post-placement support is provided for 6 months to help trainees settle in jobs.",
    fullDescriptionHindi: "दीन दयाल उपाध्याय ग्रामीण कौशल्या योजना (DDU-GKY) 2014 में राष्ट्रीय ग्रामीण आजीविका मिशन के हिस्से के रूप में शुरू की गई थी। योजना का उद्देश्य 15-35 वर्ष के ग्रामीण गरीब युवाओं को प्लेसमेंट-लिंक्ड कौशल विकास प्रशिक्षण प्रदान करना है। यह ग्रामीण युवाओं को नियमित मासिक आय के साथ स्थायी रोजगार प्राप्त करने में सक्षम बनाने पर केंद्रित है।",
    whoCanApply: "Rural poor youth aged 15-35 years from BPL families, SC/ST, minorities, MGNREGA workers, and other vulnerable groups. Should have basic reading/writing ability. Not already placed in jobs. At least one member per family.",
    whoCanApplyHindi: "BPL परिवारों, SC/ST, अल्पसंख्यक, मनरेगा श्रमिकों और अन्य कमजोर समूहों के 15-35 वर्ष के ग्रामीण गरीब युवा। बुनियादी पढ़ने/लिखने की क्षमता होनी चाहिए। पहले से नौकरी में नहीं होना चाहिए। प्रति परिवार कम से कम एक सदस्य।",
    benefitsDetailed: [
      { en: "FREE skill training in various sectors", hi: "विभिन्न क्षेत्रों में मुफ्त कौशल प्रशिक्षण" },
      { en: "Guaranteed 70% placement after training", hi: "प्रशिक्षण के बाद 70% प्लेसमेंट की गारंटी" },
      { en: "Minimum salary ₹6,000 per month", hi: "न्यूनतम वेतन ₹6,000 प्रति माह" },
      { en: "Free food, accommodation during training", hi: "प्रशिक्षण के दौरान मुफ्त भोजन, आवास" },
      { en: "Post-placement support for 6 months", hi: "6 महीने तक प्लेसमेंट के बाद सहायता" },
      { en: "Certification recognized by industry", hi: "उद्योग द्वारा मान्यता प्राप्त प्रमाणन" },
      { en: "Training in 50+ sectors", hi: "50+ क्षेत्रों में प्रशिक्षण" }
    ],
    notCovered: "Urban youth (covered under separate scheme). Graduates/post-graduates (unless special cases). Those already in regular employment. Those with income above BPL.",
    notCoveredHindi: "शहरी युवा (अलग योजना के तहत कवर)। स्नातक/स्नातकोत्तर (जब तक विशेष मामले न हों)। जो पहले से नियमित रोजगार में हैं। BPL से अधिक आय वाले।",
    cost: "FREE — No training fee",
    costHindi: "मुफ्त — कोई प्रशिक्षण शुल्क नहीं",
    validity: "Course duration 3-12 months",
    validityHindi: "पाठ्यक्रम अवधि 3-12 महीने",
    processingTime: "Depends on course — 3-12 months",
    processingTimeHindi: "पाठ्यक्रम पर निर्भर — 3-12 महीने",
    whereToApply: [
      { en: "Visit nearest DDU-GKY training center", hi: "नजदीकी DDU-GKY प्रशिक्षण केंद्र पर जाएं" },
      { en: "Online: ddugky.gov.in", hi: "ऑनलाइन: ddugky.gov.in" },
      { en: "Contact Gram Panchayat or Block office", hi: "ग्राम पंचायत या ब्लॉक कार्यालय से संपर्क करें" },
      { en: "Call helpline: 1800-110-001", hi: "हेल्पलाइन: 1800-110-001" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "BPL Card", hi: "BPL कार्ड" },
      { en: "Education Certificate", hi: "शिक्षा प्रमाण पत्र" },
      { en: "Caste Certificate (if applicable)", hi: "जाति प्रमाण पत्र (यदि लागू हो)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" }
    ],
    faqs: [
      { q: { en: "Is placement guaranteed?", hi: "क्या प्लेसमेंट की गारंटी है?" }, a: { en: "Yes, 70% placement guaranteed.", hi: "हां, 70% प्लेसमेंट की गारंटी।" } },
      { q: { en: "What is the minimum salary?", hi: "न्यूनतम वेतन क्या है?" }, a: { en: "At least ₹6,000 per month.", hi: "कम से कम ₹6,000 प्रति माह।" } }
    ],
    category: "employment",
    ministry: "Ministry of Rural Development",
    eligibility: { minAge: 15, maxAge: 35, isBPL: true, gender: "any", category: [], states: [] },
    officialLink: "https://ddugky.gov.in",
    helpline: "1800-110-001",
    launchedYear: 2014
  },
  
  // ========== SCHEME 35: Tribal Cooperative Marketing Development Federation ==========
  {
    name: "TRIFED - Tribal Cooperative Marketing",
    nameHindi: "जनजातीय सहकारी विपणन विकास संघ",
    shortDescription: "Support for tribal artisans and their products with fair pricing and marketing.",
    shortDescriptionHindi: "जनजातीय कारीगरों और उनके उत्पादों को उचित मूल्य और विपणन के साथ सहायता।",
    fullDescription: "Tribal Cooperative Marketing Development Federation of India (TRIFED) was established in 1987 under the Ministry of Tribal Affairs to improve the livelihood of tribal communities through marketing of tribal products. TRIFED procures tribal products (handicrafts, handlooms, forest produce) at fair prices and markets them through its retail network called 'TRIBES INDIA'. It operates over 140 outlets across India. TRIFED also provides skill development, design training, and market linkages to tribal artisans. The 'Van Dhan Yojana' scheme under TRIFED helps tribal gatherers add value to forest produce through self-help groups.",
    fullDescriptionHindi: "भारतीय जनजातीय सहकारी विपणन विकास संघ (TRIFED) 1987 में जनजातीय मामलों के मंत्रालय के तहत जनजातीय समुदायों की आजीविका में सुधार के लिए स्थापित किया गया था। TRIFED जनजातीय उत्पादों (हस्तशिल्प, हथकरघा, वन उपज) को उचित मूल्य पर खरीदता है और 'ट्राइब्स इंडिया' नामक अपने खुदरा नेटवर्क के माध्यम से बेचता है।",
    whoCanApply: "Tribal artisans, craftspeople, weavers, and forest produce gatherers. Must be a member of a recognized tribal community. Preference to those below poverty line. Can apply individually or through SHGs.",
    whoCanApplyHindi: "जनजातीय कारीगर, शिल्पकार, बुनकर, और वन उपज संग्रहकर्ता। मान्यता प्राप्त जनजातीय समुदाय के सदस्य होना चाहिए। गरीबी रेखा से नीचे वालों को प्राथमिकता। व्यक्तिगत रूप से या SHG के माध्यम से आवेदन कर सकते हैं।",
    benefitsDetailed: [
      { en: "Fair price for tribal products — no middlemen", hi: "जनजातीय उत्पादों के लिए उचित मूल्य — कोई बिचौलिया नहीं" },
      { en: "Access to 140+ TRIBES INDIA outlets", hi: "140+ ट्राइब्स इंडिया दुकानों तक पहुंच" },
      { en: "Free skill and design training", hi: "मुफ्त कौशल और डिजाइन प्रशिक्षण" },
      { en: "Marketing support at national level", hi: "राष्ट्रीय स्तर पर विपणन सहायता" },
      { en: "Van Dhan Yojana — value addition to forest produce", hi: "वन धन योजना — वन उपज में मूल्य संवर्धन" },
      { en: "Online sales through Tribes India portal", hi: "ट्राइब्स इंडिया पोर्टल के माध्यम से ऑनलाइन बिक्री" },
      { en: "Export opportunities for tribal crafts", hi: "जनजातीय शिल्प के लिए निर्यात अवसर" }
    ],
    notCovered: "Non-tribal artisans. Industrial manufacturing. Products not fitting TRIFED's market focus. Products already under other marketing channels.",
    notCoveredHindi: "गैर-जनजातीय कारीगर। औद्योगिक विनिर्माण। TRIFED के बाजार फोकस में न आने वाले उत्पाद। अन्य विपणन चैनलों के तहत पहले से उत्पाद।",
    cost: "FREE — No registration fee for tribal artisans",
    costHindi: "मुफ्त — जनजातीय कारीगरों के लिए कोई पंजीकरण शुल्क नहीं",
    validity: "Ongoing membership",
    validityHindi: "चल रही सदस्यता",
    processingTime: "2-4 weeks for registration",
    processingTimeHindi: "पंजीकरण के लिए 2-4 सप्ताह",
    whereToApply: [
      { en: "Visit nearest TRIBES INDIA outlet", hi: "नजदीकी ट्राइब्स इंडिया दुकान में जाएं" },
      { en: "Online: trifed.tribal.gov.in", hi: "ऑनलाइन: trifed.tribal.gov.in" },
      { en: "Contact state tribal welfare department", hi: "राज्य जनजातीय कल्याण विभाग से संपर्क करें" },
      { en: "Call helpline: 1800-11-1555", hi: "हेल्पलाइन: 1800-11-1555" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Tribe Certificate (mandatory)", hi: "जनजाति प्रमाण पत्र (अनिवार्य)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Product Samples / Photos", hi: "उत्पाद नमूने / फोटो" },
      { en: "SHG Membership (if applicable)", hi: "SHG सदस्यता (यदि लागू हो)" }
    ],
    faqs: [
      { q: { en: "Who can sell through TRIFED?", hi: "TRIFED के माध्यम से कौन बेच सकता है?" }, a: { en: "Tribal artisans and craftspeople only.", hi: "सिर्फ जनजातीय कारीगर और शिल्पकार।" } },
      { q: { en: "Do I need to pay anything?", hi: "क्या मुझे कुछ देना होगा?" }, a: { en: "No, registration is free.", hi: "नहीं, पंजीकरण मुफ्त है।" } }
    ],
    category: "business",
    ministry: "Ministry of Tribal Affairs",
    eligibility: { minAge: 18, hasBusiness: true, category: ["st"], gender: "any", states: [] },
    officialLink: "https://trifed.tribal.gov.in",
    helpline: "1800-11-1555",
    launchedYear: 1987
  },
  // ========== SCHEME 36: Mahila Coir Yojana ==========
  {
    name: "Mahila Coir Yojana",
    nameHindi: "महिला कॉयर योजना",
    shortDescription: "Support for women in coir industry with training, tools, and financial assistance.",
    shortDescriptionHindi: "प्रशिक्षण, उपकरण और वित्तीय सहायता के साथ कॉयर उद्योग में महिलाओं के लिए सहायता।",
    fullDescription: "Mahila Coir Yojana was launched in 1994 by the Coir Board to provide self-employment opportunities to rural women in the coir industry. The scheme provides training to women in coir spinning and weaving, along with subsidized equipment like motorized ratts (spinning wheels) and other tools. Women can start their own coir production units and earn a sustainable livelihood. The scheme is implemented through the Coir Board's regional offices and training centers. It has empowered thousands of rural women, especially in Kerala, Tamil Nadu, and Karnataka where coir industry is prominent.",
    fullDescriptionHindi: "महिला कॉयर योजना 1994 में कॉयर बोर्ड द्वारा कॉयर उद्योग में ग्रामीण महिलाओं को स्वरोजगार के अवसर प्रदान करने के लिए शुरू की गई थी। योजना महिलाओं को कॉयर कताई और बुनाई में प्रशिक्षण प्रदान करती है, साथ ही मोटर चालित रैट (कताई चरखा) और अन्य उपकरण जैसे सब्सिडी वाले उपकरण भी। महिलाएं अपनी खुद की कॉयर उत्पादन इकाइयां शुरू कर सकती हैं और स्थायी आजीविका कमा सकती हैं।",
    whoCanApply: "Rural women aged 18+ years interested in coir industry. Priority to women from BPL families, SC/ST, and other marginalized communities. Should have basic literacy and willingness to undergo training.",
    whoCanApplyHindi: "कॉयर उद्योग में रुचि रखने वाली 18+ आयु की ग्रामीण महिलाएं। BPL परिवारों, SC/ST और अन्य हाशिए के समुदायों की महिलाओं को प्राथमिकता। बुनियादी साक्षरता और प्रशिक्षण लेने की इच्छा होनी चाहिए।",
    benefitsDetailed: [
      { en: "FREE training in coir spinning and weaving", hi: "कॉयर कताई और बुनाई में मुफ्त प्रशिक्षण" },
      { en: "Subsidized motorized ratt (spinning wheel)", hi: "सब्सिडी वाला मोटर चालित रैट (कताई चरखा)" },
      { en: "Financial assistance for setting up unit", hi: "इकाई स्थापित करने के लिए वित्तीय सहायता" },
      { en: "Raw material at subsidized rates", hi: "सब्सिडी दरों पर कच्चा माल" },
      { en: "Marketing support through Coir Board", hi: "कॉयर बोर्ड के माध्यम से विपणन सहायता" },
      { en: "Regular income from coir products", hi: "कॉयर उत्पादों से नियमित आय" },
      { en: "Skill upgrade training available", hi: "कौशल उन्नयन प्रशिक्षण उपलब्ध" }
    ],
    notCovered: "Urban women (limited scope). Non-coir business activities. Women without basic literacy (special consideration possible). Men (separate schemes available).",
    notCoveredHindi: "शहरी महिलाएं (सीमित दायरा)। गैर-कॉयर व्यावसायिक गतिविधियां। बुनियादी साक्षरता के बिना महिलाएं (विशेष विचार संभव)। पुरुष (अलग योजनाएं उपलब्ध)।",
    cost: "FREE training — Subsidized equipment",
    costHindi: "मुफ्त प्रशिक्षण — सब्सिडी वाले उपकरण",
    validity: "Training duration 3-6 months",
    validityHindi: "प्रशिक्षण अवधि 3-6 महीने",
    processingTime: "2-4 weeks after application",
    processingTimeHindi: "आवेदन के 2-4 सप्ताह बाद",
    whereToApply: [
      { en: "Visit nearest Coir Board regional office", hi: "नजदीकी कॉयर बोर्ड क्षेत्रीय कार्यालय में जाएं" },
      { en: "Online: coirboard.gov.in", hi: "ऑनलाइन: coirboard.gov.in" },
      { en: "Contact State Coir Corporation", hi: "राज्य कॉयर निगम से संपर्क करें" },
      { en: "Call helpline: 0484-2351015", hi: "हेल्पलाइन: 0484-2351015" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "BPL Card (if applicable)", hi: "BPL कार्ड (यदि लागू हो)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "Do I get a free spinning wheel?", hi: "क्या मुझे मुफ्त कताई चरखा मिलता है?" }, a: { en: "Subsidized — not completely free.", hi: "सब्सिडी वाला — पूरी तरह मुफ्त नहीं।" } },
      { q: { en: "Where can I sell products?", hi: "मैं उत्पाद कहां बेच सकती हूं?" }, a: { en: "Through Coir Board's marketing network.", hi: "कॉयर बोर्ड के विपणन नेटवर्क के माध्यम से।" } }
    ],
    category: "women",
    ministry: "Ministry of Micro, Small and Medium Enterprises",
    eligibility: { minAge: 18, gender: "female", category: [], states: [] },
    officialLink: "https://coirboard.gov.in",
    helpline: "0484-2351015",
    launchedYear: 1994
  },
  
  // ========== SCHEME 37: Mahila Samman Savings Certificate ==========
  {
    name: "Mahila Samman Savings Certificate",
    nameHindi: "महिला सम्मान बचत प्रमाणपत्र",
    shortDescription: "Small savings scheme for women with 7.5% interest and 2-year tenure.",
    shortDescriptionHindi: "7.5% ब्याज और 2 साल की अवधि के साथ महिलाओं के लिए छोटी बचत योजना।",
    fullDescription: "Mahila Samman Savings Certificate was launched in 2023 as a small savings scheme exclusively for women and girls. The scheme offers an attractive interest rate of 7.5% per annum with a tenure of 2 years. Women can open an account with a minimum deposit of ₹1,000 and maximum of ₹2 lakh. The scheme is available at all post offices and major banks. Interest is compounded quarterly and paid at maturity. This is a great option for women who want safe, secure, and high-return investment for their short-term goals. The scheme was announced in Budget 2023 to promote financial security of women.",
    fullDescriptionHindi: "महिला सम्मान बचत प्रमाणपत्र 2023 में विशेष रूप से महिलाओं और लड़कियों के लिए छोटी बचत योजना के रूप में शुरू की गई थी। योजना 2 साल की अवधि के साथ 7.5% प्रति वर्ष की आकर्षक ब्याज दर प्रदान करती है। महिलाएं ₹1,000 की न्यूनतम जमा और ₹2 लाख की अधिकतम जमा के साथ खाता खोल सकती हैं। योजना सभी डाकघरों और प्रमुख बैंकों में उपलब्ध है। ब्याज त्रैमासिक रूप से संयोजित होता है और परिपक्वता पर भुगतान किया जाता है।",
    whoCanApply: "Any woman or girl (including minors under guardian). Age limit: any age. Maximum investment of ₹2 lakh per woman. Can open account in own name or for a minor girl through guardian.",
    whoCanApplyHindi: "कोई भी महिला या लड़की (अभिभावक के तहत नाबालिग सहित)। आयु सीमा: कोई भी आयु। प्रति महिला अधिकतम ₹2 लाख का निवेश। अपने नाम पर या अभिभावक के माध्यम से नाबालिग लड़की के लिए खाता खोल सकती हैं।",
    benefitsDetailed: [
      { en: "High interest rate — 7.5% per annum", hi: "उच्च ब्याज दर — 7.5% प्रति वर्ष" },
      { en: "2-year tenure — short-term investment", hi: "2 साल की अवधि — अल्पकालिक निवेश" },
      { en: "Safe and secure — government-backed", hi: "सुरक्षित और संरक्षित — सरकार समर्थित" },
      { en: "Deposit from ₹1,000 to ₹2 lakh", hi: "₹1,000 से ₹2 लाख तक जमा" },
      { en: "Quarterly compounding interest", hi: "त्रैमासिक चक्रवृद्धि ब्याज" },
      { en: "Partial withdrawal allowed after 1 year", hi: "1 साल बाद आंशिक निकासी की अनुमति" },
      { en: "Nomination facility available", hi: "नामांकन सुविधा उपलब्ध" }
    ],
    notCovered: "Men (exclusive scheme for women). Amount above ₹2 lakh. Premature withdrawal before 1 year (except special cases). NRIs (with certain conditions).",
    notCoveredHindi: "पुरुष (महिलाओं के लिए विशेष योजना)। ₹2 लाख से अधिक राशि। 1 साल से पहले समय से पहले निकासी (विशेष मामलों को छोड़कर)। NRI (कुछ शर्तों के साथ)।",
    cost: "FREE — No opening charges",
    costHindi: "मुफ्त — कोई खाता खोलने का शुल्क नहीं",
    validity: "2 years from opening",
    validityHindi: "खोलने से 2 साल",
    processingTime: "Same day — account opened instantly",
    processingTimeHindi: "उसी दिन — खाता तुरंत खुल जाता है",
    whereToApply: [
      { en: "Visit any Post Office", hi: "किसी भी डाकघर में जाएं" },
      { en: "Visit any authorized bank branch", hi: "किसी भी अधिकृत बैंक शाखा में जाएं" },
      { en: "Online through India Post Payments Bank", hi: "इंडिया पोस्ट पेमेंट्स बैंक के माध्यम से ऑनलाइन" },
      { en: "Call helpline: 1800-11-2011", hi: "हेल्पलाइन: 1800-11-2011" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "PAN Card", hi: "पैन कार्ड" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" },
      { en: "Address Proof", hi: "पता प्रमाण" },
      { en: "Birth Certificate (for minor girl)", hi: "जन्म प्रमाण पत्र (नाबालिग लड़की के लिए)" }
    ],
    faqs: [
      { q: { en: "Can I withdraw before 2 years?", hi: "क्या 2 साल से पहले निकाल सकती हूं?" }, a: { en: "Partial withdrawal allowed after 1 year.", hi: "1 साल बाद आंशिक निकासी की अनुमति।" } },
      { q: { en: "Is this tax-free?", hi: "क्या यह कर-मुक्त है?" }, a: { en: "Interest is taxable as per income slab.", hi: "ब्याज आय स्लैब के अनुसार कर योग्य है।" } }
    ],
    category: "women",
    ministry: "Ministry of Finance",
    eligibility: { gender: "female", category: [], states: [] },
    officialLink: "https://www.indiapost.gov.in",
    helpline: "1800-11-2011",
    launchedYear: 2023
  },
  
  // ========== SCHEME 38: National Means cum Merit Scholarship ==========
  {
    name: "National Means cum Merit Scholarship",
    nameHindi: "राष्ट्रीय साधन-सह-मेधा छात्रवृत्ति",
    shortDescription: "Scholarship for economically weaker students from class 9 to 12.",
    shortDescriptionHindi: "कक्षा 9 से 12 तक के आर्थिक रूप से कमजोर छात्रों के लिए छात्रवृत्ति।",
    fullDescription: "National Means cum Merit Scholarship (NMMS) Scheme was launched in 2008 to award scholarships to meritorious students of economically weaker sections to arrest their drop-out at class 8 and encourage them to continue education up to class 12. The scholarship provides ₹12,000 per annum (₹1,000 per month) to selected students from class 9 to class 12. Selection is based on State Level Examination (MAT and SAT) conducted for class 8 students. The parental income limit is ₹3.5 lakh per annum. Scholarships are renewable every year based on academic performance and attendance.",
    fullDescriptionHindi: "राष्ट्रीय साधन-सह-मेधा छात्रवृत्ति (NMMS) योजना 2008 में आर्थिक रूप से कमजोर वर्गों के मेधावी छात्रों को छात्रवृत्ति प्रदान करने के लिए शुरू की गई थी ताकि कक्षा 8 में उनके ड्रॉप-आउट को रोका जा सके और उन्हें कक्षा 12 तक शिक्षा जारी रखने के लिए प्रोत्साहित किया जा सके। छात्रवृत्ति कक्षा 9 से 12 तक चयनित छात्रों को ₹12,000 प्रति वर्ष (₹1,000 प्रति माह) प्रदान करती है।",
    whoCanApply: "Students studying in class 8 in Government/Local body/Government-aided schools. Minimum 55% marks in class 7 (50% for SC/ST). Parental income should be below ₹3.5 lakh per annum. Must appear for State Level NMMS exam.",
    whoCanApplyHindi: "सरकारी/स्थानीय निकाय/सरकारी सहायता प्राप्त स्कूलों में कक्षा 8 में पढ़ने वाले छात्र। कक्षा 7 में न्यूनतम 55% अंक (SC/ST के लिए 50%)। माता-पिता की आय ₹3.5 लाख प्रति वर्ष से कम होनी चाहिए। राज्य स्तरीय NMMS परीक्षा में उपस्थित होना चाहिए।",
    benefitsDetailed: [
      { en: "₹12,000 per annum scholarship", hi: "₹12,000 प्रति वर्ष छात्रवृत्ति" },
      { en: "Paid in monthly installments of ₹1,000", hi: "₹1,000 की मासिक किस्तों में भुगतान" },
      { en: "Available from class 9 to class 12", hi: "कक्षा 9 से कक्षा 12 तक उपलब्ध" },
      { en: "Direct transfer to bank account", hi: "सीधे बैंक खाते में हस्तांतरण" },
      { en: "Renewable every year", hi: "हर साल नवीनीकरण योग्य" },
      { en: "Encourages meritorious students to continue education", hi: "मेधावी छात्रों को शिक्षा जारी रखने के लिए प्रोत्साहित" },
      { en: "Covers both tuition and other expenses", hi: "ट्यूशन और अन्य खर्च दोनों कवर" }
    ],
    notCovered: "Students in private unaided schools. Students with income above ₹3.5 lakh. Students who don't qualify NMMS exam. Those who drop out or fail.",
    notCoveredHindi: "निजी स्वायत्त स्कूलों के छात्र। ₹3.5 लाख से अधिक आय वाले छात्र। जो NMMS परीक्षा पास नहीं करते। जो ड्रॉप आउट हो जाते हैं या फेल हो जाते हैं।",
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई आवेदन शुल्क नहीं",
    validity: "Renewable every year till class 12",
    validityHindi: "कक्षा 12 तक हर साल नवीनीकरण",
    processingTime: "3-6 months after exam",
    processingTimeHindi: "परीक्षा के 3-6 महीने बाद",
    whereToApply: [
      { en: "Apply through your school's principal", hi: "अपने स्कूल के प्रधानाचार्य के माध्यम से आवेदन करें" },
      { en: "Online: scholarships.gov.in (NSP)", hi: "ऑनलाइन: scholarships.gov.in (NSP)" },
      { en: "Contact State Education Department", hi: "राज्य शिक्षा विभाग से संपर्क करें" },
      { en: "Call helpline: 0120-6619540", hi: "हेल्पलाइन: 0120-6619540" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Income Certificate", hi: "आय प्रमाण पत्र" },
      { en: "Class 7 Marksheet", hi: "कक्षा 7 की मार्कशीट" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "School Bonafide Certificate", hi: "स्कूल बोनाफाइड प्रमाण पत्र" }
    ],
    faqs: [
      { q: { en: "How do I apply?", hi: "मैं आवेदन कैसे करूं?" }, a: { en: "Through your school after qualifying NMMS exam.", hi: "NMMS परीक्षा पास करने के बाद अपने स्कूल के माध्यम से।" } },
      { q: { en: "Is there an exam?", hi: "क्या परीक्षा है?" }, a: { en: "Yes, State Level NMMS exam in class 8.", hi: "हां, कक्षा 8 में राज्य स्तरीय NMMS परीक्षा।" } }
    ],
    category: "education",
    ministry: "Ministry of Education",
    eligibility: { minAge: 13, maxAge: 19, isStudent: true, maxIncome: 350000, gender: "any", category: [], states: [] },
    officialLink: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    launchedYear: 2008
  },
  // ========== SCHEME 39: National Career Service (Extended) ==========
  {
    name: "PM Internship Scheme",
    nameHindi: "पीएम इंटर्नशिप योजना",
    shortDescription: "Internship opportunities in top 500 companies for youth with monthly stipend.",
    shortDescriptionHindi: "युवाओं के लिए शीर्ष 500 कंपनियों में मासिक वजीफे के साथ इंटर्नशिप के अवसर।",
    fullDescription: "PM Internship Scheme was launched in 2024 to provide internship opportunities to youth in India's top 500 companies. The scheme aims to provide 1 crore internships over 5 years to youth aged 21-24 years. Selected candidates get 12-month internships with a monthly stipend of ₹5,000 — of which ₹4,500 is paid by the government and ₹500 by the company. The scheme covers various sectors including IT, banking, manufacturing, retail, and more. Interns get real-world work experience and enhance their employability. Top companies like Reliance, TCS, Infosys, and HDFC are participating.",
    fullDescriptionHindi: "पीएम इंटर्नशिप योजना 2024 में भारत की शीर्ष 500 कंपनियों में युवाओं को इंटर्नशिप के अवसर प्रदान करने के लिए शुरू की गई थी। योजना का उद्देश्य 21-24 वर्ष के युवाओं को 5 साल में 1 करोड़ इंटर्नशिप प्रदान करना है। चयनित उम्मीदवारों को ₹5,000 के मासिक वजीफे के साथ 12 महीने की इंटर्नशिप मिलती है।",
    whoCanApply: "Indian youth aged 21-24 years. Must have passed class 10, 12, ITI, diploma, or graduation (BA, BSc, BCom, BCA, BBA, etc.). Not employed full-time. Not enrolled in full-time education. Family income should be below ₹8 lakh per annum.",
    whoCanApplyHindi: "21-24 वर्ष के भारतीय युवा। कक्षा 10, 12, ITI, डिप्लोमा, या स्नातक (BA, BSc, BCom, BCA, BBA, आदि) पास होना चाहिए। पूर्णकालिक नौकरी में नहीं। पूर्णकालिक शिक्षा में नामांकित नहीं। पारिवारिक आय ₹8 लाख प्रति वर्ष से कम होनी चाहिए।",
    benefitsDetailed: [
      { en: "12-month paid internship in top 500 companies", hi: "शीर्ष 500 कंपनियों में 12 महीने की सशुल्क इंटर्नशिप" },
      { en: "Monthly stipend of ₹5,000", hi: "₹5,000 का मासिक वजीफा" },
      { en: "₹4,500 paid by government + ₹500 by company", hi: "₹4,500 सरकार + ₹500 कंपनी द्वारा" },
      { en: "Real-world work experience", hi: "वास्तविक कार्य अनुभव" },
      { en: "Certificate after completion", hi: "पूरा होने पर प्रमाण पत्र" },
      { en: "Improved employability", hi: "बेहतर रोजगार क्षमता" },
      { en: "No cost to applicants", hi: "आवेदकों के लिए कोई लागत नहीं" }
    ],
    notCovered: "Youth above 24 or below 21. Those already employed. Students in full-time education. Families with income above ₹8 lakh. IIT, IIM, NLU, or other premium institute graduates.",
    notCoveredHindi: "24 से अधिक या 21 से कम उम्र के युवा। जो पहले से नौकरी में हैं। पूर्णकालिक शिक्षा में छात्र। ₹8 लाख से अधिक आय वाले परिवार। IIT, IIM, NLU या अन्य प्रीमियम संस्थान के स्नातक।",
    cost: "FREE — No application fee",
    costHindi: "मुफ्त — कोई आवेदन शुल्क नहीं",
    validity: "12-month internship",
    validityHindi: "12 महीने की इंटर्नशिप",
    processingTime: "2-4 weeks after application",
    processingTimeHindi: "आवेदन के 2-4 सप्ताह बाद",
    whereToApply: [
      { en: "Online: pminternship.mca.gov.in", hi: "ऑनलाइन: pminternship.mca.gov.in" },
      { en: "Register with Aadhaar and education details", hi: "आधार और शिक्षा विवरण के साथ पंजीकरण करें" },
      { en: "Apply to multiple companies", hi: "कई कंपनियों में आवेदन करें" },
      { en: "Call helpline: 1800-116-090", hi: "हेल्पलाइन: 1800-116-090" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Education Certificates (10th, 12th, Degree)", hi: "शिक्षा प्रमाण पत्र (10वीं, 12वीं, डिग्री)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Resume (PDF)", hi: "रिज्यूमे (PDF)" },
      { en: "Income Certificate", hi: "आय प्रमाण पत्र" }
    ],
    faqs: [
      { q: { en: "How much stipend do I get?", hi: "मुझे कितना वजीफा मिलता है?" }, a: { en: "₹5,000 per month.", hi: "₹5,000 प्रति माह।" } },
      { q: { en: "What is the age limit?", hi: "आयु सीमा क्या है?" }, a: { en: "21-24 years.", hi: "21-24 वर्ष।" } },
      { q: { en: "Do I get a job after internship?", hi: "इंटर्नशिप के बाद नौकरी मिलती है?" }, a: { en: "No guarantee, but improved chances.", hi: "कोई गारंटी नहीं, लेकिन बेहतर संभावनाएं।" } }
    ],
    category: "employment",
    ministry: "Ministry of Corporate Affairs",
    eligibility: { minAge: 21, maxAge: 24, maxIncome: 800000, gender: "any", category: [], states: [] },
    officialLink: "https://pminternship.mca.gov.in",
    helpline: "1800-116-090",
    launchedYear: 2024
  },
  
  // ========== SCHEME 40: Rashtriya Uchchatar Shiksha Abhiyan ==========
  {
    name: "Rashtriya Uchchatar Shiksha Abhiyan",
    nameHindi: "राष्ट्रीय उच्चतर शिक्षा अभियान",
    shortDescription: "Improves quality of higher education in state universities and colleges.",
    shortDescriptionHindi: "राज्य विश्वविद्यालयों और कॉलेजों में उच्च शिक्षा की गुणवत्ता में सुधार।",
    fullDescription: "Rashtriya Uchchatar Shiksha Abhiyan (RUSA) was launched in 2013 to improve the quality of higher education in India. It's a centrally sponsored scheme that funds state universities and colleges for infrastructure development, faculty improvement, research, and innovation. RUSA provides funding for new colleges, upgrading existing ones, starting new courses, and improving faculty quality. The scheme aims to achieve 32% Gross Enrolment Ratio (GER) in higher education by 2025. Funds are provided in phases — 60% by central government and 40% by state government for most components. The scheme has benefited over 1,500 institutions across India.",
    fullDescriptionHindi: "राष्ट्रीय उच्चतर शिक्षा अभियान (RUSA) 2013 में भारत में उच्च शिक्षा की गुणवत्ता में सुधार के लिए शुरू किया गया था। यह एक केंद्र प्रायोजित योजना है जो राज्य विश्वविद्यालयों और कॉलेजों को बुनियादी ढांचा विकास, संकाय सुधार, अनुसंधान और नवाचार के लिए धन देती है।",
    whoCanApply: "State universities and colleges (not private). Government-aided institutions. Institutions with NAAC accreditation or willing to get accredited. Both urban and rural institutions eligible.",
    whoCanApplyHindi: "राज्य विश्वविद्यालय और कॉलेज (निजी नहीं)। सरकारी सहायता प्राप्त संस्थान। NAAC मान्यता वाले या मान्यता प्राप्त करने के इच्छुक संस्थान। शहरी और ग्रामीण दोनों संस्थान पात्र।",
    benefitsDetailed: [
      { en: "Infrastructure development funding", hi: "बुनियादी ढांचा विकास वित्तपोषण" },
      { en: "Faculty improvement programs", hi: "संकाय सुधार कार्यक्रम" },
      { en: "Research and innovation support", hi: "अनुसंधान और नवाचार सहायता" },
      { en: "New courses and departments", hi: "नए पाठ्यक्रम और विभाग" },
      { en: "Digital learning infrastructure", hi: "डिजिटल शिक्षण बुनियादी ढांचा" },
      { en: "Student support services", hi: "छात्र सहायता सेवाएं" },
      { en: "Up to ₹100 crore per institution", hi: "प्रति संस्थान ₹100 करोड़ तक" }
    ],
    notCovered: "Private unaided institutions. Central universities. IITs, IIMs, NITs (funded separately). Institutions without proper accreditation. Non-educational activities.",
    notCoveredHindi: "निजी स्वायत्त संस्थान। केंद्रीय विश्वविद्यालय। IIT, IIM, NIT (अलग से वित्त पोषित)। उचित मान्यता के बिना संस्थान। गैर-शैक्षिक गतिविधियां।",
    cost: "FREE for eligible institutions",
    costHindi: "पात्र संस्थानों के लिए मुफ्त",
    validity: "Project-based (2-5 years)",
    validityHindi: "परियोजना-आधारित (2-5 साल)",
    processingTime: "6-12 months for approval",
    processingTimeHindi: "अनुमोदन के लिए 6-12 महीने",
    whereToApply: [
      { en: "Online: rusa.nic.in", hi: "ऑनलाइन: rusa.nic.in" },
      { en: "Through State Higher Education Council", hi: "राज्य उच्च शिक्षा परिषद के माध्यम से" },
      { en: "Contact University Grants Commission (UGC)", hi: "विश्वविद्यालय अनुदान आयोग (UGC) से संपर्क करें" },
      { en: "Call helpline: 011-26175655", hi: "हेल्पलाइन: 011-26175655" }
    ],
    documentsDetailed: [
      { en: "Institution Registration Certificate", hi: "संस्थान पंजीकरण प्रमाण पत्र" },
      { en: "NAAC Accreditation Certificate", hi: "NAAC मान्यता प्रमाण पत्र" },
      { en: "Project Proposal Document", hi: "परियोजना प्रस्ताव दस्तावेज" },
      { en: "Financial Statements", hi: "वित्तीय विवरण" },
      { en: "Land Documents", hi: "भूमि दस्तावेज" }
    ],
    faqs: [
      { q: { en: "Who can apply for RUSA?", hi: "RUSA के लिए कौन आवेदन कर सकता है?" }, a: { en: "State universities and government-aided colleges.", hi: "राज्य विश्वविद्यालय और सरकारी सहायता प्राप्त कॉलेज।" } },
      { q: { en: "Can private colleges apply?", hi: "क्या निजी कॉलेज आवेदन कर सकते हैं?" }, a: { en: "No, only government/aided institutions.", hi: "नहीं, सिर्फ सरकारी/सहायता प्राप्त संस्थान।" } }
    ],
    category: "education",
    ministry: "Ministry of Education",
    eligibility: { gender: "any", category: [], states: [] },
    officialLink: "https://rusa.nic.in",
    helpline: "011-26175655",
    launchedYear: 2013
  },
    // ========== SCHEME 41: PM Suraksha Bima Yojana (Extended) ==========
  {
    name: "PM SVANidhi",
    nameHindi: "पीएम स्वनिधि",
    shortDescription: "Micro-credit loans for street vendors to restart their businesses.",
    shortDescriptionHindi: "स्ट्रीट विक्रेताओं को अपना व्यवसाय फिर से शुरू करने के लिए माइक्रो-क्रेडिट ऋण।",
    fullDescription: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi) was launched in 2020 to provide affordable working capital loans to street vendors affected by COVID-19. The scheme provides collateral-free loans in three phases: ₹10,000 (first), ₹20,000 (second), and ₹50,000 (third). Vendors who repay on time get higher loans and 7% interest subsidy. The scheme has benefited over 50 lakh street vendors across India. It also provides digital transaction incentives and skill development opportunities. Loans are provided by banks, NBFCs, and MFIs.",
    fullDescriptionHindi: "पीएम स्ट्रीट वेंडर आत्मनिर्भर निधि (PM SVANidhi) 2020 में COVID-19 से प्रभावित स्ट्रीट विक्रेताओं को सस्ती कार्यशील पूंजी ऋण प्रदान करने के लिए शुरू की गई थी। योजना तीन चरणों में बिना गारंटी ऋण प्रदान करती है: ₹10,000 (पहला), ₹20,000 (दूसरा), और ₹50,000 (तीसरा)। समय पर चुकाने वाले विक्रेताओं को उच्च ऋण और 7% ब्याज सब्सिडी मिलती है।",
    whoCanApply: "Street vendors who have a Certificate of Vending (CoV) or Letter of Recommendation (LoR) from Urban Local Bodies. Must be vending before March 24, 2020. Vendors with identity cards issued by ULB. Those who lost business during COVID.",
    whoCanApplyHindi: "स्ट्रीट विक्रेता जिनके पास शहरी स्थानीय निकायों से वेंडिंग प्रमाण पत्र (CoV) या सिफारिश पत्र (LoR) है। 24 मार्च 2020 से पहले विक्रय कर रहे हों। ULB द्वारा जारी पहचान पत्र वाले विक्रेता। जिन्होंने COVID के दौरान व्यवसाय खो दिया।",
    benefitsDetailed: [
      { en: "Collateral-free loan up to ₹50,000", hi: "बिना गारंटी ₹50,000 तक ऋण" },
      { en: "Three phases — ₹10K, ₹20K, ₹50K", hi: "तीन चरण — ₹10K, ₹20K, ₹50K" },
      { en: "7% interest subsidy on timely repayment", hi: "समय पर चुकौती पर 7% ब्याज सब्सिडी" },
      { en: "Digital transaction incentives", hi: "डिजिटल लेनदेन प्रोत्साहन" },
      { en: "No processing fee", hi: "कोई प्रोसेसिंग शुल्क नहीं" },
      { en: "Skill development and training", hi: "कौशल विकास और प्रशिक्षण" },
      { en: "Can be used for business capital", hi: "व्यवसाय पूंजी के लिए उपयोग कर सकते हैं" }
    ],
    notCovered: "Vendors without CoV/LoR. Vendors who started after March 2020. Non-street vendors (shops, hawkers with permanent structure). Defaulters.",
    notCoveredHindi: "CoV/LoR के बिना विक्रेता। मार्च 2020 के बाद शुरू करने वाले विक्रेता। गैर-स्ट्रीट विक्रेता (स्थायी संरचना वाली दुकानें, फेरीवाले)। डिफ़ॉल्टर।",
    cost: "No processing fee. Interest 7% subsidized",
    costHindi: "कोई प्रोसेसिंग शुल्क नहीं। ब्याज 7% सब्सिडी",
    validity: "Loan tenure 12 months (repayable)",
    validityHindi: "ऋण अवधि 12 महीने (चुकाने योग्य)",
    processingTime: "15-30 days after application",
    processingTimeHindi: "आवेदन के 15-30 दिन बाद",
    whereToApply: [
      { en: "Online: pmsvanidhi.mohua.gov.in", hi: "ऑनलाइन: pmsvanidhi.mohua.gov.in" },
      { en: "Visit any bank branch", hi: "किसी भी बैंक शाखा में जाएं" },
      { en: "Contact local Urban Local Body (ULB)", hi: "स्थानीय शहरी निकाय (ULB) से संपर्क करें" },
      { en: "Call helpline: 1800-11-0033", hi: "हेल्पलाइन: 1800-11-0033" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Certificate of Vending (CoV) or LoR", hi: "वेंडिंग प्रमाण पत्र (CoV) या LoR" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "How much loan can I get?", hi: "कितना ऋण मिल सकता है?" }, a: { en: "₹10,000 initially, up to ₹50,000 in phases.", hi: "शुरुआत में ₹10,000, चरणों में ₹50,000 तक।" } },
      { q: { en: "Do I need collateral?", hi: "क्या गारंटी चाहिए?" }, a: { en: "No, completely collateral-free.", hi: "नहीं, पूरी तरह बिना गारंटी।" } }
    ],
    category: "business",
    ministry: "Ministry of Housing and Urban Affairs",
    eligibility: { minAge: 18, hasBusiness: true, gender: "any", category: [], states: [] },
    officialLink: "https://pmsvanidhi.mohua.gov.in",
    helpline: "1800-11-0033",
    launchedYear: 2020
  },
  
  // ========== SCHEME 42: Ujjwala Yojana (Extended) ==========
  {
    name: "PM Ujjwala Yojana 2.0",
    nameHindi: "पीएम उज्ज्वला योजना 2.0",
    shortDescription: "Extended version of Ujjwala with free first refill and hotplate for poor women.",
    shortDescriptionHindi: "गरीब महिलाओं के लिए मुफ्त पहली रिफिल और हॉटप्लेट के साथ उज्ज्वला का विस्तारित संस्करण।",
    fullDescription: "PM Ujjwala Yojana 2.0 was launched in August 2021 as an extension of the original scheme. It aims to provide 1 crore additional LPG connections to women from BPL families. The scheme provides a free LPG connection with first refill and hotplate absolutely free. Earlier, the first refill and stove were charged. Now, all components — connection, first refill, and hotplate — are free. The target was achieved in 2022 with over 9.6 crore connections given so far. Beneficiaries can get additional connections and refills at subsidized rates.",
    fullDescriptionHindi: "पीएम उज्ज्वला योजना 2.0 अगस्त 2021 में मूल योजना के विस्तार के रूप में शुरू की गई थी। इसका उद्देश्य BPL परिवारों की महिलाओं को 1 करोड़ अतिरिक्त LPG कनेक्शन प्रदान करना है। योजना मुफ्त LPG कनेक्शन के साथ पहली रिफिल और हॉटप्लेट बिल्कुल मुफ्त प्रदान करती है।",
    whoCanApply: "Adult women (18+) from BPL families who don't have an existing LPG connection. Priority to SC/ST, PMAY, AAY, and other marginalized families. Must have Aadhaar and BPL card.",
    whoCanApplyHindi: "BPL परिवारों की वयस्क महिलाएं (18+) जिनके पास पहले से LPG कनेक्शन नहीं है। SC/ST, PMAY, AAY और अन्य हाशिए के परिवारों को प्राथमिकता। आधार और BPL कार्ड होना चाहिए।",
    benefitsDetailed: [
      { en: "FREE LPG connection", hi: "मुफ्त LPG कनेक्शन" },
      { en: "FREE first refill (₹800+ value)", hi: "मुफ्त पहली रिफिल (₹800+ मूल्य)" },
      { en: "FREE hotplate (₹1,000+ value)", hi: "मुफ्त हॉटप्लेट (₹1,000+ मूल्य)" },
      { en: "Subsidized subsequent refills", hi: "सब्सिडी वाली बाद की रिफिल" },
      { en: "Cleaner cooking fuel", hi: "स्वच्छ खाना पकाने का ईंधन" },
      { en: "Reduced health issues from smoke", hi: "धुएं से स्वास्थ्य समस्याएं कम" },
      { en: "Saves time and effort", hi: "समय और प्रयास की बचत" }
    ],
    notCovered: "Women who already have LPG connection. Families with above-poverty-line income. Commercial establishments.",
    notCoveredHindi: "जिन महिलाओं के पास पहले से LPG कनेक्शन है। गरीबी रेखा से ऊपर की आय वाले परिवार। वाणिज्यिक प्रतिष्ठान।",
    cost: "FREE — Connection, first refill, and hotplate all free",
    costHindi: "मुफ्त — कनेक्शन, पहली रिफिल, और हॉटप्लेट सब मुफ्त",
    validity: "One-time connection",
    validityHindi: "एक बार कनेक्शन",
    processingTime: "7-15 days after application",
    processingTimeHindi: "आवेदन के 7-15 दिन बाद",
    whereToApply: [
      { en: "Online: pmuy.gov.in", hi: "ऑनलाइन: pmuy.gov.in" },
      { en: "Visit nearest LPG distributor", hi: "नजदीकी LPG वितरक पर जाएं" },
      { en: "Call helpline: 1800-266-6696", hi: "हेल्पलाइन: 1800-266-6696" },
      { en: "Visit nearest CSC center", hi: "नजदीकी CSC केंद्र पर जाएं" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "BPL Ration Card", hi: "BPL राशन कार्ड" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Address Proof", hi: "पता प्रमाण" }
    ],
    faqs: [
      { q: { en: "Is first refill free?", hi: "क्या पहली रिफिल मुफ्त है?" }, a: { en: "Yes, in PMUY 2.0, first refill is free.", hi: "हां, PMUY 2.0 में पहली रिफिल मुफ्त है।" } },
      { q: { en: "Do I need to pay for hotplate?", hi: "क्या हॉटप्लेट के लिए भुगतान करना होगा?" }, a: { en: "No, it's completely free.", hi: "नहीं, यह पूरी तरह मुफ्त है।" } }
    ],
    category: "women",
    ministry: "Ministry of Petroleum & Natural Gas",
    eligibility: { minAge: 18, gender: "female", isBPL: true, category: [], states: [] },
    officialLink: "https://pmuy.gov.in",
    helpline: "1800-266-6696",
    launchedYear: 2021
  },
  
  // ========== SCHEME 43: PM Kisan Maan-dhan Yojana ==========
  {
    name: "PM Kisan Maan-dhan Yojana",
    nameHindi: "पीएम किसान मान-धन योजना",
    shortDescription: "Pension scheme for small and marginal farmers with ₹3,000 monthly pension after 60.",
    shortDescriptionHindi: "छोटे और सीमांत किसानों के लिए 60 के बाद ₹3,000 मासिक पेंशन योजना।",
    fullDescription: "Pradhan Mantri Kisan Maan-dhan Yojana (PM-KMY) was launched in 2019 to provide social security to small and marginal farmers. Under this scheme, farmers aged 18-40 years can enroll for a voluntary pension scheme. They receive a guaranteed monthly pension of ₹3,000 after attaining the age of 60 years. The scheme is a co-contribution model — farmers pay a monthly contribution of ₹55-₹200 (based on age), and the government contributes an equal amount. The Central Government matches the contribution. If the farmer dies before 60, the spouse can continue the scheme or get back the contribution.",
    fullDescriptionHindi: "प्रधानमंत्री किसान मान-धन योजना (PM-KMY) 2019 में छोटे और सीमांत किसानों को सामाजिक सुरक्षा प्रदान करने के लिए शुरू की गई थी। इस योजना के तहत, 18-40 साल के किसान स्वैच्छिक पेंशन योजना के लिए नामांकन कर सकते हैं। उन्हें 60 साल की उम्र के बाद ₹3,000 की गारंटीशुदा मासिक पेंशन मिलती है।",
    whoCanApply: "Small and marginal farmers aged 18-40 years. Must have cultivable land up to 2 hectares. Must not be covered under any other pension scheme (EPFO, ESIC, NPS). Must not be an income taxpayer. Aadhaar and bank account required.",
    whoCanApplyHindi: "18-40 साल के छोटे और सीमांत किसान। 2 हेक्टेयर तक खेती योग्य भूमि होनी चाहिए। किसी अन्य पेंशन योजना (EPFO, ESIC, NPS) के तहत कवर नहीं होना चाहिए। आयकर दाता नहीं होना चाहिए। आधार और बैंक खाता जरूरी।",
    benefitsDetailed: [
      { en: "₹3,000 monthly pension after age 60", hi: "60 साल की उम्र के बाद ₹3,000 मासिक पेंशन" },
      { en: "Government co-contributes equal amount", hi: "सरकार समान राशि का सह-योगदान देती है" },
      { en: "Monthly contribution only ₹55-₹200", hi: "मासिक योगदान सिर्फ ₹55-₹200" },
      { en: "Spouse gets pension if farmer dies", hi: "किसान की मृत्यु पर पति/पत्नी को पेंशन" },
      { en: "Lifetime pension from age 60", hi: "60 साल की उम्र से आजीवन पेंशन" },
      { en: "Easy enrollment through CSC", hi: "CSC के माध्यम से आसान नामांकन" },
      { en: "Direct transfer to bank account", hi: "सीधे बैंक खाते में हस्तांतरण" }
    ],
    notCovered: "Farmers above 40 years or below 18 years. Farmers with more than 2 hectares. Income taxpayers. Those covered under EPFO/ESIC/NPS.",
    notCoveredHindi: "40 साल से अधिक या 18 साल से कम उम्र के किसान। 2 हेक्टेयर से अधिक जमीन वाले किसान। आयकर दाता। EPFO/ESIC/NPS के तहत कवर।",
    cost: "Monthly contribution ₹55 to ₹200 (age-based) + govt match",
    costHindi: "मासिक योगदान ₹55 से ₹200 (उम्र के आधार पर) + सरकार मिलाती है",
    validity: "Lifetime pension from age 60",
    validityHindi: "60 साल की उम्र से आजीवन पेंशन",
    processingTime: "Same day enrollment",
    processingTimeHindi: "उसी दिन नामांकन",
    whereToApply: [
      { en: "Visit nearest Common Service Centre (CSC)", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Online: maandhan.in", hi: "ऑनलाइन: maandhan.in" },
      { en: "Call helpline: 1800-267-6888", hi: "हेल्पलाइन: 1800-267-6888" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (mandatory)", hi: "आधार कार्ड (अनिवार्य)" },
      { en: "Land Records (Khatauni/Khasra)", hi: "भूमि रिकॉर्ड (खतौनी/खसरा)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Mobile Number", hi: "मोबाइल नंबर" }
    ],
    faqs: [
      { q: { en: "When does pension start?", hi: "पेंशन कब शुरू होती है?" }, a: { en: "At age 60.", hi: "60 साल की उम्र में।" } },
      { q: { en: "What if I die before 60?", hi: "अगर मैं 60 से पहले मर जाऊं?" }, a: { en: "Spouse gets pension or contribution back.", hi: "पति/पत्नी को पेंशन या योगदान वापस।" } }
    ],
    category: "pension",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, maxAge: 40, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://maandhan.in",
    helpline: "1800-267-6888",
    launchedYear: 2019
  },
  // ========== SCHEME 44: PM Jan Aushadhi Yojana ==========
  {
    name: "PM Jan Aushadhi Yojana",
    nameHindi: "प्रधानमंत्री जन औषधि योजना",
    shortDescription: "Affordable generic medicines at Jan Aushadhi Kendras across India.",
    shortDescriptionHindi: "पूरे भारत में जन औषधि केंद्रों पर सस्ती जेनेरिक दवाइयां।",
    fullDescription: "Pradhan Mantri Jan Aushadhi Yojana (PMJAY) was launched in 2008 to make quality generic medicines available at affordable prices to all citizens, especially the poor. Generic medicines are 50-90% cheaper than branded medicines but have the same quality, efficacy, and safety. Over 10,000 Jan Aushadhi Kendras are operational across India, selling more than 1,900 medicines and 300 surgical items. These kendras are set up at convenient locations — near hospitals, bus stands, and markets. The scheme helps citizens save thousands of rupees on their monthly medicine bills without compromising on quality.",
    fullDescriptionHindi: "प्रधानमंत्री जन औषधि योजना (PMJAY) 2008 में सभी नागरिकों, विशेष रूप से गरीबों को सस्ती कीमतों पर गुणवत्तापूर्ण जेनेरिक दवाइयां उपलब्ध कराने के लिए शुरू की गई थी। जेनेरिक दवाइयां ब्रांडेड दवाइयों से 50-90% सस्ती होती हैं लेकिन उनकी गुणवत्ता, प्रभावकारिता और सुरक्षा समान होती है। भारत भर में 10,000 से अधिक जन औषधि केंद्र चालू हैं, जो 1,900 से अधिक दवाइयां और 300 शल्य चिकित्सा सामान बेचते हैं।",
    whoCanApply: "All Indian citizens — no income limit, no age limit, no category restriction. Anyone can buy medicines from Jan Aushadhi Kendras. Also, entrepreneurs can open their own Jan Aushadhi Kendra.",
    whoCanApplyHindi: "सभी भारतीय नागरिक — कोई आय सीमा नहीं, कोई आयु सीमा नहीं, कोई श्रेणी प्रतिबंध नहीं। कोई भी जन औषधि केंद्र से दवाइयां खरीद सकता है। साथ ही, उद्यमी अपना खुद का जन औषधि केंद्र खोल सकते हैं।",
    benefitsDetailed: [
      { en: "Medicines 50-90% cheaper than branded", hi: "ब्रांडेड से 50-90% सस्ती दवाइयां" },
      { en: "Same quality as branded medicines", hi: "ब्रांडेड दवाइयों जैसी ही गुणवत्ता" },
      { en: "1900+ medicines available", hi: "1900+ दवाइयां उपलब्ध" },
      { en: "300+ surgical items available", hi: "300+ शल्य चिकित्सा सामान उपलब्ध" },
      { en: "10000+ Jan Aushadhi Kendras across India", hi: "भारत भर में 10000+ जन औषधि केंद्र" },
      { en: "Entrepreneurs can open their own Kendra", hi: "उद्यमी अपना खुद का केंद्र खोल सकते हैं" },
      { en: "Government subsidy for Kendra setup", hi: "केंद्र सेटअप के लिए सरकारी सब्सिडी" }
    ],
    notCovered: "Branded medicines (only generics available). Prescription-only drugs require valid prescription. Rare/specialized medicines may not be available everywhere.",
    notCoveredHindi: "ब्रांडेड दवाइयां (सिर्फ जेनेरिक उपलब्ध)। प्रिस्क्रिप्शन-केवल दवाओं के लिए वैध प्रिस्क्रिप्शन आवश्यक। दुर्लभ/विशेष दवाइयां हर जगह उपलब्ध नहीं हो सकतीं।",
    cost: "Medicines at 50-90% discount",
    costHindi: "दवाइयां 50-90% छूट पर",
    validity: "Ongoing programme",
    validityHindi: "चल रहा कार्यक्रम",
    processingTime: "Immediate — walk-in purchase",
    processingTimeHindi: "तत्काल — वॉक-इन खरीद",
    whereToApply: [
      { en: "Visit nearest Jan Aushadhi Kendra", hi: "नजदीकी जन औषधि केंद्र पर जाएं" },
      { en: "Online: janaushadhi.gov.in", hi: "ऑनलाइन: janaushadhi.gov.in" },
      { en: "Find Kendra: locate.janaushadhi.gov.in", hi: "केंद्र खोजें: locate.janaushadhi.gov.in" },
      { en: "Call helpline: 1800-180-8080", hi: "हेल्पलाइन: 1800-180-8080" }
    ],
    documentsDetailed: [
      { en: "Doctor's Prescription", hi: "डॉक्टर का प्रिस्क्रिप्शन" },
      { en: "Aadhaar Card (for opening Kendra)", hi: "आधार कार्ड (केंद्र खोलने के लिए)" },
      { en: "Bank Account (for Kendra owners)", hi: "बैंक खाता (केंद्र मालिकों के लिए)" }
    ],
    faqs: [
      { q: { en: "Are these medicines safe?", hi: "क्या ये दवाइयां सुरक्षित हैं?" }, a: { en: "Yes, they are same quality as branded ones.", hi: "हां, ये ब्रांडेड जैसी ही गुणवत्ता की हैं।" } },
      { q: { en: "Can I open Jan Aushadhi Kendra?", hi: "क्या मैं जन औषधि केंद्र खोल सकता हूं?" }, a: { en: "Yes, apply through PMBJP portal with subsidy.", hi: "हां, सब्सिडी के साथ PMBJP पोर्टल के माध्यम से आवेदन करें।" } }
    ],
    category: "health",
    ministry: "Ministry of Chemicals and Fertilizers",
    eligibility: { gender: "any", category: [], states: [] },
    officialLink: "https://janaushadhi.gov.in",
    helpline: "1800-180-8080",
    launchedYear: 2008
  },
  
  // ========== SCHEME 45: Ayushman Bharat Health & Wellness Centers ==========
  {
    name: "Ayushman Bharat Health & Wellness Centers",
    nameHindi: "आयुष्मान भारत स्वास्थ्य और कल्याण केंद्र",
    shortDescription: "Comprehensive primary healthcare services at Health & Wellness Centers.",
    shortDescriptionHindi: "स्वास्थ्य और कल्याण केंद्रों पर व्यापक प्राथमिक स्वास्थ्य सेवाएं।",
    fullDescription: "Ayushman Bharat Health & Wellness Centers (HWCs) were launched in 2018 to deliver comprehensive primary healthcare services closer to people's homes. The scheme upgraded existing Primary Health Centers (PHCs) and Sub-Centers into Health & Wellness Centers. These centers provide: preventive healthcare, health promotion, maternal & child health, non-communicable disease screening, free essential medicines, and diagnostic services. Each HWC is staffed by a mid-level health provider (Community Health Officer) and team of ASHAs. They provide 12 comprehensive services including yoga, wellness activities, and health education. Over 1.5 lakh HWCs are operational in India.",
    fullDescriptionHindi: "आयुष्मान भारत स्वास्थ्य और कल्याण केंद्र (HWC) 2018 में लोगों के घरों के करीब व्यापक प्राथमिक स्वास्थ्य सेवाएं प्रदान करने के लिए शुरू किए गए थे। योजना ने मौजूदा प्राथमिक स्वास्थ्य केंद्रों (PHC) और उप-केंद्रों को स्वास्थ्य और कल्याण केंद्रों में अपग्रेड किया। ये केंद्र प्रदान करते हैं: निवारक स्वास्थ्य सेवा, स्वास्थ्य संवर्धन, मातृ और शिशु स्वास्थ्य, गैर-संचारी रोग स्क्रीनिंग, मुफ्त आवश्यक दवाइयां, और नैदानिक सेवाएं।",
    whoCanApply: "All Indian citizens — no income limit, no age limit. Anyone can visit HWC for primary healthcare services. Priority to rural and underserved populations. Free for all.",
    whoCanApplyHindi: "सभी भारतीय नागरिक — कोई आय सीमा नहीं, कोई आयु सीमा नहीं। कोई भी HWC पर प्राथमिक स्वास्थ्य सेवाओं के लिए जा सकता है। ग्रामीण और वंचित आबादी को प्राथमिकता। सभी के लिए मुफ्त।",
    benefitsDetailed: [
      { en: "Free OPD consultations at HWC", hi: "HWC पर मुफ्त OPD परामर्श" },
      { en: "Free essential medicines", hi: "मुफ्त आवश्यक दवाइयां" },
      { en: "Free diagnostic tests (BP, sugar, etc.)", hi: "मुफ्त नैदानिक परीक्षण (BP, शुगर, आदि)" },
      { en: "Maternal and child healthcare", hi: "मातृ और शिशु स्वास्थ्य सेवा" },
      { en: "NCD screening (BP, diabetes, cancer)", hi: "NCD स्क्रीनिंग (BP, मधुमेह, कैंसर)" },
      { en: "Yoga and wellness activities", hi: "योग और कल्याण गतिविधियां" },
      { en: "Health education and awareness", hi: "स्वास्थ्य शिक्षा और जागरूकता" }
    ],
    notCovered: "Specialized treatment (referred to higher centers). Surgery (not done at HWC). Emergency services (limited). Advanced diagnostic tests.",
    notCoveredHindi: "विशेष उपचार (उच्च केंद्रों में रेफरल)। सर्जरी (HWC पर नहीं)। आपातकालीन सेवाएं (सीमित)। उन्नत नैदानिक परीक्षण।",
    cost: "FREE — All services free",
    costHindi: "मुफ्त — सभी सेवाएं मुफ्त",
    validity: "Ongoing programme",
    validityHindi: "चल रहा कार्यक्रम",
    processingTime: "Immediate — walk-in",
    processingTimeHindi: "तत्काल — वॉक-इन",
    whereToApply: [
      { en: "Visit nearest Health & Wellness Center", hi: "नजदीकी स्वास्थ्य और कल्याण केंद्र पर जाएं" },
      { en: "Contact nearest ASHA worker", hi: "नजदीकी आशा कार्यकर्ता से संपर्क करें" },
      { en: "Call health helpline: 104", hi: "स्वास्थ्य हेल्पलाइन: 104" },
      { en: "Online: ab-hwc.nhp.gov.in", hi: "ऑनलाइन: ab-hwc.nhp.gov.in" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card (for registration)", hi: "आधार कार्ड (पंजीकरण के लिए)" },
      { en: "ABHA ID (if available)", hi: "ABHA आईडी (यदि उपलब्ध हो)" },
      { en: "Previous Medical Records", hi: "पिछले चिकित्सा रिकॉर्ड" }
    ],
    faqs: [
      { q: { en: "Is HWC treatment free?", hi: "क्या HWC उपचार मुफ्त है?" }, a: { en: "Yes, all services at HWC are free.", hi: "हां, HWC पर सभी सेवाएं मुफ्त हैं।" } },
      { q: { en: "Can I get specialist treatment?", hi: "क्या मुझे विशेषज्ञ उपचार मिल सकता है?" }, a: { en: "Only referrals. Specialists are at higher centers.", hi: "सिर्फ रेफरल। विशेषज्ञ उच्च केंद्रों पर हैं।" } }
    ],
    category: "health",
    ministry: "Ministry of Health & Family Welfare",
    eligibility: { gender: "any", category: [], states: [] },
    officialLink: "https://ab-hwc.nhp.gov.in",
    helpline: "104",
    launchedYear: 2018
  },
    // ========== SCHEME 46: PM Fasal Bima Yojana (Extended) ==========
  {
    name: "PM Krishi Sinchayee Yojana",
    nameHindi: "प्रधानमंत्री कृषि सिंचाई योजना",
    shortDescription: "Financial support to farmers for irrigation and water conservation.",
    shortDescriptionHindi: "सिंचाई और जल संरक्षण के लिए किसानों को वित्तीय सहायता।",
    fullDescription: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) was launched in 2015 with the motto 'Har Khet Ko Paani' (Water to Every Field). The scheme aims to expand cultivated area with assured irrigation, reduce wastage of water, and improve water use efficiency. Key components include: Accelerated Irrigation Benefit Programme (AIBP), Har Khet Ko Pani (HKKP), Watershed Development, and Per Drop More Crop (PDMC). Farmers get financial assistance for drip and sprinkler irrigation systems, with subsidy up to 55% for small/marginal farmers and 45% for others. Over 80 lakh hectares have been brought under micro-irrigation.",
    fullDescriptionHindi: "प्रधानमंत्री कृषि सिंचाई योजना (PMKSY) 2015 में 'हर खेत को पानी' के आदर्श वाक्य के साथ शुरू की गई थी। योजना का उद्देश्य सुनिश्चित सिंचाई के साथ खेती क्षेत्र का विस्तार करना, पानी की बर्बादी कम करना, और जल उपयोग दक्षता में सुधार करना है। प्रमुख घटकों में शामिल हैं: त्वरित सिंचाई लाभ कार्यक्रम (AIBP), हर खेत को पानी (HKKP), वाटरशेड विकास, और प्रति बूंद अधिक फसल (PDMC)। किसानों को ड्रिप और स्प्रिंकलर सिंचाई प्रणाली के लिए वित्तीय सहायता मिलती है, छोटे/सीमांत किसानों के लिए 55% और अन्य के लिए 45% तक सब्सिडी।",
    whoCanApply: "All farmers — small, marginal, and large. Priority to small and marginal farmers, SC/ST, and women farmers. Must have cultivable land with irrigation potential. Cooperative societies and FPOs can also apply.",
    whoCanApplyHindi: "सभी किसान — छोटे, सीमांत और बड़े। छोटे और सीमांत किसानों, SC/ST और महिला किसानों को प्राथमिकता। सिंचाई क्षमता वाली खेती योग्य भूमि होनी चाहिए। सहकारी समितियां और FPO भी आवेदन कर सकते हैं।",
    benefitsDetailed: [
      { en: "Up to 55% subsidy on drip irrigation", hi: "ड्रिप सिंचाई पर 55% तक सब्सिडी" },
      { en: "Up to 45% subsidy on sprinkler system", hi: "स्प्रिंकलर सिस्टम पर 45% तक सब्सिडी" },
      { en: "Water conservation structures support", hi: "जल संरक्षण संरचनाओं के लिए सहायता" },
      { en: "Watershed development in villages", hi: "गांवों में वाटरशेड विकास" },
      { en: "Reduces water wastage significantly", hi: "पानी की बर्बादी में उल्लेखनीय कमी" },
      { en: "Improves crop yield by 20-30%", hi: "फसल उत्पादन में 20-30% सुधार" },
      { en: "Reduces farming cost and labor", hi: "खेती लागत और श्रम में कमी" }
    ],
    notCovered: "Non-agricultural land. Farmers who already availed similar subsidy. Large irrigation projects (funded separately). Land without clear ownership.",
    notCoveredHindi: "गैर-कृषि भूमि। जिन किसानों ने पहले से समान सब्सिडी ली है। बड़ी सिंचाई परियोजनाएं (अलग से वित्त पोषित)। स्पष्ट स्वामित्व के बिना भूमि।",
    cost: "Subsidy up to 55% for small/marginal farmers",
    costHindi: "छोटे/सीमांत किसानों के लिए 55% तक सब्सिडी",
    validity: "Project-based (2-3 years)",
    validityHindi: "परियोजना-आधारित (2-3 साल)",
    processingTime: "2-3 months after application",
    processingTimeHindi: "आवेदन के 2-3 महीने बाद",
    whereToApply: [
      { en: "Online: pmksy.gov.in", hi: "ऑनलाइन: pmksy.gov.in" },
      { en: "Visit local Agriculture Department office", hi: "स्थानीय कृषि विभाग कार्यालय में जाएं" },
      { en: "Contact Block Agriculture Officer", hi: "ब्लॉक कृषि अधिकारी से संपर्क करें" },
      { en: "Call helpline: 1800-180-1551", hi: "हेल्पलाइन: 1800-180-1551" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Land Records (Khatauni/Khasra)", hi: "भूमि रिकॉर्ड (खतौनी/खसरा)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Water Source Certificate", hi: "जल स्रोत प्रमाण पत्र" },
      { en: "Quotation for Equipment", hi: "उपकरण के लिए कोटेशन" }
    ],
    faqs: [
      { q: { en: "How much subsidy do I get?", hi: "कितनी सब्सिडी मिलती है?" }, a: { en: "Up to 55% for small/marginal farmers, 45% for others.", hi: "छोटे/सीमांत किसानों के लिए 55% तक, अन्य के लिए 45%।" } },
      { q: { en: "Can I get drip irrigation installed?", hi: "क्या ड्रिप सिंचाई लगवा सकता हूं?" }, a: { en: "Yes, with subsidy assistance.", hi: "हां, सब्सिडी सहायता के साथ।" } }
    ],
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://pmksy.gov.in",
    helpline: "1800-180-1551",
    launchedYear: 2015
  },
  
  // ========== SCHEME 47: Soil Health Card Scheme ==========
  {
    name: "Soil Health Card Scheme",
    nameHindi: "मृदा स्वास्थ्य कार्ड योजना",
    shortDescription: "Free soil testing and nutrient recommendations for farmers.",
    shortDescriptionHindi: "किसानों के लिए मुफ्त मिट्टी परीक्षण और पोषक तत्व सिफारिशें।",
    fullDescription: "Soil Health Card Scheme was launched in 2015 to provide every farmer a Soil Health Card that contains information about the nutrient status of their soil. The card provides crop-wise recommendations on appropriate dosage of nutrients and fertilizers for improving productivity. Each card is valid for 3 years, after which soil testing is repeated. The scheme helps farmers reduce excessive use of fertilizers, improve soil health, and reduce cultivation cost. Over 23 crore Soil Health Cards have been issued. Soil samples are tested for 12 parameters — macronutrients (N, P, K), secondary nutrients (S), micronutrients (Zn, Fe, Cu, Mn, B), and physical parameters (pH, EC, OC).",
    fullDescriptionHindi: "मृदा स्वास्थ्य कार्ड योजना 2015 में प्रत्येक किसान को एक मृदा स्वास्थ्य कार्ड प्रदान करने के लिए शुरू की गई थी जिसमें उनकी मिट्टी की पोषक स्थिति के बारे में जानकारी होती है। कार्ड उत्पादकता में सुधार के लिए पोषक तत्वों और उर्वरकों की उचित खुराक पर फसल-वार सिफारिशें प्रदान करता है। प्रत्येक कार्ड 3 साल के लिए वैध है।",
    whoCanApply: "All farmers — small, marginal, and large. No income limit. Free for all farmers. Farmers can approach local agriculture department for soil testing. Soil Health Cards are issued every 3 years.",
    whoCanApplyHindi: "सभी किसान — छोटे, सीमांत और बड़े। कोई आय सीमा नहीं। सभी किसानों के लिए मुफ्त। किसान मिट्टी परीक्षण के लिए स्थानीय कृषि विभाग से संपर्क कर सकते हैं। मृदा स्वास्थ्य कार्ड हर 3 साल में जारी किए जाते हैं।",
    benefitsDetailed: [
      { en: "Free soil testing in government labs", hi: "सरकारी प्रयोगशालाओं में मुफ्त मिट्टी परीक्षण" },
      { en: "Soil Health Card with nutrient analysis", hi: "पोषक विश्लेषण के साथ मृदा स्वास्थ्य कार्ड" },
      { en: "Crop-wise fertilizer recommendations", hi: "फसल-वार उर्वरक सिफारिशें" },
      { en: "Reduces excess fertilizer use by 30%", hi: "अत्यधिक उर्वरक उपयोग में 30% कमी" },
      { en: "Saves ₹5,000-₹10,000 per acre per year", hi: "प्रति एकड़ प्रति वर्ष ₹5,000-₹10,000 बचत" },
      { en: "Improves soil health and yield", hi: "मिट्टी स्वास्थ्य और उत्पादन में सुधार" },
      { en: "Free soil testing every 3 years", hi: "हर 3 साल में मुफ्त मिट्टी परीक्षण" }
    ],
    notCovered: "Testing of heavy metals or pesticides (advanced tests). Commercial soil testing. Immediate results (wait 15-30 days). Non-agricultural land.",
    notCoveredHindi: "भारी धातुओं या कीटनाशकों का परीक्षण (उन्नत परीक्षण)। व्यावसायिक मिट्टी परीक्षण। तत्काल परिणाम (15-30 दिन प्रतीक्षा)। गैर-कृषि भूमि।",
    cost: "FREE — No charges for soil testing",
    costHindi: "मुफ्त — मिट्टी परीक्षण के लिए कोई शुल्क नहीं",
    validity: "Card valid for 3 years",
    validityHindi: "कार्ड 3 साल के लिए वैध",
    processingTime: "15-30 days for soil test report",
    processingTimeHindi: "मिट्टी परीक्षण रिपोर्ट के लिए 15-30 दिन",
    whereToApply: [
      { en: "Visit local Krishi Vigyan Kendra", hi: "स्थानीय कृषि विज्ञान केंद्र में जाएं" },
      { en: "Contact Block Agriculture Officer", hi: "ब्लॉक कृषि अधिकारी से संपर्क करें" },
      { en: "Online: soilhealth.dac.gov.in", hi: "ऑनलाइन: soilhealth.dac.gov.in" },
      { en: "Call helpline: 1800-180-1551", hi: "हेल्पलाइन: 1800-180-1551" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Land Records (Khatauni/Khasra)", hi: "भूमि रिकॉर्ड (खतौनी/खसरा)" },
      { en: "Soil Sample (collected as per guidelines)", hi: "मिट्टी का नमूना (दिशानिर्देशों के अनुसार एकत्रित)" }
    ],
    faqs: [
      { q: { en: "Is soil testing free?", hi: "क्या मिट्टी परीक्षण मुफ्त है?" }, a: { en: "Yes, completely free for farmers.", hi: "हां, किसानों के लिए पूरी तरह मुफ्त।" } },
      { q: { en: "How often do I get a new card?", hi: "मुझे नया कार्ड कितनी बार मिलता है?" }, a: { en: "Every 3 years.", hi: "हर 3 साल में।" } }
    ],
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://soilhealth.dac.gov.in",
    helpline: "1800-180-1551",
    launchedYear: 2015
  },
  
  // ========== SCHEME 48: e-NAM (National Agriculture Market) ==========
  {
    name: "e-NAM - National Agriculture Market",
    nameHindi: "ई-नाम - राष्ट्रीय कृषि बाजार",
    shortDescription: "Online trading platform for agricultural commodities across India.",
    shortDescriptionHindi: "पूरे भारत में कृषि जिंसों के लिए ऑनलाइन व्यापार मंच।",
    fullDescription: "National Agriculture Market (e-NAM) was launched in 2016 as a pan-India electronic trading portal that networks existing APMC mandis to create a unified national market for agricultural commodities. Farmers can sell their produce online to buyers across India, get better prices, and avoid middlemen. The platform provides transparent price discovery, online payment, and quality assaying facilities. Over 1,000 mandis in 18 states and 3 UTs are integrated with e-NAM. Small Farmers' Agribusiness Consortium (SFAC) manages the platform. e-NAM has benefited over 1.7 crore farmers and 2.4 lakh traders.",
    fullDescriptionHindi: "राष्ट्रीय कृषि बाजार (ई-नाम) 2016 में एक अखिल भारतीय इलेक्ट्रॉनिक ट्रेडिंग पोर्टल के रूप में शुरू किया गया था जो कृषि जिंसों के लिए एकीकृत राष्ट्रीय बाजार बनाने के लिए मौजूदा APMC मंडियों को नेटवर्क करता है। किसान अपनी उपज ऑनलाइन पूरे भारत के खरीदारों को बेच सकते हैं, बेहतर कीमतें प्राप्त कर सकते हैं, और बिचौलियों से बच सकते हैं।",
    whoCanApply: "All farmers with valid Aadhaar, bank account, and mobile number. Must be registered with local APMC mandi. Traders, FPOs, and cooperatives can also register as buyers. No age limit.",
    whoCanApplyHindi: "वैध आधार, बैंक खाता और मोबाइल नंबर वाले सभी किसान। स्थानीय APMC मंडी में पंजीकृत होना चाहिए। व्यापारी, FPO और सहकारी समितियां भी खरीदार के रूप में पंजीकरण कर सकते हैं। कोई आयु सीमा नहीं।",
    benefitsDetailed: [
      { en: "Sell produce online to buyers across India", hi: "पूरे भारत के खरीदारों को ऑनलाइन उपज बेचें" },
      { en: "Better prices due to wider market", hi: "व्यापक बाजार के कारण बेहतर कीमतें" },
      { en: "No middlemen — direct farmer-to-buyer", hi: "कोई बिचौलिया नहीं — सीधा किसान-से-खरीदार" },
      { en: "Transparent price discovery", hi: "पारदर्शी मूल्य खोज" },
      { en: "Online payment to bank account", hi: "बैंक खाते में ऑनलाइन भुगतान" },
      { en: "Quality assaying facilities", hi: "गुणवत्ता परीक्षण सुविधाएं" },
      { en: "Access to 1000+ mandis in 18 states", hi: "18 राज्यों में 1000+ मंडियों तक पहुंच" }
    ],
    notCovered: "Farmers without APMC registration. Non-agricultural commodities. Trading without valid license. Inter-state movement without permits.",
    notCoveredHindi: "APMC पंजीकरण के बिना किसान। गैर-कृषि जिंस। वैध लाइसेंस के बिना व्यापार। परमिट के बिना अंतर-राज्यीय आवाजाही।",
    cost: "FREE — No registration fee for farmers",
    costHindi: "मुफ्त — किसानों के लिए कोई पंजीकरण शुल्क नहीं",
    validity: "Lifetime registration",
    validityHindi: "आजीवन पंजीकरण",
    processingTime: "Same day registration",
    processingTimeHindi: "उसी दिन पंजीकरण",
    whereToApply: [
      { en: "Online: enam.gov.in", hi: "ऑनलाइन: enam.gov.in" },
      { en: "Visit nearest APMC mandi", hi: "नजदीकी APMC मंडी में जाएं" },
      { en: "Contact local Krishi Vigyan Kendra", hi: "स्थानीय कृषि विज्ञान केंद्र से संपर्क करें" },
      { en: "Call helpline: 1800-270-0224", hi: "हेल्पलाइन: 1800-270-0224" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Mobile Number", hi: "मोबाइल नंबर" },
      { en: "APMC Registration (if available)", hi: "APMC पंजीकरण (यदि उपलब्ध हो)" }
    ],
    faqs: [
      { q: { en: "Is e-NAM free?", hi: "क्या ई-नाम मुफ्त है?" }, a: { en: "Yes, free for farmers.", hi: "हां, किसानों के लिए मुफ्त।" } },
      { q: { en: "Can I sell anywhere in India?", hi: "क्या मैं भारत में कहीं भी बेच सकता हूं?" }, a: { en: "Yes, to registered buyers in integrated mandis.", hi: "हां, एकीकृत मंडियों में पंजीकृत खरीदारों को।" } }
    ],
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://www.enam.gov.in",
    helpline: "1800-270-0224",
    launchedYear: 2016
  },
  // ========== SCHEME 49: PM Kisan Credit Card (Extended) ==========
  {
    name: "PM Kisan Maan-Dhan (KCC Extended)",
    nameHindi: "पीएम किसान मान-धन (केसीसी विस्तारित)",
    shortDescription: "Extended Kisan Credit Card with higher credit limit and dairy/fisheries support.",
    shortDescriptionHindi: "उच्च ऋण सीमा और डेयरी/मत्स्य पालन सहायता के साथ विस्तारित किसान क्रेडिट कार्ड।",
    fullDescription: "The Kisan Credit Card (KCC) scheme has been extended to cover dairy farmers, fisheries, and animal husbandry under the extended KCC 2.0 framework. Farmers can now get credit up to ₹3 lakh for their allied agricultural activities. The scheme offers interest subvention of 2% plus prompt repayment incentive of 3%, making the effective interest rate just 4% per annum. Animal husbandry and fisheries farmers can avail KCC for the first time under this extended scheme. Credit is available for working capital needs, equipment purchase, and infrastructure development. Applications can be made at any bank branch or through the Common Service Centre (CSC).",
    fullDescriptionHindi: "किसान क्रेडिट कार्ड (KCC) योजना को विस्तारित KCC 2.0 ढांचे के तहत डेयरी किसानों, मत्स्य पालन और पशुपालन को कवर करने के लिए बढ़ाया गया है। किसान अब अपनी सहयोगी कृषि गतिविधियों के लिए ₹3 लाख तक का ऋण प्राप्त कर सकते हैं। योजना 2% ब्याज सब्सिडी और 3% त्वरित चुकौती प्रोत्साहन प्रदान करती है, जिससे प्रभावी ब्याज दर सिर्फ 4% प्रति वर्ष हो जाती है।",
    whoCanApply: "All farmers — including dairy farmers, fishers, and animal husbandry farmers. Owner cultivators, tenant farmers, sharecroppers, and oral lessees. Age 18-75 years. Must have valid KYC documents.",
    whoCanApplyHindi: "सभी किसान — डेयरी किसान, मछुआरे और पशुपालन किसान सहित। स्वामी किसान, किरायेदार किसान, बटाईदार और मौखिक पट्टेदार। आयु 18-75 वर्ष। वैध KYC दस्तावेज होने चाहिए।",
    benefitsDetailed: [
      { en: "Credit up to ₹3 lakh at effective 4% interest", hi: "प्रभावी 4% ब्याज पर ₹3 लाख तक ऋण" },
      { en: "Extended to dairy, fisheries, animal husbandry", hi: "डेयरी, मत्स्य पालन, पशुपालन तक विस्तारित" },
      { en: "2% interest subvention + 3% prompt pay incentive", hi: "2% ब्याज सब्सिडी + 3% त्वरित भुगतान प्रोत्साहन" },
      { en: "No collateral for loans up to ₹1.6 lakh", hi: "₹1.6 लाख तक के ऋण पर कोई गारंटी नहीं" },
      { en: "Flexible repayment based on harvest cycle", hi: "फसल चक्र के आधार पर लचीली चुकौती" },
      { en: "ATM-enabled RuPay card", hi: "ATM-सक्षम RuPay कार्ड" },
      { en: "Available at all bank branches and CSCs", hi: "सभी बैंक शाखाओं और CSC पर उपलब्ध" }
    ],
    notCovered: "Farmers above 75 years. Defaulters of previous loans. Non-agricultural activities. Corporate farming entities.",
    notCoveredHindi: "75 साल से अधिक उम्र के किसान। पिछले ऋण के डिफ़ॉल्टर। गैर-कृषि गतिविधियां। कॉर्पोरेट खेती संस्थाएं।",
    cost: "Effective interest 4% per annum (with subsidies)",
    costHindi: "प्रभावी ब्याज 4% प्रति वर्ष (सब्सिडी के साथ)",
    validity: "5 years (renewable)",
    validityHindi: "5 साल (नवीनीकरण योग्य)",
    processingTime: "7-15 days after application",
    processingTimeHindi: "आवेदन के 7-15 दिन बाद",
    whereToApply: [
      { en: "Visit any bank branch (SBI, PNB, etc.)", hi: "किसी भी बैंक शाखा में जाएं (SBI, PNB, आदि)" },
      { en: "Visit nearest Common Service Centre (CSC)", hi: "नजदीकी CSC केंद्र पर जाएं" },
      { en: "Contact local Cooperative Bank", hi: "स्थानीय सहकारी बैंक से संपर्क करें" },
      { en: "Call helpline: 1800-180-1551", hi: "हेल्पलाइन: 1800-180-1551" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "PAN Card", hi: "पैन कार्ड" },
      { en: "Land Records (for farmers)", hi: "भूमि रिकॉर्ड (किसानों के लिए)" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" },
      { en: "Livestock/Fisheries Details (if applicable)", hi: "पशुधन/मत्स्य विवरण (यदि लागू हो)" }
    ],
    faqs: [
      { q: { en: "Can dairy farmers get KCC?", hi: "क्या डेयरी किसान KCC प्राप्त कर सकते हैं?" }, a: { en: "Yes, KCC is now extended to dairy, fisheries, and animal husbandry.", hi: "हां, KCC अब डेयरी, मत्स्य पालन और पशुपालन तक विस्तारित है।" } },
      { q: { en: "What is the effective interest rate?", hi: "प्रभावी ब्याज दर क्या है?" }, a: { en: "Just 4% per annum with subsidies.", hi: "सब्सिडी के साथ सिर्फ 4% प्रति वर्ष।" } }
    ],
    category: "agriculture",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    eligibility: { minAge: 18, maxAge: 75, isFarmer: true, gender: "any", category: [], states: [] },
    officialLink: "https://www.nabard.org",
    helpline: "1800-180-1551",
    launchedYear: 1998
  },
  
  // ========== SCHEME 50: PM Garib Kalyan Rojgar Abhiyaan ==========
  {
    name: "PM Garib Kalyan Rojgar Abhiyaan",
    nameHindi: "पीएम गरीब कल्याण रोजगार अभियान",
    shortDescription: "Massive employment generation for migrant workers in rural areas.",
    shortDescriptionHindi: "ग्रामीण क्षेत्रों में प्रवासी श्रमिकों के लिए बड़े पैमाने पर रोजगार सृजन।",
    fullDescription: "Pradhan Mantri Garib Kalyan Rojgar Abhiyaan (PMGKRA) was launched in June 2020 to boost employment and livelihood opportunities for migrant workers returning to villages during the COVID-19 pandemic. The scheme was implemented in 116 districts across 6 states (Bihar, UP, MP, Rajasthan, Jharkhand, Odisha) with a focus on 25 different work categories. It provided employment through 25 schemes of 12 ministries covering rural housing, infrastructure, water conservation, railways, roads, and more. Over 50 crore person-days of employment were generated in just 125 days. The scheme helped returning migrants get work in their home villages and reduced reverse migration.",
    fullDescriptionHindi: "प्रधानमंत्री गरीब कल्याण रोजगार अभियान (PMGKRA) जून 2020 में COVID-19 महामारी के दौरान गांवों में लौटने वाले प्रवासी श्रमिकों के लिए रोजगार और आजीविका के अवसर बढ़ाने के लिए शुरू किया गया था। योजना 6 राज्यों (बिहार, यूपी, एमपी, राजस्थान, झारखंड, ओडिशा) के 116 जिलों में 25 विभिन्न कार्य श्रेणियों पर ध्यान केंद्रित करते हुए लागू की गई थी।",
    whoCanApply: "Migrant workers who returned to their villages. Rural residents of 116 identified districts. Priority to those who lost jobs in cities due to COVID. All rural workers seeking employment under MGNREGA. Age 18-60 years.",
    whoCanApplyHindi: "अपने गांवों में लौटने वाले प्रवासी श्रमिक। 116 पहचाने गए जिलों के ग्रामीण निवासी। COVID के कारण शहरों में नौकरी खोने वालों को प्राथमिकता। मनरेगा के तहत रोजगार चाहने वाले सभी ग्रामीण श्रमिक। आयु 18-60 वर्ष।",
    benefitsDetailed: [
      { en: "Guaranteed employment in home village", hi: "गृह गांव में गारंटीशुदा रोजगार" },
      { en: "Daily wage of ₹220-350 per day", hi: "₹220-350 प्रति दिन की मजदूरी" },
      { en: "Work in 25 different categories", hi: "25 विभिन्न श्रेणियों में काम" },
      { en: "Immediate wage payment to bank account", hi: "बैंक खाते में तत्काल मजदूरी भुगतान" },
      { en: "No migration to cities needed", hi: "शहरों में प्रवास की जरूरत नहीं" },
      { en: "Work within 5 km of residence", hi: "निवास के 5 किमी के भीतर काम" },
      { en: "Covered under 25 schemes of 12 ministries", hi: "12 मंत्रालयों की 25 योजनाओं के तहत कवर" }
    ],
    notCovered: "Workers in urban areas. Non-migrant workers (partially). Workers above 60 years. Skilled labor at higher wages. The scheme officially concluded in 2020 but components continue under other schemes.",
    notCoveredHindi: "शहरी क्षेत्रों के श्रमिक। गैर-प्रवासी श्रमिक (आंशिक रूप से)। 60 साल से अधिक उम्र के श्रमिक। उच्च मजदूरी पर कुशल श्रम। योजना आधिकारिक तौर पर 2020 में संपन्न हुई लेकिन घटक अन्य योजनाओं के तहत जारी हैं।",
    cost: "FREE — Government funded",
    costHindi: "मुफ्त — सरकार द्वारा वित्त पोषित",
    validity: "Campaign-based (125 days duration)",
    validityHindi: "अभियान-आधारित (125 दिन की अवधि)",
    processingTime: "Immediate — job card based",
    processingTimeHindi: "तत्काल — जॉब कार्ड आधारित",
    whereToApply: [
      { en: "Visit local Gram Panchayat", hi: "स्थानीय ग्राम पंचायत में जाएं" },
      { en: "Contact Block Development Officer", hi: "ब्लॉक विकास अधिकारी से संपर्क करें" },
      { en: "Check MGNREGA job card status", hi: "मनरेगा जॉब कार्ड स्थिति जांचें" },
      { en: "Call helpline: 1800-345-0225", hi: "हेल्पलाइन: 1800-345-0225" }
    ],
    documentsDetailed: [
      { en: "Aadhaar Card", hi: "आधार कार्ड" },
      { en: "MGNREGA Job Card", hi: "मनरेगा जॉब कार्ड" },
      { en: "Bank Account Passbook", hi: "बैंक खाता पासबुक" },
      { en: "Passport Size Photo", hi: "पासपोर्ट साइज फोटो" }
    ],
    faqs: [
      { q: { en: "Is the scheme still active?", hi: "क्या योजना अभी भी सक्रिय है?" }, a: { en: "The campaign concluded but components continue under MGNREGA.", hi: "अभियान संपन्न हुआ लेकिन घटक मनरेगा के तहत जारी हैं।" } },
      { q: { en: "Can returning migrants get work?", hi: "क्या लौटने वाले प्रवासी काम पा सकते हैं?" }, a: { en: "Yes, under MGNREGA and connected schemes.", hi: "हां, मनरेगा और जुड़ी योजनाओं के तहत।" } }
    ],
    category: "employment",
    ministry: "Ministry of Rural Development",
    eligibility: { minAge: 18, maxAge: 60, isBPL: true, gender: "any", category: [], states: [] },
    officialLink: "https://nrega.nic.in",
    helpline: "1800-345-0225",
    launchedYear: 2020
  }
];
module.exports = schemes;