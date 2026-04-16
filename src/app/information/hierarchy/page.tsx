export const metadata = {
  title: 'Census Hierarchy in the State | DCO Tripura',
  description: 'Census Hierarchy in the State of Tripura under ORGI and DCO.',
}

const districts = [
  'West Tripura',
  'Sepahijala',
  'Khowai',
  'Gomati',
  'Unakoti',
  'North Tripura',
  'Dhalai',
  'South Tripura',
]

function HierarchyBox({
  title,
  subtitle,
  color,
  textColor,
  small,
}: {
  title: string
  subtitle?: string
  color: string
  textColor: string
  small?: boolean
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        color: textColor,
        borderRadius: '8px',
        padding: small ? '12px 20px' : '16px 32px',
        textAlign: 'center',
        maxWidth: small ? '280px' : '540px',
        width: '100%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
      }}
    >
      <div
        style={{ fontWeight: 700, fontSize: small ? '0.92rem' : '1.02rem' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <div style={{ marginTop: '4px', fontSize: '0.8rem', opacity: 0.88 }}>
          {subtitle}
        </div>
      )}
    </div>
  )
}

function Connector() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '2px', height: '26px', backgroundColor: '#94a3b8' }} />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
          borderTop: '10px solid #94a3b8',
        }}
      />
    </div>
  )
}

function SolidConnector() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '2px', height: '22px', backgroundColor: '#475569' }} />
      <div style={{ width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '9px solid #475569' }} />
    </div>
  )
}

function DashedArrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      <div style={{ width: '40px', borderTop: '2px dashed #94a3b8' }} />
      <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #94a3b8' }} />
    </div>
  )
}

function AdminBox({
  label,
  sub,
  bold,
  primary,
}: {
  label: string
  sub?: string
  bold?: boolean
  primary?: boolean
}) {
  return (
    <div
      style={{
        backgroundColor: primary ? 'var(--primary-color)' : '#dce8f5',
        color: primary ? '#fff' : '#1e293b',
        border: primary ? 'none' : '1px solid #b0c8e0',
        borderRadius: '6px',
        padding: '10px 16px',
        textAlign: 'center',
        width: '100%',
        maxWidth: '300px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      }}
    >
      <div style={{ fontWeight: bold || primary ? 700 : 500, fontSize: '0.88rem' }}>
        {bold && sub ? <><strong>{label}:</strong></> : label}
      </div>
      {sub && (
        <div style={{ fontSize: '0.78rem', marginTop: '3px', opacity: 0.85 }}>
          {bold ? sub : sub}
        </div>
      )}
    </div>
  )
}


function SectionDivider({ label }: { label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        margin: '48px 0 32px',
      }}
    >
      <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--secondary-color)' }} />
      <span
        style={{
          backgroundColor: 'var(--primary-color)',
          color: '#fff',
          padding: '6px 20px',
          borderRadius: '20px',
          fontWeight: 700,
          fontSize: '0.95rem',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--secondary-color)' }} />
    </div>
  )
}

export default function HierarchyPage() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1
        style={{
          color: 'var(--primary-color)',
          borderBottom: '2px solid var(--secondary-color)',
          paddingBottom: '10px',
          display: 'inline-block',
        }}
      >
        Census Hierarchy in the State
      </h1>
      <p style={{ marginTop: '10px', color: '#555' }}>
        The administrative hierarchy for conducting the decennial Population Census in Tripura operates
        at two levels — the Central level under <strong>ORGI</strong> and the District level under the{' '}
        <strong>District Census Officer (DCO)</strong>.
      </p>

      <div
        style={{
          marginTop: '30px',
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        }}
      >
        {/* ─── ORGI Section ─── */}
        <SectionDivider label="ORGI – Office of the Registrar General of India" />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HierarchyBox
            title="Registrar General &amp; Census Commissioner of India"
            subtitle="Ministry of Home Affairs, Government of India"
            color="var(--primary-color)"
            textColor="#fff"
          />
          <Connector />
          <HierarchyBox
            title="Deputy Registrar General / Joint Registrar General"
            subtitle="ORGI Headquarters, New Delhi"
            color="var(--secondary-color)"
            textColor="#fff"
          />
          <Connector />
          <HierarchyBox
            title="Director of Census Operations, Tripura"
            subtitle="State-level Head – Directorate of Census Operations"
            color="#1e40af"
            textColor="#fff"
          />
          <Connector />
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
        </div>

        <div
          style={{
            marginTop: '24px',
            padding: '14px 18px',
            backgroundColor: '#f0fdf4',
            borderLeft: '4px solid #0f766e',
            borderRadius: '4px',
            fontSize: '0.88rem',
            color: '#1e293b',
          }}
        >
          <strong>ORGI</strong> is the apex authority overseeing all census-related operations across
          India. The Director of Census Operations is the State-level representative of ORGI, responsible
          for coordinating and supervising census activities in Tripura.
        </div>

        {/* ─── DCO Section ─── */}
        <SectionDivider label="Census – Administrative Setup" />

        <div style={{ textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/census_admin_setup.jpg"
            alt="Census - Administrative Setup diagram showing the hierarchy from Union Home Minister down to Enumerators and Supervisors"
            style={{
              maxWidth: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            }}
          />
          <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#94a3b8' }}>
            Source: Census of India 2021 – Office of the Registrar General &amp; Census Commissioner of India
          </p>
        </div>
      </div>
    </div>
  )
}
