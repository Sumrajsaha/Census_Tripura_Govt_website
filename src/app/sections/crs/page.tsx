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
  lineHeight: '1.85',
  color: '#334155',
  margin: 0,
};

export default function CRSPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'नागरिक पंजीकरण प्रणाली (सीआरएस) | जनगणना कार्य निदेशालय' 
      : 'Civil Registration System (CRS) | DCO Tripura';
  }, [isHi]);

  const hierarchy = [
    { labelEn: 'Registrar General of India (RGI)', labelHi: 'भारत के महारजिस्ट्रार (आरजीआई)', subEn: 'Central Level — Coordination & Unification', subHi: 'केन्द्रीय स्तर — समन्वय और एकीकरण', color: 'var(--primary-color)' },
    { labelEn: 'Chief Registrar', labelHi: 'मुख्य रजिस्ट्रार', subEn: 'State Level — Chief Executive Authority', subHi: 'राज्य स्तर — मुख्य कार्यकारी प्राधिकारी', color: 'var(--secondary-color)' },
    { labelEn: 'District Registrar', labelHi: 'जिला रजिस्ट्रार', subEn: 'District Level — Implementation of RBD Act', subHi: 'जिला स्तर — जन्म-मृत्यु पंजीकरण अधिनियम कार्यान्वयन', color: '#1e40af' },
    { labelEn: 'Registrar', labelHi: 'रजिस्ट्रार (स्थानीय)', subEn: 'Local Level — Registration of Events & Certificates', subHi: 'स्थानीय स्तर — घटना पंजीकरण एवं प्रमाण पत्र जारी करना', color: '#0f766e' },
  ];

  const keyFacts = [
    { labelEn: 'Governing Act', labelHi: 'शासी अधिनियम', valueEn: 'RBD Act, 1969', valueHi: 'आरबीडी अधिनियम, 1969' },
    { labelEn: 'Enforced From', labelHi: 'लागू होने की तिथि', valueEn: '1st April 1970', valueHi: '1 अप्रैल 1970' },
    { labelEn: 'Reporting Period', labelHi: 'रिपोर्टिंग अवधि', valueEn: '21 Days', valueHi: '21 दिन' },
    { labelEn: 'Constitution List', labelHi: 'संविधान अनुसूची', valueEn: 'Concurrent List – Sl. 30', valueHi: 'समवर्ती सूची – सं. 30' },
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
            {isHi ? 'नागरिक पंजीकरण प्रणाली (सीआरएस)' : 'Civil Registration System (CRS)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'अवलोकन' : 'Overview'}</h2>
            <p style={para}>
              {isHi ? (
                `नागरिक पंजीकरण प्रणाली (सीआरएस), जिसे आमतौर पर जन्म और मृत्यु पंजीकरण प्रणाली के रूप में जाना जाता है, देश में जन्म, मृत्यु और मृत जन्म की महत्वपूर्ण घटनाओं को कानूनी प्रावधानों के अंतर्गत दर्ज करने की एक सतत और स्थायी प्रक्रिया है। सीआरएस से उत्पन्न आंकड़े विभिन्न जनसांख्यिकीय नीतियों के निर्माण में अत्यंत महत्वपूर्ण भूमिका निभाते हैं।`
              ) : (
                `The Civil Registration System (CRS) is the continuous, permanent, and compulsory recording of vital events such as births, deaths, and stillbirths. Statistical insights generated from civil registration contribute significantly to evidentiary policy-making across national and state-level government sectors.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'कानूनी प्रावधान' : 'Legal Provisions'}</h2>
            <p style={para}>
              {isHi ? (
                `भारत में जन्म और मृत्यु का पंजीकरण एक केंद्रीय कानून "जन्म और मृत्यु पंजीकरण (RBD) अधिनियम, 1969" के अंतर्गत अनिवार्य है। घटना के स्थान पर ही पंजीकरण कराया जाना आवश्यक है। घटना की सूचना दर्ज करने की सामान्य अवधि 21 दिन निर्धारित की गई है। इस समय सीमा के पश्चात अधिनियम की धारा 13 के तहत विलंबित शुल्क के साथ पंजीकरण किया जा सकता है।`
              ) : (
                `The registration of vital events is regulated by the Central legislation "Registration of Births and Deaths (RBD) Act, 1969". Reporting is mandatory at the place of occurrence of the event within the normal reporting period of 21 days. Delayed registration is governed under Section 13 of the Act.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'प्रशासनिक संरचना' : 'Administrative Functionaries'}</h2>
            
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
              {hierarchy.map((level, i, arr) => (
                <div key={level.labelEn} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  <div
                    style={{
                      backgroundColor: level.color,
                      color: '#fff',
                      borderRadius: '8px',
                      padding: '14px 28px',
                      textAlign: 'center',
                      maxWidth: '520px',
                      width: '100%',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>
                      {isHi ? level.labelHi : level.labelEn}
                    </div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.9, marginTop: '4px' }}>
                      {isHi ? level.subHi : level.subEn}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '2px', height: '20px', backgroundColor: '#94a3b8' }} />
                      <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '8px solid #94a3b8' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Key Facts strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '30px' }}>
            {keyFacts.map(f => (
              <div
                key={f.labelEn}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  borderTop: '4px solid var(--secondary-color)',
                  borderLeft: '1px solid #e2e8f0',
                  borderRight: '1px solid #e2e8f0',
                  borderBottom: '1px solid #e2e8f0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {isHi ? f.labelHi : f.labelEn}
                </div>
                <div style={{ marginTop: '8px', fontWeight: 700, fontSize: '1.05rem', color: 'var(--primary-color)' }}>
                  {isHi ? f.valueHi : f.valueEn}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
