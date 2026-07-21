"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function WhoIsWhoPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  const leaders = [
    {
      role: isHi ? 'निदेशक (प्रशासनिक प्रमुख)' : 'Director (Administrative Head)',
      name: 'Shri Ratan Biswas, IAS',
      sub: isHi ? 'जनगणना कार्य और नागरिक पंजीकरण का राज्य-स्तरीय नेतृत्व।' : 'State-level lead for Census Operations & Civil Registration System.',
      color: 'linear-gradient(135deg, #1B4332 0%, #0D1F15 100%)',
    },
    {
      role: isHi ? 'उप रजिस्ट्रार जनरल / उप निदेशक' : 'Deputy Registrar General / Deputy Director',
      name: 'Shri Prosenjit Nath Choudhury',
      sub: isHi ? 'तकनीकी एवं सांख्यिकीय कार्यों का समन्वय।' : 'Coordination of statistical and technical activities.',
      color: 'linear-gradient(135deg, #2A6F4E 0%, #1B4332 100%)',
    },
    {
      role: isHi ? 'उप निदेशक' : 'Deputy Director',
      name: 'Shri Sukla Kanta Sarkar',
      sub: isHi ? 'प्रशासनिक प्रबंधन एवं अनुभाग नियंत्रण।' : 'Administrative management and section supervision.',
      color: 'linear-gradient(135deg, #379A69 0%, #2A6F4E 100%)',
    },
  ];

  const assistantDirectors = [
    { name: 'Smt. Luna Tamuly', designation: isHi ? 'सहायक निदेशक (तकनीकी)' : 'Assistant Director (Technical)' },
    { name: 'Shri Subijit Deb Ray', designation: isHi ? 'सहायक निदेशक (तकनीकी)' : 'Assistant Director (Technical)' },
    { name: 'Shri Swapan Sarkar', designation: isHi ? 'कार्यालय अधीक्षक' : 'Office Superintendent' },
    { name: 'Shri Arun Pratap Mishra', designation: isHi ? 'वरिष्ठ भूगोलवेत्ता' : 'Senior Geographer' },
  ];

  const otherStaff = [
    { name: 'Shri Bidyut Das', designation: isHi ? 'सांख्यिकीय अन्वेषक-I' : 'Statistical Investigator-I' },
    { name: 'Smt. Madhumita Choudhuri', designation: isHi ? 'सांख्यिकीय अन्वेषक-I' : 'Statistical Investigator-I' },
    { name: 'Smt. Uma Das', designation: isHi ? 'सांख्यिकीय अन्वेषक-I' : 'Statistical Investigator-I' },
    { name: 'Shri Ajay Shukla', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Arupula Harshavardhan', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Hrishi Soganwal', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Monojit Kumar Paul', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Murlidhar', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Pratap Dey', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Rahul Das', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Subhadeep Raha', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Yash Chaurasiya', designation: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II' },
    { name: 'Shri Chinmoy Nath', designation: isHi ? 'मल्टी टास्किंग स्टाफ' : 'Multi Tasking Staff' },
    { name: 'Shri Dulal Rudra', designation: isHi ? 'मल्टी टास्किंग स्टाफ' : 'Multi Tasking Staff' },
    { name: 'Shri Deepak Kumar', designation: isHi ? 'मल्टी टास्किंग स्टाफ' : 'Multi Tasking Staff' },
    { name: 'Shri Mahesh Dhanuk', designation: isHi ? 'मल्टी टास्किंग स्टाफ' : 'Multi Tasking Staff' },
    { name: 'Smt. Sandhya Rani Deb Barma', designation: isHi ? 'मल्टी टास्किंग स्टाफ' : 'Multi Tasking Staff' },
    { name: 'Shri Sourav Kumar', designation: isHi ? 'मल्टी टास्किंग स्टाफ' : 'Multi Tasking Staff' },
    { name: 'Shri Amalendu Das', designation: isHi ? 'कैंटीन अटेंडेंट' : 'Canteen Attendant' },
    { name: 'Shri Bijoy Kumar Ghosh', designation: isHi ? 'कैंटीन अटेंडेंट' : 'Canteen Attendant' },
    { name: 'Smt. Trisha Nath', designation: isHi ? 'कैंटीन अटेंडेंट' : 'Canteen Attendant' },
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
            {isHi ? 'कौन कौन है (प्रशासनिक पदानुक्रम)' : 'Who is Who (Key Administration)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 800 }}>
              {isHi ? 'अधिकारी पदानुक्रम' : 'Hierarchy of Key Officers'}
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '15px auto 0' }}></div>
          </div>

          {/* Leaders section (Top levels) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center', position: 'relative' }}>
            
            {leaders.map((leader, i) => (
              <div key={leader.name} style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {i > 0 && (
                  <div style={{ height: '30px', width: '2px', backgroundColor: 'var(--secondary-color)', marginBottom: '5px' }}></div>
                )}
                
                <div style={{
                  background: leader.color,
                  color: 'white',
                  borderRadius: '16px',
                  padding: '25px',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(201,169,75,0.2)'
                }}>
                  <p style={{ color: 'var(--secondary-color)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px 0' }}>
                    {leader.role}
                  </p>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 6px 0' }}>{leader.name}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>{leader.sub}</p>
                </div>
              </div>
            ))}
            
          </div>

          <div style={{ height: '40px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '2px', backgroundColor: 'var(--secondary-color)', height: '100%' }}></div>
          </div>

          {/* Assistant Directors & Branch Heads Grid */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            padding: '40px 30px'
          }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', marginBottom: '30px' }}>
              {isHi ? 'अनुभाग प्रमुख एवं वरिष्ठ अधिकारी' : 'Section Heads & Senior Officers'}
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {assistantDirectors.map(ad => (
                <div key={ad.name} style={{
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #f1f5f9',
                  backgroundColor: '#f8fafc',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                }}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 6px 0' }}>
                    {ad.name}
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0, fontWeight: 600 }}>
                    {ad.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: '40px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '2px', backgroundColor: 'var(--secondary-color)', height: '100%' }}></div>
          </div>

          {/* Other Staff Grid */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            padding: '40px 30px'
          }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', marginBottom: '30px' }}>
              {isHi ? 'सांख्यिकीय एवं प्रशासनिक कर्मचारी' : 'Statistical & Administrative Staff'}
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {otherStaff.map(staff => (
                <div key={staff.name} style={{
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #f1f5f9',
                  backgroundColor: '#f8fafc',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                }}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 6px 0' }}>
                    {staff.name}
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0, fontWeight: 600 }}>
                    {staff.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
