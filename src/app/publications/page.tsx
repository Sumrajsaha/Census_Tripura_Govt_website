export const metadata = {
  title: 'Reports & Publications | DCO Tripura',
}

export default function Publications() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>Reports & Publications</h1>
      
      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '30px', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <p style={{ marginTop: '15px' }}>
          Download District Census Handbooks (DCHB), Primary Census Abstracts (PCA), and other analytical reports.
        </p>
        <ul style={{ marginTop: '20px', lineHeight: '2' }}>
          <li>📄 <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Tripura District Census Handbook 2011 - West Tripura</a></li>
          <li>📄 <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>State Primary Census Abstract 2011</a></li>
          <li>📄 <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Annual Report on SRS Data 2022</a></li>
        </ul>
      </div>
    </div>
  )
}
