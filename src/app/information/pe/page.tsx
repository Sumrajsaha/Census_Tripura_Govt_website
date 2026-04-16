export const metadata = {
  title: 'Population Enumeration | DCO Tripura',
  description: 'Details and field procedures for phase two: the actual population enumeration across Tripura.',
}

export default function PEPage() {
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
        Population Enumeration
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <section style={card}>
          <p style={para}>
            The fieldwork for the second phase, known as <strong>Population Enumeration</strong>, is generally conducted between 9th February and 28th February. After this, a Revisional Round takes place from 1st to 5th March to update and finalize the data with reference to the fixed census moment, which is 00:00 hours on 1st March. 
          </p>
          <div style={infoBoxAccent}>
            However, in snow-bound regions such as parts of Jammu and Kashmir and Himachal Pradesh, the enumeration is carried out earlier—from 11th to 30th September of the previous year—followed by a Revisional Round from 1st to 5th October.
          </div>
          <p style={{ ...para, marginTop: '14px' }}>
            A key characteristic of this phase is that every individual living within the country’s boundaries is counted, except for a few specific exclusions. Information about each person is recorded separately at a clearly defined reference point in time, known as the reference date. 
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            During this stage, detailed data is gathered on a range of demographic and socio-economic aspects, including age, gender, literacy level, religion, Scheduled Caste/Scheduled Tribe status, disability, languages spoken, work participation, and migration history.
          </p>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Population Enumeration Questionnaire Structure</h2>
          <p style={para}>
            The Population Enumeration schedule features universally canvassed questions grouped into key socio-demographic categories.
          </p>

          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #cbd5e1' }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: '80px', textAlign: 'center' }}>SL No.</th>
                  <th style={thStyle}>Question / Field</th>
                </tr>
              </thead>
              <tbody>
                {/* Category Header */}
                <tr>
                  <td colSpan={2} style={categoryTd}>Personal Details</td>
                </tr>
                {[
                  "Name of the individual",
                  "Relationship with the head of the household",
                  "Gender",
                  "Date of birth and age",
                  "Current marital status",
                  "Age at marriage",
                  "Religion",
                  "SC/ST status",
                  "Disability status",
                  "Mother tongue",
                  "Other languages known",
                  "Literacy status"
                ].map((q, i) => (
                  <tr key={i} style={trStyle(i)}>
                    <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 600 }}>{i + 1}</td>
                    <td style={tdStyle}>{q}</td>
                  </tr>
                ))}

                {/* Category Header */}
                <tr>
                  <td colSpan={2} style={categoryTd}>Educational Information</td>
                </tr>
                {[
                  "Attendance status",
                  "Highest level of education completed"
                ].map((q, i) => (
                  <tr key={i} style={trStyle(i)}>
                    <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 600 }}>{i + 13}</td>
                    <td style={tdStyle}>{q}</td>
                  </tr>
                ))}

                {/* Category Header */}
                <tr>
                  <td colSpan={2} style={categoryTd}>Work &amp; Economic Details</td>
                </tr>
                {[
                  "Did the person work at any time during the last year?",
                  "Type of economic activity",
                  "Occupation",
                  "Nature of industry, trade, or service",
                  "Worker classification",
                  "Non-economic activity",
                  "Seeking or available for employment",
                  "Travel to workplace"
                ].map((q, i) => (
                  <tr key={i} style={trStyle(i)}>
                    <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 600 }}>{i + 15}</td>
                    <td style={tdStyle}>{q}</td>
                  </tr>
                ))}

                {/* Category Header */}
                <tr>
                  <td colSpan={2} style={categoryTd}>Migration Details</td>
                </tr>
                {[
                  "Place of birth",
                  "Previous place of residence",
                  "Reason for migration",
                  "Duration of stay in current place"
                ].map((q, i) => (
                  <tr key={i} style={trStyle(i)}>
                    <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 600 }}>{i + 23}</td>
                    <td style={tdStyle}>{q}</td>
                  </tr>
                ))}

                {/* Category Header */}
                <tr>
                  <td colSpan={2} style={categoryTd}>Fertility Details</td>
                </tr>
                {[
                  "Number of children surviving",
                  "Total children ever born",
                  "Children born alive in the past year"
                ].map((q, i) => (
                  <tr key={i} style={trStyle(i)}>
                    <td style={{ ...tdStyle, textAlign: 'center', fontWeight: 600 }}>{i + 27}</td>
                    <td style={tdStyle}>{q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

const infoBoxAccent: React.CSSProperties = {
  marginTop: '16px',
  padding: '16px 20px',
  backgroundColor: '#f0fdf4',
  borderLeft: '4px solid #22c55e',
  borderRadius: '0 8px 8px 0',
  color: '#14532d',
  fontSize: '0.92rem',
  lineHeight: '1.6',
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
  padding: '12px 16px',
  border: '1px solid #cbd5e1',
  color: '#334155',
  fontSize: '0.95rem',
  lineHeight: '1.5',
  verticalAlign: 'middle'
}

const categoryTd: React.CSSProperties = {
  backgroundColor: '#f1f5f9',
  padding: '10px 16px',
  fontWeight: 700,
  color: 'var(--primary-color)',
  fontSize: '1.05rem',
  border: '1px solid #cbd5e1',
  borderTop: '2px solid #94a3b8'
}

const trStyle = (index: number) => ({
  backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa'
})
