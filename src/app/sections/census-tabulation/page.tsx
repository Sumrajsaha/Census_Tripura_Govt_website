"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const card: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  padding: '35px',
  marginBottom: '24px',
};

const sectionHeading: React.CSSProperties = {
  fontSize: '1.4rem',
  color: 'var(--primary-color)',
  fontWeight: '700',
  marginBottom: '15px',
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
};

const para: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: '#334155',
  margin: 0,
};

export default function CensusTabulationPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'जनगणना एवं सारणीकरण | जनगणना कार्य निदेशालय' 
      : 'Census & Tabulation | DCO Tripura';
  }, [isHi]);

  const series = [
    { code: 'A-Series', en: 'General Population Tables', hi: 'सामान्य जनसंख्या सारणियाँ' },
    { code: 'B-Series', en: 'Economic Tables', hi: 'आर्थिक सारणियाँ' },
    { code: 'C-Series', en: 'Social and Cultural Tables', hi: 'सामाजिक और सांस्कृतिक सारणियाँ' },
    { code: 'D-Series', en: 'Migration Tables', hi: 'प्रवासन सारणियाँ' },
    { code: 'F-Series', en: 'Fertility Tables', hi: 'प्रजनन सारणियाँ' },
    { code: 'H-Series', en: 'Housing Tables (HLO)', hi: 'आवास सारणियाँ (एचएलओ)' },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '75vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे अनुभाग' : 'Our Sections'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'जनगणना और सारणीकरण अनुभाग' : 'Census & Tabulation Section'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'प्रभाग की भूमिका' : 'Role of the Section'}</h2>
            <p style={para}>
              {isHi ? (
                `जनगणना और सारणीकरण प्रभाग एकत्रित जनसांख्यिकीय डेटा के प्रसंस्करण, कोडिंग, वर्गीकरण और सारणीबद्ध प्रारूप में जनरेट करने के लिए जिम्मेदार है। यह अनुभाग जनगणना के क्षेत्र कार्यों के पूर्ण होने के पश्चात डेटा शुद्धता की जांच करता है और विभिन्न विषयों के आधार पर सांख्यिकीय रिपोर्टें तैयार करता है।`
              ) : (
                `The Census & Tabulation Section is responsible for processing, compiling, and converting primary demographic questionnaires into structured databases and tables. Once field enumeration completes, this branch performs data scrubbing and publishes categorized summaries.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'डेटा प्रोसेसिंग और गुणवत्ता नियंत्रण' : 'Data Processing & Quality Checks'}</h2>
            <p style={para}>
              {isHi ? (
                `आगामी जनगणना 2027 में आधुनिक मोबाइल ऐप और डिजिटल उपकरणों के माध्यम से वास्तविक समय में डेटा संग्रहण किया जा रहा है। हमारा अनुभाग इन डिजिटल प्रविष्टियों की गुणवत्ता, संगति और क्षेत्रीय सीमाओं के अनुसार शुद्धता सुनिश्चित करने हेतु उन्नत डेटा विश्लेषण प्रणालियों का उपयोग करता है।`
              ) : (
                `With the transition to digital tools and mobile apps for the upcoming Census 2027 operations, our branch utilizes automated analytical pipelines to perform consistency checks and geographic validation on real-time field submissions.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'जनगणना सारणी श्रृंखला' : 'Census Table Series'}</h2>
            <p style={{ ...para, marginBottom: '20px' }}>
              {isHi 
                ? 'जनगणना डेटा को निम्नलिखित प्रमुख श्रेणियों/श्रृंखलाओं में व्यवस्थित किया जाता है:' 
                : 'Census data products are categorized into the following major statistical table series:'}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '15px' }}>
              {series.map(s => (
                <div key={s.code} style={{
                  padding: '16px 20px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <div style={{
                    backgroundColor: 'var(--primary-color)',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>
                    {s.code}
                  </div>
                  <div style={{ fontWeight: 600, color: '#334155', fontSize: '0.92rem' }}>
                    {isHi ? s.hi : s.en}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
