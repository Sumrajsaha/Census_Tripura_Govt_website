export const metadata = {
  title: 'Circulars & Orders | DCO Tripura',
  description: 'Official circulars and orders issued by the Directorate of Census Operations, Tripura for Census 2027.',
}

export default function Circulars() {
  const circulars = [
    {
      num: "Circular No. 1",
      title: "Census 2027 - Circular No. 1",
      date: "2025",
      fileName: "Census Circular No. 1 (2).pdf",
    },
    {
      num: "Circular No. 2",
      title: "Census 2027 - Circular No. 2",
      date: "2025",
      fileName: "Census Circular No. 2 (1).pdf",
    },
    {
      num: "Circular No. 3",
      title: "Census 2027 - Circular No. 3",
      date: "2025",
      fileName: "Census Circular No. 3 (1).pdf",
    },
    {
      num: "Circular No. 4",
      title: "Census 2027 - Circular No. 4",
      date: "2025",
      fileName: "Census 2027 Circular No 4 in English (1).pdf",
    },
    {
      num: "Circular No. 5",
      title: "Census 2027 - Circular No. 5",
      date: "26-Nov-2025",
      fileName: "Circular 5_ Census 2027_26112025_english (1) (2).pdf",
    },
    {
      num: "Circular No. 6",
      title: "Census 2027 - Circular No. 6",
      date: "2025",
      fileName: "Census Circular No 6 English (2).pdf",
    },
    {
      num: "Circular No. 7",
      title: "Census 2027 - Circular No. 7",
      date: "2025",
      fileName: "Census Circular No 7 (1) (2).pdf",
    },
    {
      num: "Circular No. 8",
      title: "Census 2027 - Circular No. 8 (HLO Training)",
      date: "2026",
      fileName: "Census Curcular No 8 English.pdf",
    },
    {
      num: "Circular No. 9",
      title: "Census 2027 - Circular No. 9 (Training for HLO)",
      date: "30-Jan-2026",
      fileName: "Circular 9_Census2027_Training for HLO_30Jan2026_English (2).pdf",
    },
    {
      num: "Circular No. 10",
      title: "Census 2027 - Circular No. 10 (HLB)",
      date: "09-Feb-2026",
      fileName: "Census Circular No 10_HLB_English_090226 (1).pdf",
    },
    {
      num: "Circular No. 11",
      title: "Census 2027 - Circular No. 11",
      date: "2026",
      fileName: "Census Circular No. 11 English (1).pdf",
    },
    {
      num: "Circular No. 12",
      title: "Census 2027 - Circular No. 12",
      date: "2026",
      fileName: "Census Circular No 12 English (1).pdf",
    },
    {
      num: "Circular No. 13",
      title: "Census 2027 - Circular No. 13",
      date: "2026",
      fileName: "CIRCULAR 13.pdf",
    },
    {
      num: "Circular No. 14",
      title: "Census India 2027 - Circular No. 14",
      date: "2026",
      fileName: "Census india-2027 Circular-14 (1).pdf",
    },
    {
      num: "Circular No. 15",
      title: "Census 2027 - Circular No. 15",
      date: "2026",
      fileName: "Census Circular No.15- English .pdf",
    },
    {
      num: "Circular No. 16",
      title: "Census 2027 - Circular No. 16",
      date: "2026",
      fileName: "Census Circular no 16 English (3).pdf",
    },
    {
      num: "Circular No. 17",
      title: "Census 2027 - Circular No. 17",
      date: "2026",
      fileName: "Circular No. 17 English  (1).pdf",
    },
  ];

  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
        Circulars &amp; Office Orders
      </h1>
      <p style={{ marginTop: '10px', color: '#555', fontSize: '0.95em' }}>
        Official circulars issued by the Office of the Registrar General &amp; Census Commissioner, India for Census 2027.
      </p>

      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '0', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflowX: 'auto', overflowY: 'hidden' }}>
        <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
              <th style={{ padding: '15px 20px', width: '60px' }}>S.No.</th>
              <th style={{ padding: '15px 20px', width: '160px' }}>Circular No.</th>
              <th style={{ padding: '15px 20px' }}>Subject</th>
              <th style={{ padding: '15px 20px', width: '110px' }}>Date</th>
              <th style={{ padding: '15px 20px', width: '130px', textAlign: 'center' }}>Download</th>
            </tr>
          </thead>
          <tbody>
            {circulars.map((c, i) => (
              <tr
                key={i}
                className="circular-row"
                style={{
                  borderBottom: '1px solid #eee',
                }}
              >
                <td style={{ padding: '14px 20px', color: '#888', textAlign: 'center' }}>{i + 1}</td>
                <td style={{ padding: '14px 20px', fontWeight: '600', color: 'var(--primary-color)' }}>{c.num}</td>
                <td style={{ padding: '14px 20px' }}>{c.title}</td>
                <td style={{ padding: '14px 20px', color: '#666', whiteSpace: 'nowrap' }}>{c.date}</td>
                <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                  <a
                    href={`/pdfs/circulars/${encodeURIComponent(c.fileName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={c.fileName}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'white',
                      backgroundColor: 'var(--primary-color)',
                      padding: '6px 14px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontSize: '0.85em',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ⬇ PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: '20px', color: '#888', fontSize: '0.85em' }}>
        Total: {circulars.length} circulars listed. Click &quot;PDF&quot; to view or download.
      </p>
    </div>
  )
}
