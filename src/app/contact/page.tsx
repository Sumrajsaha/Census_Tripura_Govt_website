export const metadata = {
  title: 'Contact Us | DCO Tripura',
  description: 'Contact the Directorate of Census Operations, Tripura. Address, phone, email and location map.',
}

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '80vh', padding: '60px 0' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Directorate of Census Operations, Tripura
          </p>
          <h1 style={{ color: 'var(--primary-color)', fontSize: '2.8rem', fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            Contact Us
          </h1>
        </div>

        {/* Content Layout */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '40px', 
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
          border: '1px solid #e2e8f0'
        }}>
          
          {/* Image Section - Displays the WHOLE image uncropped */}
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/directorate_building.jpeg" 
              alt="Directorate of Census Operations, Tripura Building" 
              style={{ 
                width: '100%', 
                maxHeight: '700px', 
                objectFit: 'contain', 
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }} 
            />
          </div>

          {/* Contact Details Section */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              {/* Address */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--primary-color)', margin: '0 0 8px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Address</p>
                  <p style={{ color: '#334155', lineHeight: 1.7, margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>
                    Ramnagar Lane 1, By Lane-2 (Left Side)<br />
                    Agartala, Tripura – 799002
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.62 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 5.94 5.94l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--primary-color)', margin: '0 0 8px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Telephone</p>
                  <p style={{ color: '#334155', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>0381-2330134 / 2336442</p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#fdf4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--primary-color)', margin: '0 0 8px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>E-mail</p>
                  <a href="mailto:dco-tri.rgi@censusindia.gov.in" style={{ color: '#1d4ed8', fontWeight: 600, textDecoration: 'none', fontSize: '1.05rem' }}>
                    dco-tri.rgi@censusindia.gov.in
                  </a>
                </div>
              </div>

              {/* Map Button */}
              <a
                href="https://maps.app.goo.gl/JgyFLmpE7Grrwngq5"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '16px 28px', borderRadius: '12px',
                  backgroundColor: 'var(--primary-color)', color: '#fff',
                  fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  marginTop: '12px',
                  boxShadow: '0 6px 15px rgba(30, 58, 138, 0.25)',
                  width: 'fit-content'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                View On Google Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
