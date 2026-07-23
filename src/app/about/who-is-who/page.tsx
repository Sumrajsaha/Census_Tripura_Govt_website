"use client";

import { useLanguage } from '@/context/LanguageContext';

const officers = [
  { name: 'Shri Ratan Biswas', designation: 'Director' },
  { name: 'Shri Prosenjit Nath Choudhury', designation: 'Deputy Registrar General' },
  { name: 'Shri Sukla Kanta Sarkar', designation: 'Deputy Director' },
  { name: 'Smt. Luna Tamuly', designation: 'Assistant Director(T)' },
  { name: 'Shri Subijit Deb Ray', designation: 'Assistant Director(T)' },
  { name: 'Smt. Uma Das', designation: 'Statistical Investigator-I' },
  { name: 'Shri Bidyut Das', designation: 'Statistical Investigator-I' },
  { name: 'Smt. Madhumita Choudhuri', designation: 'Statistical Investigator-I' },
  { name: 'Shri Arun Pratap Mishra', designation: 'Assistant Research Officer' },
  { name: 'Shri Swapan Sarkar', designation: 'Office Superintendent' },
  { name: 'Shri Pratap Dey', designation: 'Statistical Investigator-II' },
  { name: 'Shri Ajay Shukla', designation: 'Statistical Investigator-II' },
  { name: 'Shri Monojit Kumar Paul', designation: 'Statistical Investigator-II' },
  { name: 'Shri Subhadeep Raha', designation: 'Statistical Investigator-II' },
  { name: 'Shri Hrishi Sogarwal', designation: 'Statistical Investigator-II' },
  { name: 'Shri Rajeshwar Singha', designation: 'Statistical Investigator-II' },
  { name: 'Shri Murlidhar', designation: 'Statistical Investigator-II' },
  { name: 'Shri Yash Chaurasiya', designation: 'Statistical Investigator-II' },
  { name: 'Shri Arupila Harshavardhan', designation: 'Statistical Investigator-II' },
  { name: 'Shri Rahul Das', designation: 'Statistical Investigator-II' },
  { name: 'Shri Dulal Rudra', designation: 'Multi Tasking Staff' },
  { name: 'Shri Mahesh Dhanuk', designation: 'Multi Tasking Staff' },
  { name: 'Shri Chinmoy Nath', designation: 'Multi Tasking Staff' },
  { name: 'Smt. Sandhya Rani Deb Barma', designation: 'Multi Tasking Staff' },
  { name: 'Shri Sourav Kumar', designation: 'Multi Tasking Staff' },
  { name: 'Shri Deepak Kumar', designation: 'Multi Tasking Staff' },
  { name: 'Shri Bijoy Kumar Ghosh', designation: 'Canteen Attendant' },
  { name: 'Smt. Trisha Nath', designation: 'Canteen Attendant' },
  { name: 'Shri Amalendu Das', designation: 'Canteen Attendant' },
];

const designationColors: Record<string, { bg: string; color: string; dot: string }> = {
  'Director': { bg: '#003366', color: '#fff', dot: '#001a33' },
  'Deputy Registrar General': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Deputy Director': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Assistant Director(T)': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Assistant Research Officer': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Office Superintendent': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Statistical Investigator-I': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Statistical Investigator-II': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Multi Tasking Staff': { bg: '#37474f', color: '#fff', dot: '#263238' },
  'Canteen Attendant': { bg: '#37474f', color: '#fff', dot: '#263238' },
};

export default function WhoIsWhoPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  return (
    <div style={{ backgroundColor: '#f4f7fc', minHeight: '85vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे बारे में' : 'About Us'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'कौन कौन है' : 'Who is Who'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Table Card */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
          }}>
            {/* Table Header Banner */}
            <div style={{
              backgroundColor: 'var(--primary-color)',
              padding: '22px 32px',
              textAlign: 'center',
            }}>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, margin: 0, letterSpacing: '0.04em' }}>
                Directorate of Census Operations Tripura
              </h2>
            </div>

            {/* Column Headers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              backgroundColor: 'var(--secondary-color)',
            }}>
              <div style={{ padding: '14px 28px', fontWeight: 800, fontSize: '1rem', color: 'var(--primary-color)', borderRight: '2px solid rgba(255,255,255,0.4)' }}>
                Name of Officer / Official
              </div>
              <div style={{ padding: '14px 28px', fontWeight: 800, fontSize: '1rem', color: 'var(--primary-color)' }}>
                Designation / Post
              </div>
            </div>

            {/* Table Rows */}
            {officers.map((officer, idx) => {
              const style = designationColors[officer.designation] || { bg: '#f0f4f8', color: '#1e293b', dot: '#94a3b8' };
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    backgroundColor: isEven ? '#ffffff' : '#f8faff',
                    borderBottom: '1px solid #e8edf5',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eef4ff')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = isEven ? '#ffffff' : '#f8faff')}
                >
                  {/* Name Cell */}
                  <div style={{
                    padding: '13px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderRight: '1px solid #e2e8f0',
                    fontSize: '0.95rem',
                    color: '#1e293b',
                    fontWeight: 500,
                  }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      backgroundColor: style.dot, flexShrink: 0,
                    }} />
                    {officer.name}
                  </div>
                  {/* Designation Cell */}
                  <div style={{
                    padding: '13px 28px',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{
                      backgroundColor: style.bg,
                      color: style.color,
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                      whiteSpace: 'nowrap',
                    }}>
                      {officer.designation}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.82rem', marginTop: '20px' }}>
            * Information as updated for Directorate of Census Operations, Tripura
          </p>
        </div>
      </div>
    </div>
  );
}
