export const metadata = {
  title: 'Census Hierarchy in the State – DCO | DCO Tripura',
  description: 'Census Hierarchy in the State of Tripura under the District Census Officer (DCO).',
}

export default function HierarchyDCO() {
  const districts = [
    'West Tripura',
    'Sepahijala',
    'Khowai',
    'Gomati',
    'Sipahijala',
    'Unakoti',
    'North Tripura',
    'Dhalai',
  ]

  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
        Census Hierarchy in the State
      </h1>
      <p style={{ marginTop: '8px', color: '#555', fontStyle: 'italic' }}>
        Under the District Census Officer (DCO) – District Level Administration
      </p>

      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>

        {/* Hierarchy Tree */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Level 1 */}
          <HierarchyBox
            title="Director of Census Operations, Tripura"
            subtitle="State Headquarters, Agartala"
            color="var(--primary-color)"
            textColor="#fff"
          />
          <Connector />

          {/* Level 2 */}
          <HierarchyBox
            title="District Census Officer (DCO)"
            subtitle="District Collector / Additional Collector – District Level"
            color="var(--secondary-color)"
            textColor="#fff"
          />
          <Connector />

          {/* Level 3 */}
          <HierarchyBox
            title="Sub-Divisional Officer / Assistant DCO"
            subtitle="Sub-District / Tehsil Level"
            color="#1e40af"
            textColor="#fff"
          />
          <Connector />

          {/* Level 4 */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <HierarchyBox
              title="Charge Officer / Tehsildar"
              subtitle="Revenue Circle / Block Level"
              color="#0f766e"
              textColor="#fff"
              small
            />
            <HierarchyBox
              title="Supervisor"
              subtitle="Supervisory Unit (4–5 Enumerators)"
              color="#0f766e"
              textColor="#fff"
              small
            />
          </div>
          <Connector />

          {/* Level 5 */}
          <HierarchyBox
            title="Enumerator / Investigator"
            subtitle="Village / Urban Block Level – Primary data collection"
            color="#7e22ce"
            textColor="#fff"
          />

        </div>

        {/* District Table */}
        <div style={{ marginTop: '48px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>DCOs – Districts of Tripura</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {districts.map((d, i) => (
              <div key={d} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary-color)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}>
                <span style={{
                  backgroundColor: 'var(--primary-color)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.92rem', color: '#1e293b' }}>{d}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>District Census Officer</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '36px', padding: '16px 20px', backgroundColor: '#f8f9fa', borderLeft: '4px solid var(--primary-color)', borderRadius: '4px' }}>
          <strong>Note:</strong> The District Census Officer is the key field-level functionary responsible for planning, coordination, and supervision of all census operations within the district, under the overall guidance of the Director of Census Operations, Tripura.
        </div>
      </div>
    </div>
  )
}

function HierarchyBox({
  title, subtitle, color, textColor, small,
}: {
  title: string; subtitle?: string; color: string; textColor: string; small?: boolean;
}) {
  return (
    <div style={{
      backgroundColor: color,
      color: textColor,
      borderRadius: '8px',
      padding: small ? '12px 20px' : '16px 32px',
      textAlign: 'center',
      maxWidth: small ? '280px' : '520px',
      width: '100%',
      boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
    }}>
      <div style={{ fontWeight: 700, fontSize: small ? '0.95rem' : '1.05rem' }}>{title}</div>
      {subtitle && <div style={{ marginTop: '4px', fontSize: '0.82rem', opacity: 0.88 }}>{subtitle}</div>}
    </div>
  )
}

function Connector() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '2px', height: '28px', backgroundColor: '#94a3b8' }} />
      <div style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '10px solid #94a3b8' }} />
    </div>
  )
}
