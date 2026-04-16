export const metadata = {
  title: 'Contact Us | DCO Tripura',
  description: 'Contact the Directorate of Census Operations, Tripura. Address, phone, email and location map.',
}

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '70vh', paddingBottom: '60px' }}>

      {/* Page Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Directorate of Census Operations, Tripura
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>Contact Us</h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '35px', alignItems: 'start' }}>

          {/* Contact Details Card */}
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            {/* Card Header */}
            <div style={{ backgroundColor: 'var(--primary-color)', padding: '20px 28px', borderBottom: '3px solid var(--secondary-color)' }}>
              <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, margin: 0, letterSpacing: '0.04em' }}>
                Office Details
              </h2>
            </div>

            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* Address */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--primary-color)', margin: '0 0 6px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Address</p>
                  <p style={{ color: '#475569', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                    Directorate of Census Operations, Tripura<br />
                    Ramnagar Lane 1, By Lane-2 (Left Side)<br />
                    Agartala, Tripura – 799002
                  </p>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }}></div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.62 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 5.94 5.94l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--primary-color)', margin: '0 0 6px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Phone</p>
                  <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>0381-2330134 / 2336442</p>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }}></div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fdf4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--primary-color)', margin: '0 0 6px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email</p>
                  <a href="mailto:dco-tri.rgi@censusindia.gov.in" style={{ color: '#7c3aed', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                    dco-tri.rgi@censusindia.gov.in
                  </a>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: '#f1f5f9' }}></div>

              {/* Office Hours */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--primary-color)', margin: '0 0 6px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Office Hours</p>
                  <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Monday – Friday: 9:30 AM – 6:00 PM<br />
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Closed on Government holidays</span>
                  </p>
                </div>
              </div>

              {/* View on Google Maps button */}
              <a
                href="https://maps.app.goo.gl/JgyFLmpE7Grrwngq5"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '12px 20px', borderRadius: '8px',
                  backgroundColor: 'var(--primary-color)', color: '#fff',
                  fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none',
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  marginTop: '4px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                View on Google Maps ↗
              </a>
            </div>
          </div>

          {/* Google Maps iFrame */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0', height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3040505774!2d91.28157!3d23.83396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f17eb0f0a8bf%3A0xe3f4793e3bdcf85f!2sDirectorate%20of%20Census%20Operations%2C%20Tripura!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Directorate of Census Operations, Tripura - Location Map"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
