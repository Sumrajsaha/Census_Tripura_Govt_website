export const metadata = {
  title: 'Sample Registration System (SRS) | DCO Tripura',
  description: 'Details about the Sample Registration System (SRS) in Tripura',
};

export default function SRSPage() {
  const tableData = [
    { sl: 1, district: 'West Tripura', rural: 5, urban: 14, total: 19 },
    { sl: 2, district: 'Sepahijala', rural: 8, urban: 1, total: 9 },
    { sl: 3, district: 'Khowai', rural: 7, urban: 0, total: 7 },
    { sl: 4, district: 'Gomati', rural: 8, urban: 3, total: 11 },
    { sl: 5, district: 'South Tripura', rural: 8, urban: 1, total: 9 },
    { sl: 6, district: 'Dhalai', rural: 14, urban: 3, total: 17 },
    { sl: 7, district: 'North Tripura', rural: 5, urban: 1, total: 6 },
    { sl: 8, district: 'Unokoti', rural: 10, urban: 2, total: 12 },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '70vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            Our Sections
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            Sample Registration System (SRS)
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div className="premium-card" style={{ padding: '40px', lineHeight: '1.8', color: '#334155' }}>
          
          <p style={{ marginBottom: '20px' }}>
            The <strong>Sample Registration System (SRS)</strong> is a large-scale demographic survey designed to provide reliable annual estimates of birth rate, death rate, and other fertility and mortality indicators at both the national and sub-national levels. It provides annual estimates of population composition, fertility, mortality, and medical attention at the time of birth or death. This data is instrumental in understanding access to available medical care and planning health interventions.
          </p>

          <p style={{ marginBottom: '20px' }}>
            For a developing state like <strong>Tripura</strong>, the registration of births and deaths is a prime factor for generating accurate statistical data and supporting socioeconomic development. SRS also supports the evaluation of programs such as family planning, immunization, maternal and reproductive health initiatives, and overall health sector planning. Reliable, up-to-date fertility and mortality data is essential for effective policy making at both state and national levels.
          </p>

          <p style={{ marginBottom: '20px' }}>
            SRS, also called a <strong>dual record system</strong>, was developed in India due to the lack of reliable registration of births and deaths. Initially, registration began autonomously in different regions, resulting in incomplete coverage and inconsistent results. To unify civil registration, the <strong>Registration of Births &amp; Deaths Act, 1969</strong> was enacted. The <strong>Office of the Registrar General, India</strong> initiated SRS in 1964–65 on a pilot basis and expanded it nationwide from 1969–70. Since then, SRS has been continuously providing demographic data.
          </p>

          <p style={{ marginBottom: '20px' }}>
            The collection of population data by age and sex is vital for demographers, health administrators, and planners for evaluating developmental and health programs. Classification by rural/urban residence, sex, and marital status provides insights into population composition and supports target-oriented projects.
          </p>

          <p style={{ marginBottom: '20px' }}>
            In Tripura, SRS data is collected and updated through <strong>retrospective half-yearly surveys</strong>, covering the reference periods <strong>January–June</strong> and <strong>July–December</strong> for all household members in the sample units. This ensures current and reliable demographic information at the state level.
          </p>

          <p style={{ marginBottom: '16px' }}>
            SRS in Tripura is conducted through <strong>continuous enumeration of births and deaths</strong> in selected sample villages and urban blocks on a <strong>dual recording basis</strong>:
          </p>
          
          <ul style={{ paddingLeft: '24px', marginBottom: '20px', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Part-Time Enumerator (PTE):</strong> A resident enumerator records births and deaths continuously in their assigned area.
            </li>
            <li>
              <strong>Supervisor:</strong> Conducts an independent six-monthly retrospective survey.
            </li>
          </ul>

          <p style={{ marginBottom: '20px' }}>
            The data from both sources are matched, and unmatched or partially matched events are re-verified in the field. This approach eliminates duplication and provides a quantitative assessment of errors, making SRS a <strong>self-evaluating technique</strong>.
          </p>

          <p style={{ marginBottom: '20px' }}>
            Currently, SRS is operational across <strong>all States and Union Territories</strong>, covering about <strong>8.2 million people</strong> nationwide. In Tripura, there are <strong>90 sample units</strong>, including rural and urban units, covering approximately <strong>1.2 lakh</strong>, with <strong>1.03 lakh</strong> in rural areas and <strong>1.7 lakh</strong> in urban areas. <em style={{ color: '#64748b' }}>(Source: SRS Bulletin, September 2025, reference year 2023)</em>
          </p>

          <p style={{ marginBottom: '40px' }}>
            The demographic scenario in India has undergone significant changes since the inception of the Sample Registration System (SRS). Over the last five decades, key indicators of population and health have shown remarkable improvement. The crude birth rate has declined from 36.9 per 1,000 population in 1971 to 18.4 in 2023, while the crude death rate decreased from 14.9 to 6.4 per 1,000 in the same period. The infant mortality rate (IMR), a critical indicator of health status, has fallen from 129 per 1,000 live births in 1971 to 25 in 2023, and the total fertility rate (TFR) has reduced from 5.2 to 1.4. SRS sampling units are retained for about ten years, making it a panel household survey that allows monitoring changes in vital indicators over time. The steady decline in birth and death rates, as well as in infant mortality, demonstrates the effectiveness of health interventions and the value of SRS data for planning and evaluating developmental and health programs.
          </p>

          {/* Table representing the Image Data */}
          <div style={{ marginTop: '50px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: '25px', textAlign: 'center', fontWeight: '700' }}>
              District-wise SRS Sample Units in Tripura
            </h2>
            
            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', maxWidth: '800px', margin: '0 auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                    <th style={{ padding: '16px', fontWeight: '600', borderRight: '1px solid rgba(255,255,255,0.2)' }}>Sl.No.</th>
                    <th style={{ padding: '16px', fontWeight: '600', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)' }}>District</th>
                    <th style={{ padding: '16px', fontWeight: '600', borderRight: '1px solid rgba(255,255,255,0.2)' }}>Rural</th>
                    <th style={{ padding: '16px', fontWeight: '600', borderRight: '1px solid rgba(255,255,255,0.2)' }}>Urban</th>
                    <th style={{ padding: '16px', fontWeight: '600' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.sl} className="circular-row" style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '14px', borderRight: '1px solid #e2e8f0', color: 'var(--text-muted)' }}>{row.sl}</td>
                      <td style={{ padding: '14px', textAlign: 'left', fontWeight: '500', borderRight: '1px solid #e2e8f0', color: 'var(--text-dark)' }}>{row.district}</td>
                      <td style={{ padding: '14px', borderRight: '1px solid #e2e8f0' }}>{row.rural}</td>
                      <td style={{ padding: '14px', borderRight: '1px solid #e2e8f0' }}>{row.urban}</td>
                      <td style={{ padding: '14px', fontWeight: '600', backgroundColor: 'rgba(0,0,0,0.02)' }}>{row.total}</td>
                    </tr>
                  ))}
                  {/* Total Row */}
                  <tr style={{ backgroundColor: '#f1f5f9', fontWeight: '700', borderTop: '2px solid #cbd5e1' }}>
                    <td colSpan={2} style={{ padding: '16px', textAlign: 'center', borderRight: '1px solid #e2e8f0', color: 'var(--text-dark)' }}>Total</td>
                    <td style={{ padding: '16px', borderRight: '1px solid #e2e8f0', color: 'var(--text-dark)' }}>65</td>
                    <td style={{ padding: '16px', borderRight: '1px solid #e2e8f0', color: 'var(--text-dark)' }}>25</td>
                    <td style={{ padding: '16px', color: 'var(--primary-color)' }}>90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
