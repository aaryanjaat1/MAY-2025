
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
      "यह 'डिजिटल इंडिया लैंड रिकॉर्ड्स मॉडर्नाइजेशन प्रोग्राम' (DILRMP) के तहत कार्यान्वित है।",
      "चरण I को 2024-25 के बजट में घोषित किया गया था, जिसका लक्ष्य 5 वर्षों के भीतर देश के पूरे शहरी क्षेत्र को कवर करना है।"
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
  }
];
