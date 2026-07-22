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

export default function DDUPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'डेटा प्रसार इकाई (डीडीयू) | जनगणना कार्य निदेशालय' 
      : 'Data Dissemination Unit (DDU) | DCO Tripura';
  }, [isHi]);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '75vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे अनुभाग' : 'Our Sections'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'डेटा प्रसार इकाई (डीडीयू)' : 'Data Dissemination Unit (DDU)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'परिचय एवं उद्देश्य' : 'Overview & Mission'}</h2>
            <p style={para}>
              {isHi ? (
                `डेटा प्रसार इकाई (डीडीयू) का मुख्य उद्देश्य जनगणना के अंतिम सांख्यिकीय परिणामों को विभिन्न हितधारकों जैसे सरकारी विभागों, नीति निर्माताओं, शैक्षणिक संस्थानों, शोधकर्ताओं और जनता तक सुलभ बनाना है।`
              ) : (
                `The primary mission of the Data Dissemination Unit (DDU) is to democratize and publish the finalized data products of Census and demographic surveys. DDU assists Government agencies, universities, and planning bodies in accessing census tables.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'प्रमुख गतिविधियाँ' : 'Key Activities'}</h2>
            <ul style={{ ...para, paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {isHi ? (
                <>
                  <li><strong>डेटा संगोष्ठी और कार्यशालाएं:</strong> विश्वविद्यालयों और कॉलेजों में जनगणना डेटा के उपयोग को बढ़ावा देने हेतु विशेष कार्यशालाओं का आयोजन।</li>
                  <li><strong>विशिष्ट शोधकर्ताओं की सहायता:</strong> शोधकर्ताओं को शोध परियोजनाओं और सांख्यिकीय विश्लेषणों के लिए वांछित डेटा तालिकाओं को खोजने में सहायता करना।</li>
                  <li><strong>पुस्तकालय प्रबंधन:</strong> निदेशालय में एक संदर्भ पुस्तकालय का संचालन जहाँ जनगणना प्रकाशनों का समृद्ध संग्रह है।</li>
                </>
              ) : (
                <>
                  <li><strong>Data Seminars & Workshops:</strong> Conducting seminars in universities to educate scholars and students on demographic data analysis.</li>
                  <li><strong>Research Support:</strong> Responding to specific queries from individual researchers and providing customized tables when permitted.</li>
                  <li><strong>Reference Library:</strong> Housing physical archives and publications of past Census records (starting from 1872) for on-premise consultation.</li>
                </>
              )}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
