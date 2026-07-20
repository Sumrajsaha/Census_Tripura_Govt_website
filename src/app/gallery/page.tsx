"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi
      ? 'फोटो गैलरी | जनगणना कार्य निदेशालय'
      : 'Photo Gallery | DCO Tripura';
  }, [isHi]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/G-1.jpeg', altEn: '.', altHi: '.' },
    { src: '/G-2.jpeg', altEn: '.', altHi: '.' },
    { src: '/G-3.jpeg', altEn: '.', altHi: '.' },
    { src: '/G-4.jpeg', altEn: '.', altHi: '.' },
    { src: '/G-5.jpeg', altEn: '.', altHi: '.' },
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '80vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'गैलरी' : 'Gallery'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'फोटो गैलरी 2027' : 'Photo Gallery 2027'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>

        {/* Photos Grid */}
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
                  height: '280px',
                  position: 'relative',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  backgroundColor: 'white'
                }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div style={{ width: '100%', height: '80%', position: 'relative' }}>
                  <Image
                    src={image.src}
                    alt={isHi ? image.altHi : image.altEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    className="hover-zoom"
                  />
                </div>
                <div style={{ padding: '12px 18px', height: '20%', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {isHi ? image.altHi : image.altEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

      </div>

      {/* Photo Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '40px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            style={{
              position: 'absolute', top: '20px', right: '30px',
              background: 'transparent', border: 'none', color: 'white',
              fontSize: '50px', cursor: 'pointer', zIndex: 10000,
            }}
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <div style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '1000px', maxHeight: '80vh' }}>
            <img src={selectedImage} alt="Expanded view" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      )}

    </div>
  );
}
