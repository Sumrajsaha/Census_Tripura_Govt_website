export const metadata = {
  title: 'House Listing Operations | DCO Tripura',
  description: 'Details and methodologies for phase one: the nationwide House Listing and Housing Census.',
}

export default function HLOPage() {
  return (
    <div className="container" style={{ padding: '50px 20px', minHeight: '60vh' }}>
      <h1
        style={{
          color: 'var(--primary-color)',
          borderBottom: '2px solid var(--secondary-color)',
          paddingBottom: '10px',
          display: 'inline-block',
          marginBottom: '30px'
        }}
      >
        House Listing Operations
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <section style={card}>
          <p style={para}>
            Census activities in India are carried out in two distinct phases: the <strong>Houselisting and Housing Census</strong> and the subsequent <strong>Population Enumeration</strong>. The first phase lays the groundwork for the second by ensuring that all residential and non-residential structures are properly identified and recorded.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The main objective of the Houselisting and Housing Census is to prepare a comprehensive and accurate list of all buildings, houses, and households across the country. This process helps in developing a reliable sampling frame for the Population Enumeration phase. During houselisting, every structure and dwelling unit is carefully identified, and wherever required, they are assigned unique identification numbers. This numbering system makes it easier for enumerators to locate and verify households during the later stage of Census operations.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            For efficient data collection, the entire country is divided into small, clearly defined geographic units known as <strong>Houselisting Blocks</strong>. Each block is assigned to a trained enumerator who is responsible for visiting every structure within the assigned area. This systematic coverage ensures that no household is left out and prevents duplication of data, thereby improving the overall accuracy and reliability of the Census.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            In addition to listing buildings and households, this phase also collects detailed information about housing conditions. This includes data on the materials used for construction (such as floor, walls, and roof), the number of rooms, ownership status, and the usage of the dwelling. Furthermore, important information regarding basic amenities is gathered, such as sources of drinking water, availability of electricity, sanitation facilities, bathing and kitchen arrangements, and the type of fuel used for cooking.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The houselisting phase also captures data on household assets, including ownership of items like radios, televisions, computers, mobile phones, bicycles, and motor vehicles, as well as access to banking services. These indicators help in assessing the standard of living and socio-economic conditions of households.
          </p>
          <div style={infoBox}>
            For the 2011 Census, the Houselisting and Housing Census was conducted between April and September 2010 across all States and Union Territories. A similar exercise was scheduled for the 2021 Census during April to September 2020; however, it was postponed due to disruptions caused by the COVID-19 pandemic.
          </div>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Information Collected During Houselisting</h2>
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Aspect</th>
                  <th style={thStyle}>Information Covered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Type &amp; Condition of House</strong></td>
                  <td style={tdStyle}>Materials used in construction (floor, walls, roof); purpose and usage of the house; ownership details; total number of rooms; number of married couples living in the household</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Basic Facilities</strong></td>
                  <td style={tdStyle}>Source and availability of safe drinking water; type of lighting used; presence of toilet facilities; drainage or wastewater system; availability of bathroom and kitchen; cooking fuel used</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Household Assets &amp; Services</strong></td>
                  <td style={tdStyle}>Ownership of items such as radio, TV, computer/laptop (with or without internet), and mobile/telephone; means of transport like bicycle, scooter, or car; access to banking facilities.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Houselisting &amp; Housing Census Schedule</h2>
          <div style={{ textAlign: 'center', marginTop: '20px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <img 
              src="/houselisting(About census).png" 
              alt="Houselisting and Housing Census Schedule-2021" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
            />
            <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#64748b' }}>
              Sample representation of the Houselisting and Housing Census Schedule Form.
            </p>
          </div>
        </section>

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
  fontSize: '1.3rem',
  fontWeight: 700,
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
  marginBottom: '16px',
}

const para: React.CSSProperties = {
  color: '#374151',
  lineHeight: '1.85',
  fontSize: '0.99rem',
}

const infoBox: React.CSSProperties = {
  marginTop: '20px',
  padding: '16px 20px',
  backgroundColor: '#f1f5f9',
  borderLeft: '4px solid #94a3b8',
  borderRadius: '0 8px 8px 0',
  color: '#334155',
  fontSize: '0.95rem',
  lineHeight: '1.6',
  fontStyle: 'italic'
}

const thStyle: React.CSSProperties = {
  backgroundColor: 'var(--primary-color)',
  color: '#fff',
  padding: '14px 16px',
  textAlign: 'left',
  fontWeight: 600,
  fontSize: '1rem',
  border: '1px solid #cbd5e1'
}

const tdStyle: React.CSSProperties = {
  padding: '16px',
  border: '1px solid #cbd5e1',
  color: '#334155',
  fontSize: '0.95rem',
  lineHeight: '1.6',
  verticalAlign: 'top'
}
