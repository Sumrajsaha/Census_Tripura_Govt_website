export const metadata = {
  title: 'List of Directors | DCO Tripura',
  description: 'Incumbency list of Directors of Census Operations, Tripura.',
}

const directors = [
  { sl: 1, name: 'Shri A. K. Bhattacharjee, IAS', from: '12-02-1970', to: '1975' },
  { sl: 2, name: 'Shri S. R. Chakraborty, IAS', from: '07-04-1979', to: '31-03-1984' },
  { sl: 3, name: 'Shri H. M. Choudhury, IAS', from: '04-12-1989', to: '30-06-1991' },
  { sl: 4, name: 'Shri K. D. Nath, TCS, Gr.-I', from: '05-05-2000', to: '31-05-2005' },
  { sl: 5, name: 'Shri D. Acharjee, IAS', from: '20-11-2009', to: '07-03-2012' },
  { sl: 6, name: 'Dr. P. K. Chakravarty, IAS', from: '31-05-2019', to: '31-05-2022' },
  { sl: 7, name: 'Shri Rabindra Reang, IAS', from: '01-06-2022', to: '31-05-2025' },
  { sl: 8, name: 'Shri Debajyoti Dutta, IAS', from: '01-06-2025', to: '31-12-2025' },
  { sl: 9, name: 'Shri Ratan Biswas, IAS', from: '01-01-2026', to: 'Till Date' },
]

export default function DirectorsPage() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      {/* Heading */}
      <h1
        style={{
          color: 'var(--primary-color)',
          borderBottom: '2px solid var(--secondary-color)',
          paddingBottom: '10px',
          display: 'inline-block',
        }}
      >
        List of Directors
      </h1>
      <p style={{ marginTop: '10px', color: '#555' }}>
        Directors of Census Operations, Tripura — since inception.
      </p>

      {/* Table Card */}
      <div
        style={{
          marginTop: '30px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          overflow: 'hidden',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--primary-color)', color: '#fff' }}>
              <th style={th}>Sl. No.</th>
              <th style={{ ...th, textAlign: 'left' }}>Name of Director</th>
              <th style={th}>From</th>
              <th style={th}>To</th>
            </tr>
          </thead>
          <tbody>
            {directors.map((d, idx) => {
              const isCurrent = d.to === 'Till Date'
              return (
                <tr
                  key={d.sl}
                  style={{
                    backgroundColor: isCurrent
                      ? 'rgba(201,147,53,0.08)'
                      : idx % 2 === 0
                        ? '#fff'
                        : '#f8f9fa',
                    borderBottom: '1px solid #e2e8f0',
                  }}
                >
                  <td style={{ ...td, textAlign: 'center', fontWeight: 700, color: 'var(--primary-color)' }}>
                    {d.sl}
                  </td>
                  <td style={{ ...td }}>
                    <span style={{ fontWeight: isCurrent ? 700 : 600 }}>{d.name}</span>
                    {isCurrent && (
                      <span
                        style={{
                          marginLeft: '10px',
                          fontSize: '0.72rem',
                          backgroundColor: 'var(--secondary-color)',
                          color: '#fff',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontWeight: 700,
                          verticalAlign: 'middle',
                        }}
                      >
                        Current
                      </span>
                    )}
                  </td>
                  <td style={{ ...td, textAlign: 'center', color: '#475569' }}>{d.from}</td>
                  <td
                    style={{
                      ...td,
                      textAlign: 'center',
                      fontWeight: isCurrent ? 700 : 400,
                      color: isCurrent ? 'var(--secondary-color)' : '#475569',
                    }}
                  >
                    {d.to}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>


    </div>
  )
}

const th: React.CSSProperties = {
  padding: '14px 18px',
  fontWeight: 700,
  fontSize: '0.85rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  textAlign: 'center',
}

const td: React.CSSProperties = {
  padding: '14px 18px',
  fontSize: '0.93rem',
}
