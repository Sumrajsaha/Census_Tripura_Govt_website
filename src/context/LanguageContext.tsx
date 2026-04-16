"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header / Branding
    "GOVERNMENT OF INDIA": "GOVERNMENT OF INDIA",
    "MINISTRY OF HOME AFFAIRS": "MINISTRY OF HOME AFFAIRS",
    "Directorate of Census Operations": "Directorate of Census Operations",
    "TRIPURA": "TRIPURA",
    "TRIPURA | GOVERNMENT OF INDIA": "TRIPURA | GOVERNMENT OF INDIA",
    "Tripura": "Tripura",
    "Directorate of Census Operations, Tripura": "Directorate of Census Operations, Tripura",

    // Navigation — top-level
    "Home": "Home",
    "About Us": "About Us",
    "Our Sections": "Our Sections",
    "About Census": "About Census",
    "Circulars": "Circulars",
    "Data & Resources": "Data & Resources",
    "Gallery": "Gallery",
    "Tenders": "Tenders",
    "RTI": "RTI",
    "Employee Corner": "Employee Corner",
    "Employee corner": "Employee corner",
    "Contact Us": "Contact Us",

    // Navigation — About Us sub-items
    "Organization Chart": "Organization Chart",
    "Our Directory": "Our Directory",
    "Directory": "Directory",
    "List of Directors": "List of Directors",
    "Message from Director": "Message from Director",

    // Navigation — Our Sections sub-items
    "Census": "Census",
    "Data Dissemination Unit (DDU)": "Data Dissemination Unit (DDU)",
    "Civil Registration System (CRS)": "Civil Registration System (CRS)",
    "Sample Registration System (SRS)": "Sample Registration System (SRS)",
    "Map": "Map",
    "Accounts, Establishment & Store": "Accounts, Establishment & Store",
    "Rajbhasha": "Rajbhasha",

    // Navigation — About Census sub-items
    "History of Census in India": "History of Census in India",
    "House Listing Operations": "House Listing Operations",
    "Population Enumeration": "Population Enumeration",
    "Census Hierarchy in the State": "Census Hierarchy in the State",
    "Legal Framework": "Legal Framework",
    "Role of the Directorate": "Role of the Directorate",

    // Navigation — Employee Corner sub-items
    "ORGI Intranet": "ORGI Intranet",
    "E-mail Services": "E-mail Services",
    "E-office": "E-office",
    "E-HRMS": "E-HRMS",
    "E-Sparrow (APAR)": "E-Sparrow (APAR)",
    "E-Purti": "E-Purti",
    "CollabFiles": "CollabFiles",
    "CGHS": "CGHS",
    "MHA (I-Card Creation)": "MHA (I-Card Creation)",
    "PFMS (Salary Slip/GPF)": "PFMS (Salary Slip/GPF)",
    "Pdf Tools": "Pdf Tools",
    "Transfer Policy": "Transfer Policy",
    "Recruitment Rules": "Recruitment Rules",
    "Proforma": "Proforma",
    "SHe-Box (Online Complaint Management)": "SHe-Box (Online Complaint Management)",

    // Misc keys used across pages
    "Census management & Monitoring system (CMMS)": "Census management & Monitoring system (CMMS)",
    "Census Management and Monitoring System": "Census Management and Monitoring System",
    "LATEST UPDATES": "LATEST UPDATES",
    "View All Circulars & Updates": "View All Circulars & Updates",
    "Census of India 2011": "Census of India 2011",
    "Official State Portals": "Official State Portals",
    "Official Portal": "Official Portal",
    "Explore the essential services and databases of the Directorate of Census Operations, Tripura.": "Explore the essential services and databases of the Directorate of Census Operations, Tripura.",
    "Interactive GIS Map": "Interactive GIS Map",
    "Census Question": "Census Question",
    "Self-Enumeration (HLO)": "Self-Enumeration (HLO)",
    "Gazette Notifications": "Gazette Notifications",
    "Census 2027": "Census 2027",
    "Medical Certification of Cause of Death": "Medical Certification of Cause of Death",
    "VISIT PORTAL": "VISIT PORTAL",
    "EXPLORE PORTAL": "EXPLORE PORTAL",
    "VIEW QUESTIONS": "VIEW QUESTIONS",
    "Tripura Gazette": "Tripura Gazette",
    "ORGI Gazette": "ORGI Gazette",
    "Digital platform for managing and monitoring Census 2027 field operations across Tripura.": "Digital platform for managing and monitoring Census 2027 field operations across Tripura.",
    "Explore Tripura boundaries with interactive visual data.": "Explore Tripura boundaries with interactive visual data.",
    "Access the official questionnaires and schedules used in Census 2011 and upcoming Census 2027 operations.": "Access the official questionnaires and schedules used in Census 2011 and upcoming Census 2027 operations.",
    "Official portal for House Listing Operations — citizens can self-enumerate their household details for Census 2027.": "Official portal for House Listing Operations — citizens can self-enumerate their household details for Census 2027.",
    "Official gazette notifications issued by the Government of Tripura and by the ORGI.": "Official gazette notifications issued by the Government of Tripura and by the ORGI.",
    "Official portal for MCCD — recording and reporting causes of death through registered medical practitioners.": "Official portal for MCCD — recording and reporting causes of death through registered medical practitioners.",
    "Contact DCO, Tripura": "Contact DCO, Tripura",
    "Ramnagar Lane 1, By Lane-2 (Left Side)": "Ramnagar Lane 1, By Lane-2 (Left Side)",
    "Agartala - 799002": "Agartala - 799002",
    "Phone: 0381-232-3445": "Phone: 0381-232-3445",
    "Email: dco-tripura@nic.in": "Email: dco-tripura@nic.in",
    "Quick Access": "Quick Access",
    "Official ORGI Portal": "Official ORGI Portal",
    "Provisional Data hub": "Provisional Data hub",
    "Circulars & Updates": "Circulars & Updates",
    "RTI Proactive Disclosure": "RTI Proactive Disclosure",
    "Procurement Notices": "Procurement Notices",
    "Publications": "Publications",
    "Mapping": "Mapping",
    "Important Government Links": "Important Government Links",
    "National Portal of India": "National Portal of India",
    "Open Data Platform": "Open Data Platform",
    "Power to Empower": "Power to Empower",
    "Ministry of": "Ministry of",
    "Home Affairs": "Home Affairs",
    "मेरी सरकार": "मेरी सरकार",
  },
  hi: {
    // Header / Branding
    "GOVERNMENT OF INDIA": "भारत सरकार",
    "MINISTRY OF HOME AFFAIRS": "गृह मंत्रालय",
    "Directorate of Census Operations": "जनगणना कार्य निदेशालय",
    "TRIPURA": "त्रिपुरा",
    "TRIPURA | GOVERNMENT OF INDIA": "त्रिपुरा | भारत सरकार",
    "Tripura": "त्रिपुरा",
    "Directorate of Census Operations, Tripura": "जनगणना कार्य निदेशालय, त्रिपुरा",

    // Navigation — top-level
    "Home": "मुखपृष्ठ",
    "About Us": "हमारे बारे में",
    "Our Sections": "हमारे अनुभाग",
    "About Census": "जनगणना के बारे में",
    "Circulars": "परिपत्र",
    "Data & Resources": "डेटा और संसाधन",
    "Gallery": "गैलरी",
    "Tenders": "निविदाएं",
    "RTI": "सूचना का अधिकार",
    "Employee Corner": "कर्मचारी कोना",
    "Employee corner": "कर्मचारी कोना",
    "Contact Us": "संपर्क करें",

    // Navigation — About Us sub-items
    "Organization Chart": "संगठन चार्ट",
    "Our Directory": "हमारी निर्देशिका",
    "Directory": "निर्देशिका",
    "List of Directors": "निदेशकों की सूची",
    "Message from Director": "निदेशक का संदेश",

    // Navigation — Our Sections sub-items
    "Census": "जनगणना अनुभाग",
    "Data Dissemination Unit (DDU)": "डेटा प्रसार इकाई",
    "Civil Registration System (CRS)": "नागरिक पंजीकरण प्रणाली (सीआरएस)",
    "Sample Registration System (SRS)": "नमूना पंजीकरण प्रणाली (एसआरएस)",
    "Map": "मानचित्र",
    "Accounts, Establishment & Store": "लेखा, स्थापना और भंडार",
    "Rajbhasha": "राजभाषा",

    // Navigation — About Census sub-items
    "History of Census in India": "भारत में जनगणना का इतिहास",
    "House Listing Operations": "जनगणना संचालन",
    "Population Enumeration": "जनसंख्या गणना",
    "Census Hierarchy in the State": "राज्य में जनगणना पदानुक्रम",
    "Legal Framework": "कानूनी ढांचा",
    "Role of the Directorate": "निदेशालय की भूमिका",

    // Navigation — Employee Corner sub-items
    "ORGI Intranet": "ओआरजीआई इंट्रानेट",
    "E-mail Services": "ई-मेल सेवाएं",
    "E-office": "ई-ऑफिस",
    "E-HRMS": "ई-एचआरएमएस",
    "E-Sparrow (APAR)": "ई-स्पैरो (एपीएआर)",
    "E-Purti": "ई-पूर्ति",
    "CollabFiles": "कोलैब फाइल्स",
    "CGHS": "सीजीएचएस",
    "MHA (I-Card Creation)": "एमएचए (आई-कार्ड निर्माण)",
    "PFMS (Salary Slip/GPF)": "पीएफएमएस (वेतन पर्ची/जीपीएफ)",
    "Pdf Tools": "पीडीएफ टूल्स",
    "Transfer Policy": "स्थानांतरण नीति",
    "Recruitment Rules": "भर्ती नियम",
    "Proforma": "प्रोफार्मा",
    "SHe-Box (Online Complaint Management)": "शी-बॉक्स (ऑनलाइन शिकायत प्रबंधन)",

    // Misc keys used across pages
    "Census management & Monitoring system (CMMS)": "जनगणना प्रबंधन एवं निगरानी प्रणाली (सी एम एम एस)",
    "Census Management and Monitoring System": "जनगणना प्रबंधन और निगरानी प्रणाली",
    "LATEST UPDATES": "नवीनतम अपडेट",
    "View All Circulars & Updates": "सभी परिपत्र और अपडेट देखें",
    "Census of India 2011": "भारत की जनगणना 2011",
    "Official State Portals": "आधिकारिक राज्य पोर्टल",
    "Official Portal": "आधिकारिक पोर्टल",
    "Explore the essential services and databases of the Directorate of Census Operations, Tripura.": "जनगणना कार्य निदेशालय, त्रिपुरा की आवश्यक सेवाओं और डेटाबेस का अन्वेषण करें।",
    "Interactive GIS Map": "इंटरैक्टिव जीआईएस मैप",
    "Census Question": "जनगणना प्रश्न",
    "Self-Enumeration (HLO)": "स्व-गणना (एचएलओ)",
    "Gazette Notifications": "राजपत्र अधिसूचना",
    "Census 2027": "जनगणना 2027",
    "Medical Certification of Cause of Death": "मृत्यु के कारण का चिकित्सा प्रमाणन",
    "VISIT PORTAL": "पोर्टल पर जाएं",
    "EXPLORE PORTAL": "पोर्टल का अन्वेषण करें",
    "VIEW QUESTIONS": "प्रश्न देखें",
    "Tripura Gazette": "त्रिपुरा राजपत्र",
    "ORGI Gazette": "ओआरजीआई राजपत्र",
    "Digital platform for managing and monitoring Census 2027 field operations across Tripura.": "त्रिपुरा में जनगणना 2027 के क्षेत्र संचालन के प्रबंधन और निगरानी के लिए डिजिटल प्लेटफॉर्म।",
    "Explore Tripura boundaries with interactive visual data.": "इंटरैक्टिव विज़ुअल डेटा के साथ त्रिपुरा की सीमाओं का अन्वेषण करें।",
    "Access the official questionnaires and schedules used in Census 2011 and upcoming Census 2027 operations.": "जनगणना 2011 और आगामी जनगणना 2027 संचालन में उपयोग किए जाने वाले आधिकारिक प्रश्नावली और अनुसूचियों तक पहुंचें।",
    "Official portal for House Listing Operations — citizens can self-enumerate their household details for Census 2027.": "हाउस लिस्टिंग ऑपरेशंस के लिए आधिकारिक पोर्टल — नागरिक जनगणना 2027 के लिए अपने परिवार के विवरण को स्वयं सूचीबद्ध कर सकते हैं।",
    "Official gazette notifications issued by the Government of Tripura and by the ORGI.": "त्रिपुरा सरकार और ओआरजीआई द्वारा जारी आधिकारिक राजपत्र अधिसूचनाएं।",
    "Official portal for MCCD — recording and reporting causes of death through registered medical practitioners.": "एमसीसीडी के लिए आधिकारिक पोर्टल — पंजीकृत चिकित्सा चिकित्सकों के माध्यम से मृत्यु के कारणों को रिकॉर्ड करना और रिपोर्ट करना।",
    "Contact DCO, Tripura": "जनगणना कार्य निदेशालय, त्रिपुरा से संपर्क करें",
    "Ramnagar Lane 1, By Lane-2 (Left Side)": "राम नगर लेन 1, बाय लेन-2 (बाईं ओर)",
    "Agartala - 799002": "अगरतला - 799002",
    "Phone: 0381-232-3445": "फोन: 0381-232-3445",
    "Email: dco-tripura@nic.in": "ईमेल: dco-tripura@nic.in",
    "Quick Access": "त्वरित पहुंच",
    "Official ORGI Portal": "ओआरजीआई का आधिकारिक पोर्टल",
    "Provisional Data hub": "अस्थायी डेटा हब",
    "Circulars & Updates": "परिपत्र और अपडेट",
    "RTI Proactive Disclosure": "आर टी आई प्रोएक्टिव डिस्क्लोजर",
    "Procurement Notices": "खरीद सूचनाएं",
    "Publications": "प्रकाशन",
    "Mapping": "मैपिंग और जीआईएस",
    "Important Government Links": "महत्वपूर्ण सरकारी लिंक",
    "National Portal of India": "भारत का राष्ट्रीय पोर्टल",
    "Open Data Platform": "ओपन डेटा प्लेटफॉर्म",
    "Power to Empower": "शक्ति प्रदान करने की शक्ति",
    "Ministry of": "मंत्रालय",
    "Home Affairs": "गृह मंत्रालय",
    "मेरी सरकार": "मेरी सरकार",
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => { },
  t: (k) => k
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('appLang') as Language;
    if (saved === 'en' || saved === 'hi') {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('appLang', lang);
  };

  const t = (key: string) => {
    const langDict = translations[language];
    return langDict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
