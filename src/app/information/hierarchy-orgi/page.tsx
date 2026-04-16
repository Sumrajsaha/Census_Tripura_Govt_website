export const metadata = {
  title: 'Census Hierarchy in the State – ORGI | DCO Tripura',
  description: 'Census Hierarchy in the State of Tripura under the Office of the Registrar General of India (ORGI).',
}

export default function HierarchyORGI() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
        Census Hierarchy in the State
      </h1>
      <p style={{ marginTop: '8px', color: '#555', fontStyle: 'italic' }}>
        Under the Office of the Registrar General &amp; Census Commissioner of India (ORGI)
      </p>

      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>

        {/* Org Hierarchy Tree */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>

          {/* Level 1 */}
          <HierarchyBox
            title="Registrar General &amp; Census Commissioner of India"
            subtitle="Office of the Registrar General of India (ORGI), Ministry of Home Affairs"
            color="var(--primary-color)"
            textColor="#fff"
          />
          <Connector />

          {/* Level 2 */}
          <HierarchyBox
            title="Deputy Registrar General / Joint Registrar General"
            subtitle="ORGI Headquarters, New Delhi"
            color="var(--secondary-color)"
            textColor="#fff"
          />
          <Connector />

          {/* Level 3 */}
          <HierarchyBox
            title="Director of Census Operations"
            subtitle="State-level Head – Directorate of Census Operations, Tripura"
            color="#1e40af"
            textColor="#fff"
          />
          <Connector />

          {/* Level 4 */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <HierarchyBox
              title="Deputy Director of Census Operations"
              subtitle="State Office, Agartala"
              color="#0f766e"
              textColor="#fff"
              small
            />
            <HierarchyBox
              title="Assistant Director / Statistical Officer"
              subtitle="State Office, Agartala"
              color="#0f766e"
              textColor="#fff"
              small
            />
          </div>
          <Connector />

          {/* Level 5 */}
          <HierarchyBox
            title="District Census Officer (DCO)"
            subtitle="District Collectorate / District level"
            color="#7e22ce"
            textColor="#fff"
          />
          <Connector />

          {/* Level 6 */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <HierarchyBox
              title="Charge Officer / Tehsildar"
              subtitle="Sub-district / Tehsil level"
              color="#b45309"
              textColor="#fff"
              small
            />
            <HierarchyBox
              title="Enumerator / Investigator"
              subtitle="Village / Block level"
              color="#b45309"
              textColor="#fff"
              small
            />
          </div>

        </div>

        <div style={{ marginTop: '40px', padding: '16px 20px', backgroundColor: '#f8f9fa', borderLeft: '4px solid var(--primary-color)', borderRadius: '4px' }}>
          <strong>Note:</strong> The above hierarchy represents the administrative chain of command under ORGI for the conduct of the decennial Population Census in the State of Tripura.
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
      <div style={{ fontWeight: 700, fontSize: small ? '0.95rem' : '1.05rem' }} dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <div style={{ marginTop: '4px', fontSize: '0.82rem', opacity: 0.88 }}>{subtitle}</div>}
    </div>
  )
}

function Connector() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0' }}>
      <div style={{ width: '2px', height: '28px', backgroundColor: '#94a3b8' }} />
      <div style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '10px solid #94a3b8' }} />
    </div>
  )
}
