export const metadata = {
  title: 'Admin Dashboard | DCO Tripura',
}

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ color: 'var(--primary-color)' }}>System Overview</h1>
      <p style={{ marginTop: '10px', color: '#666' }}>Welcome to the Directorate of Census Operations Admin Panel.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--secondary-color)' }}>
          <h3>Total News</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)', marginTop: '10px' }}>12</p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', borderLeft: '4px solid var(--primary-color)' }}>
          <h3>Districts Data</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)', marginTop: '10px' }}>8</p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', borderLeft: '4px solid green' }}>
          <h3>System Status</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'green', marginTop: '22px' }}>Online & Secure</p>
        </div>
      </div>

      <div style={{ marginTop: '50px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h2>Recent Activity</h2>
        <ul style={{ marginTop: '15px', paddingLeft: '20px', color: '#444' }}>
          <li style={{ marginBottom: '10px' }}>Updated West Tripura district population numbers (Admin)</li>
          <li style={{ marginBottom: '10px' }}>Uploaded new Tender Document for IT equipment (Editor)</li>
          <li style={{ marginBottom: '10px' }}>Published News: Phase 1 preparatory activities (Admin)</li>
        </ul>
      </div>
    </div>
  )
}
