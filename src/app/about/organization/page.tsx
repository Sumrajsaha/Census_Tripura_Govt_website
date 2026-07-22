"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function OrganizationPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  const designationMap: Record<string, { en: string; hi: string }> = {
    "Director": { en: "Director", hi: "निदेशक" },
    "Deputy Registrar General": { en: "Deputy Registrar General", hi: "उप रजिस्ट्रार जनरल" },
    "Deputy Director": { en: "Deputy Director", hi: "उप निदेशक" },
    "Assistant Director (T)": { en: "Assistant Director (Technical)", hi: "सहायक निदेशक (तकनीकी)" },
    "Statistical Investigator Grade-I": { en: "Statistical Investigator Grade-I", hi: "सांख्यिकीय अन्वेषक ग्रेड-I" },
    "Senior Geographer": { en: "Senior Geographer", hi: "वरिष्ठ भूगोलवेत्ता" },
    "Office Superintendent": { en: "Office Superintendent", hi: "कार्यालय अधीक्षक" },
    "Statistical Investigator Grade-II": { en: "Statistical Investigator Grade-II", hi: "सांख्यिकीय अन्वेषक ग्रेड-II" },
    "Multi Tasking Staff": { en: "Multi Tasking Staff", hi: "मल्टी टास्किंग स्टाफ" },
    "Canteen Attendant": { en: "Canteen Attendant", hi: "कैंटीन परिचारक" }
  };

  const employees = [
    { sno: 1, name: "Shri Ratan Biswas, IAS", designation: "Director" },
    { sno: 2, name: "Shri Prosenjit Nath Choudhury", designation: "Deputy Registrar General" },
    { sno: 3, name: "Shri Sukla Kanta Sarkar", designation: "Deputy Director" },
    { sno: 4, name: "Smt. Luna Tamuly", designation: "Assistant Director (T)" },
    { sno: 5, name: "Shri Subijit Deb Ray", designation: "Assistant Director (T)" },
    { sno: 6, name: "Smt. Uma Das", designation: "Statistical Investigator Grade-I" },
    { sno: 7, name: "Shri Bidyut Das", designation: "Statistical Investigator Grade-I" },
    { sno: 8, name: "Smt. Madhumita Choudhuri", designation: "Statistical Investigator Grade-I" },
    { sno: 9, name: "Shri Arun Pratap Mishra", designation: "Senior Geographer" },
    { sno: 10, name: "Shri Swapan Sarkar", designation: "Office Superintendent" },
    { sno: 11, name: "Shri Ajay Shukla", designation: "Statistical Investigator Grade-II" },
    { sno: 12, name: "Shri Pratap Dey", designation: "Statistical Investigator Grade-II" },
    { sno: 13, name: "Shri Monojit Kumar Paul", designation: "Statistical Investigator Grade-II" },
    { sno: 14, name: "Shri Subhadeep Raha", designation: "Statistical Investigator Grade-II" },
    { sno: 15, name: "Shri Yash Chaurasiya", designation: "Statistical Investigator Grade-II" },
    { sno: 16, name: "Shri Hrishi Sogarwal", designation: "Statistical Investigator Grade-II" },
    { sno: 17, name: "Shri Rajeshwar Singha", designation: "Statistical Investigator Grade-II" },
    { sno: 18, name: "Shri Arupula Harshavardhan", designation: "Statistical Investigator Grade-II" },
    { sno: 19, name: "Shri Murlidhar", designation: "Statistical Investigator Grade-II" },
    { sno: 20, name: "Shri Rahul Das", designation: "Statistical Investigator Grade-II" },
    { sno: 21, name: "Shri Dulal Rudra", designation: "Multi Tasking Staff" },
    { sno: 22, name: "Shri Chinmoy Nath", designation: "Multi Tasking Staff" },
    { sno: 23, name: "Shri Mahesh Dhanuk", designation: "Multi Tasking Staff" },
    { sno: 24, name: "Smt. Sandhya Rani Deb Barma", designation: "Multi Tasking Staff" },
    { sno: 25, name: "Shri Sourav Kumar", designation: "Multi Tasking Staff" },
    { sno: 26, name: "Shri Deepak Kumar", designation: "Multi Tasking Staff" },
    { sno: 27, name: "Shri Bijoy Kumar Ghosh", designation: "Canteen Attendant" },
    { sno: 28, name: "Smt. Trisha Nath", designation: "Canteen Attendant" },
    { sno: 29, name: "Shri Amalendu Das", designation: "Canteen Attendant" }
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
            {isHi ? 'कर्मचारी पदानुक्रम एवं संगठन ढांचा' : 'Organization Framework & Directory'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div className="premium-card" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', fontWeight: 800 }}>
              {isHi ? 'अधिकारियों और कर्मचारियों की सूची' : 'List of Officers and Staff'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '10px' }}>
              {isHi 
                ? 'जनगणना कार्य निदेशालय, त्रिपुरा के समस्त अधिकारियों एवं कर्मचारियों की संवर्ग-वार सूची।' 
                : 'Cadre-wise roster of all officers and employees at the Directorate of Census Operations, Tripura.'}
            </p>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '15px auto 0' }}></div>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px', backgroundColor: 'white' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'left' }}>
                  <th style={{ padding: '16px 20px', fontWeight: '600', width: '100px' }}>{isHi ? 'क्र. सं.' : 'S. No.'}</th>
                  <th style={{ padding: '16px 20px', fontWeight: '600' }}>{isHi ? 'कर्मचारी का नाम' : 'Name of Employee'}</th>
                  <th style={{ padding: '16px 20px', fontWeight: '600' }}>{isHi ? 'पदनाम' : 'Designation'}</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => {
                  const translation = designationMap[emp.designation] || { en: emp.designation, hi: emp.designation };
                  return (
                    <tr key={emp.sno} className="circular-row" style={{ borderBottom: index === employees.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                      <td style={{ padding: '14px 20px', color: 'var(--text-muted)' }}>{emp.sno}</td>
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: 'var(--primary-color)' }}>{emp.name}</td>
                      <td style={{ padding: '14px 20px', color: '#475569', fontWeight: 600 }}>
                        {isHi ? translation.hi : translation.en}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
