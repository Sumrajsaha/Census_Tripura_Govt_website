export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '80vh', backgroundColor: '#f4f6f9' }}>
      <aside style={{ width: '250px', backgroundColor: 'var(--primary-color)', color: 'white', padding: '20px', borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}>
        <h2 style={{ borderBottom: '1px solid #444', paddingBottom: '10px' }}>Admin Panel</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
          <li style={{ marginBottom: '15px' }}><a href="/admin" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a></li>
          <li style={{ marginBottom: '15px' }}><a href="/admin/news" style={{ color: '#ccc', textDecoration: 'none' }}>Manage News</a></li>
          <li style={{ marginBottom: '15px' }}><a href="/admin/data" style={{ color: '#ccc', textDecoration: 'none' }}>Census Data</a></li>
          <li style={{ marginTop: '50px' }}><a href="/" style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>&larr; Public View</a></li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        {children}
      </main>
    </div>
  )
}
