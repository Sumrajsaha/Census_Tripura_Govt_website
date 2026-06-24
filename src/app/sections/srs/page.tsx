"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const card = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  padding: '35px',
  marginBottom: '24px',
};

const sectionHeading = {
  fontSize: '1.4rem',
  color: 'var(--primary-color)',
  fontWeight: '700',
  marginBottom: '15px',
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
};

const para = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: '#334155',
  margin: 0,
};

export default function SRSPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'नमूना पंजीकरण प्रणाली (एसआरएस) | जनगणना कार्य निदेशालय' 
      : 'Sample Registration System (SRS) | DCO Tripura';
  }, [isHi]);

  const tableData = [
    { sl: 1, districtEn: 'West Tripura', districtHi: 'पश्चिम त्रिपुरा', rural: 5, urban: 14, total: 19 },
    { sl: 2, districtEn: 'Sepahijala', districtHi: 'सेपाहीजला', rural: 8, urban: 1, total: 9 },
    { sl: 3, districtEn: 'Khowai', districtHi: 'खोवाई', rural: 7, urban: 0, total: 7 },
    { sl: 4, districtEn: 'Gomati', districtHi: 'गोमती', rural: 8, urban: 3, total: 11 },
    { sl: 5, districtEn: 'South Tripura', districtHi: 'दक्षिण त्रिपुरा', rural: 8, urban: 1, total: 9 },
    { sl: 6, districtEn: 'Dhalai', districtHi: 'धलाई', rural: 14, urban: 3, total: 17 },
    { sl: 7, districtEn: 'North Tripura', districtHi: 'उत्तर त्रिपुरा', rural: 5, urban: 1, total: 6 },
    { sl: 8, districtEn: 'Unokoti', districtHi: 'उनाकोटि', rural: 10, urban: 2, total: 12 },
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
            {isHi ? 'नमूना पंजीकरण प्रणाली (एसआरएस)' : 'Sample Registration System (SRS)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'परिचय एवं महत्व' : 'Overview & Significance'}</h2>
            <p style={para}>
              {isHi ? (
                `नमूना पंजीकरण प्रणाली (एसआरएस) एक बड़े पैमाने पर आयोजित किया जाने वाला जनसांख्यिकीय सर्वेक्षण है जिसका उद्देश्य वार्षिक जन्म दर, मृत्यु दर और अन्य प्रजनन और मृत्यु दर संकेतकों के विश्वसनीय अनुमान प्रदान करना है। इसके आंकड़े विभिन्न योजनाओं और स्वास्थ्य पहलों के नियोजन में सहायक होते हैं।`
              ) : (
                `The Sample Registration System (SRS) is a large-scale demographic survey designed to provide reliable annual estimates of birth rate, death rate, and other fertility and mortality indicators. The statistical findings serve as a cornerstone for state planning and health infrastructure development.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'त्रिपुरा में कार्यप्रणाली' : 'Methodology in Tripura'}</h2>
            <p style={para}>
              {isHi ? (
                `त्रिपुरा में, एसआरएस डेटा अर्ध-वार्षिक सर्वेक्षणों के माध्यम से एकत्र किया जाता है। ग्रामीण और शहरी क्षेत्रों में डेटा की दोहरी रिकॉर्डिंग की जाती है ताकि किसी भी त्रुटि की संभावना समाप्त हो सके। निरंतर प्रलेखन के लिए प्रत्येक गांव और वार्ड स्तर पर अंशकालिक प्रगणक और पर्यवेक्षक नियुक्त किए गए हैं।`
              ) : (
                `In Tripura, SRS operations are conducted through dual-record systems comprising continuous enumeration by local Part-Time Enumerators (PTE) and retrospective surveys by supervisors. Unmatched records are field-verified to eliminate double entry.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'त्रिपुरा के जिला-वार एसआरएस सैंपल यूनिट' : 'District-wise SRS Sample Units in Tripura'}</h2>
            
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', backgroundColor: '#fff' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                    <th style={{ padding: '14px' }}>{isHi ? 'क्र.सं.' : 'Sl. No.'}</th>
                    <th style={{ padding: '14px', textAlign: 'left' }}>{isHi ? 'जिला' : 'District'}</th>
                    <th style={{ padding: '14px' }}>{isHi ? 'ग्रामीण' : 'Rural'}</th>
                    <th style={{ padding: '14px' }}>{isHi ? 'शहरी' : 'Urban'}</th>
                    <th style={{ padding: '14px' }}>{isHi ? 'कुल' : 'Total'}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.sl} className="circular-row" style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', color: '#64748b' }}>{row.sl}</td>
                      <td style={{ padding: '12px', textAlign: 'left', fontWeight: 600, color: 'var(--primary-color)' }}>
                        {isHi ? row.districtHi : row.districtEn}
                      </td>
                      <td style={{ padding: '12px' }}>{row.rural}</td>
                      <td style={{ padding: '12px' }}>{row.urban}</td>
                      <td style={{ padding: '12px', fontWeight: 700, backgroundColor: 'rgba(0,0,0,0.01)' }}>{row.total}</td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: '#f1f5f9', fontWeight: '700', borderTop: '2px solid #cbd5e1' }}>
                    <td colSpan={2} style={{ padding: '14px' }}>{isHi ? 'कुल' : 'Total'}</td>
                    <td style={{ padding: '14px' }}>65</td>
                    <td style={{ padding: '14px' }}>25</td>
                    <td style={{ padding: '14px', color: 'var(--primary-color)' }}>90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
