export const metadata = {
  title: 'Civil Registration System (CRS) | DCO Tripura',
  description: 'Overview of the Civil Registration System (CRS) in Tripura — birth, death and still birth registration under the RBD Act, 1969.',
}

export default function CRSPage() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      {/* Page Heading */}
      <h1
        style={{
          color: 'var(--primary-color)',
          borderBottom: '2px solid var(--secondary-color)',
          paddingBottom: '10px',
          display: 'inline-block',
        }}
      >
        Civil Registration System (CRS)
      </h1>

      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Overview Card */}
        <section style={card}>
          <h2 style={sectionHeading}>Overview</h2>
          <p style={para}>
            Civil Registration System (CRS), popularly known as birth and death registration system, is
            the recording of vital events i.e. Birth, Death &amp; Still Birth under the statutory
            provisions on continuous and permanent basis. CRS falls under the Concurrent list of the
            Constitution of India at Sl. No. 30. Vital statistics generated from civil registration
            significantly contribute to the formulation of effective and efficient evidence-based policy
            across multiple sectors.
          </p>
        </section>

        {/* Legal Provisions Card */}
        <section style={card}>
          <h2 style={sectionHeading}>Legal Provisions</h2>
          <p style={para}>
            The registration of birth and death is done under the provisions of a central Act namely{' '}
            <strong>Registration of Births and Deaths (RBD) Act, 1969</strong> and State Rules framed on
            the basis of Model Rules, 1999. This Act was enacted in the year 1969 and was enforced in
            most of the States/UTs from <strong>1st April, 1970</strong> to promote uniformity and
            comparability in the registration of Births and Deaths across the country.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            Under the provisions of RBD Act, 1969, the <strong>registration of birth and death is
            mandatory</strong>. The events of births, still births and deaths are registered at the place
            of occurrence of the event i.e. where the event took place. The normal period of reporting
            the event is <strong>21 days</strong> from its occurrence; however, the event can be
            registered after the normal period under delayed registration provisions of{' '}
            <strong>Section 13 of the RBD Act</strong>.
          </p>
        </section>

        {/* Registration Functionaries Card */}
        <section style={card}>
          <h2 style={sectionHeading}>Registration Functionaries</h2>
          <p style={para}>
            The <strong>Registrar General, India (RGI)</strong> at the Central level coordinates and
            unifies the activities of registration throughout the country and at the same time allowing
            enough scope for the State Governments to evolve an efficient system of registration suited
            to the characteristics of the respective administration and notify rules.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            As per the provisions of the Act, the contemporary system is implemented by State
            Governments/UT Administrations. Accordingly, the State authority{' '}
            <strong>(Chief Registrar)</strong> has been declared as the chief executive authority in the
            respective State for implementing the provisions of this Act, Rules and order framed
            thereunder. Similarly, the <strong>District Registrar</strong> for each district within the
            State is responsible for carrying into execution the provisions of RBD Act and Rules in the
            respective district. At the lowest level, the <strong>Registrars</strong> are responsible
            for registering the events occurred in their area of jurisdiction and for issuing
            certificates of birth and death, as the case may be.
          </p>

          {/* Hierarchy visual */}
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
            {[
              { label: 'Registrar General of India (RGI)', sub: 'Central Level — Coordination & Unification', color: 'var(--primary-color)' },
              { label: 'Chief Registrar', sub: 'State Level — Chief Executive Authority', color: 'var(--secondary-color)' },
              { label: 'District Registrar', sub: 'District Level — Implementation of RBD Act', color: '#1e40af' },
              { label: 'Registrar', sub: 'Local Level — Registration of Events & Issue of Certificates', color: '#0f766e' },
            ].map((level, i, arr) => (
              <div key={level.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div
                  style={{
                    backgroundColor: level.color,
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '14px 28px',
                    textAlign: 'center',
                    maxWidth: '520px',
                    width: '100%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{level.label}</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.88, marginTop: '4px' }}>{level.sub}</div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', height: '24px', backgroundColor: '#94a3b8' }} />
                    <div style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '10px solid #94a3b8' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Facts strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {[
            { label: 'Governing Act', value: 'RBD Act, 1969' },
            { label: 'Enforced From', value: '1st April 1970' },
            { label: 'Reporting Period', value: '21 Days' },
            { label: 'Constitution List', value: 'Concurrent List — Sl. No. 30' },
          ].map(f => (
            <div
              key={f.label}
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '18px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                borderTop: '3px solid var(--secondary-color)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{f.label}</div>
              <div style={{ marginTop: '6px', fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-color)' }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '28px 30px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
}

const sectionHeading: React.CSSProperties = {
  color: 'var(--primary-color)',
  fontSize: '1.2rem',
  fontWeight: 700,
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
  marginBottom: '14px',
}

const para: React.CSSProperties = {
  color: '#374151',
  lineHeight: '1.85',
  fontSize: '0.97rem',
}
