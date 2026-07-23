export const metadata = {
  title: 'Census Hierarchy in the State – DCO | DCO Tripura',
  description: 'Census Hierarchy in the State of Tripura under the District Census Officer (DCO).',
}

export default function HierarchyDCO() {
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
        Directorate of Census Operations — Organizational Hierarchy
      </p>

      <div
        style={{
          marginTop: '30px',
          backgroundColor: 'white',
          padding: '40px 20px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0'
        }}
      >
        {/* Banner Title */}
        <div style={{
          backgroundColor: '#002147',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '1.25rem',
          textAlign: 'center',
          padding: '12px 24px',
          borderRadius: '8px',
          maxWidth: '650px',
          margin: '0 auto 40px auto',
          letterSpacing: '0.05em',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
        }}>
          DIRECTORATE OF CENSUS : ORGANIZATIONAL HIERARCHY
        </div>

        {/* Dynamic Interactive Tree Layout matching the image */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Level 1: Director */}
          <div style={{
            backgroundColor: '#03396c',
            color: '#fff',
            padding: '14px 45px',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '1.15rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#03396c">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            Director
          </div>

          {/* Vertical line down from Director */}
          <div style={{ width: '2px', height: '30px', backgroundColor: '#475569' }}></div>

          {/* Horizontal line spanning 3 officers */}
          <div style={{ position: 'relative', width: '80%', height: '2px', backgroundColor: '#475569' }}>
            {/* Left vertical line to Deputy Registrar General */}
            <div style={{ position: 'absolute', left: '0', top: '0', width: '2px', height: '25px', backgroundColor: '#475569' }}></div>
            {/* Center vertical line to Deputy Director */}
            <div style={{ position: 'absolute', left: '50%', top: '0', width: '2px', height: '25px', backgroundColor: '#475569', transform: 'translateX(-50%)' }}></div>
            {/* Right vertical line to Assistant Director */}
            <div style={{ position: 'absolute', right: '0', top: '0', width: '2px', height: '25px', backgroundColor: '#475569' }}></div>
          </div>

          {/* Level 2 Cards */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '23px', gap: '15px', flexWrap: 'nowrap' }}>
            {/* Deputy Registrar General */}
            <div style={{
              flex: '1',
              backgroundColor: '#e2f0d9',
              border: '2px solid #a9d18e',
              borderRadius: '10px',
              padding: '12px 15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontWeight: 700,
              color: '#1e3a1e',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{ backgroundColor: '#2e7d32', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span style={{ fontSize: '0.95rem', textAlign: 'center' }}>Deputy Registrar General</span>
            </div>

            {/* Deputy Director */}
            <div style={{
              flex: '1',
              backgroundColor: '#e2f0d9',
              border: '2px solid #a9d18e',
              borderRadius: '10px',
              padding: '12px 15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontWeight: 700,
              color: '#1e3a1e',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <div style={{ backgroundColor: '#2e7d32', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span style={{ fontSize: '0.95rem', textAlign: 'center' }}>Deputy Director</span>
            </div>

            {/* Assistant Director Container for Sub-branch */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '100%',
                backgroundColor: '#e2f0d9',
                border: '2px solid #a9d18e',
                borderRadius: '10px',
                padding: '12px 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontWeight: 700,
                color: '#1e3a1e',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                <div style={{ backgroundColor: '#2e7d32', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '0.95rem', textAlign: 'center' }}>Assistant Director</span>
              </div>
            </div>
          </div>

          {/* Sub-branch below Assistant Director */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '0' }}>
            <div style={{ width: '33.33%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* Vertical line down from Assistant Director */}
              <div style={{ width: '2px', height: '25px', backgroundColor: '#475569' }}></div>

              {/* Horizontal line spanning 3 sub-roles */}
              <div style={{ position: 'relative', width: '240%', height: '2px', backgroundColor: '#475569', right: '70%' }}>
                {/* Left vertical line to Senior Geographer */}
                <div style={{ position: 'absolute', left: '0', top: '0', width: '2px', height: '25px', backgroundColor: '#475569' }}></div>
                {/* Center vertical line to Office Superintendent */}
                <div style={{ position: 'absolute', left: '50%', top: '0', width: '2px', height: '25px', backgroundColor: '#475569', transform: 'translateX(-50%)' }}></div>
                {/* Right vertical line to Statistical Investigator-I */}
                <div style={{ position: 'absolute', right: '0', top: '0', width: '2px', height: '25px', backgroundColor: '#475569' }}></div>
              </div>

              {/* Level 3 Yellow Cards */}
              <div style={{ position: 'relative', width: '260%', display: 'flex', justifyContent: 'space-between', marginTop: '23px', right: '80%' }}>
                
                {/* Senior Geographer */}
                <div style={{
                  width: '31%',
                  backgroundColor: '#fff2cc',
                  border: '2px solid #ffd966',
                  borderRadius: '10px',
                  padding: '12px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  color: '#7f6000',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ backgroundColor: '#b45f06', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.88rem', textAlign: 'center' }}>Senior Geographer</span>
                </div>

                {/* Office Superintendent */}
                <div style={{
                  width: '31%',
                  backgroundColor: '#fff2cc',
                  border: '2px solid #ffd966',
                  borderRadius: '10px',
                  padding: '12px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  color: '#7f6000',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ backgroundColor: '#b45f06', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.88rem', textAlign: 'center' }}>Office Superintendent</span>
                </div>

                {/* Statistical Investigator-I & lower chain container */}
                <div style={{ width: '31%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '100%',
                    backgroundColor: '#fff2cc',
                    border: '2px solid #ffd966',
                    borderRadius: '10px',
                    padding: '12px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    color: '#7f6000',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ backgroundColor: '#b45f06', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.88rem', textAlign: 'center' }}>Statistical Investigator-I</span>
                  </div>

                  {/* Vertical line down to Statistical Investigator-II */}
                  <div style={{ width: '2px', height: '25px', backgroundColor: '#475569' }}></div>

                  {/* Level 4 Pink Card: Statistical Investigator-II */}
                  <div style={{
                    width: '100%',
                    backgroundColor: '#fce4d6',
                    border: '2px solid #f4b183',
                    borderRadius: '10px',
                    padding: '12px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    color: '#843c0c',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ backgroundColor: '#c55a11', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.88rem', textAlign: 'center' }}>Statistical Investigator-II</span>
                  </div>

                  {/* Vertical line down to MTS */}
                  <div style={{ width: '2px', height: '25px', backgroundColor: '#475569' }}></div>

                  {/* Level 5 Purple Card: Multi-Tasking Staff (MTS) */}
                  <div style={{
                    width: '100%',
                    backgroundColor: '#e7e6e6',
                    border: '2px solid #b4c6e7',
                    borderRadius: '10px',
                    padding: '12px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    color: '#203764',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ backgroundColor: '#305496', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.88rem', textAlign: 'center' }}>Multi-Tasking Staff (MTS)</span>
                  </div>

                  {/* Vertical line down to Canteen Attendant */}
                  <div style={{ width: '2px', height: '25px', backgroundColor: '#475569' }}></div>

                  {/* Level 6 Light Blue Card: Canteen Attendant */}
                  <div style={{
                    width: '100%',
                    backgroundColor: '#deebf7',
                    border: '2px solid #9cc2e5',
                    borderRadius: '10px',
                    padding: '12px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    color: '#1f4e78',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ backgroundColor: '#2f5597', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.88rem', textAlign: 'center' }}>Canteen Attendant</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

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
