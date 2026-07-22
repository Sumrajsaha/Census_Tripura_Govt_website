"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function DCOFunctionsPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  const functions = [
    {
      titleEn: 'Decennial Population Census',
      titleHi: 'दशकीय जनसंख्या जनगणना',
      descEn: 'Responsible for the planning, scheduling, and execution of the decennial population Census across all districts, subdivisions, and blocks of Tripura under the Census Act, 1948.',
      descHi: 'जनगणना अधिनियम, 1948 के अंतर्गत त्रिपुरा के सभी जिलों, अनुभागों और ब्लॉकों में दशकीय जनसंख्या जनगणना के नियोजन, शेड्यूलिंग और निष्पादन के लिए जिम्मेदार।',
      icon: '📊'
    },
    {
      titleEn: 'Civil Registration System (CRS) Monitoring',
      titleHi: 'नागरिक पंजीकरण प्रणाली (सीआरएस) की निगरानी',
      descEn: 'Supervises and coordinates the registration of vital events (Births, Deaths, and Stillbirths) under the Registration of Births and Deaths Act, 1969, assisting the State Government.',
      descHi: 'जन्म और मृत्यु पंजीकरण अधिनियम, 1969 के तहत जन्म, मृत्यु और मृत जन्म के पंजीकरण का समन्वय और पर्यवेक्षण, राज्य सरकार को तकनीकी मार्गदर्शन प्रदान करना।',
      icon: '📝'
    },
    {
      titleEn: 'Sample Registration System (SRS) Surveys',
      titleHi: 'नमूना पंजीकरण प्रणाली (एसआरएस) सर्वेक्षण',
      descEn: 'Conducts regular continuous demographic surveys in selected rural and urban blocks to estimate annual vital rates (Birth, Death, Infant Mortality) at the state level.',
      descHi: 'राज्य स्तर पर वार्षिक महत्वपूर्ण दरों (जन्म, मृत्यु, शिशु मृत्यु) का अनुमान लगाने के लिए चयनित ग्रामीण और शहरी ब्लॉकों में नियमित जनसांख्यिकीय सर्वेक्षणों का संचालन।',
      icon: '📈'
    },
    {
      titleEn: 'Cartography & Boundary Mapping',
      titleHi: 'मानचित्रकला एवं सीमा मानचित्रण',
      descEn: 'Prepares and updates administrative boundary maps of districts, sub-divisions, revenue villages, and wards to ensure complete and accurate coverage for census operations.',
      descHi: 'जनगणना संचालन के लिए सटीक भौगोलिक कवरेज सुनिश्चित करने हेतु जिलों, उप-मंडलों, राजस्व गांवों और वार्डों के प्रशासनिक सीमा मानचित्रों को तैयार करना और अपडेट करना।',
      icon: '🗺️'
    },
    {
      titleEn: 'Data Dissemination & Publications',
      titleHi: 'डेटा प्रसार एवं प्रकाशन',
      descEn: 'Publishes and disseminates District Census Handbooks (DCHB), primary abstracts, and specialized demographic reports to aid researchers, planners, and government offices.',
      descHi: 'शोधकर्ताओं, योजनाकारों और सरकारी विभागों की सहायता के लिए जिला जनगणना हैंडबुक (डीसीएचबी), प्राथमिक सार और विशिष्ट जनसांख्यिकीय रिपोर्टों का प्रकाशन और वितरण।',
      icon: '📚'
    },
    {
      titleEn: 'Rajbhasha (Official Language) Implementation',
      titleHi: 'राजभाषा कार्यान्वयन',
      descEn: 'Promotes the progressive use of Hindi in administrative files, notifications, publications, and daily office correspondence in compliance with the Official Language Act.',
      descHi: 'राजभाषा अधिनियम के अनुपालन में प्रशासनिक फाइलों, अधिसूचनाओं, प्रकाशनों और दैनिक कार्यालयीन पत्राचार में हिंदी के प्रगतिशील प्रयोग को बढ़ावा देना।',
      icon: '🇮🇳'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '85vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे बारे में' : 'About Us'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'जनगणना कार्य निदेशालय के कार्य' : 'Functions of DCO Tripura'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 800 }}>
              {isHi ? 'मुख्य दायित्व एवं कर्तव्य' : 'Key Responsibilities & Duties'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', marginTop: '10px' }}>
              {isHi 
                ? 'निदेशालय भारत सरकार के गृह मंत्रालय के अधीन राज्य में निम्नलिखित कार्यों का संपादन करता है:' 
                : 'Under the Ministry of Home Affairs, Government of India, the Directorate manages the following core functions:'}
            </p>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '15px auto 0' }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {functions.map(fn => (
              <div key={fn.titleEn} className="premium-card" style={{
                padding: '30px',
                backgroundColor: 'white',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '2.5rem' }}>{fn.icon}</div>
                <h3 style={{ color: 'var(--primary-color)', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                  {isHi ? fn.titleHi : fn.titleEn}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                  {isHi ? fn.descHi : fn.descEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
