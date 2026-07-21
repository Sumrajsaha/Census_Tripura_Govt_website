"use client";

import { useLanguage } from '@/context/LanguageContext';
import React, { Fragment } from 'react';

export default function WhoIsWhoPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  const t = {
    title: isHi ? 'हमारे बारे में' : 'About Us',
    heading: isHi ? 'कार्यालय संगठनात्मक चार्ट (कौन कौन है)' : 'Office Organizational Chart (Who is Who)',
    subHeading: isHi ? 'जनगणना कार्य निदेशालय, त्रिपुरा' : 'Directorate of Census Operations, Tripura',
    director: isHi ? 'निदेशक' : 'Director',
    drg: isHi ? 'उप रजिस्ट्रार जनरल' : 'Deputy Registrar General',
    dd: isHi ? 'उप निदेशक' : 'Deputy Director',
    ad: isHi ? 'सहायक निदेशक' : 'Assistant Director',
    sg: isHi ? 'वरिष्ठ भूगोलवेत्ता' : 'Senior Geographer',
    os: isHi ? 'कार्यालय अधीक्षक' : 'Office Superintendent',
    si1: isHi ? 'सांख्यिकीय अन्वेषक-I' : 'Statistical Investigator-I',
    si2: isHi ? 'सांख्यिकीय अन्वेषक-II' : 'Statistical Investigator-II',
    mts: isHi ? 'मल्टी टास्किंग स्टाफ' : 'Multi Tasking Staff',
    ca: isHi ? 'कैंटीन अटेंडेंट' : 'Canteen Attendant',
  };

  const spine = [
    { role: t.director, name: 'Ratan Biswas, IAS' },
    { role: t.drg, name: 'Prosenjit Nath Choudhury' },
    { role: t.dd, name: 'Sukla Kanta Sarkar' },
    { type: 'row', items: [
      { role: t.ad, name: 'Luna Tamuly' },
      { role: t.ad, name: 'Subjit Deb Ray' }
    ]},
    { role: t.sg, name: 'Arun Pratap Mishra' },
    { role: t.os, name: 'Swapan Sarkar' }
  ];

  const branches = [
    [
      { role: t.si1, name: 'Bidyut Das' },
      { role: t.si2, name: 'Ajay Shukla' },
      { role: t.si2, name: 'Monojit Kumar Paul' },
      { role: t.si2, name: 'Rahul Das' },
      { role: t.mts, name: 'Chinmoy Nath' },
      { role: t.mts, name: 'Mahesh Dhanuk' },
      { role: t.ca, name: 'Amalendu Das' },
    ],
    [
      { role: t.si1, name: 'Madhumita Choudhuri' },
      { role: t.si2, name: 'Arupula Harshavardhan' },
      { role: t.si2, name: 'Murlidhar' },
      { role: t.si2, name: 'Subhadeep Raha' },
      { role: t.mts, name: 'Dulal Rudra' },
      { role: t.mts, name: 'Sandhya Rani Deb Barma' },
      { role: t.ca, name: 'Bijoy Kumar Ghosh' },
    ],
    [
      { role: t.si1, name: 'Uma Das' },
      { role: t.si2, name: 'Hrishi Soganwal' },
      { role: t.si2, name: 'Pratap Dey' },
      { role: t.si2, name: 'Yash Chaurasiya' },
      { role: t.mts, name: 'Deepak Kumar' },
      { role: t.mts, name: 'Sourav Kumar' },
      { role: t.ca, name: 'Trisha Nath' },
    ]
  ];

  const NodeBox = ({ role, name, isMain = false }: { role: string, name: string, isMain?: boolean }) => (
    <div style={{
      background: isMain ? 'linear-gradient(135deg, #1B4332 0%, #0D1F15 100%)' : 'white',
      color: isMain ? 'white' : '#1e293b',
      borderRadius: '12px',
      padding: '16px 24px',
      width: '100%',
      maxWidth: '320px',
      textAlign: 'center',
      boxShadow: isMain ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 12px rgba(0,0,0,0.05)',
      border: isMain ? '1px solid rgba(201,169,75,0.3)' : '1px solid #cbd5e1',
      position: 'relative',
      zIndex: 2,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '80px'
    }}>
      <p style={{ color: isMain ? 'var(--secondary-color)' : '#64748b', fontSize: '0.85rem', fontWeight: 700, margin: '0 0 6px 0', lineHeight: 1.2 }}>
        {role}
      </p>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>{name}</h3>
    </div>
  );

  const VerticalLine = ({ height = '30px' }) => (
    <div style={{ width: '2px', height, backgroundColor: '#94a3b8', margin: '0 auto' }}></div>
  );

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '85vh', paddingBottom: '80px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {t.title}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {t.heading}
          </h1>
          <p style={{ color: '#e2e8f0', fontSize: '1.1rem', marginTop: '10px', margin: '10px 0 0 0', fontWeight: 500 }}>
            {t.subHeading}
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px', overflowX: 'auto' }}>
        <div style={{ minWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Spine */}
          {spine.map((node, i) => (
            <Fragment key={i}>
              {i > 0 && <VerticalLine height={node.type === 'row' ? '25px' : '30px'} />}
              
              {node.type === 'row' ? (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', position: 'relative', width: '100%' }}>
                   {/* Horizontal connection line */}
                   <div style={{ position: 'absolute', top: '50%', left: '50%', width: '360px', height: '2px', backgroundColor: '#94a3b8', transform: 'translate(-50%, -50%)', zIndex: 1 }}></div>
                   {/* Vertical connection line passing through */}
                   <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '2px', backgroundColor: '#94a3b8', transform: 'translateX(-50%)', zIndex: 1 }}></div>
                   
                   {node.items?.map((item: any, j: number) => (
                     <div key={j} style={{ width: '320px', zIndex: 2 }}>
                       <NodeBox role={item.role} name={item.name} />
                     </div>
                   ))}
                </div>
              ) : (
                <NodeBox role={node.role!} name={node.name!} isMain={i < 3} />
              )}
            </Fragment>
          ))}

          <VerticalLine height="30px" />

          {/* Branches Container */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', marginTop: '0px' }}>
            {/* The horizontal line spanning the tops of the 3 columns */}
            {/* Assuming 3 equal columns, the centers are at 16.66%, 50%, 83.33% */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: '16.66%', 
              right: '16.66%', 
              height: '2px', 
              backgroundColor: '#94a3b8' 
            }}></div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingTop: '20px' }}>
              {branches.map((col, colIndex) => (
                <div key={colIndex} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                  {/* Vertical drop for each column */}
                  <div style={{ position: 'absolute', top: '-20px', left: '50%', width: '2px', height: '20px', backgroundColor: '#94a3b8', transform: 'translateX(-50%)' }}></div>
                  
                  {col.map((item, itemIndex) => (
                    <Fragment key={itemIndex}>
                      {itemIndex > 0 && <VerticalLine height="25px" />}
                      <NodeBox role={item.role} name={item.name} />
                    </Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
