"use client";

import ImageSlider from '@/components/ImageSlider';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeContent({ latestNews }: { latestNews: { id: number; title: string }[] }) {
  const { t } = useLanguage();

  return (
    <div>
      {/* Dynamic Modern Hero Section */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '620px',
        backgroundColor: '#0D1F15',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderBottom: '3px solid #C9A94B'
      }}>
        <ImageSlider />

        {/* Dark overlay for text readability - neutral, no color tint */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)',
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
          <span style={{
            background: 'linear-gradient(135deg, #C9A94B, #F0D585)',
            color: '#1B4332',
            padding: '5px 18px', borderRadius: '20px', fontSize: '0.8rem',
            fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase',
            boxShadow: '0 4px 15px rgba(201,169,75,0.45)', display: 'inline-block', marginBottom: '20px'
          }}>
            {t("Official Portal")}
          </span>
          <h1 className="hero-title">{t("Census 2027")}</h1>
          <h2 className="hero-subtitle">{t("Tripura")}</h2>
          <p className="hero-slogan">
            " जनगणना से जन कल्याण | Janganana se Jan Kalyan "
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT GRID: Mascots + Latest Updates + Cards ── */}
      <section style={{ backgroundColor: '#f8fafc', padding: '50px 0' }}>
        <div className="container" style={{ padding: '0 24px' }}>

          {/* Top row: Mascot Left | Latest Updates | Mascot Right */}
          <div className="responsive-grid-3">

            {/* LEFT MASCOT */}
            <div className="mascot-container float-animation-delayed">
              <div style={{
                width: '200px', height: '400px', position: 'relative',
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))',
              }}>
                <Image
                  src="/Mascot 4.png"
                  alt="Census Mascot"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p style={{
                textAlign: 'center', fontSize: '0.82rem', fontWeight: 700,
                color: 'var(--primary-color)', textTransform: 'uppercase',
                letterSpacing: '0.06em', opacity: 0.8
              }}>Pragati</p>
            </div>

            {/* CENTRE: Latest Updates Vertical Ticker */}
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '14px',
              boxShadow: '0 8px 30px rgba(27,67,50,0.10)',
              border: '1px solid #E8EDE8',
              overflow: 'hidden',
            }}>
              {/* Header bar */}
              <div style={{
                background: 'linear-gradient(135deg, #1B4332, #2D6A4F)',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                borderBottom: '2px solid #C9A94B'
              }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  backgroundColor: '#ef4444', display: 'inline-block',
                  boxShadow: '0 0 0 3px rgba(239,68,68,0.3)',
                  animation: 'pulse 1.5s infinite'
                }}></span>
                <h3 style={{ color: '#fff', margin: 0, fontSize: '1rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {t("LATEST UPDATES")}
                </h3>
              </div>

              {/* Scrolling list */}
              <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  animation: 'scrollUp 40s linear infinite',
                }}>
                  {[...latestNews, ...latestNews].map((news, i) => (
                    <div key={i} className="news-ticker-item" style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '14px 20px',
                      borderBottom: '1px solid #f1f5f9',
                    }}>
                      <span style={{
                        flexShrink: 0,
                        width: '6px', height: '6px', borderRadius: '50%',
                        backgroundColor: 'var(--secondary-color)',
                        marginTop: '7px'
                      }}></span>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#374151', lineHeight: 1.5, fontWeight: 500 }}>
                        {news.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: '10px 20px', borderTop: '1px solid #E8EDE8', backgroundColor: '#F9FBF9' }}>
                <a href="/circulars" style={{
                  fontSize: '0.82rem', fontWeight: 700, color: '#1B4332',
                  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px'
                }}>
                  {t("View All Circulars & Updates")} →
                </a>
              </div>
            </div>

            {/* RIGHT MASCOT */}
            <div className="mascot-container float-animation">
              <div style={{
                width: '200px', height: '400px', position: 'relative',
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))',
              }}>
                <Image
                  src="/Mascot 5.png"
                  alt="Census Mascot"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p style={{
                textAlign: 'center', fontSize: '0.82rem', fontWeight: 700,
                color: 'var(--primary-color)', textTransform: 'uppercase',
                letterSpacing: '0.06em', opacity: 0.8
              }}>Vikas</p>
            </div>
          </div>

          {/* Services Cards Section */}
          <div style={{ position: 'relative', textAlign: 'center', marginBottom: '45px', marginTop: '30px' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '12px', fontWeight: 800 }}>{t("Official State Portals")}</h2>
              <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '0 auto 20px', borderRadius: '2px' }}></div>
              <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                {t("Explore the essential services and databases of the Directorate of Census Operations, Tripura.")}
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', alignItems: 'stretch' }}>

            {/* Card 1 – CMMS */}
            <a href="https://census.gov.in/" target="_blank" rel="noopener noreferrer" className="premium-card" style={{ display: 'flex', flexDirection: 'column', padding: '35px 30px', textAlign: 'left', position: 'relative', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px', opacity: 0.85 }}>🖥️</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--primary-color)' }}>{t("Census Management and Monitoring System")}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{t("Digital platform for managing and monitoring Census 2027 field operations across Tripura.")}</p>
              <div style={{ marginTop: '18px', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', color: '#1d4ed8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {t("VISIT PORTAL")} <span>↗</span>
              </div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', backgroundColor: '#1d4ed8', opacity: 0.08, borderRadius: '50%' }}></div>
            </a>

            {/* Card 2 – Interactive GIS Map */}
            <a href="/maps" className="premium-card" style={{ display: 'flex', flexDirection: 'column', padding: '35px 30px', textAlign: 'left', position: 'relative', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px', opacity: 0.85 }}>🗺️</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--primary-color)' }}>{t("Interactive GIS Map")}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{t("Explore Tripura boundaries with interactive visual data.")}</p>
              <div style={{ marginTop: '18px', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', color: '#059669', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {t("EXPLORE PORTAL")} <span>→</span>
              </div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', backgroundColor: '#059669', opacity: 0.08, borderRadius: '50%' }}></div>
            </a>

            {/* Card 3 – Census Question */}
            <a href="https://censusindia.gov.in/census.website/CENSUS_ques" target="_blank" rel="noopener noreferrer" className="premium-card" style={{ display: 'flex', flexDirection: 'column', padding: '35px 30px', textAlign: 'left', position: 'relative', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px', opacity: 0.85 }}>❓</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--primary-color)' }}>{t("Census Question")}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{t("Access the official questionnaires and schedules used in Census 2011 and upcoming Census 2027 operations.")}</p>
              <div style={{ marginTop: '18px', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', color: '#7c3aed', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {t("VIEW QUESTIONS")} <span>↗</span>
              </div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', backgroundColor: '#7c3aed', opacity: 0.08, borderRadius: '50%' }}></div>
            </a>

            {/* Card 4 – Self-Enumeration (HLO) */}
            <a href="https://se.census.gov.in/" target="_blank" rel="noopener noreferrer" className="premium-card" style={{ display: 'flex', flexDirection: 'column', padding: '35px 30px', textAlign: 'left', position: 'relative', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px', opacity: 0.85 }}>📋</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--primary-color)' }}>{t("Self-Enumeration (HLO)")}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{t("Official portal for House Listing Operations — citizens can self-enumerate their household details for Census 2027.")}</p>
              <div style={{ marginTop: '18px', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', color: '#0891b2', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {t("VISIT PORTAL")} <span>↗</span>
              </div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', backgroundColor: '#0891b2', opacity: 0.08, borderRadius: '50%' }}></div>
            </a>

            {/* Card 5 – Gazette Notifications (two sub-links) */}
            <div className="premium-card" style={{ display: 'flex', flexDirection: 'column', padding: '35px 30px', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px', opacity: 0.85 }}>📰</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--primary-color)' }}>{t("Gazette Notifications")}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px', flex: 1 }}>{t("Official gazette notifications issued by the Government of Tripura and by the ORGI.")}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', borderRadius: '6px',
                  backgroundColor: '#eff6ff', color: '#1d4ed8',
                  fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none',
                  border: '1px solid #bfdbfe', transition: 'background 0.2s'
                }}>
                  <span>📄</span> {t("Tripura Gazette")}
                </a>
                <a href="https://censusindia.gov.in/census.website/data/CGAZ" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px', borderRadius: '6px',
                  backgroundColor: '#fdf4ff', color: '#7c3aed',
                  fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none',
                  border: '1px solid #e9d5ff', transition: 'background 0.2s'
                }}>
                  <span>📄</span> {t("ORGI Gazette")} ↗
                </a>
              </div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', backgroundColor: '#2563eb', opacity: 0.08, borderRadius: '50%' }}></div>
            </div>

            {/* Card 6 – Medical Certification of Cause of Death */}
            <a href="https://censusindia.gov.in/census.website/node/381" target="_blank" rel="noopener noreferrer" className="premium-card" style={{ display: 'flex', flexDirection: 'column', padding: '35px 30px', textAlign: 'left', position: 'relative', overflow: 'hidden', textDecoration: 'none' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '18px', opacity: 0.85 }}>🏥</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--primary-color)' }}>{t("Medical Certification of Cause of Death")}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{t("Official portal for MCCD — recording and reporting causes of death through registered medical practitioners.")}</p>
              <div style={{ marginTop: '18px', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', color: '#db2777', display: 'flex', alignItems: 'center', gap: '6px' }}>
                {t("VISIT PORTAL")} <span>↗</span>
              </div>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', backgroundColor: '#db2777', opacity: 0.08, borderRadius: '50%' }}></div>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
