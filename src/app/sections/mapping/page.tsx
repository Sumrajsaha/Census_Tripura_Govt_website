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

export default function MappingPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi
      ? 'मानचित्र | जनगणना कार्य निदेशालय'
      : 'Map | DCO Tripura';
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
            {isHi ? 'मानचित्र' : 'Map'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'परिचय' : 'Overview'}</h2>
            <p style={para}>
              {isHi ? (
                `मानचित्र और जीआईएस अनुभाग का प्राथमिक कार्य यह सुनिश्चित करना है कि जनगणना के समय कोई भी भौगोलिक क्षेत्र सर्वेक्षण से न छूटे। यह प्रभाग राजस्व गांवों, वार्डों, उप-मंडलों और जिला स्तर की प्रशासनिक सीमाओं के अद्यतन मानचित्रों को डिजिटल रूप से तैयार करने का काम करता है।`
              ) : (
                `The primary mandate of the Map and GIS Section is to ensure complete and accurate coverage of all administrative units during population enumerations. The section is responsible for digitizing and maintaining up-to-date boundaries of villages, sub-districts, and districts.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'प्रमुख कार्य और जिम्मेदारियां' : 'Key Responsibilities'}</h2>
            <ul style={{ ...para, paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {isHi ? (
                <>
                  <li><strong>प्रशासनिक मानचित्रों का निर्माण:</strong> राज्य और जिला स्तर पर राजस्व गांव और वार्ड स्तर तक के मानचित्रों का निर्माण और रखरखाव।</li>
                  <li><strong>भौगोलिक सूचना प्रणाली (GIS):</strong> भौगोलिक सीमाओं के सटीक सीमांकन हेतु जीआईएस डेटाबेस का उपयोग।</li>
                  <li><strong>जनगणना कोड आवंटन:</strong> प्रत्येक प्रशासनिक इकाई को राष्ट्रीय स्तर पर अद्वितीय पहचान संख्या (जनगणना कोड) प्रदान करना।</li>
                </>
              ) : (
                <>
                  <li><strong>Administrative Mapping:</strong> Drafting and editing detailed maps of municipal wards, block limits, and revenue villages of Tripura.</li>
                  <li><strong>GIS Integration:</strong> Utilizing Global Positioning Systems and GIS software to plot spatial boundaries for operations.</li>
                  <li><strong>Location Code Allotment:</strong> Standardizing unique identification codes for newly formed revenue villages and sub-divisions.</li>
                </>
              )}
            </ul>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'स्थानिक डेटाबेस' : 'Spatial Databases'}</h2>
            <p style={para}>
              {isHi ? (
                `यह विभाग विभिन्न शोधकर्ताओं, राज्य योजनाकारों और विकास एजेंसियों के लिए आवश्यक स्थानिक जनसांख्यिकीय डेटा उत्पाद और एटलस भी प्रकाशित करता है, जो सांख्यिकीय डेटा का दृश्य विश्लेषण प्रदान करते हैं।`
              ) : (
                `The branch compiles spatial atlases and thematic map products mapping demographic attributes like density, literacy rate, and gender ratios to assist public administration and researchers.`
              )}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
