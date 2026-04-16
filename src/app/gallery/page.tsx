export default function GalleryPage() {
  return (
    <div className="container" style={{ padding: '60px 24px', minHeight: '60vh' }}>
      <div className="premium-card" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Photo Gallery</h1>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '0 auto 30px' }}></div>
        <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8' }}>
          Photographic archives covering field operations, high-level meetings, and civic engagements.
        </p>
      </div>
    </div>
  );
}
