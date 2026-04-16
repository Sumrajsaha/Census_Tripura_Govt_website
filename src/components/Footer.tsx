"use client";

import { useLanguage } from '@/context/LanguageContext';
import GovLinksBar from './GovLinksBar';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Gold top border accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #C9A94B, transparent)' }}></div>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>

        <div>
          <h3 style={{ color: '#F0D585', fontSize: '1.05rem', marginBottom: '25px', borderLeft: '3px solid #C9A94B', paddingLeft: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.05em' }}>
            {t("Quick Access")}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
            <li><a href="https://censusindia.gov.in" target="_blank" rel="noopener noreferrer">{t("Official ORGI Portal")}</a></li>
            <li><a href="/data">{t("Provisional Data hub")}</a></li>
            <li><a href="/circulars">{t("Circulars & Updates")}</a></li>
            <li><a href="/rti">{t("RTI Proactive Disclosure")}</a></li>
            <li><a href="/tenders">{t("Procurement Notices")}</a></li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#F0D585', fontSize: '1.05rem', marginBottom: '25px', borderLeft: '3px solid #C9A94B', paddingLeft: '14px', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.05em' }}>
            {t("Contact DCO, Tripura")}
          </h3>
          <p style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
            <strong>{t("Directorate of Census Operations, Tripura")}</strong><br />
            {t("Ramnagar Lane 1, By Lane-2 (Left Side)")}<br />
            {t("Agartala - 799002")}
          </p>
          <p style={{ marginTop: '15px', color: '#C9A94B', fontWeight: 700 }}>Email: dco-tri.rgi@censusindia.gov.in</p>
        </div>
      </div>

      <GovLinksBar />

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '30px', paddingTop: '25px', textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }} className="container">
        <p>This is the official Website of the Directorate of Census Operations, Tripura (Government of India).</p>
        <p style={{ marginTop: '8px' }}>© {new Date().getFullYear()} DCO Tripura. Hosted by Directorate of Census Operations, Tripura.</p>
        <p style={{ marginTop: '12px', fontSize: '0.75rem', color: '#4f4d4dff', fontWeight: 400, letterSpacing: '0.04em' }}>
          Developed by: Sumraj Saha | Bishal Debnath | Nayanika Saha
        </p>
      </div>
    </footer>
  );
}
