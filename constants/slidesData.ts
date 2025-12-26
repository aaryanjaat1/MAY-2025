
import { SlideData } from '../types';

export const SLIDES: SlideData[] = [
  {
    id: 'cover',
    type: 'title',
    title: 'May 2025',
    subtitle: 'Current Affairs | महत्वपूर्ण घटनाक्रम',
    content: ['Complete Session', 'Exam Focus: SSC, UPSC, Banking, Defence']
  },
  // 1. Fiscal Health Index
  {
    id: 'q1',
    type: 'quiz',
    title: 'Fiscal Health Index (FHI) 2025',
    subtitle: 'राजकोषीय स्वास्थ्य सूचकांक 2025',
    content: [
      "नीति आयोग द्वारा जारी 'राजकोषीय स्वास्थ्य सूचकांक (FHI) 2025' में कौन सा राज्य पहले स्थान पर है?",
      "Which state ranks 1st in the 'Fiscal Health Index (FHI) 2025' released by NITI Aayog?"
    ],
    options: [
      { id: '1', label: 'A', text: 'गुजरात (Gujarat)' },
      { id: '2', label: 'B', text: 'छत्तीसगढ़ (Chhattisgarh)' },
      { id: '3', label: 'C', text: 'ओडिशा (Odisha)' },
      { id: '4', label: 'D', text: 'गोवा (Goa)' }
    ],
    correctOptionId: '3'
  },
  {
    id: 'f1',
    type: 'fact',
    title: 'Fiscal Health Index (FHI) 2025',
    subtitle: 'महत्वपूर्ण तथ्य',
    content: [
      'ओडिशा पहले स्थान पर है, उसके बाद छत्तीसगढ़ और गोवा का स्थान है।\nOdisha ranks first, followed by Chhattisgarh and Goa.',
      'पहल: नीति आयोग ने पत्र सूचना कार्यालय (PIB) के सहयोग से इसे जारी किया है।\nInitiative: Released by NITI Aayog in collaboration with PIB.',
      'डेटा स्रोत: सूचकांक के लिए डेटा CAG से लिया गया है।\nData Source: Data for the index is taken from the CAG.',
      'चिंताएँ: पश्चिम बंगाल और पंजाब बढ़ते कर्ज के बोझ का सामना कर रहे हैं।\nConcerns: West Bengal and Punjab are facing rising debt burdens.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800'
  },
  // 2. Tipitaka
  {
    id: 'q2',
    type: 'quiz',
    title: 'Tipitaka (Buddhist Scriptures)',
    subtitle: 'त्रिपिटक (बौद्ध ग्रंथ)',
    content: [
      "'त्रिपिटक' शब्द का पाली भाषा में क्या अर्थ है?",
      "What does the term 'Tipitaka' mean in the Pali language?"
    ],
    options: [
      { id: '1', label: 'A', text: 'तीन रत्न (Three Jewels)' },
      { id: '2', label: 'B', text: 'तीन टोकरियाँ (Three Baskets)' },
      { id: '3', label: 'C', text: 'तीन सत्य (Three Truths)' },
      { id: '4', label: 'D', text: 'तीन मार्ग (Three Paths)' }
    ],
    correctOptionId: '2'
  },
  {
    id: 'f2',
    type: 'fact',
    title: 'Tipitaka (Buddhist Scriptures)',
    subtitle: 'महत्वपूर्ण तथ्य',
    content: [
      'विनय पिटक: मठवासी जीवन के नियम और अनुशासन।\nVinaya Pitaka: Rules and discipline for monastic life.',
      'सुत्त पिटक: बुद्ध की शिक्षाएँ और प्रवचन।\nSutta Pitaka: Teachings and discourses of Buddha.',
      'अभिधम्म पिटक: बौद्ध शिक्षाओं का दार्शनिक विश्लेषण।\nAbhidhamma Pitaka: Philosophical analysis of Buddhist teachings.',
      'इतिहास: इसका संकलन पहली बौद्ध संगीति में किया गया था।\nHistory: Compiled at the first Buddhist Council.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544011405-659f7d3a2455?auto=format&fit=crop&q=80&w=800'
  },
  // 3. BIMSTEC
  {
    id: 'q3',
    type: 'quiz',
    title: '6th BIMSTEC Summit 2025',
    subtitle: 'छठा बिम्सटेक शिखर सम्मेलन 2025',
    content: [
      "छठे बिम्सटेक (BIMSTEC) शिखर सम्मेलन 2025 का विषय (Theme) क्या है?",
      "What is the theme of the 6th BIMSTEC Summit 2025?"
    ],
    options: [
      { id: '1', label: 'A', text: 'शांतिपूर्ण बंगाल की खाड़ी' },
      { id: '2', label: 'B', text: 'बिम्सटेक: समृद्ध, लचीला और खुला' },
      { id: '3', label: 'C', text: 'व्यापार और कनेक्टिविटी' },
      { id: '4', label: 'D', text: 'डिजिटल बिम्सटेक' }
    ],
    correctOptionId: '2'
  },
  {
    id: 'f3',
    type: 'fact',
    title: '6th BIMSTEC Summit 2025',
    subtitle: 'मुख्य बिंदु',
    content: [
      'मेजबान: इस शिखर सम्मेलन की मेजबानी थाईलैंड ने की।\nHost: This summit was hosted by Thailand.',
      'अध्यक्षता: क्षेत्रीय समूह की अध्यक्षता बांग्लादेश को सौंपी गई।\nChairmanship: Handed over to Bangladesh.',
      'भारतीय पहल: पीएम मोदी ने \'बोधि\' कार्यक्रम का प्रस्ताव रखा।\nIndian Initiative: PM Modi proposed the BODHI program.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800'
  },
  // Axiom-4, Ottawa Convention, etc... keep rest similar
  {
    id: 'thanks',
    type: 'title',
    title: 'Thank You',
    subtitle: 'May 2025 Session Complete',
    content: ['Keep Learning', 'Best of Luck for Exams!']
  }
];
