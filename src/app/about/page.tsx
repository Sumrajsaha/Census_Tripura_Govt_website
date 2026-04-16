export const metadata = {
  title: 'About Us | DCO Tripura',
}

export default function About() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>About Directorate of Census Operations</h1>
      
      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h2>Overview</h2>
        <p style={{ marginTop: '15px' }}>
          The Directorate of Census Operations, Tripura, under the Office of the Registrar General of India, Ministry of Home Affairs, Government of India, is the nodal agency for conducting the decennial population Census in the state of Tripura.
        </p>

        <h2 style={{ marginTop: '40px' }}>Roles & Responsibilities</h2>
        <ul style={{ marginTop: '15px', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>Conducting the decadal Population Census.</li>
          <li>Implementation and monitoring of the Civil Registration System (CRS).</li>
          <li>Sample Registration System (SRS) operations to estimate demographic indicators.</li>
          <li>Preparation and dissemination of demographic data and reports.</li>
          <li>Preparation of District Census Handbooks (DCHB).</li>
        </ul>

        <h2 style={{ marginTop: '40px' }}>Organizational Structure</h2>
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderLeft: '4px solid var(--primary-color)', marginTop: '15px' }}>
          <strong>Director of Census Operations</strong>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Head of the Department at the State Level</p>
        </div>
      </div>
    </div>
  )
}
