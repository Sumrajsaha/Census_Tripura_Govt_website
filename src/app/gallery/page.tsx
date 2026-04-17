"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/G-1.jpeg', alt: 'Field Operations 1' },
    { src: '/G-2.jpeg', alt: 'Field Operations 2' },
    { src: '/G-3.jpeg', alt: 'Field Operations 3' },
  ];

  return (
    <div className="container" style={{ padding: '60px 24px', minHeight: '60vh' }}>
      <div className="premium-card" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}>Photo Gallery</h1>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '0 auto 30px' }}></div>
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
              borderRadius: '12px',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '50px',
              cursor: 'pointer',
              zIndex: 10000,
              lineHeight: '1'
            }}
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
          
          <div 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '100%', 
              maxWidth: '1200px', 
              maxHeight: '80vh' 
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage}
              alt="Expanded view"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
