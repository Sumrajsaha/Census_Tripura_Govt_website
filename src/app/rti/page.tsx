export default function RTIPage() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '70vh', padding: '60px 0' }}>
      <div className="container" style={{ padding: '0 24px', maxWidth: '900px', margin: '0 auto' }}>

        {/* Page Title Banner */}
        <div style={{
          backgroundColor: 'var(--primary-color)',
          borderRadius: '12px',
          padding: '30px 40px',
          marginBottom: '40px',
          borderLeft: '6px solid var(--secondary-color)',
        }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Directorate of Census Operations, Tripura
          </p>
          <h1 style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
            Right to Information (RTI)
          </h1>
        </div>

        {/* RTI Content Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
        }}>
          {/* Section header */}
          <div style={{
            padding: '20px 40px',
            borderBottom: '1px solid #e2e8f0',
            backgroundColor: '#f8fafc',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '8px',
                backgroundColor: 'var(--primary-color)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                About the Act
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div style={{ padding: '40px' }}>
            {/* Heading - clearly larger than paragraph */}
            <h2 style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--primary-color)',
              marginBottom: '10px',
              lineHeight: 1.3,
            }}>
              Right to Information Act, 2005
            </h2>

            {/* Gold underline accent */}
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', borderRadius: '2px', marginBottom: '24px' }}></div>

            {/* Paragraph */}
            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.9',
              color: '#374151',
              margin: 0,
              textAlign: 'justify',
            }}>
              The basic object of the Right to Information Act, 2005 is to empower the citizens, promote transparency
              and accountability in the working of the Government, contain corruption, and make our democracy work for
              the people in real sense. It goes without saying that an informed citizen is better equipped to keep
              necessary vigil on the instruments of governance and make the government more accountable to the governed.
              The Act is a big step towards making the citizens informed about the activities of the Government.
            </p>
          </div>
        </div>

        {/* Placeholder for future RTI disclosures */}
        <div style={{
          marginTop: '30px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '30px 40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>
            Proactive Disclosures
          </h3>
          <div style={{ width: '50px', height: '3px', backgroundColor: 'var(--secondary-color)', marginBottom: '18px' }}></div>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
            Proactive disclosures under Section 4 of the RTI Act, details of the Central Public Information Officer (CPIO),
            and First Appellate Authority (FAA) will be updated here shortly by the Directorate of Census Operations, Tripura.
          </p>
        </div>

      </div>
    </div>
  );
}
