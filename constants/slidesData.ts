
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
      "रक्षा अनुसंधान और विकास संगठन (DRDO) ने रक्षा और रणनीतिक अनुप्रयोगों के लिए स्वदेशी क्वांटम क्षमताओं को मजबूत करने हेतु QTRC का उद्घाटन किया। (DRDO inaugurated QTRC to strengthen indigenous quantum capabilities for strategic and defence applications.)",
      "भारत सरकार ने 2023 में 2030-31 तक के लिए 'नेशनल क्वांटम मिशन' (NQM) को मंजूरी दी थी। (Quantum tech is based on superposition and entanglement. Govt approved National Quantum Mission (NQM) in 2023 for the period up to 2030-31.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 2: RoDTEP Scheme ---
  {
    id: 't2-quiz',
    type: 'quiz',
    title: 'RoDTEP Scheme',
    subtitle: 'RoDTEP योजना',
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
    subtitle: 'RoDTEP योजना',
    content: [
      "भारत सरकार ने SEZ और EOU इकाइयों द्वारा किए गए निर्यात के लिए RoDTEP लाभों को फिर से बहाल कर दिया है। (Govt announced restoration of RoDTEP benefits for SEZ and EOU exports.)",
      "यह योजना निर्यातकों को उन केंद्रीय, राज्य और स्थानीय करों की प्रतिपूर्ति करती है जो पहले वापस नहीं किए जाते थे। (Reimburses exporters for previously non-refundable central, state, and local taxes.)",
      "यह योजना विश्व व्यापार संगठन (WTO) के नियमों के अनुकूल है। (This scheme is compatible with WTO rules.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027eeea15c3e?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
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
      "कश्मीर स्थित कृषि विश्वविद्यालय के शोधकर्ताओं ने भारत की पहली जीन-संपादित भेड़ का उत्पादन कर एक ऐतिहासिक उपलब्धि हासिल की है। (Researchers in Kashmir produced India’s first gene-edited sheep.)",
      "CRISPR तकनीक 2009 में खोजी गई थी, जो प्राकृतिक जीवाणु प्रतिरक्षा प्रणाली पर आधारित है। (CRISPR tool invented in 2009 is based on bacterial immune system. It differs from transgenic organisms as it contains no foreign DNA.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
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
      "2025 का ब्रेकथ्रू पुरस्कार CERN के LHC में 'हिग्स बोसोन' (Higgs boson) का अध्ययन करने वाले प्रयोगों (ATLAS, CMS, ALICE, LHCb) को दिया गया। (2025 Breakthrough Prize awarded to four CERN LHC experiments for studying Higgs boson.)",
      "यह पुरस्कार जीवन विज्ञान, मौलिक भौतिकी और गणित में अग्रणी उपलब्धियों के लिए दिया जाता है। (Honours achievements in Life Sciences, Fundamental Physics, and Mathematics.)",
      "CERN (यूरोपीय परमाणु अनुसंधान संगठन) 1954 में जिनेवा (स्विट्जरलैंड-फ्रांस सीमा) में स्थापित किया गया था। LHC दुनिया का सबसे बड़ा कण त्वरक (particle accelerator) है। (CERN established in 1954 in Geneva. LHC is the world's largest particle accelerator.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 5: Index of Industrial Production (IIP) ---
  {
    id: 't5-quiz',
    type: 'quiz',
    title: 'Index of Industrial Production (IIP)',
    subtitle: 'औद्योगिक उत्पादन सूचकांक',
    content: [
      "भारत के औद्योगिक उत्पादन सूचकांक (IIP) में 'आठ प्रमुख उद्योगों' (Eight Core Industries) का कुल भार कितना है?",
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
      "खनन उत्पादन और बिजली उत्पादन में गिरावट के कारण भारत की औद्योगिक उत्पादन वृद्धि अप्रैल में आठ महीने के निचले स्तर (2.7%) पर आ गई। (India’s IIP growth dropped to 2.7% in April due to decline in mining and electricity output.)",
      "IIP औद्योगिक उत्पादन के भौतिक डेटा का उपयोग करके उत्पादन की मात्रा को मापता है। (IIP measures industrial output primarily using physical production data.)",
      "केंद्रीय सांख्यिकी संगठन (CSO) 1950 से IIP संकलित कर रहा है। इसमें निर्माण, गैस और जलापूर्ति शामिल नहीं हैं। (CSO compiling IIP since 1950. Excludes construction, gas, and water supply.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
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
      "हैदराबाद के किशोर विश्वनाथ कार्तिकेय पडकंती ने दुनिया की 7 समिट्स चुनौती पूरी की। (Hyderabad teen Vishwanath Padakanti completed the 7 Summits challenge.)",
      "वह इस उपलब्धि को हासिल करने वाले सबसे कम उम्र के भारतीय और दुनिया के दूसरे सबसे कम उम्र के व्यक्ति हैं। (Youngest Indian and 2nd youngest in the world to achieve this.)",
      "सेवन समिट्स में सात महाद्वीपों की सात सबसे ऊंची चोटियां शामिल हैं: एवरेस्ट, किलिमंजारो, एल्ब्रस, एकांकागुआ, कोसिअस्को, विंसन और डेनाली। (Includes highest peaks of all 7 continents: Everest, Kilimanjaro, Elbrus, Aconcagua, Kosciuszko, Vinson and Denali.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
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
      "केंद्रीय जल शक्ति मंत्री श्री सी आर पाटिल ने स्वच्छ सर्वेक्षण ग्रामीण (SSG) 2025 लॉन्च किया। (Jal Shakti Minister launched Swachh Survekshan Grameen 2025.)",
      "यह भारत का सबसे बड़ा स्वच्छता सर्वेक्षण है, जो ग्रामीण क्षेत्रों में ओडीएफ (ODF) प्लस मॉडल की उपलब्धियों का आकलन करेगा। (India’s largest sanitation survey assessing ODF Plus achievements in rural areas.)",
      "पहला स्वच्छ सर्वेक्षण 2016 में आयोजित किया गया था। स्वच्छ भारत मिशन (ग्रामीण) का दूसरा चरण 1 अप्रैल 2020 को शुरू हुआ था। (First survey in 2016. SBM-G Phase-II started on April 1, 2020.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb75bb44?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
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
      "केंद्रीय कृषि मंत्री ने भुवनेश्वर में विकसित कृषि संकल्प अभियान अभियान की शुरुआत की। (Union Agriculture Minister launched this campaign in Bhubaneswar.)",
      "यह अभियान वैज्ञानिकों और किसानों के बीच सीधा संवाद स्थापित करता है। (Bridges the gap between lab and land via direct scientist-farmer interaction.)",
      "सौर खेती, मधुमक्खी पालन और 'श्री अन्न' (मोटा अनाज) को अपनाने के लिए प्रोत्साहित किया जाता है। (Promotes solar farming, Sweet Revolution, and Shri Anna/millets.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
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
      "भारतीय सेना ने मंगोलिया के उलानबटोर में इस अभ्यास के 17वें संस्करण में भाग लिया। (Indian Army participated in the 17th edition in Ulaanbaatar, Mongolia.)",
      "यह 2006 से आयोजित होने वाला एक वार्षिक द्विपक्षीय अभ्यास है। पिछला संस्करण 2024 में मेघालय, भारत में आयोजित किया गया था। (Annual bilateral exercise since 2006. Previous edition held in Meghalaya, India in 2024.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
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
      "उल्लास योजना के तहत गोवा आधिकारिक तौर पर पूर्ण साक्षर राज्य बन गया है। (Goa officially became a fully literate state under the ULLAS scheme.)",
      "गोवा ने मिजोरम के बाद 95% साक्षरता की सीमा को पार किया है। (Goa followed Mizoram in surpassing the 95% literacy mark.)",
      "उल्लास योजना (2022-2027) का लक्ष्य 15 वर्ष और उससे अधिक आयु के उन वयस्कों को साक्षर बनाना है जो स्कूल नहीं जा सके। (ULLAS scheme targets adults aged 15+ years who missed formal schooling.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 11: National Florence Nightingale Award 2025 ---
  {
    id: 't11-quiz',
    type: 'quiz',
    title: 'National Florence Nightingale Award 2025',
    subtitle: 'नेशनल फ्लोरेंस नाइटिंगेल पुरस्कार 2025',
    content: [
      "नेशनल फ्लोरेंस नाइटिंगेल पुरस्कार किस मंत्रालय द्वारा नर्सों को उनकी सराहनीय सेवाओं के लिए दिया जाता है?",
      "The National Florence Nightingale Award is given by which Ministry to nurses for their meritorious services?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'गृह मंत्रालय (Ministry of Home Affairs)' },
      { id: 'B', label: 'B', text: 'शिक्षा मंत्रालय (Ministry of Education)' },
      { id: 'C', label: 'C', text: 'स्वास्थ्य और परिवार कल्याण मंत्रालय (Ministry of Health and Family Welfare)' },
      { id: 'D', label: 'D', text: 'सामाजिक न्याय मंत्रालय (Ministry of Social Justice)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't11-fact',
    type: 'fact',
    title: 'National Florence Nightingale Award 2025',
    subtitle: 'नेशनल फ्लोरेंस नाइटिंगेल पुरस्कार 2025',
    content: [
      "राष्ट्रपति द्रौपदी मुर्मू ने राष्ट्रपति भवन में नर्सों को वर्ष 2025 के पुरस्कार प्रदान किए। (President presented the 2025 awards to nurses at Rashtrapati Bhavan.)",
      "यह पुरस्कार 1973 में आधुनिक नर्सिंग की संस्थापक फ्लोरेंस नाइटिंगेल की याद में स्थापित किया गया था। (Instituted in 1973 in memory of Florence Nightingale.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dad99961?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 12: Operation Spider’s Web & FPV Drones ---
  {
    id: 't12-quiz',
    type: 'quiz',
    title: 'Operation Spider’s Web & FPV Drones',
    subtitle: 'ऑपरेशन स्पाइडर्स वेब और एफपीवी ड्रोन',
    content: [
      "'ऑपरेशन स्पाइडर्स वेब' (Operation Spider’s Web) के तहत किस देश ने रूस के पांच हवाई अड्डों पर एफपीवी (FPV) ड्रोन से हमला किया?",
      "Under 'Operation Spider’s Web', which country launched FPV drone attacks on five airbases across Russia?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'चीन (China)' },
      { id: 'B', label: 'B', text: 'यूक्रेन (Ukraine)' },
      { id: 'C', label: 'C', text: 'इजराइल (Israel)' },
      { id: 'D', label: 'D', text: 'अमेरिका (USA)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't12-fact',
    type: 'fact',
    title: 'Operation Spider’s Web & FPV Drones',
    subtitle: 'ऑपरेशन स्पाइडर्स वेब और एफपीवी ड्रोन',
    content: [
      "यूक्रेन ने 'ऑपरेशन स्पाइडर्स वेब' के तहत रूस के पांच एयरबेस पर 'फर्स्ट-पर्सन व्यू' (FPV) ड्रोन हमले किए। (Ukraine launched FPV drone attacks on five Russian airbases under 'Operation Spider’s Web'.)",
      "एफपीवी ड्रोन छोटे होते हैं और इनमें सामने कैमरे लगे होते हैं जो ऑपरेटर को लाइव वीडियो भेजते हैं। इससे रिमोट लोकेशन से सटीक पैंतरेबाज़ी संभव होती है। (FPV drones are small with front-built cameras sending live video to operators, enabling precise remote maneuvering.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 13: NAKSHA Initiative ---
  {
    id: 't13-quiz',
    type: 'quiz',
    title: 'NAKSHA Initiative',
    subtitle: 'नक्शा पहल',
    content: [
      "ग्रामीण विकास मंत्रालय द्वारा शुरू की गई 'नक्शा' (NAKSHA) परियोजना का मुख्य उद्देश्य क्या है?",
      "What is the primary objective of the 'NAKSHA' project launched by the Ministry of Rural Development?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'वन क्षेत्र का नक्शा बनाना (Mapping forest areas)' },
      { id: 'B', label: 'B', text: 'शहरी बस्तियों का भू-स्थानिक भूमि सर्वेक्षण (Geospatial land survey of urban habitations)' },
      { id: 'C', label: 'C', text: 'नदियों को जोड़ना (Linking rivers)' },
      { id: 'D', label: 'D', text: 'मौसम का पूर्वानुमान (Weather forecasting)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't13-fact',
    type: 'fact',
    title: 'NAKSHA Initiative',
    subtitle: 'नक्शा पहल',
    content: [
      "ग्रामीण विकास मंत्रालय ने नक्शा (NAKSHA) कार्यक्रम का दूसरा चरण शुरू किया है। (The Ministry of Rural Development launched the second phase of the NAKSHA programme.)",
      "यह 'डिजिटल इंडिया लैंड रिकॉर्ड्स मॉडर्नाइजेशन प्रोग्राम' (DILRMP) के तहत कार्यान्वित है। (Implemented under the Digital India Land Records Modernization Programme.)",
      "चरण I को 2024-25 के बजट में घोषित किया गया था, जिसका लक्ष्य 5 वर्षों के भीतर देश के पूरे शहरी क्षेत्र को कवर करना है। (Phase I aimed to cover entire urban areas within 5 years.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 14: International Organisation for Mediation (IOMed) ---
  {
    id: 't14-quiz',
    type: 'quiz',
    title: 'International Organisation for Mediation (IOMed)',
    subtitle: 'अंतर्राष्ट्रीय मध्यस्थता संगठन',
    content: [
      "अंतर्राष्ट्रीय मध्यस्थता संगठन (IOMed), जिसे हाल ही में हांगकांग में लॉन्च किया गया है, किस देश के नेतृत्व वाली एक पहल है?",
      "The International Organisation for Mediation (IOMed), recently launched in Hong Kong, is an initiative led by which country?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'भारत (India)' },
      { id: 'B', label: 'B', text: 'अमेरिका (USA)' },
      { id: 'C', label: 'C', text: 'चीन (China)' },
      { id: 'D', label: 'D', text: 'रूस (Russia)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't14-fact',
    type: 'fact',
    title: 'International Organisation for Mediation (IOMed)',
    subtitle: 'अंतर्राष्ट्रीय मध्यस्थता संगठन',
    content: [
      "इसे 30 मई, 2025 को हांगकांग में औपचारिक रूप से लॉन्च किया गया। यह अंतरराष्ट्रीय संघर्षों को सुलझाने के लिए मुकदमों के बजाय मध्यस्थता पर आधारित एक वैकल्पिक मंच है। (Formally launched on May 30, 2025, in Hong Kong as an alternative dispute resolution forum via mediation.)",
      "इसके 33 संस्थापक सदस्य देश हैं, जिनमें से कई अफ्रीका और लैटिन अमेरिका के विकासशील राष्ट्र हैं जहाँ चीन की 'बेल्ट एंड रोड इनिशिएटिव' (BRI) पहले से स्थापित है। (Has 33 founding members, mostly developing nations from Africa and Latin America linked to China’s BRI.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 15: Andaman & Nicobar Command ---
  {
    id: 't15-quiz',
    type: 'quiz',
    title: 'Andaman & Nicobar Command',
    subtitle: 'अंडमान और निकोबार कमान',
    content: [
      "भारत की पहली 'एकीकृत थिएटर कमान' (Integrated Theatre Command) कौन सी है, जिसका मुख्यालय पोर्ट ब्लेयर में है?",
      "Which is India's first 'Integrated Theatre Command', with its headquarters at Port Blair?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'पश्चिमी कमान (Western Command)' },
      { id: 'B', label: 'B', text: 'अंडमान और निकोबार कमान (Andaman & Nicobar Command)' },
      { id: 'C', label: 'C', text: 'दक्षिणी कमान (Southern Command)' },
      { id: 'D', label: 'D', text: 'पूर्वी कमान (Eastern Command)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't15-fact',
    type: 'fact',
    title: 'Andaman & Nicobar Command',
    subtitle: 'अंडमान और निकोबार कमान',
    content: [
      "लेफ्टिनेंट जनरल दिनेश सिंह राणा ने अंडमान और निकोबार कमान (ANC) के 18वें कमांडर-इन-चीफ (CINCAN) के रूप में कार्यभार संभाला। (Lt. Gen Dinesh Singh Rana assumed charge as the 18th CINCAN.)",
      "इसकी स्थापना 2001 में हुई थी और इसका मुख्यालय पोर्ट ब्लेयर में है। CINCAN का पद तीनों सेवाओं (थल, जल, वायु) के बीच रोटेशनल होता है। (Established in 2001 with HQ at Port Blair; CINCAN is a rotational post among the three services.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1493397212122-2b85def82820?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 16: DHRUVA Initiative ---
  {
    id: 't16-quiz',
    type: 'quiz',
    title: 'DHRUVA Initiative',
    subtitle: 'ध्रुव पहल',
    content: [
      "डाक विभाग द्वारा शुरू की गई 'ध्रुव' (DHRUVA) पहल के तहत प्रत्येक घर को प्रदान किए जाने वाले 10-अंकीय अल्फ़ान्यूमेरिक कोड को क्या कहा जाता है?",
      "Under the 'DHRUVA' initiative by the Department of Posts, what is the 10-digit alphanumeric code assigned to every home called?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'QR कोड (QR Code)' },
      { id: 'B', label: 'B', text: 'DIGIPIN (डिजीपिन)' },
      { id: 'C', label: 'C', text: 'पिन कोड (PIN Code)' },
      { id: 'D', label: 'D', text: 'आधार कोड (Aadhaar Code)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't16-fact',
    type: 'fact',
    title: 'DHRUVA Initiative',
    subtitle: 'ध्रुव पहल',
    content: [
      "डाक विभाग ने 'ध्रुव' (Digital Hub for Reference and Unique Virtual Address) नामक नीति दस्तावेज जारी किया है। (The Department of Posts released the DHRUVA policy document for a national Digital Address DPI.)",
      "इसका मुख्य लक्ष्य भारत के प्रत्येक घर के लिए एक विशिष्ट डिजिटल पता प्रदान करना है। इसके लिए DIGIPIN का उपयोग किया जाएगा। (Goal is to provide a unique digital address for every home using DIGIPIN.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 17: BharatGen ---
  {
    id: 't17-quiz',
    type: 'quiz',
    title: 'BharatGen',
    subtitle: 'भारतजेन',
    content: [
      "भारत सरकार द्वारा वित्त पोषित पहला मल्टीमॉडल 'लार्ज लैंग्वेज मॉडल' (LLM) कौन सा है जो 22 भारतीय भाषाओं को कवर करता है?",
      "Which is India’s first government-funded multimodal Large Language Model (LLM) covering 22 Indian languages?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'ChatGPT' },
      { id: 'B', label: 'B', text: 'BharatGen (भारतजेन)' },
      { id: 'C', label: 'C', text: 'Krutrim' },
      { id: 'D', label: 'D', text: 'Gemini' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't17-fact',
    type: 'fact',
    title: 'BharatGen',
    subtitle: 'भारतजेन',
    content: [
      "केंद्रीय विज्ञान और प्रौद्योगिकी मंत्रालय ने 'भारतजेन' (BharatGen) लॉन्च किया है। (Union Ministry for Science & Technology launched ‘BharatGen’.)",
      "यह 22 भारतीय भाषाओं के लिए डिज़ाइन किया गया भारत का पहला सरकारी वित्त पोषित मल्टीमॉडल LLM है। इसे IIT बॉम्बे के TIH फाउंडेशन के नेतृत्व में विकसित किया गया है। (India’s first govt-funded multimodal LLM for 22 languages, led by IIT Bombay’s TIH Foundation.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 18: Census 2021 Rescheduled ---
  {
    id: 't18-quiz',
    type: 'quiz',
    title: 'Census 2021 Rescheduled',
    subtitle: 'जनगणना 2021 का पुनर्गठन',
    content: [
      "1931 के बाद पहली बार किस जनगणना में विस्तृत जाति डेटा (Caste Data) एकत्र किया जाएगा?",
      "In which Census will granular caste data be captured for the first time since 1931?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'जनगणना 2011 (Census 2011)' },
      { id: 'B', label: 'B', text: 'जनगणना 1951 (Census 1951)' },
      { id: 'C', label: 'C', text: 'जनगणना 2021/2026 (Census 2021/2026)' },
      { id: 'D', label: 'D', text: 'जनगणना 2001 (Census 2001)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't18-fact',
    type: 'fact',
    title: 'Census 2021 Rescheduled',
    subtitle: 'जनगणना 2021 का पुनर्गठन',
    content: [
      "केंद्र सरकार ने घोषणा की है कि कोविड महामारी के कारण विलंबित 2021 की जनगणना अब दो चरणों में आयोजित की जाएगी (अक्टूबर 2026 और मार्च 2027)। (The Union Govt announced that the delayed Census 2021 will be held in two phases starting Oct 2026 and March 2027.)",
      "यह भारत की पहली डिजिटल जनगणना होगी। यह 1931 के बाद पहली जनगणना होगी जो अनुसूचित जाति (SC) और अनुसूचित जनजाति (ST) के अलावा विस्तृत जाति डेटा एकत्र करेगी। (This will be India’s first digital Census and the first since 1931 to capture granular caste data beyond SC/ST classifications.)",
      "भारत में पहली समकालिक जनगणना 1881 में हुई थी। स्वतंत्र भारत की पहली जनगणना 1951 में हुई। जनगणना गृह मंत्रालय के तहत भारत के रजिस्ट्रार जनरल और जनगणना आयुक्त के कार्यालय द्वारा आयोजित की जाती है। (First synchronous census was in 1881. Independent India's first was in 1951. Conducted by the Office of the Registrar General under the Ministry of Home Affairs.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-e94e1b389e7a?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 19: Motion of Impeachment ---
  {
    id: 't19-quiz',
    type: 'quiz',
    title: 'Motion of Impeachment',
    subtitle: 'महाभियोग प्रस्ताव',
    content: [
      "सरकार आगामी मानसून सत्र में किस उच्च न्यायालय के न्यायाधीश के खिलाफ महाभियोग प्रस्ताव पेश करने की योजना बना रही है?",
      "Against which High Court judge is the government planning to move an impeachment motion in the upcoming session?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'न्यायपूर्ति यशवंत वर्मा (Justice Yashwant Varma)' },
      { id: 'B', label: 'B', text: 'न्यायपूर्ति संजीव खन्ना (Justice Sanjiv Khanna)' },
      { id: 'C', label: 'C', text: 'न्यायपूर्ति डी.वाई. चंद्रचूड़ (Justice D.Y. Chandrachud)' },
      { id: 'D', label: 'D', text: 'न्यायपूर्ति बी.आर. गवई (Justice B.R. Gavai)' }
    ],
    correctOptionId: 'A',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't19-fact',
    type: 'fact',
    title: 'Motion of Impeachment',
    subtitle: 'महाभियोग प्रस्ताव',
    content: [
      "महाभियोग की प्रक्रिया के माध्यम से उच्च न्यायपालिका के न्यायाधीशों को उनके पद से हटाया जाता है। (Impeachment is the process to remove judges of the higher judiciary from office.)",
      "न्यायाधीशों को हटाने की प्रक्रिया न्यायाधीश जांच अधिनियम, 1968 में विस्तृत है। (The procedure for removal of judges is elaborated in the Judges Inquiry Act, 1968.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 20: MSC Irina at Vizhinjam Seaport ---
  {
    id: 't20-quiz',
    type: 'quiz',
    title: 'MSC Irina at Vizhinjam Seaport',
    subtitle: 'विझिनजम पोर्ट पर MSC इरीना',
    content: [
      "विश्व का सबसे बड़ा कंटेनर जहाज 'MSC इरीना' (MSC Irina) पहली बार भारत के किस बंदरगाह पर पहुँचा?",
      "'MSC Irina', the world's biggest container vessel, reached which Indian port for the first time?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'मुंद्रा पोर्ट, गुजरात (Mundra Port, Gujarat)' },
      { id: 'B', label: 'B', text: 'जवाहरलाल नेहरू पोर्ट, महाराष्ट्र (JNPT, Maharashtra)' },
      { id: 'C', label: 'C', text: 'चेन्नई पोर्ट, तमिलनाडु (Chennai Port, Tamil Nadu)' },
      { id: 'D', label: 'D', text: 'विझिनजम पोर्ट, केरल (Vizhinjam Port, Kerala)' }
    ],
    correctOptionId: 'D',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't20-fact',
    type: 'fact',
    title: 'MSC Irina at Vizhinjam Seaport',
    subtitle: 'विझिनजम पोर्ट पर MSC इरीना',
    content: [
      "दुनिया का सबसे बड़ा कंटेनर जहाज 'MSC इरीना' पहली बार विझिनजम अंतरराष्ट्रीय बंदरगाह पहुँचा। (World's biggest container vessel MSC Irina reached Vizhinjam International Seaport for the first time.)",
      "विझिनजम पोर्ट केरल सरकार द्वारा पीपीपी (PPP) मॉडल के तहत विकसित किया गया है। यह भारत का पहला डीपवाटर ट्रांसशिपमेंट पोर्ट है। (Developed by Kerala govt under PPP; India’s first transshipment port for ultra-large container ships.)",
      "इसकी प्राकृतिक गहराई 24 मीटर है, जो इसे बिना ड्रेजिंग के दुनिया के सबसे बड़े जहाजों को खड़ा करने की अनुमति देती है। यह श्रीलंका के कोलंबो पोर्ट पर भारत की निर्भरता को कम करेगा। (Its natural 24m depth allows berthing of largest ships without dredging; aims to reduce dependence on Colombo port.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 21: World Environment Day 2025 ---
  {
    id: 't21-quiz',
    type: 'quiz',
    title: 'World Environment Day 2025',
    subtitle: 'विश्व पर्यावरण दिवस 2025',
    content: [
      "'विश्व पर्यावरण दिवस 2025' की मेजबानी किस देश द्वारा की गई है?",
      "Which country hosted 'World Environment Day 2025'?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'स्वीडन (Sweden)' },
      { id: 'B', label: 'B', text: 'दक्षिण कोरिया (Republic of Korea)' },
      { id: 'C', label: 'C', text: 'भारत (India)' },
      { id: 'D', label: 'D', text: 'ब्राजील (Brazil)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't21-fact',
    type: 'fact',
    title: 'World Environment Day 2025',
    subtitle: 'विश्व पर्यावरण दिवस 2025',
    content: [
      "पर्यावरण संरक्षण के लिए वैश्विक जागरूकता बढ़ाने हेतु हर साल 5 जून को विश्व पर्यावरण दिवस मनाया जाता है। (World Environment Day is celebrated every June 5 to drive action for environmental protection.)",
      "2025 का मेजबान देश दक्षिण कोरिया है और इसका विषय (Theme) #BeatPlasticPollution है। (2025 Host: Republic of Korea; Theme: #BeatPlasticPollution.)",
      "पहला संयुक्त राष्ट्र पर्यावरण सम्मेलन 1972 में स्टॉकहोम में 'ओनली वन अर्थ' थीम के साथ आयोजित किया गया था। (First conference 1972 in Stockholm; UNEP designated June 5 as Environment Day in 1973.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 22: New Ramsar Sites in Rajasthan ---
  {
    id: 't22-quiz',
    type: 'quiz',
    title: 'New Ramsar Sites in Rajasthan',
    subtitle: 'राजस्थान में नए रामसर स्थल',
    content: [
      "राजस्थान के कौन से दो नए वेटलैंड्स (आर्द्रभूमियों) को हाल ही में रामसर स्थलों के रूप में नामित किया गया है?",
      "Which two new wetlands from Rajasthan have been recently designated as Ramsar Sites?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'खिचन और मेनार (Khichan and Menar)' },
      { id: 'B', label: 'B', text: 'सांभर और केवलादेव (Sambhar and Keoladeo)' },
      { id: 'C', label: 'C', text: 'पुष्कर और राजसमंद (Pushkar and Rajsamand)' },
      { id: 'D', label: 'D', text: 'जयसमंद और नक्की (Jaisamand and Nakki)' }
    ],
    correctOptionId: 'A',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't22-fact',
    type: 'fact',
    title: 'New Ramsar Sites in Rajasthan',
    subtitle: 'राजस्थान में नए रामसर स्थल',
    content: [
      "विश्व पर्यावरण दिवस 2025 पर राजस्थान के दो वेटलैंड्स—खिचन और मेनार—को नए रामसर स्थल घोषित किया गया। (Khichan and Menar from Rajasthan were designated as Ramsar Sites on Environment Day 2025.)",
      "इसके साथ भारत में कुल रामसर स्थलों की संख्या 91 हो गई है। उदयपुर का मेनार वेटलैंड ताजे पानी का परिसर है, जबकि जोधपुर का खिचन वेटलैंड प्रवासी 'डेमोइसेल क्रेन' (कुरजां) के लिए प्रसिद्ध है। (Takes India’s total to 91. Menar is freshwater; Khichan is famous for demoiselle cranes.)",
      "रामसर कन्वेंशन आर्द्रभूमियों के संरक्षण के लिए 2 फरवरी, 1971 को ईरान के रामसर में हस्ताक्षरित एक समझौता है। भारत 1982 में इसका हस्ताक्षरकर्ता बना। (Ramsar Convention signed on Feb 2, 1971 in Iran. India became a signatory in 1982.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86747?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 23: International Institute of Administrative Sciences (IIAS) ---
  {
    id: 't23-quiz',
    type: 'quiz',
    title: 'International Institute of Administrative Sciences (IIAS)',
    subtitle: 'अंतर्राष्ट्रीय प्रशासनिक विज्ञान संस्थान',
    content: [
      "भारत ने किस अवधि के लिए अंतर्राष्ट्रीय प्रशासनिक विज्ञान संस्थान (IIAS) की अध्यक्षता जीती है?",
      "For which term has India won the Presidency of the International Institute of Administrative Sciences (IIAS)?"
    ],
    options: [
      { id: 'A', label: 'A', text: '2024-2026' },
      { id: 'B', label: 'B', text: '2025-2028' },
      { id: 'C', label: 'C', text: '2026-2030' },
      { id: 'D', label: 'D', text: '2021-2025' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't23-fact',
    type: 'fact',
    title: 'International Institute of Administrative Sciences (IIAS)',
    subtitle: 'अंतर्राष्ट्रीय प्रशासनिक विज्ञान संस्थान',
    content: [
      "भारत ने 2025-2028 कार्यकाल के लिए IIAS की अध्यक्षता हासिल की है। (India won IIAS Presidency for 2025–2028 term.)",
      "IIAS सार्वजनिक प्रशासन में वैज्ञानिक अनुसंधान पर सहयोग करने वाले देशों का एक वैश्विक संघ है। (IIAS is a global federation collaborating on scientific research in public administration.)",
      "भारत 1998 से IIAS का सदस्य है। यह संयुक्त राष्ट्र से औपचारिक रूप से संबद्ध नहीं है, लेकिन संयुक्त राष्ट्र लोक प्रशासन नेटवर्क (UNPAN) के साथ मिलकर काम करता है। (India member since 1998; works closely with UNPAN.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 24: Economic and Social Council (ECOSOC) ---
  {
    id: 't24-quiz',
    type: 'quiz',
    title: 'Economic and Social Council (ECOSOC)',
    subtitle: 'आर्थिक और सामाजिक परिषद',
    content: [
      "भारत को संयुक्त राष्ट्र की आर्थिक और सामाजिक परिषद (ECOSOC) के लिए किस अवधि के लिए चुना गया है?",
      "For which period has India been elected to the Economic and Social Council (ECOSOC) of the United Nations?"
    ],
    options: [
      { id: 'A', label: 'A', text: '2024-26' },
      { id: 'B', label: 'B', text: '2025-27' },
      { id: 'C', label: 'C', text: '2026-28' },
      { id: 'D', label: 'D', text: '2023-25' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't24-fact',
    type: 'fact',
    title: 'Economic and Social Council (ECOSOC)',
    subtitle: 'आर्थिक और सामाजिक परिषद',
    content: [
      "भारत को 2026-28 की अवधि के लिए संयुक्त राष्ट्र की आर्थिक और सामाजिक परिषद (ECOSOC) के लिए चुना गया है। (India elected to ECOSOC for 2026-28 period.)",
      "ECOSOC में 54 सदस्य होते हैं, जो महासभा द्वारा तीन साल की अवधि के लिए चुने जाते हैं। (ECOSOC has 54 Members elected by the General Assembly for 3-year terms.)",
      "यह 1945 में संयुक्त राष्ट्र चार्टर द्वारा स्थापित संयुक्त राष्ट्र के छह प्रमुख अंगों में से एक है। (Established in 1945 as one of the six principal organs of the UN.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 25: Chenab and Anji Rail Bridges ---
  {
    id: 't25-quiz',
    type: 'quiz',
    title: 'Chenab and Anji Rail Bridges',
    subtitle: 'चिनाब और अंजी रेल पुल',
    content: [
      "जम्मू-कश्मीर में चिनाब नदी पर बना 'चिनाब रेल ब्रिज' नदी तल से कितनी ऊँचाई पर स्थित है?",
      "At what height above the riverbed is the 'Chenab Rail Bridge' in Jammu and Kashmir situated?"
    ],
    options: [
      { id: 'A', label: 'A', text: '359 मीटर (359 m)' },
      { id: 'B', label: 'B', text: '473 मीटर (473 m)' },
      { id: 'C', label: 'C', text: '324 मीटर (324 m)' },
      { id: 'D', label: 'D', text: '1,315 मीटर (1,315 m)' }
    ],
    correctOptionId: 'A',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't25-fact',
    type: 'fact',
    title: 'Chenab and Anji Rail Bridges',
    subtitle: 'चिनाब और अंजी रेल पुल',
    content: [
      "पीएम मोदी ने जम्मू-कश्मीर में चिनाब और अंजी रेल पुलों का उद्घाटन किया। (PM Modi inaugurated the Chenab and Anji rail bridges in J&K.)",
      "चिनाब ब्रिज नदी तल से 359 मीटर ऊपर दुनिया का सबसे ऊँचा रेलवे आर्च ब्रिज है। अंजी ब्रिज भारत का पहला केबल-स्टेयड रेलवे पुल है। (Chenab Bridge is the world's highest rail arch bridge at 359m. Anji Bridge is India's first cable-stayed rail bridge.)",
      "ये पुल उधमपुर-श्रीनगर-बारामूला रेल लिंक (USBRL) परियोजना का हिस्सा हैं। अंजी पुल चिनाब की सहायक नदी अंजी पर स्थित है। (Part of the USBRL project. Anji bridge spans across Anji river, a tributary of Chenab.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545129139-1beb780cb337?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 26: Aravalli Green Wall Project ---
  {
    id: 't26-quiz',
    type: 'quiz',
    title: 'Aravalli Green Wall Project',
    subtitle: 'अरावली ग्रीन Wall प्रोजेक्ट',
    content: [
      "'अरावली ग्रीन Wall प्रोजेक्ट' के तहत अरावली पर्वतमाला के साथ कितने किलोमीटर चौड़ा ग्रीन बफर जोन बनाया जाएगा?",
      "Under the 'Aravalli Green Wall Project', how many kilometers wide green buffer zone will be created along the Aravalli range?"
    ],
    options: [
      { id: 'A', label: 'A', text: '10 किमी (10 km)' },
      { id: 'B', label: 'B', text: '1 किमी (1 km)' },
      { id: 'C', label: 'C', text: '2 किमी (2 km)' },
      { id: 'D', label: 'D', text: '5 किमी (5 km)' }
    ],
    correctOptionId: 'D',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't26-fact',
    type: 'fact',
    title: 'Aravalli Green Wall Project',
    subtitle: 'अरावली ग्रीन वॉल प्रोजेक्ट',
    content: [
      "मरुस्थलीकरण (Desertification) को रोकने के लिए 'अरावली ग्रीन वॉल प्रोजेक्ट' शुरू किया गया है। (Aravalli Green Wall project launched to combat desertification.)",
      "इस परियोजना का लक्ष्य 700 किमी लंबी अरावली श्रृंखला के साथ 5 किमी चौड़ा ग्रीन बफर जोन बनाना है। यह गुजरात, राजस्थान, हरियाणा और दिल्ली में फैला है। (Aim: 5 km wide green buffer along 700 km Aravalli stretch covering Gujarat, Rajasthan, Haryana, and Delhi.)",
      "यह प्रोजेक्ट मरुस्थलीकरण से निपटने के लिए संयुक्त राष्ट्र सम्मेलन (UNCCD) के प्रति भारत की प्रतिबद्धता में योगदान देता है। अरावली दुनिया की सबसे पुरानी पर्वत श्रृंखलाओं में से एक है। (Contributes to India’s commitments under the UNCCD; Aravalli is one of the world's oldest ranges.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 27: S. Mahendra Dev: New Chief of EAC-PM ---
  {
    id: 't27-quiz',
    type: 'quiz',
    title: 'S. Mahendra Dev: New Chief of EAC-PM',
    subtitle: 'EAC-PM के नए अध्यक्ष',
    content: [
      "प्रधानमंत्री की आर्थिक सलाहकार परिषद (EAC-PM) के नए अध्यक्ष के रूप में किसे नियुक्त किया गया है?",
      "Who has been appointed as the new Chairman of the Economic Advisory Council to the Prime Minister (EAC-PM)?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'सुमन बेरी (Suman Bery)' },
      { id: 'B', label: 'B', text: 'एस. महेंद्र देव (S. Mahendra Dev)' },
      { id: 'C', label: 'C', text: 'बिबेक देबरॉय (Bibek Debroy)' },
      { id: 'D', label: 'D', text: 'उर्जित पटेल (Urjit Patel)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't27-fact',
    type: 'fact',
    title: 'S. Mahendra Dev: New Chief of EAC-PM',
    subtitle: 'EAC-PM के नए अध्यक्ष',
    content: [
      "प्रसिद्ध अर्थशास्त्री एस. महेंद्र देव को EAC-PM का अध्यक्ष नियुक्त किया गया है, जिन्होंने सुमन बेरी का स्थान लिया है। (Economist S. Mahendra Dev appointed as Chairman of EAC-PM, replacing Suman Bery.)",
      "वे कृषि और ग्रामीण अर्थव्यवस्था के विशेषज्ञ हैं और 'इकोनॉमिक एंड पॉलिटिकल वीकली' (EPW) के संपादक भी हैं। (Expert in agriculture and rural economy; editor of EPW.)",
      "EAC-PM एक स्वतंत्र निकाय है जो प्रधानमंत्री को आर्थिक मुद्दों पर सलाह देने के लिए गठित किया गया है। (EAC-PM is an independent body constituted to give economic advice to the PM.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 28: New Base Year for GDP, CPI, IIP ---
  {
    id: 't28-quiz',
    type: 'quiz',
    title: 'New Base Year for GDP, CPI, IIP',
    subtitle: 'आर्थिक आंकड़ों के लिए नया आधार वर्ष',
    content: [
      "सकल घरेलू उत्पाद (GDP) और औद्योगिक उत्पादन सूचकांक (IIP) के लिए नया आधार वर्ष (Base Year) क्या निर्धारित किया गया है?",
      "What has been set as the new base year for GDP and IIP data?"
    ],
    options: [
      { id: 'A', label: 'A', text: '2011-12' },
      { id: 'B', label: 'B', text: '2018-19' },
      { id: 'C', label: 'C', text: '2022-23' },
      { id: 'D', label: 'D', text: '2024' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't28-fact',
    type: 'fact',
    title: 'New Base Year for GDP, CPI, IIP',
    subtitle: 'आर्थिक आंकड़ों के लिए नया आधार वर्ष',
    content: [
      "सांख्यिकी मंत्रालय (MoSPI) के अनुसार, अगले साल से GDP, IIP और CPI के लिए नए आधार वर्ष लागू होंगे। (MoSPI to implement new base years for GDP, IIP, and CPI from next year.)",
      "GDP और IIP के लिए नया आधार वर्ष 2022-23 होगा। CPI (रिटेल मुद्रास्फीति) के लिए नया आधार वर्ष 2024 होगा। (New base for GDP/IIP is 2022-23; for CPI it is 2024.)",
      "आधार वर्ष तुलना के लिए एक बेंचमार्क वर्ष होता है जो मुद्रास्फीति के प्रभाव को हटाकर वास्तविक विकास दिखाता है। (A base year is a benchmark for economic comparison to track real growth by removing inflation effects.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 29: ULLAS Program Update ---
  {
    id: 't29-quiz',
    type: 'quiz',
    title: 'ULLAS Program Update',
    subtitle: 'उल्लास कार्यक्रम अपडेट',
    content: [
      "मिजोरम और गोवा ने उल्लास (ULLAS) कार्यक्रम के तहत स्वयं को क्या घोषित किया है?",
      "What have Mizoram and Goa declared themselves under the ULLAS adult literacy programme?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'पूर्ण साक्षर (Fully Literate)' },
      { id: 'B', label: 'B', text: 'ओडीएफ प्लस (ODF Plus)' },
      { id: 'C', label: 'C', text: 'कार्बन न्यूट्रल (Carbon Neutral)' },
      { id: 'D', label: 'D', text: 'प्लास्टिक मुक्त (Plastic Free)' }
    ],
    correctOptionId: 'A',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't29-fact',
    type: 'fact',
    title: 'ULLAS Program Update',
    subtitle: 'उल्लास कार्यक्रम अपडेट',
    content: [
      "मिजोरम (98.2%) और गोवा (99.72%) ने उल्लास कार्यक्रम के तहत स्वयं को \"पूर्ण साक्षर\" घोषित किया है। (Mizoram and Goa declared \"fully literate\" under ULLAS.)",
      "उल्लास (New India Literacy Programme) का लक्ष्य 15+ आयु के उन वयस्कों को साक्षरता और जीवन कौशल प्रदान करना है जो स्कूली शिक्षा से वंचित रह गए। (ULLAS aims to provide functional literacy to adults aged 15+ who missed formal education.)",
      "यह कार्यक्रम स्वयंसेवा पर आधारित है और 'कर्तव्य बोध' की भावना को बढ़ावा देता है। यह राष्ट्रीय शिक्षा नीति (NEP) 2020 के अनुरूप है। (Volunteer-driven program aligned with NEP 2020.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 30: AI RAM Initiative ---
  {
    id: 't30-quiz',
    type: 'quiz',
    title: 'AI RAM Initiative',
    subtitle: 'एआई रैम पहल',
    content: [
      "'एआई रेडीनेस असेसमेंट मेथोडोलॉजी' (RAM) पहल किस वैश्विक संस्था के दक्षिण एशिया क्षेत्रीय कार्यालय के सहयोग से आयोजित की गई?",
      "The 'AI Readiness Assessment Methodology' (RAM) initiative was organized in collaboration with the regional office of which global body?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'यूनिसेफ (UNICEF)' },
      { id: 'B', label: 'B', text: 'विश्व बैंक (World Bank)' },
      { id: 'C', label: 'C', text: 'डब्ल्यूएचओ (WHO)' },
      { id: 'D', label: 'D', text: 'यूनेस्को (UNESCO)' }
    ],
    correctOptionId: 'D',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't30-fact',
    type: 'fact',
    title: 'AI RAM Initiative',
    subtitle: 'एआई रैम पहल',
    content: [
      "यूनेस्को के दक्षिण एशिया क्षेत्रीय कार्यालय ने 'INDIAai Mission' के सहयोग से AI RAM पर परामर्श आयोजित किया। (UNESCO Regional Office and IndiaAI Mission organized AI RAM consultation.)",
      "इसका उद्देश्य भारत-विशिष्ट एआई नीति रिपोर्ट विकसित करना है जो क्षेत्रों में एआई के नैतिक और जिम्मेदार अपनाने के लिए सुझाव देती है। (Aims to develop an India-specific AI policy for ethical and responsible AI adoption.)",
      "यह पहल 10,000 करोड़ रुपये से अधिक के फंड के साथ लॉन्च किए गए 'INDIAai मिशन' के अनुरूप है। (Aligns with the INDIAai Mission launched with over Rs 10,000 crore funding.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 31: World Accreditation Day 2025 ---
  {
    id: 't31-quiz',
    type: 'quiz',
    title: 'World Accreditation Day 2025',
    subtitle: 'विश्व प्रत्यायन दिवस 2025',
    content: [
      "'विश्व प्रत्यायन दिवस' (WAD) 2025 का विषय (Theme) क्या है?",
      "What is the theme of 'World Accreditation Day' (WAD) 2025?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'गुणवत्तापूर्ण शिक्षा (Quality Education)' },
      { id: 'B', label: 'B', text: 'प्रत्यायन: एसएमई (SMEs) को सशक्त बनाना (Accreditation: Empowering SMEs)' },
      { id: 'C', label: 'C', text: 'डिजिटल इंडिया (Digital India)' },
      { id: 'D', label: 'D', text: 'सुरक्षित स्वास्थ्य (Safe Health)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't31-fact',
    type: 'fact',
    title: 'World Accreditation Day 2025',
    subtitle: 'विश्व प्रत्यायन दिवस 2025',
    content: [
      "9 जून को भारतीय गुणवत्ता परिषद (QCI) द्वारा विश्व प्रत्यायन दिवस मनाया गया जिसकी थीम \"प्रत्यायन: लघु और मध्यम उद्यमों (SMEs) को सशक्त बनाना\" थी। (Quality Council of India celebrated WAD on June 9th. Theme: “Accreditation: Empowering Small and Medium Enterprises”.)",
      "QCI 1997 में वाणिज्य और उद्योग मंत्रालय (DPIIT) के तहत स्थापित एक स्वायत्त निकाय है। (QCI is an autonomous body under DPIIT established in 1997.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589561093571-08a142e443ad?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 32: UNFPA State of World Population 2025 ---
  {
    id: 't32-quiz',
    type: 'quiz',
    title: 'UNFPA State of World Population 2025',
    subtitle: 'विश्व जनसंख्या रिपोर्ट 2025',
    content: [
      "संयुक्त राष्ट्र की रिपोर्ट 'स्टेट ऑफ द वर्ल्ड पॉपुलेशन 2025' के अनुसार, दुनिया का सबसे अधिक आबादी वाला देश कौन सा है?",
      "According to the UN report ‘State of the World Population 2025’, which is the world’s most populous country?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'चीन (China)' },
      { id: 'B', label: 'B', text: 'अमेरिका (USA)' },
      { id: 'C', label: 'C', text: 'भारत (India)' },
      { id: 'D', label: 'D', text: 'इंडोनेशिया (Indonesia)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't32-fact',
    type: 'fact',
    title: 'UNFPA State of World Population 2025',
    subtitle: 'विश्व जनसंख्या रिपोर्ट 2025',
    content: [
      "संयुक्त राष्ट्र (UNFPA) की रिपोर्ट के अनुसार, अप्रैल 2025 तक भारत की जनसंख्या 146.39 करोड़ पहुँच गई है। (India’s population reached 146.39 crore by April 2025 per UNFPA.)",
      "भारत ने चीन (141.61 करोड़) को पीछे छोड़ दिया है। भारत की कुल प्रजनन दर (TFR) गिरकर 1.9 हो गई है, जो प्रतिस्थापन स्तर (2.1) से नीचे है। (India surpassed China. India’s TFR is 1.9, below replacement level of 2.1.)",
      "भारत की 68% जनसंख्या कार्यशील आयु वर्ग (15-64 वर्ष) में है। जनसंख्या के 40 वर्षों में गिरावट शुरू होने से पहले 170 करोड़ तक पहुँचने की उम्मीद है। (68% of India's population is in the working-age group. Expected to peak at 170 crore.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542362567-b054ec4f2175?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 33: National Investment and Infrastructure Fund (NIIF) ---
  {
    id: 't33-quiz',
    type: 'quiz',
    title: 'National Investment and Infrastructure Fund (NIIF)',
    subtitle: 'राष्ट्रीय निवेश और अवसंरचना कोष',
    content: [
      "राष्ट्रीय निवेश और अवसंरचना कोष (NIIF) की गवर्निंग काउंसिल (GC) की अध्यक्षता किसके द्वारा की जाती है?",
      "Who chairs the Governing Council (GC) of the National Investment and Infrastructure Fund (NIIF)?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'प्रधानमंत्री (Prime Minister)' },
      { id: 'B', label: 'B', text: 'नीति आयोग के सीईओ (CEO of NITI Aayog)' },
      { id: 'C', label: 'C', text: 'केंद्रीय वित्त मंत्री (Union Finance Minister)' },
      { id: 'D', label: 'D', text: 'भारत के रिजर्व बैंक के गवर्नर (Governor of RBI)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't33-fact',
    type: 'fact',
    title: 'National Investment and Infrastructure Fund (NIIF)',
    subtitle: 'राष्ट्रीय निवेश और अवसंरचना कोष',
    content: [
      "केंद्रीय वित्त मंत्री ने नई दिल्ली में NIIF की गवर्निंग काउंसिल की छठी बैठक की अध्यक्षता की। (The Union Finance Minister chaired the 6th meeting of the Governing Council of NIIF in New Delhi.)",
      "NIIF को 2015 में भारत सरकार द्वारा एक संप्रभु-लिंक्ड निवेश प्लेटफॉर्म के रूप में स्थापित किया गया था। इसमें भारत सरकार की 49% हिस्सेदारी है। (NIIF was established in 2015 as a sovereign-linked investment platform. GOI holds 49% share.)",
      "NIIF सेबी (SEBI) के पास वैकल्पिक निवेश कोष (AIF) के रूप में पंजीकृत है। AIF निजी तौर पर एकत्रित निवेश वाहन हैं। (NIIF is registered with SEBI as an Alternative Investment Fund (AIF). AIFs are privately pooled vehicles.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 34: ILOSTAT Report on India’s Social Security ---
  {
    id: 't34-quiz',
    type: 'quiz',
    title: 'ILOSTAT Report on India’s Social Security',
    subtitle: 'सामाजिक सुरक्षा पर ILO की रिपोर्ट',
    content: [
      "ILOSTAT के 2025 के आंकड़ों के अनुसार, भारत की सामाजिक सुरक्षा कवरेज (Social Security Coverage) बढ़कर कितने प्रतिशत हो गई है?",
      "According to ILOSTAT 2025 data, India’s social security coverage has increased to what percentage?"
    ],
    options: [
      { id: 'A', label: 'A', text: '19%' },
      { id: 'B', label: 'B', text: '45%' },
      { id: 'C', label: 'C', text: '94%' },
      { id: 'D', label: 'D', text: '64.3%' }
    ],
    correctOptionId: 'D',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't34-fact',
    type: 'fact',
    title: 'ILOSTAT Report on India’s Social Security',
    subtitle: 'सामाजिक सुरक्षा पर ILO की रिपोर्ट',
    content: [
      "भारत की सामाजिक सुरक्षा कवरेज 2025 में बढ़कर 64.3% हो गई है, जो एक दशक पहले 19% थी। (According to ILO data, India’s social security coverage rose to 64.3% in 2025 from 19% a decade ago.)",
      "भारत अब सामाजिक सुरक्षा कवरेज में दुनिया में दूसरे स्थान पर है, जो अपने 94 करोड़ से अधिक नागरिकों को सुरक्षा प्रदान कर रहा है। (India ranks 2nd globally, covering over 94 crore citizens.)",
      "प्रमुख पहलों में पीएम श्रम योगी मान-धन (PMSYM), अटल पेंशन योजना (APY) और आयुष्मान भारत (PM-JAY) शामिल हैं। (Key initiatives include PMSYM, APY, and Ayushman Bharat.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 35: Lokpal of India: New Motto ---
  {
    id: 't35-quiz',
    type: 'quiz',
    title: 'Lokpal of India: New Motto',
    subtitle: 'लोकपाल: नया आदर्श वाक्य',
    content: [
      "लोकपाल (Lokpal) द्वारा हाल ही में अपनाया गया नया आदर्श वाक्य (Motto) क्या है?",
      "What is the new motto recently adopted by the Lokpal of India?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'भ्रष्टाचार मुक्त भारत (Corruption Free India)' },
      { id: 'B', label: 'B', text: 'नागरिकों को सशक्त बनाएं, भ्रष्टाचार को उजागर करें (Empower Citizens, Expose Corruption)' },
      { id: 'C', label: 'C', text: 'सत्यमेव जयते (Satyamev Jayate)' },
      { id: 'D', label: 'D', text: 'लोकहित सर्वोपरि (Public Interest Supreme)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't35-fact',
    type: 'fact',
    title: 'Lokpal of India: New Motto',
    subtitle: 'लोकपाल: नया आदर्श वाक्य',
    content: [
      "भारत के लोकपाल की पूर्ण पीठ ने \"नागरिकों को सशक्त बनाएं, भ्रष्टाचार को उजागर करें\" नामक एक नया आदर्श वाक्य अपनाया है। (The Full Bench of Lokpal adopted the new motto “Empower Citizens, Expose Corruption”.)",
      "लोकपाल सार्वजनिक कार्यालयों में भ्रष्टाचार की शिकायतों के समाधान के लिए एक वैधानिक निकाय है। (Statutory anti-corruption body created via the 2013 Act.)",
      "लोकपाल का अध्यक्ष सेवानिवृत्त CJI या सुप्रीम कोर्ट का न्यायाधीश होता है जिसकी नियुक्ति चयन समिति की सिफारिश पर की जाती है। (Chairperson is a retired CJI/SC judge appointed by a high-level committee.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d8?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 36: UNESCO Creative City: Lucknow ---
  {
    id: 't36-quiz',
    type: 'quiz',
    title: 'UNESCO Creative City: Lucknow',
    subtitle: 'यूनेस्को क्रिएटिव सिटी: लखनऊ',
    content: [
      "यूनेस्को (UNESCO) के क्रिएटिव सिटीज नेटवर्क (UCCN) में लखनऊ को किस श्रेणी के लिए प्रस्तावित किया गया है?",
      "Under which category has Lucknow been proposed for the UNESCO Creative Cities Network (UCCN)?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'साहित्य (Literature)' },
      { id: 'B', label: 'B', text: 'फिल्म (Film)' },
      { id: 'C', label: 'C', text: 'संगीत (Music)' },
      { id: 'D', label: 'D', text: 'गैस्ट्रोनॉमी (Gastronomy)' }
    ],
    correctOptionId: 'D',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't36-fact',
    type: 'fact',
    title: 'UNESCO Creative City: Lucknow',
    subtitle: 'यूनेस्को क्रिएटिव सिटी: लखनऊ',
    content: [
      "अवधी व्यंजन के लिए 'गैस्ट्रोनॉमी' श्रेणी के तहत लखनऊ को यूनेस्को क्रिएटिव सिटी बनाने का प्रस्ताव विश्व विरासत केंद्र को भेजा गया है। (A proposal for Lucknow under 'Gastronomy' for Awadhi Cuisine was submitted to UNESCO.)",
      "UCCN की स्थापना 2004 में हुई थी और यह शिल्प, फिल्म, गैस्ट्रोनॉमी, साहित्य और संगीत जैसे क्षेत्रों पर ध्यान केंद्रित करता है। (UCCN was created in 2004 focusing on seven creative fields.)",
      "भारत के अन्य यूनेस्को क्रिएटिव शहर जयपुर (शिल्प), वाराणसी (संगीत), मुंबई (फिल्म) और हैदराबाद (गैस्ट्रोनॉमी) हैं। (Other Indian cities: Jaipur-Crafts, Varanasi-Music, Mumbai-Film, Hyderabad-Gastronomy.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 37: Exercise ‘Khaan Quest’ ---
  {
    id: 't37-quiz',
    type: 'quiz',
    title: 'Exercise ‘Khaan Quest’',
    subtitle: 'अभ्यास ‘खान क्वेस्ट’',
    content: [
      "बहुराष्ट्रीय सैन्य अभ्यास 'खान क्वेस्ट' (Khaan Quest) का आयोजन किस देश में किया जा रहा है?",
      "In which country is the multinational military exercise ‘Khaan Quest’ being organized?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'भारत (India)' },
      { id: 'B', label: 'B', text: 'अमेरिका (USA)' },
      { id: 'C', label: 'C', text: 'मंगोलिया (Mongolia)' },
      { id: 'D', label: 'D', text: 'रूस (Russia)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't37-fact',
    type: 'fact',
    title: 'Exercise ‘Khaan Quest’',
    subtitle: 'अभ्यास ‘खान क्वेस्ट’',
    content: [
      "भारतीय सेना का दल बहुराष्ट्रीय सैन्य अभ्यास 'खान क्वेस्ट' में भाग लेने के लिए उलानबटोर, मंगोलिया पहुँचा। (Indian Army reached Mongolia for the multinational Exercise Khaan Quest.)",
      "यह एक वार्षिक अभ्यास है जो शांति सेना की क्षमताओं (Peacekeeping capabilities) को बढ़ाने के लिए दुनिया भर की सेनाओं को एक साथ लाता है। (Annual exercise to enhance peacekeeping capabilities.)",
      "यह 2003 में अमेरिका और मंगोलिया के बीच द्विपक्षीय अभ्यास के रूप में शुरू हुआ था और 2006 से बहुराष्ट्रीय बन गया। (Started in 2003 as US-Mongolia bilateral; multinational since 2006.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547483129-45009da1476c?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 38: AAIB and Air India Crash ---
  {
    id: 't38-quiz',
    type: 'quiz',
    title: 'AAIB and Air India Crash',
    subtitle: 'एएआईबी और एयर इंडिया विमान दुर्घटना',
    content: [
      "विमान में 'ब्लैक बॉक्स' (Black Box) का क्या कार्य होता है?",
      "What is the function of a 'Black Box' in an aircraft?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'इंजन को ठंडा करना (Cooling the engine)' },
      { id: 'B', label: 'B', text: 'उड़ान की जानकारी और कॉकपिट की आवाज़ रिकॉर्ड करना (Recording flight data and cockpit audio)' },
      { id: 'C', label: 'C', text: 'यात्रियों को भोजन परोसना (Serving food to passengers)' },
      { id: 'D', label: 'D', text: 'विमान की दिशा बदलना (Changing aircraft direction)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't38-fact',
    type: 'fact',
    title: 'AAIB and Air India Crash',
    subtitle: 'एएआईबी और एयर इंडिया विमान दुर्घटना',
    content: [
      "विमान दुर्घटना जांच ब्यूरो (AAIB) ने अहमदाबाद में एयर इंडिया विमान दुर्घटना की औपचारिक जांच शुरू की है। (AAIB initiated investigation into the Air India crash in Ahmedabad.)",
      "'ब्लैक बॉक्स' के दो घटक होते हैं: कॉकपिट वॉयस रिकॉर्डर (CVR) और फ्लाइट डेटा रिकॉर्डर (FDR)। यह दुर्घटना के कारणों का पता लगाने में मदद करता है। (Black Box has CVR for audio and FDR for data. It helps discover crash causes.)",
      "AAIB की स्थापना 2012 में नागरिक उड्डयन मंत्रालय के तहत हुई थी। ICAO एक संयुक्त राष्ट्र एजेंसी है जिसका मुख्यालय मॉन्ट्रियल में है। (AAIB established in 2012 under Ministry of Civil Aviation. ICAO HQ is in Montreal.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 39: Global Gender Gap Index 2025 ---
  {
    id: 't39-quiz',
    type: 'quiz',
    title: 'Global Gender Gap Index 2025',
    subtitle: 'ग्लोबल जेंडर गैप इंडेक्स 2025',
    content: [
      "'ग्लोबल जेंडर गैप रिपोर्ट 2025' में भारत का कौन सा स्थान है?",
      "What is India’s rank in the 'Global Gender Gap Report 2025'?"
    ],
    options: [
      { id: 'A', label: 'A', text: '127वां (127th)' },
      { id: 'B', label: 'B', text: '148वां (148th)' },
      { id: 'C', label: 'C', text: '131वां (131st)' },
      { id: 'D', label: 'D', text: '1वां (1st)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't39-fact',
    type: 'fact',
    title: 'Global Gender Gap Index 2025',
    subtitle: 'ग्लोबल जेंडर गैप इंडेक्स 2025',
    content: [
      "विश्व आर्थिक मंच (WEF) ने ग्लोबल जेंडर गैप रिपोर्ट 2025 का 19वां संस्करण जारी किया है। (World Economic Forum released the 19th edition of the Global Gender Gap Report 2025.)",
      "भारत 148 देशों में से 131वें स्थान पर खिसक गया है। राजनीतिक सशक्तिकरण में गिरावट रैंकिंग गिरने का मुख्य कारण रहा। (India slipped to 131st out of 148. Decline in political empowerment caused the rank drop.)",
      "आइसलैंड लगातार 16वें वर्ष सबसे अधिक लिंग-समान देश रहा। पूर्ण लैंगिक समानता प्राप्त करने में अभी भी 123 वर्ष लगेंगे। (Iceland remains 1st for 16 years. 123 years needed to close global gap.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 40: Interpol’s Silver Notice & Bharatpol ---
  {
    id: 't40-quiz',
    type: 'quiz',
    title: 'Interpol’s Silver Notice & Bharatpol',
    subtitle: 'इंटरपोल सिल्वर नोटिस और भारतपोल',
    content: [
      "इंटरपोल द्वारा जारी 'सिल्वर नोटिस' (Silver Notice) का मुख्य उद्देश्य क्या है?",
      "What is the primary purpose of the 'Silver Notice' issued by Interpol?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'भगोड़ों को गिरफ्तार करना (Arresting fugitives)' },
      { id: 'B', label: 'B', text: 'अपराध की आय और संपत्ति का पता लगाना (Tracing proceeds of crime and assets)' },
      { id: 'C', label: 'C', text: 'लापता व्यक्तियों को ढूंढना (Finding missing persons)' },
      { id: 'D', label: 'D', text: 'सार्वजनिक सुरक्षा की चेतावनी (Warning about public safety)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't40-fact',
    type: 'fact',
    title: 'Interpol’s Silver Notice & Bharatpol',
    subtitle: 'इंटरपोल सिल्वर नोटिस और भारतपोल',
    content: [
      "CBI ने फ्रांस दूतावास वीजा धोखाधड़ी मामले से संबंधित अपराध की आय का पता लगाने के लिए भारत का पहला 'सिल्वर नोटिस' जारी कराया है। (CBI got India’s first ‘silver notice’ to trace proceeds of crime.)",
      "इंटरपोल का मुख्यालय ल्योन, फ्रांस में है और भारत में इसकी नेशनल सेंट्रल ब्यूरो (NCB) सीबीआई है। (Interpol HQ is in Lyon, France. India’s NCB is the CBI.)",
      "'भारतपोल' पोर्टल सीबीआई द्वारा विकसित किया गया है जो कानून प्रवर्तन एजेंसियों और इंटरपोल के बीच सहयोग बढ़ाता है। (Bharatpol facilitates cooperation with Interpol. Notices include Red, Yellow, and Blue.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 48: 51st G7 Summit ---
  {
    id: 't48-quiz',
    type: 'quiz',
    title: '51st G7 Summit',
    subtitle: '51वां जी7 शिखर सम्मेलन',
    content: [
      "कनाडा द्वारा आयोजित 51वें जी7 (G7) शिखर सम्मेलन 2025 का मुख्य विषय (Theme) क्या है?",
      "What is the main theme of the 51st G7 Summit 2025 hosted by Canada?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'वैश्विक अर्थव्यवस्था का पुनर्निर्माण (Rebuilding the global economy)' },
      { id: 'B', label: 'B', text: 'भविष्य की साझेदारी को सुरक्षित करना (Securing the partnerships of the future)' },
      { id: 'C', label: 'C', text: 'हरित ऊर्जा और डिजिटल परिवर्तन (Green Energy and Digital Transition)' },
      { id: 'D', label: 'D', text: 'उपरोक्त सभी (All of the above)' }
    ],
    correctOptionId: 'D',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't48-fact',
    type: 'fact',
    title: '51st G7 Summit',
    subtitle: '51वां जी7 शिखर सम्मेलन',
    content: [
      "प्रधानमंत्री नरेंद्र मोदी ने कनाडा के कनानास्कि (Kananaskis) में आयोजित 51वें जी-7 शिखर सम्मेलन में भाग लिया। (PM Modi participated in the 51st G7 Summit held in Kananaskis, Canada.)",
      "सम्मेलन के तीन मुख्य स्तंभ समुदायों की रक्षा, ऊर्जा सुरक्षा/डिजिटल परिवर्तन और भविष्य की साझेदारी हैं। (The summit's three pillars are protecting communities, energy security/digital transition, and future partnerships.)",
      "जी7 सात उन्नत अर्थव्यवस्थाओं (फ्रांस, जर्मनी, इटली, जापान, यूके, यूएस और कनाडा) और यूरोपीय संघ का एक समूह है। (G7 is a group of 7 advanced economies and the European Union.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 49: Strait of Hormuz ---
  {
    id: 't49-quiz',
    type: 'quiz',
    title: 'Strait of Hormuz',
    subtitle: 'होर्मुज जलडमरूमध्य',
    content: [
      "होर्मुज जलडमरूमध्य (Strait of Hormuz) किन दो जल निकायों को जोड़ता है?",
      "The Strait of Hormuz connects which two bodies of water?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'लाल सागर और अरब सागर (Red Sea and Arabian Sea)' },
      { id: 'B', label: 'B', text: 'फारस की खाड़ी और ओमान की खाड़ी (Persian Gulf and Gulf of Oman)' },
      { id: 'C', label: 'C', text: 'बंगाल की खाड़ी और हिंद महासागर (Bay of Bengal and Indian Ocean)' },
      { id: 'D', label: 'D', text: 'भूमध्य सागर और अटलांटिक महासागर (Mediterranean Sea and Atlantic Ocean)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't49-fact',
    type: 'fact',
    title: 'Strait of Hormuz',
    subtitle: 'होर्मुज जलडमरूमध्य',
    content: [
      "होर्मुज जलडमरूमध्य फारस की खाड़ी और ओमान की खाड़ी को जोड़ने वाला एक रणनीतिक जलमार्ग है। (The Strait of Hormuz is a strategic waterway connecting the Persian Gulf and the Gulf of Oman.)",
      "दुनिया की तेल आपूर्ति का लगभग 20% और भारत का अधिकांश ऊर्जा आयात इसी मार्ग से गुजरता है। (About 20% of global oil supply and most of India's energy imports pass through this route.)",
      "यह ईरान और ओमान के बीच स्थित है और वैश्विक व्यापार के लिए एक महत्वपूर्ण 'चोक पॉइंट' माना जाता है। (It is located between Iran and Oman and is considered a vital maritime choke point.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544933863-4528193b6201?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 50: INS Arnala (ASW-SWC) ---
  {
    id: 't50-quiz',
    type: 'quiz',
    title: 'INS Arnala (ASW-SWC)',
    subtitle: 'आईएनएस अरनाला (ASW-SWC)',
    content: [
      "भारत के पहले एंटी-सबमरीन वारफेयर शैलो वॉटर क्राफ्ट (ASW-SWC) का नाम क्या है जिसे विशाखापत्तनम में कमीशन किया जाएगा?",
      "What is the name of India's first Anti-Submarine Warfare Shallow Water Craft (ASW-SWC) to be commissioned in Visakhapatnam?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'आईएनएस विक्रांत (INS Vikrant)' },
      { id: 'B', label: 'B', text: 'आईएनएस अरनाला (INS Arnala)' },
      { id: 'C', label: 'C', text: 'आईएनएस नीलगिरी (INS Nilgiri)' },
      { id: 'D', label: 'D', text: 'आईएनएस तमाल (INS Tamal)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't50-fact',
    type: 'fact',
    title: 'INS Arnala (ASW-SWC)',
    subtitle: 'आईएनएस अरनाला (ASW-SWC)',
    content: [
      "भारतीय नौसेना विशाखापत्तनम में देश के पहले एंटी-सबमरीन वारफेयर शैलो वॉटर क्राफ्ट जहाज आईएनएस अरनाला को कमीशन करने के लिए तैयार है। (Indian Navy is set to commission INS Arnala, the country's first ASW-SWC vessel, in Visakhapatnam.)",
      "इसका नाम महाराष्ट्र के ऐतिहासिक अरनाला किले के नाम पर रखा गया है और इसे जीआरएसई (GRSE) कोलकाता द्वारा बनाया गया है। (Named after Arnala Fort in Maharashtra, it was built by GRSE Kolkata.)",
      "इसमें 80% से अधिक स्वदेशी सामग्री है और यह जलप्रलय (waterjet) प्रणोदन प्रणाली से संचालित है। (It has over 80% indigenous content and is powered by a waterjet propulsion system.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 51: Third UN Oceans Conference (UNOC) ---
  {
    id: 't51-quiz',
    type: 'quiz',
    title: 'Third UN Oceans Conference (UNOC)',
    subtitle: 'तीसरा संयुक्त राष्ट्र महासागर सम्मेलन',
    content: [
      "तीसरे संयुक्त राष्ट्र महासागर सम्मेलन (UNOC) 2025 का आयोजन कहाँ किया गया?",
      "Where was the third United Nations Oceans Conference (UNOC) 2025 held?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'न्यूयॉर्क, यूएसए (New York, USA)' },
      { id: 'B', label: 'B', text: 'नीस, फ्रांस (Nice, France)' },
      { id: 'C', label: 'C', text: 'नई दिल्ली, भारत (New Delhi, India)' },
      { id: 'D', label: 'D', text: 'सियोल, दक्षिण कोरिया (Seoul, South Korea)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't51-fact',
    type: 'fact',
    title: 'Third UN Oceans Conference (UNOC)',
    subtitle: 'तीसरा संयुक्त राष्ट्र महासागर सम्मेलन',
    content: [
      "फ्रांस के नीस में आयोजित सम्मेलन समुद्री पारिस्थितिक तंत्र की रक्षा के वादों के साथ संपन्न हुआ और 'नीस ओशन एक्शन प्लान' को अपनाया गया। (The UNOC held in Nice, France, concluded with marine conservation commitments and the adoption of the 'Nice Ocean Action Plan'.)",
      "भारत ने हाई सीज़ ट्रीटी (BBNJ Agreement) की पुष्टि करने का वादा किया और फ्रेंच पोलिनेशिया ने दुनिया का सबसे बड़ा समुद्री संरक्षित क्षेत्र बनाने की घोषणा की। (India pledged to ratify the High Seas Treaty, while French Polynesia announced the creation of the world's largest MPA.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 52: India Post Payments Bank (IPPB) ---
  {
    id: 't52-quiz',
    type: 'quiz',
    title: 'India Post Payments Bank (IPPB)',
    subtitle: 'इंडिया पोस्ट पेमेंट्स बैंक',
    content: [
      "डिजिटल भुगतान को बढ़ावा देने के लिए किस भुगतान बैंक को 'डिजिटल पेमेंट्स अवार्ड 2024-25' से सम्मानित किया गया है?",
      "Which payments bank was honored with the 'Digital Payments Award 2024–25' for promoting digital payments?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'एयरटेल पेमेंट्स बैंक (Airtel Payments Bank)' },
      { id: 'B', label: 'B', text: 'पेटीएम पेमेंट्स बैंक (Paytm Payments Bank)' },
      { id: 'C', label: 'C', text: 'इंडिया पोस्ट पेमेंट्स बैंक (IPPB)' },
      { id: 'D', label: 'D', text: 'फिनो पेमेंट्स बैंक (Fino Payments Bank)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't52-fact',
    type: 'fact',
    title: 'India Post Payments Bank (IPPB)',
    subtitle: 'इंडिया पोस्ट पेमेंट्स बैंक',
    content: [
      "वित्त मंत्रालय ने इंडिया पोस्ट पेमेंट्स बैंक (IPPB) को डिजिटल भुगतान और वित्तीय समावेशन को बढ़ावा देने के लिए पुरस्कृत किया। (Ministry of Finance awarded IPPB for promoting digital payments and financial inclusion.)",
      "IPPB की स्थापना 2018 में हुई थी और यह 100% भारत सरकार के स्वामित्व वाली इकाई है जो 1.65 लाख डाकघरों के नेटवर्क का उपयोग करती है। (IPPB was launched in 2018 as a 100% Govt-owned entity leveraging a network of 1.65 lakh post offices.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621416848440-236914c7467e?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 53: Gharial Species Conservation Programme ---
  {
    id: 't53-quiz',
    type: 'quiz',
    title: 'Gharial Species Conservation Programme',
    subtitle: 'घड़ियाल प्रजाति संरक्षण कार्यक्रम',
    content: [
      "हाल ही में उत्तर प्रदेश के किस वन्यजीव अभयारण्य में 'घड़ियाल प्रजाति संरक्षण कार्यक्रम' शुरू किया गया है?",
      "In which wildlife sanctuary of Uttar Pradesh was the 'Gharial Species Conservation Programme' recently launched?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'दुधवा नेशनल पार्क (Dudhwa National Park)' },
      { id: 'B', label: 'B', text: 'कतर्नियाघाट वन्यजीव अभयारण्य (Katarniaghat Wildlife Sanctuary)' },
      { id: 'C', label: 'C', text: 'चंबल अभयारण्य (Chambal Sanctuary)' },
      { id: 'D', label: 'D', text: 'चंद्रप्रभा अभयारण्य (Chandraprabha Sanctuary)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't53-fact',
    type: 'fact',
    title: 'Gharial Species Conservation Programme',
    subtitle: 'घड़ियाल प्रजाति संरक्षण कार्यक्रम',
    content: [
      "केंद्रीय पर्यावरण मंत्री ने कतर्नियाघाट की गेरुआ नदी में घड़ियाल के बच्चों को छोड़कर इस कार्यक्रम की शुरुआत की। (Environment Minister launched the programme by releasing Gharials into the Gerua River, Katarniaghat.)",
      "घड़ियाल केवल मछलियाँ खाते हैं और IUCN स्टेटस के अनुसार 'गंभीर रूप से लुप्तप्राय' हैं जिन्हें 1972 के अधिनियम के तहत सूचीबद्ध किया गया है। (Gharials feed on fish and are Critically Endangered; they are protected under Schedule 1 of the Wildlife Act.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549240923-93a2e080e653?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 54: Operation Midnight Hammer ---
  {
    id: 't54-quiz',
    type: 'quiz',
    title: 'Operation Midnight Hammer',
    subtitle: 'ऑपरेशन मिडनाइट हैमर',
    content: [
      "'ऑपरेशन मिडनाइट हैमर' (Operation Midnight Hammer) किस देश के परमाणु ठिकानों पर अमेरिका द्वारा किए गए हमलों का नाम है?",
      "'Operation Midnight Hammer' is the name of US strikes on nuclear installations of which country?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'उत्तर कोरिया (North Korea)' },
      { id: 'B', label: 'B', text: 'रूस (Russia)' },
      { id: 'C', label: 'C', text: 'ईरान (Iran)' },
      { id: 'D', label: 'D', text: 'इराक (Iraq)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't54-fact',
    type: 'fact',
    title: 'Operation Midnight Hammer',
    subtitle: 'ऑपरेशन मिडनाइट हैमर',
    content: [
      "अमेरिका ने ईरान के तीन प्रमुख परमाणु ठिकानों—नतांज, फोर्डो और इस्फहान—पर हवाई हमले किए जिन्हें 'ऑपरेशन मिडनाइट हैमर' नाम दिया गया। (The US conducted air strikes on three major Iranian nuclear sites: Natanz, Fordow, and Isfahan under 'Operation Midnight Hammer'.)",
      "यह हमला ईरान के परमाणु बुनियादी ढांचे को लक्षित करने वाला पहला प्रत्यक्ष अमेरिकी सैन्य हस्तक्षेप है। (This attack marks the first direct US military intervention targeting Iran's nuclear infrastructure.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 55: Project 17A Stealth Frigates: INS Nilgiri ---
  {
    id: 't55-quiz',
    type: 'quiz',
    title: 'Project 17A Stealth Frigates: INS Nilgiri',
    subtitle: 'प्रोजेक्ट 17A स्टील्थ फ्रिगेट: आईएनएस नीलगिरी',
    content: [
      "प्रोजेक्ट 17A के तहत निर्मित पहला स्वदेशी स्टील्थ फ्रिगेट कौन सा है जो पूर्वी नौसेना कमान में शामिल हुआ है?",
      "Which is the first indigenously built Project 17A stealth frigate to join the Eastern Naval Command?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'आईएनएस शिवालिक (INS Shivalik)' },
      { id: 'B', label: 'B', text: 'आईएनएस नीलगिरी (INS Nilgiri)' },
      { id: 'C', label: 'C', text: 'आईएनएस उदयगिरी (INS Udaygiri)' },
      { id: 'D', label: 'D', text: 'आईएनएस विंध्यगिरी (INS Vindhyagiri)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't55-fact',
    type: 'fact',
    title: 'Project 17A Stealth Frigates: INS Nilgiri',
    subtitle: 'प्रोजेक्ट 17A स्टील्थ फ्रिगेट: आईएनएस नीलगिरी',
    content: [
      "आईएनएस नीलगिरी मझगांव डॉक शिपबिल्डर्स लिमिटेड (MDL) द्वारा निर्मित प्रोजेक्ट 17A का पहला स्टील्थ फ्रिगेट है। (INS Nilgiri is the first Project 17A stealth frigate built by MDL; it is an advanced follow-on to the Shivalik class.)",
      "इसे एंटी-एयर, एंटी-सरफेस और एंटी-सबमरीन युद्ध के लिए डिज़ाइन किया गया है और यह विशाखापत्तनम के 'सनराइज फ्लीट' में शामिल हुआ है। (Designed for multi-dimensional warfare, it has joined the Eastern Naval Command’s Sunrise Fleet in Visakhapatnam.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 56: INS Tamal: Multi-role Frigate ---
  {
    id: 't56-quiz',
    type: 'quiz',
    title: 'INS Tamal: Multi-role Frigate',
    subtitle: 'आईएनएस तमाल: मल्टी-रोल फ्रिगेट',
    content: [
      "भारतीय नौसेना का वह अंतिम युद्धपोत कौन सा है जिसे भारत के बाहर (रूस में) निर्मित किया गया है?",
      "Which is the last warship of the Indian Navy to have been built outside India (in Russia)?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'आईएनएस तलवार (INS Talwar)' },
      { id: 'B', label: 'B', text: 'आईएनएस तमाल (INS Tamal)' },
      { id: 'C', label: 'C', text: 'आईएनएस तुशील (INS Tushil)' },
      { id: 'D', label: 'D', text: 'आईएनएस तेग (INS Teg)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't56-fact',
    type: 'fact',
    title: 'INS Tamal: Multi-role Frigate',
    subtitle: 'आईएनएस तमाल: मल्टी-रोल फ्रिगेट',
    content: [
      "आईएनएस तमाल रूस के कलिनिनग्राद में निर्मित 'तुशील' श्रेणी का दूसरा जहाज है और भारत के बाहर बनने वाला अंतिम युद्धपोत है। (INS Tamal is the second Tushil-class vessel built in Kaliningrad and the last Indian warship constructed abroad.)",
      "इसमें ब्रह्मोस क्रूज मिसाइल सहित 26% स्वदेशी घटक हैं और इसका नया डिज़ाइन बेहतर स्टील्थ सुविधाएँ प्रदान करता है। (It features 26% indigenous components, including BrahMos missiles, and an enhanced stealth design.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551047125-9922e9603f95?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 57: NAVYA Initiative ---
  {
    id: 't57-quiz',
    type: 'quiz',
    title: 'NAVYA Initiative',
    subtitle: 'नव्या (NAVYA) पहल',
    content: [
      "'नव्या' (NAVYA) पहल का मुख्य उद्देश्य किशोरियों (16-18 वर्ष) को किस क्षेत्र में कौशल प्रदान करना है?",
      "What is the primary objective of the 'NAVYA' initiative for adolescent girls (16-18 years)?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'केवल सिलाई और बुनाई (Only sewing and knitting)' },
      { id: 'B', label: 'B', text: 'गैर-पारंपरिक नौकरी भूमिकाएँ (Non-traditional job roles)' },
      { id: 'C', label: 'C', text: 'खाना पकाना (Cooking)' },
      { id: 'D', label: 'D', text: 'प्राथमिक शिक्षा (Primary education)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't57-fact',
    type: 'fact',
    title: 'NAVYA Initiative',
    subtitle: 'नव्या (NAVYA) पहल',
    content: [
      "महिला एवं बाल विकास मंत्रालय ने लड़कियों को गैर-पारंपरिक भूमिकाओं में कौशल प्रदान करने के लिए 'नव्या' पहल शुरू की। (MWCD and MSDE launched NAVYA to skill adolescent girls in non-traditional career paths.)",
      "यह पहल देश के 27 जिलों में पायलट प्रोजेक्ट के रूप में लागू की जा रही है और मौजूदा कौशल योजनाओं का लाभ उठाएगी। (This pilot project is being implemented in 27 districts, leveraging existing vocational training infrastructure.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 58: SDG Index 2025 ---
  {
    id: 't58-quiz',
    type: 'quiz',
    title: 'SDG Index 2025',
    subtitle: 'सतत विकास लक्ष्य (SDG) सूचकांक 2025',
    content: [
      "'सतत विकास लक्ष्य (SDG) सूचकांक 2025' में भारत की रैंकिंग क्या है?",
      "What is India's rank in the 'Sustainable Development Goals (SDG) Index 2025'?"
    ],
    options: [
      { id: 'A', label: 'A', text: '109वीं (109th)' },
      { id: 'B', label: 'B', text: '99वीं (99th)' },
      { id: 'C', label: 'C', text: '121वीं (121st)' },
      { id: 'D', label: 'D', text: '85वीं (85th)' }
    ],
    correctOptionId: 'B',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't58-fact',
    type: 'fact',
    title: 'SDG Index 2025',
    subtitle: 'सतत विकास लक्ष्य (SDG) सूचकांक 2025',
    content: [
      "भारत ने पहली बार 67 के स्कोर के साथ सतत विकास लक्ष्य (SDG) सूचकांक में शीर्ष 100 देशों में (99वें स्थान पर) जगह बनाई है। (India entered the top 100 of the SDG Index for the first time, ranking 99th with a score of 67.)",
      "फिनलैंड, स्वीडन और डेनमार्क शीर्ष तीन स्थानों पर हैं, जबकि पूर्वी और दक्षिण एशिया दुनिया में सबसे तेजी से प्रगति करने वाला क्षेत्र है। (Finland, Sweden, and Denmark hold the top spots; East and South Asia remains the fastest-progressing region.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 59: Digital Payment Intelligence Platform (DPIP) ---
  {
    id: 't59-quiz',
    type: 'quiz',
    title: 'Digital Payment Intelligence Platform (DPIP)',
    subtitle: 'डिजिटल भुगतान इंटेलिजेंस प्लेटफॉर्म',
    content: [
      "डिजिटल भुगतान इंटेलिजेंस प्लेटफॉर्म (DPIP) को मुख्य रूप से किस संस्था के मार्गदर्शन में विकसित किया जा रहा है?",
      "Under the guidance of which institution is the Digital Payment Intelligence Platform (DPIP) primarily being developed?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'सेबी (SEBI)' },
      { id: 'B', label: 'B', text: 'वित्त मंत्रालय (Ministry of Finance)' },
      { id: 'C', label: 'C', text: 'भारतीय रिजर्व बैंक (RBI)' },
      { id: 'D', label: 'D', text: 'एनपीसीआई (NPCI)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't59-fact',
    type: 'fact',
    title: 'Digital Payment Intelligence Platform (DPIP)',
    subtitle: 'डिजिटल भुगतान इंटेलिजेंस प्लेटफॉर्म',
    content: [
      "धोखाधड़ी रोकने के लिए भारतीय रिजर्व बैंक (RBI) के मार्गदर्शन में बैंक DPIP विकसित कर रहे हैं। (Major banks are developing DPIP under RBI guidance to strengthen fraud risk management through real-time data sharing.)",
      "वित्त वर्ष 2025 की रिपोर्ट के अनुसार, बैंक धोखाधड़ी तीन गुना बढ़कर ₹36,014 करोड़ हो गई है जिसमें सार्वजनिक क्षेत्र के बैंक ऋण श्रेणी में सबसे आगे हैं। (Bank frauds rose significantly to ₹36,014 crore in FY25, with PSBs reporting the highest cases in loans/advances.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  },

  // --- TOPIC 60: SCO Defence Ministers’ Meeting ---
  {
    id: 't60-quiz',
    type: 'quiz',
    title: 'SCO Defence Ministers’ Meeting',
    subtitle: 'एससीओ रक्षा मंत्रियों की बैठक',
    content: [
      "भारत ने किस शहर में आयोजित शंघाई सहयोग संगठन (SCO) के रक्षा मंत्रियों की बैठक में संयुक्त घोषणापत्र पर हस्ताक्षर करने से इनकार कर दिया?",
      "In which city did India refuse to sign the joint declaration at the SCO Defence Ministers’ meeting?"
    ],
    options: [
      { id: 'A', label: 'A', text: 'बीजिंग, चीन (Beijing, China)' },
      { id: 'B', label: 'B', text: 'ताशकंद, उज्बेकिस्तान (Tashkent, Uzbekistan)' },
      { id: 'C', label: 'C', text: 'किंगदाओ, चीन (Qingdao, China)' },
      { id: 'D', label: 'D', text: 'नई दिल्ली, भारत (New Delhi, India)' }
    ],
    correctOptionId: 'C',
    contentScale: 0.8,
    contentYOffset: 20
  },
  {
    id: 't60-fact',
    type: 'fact',
    title: 'SCO Defence Ministers’ Meeting',
    subtitle: 'एससीओ रक्षा मंत्रियों की बैठक',
    content: [
      "भारत ने चीन के किंगदाओ में आयोजित SCO बैठक में संयुक्त घोषणापत्र पर हस्ताक्षर करने से इनकार कर दिया क्योंकि इसमें सीमा पार आतंकवाद का उल्लेख नहीं था। (India refused to sign the SCO joint declaration in Qingdao, China, due to the absence of language addressing cross-border terrorism.)",
      "SCO की स्थापना 2001 में हुई थी और भारत 2017 में इसका पूर्ण सदस्य बना; इसका मुख्यालय बीजिंग में स्थित है। (SCO was established in 2001, and India joined as a full member in 2017; its headquarters are in Beijing.)"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1000',
    contentScale: 0.85,
    contentYOffset: 10
  }
];
