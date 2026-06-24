"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function DirectoryPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  const contacts = [
    {
      name: 'Shri Ratan Biswas, IAS',
      designationEn: 'Director',
      designationHi: 'निदेशक',
      landline: '0381-2330134',
      email: 'dco-tri.rgi@censusindia.gov.in'
    },
    {
      name: 'Shri Prosenjit Nath Choudhury',
      designationEn: 'Deputy Registrar General',
      designationHi: 'उप रजिस्ट्रार जनरल',
      landline: '0381-2336442',
      email: 'pnchoudhury.rgi@censusindia.gov.in'
    },
    {
      name: 'Shri Sukla Kanta Sarkar',
      designationEn: 'Deputy Director',
      designationHi: 'उप निदेशक',
      landline: '0381-2336442',
      email: 'sksarkar.rgi@censusindia.gov.in'
    },
    {
      name: 'Smt. Luna Tamuly',
      designationEn: 'Assistant Director (Technical)',
      designationHi: 'सहायक निदेशक (तकनीकी)',
      landline: '0381-2336442',
      email: 'ltamuly.rgi@censusindia.gov.in'
    },
    {
      name: 'Shri Subijit Deb Ray',
      designationEn: 'Assistant Director (Technical)',
      designationHi: 'सहायक निदेशक (तकनीकी)',
      landline: '0381-2336442',
      email: 'sdebray.rgi@censusindia.gov.in'
    },
    {
      name: 'General Help Desk / Accounts / Estab.',
      designationEn: 'Office Administration',
      designationHi: 'कार्यालय प्रशासन',
      landline: '0381-2323445',
      email: 'dco-tripura@nic.in'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '85vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे बारे में' : 'About Us'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'अधिकारी निर्देशिका एवं संपर्क सूत्र' : 'Official Telephone Directory'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div className="premium-card" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', fontWeight: 800 }}>
              {isHi ? 'दूरभाष एवं ई-मेल निर्देशिका' : 'Landline Numbers & E-mail Directory'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.98rem', marginTop: '8px' }}>
              {isHi 
                ? 'त्रिपुरा कार्यालय के वर्तमान अधिकारियों के दूरभाष संपर्क और ई-मेल पते की सूची।' 
                : 'Official contact details of the contemporary leadership and sections at DCO Tripura.'}
            </p>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '15px auto 0' }}></div>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '650px', backgroundColor: 'white' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'left' }}>
                  <th style={{ padding: '16px 20px', fontWeight: '600' }}>{isHi ? 'नाम' : 'Name of Official'}</th>
                  <th style={{ padding: '16px 20px', fontWeight: '600' }}>{isHi ? 'पदनाम' : 'Designation'}</th>
                  <th style={{ padding: '16px 20px', fontWeight: '600' }}>{isHi ? 'लैंडलाइन नंबर' : 'Landline / Tel.'}</th>
                  <th style={{ padding: '16px 20px', fontWeight: '600' }}>{isHi ? 'ई-मेल आईडी' : 'E-mail Address'}</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, idx) => (
                  <tr key={contact.name} className="circular-row" style={{ borderBottom: idx === contacts.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                    <td style={{ padding: '16px 20px', fontWeight: '700', color: 'var(--primary-color)' }}>
                      {contact.name}
                    </td>
                    <td style={{ padding: '16px 20px', fontWeight: '600', color: '#475569' }}>
                      {isHi ? contact.designationHi : contact.designationEn}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#334155', fontWeight: 500 }}>
                      <a href={`tel:${contact.landline.replace(/-/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        📞 {contact.landline}
                      </a>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <a href={`mailto:${contact.email}`} style={{ color: '#1d4ed8', fontWeight: 600, textDecoration: 'none' }}>
                        ✉️ {contact.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
