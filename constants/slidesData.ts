
import { SlideData } from '../types';

export const SLIDES: SlideData[] = [
  // --- MAIN TITLE SLIDE ---
  {
    id: 'main-cover',
    type: 'title',
    title: 'May 2025 Current Affairs',
    subtitle: 'मई 2025 महत्वपूर्ण घटनाक्रम',
    content: ['Monthly Roundup', 'Defence, Economy, Science & Awards'],
    contentScale: 1,
    contentYOffset: 0
  },

  // --- TOPIC 1: Quantum Technology Research Centre (QTRC) ---
  {
    id: 't1-quiz',
    type: 'quiz',
    title: 'Quantum Technology Research Centre (QTRC)',
    subtitle: 'क्वांटम टेक्नोलॉजी रिसर्च सेंटर',
    content: [
      "डीआरडीओ (DRDO) द्वारा हाल ही में उद्घाटन किए गए क्वांटम टेक्नोलॉजी रिसर्च सेंटर (QTRC) का मुख्य उद्देश्य क्या है?",
      "What is the primary objective of the Quantum Technology Research Centre (QTRC) recently inaugurated by DRDO?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'कृषि उत्पादकता बढ़ाना (Increasing agricultural productivity)' },
      { id: 'B', label: 'B', text: 'सड़क नेटवर्क का विस्तार (Expanding road network)' },
      { id: 'C', label: 'C', text: 'रक्षा अनुप्रयोगों के लिए स्वदेशी क्वांटम क्षमताओं को मजबूत करना (Strengthening indigenous quantum capabilities for defence applications)' },
      { id: 'D', label: 'D', text: 'अंतरिक्ष पर्यटन को बढ़ावा देना (Promoting space tourism)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't1-fact',
    type: 'fact',
    title: 'Quantum Technology Research Centre (QTRC)',
    subtitle: 'क्वांटम टेक्नोलॉजी रिसर्च सेंटर',
    content: [
      "Context: रक्षा अनुसंधान और विकास संगठन (DRDO) ने रक्षा और रणनीतिक अनुप्रयोगों के लिए स्वदेशी क्वांटम क्षमताओं को मजबूत करने हेतु QTRC का उद्घाटन किया।",
      "GK Facts: भारत सरकार ने 2023 में 2030-31 तक के लिए 'नेशनल क्वांटम मिशन' (NQM) को मंजूरी दी थी।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 2: RoDTEP Scheme ---
  {
    id: 't2-quiz',
    type: 'quiz',
    title: 'RoDTEP Scheme',
    subtitle: 'निर्यातित उत्पादों पर शुल्क और करों की छूट योजना',
    content: [
      "निर्यातित उत्पादों पर शुल्क और करों की छूट (RoDTEP) योजना किस वर्ष शुरू की गई थी?",
      "In which year was the Remission of Duties and Taxes on Exported Products (RoDTEP) scheme launched?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'जनवरी 2021 (January 2021)' },
      { id: 'B', label: 'B', text: 'अगस्त 2019 (August 2019)' },
      { id: 'C', label: 'C', text: 'मार्च 2023 (March 2023)' },
      { id: 'D', label: 'D', text: 'दिसंबर 2014 (December 2014)' }
    ],
    correctOptionId: 'A',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't2-fact',
    type: 'fact',
    title: 'RoDTEP Scheme',
    subtitle: 'निर्यातित उत्पादों पर शुल्क और करों की छूट योजना',
    content: [
      "Context: भारत सरकार ने SEZ और EOU इकाइयों द्वारा किए गए निर्यात के लिए RoDTEP लाभों को फिर से बहाल कर दिया है।",
      "GK Facts: यह योजना निर्यातकों को उन करों की प्रतिपूर्ति करती है जो पहले वापस नहीं किए जाते थे।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027eeea15c3e?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 3: India’s First Gene-Edited Sheep ---
  {
    id: 't3-quiz',
    type: 'quiz',
    title: 'India’s First Gene-Edited Sheep',
    subtitle: 'भारत की पहली जीन-संपादित भेड़',
    content: [
      "भारत की पहली जीन-संपादित (Gene-edited) भेड़ को विकसित करने के लिए किस तकनीक का उपयोग किया गया है?",
      "Which technology has been used to develop India's first gene-edited sheep?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'नैनो-इंजीनियरिंग (Nano-engineering)' },
      { id: 'B', label: 'B', text: 'क्लोनिंग (Cloning)' },
      { id: 'C', label: 'C', text: 'स्टेम सेल थेरेपी (Stem cell therapy)' },
      { id: 'D', label: 'D', text: 'CRISPR-Cas9' }
    ],
    correctOptionId: 'D',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't3-fact',
    type: 'fact',
    title: 'India’s First Gene-Edited Sheep',
    subtitle: 'भारत की पहली जीन-संपादित भेड़',
    content: [
      "Context: कश्मीर स्थित कृषि विश्वविद्यालय के शोधकर्ताओं ने भारत की पहली जीन-संपादित भेड़ का उत्पादन किया है।",
      "GK Facts: CRISPR तकनीक 2009 में खोजी गई थी, जो प्राकृतिक जीवाणु प्रतिरक्षा प्रणाली पर आधारित है।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 4: Breakthrough Prize 2025 ---
  {
    id: 't4-quiz',
    type: 'quiz',
    title: 'Breakthrough Prize 2025',
    subtitle: 'ब्रेकथ्रू पुरस्कार 2025',
    content: [
      "\"विज्ञान के ऑस्कर\" के रूप में जाने जाने वाले 2025 के ब्रेकथ्रू पुरस्कार से किसे सम्मानित किया गया है?",
      "Who has been awarded the 2025 Breakthrough Prize, known as the \"Oscars of Science\"?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'इसरो के वैज्ञानिक (ISRO Scientists)' },
      { id: 'B', label: 'B', text: 'CERN के लार्ज हैड्रॉन कोलाइडर (LHC) के चार प्रयोग (Four experiments at CERN’s LHC)' },
      { id: 'C', label: 'C', text: 'नासा के अंतरिक्ष यात्री (NASA Astronauts)' },
      { id: 'D', label: 'D', text: 'नोबेल शांति पुरस्कार विजेता (Nobel Peace Prize laureates)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't4-fact',
    type: 'fact',
    title: 'Breakthrough Prize 2025',
    subtitle: 'ब्रेकथ्रू पुरस्कार 2025',
    content: [
      "Context: 2025 का ब्रेकथ्रू पुरस्कार CERN के LHC में 'हिग्स बोसोन' का अध्ययन करने वाले प्रयोगों को दिया गया।",
      "GK Facts: CERN (यूरोपीय परमाणु अनुसंधान संगठन) 1954 में जिनेवा में स्थापित किया गया था।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 5: Index of Industrial Production (IIP) ---
  {
    id: 't5-quiz',
    type: 'quiz',
    title: 'Index of Industrial Production (IIP)',
    subtitle: 'औद्योगिक उत्पादन सूचकांक',
    content: [
      "भारत के औद्योगिक उत्पादन सूचकांक (IIP) में 'आठ प्रमुख उद्योगों' का कुल भार कितना है?",
      "What is the total weight of the 'Eight Core Industries' in India's Index of Industrial Production (IIP)?"
    ],
    options: [
      { id: 'A', label: 'A', text: '25.50%' },
      { id: 'B', label: 'B', text: '40.27%' },
      { id: 'C', label: 'C', text: '50.00%' },
      { id: 'D', label: 'D', text: '60.15%' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't5-fact',
    type: 'fact',
    title: 'Index of Industrial Production (IIP)',
    subtitle: 'औद्योगिक उत्पादन सूचकांक',
    content: [
      "Context: खनन उत्पादन और बिजली उत्पादन में गिरावट के कारण औद्योगिक वृद्धि में कमी आई है।",
      "GK Facts: केंद्रीय सांख्यिकी संगठन (CSO) 1950 से IIP संकलित कर रहा है।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 6: Seven Summits Challenge ---
  {
    id: 't6-quiz',
    type: 'quiz',
    title: 'Seven Summits Challenge',
    subtitle: 'सेवन समिट्स चुनौती',
    content: [
      "सेवन समिट्स (7 Summits) चुनौती पूरी करने वाला सबसे कम उम्र का भारतीय कौन बना है?",
      "Who has become the youngest Indian to complete the legendary 7 Summits challenge?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'संतोष यादव (Santosh Yadav)' },
      { id: 'B', label: 'B', text: 'विश्वनाथ कार्तिकेय पडकंती (Vishwanath Karthikey Padakanti)' },
      { id: 'C', label: 'C', text: 'बछेंद्री पाल (Bachendri Pal)' },
      { id: 'D', label: 'D', text: 'मालवत पूर्णा (Malavath Purna)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't6-fact',
    type: 'fact',
    title: 'Seven Summits Challenge',
    subtitle: 'सेवन समिट्स चुनौती',
    content: [
      "Context: हैदराबाद के किशोर विश्वनाथ कार्तिकेय पडकंती ने दुनिया की 7 समिट्स चुनौती पूरी की।",
      "GK Facts: इसमें सातों महाद्वीपों की सबसे ऊंची चोटियां शामिल हैं।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 7: Swachh Survekshan Grameen (SSG) 2025 ---
  {
    id: 't7-quiz',
    type: 'quiz',
    title: 'Swachh Survekshan Grameen (SSG) 2025',
    subtitle: 'स्वच्छ सर्वेक्षण ग्रामीण 2025',
    content: [
      "स्वच्छ सर्वेक्षण ग्रामीण (SSG) 2025 किस मंत्रालय की एक राष्ट्रव्यापी पहल है?",
      "Swachh Survekshan Grameen (SSG) 2025 is a nationwide initiative of which Ministry?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'स्वास्थ्य मंत्रालय (Ministry of Health)' },
      { id: 'B', label: 'B', text: 'ग्रामीण विकास मंत्रालय (Ministry of Rural Development)' },
      { id: 'C', label: 'C', text: 'जल शक्ति मंत्रालय (Ministry of Jal Shakti)' },
      { id: 'D', label: 'D', text: 'गृह मंत्रालय (Ministry of Home Affairs)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't7-fact',
    type: 'fact',
    title: 'Swachh Survekshan Grameen (SSG) 2025',
    subtitle: 'स्वच्छ सर्वेक्षण ग्रामीण 2025',
    content: [
      "Context: केंद्रीय जल शक्ति मंत्री श्री सी आर पाटिल ने स्वच्छ सर्वेक्षण ग्रामीण (SSG) 2025 लॉन्च किया।",
      "GK Facts: स्वच्छ भारत मिशन (ग्रामीण) का दूसरा चरण 1 अप्रैल 2020 को शुरू हुआ था।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb75bb44?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 8: Viksit Krishi Sankalp Abhiyan ---
  {
    id: 't8-quiz',
    type: 'quiz',
    title: 'Viksit Krishi Sankalp Abhiyan',
    subtitle: 'विकसित कृषि संकल्प अभियान',
    content: [
      "विकसित कृषि संकल्प अभियान (VKSA-2025) का मुख्य लक्ष्य कितने किसानों को सशक्त बनाना है?",
      "What is the target number of farmers to be empowered under the Viksit Krishi Sankalp Abhiyan (VKSA-2025)?"
    ],
    options: [
      { id: 'A', label: 'A', text: '50 लाख (50 Lakh)' },
      { id: 'B', label: 'B', text: '1.5 करोड़ से अधिक (More than 1.5 Crore)' },
      { id: 'C', label: 'C', text: '10 करोड़ (10 Crore)' },
      { id: 'D', label: 'D', text: '5 करोड़ (5 Crore)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't8-fact',
    type: 'fact',
    title: 'Viksit Krishi Sankalp Abhiyan',
    subtitle: 'विकसित कृषि संकल्प अभियान',
    content: [
      "Context: केंद्रीय कृषि मंत्री ने भुवनेश्वर में इस अभियान की शुरुआत की।",
      "GK Facts: यह वैज्ञानिकों और किसानों के बीच सीधा संवाद स्थापित करता है।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 9: Exercise NOMADIC ELEPHANT ---
  {
    id: 't9-quiz',
    type: 'quiz',
    title: 'Exercise NOMADIC ELEPHANT',
    subtitle: 'अभ्यास नोमैडिक एलीफेंट',
    content: [
      "अभ्यास 'नोमैडिक एलीफेंट' (NOMADIC ELEPHANT) भारत और किस देश के बीच आयोजित होने वाला एक वार्षिक सैन्य अभ्यास है?",
      "Exercise 'NOMADIC ELEPHANT' is an annual military exercise conducted between India and which country?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'मंगोलिया (Mongolia)' },
      { id: 'B', label: 'B', text: 'रूस (Russia)' },
      { id: 'C', label: 'C', text: 'फ्रांस (France)' },
      { id: 'D', label: 'D', text: 'नेपाल (Nepal)' }
    ],
    correctOptionId: 'A',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't9-fact',
    type: 'fact',
    title: 'Exercise NOMADIC ELEPHANT',
    subtitle: 'अभ्यास नोमैडिक एलीफेंट',
    content: [
      "Context: भारतीय सेना ने मंगोलिया के उलानबटोर में इस अभ्यास के 17वें संस्करण में भाग लिया।",
      "GK Facts: यह 2006 से आयोजित होने वाला एक वार्षिक द्विपक्षीय अभ्यास है।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  },

  // --- TOPIC 10: ULLAS Scheme (Goa Literacy) ---
  {
    id: 't10-quiz',
    type: 'quiz',
    title: 'ULLAS Scheme (Goa Literacy)',
    subtitle: 'उल्लास योजना (गोवा साक्षरता)',
    content: [
      "उल्लास (ULLAS) योजना के तहत 95% साक्षरता सीमा पार करने वाला गोवा भारत का कौन सा राज्य बन गया है?",
      "Which state of India has Goa become to surpass the 95% literacy threshold under the ULLAS scheme?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'पहला (First)' },
      { id: 'B', label: 'B', text: 'दूसरा (Second)' },
      { id: 'C', label: 'C', text: 'तीसरा (Third)' },
      { id: 'D', label: 'D', text: 'पांचवां (Fifth)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't10-fact',
    type: 'fact',
    title: 'ULLAS Scheme (Goa Literacy)',
    subtitle: 'उल्लास योजना (गोवा साक्षरता)',
    content: [
      "Context: उल्लास योजना के तहत गोवा आधिकारिक तौर पर पूर्ण साक्षर राज्य बन गया है।",
      "GK Facts: उल्लास योजना का लक्ष्य उन वयस्कों को साक्षर बनाना है जो स्कूल नहीं जा सके।"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 20
  }
];
