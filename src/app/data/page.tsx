export const metadata = {
  title: 'Data & Resources | DCO Tripura',
  description: 'Census data, district handbooks, digital library and map publications for Tripura',
}

export default function DataPage() {
  const resources = [
    {
      id: 1,
      title: 'Primary Census Abstract 2011 – All',
      description: 'Comprehensive primary census abstract data for all districts, towns, and villages. Covers demographic indicators including population, literacy, sex ratio, and household details from Census 2011.',
      link: 'https://censusindia.gov.in/census.website/data/census-tables',
      external: true,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      tag: 'Census 2011',
      tagColor: '#1d4ed8',
      available: true,
    },
    {
      id: 2,
      title: 'District Census Handbook – 2011',
      description: 'Village and town-wise primary census data for all districts of India. The District Census Handbooks contain detailed administrative and demographic statistics from Census 2011.',
      link: 'https://censusindia.gov.in/census.website/data/handbooks',
      external: true,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      tag: 'Handbook',
      tagColor: '#059669',
      available: true,
    },
    {
      id: 3,
      title: 'Census Digital Library',
      description: 'Access the National Data Archive of the Office of the Registrar General & Census Commissioner, India. Contains microdata, documentation, and research tools for census-related studies.',
      link: 'https://censusindia.gov.in/nada/index.php/home',
      external: true,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
      tag: 'Digital Library',
      tagColor: '#7c3aed',
      available: true,
    },
    {
      id: 4,
      title: 'Map Publications',
      description: 'Administrative boundary maps, census village maps, district maps, and other cartographic publications from the Directorate of Census Operations, Tripura. Content will be updated shortly.',
      link: null,
      external: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      ),
      tag: 'Coming Soon',
      tagColor: '#94a3b8',
      available: false,
    },
    {
      id: 5,
      title: 'Population Finder',
      description: 'Find data on your village, sub-district, district (Census 2011)',
      link: 'https://censusindia.gov.in/census.website/data/population-finder',
      external: true,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      tag: 'Population Finder',
      tagColor: '#969405ff',
      available: true,
    },
  ];



  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '70vh', paddingBottom: '60px' }}>

      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Directorate of Census Operations, Tripura
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            Data & Resources
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: '10px 0 0', fontSize: '1rem' }}>
            Access official census publications, handbooks, data tables, and digital library resources.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>

        {/* Resource Cards */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 6px' }}>
            Publications & Resources
          </h2>
          <div style={{ width: '50px', height: '4px', backgroundColor: 'var(--secondary-color)', borderRadius: '2px', marginBottom: '30px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {resources.map((item) => (
            <div key={item.id} style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'box-shadow 0.2s, transform 0.2s',
              opacity: item.available ? 1 : 0.75,
            }}>
              {/* Card top color bar */}
              <div style={{ height: '5px', backgroundColor: item.tagColor }}></div>

              <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Icon + Tag row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '54px', height: '54px', borderRadius: '10px',
                    backgroundColor: `${item.tagColor}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.tagColor, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
                    textTransform: 'uppercase', color: item.tagColor,
                    backgroundColor: `${item.tagColor}15`,
                    padding: '4px 10px', borderRadius: '20px',
                  }}>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-color)', margin: 0, lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                  {item.description}
                </p>

                {/* CTA Button */}
                {item.available && item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '10px 20px', borderRadius: '8px',
                      backgroundColor: item.tagColor, color: '#fff',
                      fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
                      textTransform: 'uppercase', letterSpacing: '0.04em',
                      transition: 'opacity 0.2s', marginTop: '4px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    View Resource
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ) : (
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '10px 20px', borderRadius: '8px',
                    backgroundColor: '#f1f5f9', color: '#94a3b8',
                    fontWeight: 700, fontSize: '0.85rem',
                    textTransform: 'uppercase', letterSpacing: '0.04em',
                    alignSelf: 'flex-start', marginTop: '4px',
                  }}>
                    Content Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  );
}
