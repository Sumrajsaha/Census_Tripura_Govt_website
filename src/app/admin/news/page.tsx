export default function AdminNews() {
  return (
    <div>
      <h1 style={{ color: 'var(--primary-color)' }}>Manage News & Updates</h1>
      <p style={{ marginTop: '10px', color: '#666' }}>Post new announcements and circulars.</p>
      
      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h2>Create New Update</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px', maxWidth: '600px' }}>
          <input type="text" placeholder="Title" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <textarea placeholder="Content" rows={5} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
          <button type="button" style={{ padding: '10px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Publish</button>
        </form>
      </div>
    </div>
  )
}
