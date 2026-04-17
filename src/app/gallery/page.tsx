import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = [
    { src: '/G-1.jpeg', alt: 'Field Operations 1' },
    { src: '/G-2.jpeg', alt: 'Field Operations 2' },
  ];

  return (
    <div className="container" style={{ padding: '60px 24px', minHeight: '60vh' }}>
      <div className="premium-card" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Photo Gallery</h1>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '0 auto 30px' }}></div>
        <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: '1.8' }}>
          Photographic archives covering field operations, high-level meetings, and civic engagements.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className="premium-card" 
            style={{ 
              overflow: 'hidden', 
              height: '300px', 
              position: 'relative',
              borderRadius: '12px'
            }}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
