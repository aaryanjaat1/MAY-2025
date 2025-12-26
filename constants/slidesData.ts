import { SlideData } from '../types';

export const SLIDES: SlideData[] = [
  // --- SLIDE 1: MAIN TITLE ---
  {
    id: 'main-title',
    type: 'title',
    title: 'MAY 2025 CURRENT AFFAIRS',
    subtitle: 'महत्वपूर्ण घटनाक्रम',
    content: ['Monthly Roundup', 'For Competitive Examinations'],
    contentScale: 1,
    contentYOffset: 0
  },

  // --- SLOT 1: Topic 1 ---
  {
    id: 't1-q',
    type: 'quiz',
    title: 'QUANTUM TECHNOLOGY RESEARCH CENTRE (QTRC)',
    subtitle: 'क्वांटम टेक्नोलॉजी रिसर्च सेंटर',
    content: [
      'डीआरडीओ (DRDO) द्वारा हाल ही में उद्घाटन किए गए क्वांटम टेक्नोलॉजी रिसर्च सेंटर (QTRC) का मुख्य उद्देश्य क्या है?',
      'What is the primary objective of the Quantum Technology Research Centre (QTRC) recently inaugurated by DRDO?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'कृषि उत्पादकता बढ़ाना (Increasing agricultural productivity)' },
      { id: 'B', label: 'B', text: 'सड़क नेटवर्क का विस्तार (Expanding road network)' },
      { id: 'C', label: 'C', text: 'रक्षा अनुप्रयोगों के लिए स्वदेशी क्वांटम क्षमताओं को मजबूत करना (Strengthening indigenous quantum capabilities for defence applications)' },
      { id: 'D', label: 'D', text: 'अंतरिक्ष पर्यटन को बढ़ावा देना (Promoting space tourism)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't1-f',
    type: 'fact',
    title: 'QUANTUM TECHNOLOGY RESEARCH CENTRE (QTRC)',
    subtitle: 'क्वांटम टेक्नोलॉजी रिसर्च सेंटर',
    content: [
      'रक्षा अनुसंधान और विकास संगठन (DRDO) ने रक्षा और रणनीतिक अनुप्रयोगों के लिए स्वदेशी क्वांटम क्षमताओं को मजबूत करने हेतु QTRC का उद्घाटन किया। (DRDO inaugurated QTRC to strengthen indigenous quantum capabilities for strategic and defence applications.)',
      'भारत सरकार ने 2023 में 2030-31 तक के लिए \'नेशनल क्वांटम मिशन\' (NQM) को मंजूरी दी थी। (Quantum tech is based on superposition and entanglement. Govt approved National Quantum Mission (NQM) in 2023 for the period up to 2030-31.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000'
  },

  // --- SLOT 2: Topic 2 ---
  {
    id: 't2-q',
    type: 'quiz',
    title: 'RODTEP SCHEME',
    subtitle: 'RoDTEP योजना',
    content: [
      'निर्यातित उत्पादों पर शुल्क और करों की छूट (RoDTEP) योजना किस वर्ष शुरू की गई थी?',
      'In which year was the Remission of Duties and Taxes on Exported Products (RoDTEP) scheme launched?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'जनवरी 2021 (January 2021)' },
      { id: 'B', label: 'B', text: 'अगस्त 2019 (August 2019)' },
      { id: 'C', label: 'C', text: 'मार्च 2023 (March 2023)' },
      { id: 'D', label: 'D', text: 'दिसंबर 2014 (December 2014)' }
    ],
    correctOptionId: 'A'
  },
  {
    id: 't2-f',
    type: 'fact',
    title: 'RODTEP SCHEME',
    subtitle: 'RoDTEP योजना',
    content: [
      'भारत सरकार ने SEZ और EOU इकाइयों द्वारा किए गए निर्यात के लिए RoDTEP लाभों को फिर से बहाल कर दिया है। (Govt announced restoration of RoDTEP benefits for SEZ and EOU exports.)',
      'यह योजना निर्यातकों को उन केंद्रीय, राज्य और स्थानीय करों की प्रतिपूर्ति करती है जो पहले वापस नहीं किए जाते थे। (Reimburses exporters for previously non-refundable central, state, and local taxes.)',
      'यह योजना विश्व व्यापार संगठन (WTO) के नियमों के अनुकूल है।'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000'
  },

  // --- SLOT 3: Topic 3 ---
  {
    id: 't3-q',
    type: 'quiz',
    title: "INDIA'S FIRST GENE-EDITED SHEEP",
    subtitle: 'भारत की पहली जीन-संपादित भेड़',
    content: [
      'भारत की पहली जीन-संपादित (Gene-edited) भेड़ को विकसित करने के लिए किस तकनीक का उपयोग किया गया है?',
      'Which technology has been used to develop India\'s first gene-edited sheep?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'नैनो-इंजीनियरिंग (Nano-engineering)' },
      { id: 'B', label: 'B', text: 'क्लोनिंग (Cloning)' },
      { id: 'C', label: 'C', text: 'स्टेम सेल थेरेपी (Stem cell therapy)' },
      { id: 'D', label: 'D', text: 'CRISPR-Cas9' }
    ],
    correctOptionId: 'D'
  },
  {
    id: 't3-f',
    type: 'fact',
    title: "INDIA'S FIRST GENE-EDITED SHEEP",
    subtitle: 'भारत की पहली जीन-संपादित भेड़',
    content: [
      'कश्मीर स्थित कृषि विश्वविद्यालय के शोधकर्ताओं ने भारत की पहली जीन-संपादित भेड़ का उत्पादन कर एक ऐतिहासिक उपलब्धि हासिल की है। (Researchers in Kashmir produced Inda’s first gene-edited sheep.)',
      'CRISPR तकनीक 2009 में खोजी गई थी, जो प्राकृतिक जीवाणु प्रतिरक्षा प्रणाली पर आधारित है। (CRISPR tool invented in 2009 is based on bacterial immune system. It differs from transgenic organisms as it contains no foreign DNA.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1511117833452-1811fa1295b9?q=80&w=1000'
  },

  // --- SLOT 4: Topic 4 ---
  {
    id: 't4-q',
    type: 'quiz',
    title: 'BREAKTHROUGH PRIZE 2025',
    subtitle: 'ब्रेकथ्रू पुरस्कार 2025',
    content: [
      '"विज्ञान के ऑस्कर" के रूप में जाने जाने वाले 2025 के ब्रेकथ्रू पुरस्कार से किसे सम्मानित किया गया है?',
      'Who has been awarded the 2025 Breakthrough Prize, known as the "Oscars of Science"?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'इसरो के वैज्ञानिक (ISRO Scientists)' },
      { id: 'B', label: 'B', text: 'CERN के लार्ज हैड्रॉन कोलाइडर (LHC) के चार प्रयोग (Four experiments at CERN’s LHC)' },
      { id: 'C', label: 'C', text: 'नासा के अंतरिक्ष यात्री (NASA Astronauts)' },
      { id: 'D', label: 'D', text: 'नोबेल शांति पुरस्कार विजेता (Nobel Peace Prize laureates)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't4-f',
    type: 'fact',
    title: 'BREAKTHROUGH PRIZE 2025',
    subtitle: 'ब्रेकथ्रू पुरस्कार 2025',
    content: [
      '2025 का ब्रेकथ्रू पुरस्कार CERN के LHC में \'हिग्स बोसोन\' (Higgs boson) का अध्ययन करने वाले प्रयोगों (ATLAS, CMS, ALICE, LHCb) को दिया गया। (2025 Breakthrough Prize awarded to four CERN LHC experiments for studying Higgs boson.)',
      'यह पुरस्कार जीवन विज्ञान, मौलिक भौतिकी और गणित में अग्रणी उपलब्धियों के लिए दिया जाता है। (Honours achievements in Life Sciences, Fundamental Physics, and Mathematics.)',
      'CERN (यूरोपीय परमाणु अनुसंधान संगठन) 1954 में जिनेवा (स्विट्जरलैंड-फ्रांस सीमा) में स्थापित किया गया था। LHC दुनिया का सबसे बड़ा कण त्वरक (particle accelerator) है। (CERN established in 1954 in Geneva. LHC is the world\'s largest particle accelerator.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000'
  },

  // --- SLOT 5: Topic 5 ---
  {
    id: 't5-q',
    type: 'quiz',
    title: 'INDEX OF INDUSTRIAL PRODUCTION (IIP)',
    subtitle: 'औद्योगिक उत्पादन सूचकांक',
    content: [
      'भारत के औद्योगिक उत्पादन सूचकांक (IIP) में \'आठ प्रमुख उद्योगों\' (Eight Core Industries) का कुल भार कितना है?',
      'What is the total weight of the \'Eight Core Industries\' in India\'s Index of Industrial Production (IIP)?'
    ],
    options: [
      { id: 'A', label: 'A', text: '25.50%' },
      { id: 'B', label: 'B', text: '40.27%' },
      { id: 'C', label: 'C', text: '50.00%' },
      { id: 'D', label: 'D', text: '60.15%' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't5-f',
    type: 'fact',
    title: 'INDEX OF INDUSTRIAL PRODUCTION (IIP)',
    subtitle: 'औद्योगिक उत्पादन सूचकांक',
    content: [
      'खनन उत्पादन और बिजली उत्पादन में गिरावट के कारण भारत की औद्योगिक उत्पादन वृद्धि अप्रैल में आठ महीने के निचले स्तर (2.7%) पर आ गई। (India’s IIP growth dropped to 2.7% in April due to decline in mining and electricity output.)',
      'IIP औद्योगिक उत्पादन के भौतिक डेटा का उपयोग करके उत्पादन की मात्रा को मापता है। (IIP measures industrial output primarily using physical production data.)',
      'केंद्रीय सांख्यिकी संगठन (CSO) 1950 से IIP संकलित कर रहा है। इसमें निर्माण, गैस और जलापूर्ति शामिल नहीं हैं। (CSO compiling IIP since 1950. Excludes construction, gas, and water supply.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000'
  },

  // --- SLOT 6: Topic 6 ---
  {
    id: 't6-q',
    type: 'quiz',
    title: 'SEVEN SUMMITS CHALLENGE',
    subtitle: 'सेवन समिट्स चुनौती',
    content: [
      'सेवन समिट्स (7 Summits) चुनौती पूरी करने वाला सबसे कम उम्र का भारतीय कौन बना है?',
      'Who has become the youngest Indian to complete the legendary 7 Summits challenge?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'संतोष यादव (Santosh Yadav)' },
      { id: 'B', label: 'B', text: 'विश्वनाथ कार्तिकेय पडकंती (Vishwanath Karthikey Padakanti)' },
      { id: 'C', label: 'C', text: 'बछेंद्री पाल (Bachendri Pal)' },
      { id: 'D', label: 'D', text: 'मालवत पूर्णा (Malavath Purna)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't6-f',
    type: 'fact',
    title: 'SEVEN SUMMITS CHALLENGE',
    subtitle: 'सेवन समिट्स चुनौती',
    content: [
      'हैदराबाद के किशोर विश्वनाथ कार्तिकेय पडकंती ने दुनिया की 7 समिट्स चुनौती पूरी की। (Hyderabad teen Vishwanath Padakanti completed the 7 Summits challenge.)',
      'वह इस उपलब्धि को हासिल करने वाले सबसे कम उम्र के भारतीय और दुनिया के दूसरे सबसे कम उम्र के व्यक्ति हैं। (Youngest Indian and 2nd youngest in the world to achieve this.)',
      'सेवन समिट्स में सात महाद्वीपों की सात सबसे ऊंची चोटियां शामिल हैं: एवरेस्ट (एशिया), किलिमंजारो (अफ्रीका), एल्ब्रस (यूरोप), एकांकागुआ (द. अमेरिका), कोसिअस्को (ऑस्ट्रेलिया), विंसन (अंटार्कटिका) और डेनाली (उ. अमेरिका)। (Includes highest peaks of all 7 continents.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000'
  },

  // --- SLOT 7: Topic 7 ---
  {
    id: 't7-q',
    type: 'quiz',
    title: 'SWACHH SURVEKSHAN GRAMEEN (SSG) 2025',
    subtitle: 'स्वच्छ सर्वेक्षण ग्रामीण 2025',
    content: [
      'स्वच्छ सर्वेक्षण ग्रामीण (SSG) 2025 किस मंत्रालय की एक राष्ट्रव्यापी पहल है?',
      'Swachh Survekshan Grameen (SSG) 2025 is a nationwide initiative of which Ministry?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'स्वास्थ्य मंत्रालय (Ministry of Health)' },
      { id: 'B', label: 'B', text: 'ग्रामीण विकास मंत्रालय (Ministry of Rural Development)' },
      { id: 'C', label: 'C', text: 'जल शक्ति मंत्रालय (Ministry of Jal Shakti)' },
      { id: 'D', label: 'D', text: 'गृह मंत्रालय (Ministry of Home Affairs)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't7-f',
    type: 'fact',
    title: 'SWACHH SURVEKSHAN GRAMEEN (SSG) 2025',
    subtitle: 'स्वच्छ सर्वेक्षण ग्रामीण 2025',
    content: [
      'केंद्रीय जल शक्ति मंत्री श्री सी आर पाटिल ने स्वच्छ सर्वेक्षण ग्रामीण (SSG) 2025 लॉन्च किया। (Jal Shakti Minister launched Swachh Survekshan Grameen 2025.)',
      'यह भारत का सबसे बड़ा स्वच्छता सर्वेक्षण है, जो ग्रामीण क्षेत्रों में ओडीएफ (ODF) प्लस मॉडल की उपलब्धियों का आकलन करेगा। (India’s largest sanitation survey assessing ODF Plus achievements in rural areas.)',
      'पहला स्वच्छ सर्वेक्षण 2016 में आयोजित किया गया था (मैसूर पहले स्थान पर था)। स्वच्छ भारत मिशन (ग्रामीण) का दूसरा चरण 1 अप्रैल 2020 को शुरू हुआ था। (First survey in 2016. SBM-G Phase-II started on April 1, 2020.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000'
  },

  // --- SLOT 8: Topic 8 ---
  {
    id: 't8-q',
    type: 'quiz',
    title: 'VIKSIT KRISHI SANKALP ABHIYAN',
    subtitle: 'विकसित कृषि संकल्प अभियान',
    content: [
      'विकसित कृषि संकल्प अभियान (VKSA-2025) का मुख्य लक्ष्य कितने किसानों को सशक्त बनाना है?',
      'What is the target number of farmers to be empowered under the Viksit Krishi Sankalp Abhiyan (VKSA-2025)?'
    ],
    options: [
      { id: 'A', label: 'A', text: '50 लाख (50 Lakh)' },
      { id: 'B', label: 'B', text: '1.5 करोड़ से अधिक (More than 1.5 Crore)' },
      { id: 'C', label: 'C', text: '10 करोड़ (10 Crore)' },
      { id: 'D', label: 'D', text: '5 करोड़ (5 Crore)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't8-f',
    type: 'fact',
    title: 'VIKSIT KRISHI SANKALP ABHIYAN',
    subtitle: 'विकसित कृषि संकल्प अभियान',
    content: [
      'केंद्रीय कृषि मंत्री ने भुवनेश्वर में विकसित कृषि संकल्प अभियान अभियान की शुरुआत की। (Union Agriculture Minister launched this campaign in Bhubaneswar.)',
      'यह अभियान वैज्ञानिकों और किसानों के बीच सीधा संवाद स्थापित करता है। (Bridges the gap between lab and land via direct scientist-farmer interaction.)',
      'इसमें सौर खेती, मधुमक्खी पालन (मीठी क्रांति) और \'श्री अन्न\' (मोटा अनाज) को अपनाने के लिए प्रोत्साहित किया जाता है। (Promotes solar farming, Sweet Revolution, and Shri Anna/millets.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000'
  },

  // --- SLOT 9: Topic 9 ---
  {
    id: 't9-q',
    type: 'quiz',
    title: 'EXERCISE NOMADIC ELEPHANT',
    subtitle: 'अभ्यास नोमैडिक एलीफेंट',
    content: [
      'अभ्यास \'नोमैडिक एलीफेंट\' (NOMADIC ELEPHANT) भारत और किस देश के बीच आयोजित होने वाला एक वार्षिक सैन्य अभ्यास है?',
      'Exercise \'NOMADIC ELEPHANT\' is an annual military exercise conducted between India and which country?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'मंगोलिया (Mongolia)' },
      { id: 'B', label: 'B', text: 'रूस (Russia)' },
      { id: 'C', label: 'C', text: 'फ्रांस (France)' },
      { id: 'D', label: 'D', text: 'नेपाल (Nepal)' }
    ],
    correctOptionId: 'A'
  },
  {
    id: 't9-f',
    type: 'fact',
    title: 'EXERCISE NOMADIC ELEPHANT',
    subtitle: 'अभ्यास नोमैडिक एलीफेंट',
    content: [
      'भारतीय सेना ने मंगोलिया के उलानबटोर में इस अभ्यास के 17वें संस्करण में भाग लिया। (Indian Army participated in the 17th edition in Ulaanbaatar, Mongolia.)',
      'यह 2006 से आयोजित होने वाला एक वार्षिक द्विपक्षीय अभ्यास है। पिछला संस्करण 2024 में मेघालय, भारत में आयोजित किया गया था। (Annual bilateral exercise since 2006. Previous edition held in Meghalaya, India in 2024.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=1000'
  },

  // --- SLOT 10: Topic 10 ---
  {
    id: 't10-q',
    type: 'quiz',
    title: 'ULLAS SCHEME (GOA LITERACY)',
    subtitle: 'उल्लास योजना (गोवा साक्षरता)',
    content: [
      'उल्लास (ULLAS) योजना के तहत 95% साक्षरता सीमा पार करने वाला गोवा भारत का कौन सा राज्य बन गया है?',
      'Which state of India has Goa become to surpass the 95% literacy threshold under the ULLAS scheme?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'पहला (First)' },
      { id: 'B', label: 'B', text: 'दूसरा (Second)' },
      { id: 'C', label: 'C', text: 'तीसरा (Third)' },
      { id: 'D', label: 'D', text: 'पांचवां (Fifth)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't10-f',
    type: 'fact',
    title: 'ULLAS SCHEME (GOA LITERACY)',
    subtitle: 'उल्लास योजना (गोवा साक्षरता)',
    content: [
      'उल्लास योजना के तहत गोवा आधिकारिक तौर पर पूर्ण साक्षर राज्य बन गया है। (Goa officially became a fully literate state under the ULLAS scheme.)',
      'गोवा ने मिजोरम के बाद 95% साक्षरता की सीमा को पार किया है। (Goa followed Mizoram in surpassing the 95% literacy mark.)',
      'उल्लास योजना (2022-2027) का लक्ष्य 15 वर्ष और उससे अधिक आयु के उन वयस्कों को साक्षर बनाना है जो स्कूल नहीं जा सके। (ULLAS scheme targets adults aged 15+ years who missed formal schooling.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?q=80&w=1000'
  },

  // --- SLOT 11: Topic 11 ---
  {
    id: 't11-q',
    type: 'quiz',
    title: 'NATIONAL FLORENCE NIGHTINGALE AWARD 2025',
    subtitle: 'नेशनल फ्लोरेंस नाइटिंगेल पुरस्कार 2025',
    content: [
      'नेशनल फ्लोरेंस नाइटिंगेल पुरस्कार किस मंत्रालय द्वारा नर्सों को उनकी सराहनीय सेवाओं के लिए दिया जाता है?',
      'The National Florence Nightingale Award is given by which Ministry to nurses for their meritorious services?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'गृह मंत्रालय (Ministry of Home Affairs)' },
      { id: 'B', label: 'B', text: 'शिक्षा मंत्रालय (Ministry of Education)' },
      { id: 'C', label: 'C', text: 'स्वास्थ्य और परिवार कल्याण मंत्रालय (Ministry of Health and Family Welfare)' },
      { id: 'D', label: 'D', text: 'सामाजिक न्याय मंत्रालय (Ministry of Social Justice)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't11-f',
    type: 'fact',
    title: 'NATIONAL FLORENCE NIGHTINGALE AWARD 2025',
    subtitle: 'नेशनल फ्लोरेंस नाइटिंगेल पुरस्कार 2025',
    content: [
      'राष्ट्रपति द्रौपदी मुर्मू ने राष्ट्रपति भवन में नर्सों को वर्ष 2025 के पुरस्कार प्रदान किए। (President presented the 2025 awards to nurses at Rashtrapati Bhavan.)',
      'यह पुरस्कार 1973 में आधुनिक नर्सिंग की संस्थापक फ्लोरेंस नाइटिंगेल की याद में स्थापित किया गया था। (Instituted in 1973 in memory of Florence Nightingale.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000'
  },

  // --- SLOT 12: Topic 12 ---
  {
    id: 't12-q',
    type: 'quiz',
    title: "OPERATION SPIDER'S WEB & FPV DRONES",
    subtitle: "'ऑपरेशन स्पाइडर्स वेब' और एफपीवी ड्रोन",
    content: [
      '\'ऑपरेशन स्पाइडर्स वेब\' (Operation Spider’s Web) के तहत किस देश ने रूस के पांच हवाई अड्डों पर एफपीवी (FPV) ड्रोन से हमला किया?',
      'Under \'Operation Spider’s Web\', which country launched FPV drone attacks on five airbases across Russia?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'चीन (China)' },
      { id: 'B', label: 'B', text: 'यूक्रेन (Ukraine)' },
      { id: 'C', label: 'C', text: 'इजराइल (Israel)' },
      { id: 'D', label: 'D', text: 'अमेरिका (USA)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't12-f',
    type: 'fact',
    title: "OPERATION SPIDER'S WEB & FPV DRONES",
    subtitle: "'ऑपरेशन स्पाइडर्स वेब' और एफपीवी ड्रोन",
    content: [
      'यूक्रेन ने \'ऑपरेशन स्पाइडर्स वेब\' के तहत रूस के पांच एयरबेस पर \'फर्स्ट-पर्सन व्यू\' (FPV) ड्रोन हमले किए। (Ukraine launched FPV drone attacks on five Russian airbases under \'Operation Spider’s Web\'.)',
      'एफपीवी ड्रोन छोटे होते हैं और इनमें सामने कैमरे लगे होते हैं जो ऑपरेटर को लाइव वीडियो भेजते हैं। इससे रिमोट लोकेशन से सटीक पैंतरेबाज़ी संभव होती है। (FPV drones are small with front-built cameras sending live video to operators, enabling precise remote maneuvering.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c841de9d21a?q=80&w=1000'
  },

  // --- SLOT 13: Topic 13 ---
  {
    id: 't13-q',
    type: 'quiz',
    title: 'NAKSHA INITIATIVE',
    subtitle: 'नक्शा (NAKSHA) पहल',
    content: [
      'ग्रामीण विकास मंत्रालय द्वारा शुरू की गई \'नक्शा\' (NAKSHA) परियोजना का मुख्य उद्देश्य क्या है?',
      'What is the primary objective of the \'NAKSHA\' project launched by the Ministry of Rural Development?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'वन क्षेत्र का नक्शा बनाना (Mapping forest areas)' },
      { id: 'B', label: 'B', text: 'शहरी बस्तियों का भू-स्थानिक भूमि सर्वेक्षण (Geospatial land survey of urban habitations)' },
      { id: 'C', label: 'C', text: 'नदियों को जोड़ना (Linking rivers)' },
      { id: 'D', label: 'D', text: 'मौसम का पूर्वानुमान (Weather forecasting)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't13-f',
    type: 'fact',
    title: 'NAKSHA INITIATIVE',
    subtitle: 'नक्शा (NAKSHA) पहल',
    content: [
      'ग्रामीण विकास मंत्रालय ने नक्शा (NAKSHA) कार्यक्रम का दूसरा चरण शुरू किया है। (The Ministry of Rural Development launched the second phase of the NAKSHA programme.)',
      'यह \'डिजिटल इंडिया लैंड रिकॉर्ड्स मॉडर्नाइजेशन प्रोग्राम\' (DILRMP) के तहत कार्यान्वित है.',
      'चरण I को 2024-25 के बजट में घोषित किया गया था, जिसका लक्ष्य 5 वर्षों के भीतर देश के पूरे शहरी क्षेत्र को कवर करना है।'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?q=80&w=1000'
  },

  // --- SLOT 14: Topic 14 ---
  {
    id: 't14-q',
    type: 'quiz',
    title: 'INTERNATIONAL ORGANISATION FOR MEDIATION (IOMED)',
    subtitle: 'अंतर्राष्ट्रीय मध्यस्थता संगठन',
    content: [
      'अंतर्राष्ट्रीय मध्यस्थता संगठन (IOMed), जिसे हाल ही में हांगकांग में लॉन्च किया गया है, किस देश के नेतृत्व वाली एक पहल है?',
      'The International Organisation for Mediation (IOMed), recently launched in Hong Kong, is an initiative led by which country?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'भारत (India)' },
      { id: 'B', label: 'B', text: 'अमेरिका (USA)' },
      { id: 'C', label: 'C', text: 'चीन (China)' },
      { id: 'D', label: 'D', text: 'रूस (Russia)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't14-f',
    type: 'fact',
    title: 'INTERNATIONAL ORGANISATION FOR MEDIATION (IOMED)',
    subtitle: 'अंतर्राष्ट्रीय मध्यस्थता संगठन',
    content: [
      'इसे 30 मई, 2025 को हांगकांग में औपचारिक रूप से लॉन्च किया गया। यह अंतरराष्ट्रीय संघर्षों को सुलझाने के लिए मुकदमों के बजाय मध्यस्थता पर आधारित एक वैकल्पिक मंच है। (Formally launched on May 30, 2025, in Hong Kong as an alternative dispute resolution forum via mediation.)',
      'इसके 33 संस्थापक सदस्य देश हैं, जिनमें से कई अफ्रीका और लैटिन अमेरिका के विकासशील राष्ट्र हैं जहाँ चीन की \'बेल्ट एंड रोड इनिशिएटिव\' (BRI) पहले से स्थापित है। (Has 33 founding members, mostly developing nations from Africa and Latin America linked to China’s BRI.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1000'
  },

  // --- SLOT 15: Topic 15 ---
  {
    id: 't15-q',
    type: 'quiz',
    title: 'ANDAMAN & NICOBAR COMMAND',
    subtitle: 'अंडमान और निकोबार कमान',
    content: [
      'भारत की पहली \'एकीकृत थिएटर कमान\' (Integrated Theatre Command) कौन सी है, जिसका मुख्यालय पोर्ट ब्लेयर में है?',
      'Which is India\'s first \'Integrated Theatre Command\', with its headquarters at Port Blair?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'पश्चिमी कमान (Western Command)' },
      { id: 'B', label: 'B', text: 'अंडमान और निकोबार कमान (Andaman & Nicobar Command)' },
      { id: 'C', label: 'C', text: 'दक्षिणी कमान (Southern Command)' },
      { id: 'D', label: 'D', text: 'पूर्वी कमान (Eastern Command)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't15-f',
    type: 'fact',
    title: 'ANDAMAN & NICOBAR COMMAND',
    subtitle: 'अंडमान और निकोबार कमान',
    content: [
      'लेफ्टिनेंट जनरल दिनेश सिंह राणा ने अंडमान और निकोबार कमान (ANC) के 18वें कमांडर-इन-चीफ (CINCAN) के रूप में कार्यभार संभाला। (Lt. Gen Dinesh Singh Rana assumed charge as the 18th CINCAN.)',
      'इसकी स्थापना 2001 में हुई थी और इसका मुख्यालय पोर्ट ब्लेयर में है। CINCAN का पद तीनों सेवाओं (थल, जल, वायु) के बीच रोटेशनल होता है। (Established in 2001 with HQ at Port Blair; CINCAN is a rotational post among the three services.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000'
  },

  // --- SLOT 16: Topic 16 ---
  {
    id: 't16-q',
    type: 'quiz',
    title: 'DHRUVA INITIATIVE',
    subtitle: 'ध्रुव (DHRUVA) पहल',
    content: [
      'डाक विभाग द्वारा शुरू की गई \'ध्रुव\' (DHRUVA) पहल के तहत प्रत्येक घर को प्रदान किए जाने वाले 10-अंकीय अल्फ़ान्यूमेरिक कोड को क्या कहा जाता है?',
      'Under the \'DHRUVA\' initiative by the Department of Posts, what is the 10-digit alphanumeric code assigned to every home called?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'QR कोड (QR Code)' },
      { id: 'B', label: 'B', text: 'DIGIPIN (डिजीपिन)' },
      { id: 'C', label: 'C', text: 'पिन कोड (PIN Code)' },
      { id: 'D', label: 'D', text: 'आधार कोड (Aadhaar Code)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't16-f',
    type: 'fact',
    title: 'DHRUVA INITIATIVE',
    subtitle: 'ध्रुव (DHRUVA) पहल',
    content: [
      'डाक विभाग ने \'ध्रुव\' (Digital Hub for Reference and Unique Virtual Address) नामक नीति दस्तावेज जारी किया है। (The Department of Posts released the DHRUVA policy document for a national Digital Address DPI.)',
      'इसका मुख्य लक्ष्य भारत के प्रत्येक घर के लिए एक विशिष्ट digital पता प्रदान करना है। इसके लिए DIGIPIN का उपयोग किया जाएगा। (Goal is to provide a unique digital address for every home using DIGIPIN.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1000'
  },

  // --- SLOT 17: Topic 17 ---
  {
    id: 't17-q',
    type: 'quiz',
    title: 'BHARATGEN',
    subtitle: 'भारतजेन (BharatGen)',
    content: [
      'भारत सरकार द्वारा वित्त पोषित पहला मल्टीमॉडल \'लार्ज लैंग्वेज मॉडल\' (LLM) कौन सा है जो 22 भारतीय भाषाओं को कवर करता है?',
      'Which is India’s first government-funded multimodal Large Language Model (LLM) covering 22 Indian languages?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'ChatGPT' },
      { id: 'B', label: 'B', text: 'BharatGen (भारतजेन)' },
      { id: 'C', label: 'C', text: 'Krutrim' },
      { id: 'D', label: 'D', text: 'Gemini' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't17-f',
    type: 'fact',
    title: 'BHARATGEN',
    subtitle: 'भारतजेन (BharatGen)',
    content: [
      'केंद्रीय विज्ञान और प्रौद्योगिकी मंत्रालय ने \'भारतजेन\' (BharatGen) लॉन्च किया है। (Union Ministry for Science & Technology launched ‘BharatGen’.)',
      'यह 22 भारतीय भाषाओं के लिए डिज़ाइन किया गया भारत का पहला सरकारी वित्त पोषित मल्टीमॉडल LLM है। इसे IIT बॉम्बे के TIH फाउंडेशन के नेतृत्व में विकसित किया गया है। (India’s first govt-funded multimodal LLM for 22 languages, led by IIT Bombay’s TIH Foundation.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000'
  },

  // --- SLOT 18: Topic 18 ---
  {
    id: 't18-q',
    type: 'quiz',
    title: 'CENSUS 2021 RESCHEDULED',
    subtitle: 'जनगणना 2021 का पुनर्गठन',
    content: [
      '1931 के बाद पहली बार किस जनगणना में विस्तृत जाति डेटा (Caste Data) एकत्र किया जाएगा?',
      'In which Census will granular caste data be captured for the first time since 1931?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'जनगणना 2011 (Census 2011)' },
      { id: 'B', label: 'B', text: 'जनगणना 1951 (Census 1951)' },
      { id: 'C', label: 'C', text: 'जनगणना 2021/2026 (Census 2021/2026)' },
      { id: 'D', label: 'D', text: 'जनगणना 2001 (Census 2001)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't18-f',
    type: 'fact',
    title: 'CENSUS 2021 RESCHEDULED',
    subtitle: 'जनगणना 2021 का पुनर्गठन',
    content: [
      'केंद्र सरकार ने घोषणा की है कि कोविड महामारी के कारण विलंबित 2021 की जनगणना अब दो चरणों में आयोजित की जाएगी (अक्टूबर 2026 और मार्च 2027)। (The Union Govt announced that the delayed Census 2021 will be held in two phases starting Oct 2026 and March 2027.)',
      'यह भारत की पहली डिजिटल जनगणना होगी। यह 1931 के बाद पहली जनगणना होगी जो अनुसूचित जाति (SC) और अनुसूचित जनजाति (ST) के अलावा विस्तृत जाति डेटा एकत्र करेगी। (This will be India’s first digital Census and the first since 1931 to capture granular caste data beyond SC/ST classifications.)',
      'भारत में पहली समकालिक जनगणना 1881 में डब्लू.सी. प्लोडेन के तहत हुई थी। स्वतंत्र भारत की पहली जनगणना 1951 में हुई। जनगणना गृह मंत्रालय के तहत भारत के रजिस्ट्रार जनरल और जनगणना आयुक्त के कार्यालय द्वारा आयोजित की जाती है। (First synchronous census was in 1881. Independent India\'s first was in 1951. Conducted by the Office of the Registrar General under the Ministry of Home Affairs.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda53666cf?q=80&w=1000'
  },

  // --- SLOT 19: Topic 19 ---
  {
    id: 't19-q',
    type: 'quiz',
    title: 'MOTION OF IMPEACHMENT',
    subtitle: 'महाभियोग प्रस्ताव',
    content: [
      'सरकार आगामी मानसून सत्र में किस उच्च न्यायालय के न्यायाधीश के खिलाफ महाभियोग प्रस्ताव पेश करने की योजना बना रही है?',
      'Against which High Court judge is the government planning to move an impeachment motion in the upcoming session?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'न्यायपूर्ति यशवंत वर्मा (Justice Yashwant Varma)' },
      { id: 'B', label: 'B', text: 'न्यायमूर्ति संजीव खन्ना (Justice Sanjiv Khanna)' },
      { id: 'C', label: 'C', text: 'न्यायमूर्ति डी.वाई. चंद्रचूड़ (Justice D.Y. Chandrachud)' },
      { id: 'D', label: 'D', text: 'न्यायमूर्ति बी.आर. गवई (Justice B.R. Gavai)' }
    ],
    correctOptionId: 'A'
  },
  {
    id: 't19-f',
    type: 'fact',
    title: 'MOTION OF IMPEACHMENT',
    subtitle: 'महाभियोग प्रस्ताव',
    content: [
      'महाभियोग की प्रक्रिया के माध्यम से उच्च न्यायपालिका के न्यायाधीशों को उनके पद से हटाया जाता है। (Impeachment is the process to remove judges of the higher judiciary from office.)',
      'न्यायाधीशों को हटाने की प्रक्रिया न्यायाधीश जांच अधिनियम, 1968 में विस्तृत है। (The procedure for removal of judges is elaborated in the Judges Inquiry Act, 1968.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000'
  },

  // --- SLOT 20: Topic 20 ---
  {
    id: 't20-q',
    type: 'quiz',
    title: 'MSC IRINA AT VIZHINJAM SEAPORT',
    subtitle: "विझिनजम पोर्ट पर 'MSC इरीना'",
    content: [
      'विश्व का सबसे बड़ा कंटेनर जहाज \'MSC इरीना\' (MSC Irina) पहली बार भारत के किस बंदरगाह पर पहुँचा?',
      '\'MSC Irina\', the world\'s biggest container vessel, reached which Indian port for the first time?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'मुंद्रा पोर्ट, गुजरात (Mundra Port, Gujarat)' },
      { id: 'B', label: 'B', text: 'जवाहरलाल नेहरू पोर्ट, महाराष्ट्र (JNPT, Maharashtra)' },
      { id: 'C', label: 'C', text: 'चेन्नई पोर्ट, तमिलनाडु (Chennai Port, Tamil Nadu)' },
      { id: 'D', label: 'D', text: 'विझिनजम पोर्ट, केरल (Vizhinjam Port, Kerala)' }
    ],
    correctOptionId: 'D'
  },
  {
    id: 't20-f',
    type: 'fact',
    title: 'MSC IRINA AT VIZHINJAM SEAPORT',
    subtitle: "विझिनजम पोर्ट पर 'MSC इरीना'",
    content: [
      'दुनिया का सबसे बड़ा कंटेनर जहाज \'MSC इरीना\' पहली बार विझिनजम अंतरराष्ट्रीय बंदरगाह पहुँचा। (World\'s biggest container vessel MSC Irina reached Vizhinjam International Seaport for the first time.)',
      'विझिनजम पोर्ट केरल सरकार द्वारा पीपीपी (PPP) मॉडल के तहत विकसित किया गया है। यह भारत का पहला डीपवाटर ट्रांसशिपमेंट पोर्ट है। (Developed by Kerala govt under PPP; India’s first transshipment port for ultra-large container ships.)',
      'इसकी प्राकृतिक गहराई 24 मीटर है, जो इसे बिना ड्रेजिंग के दुनिया के सबसे बड़े जहाजों को खड़ा करने की अनुमति देती है। यह श्रीलंका के कोलंबो पोर्ट पर भारत की निर्भरता को कम करेगा। (Its natural 24m depth allows berthing of largest ships without dredging; aims to reduce dependence on Colombo port.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1000'
  },

  // --- SLOT 21: Topic 21 ---
  {
    id: 't21-q',
    type: 'quiz',
    title: 'WORLD ENVIRONMENT DAY 2025',
    subtitle: 'विश्व पर्यावरण दिवस 2025',
    content: [
      '\'विश्व पर्यावरण दिवस 2025\' की मेजबानी किस देश द्वारा की गई है?',
      'Which country hosted \'World Environment Day 2025\'?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'स्वीडन (Sweden)' },
      { id: 'B', label: 'B', text: 'दक्षिण कोरिया (Republic of Korea)' },
      { id: 'C', label: 'C', text: 'भारत (India)' },
      { id: 'D', label: 'D', text: 'ब्राजील (Brazil)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't21-f',
    type: 'fact',
    title: 'WORLD ENVIRONMENT DAY 2025',
    subtitle: 'विश्व पर्यावरण दिवस 2025',
    content: [
      'पर्यावरण संरक्षण के लिए वैश्विक जागरूकता बढ़ाने हेतु हर साल 5 जून को विश्व पर्यावरण दिवस मनाया जाता है। (World Environment Day is celebrated every June 5 to drive action for environmental protection.)',
      '2025 का मेजबान देश दक्षिण कोरिया है और इसका विषय (Theme) #BeatPlasticPollution है। (2025 Host: Republic of Korea; Theme: #BeatPlasticPollution.)',
      'पहला संयुक्त राष्ट्र पर्यावरण सम्मेलन 1972 में स्टॉकहोम में \'ओनली वन अर्थ\' थीम के साथ आयोजित किया गया था। UNEP ने 1973 में हर साल 5 जून को इस दिवस के रूप में नामित किया। (First conference 1972 in Stockholm; UNEP designated June 5 as Environment Day in 1973.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=1000'
  },

  // --- SLOT 22: Topic 22 ---
  {
    id: 't22-q',
    type: 'quiz',
    title: 'NEW RAMSAR SITES IN RAJASTHAN',
    subtitle: 'राजस्थान में नए रामसर स्थल',
    content: [
      'राजस्थान के कौन से दो नए वेटलैंड्स (आर्द्रभूमियों) को हाल ही में रामसर स्थलों के रूप में नामित किया गया है?',
      'Which two new wetlands from Rajasthan have been recently designated as Ramsar Sites?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'खिचन और मेनार (Khichan and Menar)' },
      { id: 'B', label: 'B', text: 'सांभर और केवलादेव (Sambhar and Keoladeo)' },
      { id: 'C', label: 'C', text: 'पुष्कर और राजसमंद (Pushkar and Rajsamand)' },
      { id: 'D', label: 'D', text: 'जयसमंद और नक्की (Jaisamand and Nakki)' }
    ],
    correctOptionId: 'A'
  },
  {
    id: 't22-f',
    type: 'fact',
    title: 'NEW RAMSAR SITES IN RAJASTHAN',
    subtitle: 'राजस्थान में नए रामसर स्थल',
    content: [
      'विश्व पर्यावरण दिवस 2025 पर राजस्थान के दो वेटलैंड्स—खिचन और मेनार—को नए रामसर स्थल घोषित किया गया। (Khichan and Menar from Rajasthan were designated as Ramsar Sites on Environment Day 2025.)',
      'इसके साथ भारत में कुल रामसर स्थलों की संख्या 91 हो गई है। उदयपुर का मेनार वेटलैंड ताजे पानी का परिसर है, जबकि जोधपुर का खिचन वेटलैंड प्रवासी \'डेमोइसेल क्रेन\' (कुरजां) के लिए प्रसिद्ध है। (Takes India’s total to 91. Menar is freshwater; Khichan is famous for demoiselle cranes.)',
      'रामसर कन्वेंशन आर्द्रभूमियों के संरक्षण के लिए 2 फरवरी, 1971 को ईरान के रामसर में हस्ताक्षरित एक समझौता है। भारत 1982 में इसका हस्ताक्षरकर्ता बना। (Ramsar Convention signed on Feb 2, 1971 in Iran. India became a signatory in 1982.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=1000'
  },

  // --- SLOT 23: Topic 23 ---
  {
    id: 't23-q',
    type: 'quiz',
    title: 'INTERNATIONAL INSTITUTE OF ADMINISTRATIVE SCIENCES (IIAS)',
    subtitle: 'अंतर्राष्ट्रीय प्रशासनिक विज्ञान संस्थान',
    content: [
      'भारत ने किस अवधि के लिए अंतर्राष्ट्रीय प्रशासनिक विज्ञान संस्थान (IIAS) की अध्यक्षता जीती है?',
      'For which term has India won the Presidency of the International Institute of Administrative Sciences (IIAS)?'
    ],
    options: [
      { id: 'A', label: 'A', text: '2024-2026' },
      { id: 'B', label: 'B', text: '2025-2028' },
      { id: 'C', label: 'C', text: '2026-2030' },
      { id: 'D', label: 'D', text: '2021-2025' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't23-f',
    type: 'fact',
    title: 'INTERNATIONAL INSTITUTE OF ADMINISTRATIVE SCIENCES (IIAS)',
    subtitle: 'अंतर्राष्ट्रीय प्रशासनिक विज्ञान संस्थान',
    content: [
      'भारत ने 2025-2028 कार्यकाल के लिए IIAS की अध्यक्षता हासिल की है। (India won IIAS Presidency for 2025–2028 term.)',
      'IIAS सार्वजनिक प्रशासन में वैज्ञानिक अनुसंधान पर सहयोग करने वाले देशों का एक वैश्विक संघ है। (IIAS is a global federation collaborating on scientific research in public administration.)',
      'भारत 1998 से IIAS का सदस्य है। यह संयुक्त राष्ट्र से औपचारिक रूप से संबद्ध नहीं है, लेकिन संयुक्त राष्ट्र लोक प्रशासन नेटवर्क (UNPAN) के साथ मिलकर काम करता है। (India member since 1998; works closely with UNPAN.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000'
  },

  // --- SLOT 24: Topic 24 ---
  {
    id: 't24-q',
    type: 'quiz',
    title: 'ECONOMIC AND SOCIAL COUNCIL (ECOSOC)',
    subtitle: 'आर्थिक और सामाजिक परिषद',
    content: [
      'भारत को संयुक्त राष्ट्र की आर्थिक और सामाजिक परिषद (ECOSOC) के लिए किस अवधि के लिए चुना गया है?',
      'For which period has India been elected to the Economic and Social Council (ECOSOC) of the United Nations?'
    ],
    options: [
      { id: 'A', label: 'A', text: '2024-26' },
      { id: 'B', label: 'B', text: '2025-27' },
      { id: 'C', label: 'C', text: '2026-28' },
      { id: 'D', label: 'D', text: '2023-25' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't24-f',
    type: 'fact',
    title: 'ECONOMIC AND SOCIAL COUNCIL (ECOSOC)',
    subtitle: 'आर्थिक और सामाजिक परिषद',
    content: [
      'भारत को 2026-28 की अवधि के लिए संयुक्त राष्ट्र की आर्थिक और सामाजिक परिषद (ECOSOC) के लिए चुना गया है। (India elected to ECOSOC for 2026-28 period.)',
      'ECOSOC में 54 सदस्य होते हैं, जो महासभा द्वारा तीन साल की अवधि के लिए चुने जाते हैं। (ECOSOC has 54 Members elected by the General Assembly for 3-year terms.)',
      'यह 1945 में संयुक्त राष्ट्र चार्टर द्वारा स्थापित संयुक्त राष्ट्र के छह प्रमुख अंगों में से एक है। (Established in 1945 as one of the six principal organs of the UN.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557426482-28855efc6210?q=80&w=1000'
  },

  // --- SLOT 25: Topic 25 ---
  {
    id: 't25-q',
    type: 'quiz',
    title: 'CHENAB AND ANJI RAIL BRIDGES',
    subtitle: 'चिनाब और अंजी रेल पुल',
    content: [
      'जम्मू-कश्मीर में चिनाब नदी पर बना \'चिनाब रेल ब्रिज\' नदी तल से कितनी ऊँचाई पर स्थित है?',
      'At what height above the riverbed is the \'Chenab Rail Bridge\' in Jammu and Kashmir situated?'
    ],
    options: [
      { id: 'A', label: 'A', text: '359 मीटर (359 m)' },
      { id: 'B', label: 'B', text: '473 मीटर (473 m)' },
      { id: 'C', label: 'C', text: '324 मीटर (324 m)' },
      { id: 'D', label: 'D', text: '1,315 मीटर (1,315 m)' }
    ],
    correctOptionId: 'A'
  },
  {
    id: 't25-f',
    type: 'fact',
    title: 'CHENAB AND ANJI RAIL BRIDGES',
    subtitle: 'चिनाब और अंजी रेल पुल',
    content: [
      'पीएम मोदी ने जम्मू-कश्मीर में चिनाब और अंजी रेल पुलों का उद्घाटन किया। (PM Modi inaugurated the Chenab and Anji rail bridges in J&K.)',
      'चिनाब ब्रिज नदी तल से 359 मीटर ऊपर दुनिया का सबसे ऊँचा रेलवे आर्च ब्रिज है। अंजी ब्रिज भारत का पहला केबल-स्टेयड रेलवे पुल है। (Chenab Bridge is the world\'s highest rail arch bridge at 359m. Anji Bridge is India\'s first cable-stayed rail bridge.)',
      'ये पुल उधमपुर-श्रीनगर-बारामूला रेल लिंक (USBRL) परियोजना का हिस्सा हैं। अंजी पुल चिनाब की सहायक नदी अंजी पर स्थित है। (Part of the USBRL project. Anji bridge spans across Anji river, a tributary of Chenab.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1449156001433-469b40557038?q=80&w=1000'
  },

  // --- SLOT 26: Topic 26 ---
  {
    id: 't26-q',
    type: 'quiz',
    title: 'ARAVALLI GREEN WALL PROJECT',
    subtitle: 'अरावली ग्रीन वॉल प्रोजेक्ट',
    content: [
      '\'अरावली ग्रीन वॉल प्रोजेक्ट\' के तहत अरावली पर्वतमाला के साथ कितने किलोमीटर चौड़ा ग्रीन बफर जोन बनाया जाएगा?',
      'Under the \'Aravalli Green Wall Project\', how many kilometers wide green buffer zone will be created along the Aravalli range?'
    ],
    options: [
      { id: 'A', label: 'A', text: '10 किमी (10 km)' },
      { id: 'B', label: 'B', text: '1 किमी (1 km)' },
      { id: 'C', label: 'C', text: '2 किमी (2 km)' },
      { id: 'D', label: 'D', text: '5 किमी (5 km)' }
    ],
    correctOptionId: 'D'
  },
  {
    id: 't26-f',
    type: 'fact',
    title: 'ARAVALLI GREEN WALL PROJECT',
    subtitle: 'अरावली ग्रीन वॉल प्रोजेक्ट',
    content: [
      'मरुस्थलीकरण (Desertification) को रोकने के लिए \'अरावली ग्रीन वॉल प्रोजेक्ट\' शुरू किया गया है। (Aravalli Green Wall project launched to combat desertification.)',
      'इस परियोजना का लक्ष्य 700 किमी लंबी अरावली श्रृंखला के साथ 5 किमी चौड़ा ग्रीन बफर जोन बनाना है। यह गुजरात, राजस्थान, हरियाणा और दिल्ली में फैला है। (Aim: 5 km wide green buffer along 700 km Aravalli stretch covering Gujarat, Rajasthan, Haryana, and Delhi.)',
      'यह प्रोजेक्ट मरुस्थलीकरण से निपटने के लिए संयुक्त राष्ट्र सम्मेलन (UNCCD) के प्रति भारत की प्रतिबद्धता में योगदान देता है। अरावली दुनिया की सबसे पुरानी पर्वत श्रृंखलाओं में से एक है। (Contributes to India’s commitments under the UNCCD; Aravalli is one of the world\'s oldest ranges.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1000'
  },

  // --- SLOT 27: Topic 27 ---
  {
    id: 't27-q',
    type: 'quiz',
    title: 'EAC-PM NEW CHAIRMAN',
    subtitle: 'EAC-PM के नए अध्यक्ष',
    content: [
      'प्रधानमंत्री की आर्थिक सलाहकार परिषद (EAC-PM) के नए अध्यक्ष के रूप में किसे नियुक्त किया गया है?',
      'Who has been appointed as the new Chairman of the Economic Advisory Council to the Prime Minister (EAC-PM)?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'सुमन बेरी (Suman Bery)' },
      { id: 'B', label: 'B', text: 'एस. महेंद्र देव (S. Mahendra Dev)' },
      { id: 'C', label: 'C', text: 'बिबेक देबरॉय (Bibek Debroy)' },
      { id: 'D', label: 'D', text: 'उर्जित पटेल (Urjit Patel)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't27-f',
    type: 'fact',
    title: 'EAC-PM NEW CHAIRMAN',
    subtitle: 'EAC-PM के नए अध्यक्ष',
    content: [
      'प्रसिद्ध अर्थशास्त्री एस. महेंद्र देव को EAC-PM का अध्यक्ष नियुक्त किया गया है, जिन्होंने सुमन बेरी का स्थान लिया है। (Economist S. Mahendra Dev appointed as Chairman of EAC-PM, replacing Suman Bery.)',
      'वे कृषि और ग्रामीण अर्थव्यवस्था के विशेषज्ञ हैं और \'इकोनॉमिक एंड पॉलिटिकल वीकली\' (EPW) के संपादक भी हैं। (Expert in agriculture and rural economy; editor of EPW.)',
      'EAC-PM एक स्वतंत्र निकाय है जो प्रधानमंत्री को आर्थिक मुद्दों पर सलाह देने के लिए गठित किया गया है। (EAC-PM is an independent body constituted to give economic advice to the PM.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000'
  },

  // --- SLOT 28: Topic 28 ---
  {
    id: 't28-q',
    type: 'quiz',
    title: 'NEW BASE YEAR FOR GDP, CPI, IIP',
    subtitle: 'आर्थिक आंकड़ों के लिए नया आधार वर्ष',
    content: [
      'सकल घरेलू उत्पाद (GDP) और औद्योगिक उत्पादन सूचकांक (IIP) के लिए नया आधार वर्ष (Base Year) क्या निर्धारित किया गया है?',
      'What has been set as the new base year for GDP and IIP data?'
    ],
    options: [
      { id: 'A', label: 'A', text: '2011-12' },
      { id: 'B', label: 'B', text: '2018-19' },
      { id: 'C', label: 'C', text: '2022-23' },
      { id: 'D', label: 'D', text: '2024' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't28-f',
    type: 'fact',
    title: 'NEW BASE YEAR FOR GDP, CPI, IIP',
    subtitle: 'आर्थिक आंकड़ों के लिए नया आधार वर्ष',
    content: [
      'सांख्यिकी मंत्रालय (MoSPI) के अनुसार, अगले साल से GDP, IIP और CPI के लिए नए आधार वर्ष लागू होंगे। (MoSPI to implement new base years for GDP, IIP, and CPI from next year.)',
      'GDP और IIP के लिए नया आधार वर्ष 2022-23 होगा। CPI (रिटेल मुद्रास्फीति) के लिए नया आधार वर्ष 2024 होगा। (New base for GDP/IIP is 2022-23; for CPI it is 2024.)',
      'आधार वर्ष तुलना के लिए एक बेंचमार्क वर्ष होता है जो मुद्रास्फीति के प्रभाव को हटाकर वास्तविक विकास दिखाता है। (A base year is a benchmark for economic comparison to track real growth by removing inflation effects.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611974717482-58434749f7e5?q=80&w=1000'
  },

  // --- SLOT 29: Topic 29 ---
  {
    id: 't29-q',
    type: 'quiz',
    title: 'ULLAS PROGRAM UPDATE',
    subtitle: 'उल्लास (ULLAS) कार्यक्रम अपडेट',
    content: [
      'मिजोरम और गोवा ने उल्लास (ULLAS) कार्यक्रम के तहत स्वयं को क्या घोषित किया है?',
      'What have Mizoram and Goa declared themselves under the ULLAS adult literacy programme?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'पूर्ण साक्षर (Fully Literate)' },
      { id: 'B', label: 'B', text: 'ओडीएफ प्लस (ODF Plus)' },
      { id: 'C', label: 'C', text: 'कार्बन न्यूट्रल (Carbon Neutral)' },
      { id: 'D', label: 'D', text: 'प्लास्टिक मुक्त (Plastic Free)' }
    ],
    correctOptionId: 'A'
  },
  {
    id: 't29-f',
    type: 'fact',
    title: 'ULLAS PROGRAM UPDATE',
    subtitle: 'उल्लास (ULLAS) कार्यक्रम अपडेट',
    content: [
      'मिजोरम (98.2%) और गोवा (99.72%) ने उल्लास कार्यक्रम के तहत स्वयं को "पूर्ण साक्षर" घोषित किया है। (Mizoram and Goa declared "fully literate" under ULLAS.)',
      'उल्लास (New India Literacy Programme) का लक्ष्य 15+ आयु के उन वयस्कों को साक्षरता और जीवन कौशल प्रदान करना है जो स्कूली शिक्षा से वंचित रह गए। (ULLAS aims to provide functional literacy to adults aged 15+ who missed formal education.)',
      'यह कार्यक्रम स्वयंसेवा पर आधारित है और \'कर्तव्य बोध\' की भावना को बढ़ावा देता है। यह राष्ट्रीय शिक्षा नीति (NEP) 2020 के अनुरूप है। (Volunteer-driven program aligned with NEP 2020.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000'
  },

  // --- SLOT 30: Topic 30 ---
  {
    id: 't30-q',
    type: 'quiz',
    title: 'AI RAM INITIATIVE',
    subtitle: 'एआई रैम (AI RAM) पहल',
    content: [
      '\'एआई रेडीनेस असेसमेंट मेथोडोलॉजी\' (RAM) पहल किस वैश्विक संस्था के दक्षिण एशिया क्षेत्रीय कार्यालय के सहयोग से आयोजित की गई?',
      'The \'AI Readiness Assessment Methodology\' (RAM) initiative was organized in collaboration with the regional office of which global body?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'यूनिसेफ (UNICEF)' },
      { id: 'B', label: 'B', text: 'विश्व बैंक (World Bank)' },
      { id: 'C', label: 'C', text: 'डब्ल्यूएचओ (WHO)' },
      { id: 'D', label: 'D', text: 'यूनेस्को (UNESCO)' }
    ],
    correctOptionId: 'D'
  },
  {
    id: 't30-f',
    type: 'fact',
    title: 'AI RAM INITIATIVE',
    subtitle: 'एआई रैम (AI RAM) पहल',
    content: [
      'यूनेस्को के दक्षिण एशिया क्षेत्रीय कार्यालय ने \'इंडियाएआई मिशन\' के सहयोग से AI RAM पर परामर्श आयोजित किया। (UNESCO Regional Office and IndiaAI Mission organized AI RAM consultation.)',
      'इसका उद्देश्य भारत-विशिष्ट एआई नीति रिपोर्ट विकसित करना है जो क्षेत्रों में एआई के नैतिक और जिम्मेदार अपनाने के लिए सुझाव देती है। (Aims to develop an India-specific AI policy for ethical and responsible AI adoption.)',
      'यह पहल 10,000 करोड़ रुपये से अधिक के फंड के साथ लॉन्च किए गए \'INDIAai मिशन\' के अनुरूप है। (Aligns with the INDIAai Mission launched with over Rs 10,000 crore funding.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000'
  },

  // --- SLOT 31: Topic 31 ---
  {
    id: 't31-q',
    type: 'quiz',
    title: 'WORLD ACCREDITATION DAY 2025',
    subtitle: 'विश्व प्रत्यायन दिवस 2025',
    content: [
      '\'विश्व प्रत्यायन दिवस\' (WAD) 2025 का विषय (Theme) क्या है?',
      'What is the theme of \'World Accreditation Day\' (WAD) 2025?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'गुणवत्तापूर्ण शिक्षा (Quality Education)' },
      { id: 'B', label: 'B', text: 'प्रत्यायन: एसएमई (SMEs) को सशक्त बनाना (Accreditation: Empowering SMEs)' },
      { id: 'C', label: 'C', text: 'डिजिटल इंडिया (Digital India)' },
      { id: 'D', label: 'D', text: 'सुरक्षित स्वास्थ्य (Safe Health)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't31-f',
    type: 'fact',
    title: 'WORLD ACCREDITATION DAY 2025',
    subtitle: 'विश्व प्रत्यायन दिवस 2025',
    content: [
      '9 जून को भारतीय गुणवत्ता परिषद (QCI) द्वारा विश्व प्रत्यायन दिवस मनाया गया। (Quality Council of India celebrated WAD on June 9th.)',
      'इसकी थीम "प्रत्यायन: लघु और मध्यम उद्यमों (SMEs) को सशक्त बनाना" थी। (Theme: “Accreditation: Empowering Small and Medium Enterprises”.)',
      'QCI 1997 में वाणिज्य और उद्योग मंत्रालय (DPIIT) के तहत स्थापित एक स्वायत्त निकाय है। (QCI is an autonomous body under DPIIT established in 1997.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000'
  },

  // --- SLOT 32: Topic 32 ---
  {
    id: 't32-q',
    type: 'quiz',
    title: 'STATE OF WORLD POPULATION 2025',
    subtitle: 'विश्व जनसंख्या रिपोर्ट 2025',
    content: [
      'संयुक्त राष्ट्र की रिपोर्ट \'स्टेट ऑफ द वर्ल्ड पॉपुलेशन 2025\' के अनुसार, दुनिया का सबसे अधिक आबादी वाला देश कौन सा है?',
      'According to the UN report ‘State of the World Population 2025’, which is the world’s most populous country?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'चीन (China)' },
      { id: 'B', label: 'B', text: 'अमेरिका (USA)' },
      { id: 'C', label: 'C', text: 'भारत (India)' },
      { id: 'D', label: 'D', text: 'इंडोनेशिया (Indonesia)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't32-f',
    type: 'fact',
    title: 'STATE OF WORLD POPULATION 2025',
    subtitle: 'विश्व जनसंख्या रिपोर्ट 2025',
    content: [
      'संयुक्त राष्ट्र (UNFPA) की रिपोर्ट के अनुसार, अप्रैल 2025 तक भारत की जनसंख्या 146.39 करोड़ पहुँच गई है। (India’s population reached 146.39 crore by April 2025 per UNFPA.)',
      'भारत ने चीन (141.61 करोड़) को पीछे छोड़ दिया है। भारत की कुल प्रजनन दर (TFR) गिरकर 1.9 हो गई है, जो प्रतिस्थापन स्तर (2.1) से नीचे है। (India surpassed China. India’s TFR is 1.9, below replacement level of 2.1.)',
      'भारत की 68% जनसंख्या कार्यशील आयु वर्ग (15-64 वर्ष) में है। जनसंख्या के 40 वर्षों में गिरावट शुरू होने से पहले 170 करोड़ तक पहुँचने की उम्मीद है। (68% of India\'s population is in the working-age group. Expected to peak at 170 crore.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=1000'
  },

  // --- SLOT 33: Topic 33 ---
  {
    id: 't33-q',
    type: 'quiz',
    title: 'NIIF GOVERNING COUNCIL',
    subtitle: 'राष्ट्रीय निवेश और अवसंरचना कोष',
    content: [
      'राष्ट्रीय निवेश और अवसंरचना कोष (NIIF) की गवर्निंग काउंसिल (GC) की अध्यक्षता किसके द्वारा की जाती है?',
      'Who chairs the Governing Council (GC) of the National Investment and Infrastructure Fund (NIIF)?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'प्रधानमंत्री (Prime Minister)' },
      { id: 'B', label: 'B', text: 'नीति आयोग के सीईओ (CEO of NITI Aayog)' },
      { id: 'C', label: 'C', text: 'केंद्रीय वित्त मंत्री (Union Finance Minister)' },
      { id: 'D', label: 'D', text: 'भारतीय रिजर्व बैंक के गवर्नर (Governor of RBI)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't33-f',
    type: 'fact',
    title: 'NIIF GOVERNING COUNCIL',
    subtitle: 'राष्ट्रीय निवेश और अवसंरचना कोष',
    content: [
      'केंद्रीय वित्त और कॉर्पोरेट मामलों के मंत्री ने नई दिल्ली में NIIF की गवर्निंग काउंसिल की छठी बैठक की अध्यक्षता की। (The Union Finance Minister chaired the 6th meeting of the Governing Council of NIIF in New Delhi.)',
      'NIIF को 2015 में भारत सरकार द्वारा एक संप्रभु-लिंक्ड निवेश प्लेटफॉर्म के रूप में स्थापित किया गया था। इसमें भारत सरकार की 49% हिस्सेदारी है, जबकि बाकी संस्थागत निवेशकों के लिए खुला है। (NIIF was established in 2015 as a sovereign-linked investment platform. GOI holds 49% share; the rest is for institutional investors.)',
      'NIIF सेबी (SEBI) के पास वैकल्पिक निवेश कोष (AIF) के रूप में पंजीकृत है। AIF निजी तौर पर एकत्रित निवेश वाहन हैं जो परिष्कृत निवेशकों से पूंजी एकत्र करते हैं। (NIIF is registered with SEBI as an Alternative Investment Fund (AIF).6 AIFs are privately pooled vehicles for sophisticated investors.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000'
  },

  // --- SLOT 34: Topic 34 ---
  {
    id: 't34-q',
    type: 'quiz',
    title: 'ILOSTAT: INDIA’S SOCIAL SECURITY',
    subtitle: 'सामाजिक सुरक्षा पर ILO की रिपोर्ट',
    content: [
      'ILOSTAT के 2025 के आंकड़ों के अनुसार, भारत की सामाजिक सुरक्षा कवरेज (Social Security Coverage) बढ़कर कितने प्रतिशत हो गई है?',
      'According to ILOSTAT 2025 data, India’s social security coverage has increased to what percentage?'
    ],
    options: [
      { id: 'A', label: 'A', text: '19%' },
      { id: 'B', label: 'B', text: '45%' },
      { id: 'C', label: 'C', text: '94%' },
      { id: 'D', label: 'D', text: '64.3%' }
    ],
    correctOptionId: 'D'
  },
  {
    id: 't34-f',
    type: 'fact',
    title: 'ILOSTAT: INDIA’S SOCIAL SECURITY',
    subtitle: 'सामाजिक सुरक्षा पर ILO की रिपोर्ट',
    content: [
      'अंतर्राष्ट्रीय श्रम संगठन (ILO) के ILOSTAT डेटा के अनुसार, भारत की सामाजिक सुरक्षा कवरेज 2025 में बढ़कर 64.3% हो गई है, जो एक दशक पहले 19% थी। (According to ILO data, India’s social security coverage rose to 64.3% in 2025 from 19% a decade ago.)',
      'भारत अब सामाजिक सुरक्षा कवरेज में दुनिया में दूसरे स्थान पर है, जो अपने 94 करोड़ से अधिक नागरिकों को सुरक्षा प्रदान कर रहा है। भारत 2025 का डेटा अपडेट करने वाला वैश्विक स्तर पर पहला देश बना। (India ranks 2nd globally, covering over 94 crore citizens. It is the first country to update 2025 social protection data in ILOSTAT.)',
      'प्रमुख पहलों में पीएम श्रम योगी मान-धन (PMSYM), अटल पेंशन योजना (APY) और आयुष्मान भारत (PM-JAY) शामिल हैं। सामाजिक सुरक्षा का अर्थ स्वास्थ्य देखभाल और वृद्धावस्था या बेरोजगारी में आय सुरक्षा सुनिश्चित करना है। (Key initiatives include PMSYM, APY, and Ayushman Bharat. Social security ensures healthcare and income security during old age or unemployment.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000'
  },

  // --- SLOT 35: Topic 35 ---
  {
    id: 't35-q',
    type: 'quiz',
    title: 'LOKPAL OF INDIA: NEW MOTTO',
    subtitle: 'लोकपाल: नया आदर्श वाक्य',
    content: [
      'लोकपाल (Lokpal) द्वारा हाल ही में अपनाया गया नया आदर्श वाक्य (Motto) क्या है?',
      'What is the new motto recently adopted by the Lokpal of India?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'भ्रष्टाचार मुक्त भारत (Corruption Free India)' },
      { id: 'B', label: 'B', text: 'नागरिकों को सशक्त बनाएं, भ्रष्टाचार को उजागर करें (Empower Citizens, Expose Corruption)' },
      { id: 'C', label: 'C', text: 'सत्यमेव जयते (Satyamev Jayate)' },
      { id: 'D', label: 'D', text: 'लोकहित सर्वोपरि (Public Interest Supreme)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't35-f',
    type: 'fact',
    title: 'LOKPAL OF INDIA: NEW MOTTO',
    subtitle: 'लोकपाल: नया आदर्श वाक्य',
    content: [
      'भारत के लोकपाल की पूर्ण पीठ ने "नागरिकों को सशक्त बनाएं, भ्रष्टाचार को उजागर करें" (Empower Citizens, Expose Corruption) नामक एक नया आदर्श वाक्य अपनाया है। (The Full Bench of Lokpal adopted the new motto “Empower Citizens, Expose Corruption”.)',
      'लोकपाल सार्वजनिक कार्यालयों में भ्रष्टाचार की शिकायतों के समाधान के लिए एक वैधानिक निकाय (Statutory Body) है, जिसे 2013 के अधिनियम के तहत बनाया गया था। (Lokpal is a statutory anti-corruption body created via the 2013 Act.)',
      'लोकपाल का अध्यक्ष सेवानिवृत्त CJI या सुप्रीम कोर्ट का न्यायाधीश होता है। इसकी नियुक्ति चयन समिति (पीएम, CJI, लोकसभा में LoP और एक प्रतिष्ठित न्यायविद) की सिफारिश पर की जाती है। इसका कार्यकाल 5 वर्ष या 70 वर्ष की आयु तक होता है। (Chairperson is a retired CJI/SC judge. Appointed by a committee of PM, CJI, LoP, and a Jurist. Tenure is 5 years or up to 70 years.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000'
  },

  // --- SLOT 36: Topic 36 ---
  {
    id: 't36-q',
    type: 'quiz',
    title: 'UNESCO CREATIVE CITY: LUCKNOW',
    subtitle: 'यूनेस्को क्रिएटिव सिटी: लखनऊ',
    content: [
      'यूनेस्को (UNESCO) के क्रिएटिव सिटीज नेटवर्क (UCCN) में लखनऊ को किस श्रेणी के लिए प्रस्तावित किया गया है?',
      'Under which category has Lucknow been proposed for the UNESCO Creative Cities Network (UCCN)?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'साहित्य (Literature)' },
      { id: 'B', label: 'B', text: 'फिल्म (Film)' },
      { id: 'C', label: 'C', text: 'संगीत (Music)' },
      { id: 'D', label: 'D', text: 'गैस्ट्रोनॉमी (Gastronomy)' }
    ],
    correctOptionId: 'D'
  },
  {
    id: 't36-f',
    type: 'fact',
    title: 'UNESCO CREATIVE CITY: LUCKNOW',
    subtitle: 'यूनेस्को क्रिएटिव सिटी: लखनऊ',
    content: [
      'हाल ही में अवधी व्यंजन के लिए \'गैस्ट्रोनॉमी\' श्रेणी के तहत लखनऊ को यूनेस्को क्रिएटिव सिटी बनाने का प्रस्ताव विश्व विरासत केंद्र को भेजा गया है। (A proposal for Lucknow under \'Gastronomy\' for Awadhi Cuisine was submitted to the World Heritage Centre.)',
      'UCCN की स्थापना 2004 में हुई थी और यह सात क्षेत्रों (शिल्प, डिजाइन, फिल्म, गैस्ट्रोनॉमी, साहित्य, मीडिया आर्ट्स और संगीत) पर ध्यान केंद्रित करता है। (UCCN was created in 2004 focusing on seven fields like Crafts, Film, Gastronomy, etc.)',
      'भारत के अन्य यूनेस्को क्रिएटिव शहर: जयपुर और श्रीनगर (शिल्प), वाराणसी, चेन्नई और ग्वालियर (संगीत), मुंबई (फिल्म), हैदराबाद (गैस्ट्रोनॉमी) और कोझिकोड (साहित्य)। (Other Indian cities: Jaipur/Srinagar-Crafts, Varanasi/Chennai/Gwalior-Music, Mumbai-Film, Hyderabad-Gastronomy, Kozhikode-Literature.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000'
  },

  // --- SLOT 37: Topic 37 ---
  {
    id: 't37-q',
    type: 'quiz',
    title: 'EXERCISE ‘KHAAN QUEST’',
    subtitle: 'अभ्यास ‘खान क्वेस्ट’',
    content: [
      'बहुराष्ट्रीय सैन्य अभ्यास \'खान क्वेस्ट\' (Khaan Quest) का आयोजन किस देश में किया जा रहा है?',
      'In which country is the multinational military exercise ‘Khaan Quest’ being organized?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'भारत (India)' },
      { id: 'B', label: 'B', text: 'अमेरिका (USA)' },
      { id: 'C', label: 'C', text: 'मंगोलिया (Mongolia)' },
      { id: 'D', label: 'D', text: 'रूस (Russia)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't37-f',
    type: 'fact',
    title: 'EXERCISE ‘KHAAN QUEST’',
    subtitle: 'अभ्यास ‘खान क्वेस्ट’',
    content: [
      'भारतीय सेना का दल बहुराष्ट्रीय सैन्य अभ्यास \'खान क्वेस्ट\' में भाग लेने के लिए उलानबटोर, मंगोलिया पहुँचा। (Indian Army reached Ulaanbaatar, Mongolia for the multinational Exercise Khaan Quest.)',
      'यह एक वार्षिक अभ्यास है जो शांति सेना की क्षमताओं (Peacekeeping capabilities) को बढ़ाने के लिए दुनिया भर की सेनाओं को एक साथ लाता है। (Annual exercise to enhance peacekeeping capabilities of global forces.)',
      'यह 2003 में अमेरिका और मंगोलिया के बीच द्विपक्षीय अभ्यास के रूप में शुरू हुआ था और 2006 से बहुराष्ट्रीय बन गया। यह संयुक्त राष्ट्र चार्टर के अध्याय VII के तहत शांति अभियानों के लिए है। (Started in 2003 as US-Mongolia bilateral; multinational since 2006. Aligns with UN Charter Chapter VII.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1000'
  },

  // --- SLOT 38: Topic 38 ---
  {
    id: 't38-q',
    type: 'quiz',
    title: 'AAIB AND AIR INDIA CRASH',
    subtitle: 'एएआईबी और एयर इंडिया विमान दुर्घटना',
    content: [
      'विमान में \'ब्लैक बॉक्स\' (Black Box) का क्या कार्य होता है?',
      'What is the function of a \'Black Box\' in an aircraft?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'इंजन को ठंडा करना (Cooling the engine)' },
      { id: 'B', label: 'B', text: 'उड़ान की जानकारी और कॉकपिट की आवाज़ रिकॉर्ड करना (Recording flight data and cockpit audio)' },
      { id: 'C', label: 'C', text: 'यात्रियों को भोजन परोसना (Serving food to passengers)' },
      { id: 'D', label: 'D', text: 'विमान की दिशा बदलना (Changing aircraft direction)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't38-f',
    type: 'fact',
    title: 'AAIB AND AIR INDIA CRASH',
    subtitle: 'एएआईबी और एयर इंडिया विमान दुर्घटना',
    content: [
      'विमान दुर्घटना जांच ब्यूरो (AAIB) ने अहमदाबाद में एयर इंडिया विमान दुर्घटना की औपचारिक जांच शुरू की है। (AAIB initiated investigation into the Air India crash in Ahmedabad.)',
      '\'ब्लैक बॉक्स\' (चमकीला नारंगी रंग) के दो घटक होते हैं: कॉकपिट वॉयस रिकॉर्डर (CVR) और फ्लाइट डेटा रिकॉर्डर (FDR)। यह दुर्घटना के कारणों का पता लगाने में मदद करता है। (Black Box has CVR for audio and FDR for data.30 It helps discover crash causes.)',
      'AAIB की स्थापना 2012 में नागरिक उड्डयन मंत्रालय के तहत हुई थी। ICAO (अंतर्राष्ट्रीय नागरिक उड्डयन संगठन) एक संयुक्त राष्ट्र एजेंसी है जिसका मुख्यालय मॉन्ट्रियल, कनाडा में है। (AAIB established in 2012 under Ministry of Civil Aviation. ICAO HQ is in Montreal, Canada; India is a member.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000'
  },

  // --- SLOT 39: Topic 39 ---
  {
    id: 't39-q',
    type: 'quiz',
    title: 'GLOBAL GENDER GAP INDEX 2025',
    subtitle: 'ग्लोबल जेंडर गैप इंडेक्स 2025',
    content: [
      '\'ग्लोबल जेंडर गैप रिपोर्ट 2025\' में भारत का कौन सा स्थान है?',
      'What is India’s rank in the \'Global Gender Gap Report 2025\'?'
    ],
    options: [
      { id: 'A', label: 'A', text: '127वां (127th)' },
      { id: 'B', label: 'B', text: '148वां (148th)' },
      { id: 'C', label: 'C', text: '131वां (131st)' },
      { id: 'D', label: 'D', text: '1वां (1st)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't39-f',
    type: 'fact',
    title: 'GLOBAL GENDER GAP INDEX 2025',
    subtitle: 'ग्लोबल जेंडर गैप इंडेक्स 2025',
    content: [
      'विश्व आर्थिक मंच (WEF) ने ग्लोबल जेंडर गैप रिपोर्ट 2025 का 19वां संस्करण जारी किया है। (World Economic Forum released the 19th edition of the Global Gender Gap Report 2025.)',
      'भारत 148 देशों में से 131वें स्थान पर खिसक गया है। राजनीतिक सशक्तिकरण (प्रतिनिधित्व में गिरावट) भारत की रैंकिंग गिरने का मुख्य कारण रहा। (India slipped to 131st out of 148. Decline in political empowerment caused the rank drop.)',
      'आइसलैंड लगातार 16वें वर्ष सबसे अधिक लिंग-समान (Gender-equal) देश रहा। पूर्ण लैंगिक समानता प्राप्त करने में अभी भी 123 वर्ष लगेंगे। (Iceland remains 1st for 16 years. It will take 123 years to close the global gender gap at the current pace.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=1000'
  },

  // --- SLOT 40: Topic 40 ---
  {
    id: 't40-q',
    type: 'quiz',
    title: 'INTERPOL’S SILVER NOTICE & BHARATPOL',
    subtitle: 'इंटरपोल सिल्वर नोटिस और भारतपोल',
    content: [
      'इंटरपोल द्वारा जारी \'सिल्वर नोटिस\' (Silver Notice) का मुख्य उद्देश्य क्या है?',
      'What is the primary purpose of the \'Silver Notice\' issued by Interpol?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'भगोड़ों को गिरफ्तार करना (Arresting fugitives)' },
      { id: 'B', label: 'B', text: 'अपराध की आय और संपत्ति का पता लगाना (Tracing proceeds of crime and assets)' },
      { id: 'C', label: 'C', text: 'लापता व्यक्तियों को ढूंढना (Finding missing persons)' },
      { id: 'D', label: 'D', text: 'पुष्प सुरक्षा की चेतावनी (Warning about public safety)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't40-f',
    type: 'fact',
    title: 'INTERPOL’S SILVER NOTICE & BHARATPOL',
    subtitle: 'इंटरपोल सिल्वर नोटिस और भारतपोल',
    content: [
      'CBI ने फ्रांस दूतावास वीजा धोखाधड़ी मामले से संबंधित अपराध की आय का पता लगाने के लिए भारत का पहला \'सिल्वर नोटिस\' जारी कराया है। (CBI got India’s first ‘silver notice’ to trace proceeds of crime in a visa fraud case.)',
      'इंटरपोल (Interpol) का मुख्यालय ल्योन, फ्रांस में है। भारत में इसकी नेशनल सेंट्रल ब्यूरो (NCB) सीबीआई (CBI) है। (Interpol HQ is in Lyon, France. India’s NCB is the CBI.)',
      '\'भारतपोल\' (Bharatpol) पोर्टल सीबीआई द्वारा विकसित किया गया है जो भारतीय कानून प्रवर्तन एजेंसियों और इंटरपोल के बीच सहयोग की सुविधा देता है। अन्य नोटिस: रेड (गिरफ्तारी), येलो (लापता व्यक्ति), ब्लू (जानकारी)। (Bharatpol facilitates cooperation with Interpol. Other notices: Red-arrest, Yellow-missing, Blue-information.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000'
  },

  // --- SLOT 41: Topic 48 ---
  {
    id: 't41-q',
    type: 'quiz',
    title: '51ST G7 SUMMIT',
    subtitle: '51वां जी7 शिखर सम्मेलन',
    content: [
      'कनाडा द्वारा आयोजित 51वें जी7 (G7) शिखर सम्मेलन 2025 का मुख्य विषय (Theme) क्या है?',
      'What is the main theme of the 51st G7 Summit 2025 hosted by Canada?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'वैश्विक अर्थव्यवस्था का पुनर्निर्माण (Rebuilding the global economy)' },
      { id: 'B', label: 'B', text: 'भविष्य की साझेदारी को सुरक्षित करना (Securing the partnerships of the future)' },
      { id: 'C', label: 'C', text: 'हरित ऊर्जा और डिजिटल परिवर्तन (Green Energy and Digital Transition)' },
      { id: 'D', label: 'D', text: 'उपरोक्त सभी (All of the above)' }
    ],
    correctOptionId: 'D'
  },
  {
    id: 't41-f',
    type: 'fact',
    title: '51ST G7 SUMMIT',
    subtitle: '51वां जी7 शिखर सम्मेलन',
    content: [
      'प्रधानमंत्री नरेंद्र मोदी ने कनाडा के कनानास्कि (Kananaskis) में आयोजित जी-7 आउटरीच शिखर सम्मेलन में भाग लिया। (PM Modi participated in the G-7 Outreach Summit held in Kananaskis, Canada.)',
      'इस वर्ष का सम्मेलन तीन स्तंभों पर आधारित है: समुदायों की रक्षा, ऊर्जा सुरक्षा और डिजिटल परिवर्तन, तथा भविष्य की साझेदारी। पीएम मोदी ने \'ऊर्जा सुरक्षा\' पर एक सत्र को संबोधित किया। (The summit focuses on three pillars: protecting communities, energy security/digital transition, and future partnerships. PM addressed a session on \'Energy Security\'.)',
      'जी7 (Group of Seven) दुनिया की 7 उन्नत अर्थव्यवस्थाओं (फ्रांस, जर्मनी, इटली, जापान, यूके, यूएस और कनाडा) और यूरोपीय संघ का एक अनौपचारिक समूह है। इसकी स्थापना 1975 में तेल संकट के जवाब में की गई थी। भारत इसका सदस्य नहीं है लेकिन नियमित रूप से आमंत्रित किया जाता है। (G7 is an informal group of 7 advanced economies + EU, founded in 1975. India is not a member but a frequent invitee.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1000'
  },

  // --- SLOT 42: Topic 49 ---
  {
    id: 't42-q',
    type: 'quiz',
    title: 'STRAIT OF HORMUZ',
    subtitle: 'होर्मुज जलडमरूमध्य',
    content: [
      'होर्मुज जलडमरूमध्य (Strait of Hormuz) किन दो जल निकायों को जोड़ता है?',
      'The Strait of Hormuz connects which two bodies of water?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'लाल सागर और अरब सागर (Red Sea and Arabian Sea)' },
      { id: 'B', label: 'B', text: 'फारस की खाड़ी और ओमान की खाड़ी (Persian Gulf and Gulf of Oman)' },
      { id: 'C', label: 'C', text: 'बंगाल की खाड़ी और हिंद महासागर (Bay of Bengal and Indian Ocean)' },
      { id: 'D', label: 'D', text: 'भूमध्य सागर और अटलांटिक महासागर (Mediterranean Sea and Atlantic Ocean)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't42-f',
    type: 'fact',
    title: 'STRAIT OF HORMUZ',
    subtitle: 'होर्मुज जलडमरूमध्य',
    content: [
      'ईरान ने संघर्ष के बीच होर्मुज जलडमरूमध्य को बंद करने की धमकी दी है, जिससे वैश्विक चिंता बढ़ गई है। (Iran threatened to close the Strait of Hormuz, raising global energy security concerns.)',
      'यह ईरान और ओमान के बीच एक रणनीतिक जलमार्ग है। दुनिया की तेल आपूर्ति का लगभग 20% और भारत का अधिकांश तेल और एलएनजी (LNG) आयात इसी मार्ग से गुजरता है। (Strategic waterway between Iran and Oman.5 Handles 20% of global oil supply and most of India\'s energy imports.)',
      'प्रमुख बंदरगाह: ईरान का \'बंदर अब्बास\', यूएई का \'फुजैरा\' और कतर का \'रास लफ्फान\' (LNG के लिए)। यह वैश्विक व्यापार के लिए एक महत्वपूर्ण \'चोक पॉइंट\' (Choke point) है। (Key ports: Bandar Abbas, Fujairah, and Ras Laffan. It is a vital maritime choke point.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1000'
  },

  // --- SLOT 43: Topic 50 ---
  {
    id: 't43-q',
    type: 'quiz',
    title: 'INS ARNALA (ASW-SWC)',
    subtitle: 'आईएनएस अरनाला (ASW-SWC)',
    content: [
      'भारत के पहले एंटी-सबमरीन वारफेयर शैलो वॉटर क्राफ्ट (ASW-SWC) का नाम क्या है जिसे विशाखापत्तनम में कमीशन किया जाएगा?',
      'What is the name of India\'s first Anti-Submarine Warfare Shallow Water Craft (ASW-SWC) to be commissioned in Visakhapatnam?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'आईएनएस विक्रांत (INS Vikrant)' },
      { id: 'B', label: 'B', text: 'आईएनएस अरनाला (INS Arnala)' },
      { id: 'C', label: 'C', text: 'आईएनएस नीलगिरी (INS Nilgiri)' },
      { id: 'D', label: 'D', text: 'आईएनएस तमाल (INS Tamal)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't43-f',
    type: 'fact',
    title: 'INS ARNALA (ASW-SWC)',
    subtitle: 'आईएनएस अरनाला (ASW-SWC)',
    content: [
      'भारतीय नौसेना विशाखापत्तनम में देश के पहले एंटी-सबमरीन वारफेयर शैलो वॉटर क्राफ्ट (ASW-SWC), आईएनएस अरनाला को कमीशन करने के लिए तैयार है। (Indian Navy is set to commission INS Arnala, the first ASW-SWC vessel.)',
      'इसका नाम महाराष्ट्र के ऐतिहासिक अरनाला किले के नाम पर रखा गया है। इसे गार्डन रीच शिपबिल्डर्स एंड इंजीनियर्स (GRSE), कोलकाता द्वारा डिजाइन और निर्मित किया गया है। (Named after Arnala Fort, Maharashtra. Designed and built by GRSE, Kolkata.)',
      'यह डीजल इंजन-वॉटरजेट प्रणोदन प्रणाली द्वारा संचालित होने वाला सबसे बड़ा भारतीय नौसैनिक जहाज है। इसमें 80% से अधिक स्वदेशी सामग्री है। (Largest Indian naval vessel with waterjet propulsion; over 80% indigenous content.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000'
  },

  // --- SLOT 44: Topic 51 ---
  {
    id: 't44-q',
    type: 'quiz',
    title: 'THIRD UN OCEANS CONFERENCE (UNOC)',
    subtitle: 'तीसरा संयुक्त राष्ट्र महासागर सम्मेलन',
    content: [
      'तीसरे संयुक्त राष्ट्र महासागर सम्मेलन (UNOC) 2025 का आयोजन कहाँ किया गया?',
      'Where was the third United Nations Oceans Conference (UNOC) 2025 held?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'न्यूयॉर्क, यूएसए (New York, USA)' },
      { id: 'B', label: 'B', text: 'नीस, फ्रांस (Nice, France)' },
      { id: 'C', label: 'C', text: 'नई दिल्ली, भारत (New Delhi, India)' },
      { id: 'D', label: 'D', text: 'सियोल, दक्षिण कोरिया (Seoul, South Korea)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't44-f',
    type: 'fact',
    title: 'THIRD UN OCEANS CONFERENCE (UNOC)',
    subtitle: 'तीसरा संयुक्त राष्ट्र महासागर सम्मेलन',
    content: [
      'फ्रांस के नीस में आयोजित तीसरा संयुक्त राष्ट्र महासागर सम्मेलन समुद्री पारिस्थितिक तंत्र की रक्षा के वादों के साथ संपन्न हुआ। (The third UNOC held in Nice, France, concluded with marine conservation commitments.)',
      'इस दौरान 170 से अधिक देशों ने \'नीस ओशन एक्शन प्लान\' को अपनाया। भारत ने हाई सीज़ ट्रीटी (BBNJ Agreement) की पुष्टि करने का वादा किया। (Nice Ocean Action Plan adopted by 170+ nations. India pledged to ratify the High Seas Treaty.)',
      'फ्रेंच पोलिनेशिया ने दुनिया का सबसे बड़ा समुद्री संरक्षित क्षेत्र (MPA) बनाने की घोषणा की। कई देशों ने गहरे समुद्र में खनन (Deep-sea mining) पर रोक लगाने का आह्वान किया। (French Polynesia to create the world\'s largest MPA. Coalition called for a pause on deep-sea mining.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000'
  },

  // --- SLOT 45: Topic 52 ---
  {
    id: 't45-q',
    type: 'quiz',
    title: 'INDIA POST PAYMENTS BANK (IPPB)',
    subtitle: 'इंडिया पोस्ट पेमेंट्स बैंक',
    content: [
      'डिजिटल भुगतान को बढ़ावा देने के लिए किस भुगतान बैंक को \'डिजिटल पेMENTS अवार्ड 2024-25\' से सम्मानित किया गया है?',
      'Which payments bank was honored with the \'Digital Payments Award 2024–25\' for promoting digital payments?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'एयरटेल पेमेंट्स बैंक (Airtel Payments Bank)' },
      { id: 'B', label: 'B', text: 'पेटीएम पेमेंट्स बैंक (Paytm Payments Bank)' },
      { id: 'C', label: 'C', text: 'इंडिया पोस्ट पेमेंट्स बैंक (IPPB)' },
      { id: 'D', label: 'D', text: 'फिनो पेमेंट्स बैंक (Fino Payments Bank)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't45-f',
    type: 'fact',
    title: 'INDIA POST PAYMENTS BANK (IPPB)',
    subtitle: 'इंडिया पोस्ट पेमेंट्स बैंक',
    content: [
      'वित्त मंत्रालय ने इंडिया पोस्ट पेमेंट्स बैंक (IPPB) को डिजिटल भुगतान और वित्तीय समावेशन को बढ़ावा देने के लिए डिजिटल पेमेंट्स अवार्ड 2024-25 प्रदान किया। (Ministry of Finance awarded IPPB for promoting digital payments and financial inclusion.)',
      'IPPB की स्थापना 2018 में हुई थी और यह पूरी तरह से भारत सरकार के स्वामित्व वाली इकाई है। यह 1.65 लाख डाकघरों के नेटवर्क का उपयोग करता है। (Launched in 2018; 100% Govt-owned. Leverages 1.65 lakh post offices.)',
      'यह बायोमेट्रिक-सक्षम स्मार्टफोन के माध्यम से पेपरलेस और कैशलेस बैंकिंग प्रदान करता है। वित्तीय वर्ष 2024-25 के प्रदर्शन सूचकांक में इसने पहला स्थान हासिल किया। (Provides paperless banking; ranked 1st in FY 2024-25 Performance Index.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1000'
  },

  // --- SLOT 46: Topic 53 ---
  {
    id: 't46-q',
    type: 'quiz',
    title: 'GHARIAL SPECIES CONSERVATION',
    subtitle: 'घड़ियाल प्रजाति संरक्षण कार्यक्रम',
    content: [
      'हाल ही में उत्तर प्रदेश के किस वन्यजीव अभयारण्य में \'घड़ियाल प्रजाति संरक्षण कार्यक्रम\' शुरू किया गया है?',
      'In which wildlife sanctuary of Uttar Pradesh was the \'Gharial Species Conservation Programme\' recently launched?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'दुधवा नेशनल पार्क (Dudhwa National Park)' },
      { id: 'B', label: 'B', text: 'कतर्नियाघाट वन्यजीव अभयारण्य (Katarniaghat Wildlife Sanctuary)' },
      { id: 'C', label: 'C', text: 'चंबल अभयारण्य (Chambal Sanctuary)' },
      { id: 'D', label: 'D', text: 'चंद्रप्रभा अभयारण्य (Chandraprabha Sanctuary)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't46-f',
    type: 'fact',
    title: 'GHARIAL SPECIES CONSERVATION',
    subtitle: 'घड़ियाल प्रजाति संरक्षण कार्यक्रम',
    content: [
      'केंद्रीय पर्यावरण मंत्री ने कतर्नियाघाट वन्यजीव अभयारण्य की गेरुआ नदी में घड़ियाल के बच्चों को छोड़कर इस कार्यक्रम की शुरुआत की। (Environment Minister launched the programme by releasing Gharials into the Gerua River, Katarniaghat.)',
      'घड़ियाल (Gavialis Gangeticus) केवल मछलियाँ खाते हैं और नर-भक्षी नहीं होते। नर घड़ियाल की थूथन पर घड़े जैसा उभार होता है। (Gharials feed on fish and are not man-eaters. Males have a bulbous knob on the snout.)',
      'घड़ियाल का IUCN स्टेटस \'गंभीर रूप से लुप्तप्राय\' (Critically Endangered) है। यह वन्यजीव (संरक्षण) अधिनियम, 1972 की अनुसूची 1 के तहत सूचीबद्ध है। \'प्रोजेक्ट क्रोकोडाइल\' 1975 में शुरू किया गया था। (Gharials are Critically Endangered; listed under Schedule 1. Project Crocodile started in 1975.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=1000'
  },

  // --- SLOT 47: Topic 54 ---
  {
    id: 't47-q',
    type: 'quiz',
    title: 'OPERATION MIDNIGHT HAMMER',
    subtitle: 'ऑपरेशन मिडनाइट हैमर',
    content: [
      '\'ऑपरेशन मिडनाइट हैमर\' (Operation Midnight Hammer) किस देश के परमाणु ठिकानों पर अमेरिका द्वारा किए गए हमलों का नाम है?',
      '\'Operation Midnight Hammer\' is the name of US strikes on nuclear installations of which country?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'उत्तर कोरिया (North Korea)' },
      { id: 'B', label: 'B', text: 'रूस (Russia)' },
      { id: 'C', label: 'C', text: 'ईरान (Iran)' },
      { id: 'D', label: 'D', text: 'इराक (Iraq)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't47-f',
    type: 'fact',
    title: 'OPERATION MIDNIGHT HAMMER',
    subtitle: 'ऑपरेशन मिडनाइट हैमर',
    content: [
      'अमेरिका ने ईरान के तीन प्रमुख परमाणु ठिकानों—नतांज, फोर्डो और इस्फहान—पर हवाई हमले किए, जिन्हें \'ऑपरेशन मिडनाइट हैमर\' नाम दिया गया। (US attacked Iranian nuclear sites in Natanz, Fordow, and Isfahan under \'Operation Midnight Hammer\'.)',
      'यह हमला इजरायल के साथ चल रहे युद्ध के बीच ईरान के परमाणु बुनियादी ढांचे को लक्षित करने वाला पहला प्रत्यक्ष अमेरिकी सैन्य हस्तक्षेप है। (First direct US military intervention targeting Iran\'s nuclear infrastructure during its conflict with Israel.)',
      'फोर्डो (Fordow) एक पहाड़ के 300 फीट नीचे स्थित है, जहाँ ईरान पर हथियार बनाने के उद्देश्य से यूरेनियम को समृद्ध (enrich) करने का आरोप है। (Fordow is 300ft underground, allegedly used for uranium enrichment for weapons.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c841de9d21a?q=80&w=1000'
  },

  // --- SLOT 48: Topic 55 ---
  {
    id: 't48-q',
    type: 'quiz',
    title: 'PROJECT 17A: INS NILGIRI',
    subtitle: 'प्रोजेक्ट 17A स्टील्थ फ्रिगेट: आईएनएस नीलगिरी',
    content: [
      'प्रोजेक्ट 17A के तहत निर्मित पहला स्वदेशी स्टील्थ फ्रिगेट कौन सा है जो पूर्वी नौसेना कमान में शामिल हुआ है?',
      'Which is the first indigenously built Project 17A stealth frigate to join the Eastern Naval Command?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'आईएनएस शिवालिक (INS Shivalik)' },
      { id: 'B', label: 'B', text: 'आईएनएस नीलगिरी (INS Nilgiri)' },
      { id: 'C', label: 'C', text: 'आईएनएस उदयगिरी (INS Udaygiri)' },
      { id: 'D', label: 'D', text: 'आईएनएस विंध्यगिरी (INS Vindhyagiri)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't48-f',
    type: 'fact',
    title: 'PROJECT 17A: INS NILGIRI',
    subtitle: 'प्रोजेक्ट 17A स्टील्थ फ्रिगेट: आईएनएस नीलगिरी',
    content: [
      'आईएनएस नीलगिरी विशाखापत्तनम बंदरगाह पर पूर्वी नौसेना कमान के \'सनराइज फ्लीट\' में शामिल होने के लिए पहुँचा। (INS Nilgiri arrived to join Eastern Naval Command’s Sunrise Fleet.)',
      'यह मझगांव डॉक शिपबिल्डर्स लिमिटेड (MDL) द्वारा निर्मित प्रोजेक्ट 17A का पहला स्टील्थ फ्रिगेट है। यह शिवालिक श्रेणी का उन्नत संस्करण है। (First Project 17A stealth frigate built by MDL; follow-on to Shivalik class.)',
      'इसे एंटी-एयर, एंटी-सरफेस और एंटी-सबमरीन युद्ध के लिए डिज़ाइन किया गया है। इस श्रेणी के अन्य जहाजों में हिमगिरी, तारागिरी, उदयगिरी और विंध्यगिरी शामिल हैं। (Equipped for anti-air, anti-surface, and anti-submarine warfare. Other ships in class: Himgiri, Taragiri, etc.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000'
  },

  // --- SLOT 49: Topic 56 ---
  {
    id: 't49-q',
    type: 'quiz',
    title: 'INS TAMAL: MULTI-ROLE FRIGATE',
    subtitle: 'आईएनएस तमाल: मल्टी-रोल फ्रिगेट',
    content: [
      'भारतीय नौसेना का वह अंतिम युद्धपोत कौन सा है जिसे भारत के बाहर (रूस में) निर्मित किया गया है?',
      'Which is the last warship of the Indian Navy to have been built outside India (in Russia)?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'आईएनएस तलवार (INS Talwar)' },
      { id: 'B', label: 'B', text: 'आईएनएस तमाल (INS Tamal)' },
      { id: 'C', label: 'C', text: 'आईएनएस तुशील (INS Tushil)' },
      { id: 'D', label: 'D', text: 'आईएनएस तेग (INS Teg)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't49-f',
    type: 'fact',
    title: 'INS TAMAL: MULTI-ROLE FRIGATE',
    subtitle: 'आईएनएस तमाल: मल्टी-रोल फ्रिगेट',
    content: [
      'भारतीय नौसेना रूस के कलिनिनग्राद में अपने नवीनतम स्टील्थ मल्टी-रोल फ्रिगेट \'आईएनएस तमाल\' को कमीशन करने के लिए तैयार है। (Navy to commission stealth frigate INS Tamal in Kaliningrad, Russia.)',
      'यह भारत के बाहर निर्मित होने वाला अंतिम युद्धपोत है। यह \'तुशील\' श्रेणी का दूसरा जहाज है, जो तलवार और तेग श्रेणियों का उन्नत संस्करण है। (Last warship built outside India; 2nd of Tushil class.)',
      'इसमें 26% स्वदेशी घटक हैं, जिनमें ब्रह्मोस क्रूज मिसाइल भी शामिल है। इसका नया डिज़ाइन बेहतर स्टील्थ सुविधाएँ प्रदान करता है। (Contains 26% indigenous parts including BrahMos missile; features enhanced stealth.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000'
  },

  // --- SLOT 50: Topic 57 ---
  {
    id: 't50-q',
    type: 'quiz',
    title: 'NAVYA INITIATIVE',
    subtitle: 'नव्या (NAVYA) पहल',
    content: [
      '\'नव्या\' (NAVYA) पहल का मुख्य उद्देश्य किशोरियों (16-18 वर्ष) को किस क्षेत्र में कौशल प्रदान करना है?',
      'What is the primary objective of the \'NAVYA\' initiative for adolescent girls (16-18 years)?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'केवल सिलाई और बुनाई (Only sewing and knitting)' },
      { id: 'B', label: 'B', text: 'गैर-पारंपरिक नौकरी भूमिकाएँ (Non-traditional job roles)' },
      { id: 'C', label: 'C', text: 'खाना पकाना (Cooking)' },
      { id: 'D', label: 'D', text: 'प्राथमिक शिक्षा (Primary education)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't50-f',
    type: 'fact',
    title: 'NAVYA INITIATIVE',
    subtitle: 'नव्या (NAVYA) पहल',
    content: [
      'महिला एवं बाल विकास मंत्रालय और कौशल विकास मंत्रालय ने संयुक्त रूप से \'नव्या\' पहल शुरू की। (MWCD and MSDE launched the NAVYA initiative.)',
      '\'नव्या\' का अर्थ है - \'नर्चरिंग एस्पिरेशंस थ्रू वोकेशनल ट्रेनिंग फॉर यंग एडोलसेंट गर्ल्स\'। यह 16-18 वर्ष की लड़कियों को गैर-पारंपरिक भूमिकाओं में कौशल प्रदान करने के लिए एक पायलट प्रोजेक्ट है। (NAVYA aims to skill girls aged 16-18 in non-traditional job roles.)',
      'इसे देश के 27 जिलों में लागू किया जा रहा है। यह प्रधानमंत्री कौशल विकास योजना (PMKVY) जैसी मौजूदा योजनाओं का लाभ उठाएगा। (Implemented in 27 districts; leverages schemes like PMKVY.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000'
  },

  // --- SLOT 51: Topic 58 ---
  {
    id: 't51-q',
    type: 'quiz',
    title: 'SDG INDEX 2025',
    subtitle: 'सतत विकास लक्ष्य (SDG) सूचकांक 2025',
    content: [
      '\'सतत विकास लक्ष्य (SDG) सूचकांक 2025\' में भारत की रैंकिंग क्या है?',
      'What is India\'s rank in the \'Sustainable Development Goals (SDG) Index 2025\'?'
    ],
    options: [
      { id: 'A', label: 'A', text: '109वीं (109th)' },
      { id: 'B', label: 'B', text: '99वीं (99th)' },
      { id: 'C', label: 'C', text: '121वीं (121st)' },
      { id: 'D', label: 'D', text: '85वीं (85th)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't51-f',
    type: 'fact',
    title: 'SDG INDEX 2025',
    subtitle: 'सतत विकास लक्ष्य (SDG) सूचकांक 2025',
    content: [
      'भारत ने पहली बार सतत विकास लक्ष्य (SDG) सूचकांक में शीर्ष 100 देशों में जगह बनाई है। (India has, for the first time, secured a position among the top 100 countries in the SDG Index.)',
      'भारत 167 देशों में 99वें स्थान पर है, जिसका स्कोर 67 है। फिनलैंड, स्वीडन और डेनमार्क शीर्ष तीन स्थानों पर हैं। पूर्वी और दक्षिण एशिया 2015 के बाद से सबसे तेजी से प्रगति करने वाला क्षेत्र है। (India ranked 99th out of 167 with a score of 67. Finland, Sweden, and Denmark hold the top spots. East and South Asia is the fastest progressing region.)',
      'SDGs को 2015 में संयुक्त राष्ट्र द्वारा \'एजेंडा 2030\' के तहत अपनाया गया था। इसमें 17 लक्ष्य और 169 संबद्ध लक्ष्य शामिल हैं, जो 1 जनवरी 2016 से लागू हुए। (SDGs adopted in 2015 under Agenda 2030; includes 17 goals and 169 targets effective from Jan 1, 2016.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557426482-28855efc6210?q=80&w=1000'
  },

  // --- SLOT 52: Topic 59 ---
  {
    id: 't52-q',
    type: 'quiz',
    title: 'DIGITAL PAYMENT INTELLIGENCE (DPIP)',
    subtitle: 'डिजिटल भुगतान इंटेलिजेंस प्लेटफॉर्म',
    content: [
      'डिजिटल भुगतान इंटेलिजेंस प्लेटफॉर्म (DPIP) को मुख्य रूप से किस संस्था के मार्गदर्शन में विकसित किया जा रहा है?',
      'Under the guidance of which institution is the Digital Payment Intelligence Platform (DPIP) primarily being developed?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'सेबी (SEBI)' },
      { id: 'B', label: 'B', text: 'वित्त मंत्रालय (Ministry of Finance)' },
      { id: 'C', label: 'C', text: 'भारतीय रिजर्व बैंक (RBI)' },
      { id: 'D', label: 'D', text: 'एनपीसीआई (NPCI)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't52-f',
    type: 'fact',
    title: 'DIGITAL PAYMENT INTELLIGENCE (DPIP)',
    subtitle: 'डिजिटल भुगतान इंटेलिजेंस प्लेटफॉर्म',
    content: [
      'सार्वजनिक और निजी क्षेत्र के बैंक धोखाधड़ी रोकने के लिए भारतीय रिजर्व बैंक (RBI) के मार्गदर्शन में DPII विकसित कर रहे हैं। (Major banks are developing DPIP under RBI guidance to strengthen fraud risk management.)',
      'रिजर्व बैंक इनोवेशन हब (RBIH) 5-10 बैंकों के सहयोग से एक प्रोटोटाइप बना रहा है। यह रीयल-टाइम डेटा शेयरिंग के माध्यम से डिजिटल वित्तीय धोखाधड़ी का पता लगाएगा। (RBI Innovation Hub is building a prototype with banks. It detects digital fraud via real-time data sharing.)',
      'वित्त वर्ष 2025 की रिपोर्ट के अनुसार, बैंक धोखाधड़ी तीन गुना बढ़कर ₹36,014 करोड़ हो गई है। सार्वजनिक क्षेत्र के बैंकों ने ऋण/अग्रिम में सबसे अधिक धोखाधड़ी की सूचना दी। (Bank frauds rose threefold to ₹36,014 crore in FY25; PSBs reported major frauds in loans/advances.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611974717482-58434749f7e5?q=80&w=1000'
  },

  // --- SLOT 53: Topic 60 ---
  {
    id: 't53-q',
    type: 'quiz',
    title: 'SCO DEFENCE MINISTERS’ MEETING',
    subtitle: 'एससीओ रक्षा मंत्रियों की बैठक',
    content: [
      'भारत ने किस शहर में आयोजित शंघाई सहयोग संगठन (SCO) के रक्षा मंत्रियों की बैठक में संयुक्त घोषणापत्र पर हस्ताक्षर करने से इनकार कर दिया?',
      'In which city did India refuse to sign the joint declaration at the SCO Defence Ministers’ meeting?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'बीजिंग, चीन (Beijing, China)' },
      { id: 'B', label: 'B', text: 'ताशकंद, उज्बेकिस्तान (Tashkent, Uzbekistan)' },
      { id: 'C', label: 'C', text: 'किंगदाओ, चीन (Qingdao, China)' },
      { id: 'D', label: 'D', text: 'नई दिल्ली, भारत (New Delhi, India)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't53-f',
    type: 'fact',
    title: 'SCO DEFENCE MINISTERS’ MEETING',
    subtitle: 'एससीओ रक्षा मंत्रियों की बैठक',
    content: [
      'भारत ने किंगदाओ, चीन में आयोजित SCO रक्षा मंत्रियों की बैठक में संयुक्त घोषणापत्र पर हस्ताक्षर करने से इनकार कर दिया। (India refused to sign the joint declaration at the SCO Defence Ministers’ meeting in Qingdao.)',
      'भारत दस्तावेज़ की भाषा से असंतुष्ट था क्योंकि इसमें सीमा पार आतंकवादी गतिविधियों (विशेष रूप से पहलगाम हमले) का कोई उल्लेख नहीं था। (India was dissatisfied as there was no mention of cross-border terrorism, especially the Pahalgam attack.)',
      'SCO की स्थापना 2001 में हुई थी (शंघाई फाइव से विकसित)। भारत 2017 में पूर्ण सदस्य बना। इसका मुख्यालय बीजिंग (सचिवालय) और ताशकंद (RATS) में है। (SCO established in 2001; India joined in 2017. HQs in Beijing and Tashkent.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000'
  },

  // --- SLOT 54: Topic 61 ---
  {
    id: 't54-q',
    type: 'quiz',
    title: 'BIHAR’S FIRST NUCLEAR PLANT',
    subtitle: 'बिहार का पहला परमाणु ऊर्जा संयंत्र',
    content: [
      'बिहार के पहले परमाणु ऊर्जा संयंत्र में किस उन्नत तकनीक का उपयोग किए जाने की योजना है?',
      'Which advanced technology is planned to be used in Bihar\'s first nuclear power plant?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'प्रेशराइज्ड हैवी वॉटर रिएक्टर (PHWR)' },
      { id: 'B', label: 'B', text: 'स्मॉल मॉड्यूलर रिएक्टर (SMRs)' },
      { id: 'C', label: 'C', text: 'फास्ट ब्रीडर रिएक्टर (FBR)' },
      { id: 'D', label: 'D', text: 'लिक्विड मेटल रिएक्टर (LMR)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't54-f',
    type: 'fact',
    title: 'BIHAR’S FIRST NUCLEAR PLANT',
    subtitle: 'बिहार का पहला परमाणु ऊर्जा संयंत्र',
    content: [
      'बिहार अपना पहला परमाणु ऊर्जा संयंत्र स्थापित करने जा रहा है, जो केंद्र सरकार के राष्ट्रीय परमाणु ऊर्जा मिशन का हिस्सा है। (Bihar is set to host its first nuclear power plant under the National Nuclear Energy Mission.)',
      'इसमें स्मॉल मॉड्यूलर रिएक्टर (SMRs) जैसी उन्नत तकनीकों का उपयोग किया जाएगा। बिहार में 1,000 मेगावाट की बैटरी स्टोरेज परियोजना को भी मंजूरी दी गई है। (Will use Small Modular Reactors; a 1,000 MW battery storage project also approved in Bihar.)',
      'SMRs की क्षमता प्रति यूनिट 300 MW तक होती है। भारत का लक्ष्य 2047 तक परमाणु क्षमता 100 GW करना है (वर्तमान में 8 GW)। परमाणु ऊर्जा मिशन के लिए ₹20,000 करोड़ का आवंटन किया गया है। (SMR capacity up to 300 MW per unit. India\'s target: 100 GW nuclear capacity by 2047.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000'
  },

  // --- SLOT 55: Topic 62 ---
  {
    id: 't55-q',
    type: 'quiz',
    title: 'FUTURE FRONT REPORT',
    subtitle: 'नीति आयोग की फ्यूचर फ्रंट रिपोर्ट',
    content: [
      'नीति आयोग द्वारा जारी \'फ्यूचर फ्रंट\' श्रृंखला के तीसरे संस्करण का शीर्षक क्या है?',
      'What is the title of the third edition of the \'Future Front\' series released by NITI Aayog?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'डिजिटल इंडिया 2.0 (Digital India 2.0)' },
      { id: 'B', label: 'B', text: 'India’s Data Imperative: The Pivot Towards Quality' },
      { id: 'C', label: 'C', text: 'सस्टेनेबल डेटा ग्रोथ (Sustainable Data Growth)' },
      { id: 'D', label: 'D', text: 'एआई फॉर गवर्नेंस (AI for Governance)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't55-f',
    type: 'fact',
    title: 'FUTURE FRONT REPORT',
    subtitle: 'नीति आयोग की फ्यूचर फ्रंट रिपोर्ट',
    content: [
      'नीति आयोग ने अपनी त्रैमासिक अंतर्दृष्टि श्रृंखला \'फ्यूचर फ्रंट\' का तीसरा संस्करण जारी किया। (NITI Aayog released the 3rd edition of its quarterly insights series \'Future Front\'.)',
      'यह रिपोर्ट डिजिटल गवर्नेंस को मजबूत करने के लिए डेटा गुणवत्ता (Data Quality) की तत्काल आवश्यकता पर जोर देती है। खराब डेटा के कारण कल्याणकारी खर्च में 4-7% की वृद्धि हो सकती है। (Underscores the need for robust data quality; poor data leads to 4–7% welfare overspending.)',
      'भारत का डिजिटल बुनियादी ढांचा (UPI, आधार) बड़े पैमाने पर विकसित हुआ है। रिपोर्ट डेटा अखंडता के लिए राष्ट्रीय/राज्य/जिला स्तर पर \'डेटा कस्टोडियन\' नामित करने का सुझाव देती है। (India\'s digital infrastructure is massive; report suggests designating \'data custodians\' for data integrity.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda53666cf?q=80&w=1000'
  },

  // --- SLOT 56: Topic 63 ---
  {
    id: 't56-q',
    type: 'quiz',
    title: 'QUANTUM COMPUTING VALLEY',
    subtitle: 'भारत की पहली क्वांटम कंप्यूटिंग वैली',
    content: [
      'भारत की पहली \'क्वांटम कंप्यूटिंग वैली\' (Quantum Computing Valley) कहाँ लॉन्च की जाएगी?',
      'Where will the first \'Quantum Computing Valley\' of India be launched?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'बेंगलुरु, कर्नाटक (Bengaluru, Karnataka)' },
      { id: 'B', label: 'B', text: 'अमरावती, आंध्र प्रदेश (Amaravati, Andhra Pradesh)' },
      { id: 'C', label: 'C', text: 'हैदराबाद, तेलंगाना (Hyderabad, Telangana)' },
      { id: 'D', label: 'D', text: 'पुणे, महाराष्ट्र (Pune, Maharashtra)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't56-f',
    type: 'fact',
    title: 'QUANTUM COMPUTING VALLEY',
    subtitle: 'भारत की पहली क्वांटम कंप्यूटिंग वैली',
    content: [
      'जनवरी 2026 तक आंध्र प्रदेश के अमरावती में भारत की पहली क्वांटम कंप्यूटिंग वैली लॉन्च की जाएगी। (The first Quantum Computing Valley of India will be launched in Amaravati, Andhra Pradesh by Jan 2026.)',
      'यह पार्क अनुसंधान, नवाचार और औद्योगिक विकास का समर्थन करेगा और लाखों पेशेवरों को रोजगार देगा। यह राष्ट्रीय क्वांटम मिशन (NQM) के अनुरूप है। (Park supports R&D and innovation; aligns with National Quantum Mission.)',
      'भारत सरकार ने 2023 में 2030-31 तक के लिए NQM को मंजूरी दी थी। इसका उद्देश्य 8 वर्षों में 50-1000 भौतिक क्विबिट वाले इंटरमीडिएट-स्केल क्वांटम कंप्यूटर विकसित करना है। (NQM approved in 2023 for period till 2030-31; aims to develop 50-1000 qubit computers in 8 years.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000'
  },

  // --- SLOT 57: Topic 64 ---
  {
    id: 't57-q',
    type: 'quiz',
    title: 'THE UNITED NATIONS AT 80',
    subtitle: 'संयुक्त राष्ट्र की 80वीं वर्षगांठ',
    content: [
      'संयुक्त राष्ट्र चार्टर (UN Charter) पर 26 जून, 1945 को किस शहर में हस्ताक्षर किए गए थे?',
      'In which city was the UN Charter signed on June 26, 1945?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'न्यूयॉर्क (New York)' },
      { id: 'B', label: 'B', text: 'लंदन (London)' },
      { id: 'C', label: 'C', text: 'सैन फ्रांसिस्को (San Francisco)' },
      { id: 'D', label: 'D', text: 'जिनेवा (Geneva)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't57-f',
    type: 'fact',
    title: 'THE UNITED NATIONS AT 80',
    subtitle: 'संयुक्त राष्ट्र की 80वीं वर्षगांठ',
    content: [
      '26 जून, 2025 को संयुक्त राष्ट्र चार्टर पर हस्ताक्षर के 80 वर्ष पूरे हुए। (June 26, 2025 marks 80 years of signing the UN Charter.)',
      'संयुक्त राष्ट्र महासचिव ने संगठन को आधुनिक बनाने के लिए \'UN80 पहल\' शुरू की है। इसमें एआई टूल्स का उपयोग करके पुराने शासनादेशों (mandates) की समीक्षा करना शामिल है। (UN80 Initiative launched to modernize the UN, including AI-based mandate reviews.)',
      'संयुक्त राष्ट्र के 6 मुख्य अंग हैं: महासभा, सुरक्षा परिषद, ECOSOC, न्यास परिषद, ICJ और सचिवालय। भारत \'G4\' देशों का हिस्सा है जो सुरक्षा परिषद विस्तार की वकालत करते हैं। (6 principal organs of UN; India is part of G4 nations advocating SC reform.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557426482-28855efc6210?q=80&w=1000'
  },

  // --- SLOT 58: Topic 65 ---
  {
    id: 't58-q',
    type: 'quiz',
    title: 'SOUTH ASIA POTATO CENTRE',
    subtitle: 'अंतर्राष्ट्रीय आलू केंद्र की दक्षिण एशिया इकाई',
    content: [
      'अंतर्राष्ट्रीय आलू केंद्र (CIP) का दक्षिण एशिया क्षेत्रीय केंद्र भारत के किस शहर में स्थापित किया जाएगा?',
      'In which Indian city will the South Asia regional centre of the International Potato Center (CIP) be established?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'शिमला, हिमाचल प्रदेश (Shimla, HP)' },
      { id: 'B', label: 'B', text: 'आगरा, उत्तर प्रदेश (Agra, UP)' },
      { id: 'C', label: 'C', text: 'कोलकाता, पश्चिम बंगाल (Kolkata, WB)' },
      { id: 'D', label: 'D', text: 'पटना, बिहार (Patna, Bihar)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't58-f',
    type: 'fact',
    title: 'SOUTH ASIA POTATO CENTRE',
    subtitle: 'अंतर्राष्ट्रीय आलू केंद्र की दक्षिण एशिया इकाई',
    content: [
      'केंद्र सरकार ने उत्तर प्रदेश के आगरा में अंतर्राष्ट्रीय आलू केंद्र (CIP) के दक्षिण एशिया क्षेत्रीय केंद्र की स्थापना को मंजूरी दे दी है। (Govt cleared a proposal for the CIP South Asia regional centre in Agra, UP.)',
      'यह केंद्र आलू और शकरकंद की उत्पादकता में सुधार करके खाद्य सुरक्षा और किसानों की आय बढ़ाने का काम करेगा। (Aims to improve potato/sweet potato productivity to boost food security and income.)',
      'भारत दुनिया का दूसरा सबसे बड़ा आलू उत्पादक और उपभोक्ता है (शीर्ष पर चीन है)। उत्तर प्रदेश और पश्चिम बंगाल भारत में आलू उत्पादन में अग्रणी हैं। (India is 2nd largest producer after China. UP and WB lead production in India.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1000'
  },

  // --- SLOT 59: Topic 66 ---
  {
    id: 't59-q',
    type: 'quiz',
    title: 'NEW GLOBAL POVERTY LINE',
    subtitle: 'नई वैश्विक गरीबी रेखा',
    content: [
      'विश्व बैंक द्वारा संशोधित नई अंतर्राष्ट्रीय गरीबी रेखा (IPL) क्या है?',
      'What is the new International Poverty Line (IPL) revised by the World Bank?'
    ],
    options: [
      { id: 'A', label: 'A', text: '$2.15/दिन (2017 PPP)' },
      { id: 'B', label: 'B', text: '$1.90/दिन (2011 PPP)' },
      { id: 'C', label: 'C', text: '$3.00/दिन (2021 PPP)' },
      { id: 'D', label: 'D', text: '$5.50/दिन (2021 PPP)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't59-f',
    type: 'fact',
    title: 'NEW GLOBAL POVERTY LINE',
    subtitle: 'नई वैश्विक गरीबी रेखा',
    content: [
      'विश्व बैंक ने वैश्विक गरीबी रेखा को $2.15/दिन से बढ़ाकर $3.00/दिन कर दिया है। (World Bank raised the International Poverty Line from $2.15/day to $3.00/day.)',
      'नई रेखा के तहत 2022-23 में भारत की गरीबी 5.25% रही, जबकि पुरानी $2.15 रेखा के तहत यह गिरकर 2.35% रह गई। (Under the new line, India\'s poverty was 5.25% in 2022-23; under the old line, it dropped to 2.35%.)',
      'भारत ने अपने नवीनतम घरेलू उपभोग व्यय सर्वेक्षण (HCES) में संशोधित मिश्रित रिकॉल अवधि (MMRP) पद्धति को अपनाया है। (India adopted Modified Mixed Recall Period method for HCES.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611974717482-58434749f7e5?q=80&w=1000'
  },

  // --- SLOT 60: Topic 67 ---
  {
    id: 't60-q',
    type: 'quiz',
    title: 'JIYO PARSI SCHEME',
    subtitle: 'जियो पारसी योजना',
    content: [
      '\'जियो पारसी\' योजना मुख्य रूप से किस उद्देश्य के लिए शुरू की गई है?',
      'What is the primary objective of the \'Jiyo Parsi\' scheme?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'पारसी स्मारकों का संरक्षण (Preserving Parsi monuments)' },
      { id: 'B', label: 'B', text: 'पारसी समुदाय की जनसांख्यिकीय गिरावट को रोकना (Addressing the demographic decline of Parsi community)' },
      { id: 'C', label: 'C', text: 'पारसी उद्यमियों को ऋण (Loans to Parsi entrepreneurs)' },
      { id: 'D', label: 'D', text: 'उच्च शिक्षा के लिए छात्रवृत्ति (Scholarships for higher education)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't60-f',
    type: 'fact',
    title: 'JIYO PARSI SCHEME',
    subtitle: 'जियो पारसी योजना',
    content: [
      'अल्पसंख्यक कार्य मंत्रालय ने मुंबई में जियो पारसी योजना के लाभार्थियों के लिए बायोमेट्रिक प्रमाणीकरण अभियान चलाया। (Ministry of Minority Affairs conducted a biometric drive for Jiyo Parsi beneficiaries.)',
      'यह 2013-14 में शुरू की गई एक केंद्रीय क्षेत्र की योजना है। यह आईवीएफ (IVF) जैसे बांझपन उपचार के लिए वित्तीय सहायता और पारसी जोड़ों को मासिक सहायता प्रदान करती है। (Central Sector Scheme launched in 2013-14. Provides financial aid for IVF and monthly support to couples.)',
      '2011 की जनगणना के अनुसार पारसी जनसंख्या 57,264 थी। महाराष्ट्र में पारसियों की संख्या सबसे अधिक (44,854) है, उसके बाद गुजरात है। (Parsi population was 57,264 in 2011. Maharashtra has the highest population.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000'
  },

  // --- SLOT 61: Topic 68 ---
  {
    id: 't61-q',
    type: 'quiz',
    title: 'MARITIME NBFC: SMFCL',
    subtitle: 'भारत की पहली समुद्री एनबीएफसी',
    content: [
      'भारत की पहली समुद्री क्षेत्र की एनबीएफसी (NBFC) का नाम क्या है?',
      'What is the name of India\'s first NBFC in the maritime sector?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'पोर्ट्स फाइनेंस लिमिटेड (Ports Finance Ltd)' },
      { id: 'B', label: 'B', text: 'सागरमाला फाइनेंस कॉर्पोरेशन लिमिटेड (SMFCL)' },
      { id: 'C', label: 'C', text: 'मेरीटाइम इन्वेस्टमेंट बैंक (Maritime Investment Bank)' },
      { id: 'D', label: 'D', text: 'शिपिंग डेवलपमेंट कंपनी (Shipping Development Company)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't61-f',
    type: 'fact',
    title: 'MARITIME NBFC: SMFCL',
    subtitle: 'भारत की पहली समुद्री एनबीएफसी',
    content: [
      'केंद्रीय पत्तन, पोत परिवहन और जलमार्ग मंत्री ने सागरमाला फाइनेंस कॉर्पोरेशन लिमिटेड (SMFCL) का उद्घाटन किया। (Union Shipping Minister inaugurated Sagarmala Finance Corporation Limited.)',
      'यह भारत की पहली समुद्री क्षेत्र की एनबीएफसी (NBFC) है जो जहाजों के निर्माण, क्रूज पर्यटन और समुद्री शिक्षा के लिए वित्तीय समाधान प्रदान करेगी। (India’s first maritime NBFC offering financial solutions for shipbuilding, cruise tourism, etc.)',
      'यह आरबीआई (RBI) के पास एनबीएफसी के रूप में पंजीकृत है। एनबीएफसी बैंक की तरह मांग जमा (Demand Deposits) स्वीकार नहीं कर सकते और चेक जारी नहीं कर सकते। (Registered as NBFC with RBI. NBFCs cannot accept demand deposits or issue cheques.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1000'
  },

  // --- SLOT 62: Topic 69 ---
  {
    id: 't62-q',
    type: 'quiz',
    title: 'CURRENT ACCOUNT SURPLUS',
    subtitle: 'चालू खाता अधिशेष',
    content: [
      'वित्त वर्ष 2025 की चौथी तिमाही (जनवरी-मार्च) में भारत का चालू खाता अधिशेष (Surplus) कितना दर्ज किया गया?',
      'How much was India’s current account surplus recorded in Q4 (January-March) of FY25?'
    ],
    options: [
      { id: 'A', label: 'A', text: '$7 बिलियन ($7 billion)' },
      { id: 'B', label: 'B', text: '$13.5 बिलियन ($13.5 billion)' },
      { id: 'C', label: 'C', text: '$10 बिलियन ($10 billion)' },
      { id: 'D', label: 'D', text: '$20 बिलियन ($20 billion)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't62-f',
    type: 'fact',
    title: 'CURRENT ACCOUNT SURPLUS',
    subtitle: 'चालू खाता अधिशेष',
    content: [
      'भारतीय रिजर्व बैंक (RBI) के अनुसार, वित्त वर्ष 2025 की चौथी तिमाही में भारत का चालू खाता अधिशेष उम्मीद से अधिक $13.5 बिलियन रहा। (RBI reported a higher-than-expected current account surplus of $13.5 billion in Q4 FY25.)',
      'चालू खाता अधिशेष तब होता है जब अंतर्वाह (Inflows) बहिर्वाह (Outflows) से अधिक हो जाते हैं। यह एक मजबूत बाहरी स्थिति और विदेशी मुद्रा भंडार की मजबूती का संकेत देता है। (Surplus occurs when inflows exceed outflows. Indicates strong external position and strengthens forex reserves.)',
      'चालू खाते में वस्तुओं का व्यापार, सेवाओं का व्यापार, प्राथमिक आय (निवेश आय) और द्वितीयक आय (प्रेषण/रेमिटेंस) शामिल होते हैं। (Current Account comprises trade in goods, services, income, and remittances.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611974717482-58434749f7e5?q=80&w=1000'
  },

  // --- SLOT 63: Topic 70 ---
  {
    id: 't63-q',
    type: 'quiz',
    title: 'OPERATION DEEP MANIFEST',
    subtitle: 'ऑपरेशन डीप मैनिफेस्ट',
    content: [
      '\'ऑपरेशन डीप मैनिफेस्ट\' (Operation Deep Manifest) के तहत किस देश के मूल की वस्तुओं को अवैध रूप से दुबई के रास्ते लाने पर जब्त किया गया?',
      'Under \'Operation Deep Manifest\', goods from which country\'s origin were seized for being illicitly routed via Dubai?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'चीन (China)' },
      { id: 'B', label: 'B', text: 'पाकिस्तान (Pakistan)' },
      { id: 'C', label: 'C', text: 'ईरान (Iran)' },
      { id: 'D', label: 'D', text: 'तुर्की (Turkey)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't63-f',
    type: 'fact',
    title: 'OPERATION DEEP MANIFEST',
    subtitle: 'ऑपरेशन डीप मैनिफेस्ट',
    content: [
      'भारत के राजस्व खुफिया निदेशालय (DRI) ने दुबई के रास्ते अवैध रूप से लाई जा रही 1,115 मीट्रिक टन पाकिस्तानी मूल की वस्तुओं को जब्त किया। (DRI seized 1,115 metric tonnes of Pakistani-origin goods routed via Dubai.)',
      'पहलगाम हमले के बाद भारत ने पाकिस्तानी मूल की वस्तुओं के प्रत्यक्ष या अप्रत्यक्ष आयात पर पूर्ण प्रतिबंध लगा दिया है। (India imposed a ban on Pakistani-origin goods after the Pahalgam attack.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000'
  },

  // --- SLOT 64: Topic 71 ---
  {
    id: 't64-q',
    type: 'quiz',
    title: 'TITANS SPACE MISSION 2029',
    subtitle: 'टाइटन्स स्पेस मिशन 2029',
    content: [
      'अमेरिकी निजी एजेंसी टाइटन्स स्पेस इंडस्ट्रीज (TSI) के 2029 के अंतरिक्ष मिशन के लिए किस भारतीय को अंतरिक्ष यात्री उम्मीदवार के रूप में चुना गया है?',
      'Which Indian has been selected as an Astronaut Candidate for the 2029 space mission of the U.S. private agency Titans Space Industries (TSI)?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'राजा चारी (Raja Chari)' },
      { id: 'B', label: 'B', text: 'जाहन्वी डांगेती (Jahnavi Dangeti)' },
      { id: 'C', label: 'C', text: 'सिरीशा बांदला (Sirisha Bandla)' },
      { id: 'D', label: 'D', text: 'सुनीता विलियम्स (Sunita Williams)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't64-f',
    type: 'fact',
    title: 'TITANS SPACE MISSION 2029',
    subtitle: 'टाइटन्स स्पेस मिशन 2029',
    content: [
      'जाहन्वी डांगेती को टाइटन्स स्पेस इंडस्ट्रीज (TSI) के 2029 के मिशन के लिए अंतरिक्ष यात्री उम्मीदवार (ASCAN) चुना गया है। (Jahnavi Dangeti selected as ASCAN for the 2029 Titan Space Industries mission.)',
      'यह मिशन पृथ्वी की दो बार परिक्रमा करेगा और लगभग तीन घंटे तक निर्बाध शून्य गुरुत्वाकर्षण (Zero Gravity) प्रदान करेगा। (Crew will orbit Earth twice and witness nearly 3 hours of zero gravity.)',
      'जाहन्वी डांगेती पोलैंड में एनालॉग अंतरिक्ष यात्री प्रशिक्षण केंद्र (AATC) से सबसे कम उम्र की एनालॉग अंतरिक्ष यात्री भी बनी थीं। (Jahnavi became the youngest Analog Astronaut from AATC, Poland.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1000'
  },

  // --- SLOT 65: Topic 72 ---
  {
    id: 't65-q',
    type: 'quiz',
    title: 'ADAMYA: FAST PATROL VESSEL',
    subtitle: 'अदम्य: फास्ट पेट्रोल वेसल',
    content: [
      'भारतीय तटरक्षक बल (ICG) में शामिल किया गया पहला फास्ट पेट्रोल वेसल \'अदम्य\' (Adamya) किस शिपयार्ड द्वारा निर्मित है?',
      'The first Fast Patrol Vessel \'Adamya\' inducted into the Indian Coast Guard (ICG) is built by which shipyard?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'कोचीन शिपयार्ड (Cochin Shipyard)' },
      { id: 'B', label: 'B', text: 'मझगांव डॉक (Mazagon Dock)' },
      { id: 'C', label: 'C', text: 'गोवा शिपयार्ड लिमिटेड (GSL)' },
      { id: 'D', label: 'D', text: 'गार्डन रीच शिपबिल्डर्स (GRSE)' }
    ],
    correctOptionId: 'C'
  },
  {
    id: 't65-f',
    type: 'fact',
    title: 'ADAMYA: FAST PATROL VESSEL',
    subtitle: 'अदम्य: फास्ट पेट्रोल वेसल',
    content: [
      'गोवा में \'अदम्य\' को भारतीय तटरक्षक बल (ICG) में शामिल किया गया। (Adamya was inducted into the Indian Coast Guard in Goa.)',
      'यह गोवा शिपयार्ड लिमिटेड (GSL) के आठ फास्ट पेट्रोल वेसल (FPV) प्रोजेक्ट का पहला जहाज है। इसमें नियंत्रणीय पिच प्रोपेलर (CPPs) और स्वदेशी गियरबॉक्स हैं। (First FPV of the GSL project; features Controllable Pitch Propellers and indigenous gearboxes.)',
      'यह 30mm CRN-91 गन और रिमोट-कंट्रोल गन से लैस है। यह खोज और बचाव मिशन तथा विशेष आर्थिक क्षेत्र (EEZ) की सुरक्षा में मदद करेगा। (Equipped with CRN-91 gun; helps in search and rescue and EEZ protection.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000'
  },

  // --- SLOT 66: Topic 73 ---
  {
    id: 't66-q',
    type: 'quiz',
    title: 'ADI KARMYOGI PROGRAMME',
    subtitle: 'आदि कर्मयोगी कार्यक्रम',
    content: [
      '\'आदि कर्मयोगी\' कार्यक्रम किस मंत्रालय द्वारा जनजातीय कल्याण वितरण में शामिल हितधारकों की क्षमता बढ़ाने के लिए शुरू किया गया है?',
      'The \'Adi Karmyogi\' programme has been launched by which Ministry to capacitate stakeholders involved in tribal welfare delivery?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'जनजातीय कार्य मंत्रालय (Ministry of Tribal Affairs)' },
      { id: 'B', label: 'B', text: 'गृह मंत्रालय (Ministry of Home Affairs)' },
      { id: 'C', label: 'C', text: 'शिक्षा मंत्रालय (Ministry of Education)' },
      { id: 'D', label: 'D', text: 'ग्रामीण विकास मंत्रालय (Ministry of Rural Development)' }
    ],
    correctOptionId: 'A'
  },
  {
    id: 't66-f',
    type: 'fact',
    title: 'ADI KARMYOGI PROGRAMME',
    subtitle: 'आदि कर्मयोगी कार्यक्रम',
    content: [
      'जनजातीय कार्य मंत्रालय ने \'आदि कर्मयोगी\' कार्यक्रम शुरू किया। (The Ministry of Tribal Affairs launched the Adi Karmyogi Programme.)',
      'इसका लक्ष्य जनजातीय कल्याण में शामिल लगभग 20 लाख अधिकारियों और फ्रंटलाइन कार्यकर्ताओं को प्रशिक्षित करना है। यह स्वास्थ्य (विशेषकर सिकल सेल रोग) और शिक्षा जैसे क्षेत्रों पर ध्यान केंद्रित करेगा। (Aims to capacitate 20 lakh stakeholders; focuses on healthcare like Sickle Cell Disease and education.)',
      'यह व्यापक "मिशन कर्मयोगी" (2020 में लॉन्च) के अनुरूप है, जो सिविल सेवा क्षमता निर्माण का राष्ट्रीय कार्यक्रम है। (Aligns with Mission Karmayogi launched in 2020.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000'
  },

  // --- SLOT 67: Topic 74 ---
  {
    id: 't67-q',
    type: 'quiz',
    title: "INDIA’S EXTERNAL DEBT",
    subtitle: 'भारत का विदेशी ऋण',
    content: [
      'मार्च 2025 के अंत में भारत का विदेशी ऋण (External Debt) बढ़कर कितना हो गया है?',
      'What was India\'s external debt at the end of March 2025?'
    ],
    options: [
      { id: 'A', label: 'A', text: '$668.8 बिलियन ($668.8 billion)' },
      { id: 'B', label: 'B', text: '$736.3 बिलियन ($736.3 billion)' },
      { id: 'C', label: 'C', text: '$500 बिलियन ($500 billion)' },
      { id: 'D', label: 'D', text: '$850 बिलियन ($850 billion)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't67-f',
    type: 'fact',
    title: "INDIA’S EXTERNAL DEBT",
    subtitle: 'भारत का विदेशी ऋण',
    content: [
      'मार्च 2025 के अंत में भारत का विदेशी ऋण बढ़कर $736.3 बिलियन हो गया, जो जीडीपी का 19.1% है। (India’s external debt rose to $736.3 billion, or 19.1% of GDP.)',
      'ऋण का सबसे बड़ा घटक \'ऋण\' (Loans-34%) है, उसके बाद मुद्रा और जमा (22.8%) हैं। अमेरिकी डॉलर मूल्यवर्ग का ऋण सबसे बड़ा हिस्सा (54.2%) है। (Largest component is Loans; USD-denominated debt remains the largest share at 54.2%.)',
      'विदेशी ऋण वह हिस्सा है जो विदेशी लेनदारों (सरकार, अंतरराष्ट्रीय संस्थानों या निजी संस्थाओं) से उधार लिया जाता है। (External debt is borrowed from foreign lenders like governments or institutions.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1611974717482-58434749f7e5?q=80&w=1000'
  },

  // --- SLOT 68: Topic 75 ---
  {
    id: 't68-q',
    type: 'quiz',
    title: 'BIHAR: MOBILE APP VOTING',
    subtitle: 'बिहार: मोबाइल ऐप वोटिंग',
    content: [
      'बिहार के नगर निकाय चुनावों में ई-वोटिंग के लिए किस मोबाइल एप्लिकेशन का उपयोग किया गया है?',
      'Which mobile application is used for e-voting in Bihar\'s municipal body elections?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'ई-बिहार (E-Bihar)' },
      { id: 'B', label: 'B', text: 'ई-एसईसी बीएचआर (E-SECBHR)' },
      { id: 'C', label: 'C', text: 'डिजिटल बिहार (Digital Bihar)' },
      { id: 'D', label: 'D', text: 'वोट बिहार (Vote Bihar)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't68-f',
    type: 'fact',
    title: 'BIHAR: MOBILE APP VOTING',
    subtitle: 'बिहार: मोबाइल ऐप वोटिंग',
    content: [
      'बिहार नगर निकायों और उपचुनावों में मोबाइल एप्लिकेशन का उपयोग करके ई-वोटिंग सुविधा शुरू करने वाला देश का पहला राज्य बन गया है। (Bihar is the first state to launch e-voting via mobile apps in municipal elections.)',
      'वरिष्ठ नागरिक, विकलांग लोग और गर्भवती महिलाएं घर बैठे E-SECBHR ऐप के माध्यम से वोट डाल सकते हैं। इसमें ब्लॉकचेन तकनीक और फेशियल रिकग्निशन का उपयोग किया गया है। (Seniors/disabled/pregnant women can vote via app; uses blockchain and facial recognition for security.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000'
  },

  // --- SLOT 69: Topic 76 ---
  {
    id: 't69-q',
    type: 'quiz',
    title: 'NATIONAL TURMERIC BOARD',
    subtitle: 'राष्ट्रीय हल्दी बोर्ड',
    content: [
      'हाल ही में \'राष्ट्रीय हल्दी बोर्ड\' का मुख्यालय कहाँ स्थापित किया गया है?',
      'Where has the headquarters of the \'National Turmeric Board\' been recently established?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'सांगली, महाराष्ट्र (Sangli, Maharashtra)' },
      { id: 'B', label: 'B', text: 'निजामाबाद, तेलंगाना (Nizamabad, Telangana)' },
      { id: 'C', label: 'C', text: 'गुंटूर, आंध्र प्रदेश (Guntur, AP)' },
      { id: 'D', label: 'D', text: 'इरोड, तमिलनाडु (Erode, TN)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't69-f',
    type: 'fact',
    title: 'NATIONAL TURMERIC BOARD',
    subtitle: 'राष्ट्रीय हल्दी बोर्ड',
    content: [
      'केंद्रीय गृह मंत्री ने तेलंगाना के निजामाबाद में राष्ट्रीय हल्दी बोर्ड के मुख्यालय का उद्घाटन किया। (Home Minister inaugurated National Turmeric Board headquarters in Nizamabad, Telangana.)',
      'यह बोर्ड वाणिज्य और उद्योग मंत्रालय के तहत काम करता है और हल्दी की खेती, अनुसंधान और निर्यात को बढ़ावा देने के लिए समर्पित है। (Operates under Ministry of Commerce; aims to boost turmeric production and global exports.)',
      'भारत दुनिया में हल्दी का सबसे बड़ा उत्पादक, उपभोक्ता और निर्यातक है (70% वैश्विक उत्पादन)। हल्दी को \'गोल्डन स्पाइस\' भी कहा जाता है। (India is the largest producer/consumer/exporter of turmeric; known as \'Golden Spice\'.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1615485245834-4bc6ca39d678?q=80&w=1000'
  },

  // --- SLOT 70: Topic 77 ---
  {
    id: 't70-q',
    type: 'quiz',
    title: 'AKASH AIR DEFENCE SYSTEM',
    subtitle: 'आकाश वायु रक्षा प्रणाली',
    content: [
      'किस देश ने भारत से \'आकाश वायु रक्षा प्रणाली\' खरीदने में रुचि व्यक्त की है?',
      'Which country has expressed interest in purchasing the \'Akash Air Defence System\' from India?'
    ],
    options: [
      { id: 'A', label: 'A', text: 'रूस (Russia)' },
      { id: 'B', label: 'B', text: 'ब्राजील (Brazil)' },
      { id: 'C', label: 'C', text: 'फ्रांस (France)' },
      { id: 'D', label: 'D', text: 'दक्षिण अफ्रीका (South Africa)' }
    ],
    correctOptionId: 'B'
  },
  {
    id: 't70-f',
    type: 'fact',
    title: 'AKASH AIR DEFENCE SYSTEM',
    subtitle: 'आकाश वायु रक्षा प्रणाली',
    content: [
      'ब्राजील ने भारत की \'आकाश\' वायु रक्षा प्रणाली खरीदने में रुचि दिखाई है। (Brazil has expressed interest in purchasing India’s Akash Air Defence System.)',
      'आकाश एक मध्यम दूरी की मोबाइल सतह से हवा में मार करने वाली मिसाइल (SAM) प्रणाली है। यह सुपरसोनिक गति (Mach 1.8 से 2.5) से यात्रा कर सकती है। (Akash is a mobile surface-to-air missile system; travels at supersonic speed.)',
      'यह \'मेक इन इंडिया\' के तहत DRDO द्वारा विकसित की गई है। इसकी मारक क्षमता 4.5 किमी से 25 किमी तक है और यह दुश्मन के विमानों, ड्रोन और मिसाइलों को नष्ट कर सकती है। (Developed by DRDO; range 4.5 km to 25 km; bridge gap between short and long-range interceptors.)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000'
  }
];
