export const metadata = {
  title: 'Organization Chart | DCO Tripura',
  description: 'Official organizational chart of the Directorate of Census Operations, Tripura',
};

export default function OrgChartPage() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '70vh', paddingBottom: '60px' }}>

      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            About Us
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            Organization Chart
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: '10px 0 0', fontSize: '1rem' }}>
            Directorate of Census Operations — Official Structural Hierarchy
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>

        {/* Chart Image Card */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          padding: '40px',
          textAlign: 'center',
        }}>
          <img
            src="https://censusindia.gov.in/census.website/sites/default/files/2026-01/Latest%20Organization%20Chart_Eng.png"
            alt="Organization Chart – Directorate of Census Operations"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
          />

          {/* Download link */}
          <div style={{ marginTop: '24px' }}>
            <a
              href="https://censusindia.gov.in/census.website/sites/default/files/2026-01/Latest%20Organization%20Chart_Eng.png"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                backgroundColor: 'var(--primary-color)',
                color: '#fff',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.88rem',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              View / Download Full Chart ↗
            </a>
          </div>
        </div>

        <p style={{ marginTop: '16px', fontSize: '0.82rem', color: '#94a3b8', textAlign: 'center' }}>
          Source: Office of the Registrar General & Census Commissioner, India (censusindia.gov.in)
        </p>

      </div>
    </div>
  );
}
