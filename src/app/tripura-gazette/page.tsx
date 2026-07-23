"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const gazettes = [
  {
    id: 1,
    titleEn: 'Tripura Gazette Notification 1',
    titleHi: 'त्रिपुरा राजपत्र अधिसूचना 1',
    file: '/pdfs/Tripura Gazettes/Tripura Gazette .pdf',
  },
  {
    id: 2,
    titleEn: 'Tripura Gazette Notification 2',
    titleHi: 'त्रिपुरा राजपत्र अधिसूचना 2',
    file: '/pdfs/Tripura Gazettes/Tripura Gazzete (1).pdf',
  }
];

export default function TripuraGazettePage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'त्रिपुरा राजपत्र | जनगणना कार्य निदेशालय' 
      : 'Tripura Gazette | DCO Tripura';
  }, [isHi]);

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '75vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'सार्वजनिक' : 'Public'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'त्रिपुरा राजपत्र में राजपत्र अधिसूचनाएं' : 'Gazette Notifications in Tripura Gazettes'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', padding: '30px', overflow: 'hidden' }}>
            <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '24px', lineHeight: 1.6 }}>
              {isHi 
                ? 'त्रिपुरा राजपत्र अधिसूचनाएं नीचे दी गई हैं। आप उन्हें देखने या डाउनलोड करने के लिए लिंक पर क्लिक कर सकते हैं।' 
                : 'The Gazette Notifications for Tripura are provided below. You can click on the links to view or download them.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {gazettes.map((gazette) => (
                <a 
                  key={gazette.id}
                  href={gazette.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    backgroundColor: '#F8FAFC'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--secondary-color)';
                    e.currentTarget.style.backgroundColor = '#F1F5F9';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    backgroundColor: '#EFF6FF',
                    color: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#0F172A', fontWeight: 600 }}>
                      {isHi ? gazette.titleHi : gazette.titleEn}
                    </h3>
                  </div>
                  
                  <div style={{
                    color: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 500,
                    fontSize: '0.95rem'
                  }}>
                    {isHi ? 'डाउनलोड' : 'Download'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ marginTop: '30px', padding: '16px', backgroundColor: '#F1F5F9', borderRadius: '8px', borderLeft: '4px solid #64748B' }}>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>
                {isHi 
                  ? 'नोट: अधिक राजपत्र अधिसूचनाएं उपलब्ध होने पर यहां जोड़ी जाएंगी।' 
                  : 'Note: More gazette notifications will be added here as they become available.'}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
