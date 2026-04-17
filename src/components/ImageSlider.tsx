"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/tripura_palace_banner.png', alt: 'Ujjayanta Palace, Tripura' },
  { src: '/tripura_sundari_real.jpg', alt: 'Tripura Sundari Temple' },
  { src: '/tripura_neermahal_real.jpg', alt: 'Neermahal Water Palace' },
  { src: '/Unakoti-rocks-Tripura-2.png', alt: 'Unakoti Rock Carvings' }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
      {images.map((image, index) => (
        <div 
          key={image.src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <Image 
            src={image.src} 
            alt={image.alt} 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center center', filter: 'brightness(0.72)' }} 
            priority={index === 0}
          />
        </div>
      ))}
      {/* Slider Indicators */}
      <div style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '10px', zIndex: 2 }}>
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px', height: '12px', borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.4)',
              border: 'none', cursor: 'pointer', transition: 'background-color 0.3s'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
