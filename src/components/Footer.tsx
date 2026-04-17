"use client";

import { useLanguage } from '@/context/LanguageContext';
import GovLinksBar from './GovLinksBar';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Gold top border accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #C9A94B, transparent)' }}></div>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', padding: '0 10px' }}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: '#F0D585', fontSize: '1.3rem', marginBottom: '20px', borderLeft: '3px solid #C9A94B', paddingLeft: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.05em', fontWeight: 700 }}>
            {t("Quick Access")}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '1.05rem' }}>
            <li><a href="https://censusindia.gov.in" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.9 }}>{t("Official ORGI Portal")}</a></li>
            <li><a href="/data" style={{ opacity: 0.9 }}>{t("Provisional Data hub")}</a></li>
            <li><a href="/circulars" style={{ opacity: 0.9 }}>{t("Circulars & Updates")}</a></li>
            <li><a href="/rti" style={{ opacity: 0.9 }}>{t("RTI Proactive Disclosure")}</a></li>
            <li><a href="/tenders" style={{ opacity: 0.9 }}>{t("Procurement Notices")}</a></li>
          </ul>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: '#F0D585', fontSize: '1.3rem', marginBottom: '20px', borderLeft: '3px solid #C9A94B', paddingLeft: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.05em', fontWeight: 700 }}>
            {t("Contact DCO, Tripura")}
          </h3>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem', opacity: 0.9 }}>
            <strong style={{ opacity: 1, letterSpacing: '0.02em', fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>{t("Directorate of Census Operations, Tripura")}</strong>
            {t("Ramnagar Lane 1, By Lane-2 (Left Side)")}<br />
            {t("Agartala - 799002")}
          </p>
          <p style={{ marginTop: '15px', color: '#C9A94B', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.03em' }}>Email: <a href="mailto:dco-tri.rgi@censusindia.gov.in" style={{ textDecoration: 'none', color: '#F0D585' }}>dco-tri.rgi@censusindia.gov.in</a></p>
        </div>
      </div>

      <GovLinksBar />

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '30px', paddingTop: '25px', textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }} className="container">
        <p>This is the official Website of the Directorate of Census Operations, Tripura (Government of India).</p>
        <p style={{ marginTop: '8px' }}>© {new Date().getFullYear()} DCO Tripura. Hosted by Directorate of Census Operations, Tripura.</p>
        <p style={{ marginTop: '12px', fontSize: '0.75rem', color: '#4f4d4dff', fontWeight: 400, letterSpacing: '0.04em' }}>
          Developed by: Sumraj Saha | Bishal Debnath | Saikat Kar | Nayanika Saha
        </p>
      </div>
    </footer>
  );
}
