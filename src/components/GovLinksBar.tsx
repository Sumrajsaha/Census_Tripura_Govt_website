'use client';

import { useLanguage } from '@/context/LanguageContext';

const govLinks = [
  {
    href: 'https://www.india.gov.in/',
    label: 'India.gov.in',
    line1: 'india.gov.in',
    line2: 'National Portal of India',
    color: '#8B0000',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8B0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.data.gov.in/',
    label: 'data.gov.in',
    line1: 'data.gov.in',
    line2: 'Open Data Platform',
    color: '#d97706',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    href: 'https://www.digitalindia.gov.in/',
    label: 'Digital India',
    line1: 'Digital India',
    line2: 'Power to Empower',
    color: '#1d4ed8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    href: 'https://www.mha.gov.in/hi',
    label: 'Ministry of Home Affairs',
    line1: 'Ministry of',
    line2: 'Home Affairs',
    color: '#0d2a58',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0d2a58" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href: 'https://www.mygov.in/',
    label: 'MyGov',
    line1: 'MyGov',
    line2: 'मेरी सरकार',
    color: '#059669',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    href: 'https://www.makeinindia.com/',
    label: 'Make in India',
    line1: 'Make in India',
    line2: 'Invest · Manufacture',
    color: '#ea580c',
    icon: null, // We'll just render the image fully in the component
  },
];

export default function GovLinksBar() {
  const { t } = useLanguage();

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '50px', paddingTop: '35px' }}>
      <p style={{
        color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.15em',
        textAlign: 'center', marginBottom: '20px'
      }}>
        {t("Important Government Links")}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
        {govLinks.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            aria-label={item.label}
            className="govlink-logo"
            style={{
              display: 'flex', flexDirection: 'row',
              alignItems: 'center', justifyContent: 'center',
              gap: '10px',
              backgroundColor: '#ffffff', border: '2px solid #1e3a6e',
              borderRadius: '10px', padding: '8px 16px',
              minWidth: '145px', height: '64px',
              textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
            }}
          >
            {item.label === 'Make in India' ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/make_in_india.png" 
                  alt="Make in India" 
                  style={{ 
                    height: '40px', width: 'auto', objectFit: 'contain'
                  }} 
                />
              </div>
            ) : (
              <>
                {/* Icon */}
                <div style={{ flexShrink: 0 }}>{item.icon}</div>
                {/* Text */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontSize: item.line1.length > 10 ? '0.72rem' : '0.82rem',
                    fontWeight: 800, color: item.color, lineHeight: 1.2,
                  }}>
                    {t(item.line1)}
                  </span>
                  <span style={{
                    fontSize: '0.6rem', fontWeight: 500, color: '#64748b', lineHeight: 1.3, marginTop: '2px'
                  }}>
                    {t(item.line2)}
                  </span>
                </div>
              </>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
