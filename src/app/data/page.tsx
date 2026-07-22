"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

export default function DataPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'डेटा और संसाधन | जनगणना कार्य निदेशालय' 
      : 'Data & Resources | DCO Tripura';
  }, [isHi]);

  const resources = [
    {
      id: 1,
      titleEn: 'Primary Census Abstract 2011 – All',
      titleHi: 'प्राथमिक जनगणना सार 2011 – समग्र',
      descEn: 'Comprehensive primary census abstract data for all districts, towns, and villages. Covers demographic indicators including population, literacy, sex ratio, and household details from Census 2011.',
      descHi: 'सभी जिलों, कस्बों और गांवों के लिए व्यापक प्राथमिक जनगणना सार डेटा। जनगणना 2011 से जनसंख्या, साक्षरता, लिंग अनुपात और घरेलू विवरण सहित जनसांख्यिकीय संकेतक शामिल हैं।',
      link: 'https://censusindia.gov.in/census.website/data/census-tables',
      tagEn: 'Census 2011',
      tagHi: 'जनगणना 2011',
      tagColor: '#1d4ed8',
      available: true,
    },
    {
      id: 2,
      titleEn: 'District Census Handbook – 2011 (Tripura)',
      titleHi: 'जिला जनगणना हैंडबुक – 2011 (त्रिपुरा)',
      descEn: 'Village and town-wise primary census data for all districts of Tripura. The District Census Handbooks contain detailed administrative and demographic statistics from Census 2011.',
      descHi: 'त्रिपुरा के सभी जिलों के लिए ग्राम और कस्बा-वार प्राथमिक जनगणना डेटा। जिला जनगणना हैंडबुक में जनगणना 2011 से विस्तृत प्रशासनिक और जनसांख्यिकीय आंकड़े शामिल हैं।',
      link: 'https://censusindia.gov.in/census.website/data/handbooks',
      tagEn: 'Handbook',
      tagHi: 'हैंडबुक',
      tagColor: '#059669',
      available: true,
    },
    {
      id: 3,
      titleEn: 'Census 2027 Operations & Schedules',
      titleHi: 'जनगणना 2027 संचालन एवं अनुसूचियां',
      descEn: 'Access the official questionnaires, schedules, houses listing guidelines, and pre-census administrative boundaries setup documents for upcoming Census 2027 operations.',
      descHi: 'आगामी जनगणना 2027 संचालन के लिए आधिकारिक प्रश्नावली, अनुसूचियां, मकान सूचीकरण दिशानिर्देश और जनगणना पूर्व प्रशासनिक सीमाओं के सेटअप दस्तावेजों तक पहुंचें।',
      link: '/circulars',
      tagEn: 'Census 2027',
      tagHi: 'जनगणना 2027',
      tagColor: '#d97706',
      available: true,
    },
    {
      id: 4,
      titleEn: 'Census Digital Library',
      titleHi: 'जनगणना डिजिटल पुस्तकालय',
      descEn: 'Access the National Data Archive of the Office of the Registrar General & Census Commissioner, India. Contains microdata, documentation, and research tools for census-related studies.',
      descHi: 'भारत के महारजिस्ट्रार और जनगणना आयुक्त के कार्यालय के राष्ट्रीय डेटा संग्रह तक पहुंचें। इसमें जनगणना से संबंधित अध्ययनों के लिए सूक्ष्म डेटा, प्रलेखन और अनुसंधान उपकरण शामिल हैं।',
      link: 'https://censusindia.gov.in/nada/index.php/home',
      tagEn: 'Digital Library',
      tagHi: 'डिजिटल लाइब्रेरी',
      tagColor: '#7c3aed',
      available: true,
    },
    {
      id: 5,
      titleEn: 'Population Finder (Census 2011)',
      titleHi: 'जनसंख्या खोजक (जनगणना 2011)',
      descEn: 'Find demographic profiles and population statistics of your village, town, sub-district, and district in Tripura from Census 2011.',
      descHi: 'जनगणना 2011 से त्रिपुरा में अपने गांव, कस्बे, उप-जिले और जिले की जनसांख्यिकीय रूपरेखा और जनसंख्या आंकड़े खोजें।',
      link: 'https://censusindia.gov.in/census.website/data/population-finder',
      tagEn: 'Finder',
      tagHi: 'खोजक',
      tagColor: '#db2777',
      available: true,
    },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '80vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'जनगणना कार्य निदेशालय, त्रिपुरा' : 'Directorate of Census Operations, Tripura'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'डेटा और संसाधन' : 'Data & Resources'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: '10px 0 0', fontSize: '1rem' }}>
            {isHi 
              ? 'आधिकारिक जनगणना प्रकाशनों, हैंडबुक, डेटा तालिकाओं और डिजिटल लाइब्रेरी संसाधनों तक पहुंचें।' 
              : 'Access official census publications, handbooks, data tables, and digital library resources.'}
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        {/* Resource Cards */}
        <div style={{ marginBottom: '16px', maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 6px' }}>
            {isHi ? 'प्रकाशन और सांख्यिकी डाउनलोड' : 'Publications & Statistics Downloads'}
          </h2>
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--secondary-color)', borderRadius: '2px', marginBottom: '30px' }}></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {resources.map((item) => (
              <div key={item.id} style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}>
                <div style={{ height: '5px', backgroundColor: item.tagColor }}></div>

                <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '45px', height: '45px', borderRadius: '10px',
                      backgroundColor: `${item.tagColor}12`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.tagColor, flexShrink: 0,
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
                      textTransform: 'uppercase', color: item.tagColor,
                      backgroundColor: `${item.tagColor}12`,
                      padding: '4px 10px', borderRadius: '20px',
                    }}>
                      {isHi ? item.tagHi : item.tagEn}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-color)', margin: 0, lineHeight: 1.3 }}>
                    {isHi ? item.titleHi : item.titleEn}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                    {isHi ? item.descHi : item.descEn}
                  </p>

                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '10px 20px', borderRadius: '8px',
                      backgroundColor: item.tagColor, color: '#fff',
                      fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
                      textTransform: 'uppercase', letterSpacing: '0.04em',
                      alignSelf: 'flex-start', marginTop: '4px',
                    }}
                  >
                    {isHi ? 'रिसोर्स देखें' : 'View Resource'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
