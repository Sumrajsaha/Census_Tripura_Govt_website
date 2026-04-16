export const metadata = {
  title: 'Downloads | DCO Tripura',
}

export default function Downloads() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>Downloads & Formats</h1>
      
      <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '30px', borderRadius: 'var(--border-radius)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h2 style={{ marginBottom: '15px' }}>Important Forms / Guidelines</h2>
        <ul style={{ lineHeight: '2' }}>
          <li>⬇️ <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>House Listing Operations Form - English</a></li>
          <li>⬇️ <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>House Listing Operations Form - Bengali</a></li>
          <li>⬇️ <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Census 2027 Enumerator Instruction Manual (PDF)</a></li>
          <li>⬇️ <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>RTI Application Format</a></li>
        </ul>
      </div>
    </div>
  )
}
