"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function GalleryPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi
      ? 'फोटो एवं वीडियो गैलरी | जनगणना कार्य निदेशालय'
      : 'Photo & Video Gallery | DCO Tripura';
  }, [isHi]);

  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const galleryImages = [
    { src: '/G-1.jpeg', altEn: '.', altHi: 'जनगणना फील्ड प्रशिक्षण गतिविधियाँ' },
    { src: '/G-2.jpeg', altEn: '.', altHi: '.' },
    { src: '/G-3.jpeg', altEn: '.', altHi: 'जनगणना कार्य निदेशालय त्रिपुरा क्षेत्रीय सम्मेलन' },
    { src: '/G-4.jpeg', altEn: '.', altHi: 'जनगणना फील्ड प्रशिक्षण गतिविधियाँ' },
  ];

  const galleryVideos = [
    {
      id: '1',
      titleEn: 'Census of India – Jan Kalyan Campaign',
      titleHi: 'भारत की जनगणना – जन कल्याण अभियान',
      thumbnail: '/G-1.jpeg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Standard safe embed placeholder (can be swapped)
    },
    {
      id: '2',
      titleEn: 'Self-Enumeration Tutorial (HLO 2027)',
      titleHi: 'स्व-गणना ट्यूटोरियल (एचएलओ 2027)',
      thumbnail: '/G-2.jpeg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '3',
      titleEn: 'DCO Tripura Pre-Census Prep Meetings',
      titleHi: 'जनगणना कार्य निदेशालय त्रिपुरा पूर्व-जनगणना बैठकें',
      thumbnail: '/G-3.jpeg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
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
            {isHi ? 'फोटो एवं वीडियो गैलरी 2027' : 'Photo & Video Gallery 2027'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>

        {/* Tab Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveTab('photos')}
            style={{
              padding: '12px 30px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'photos' ? 'none' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'photos' ? 'var(--primary-color)' : 'white',
              color: activeTab === 'photos' ? 'white' : '#64748b',
              boxShadow: activeTab === 'photos' ? '0 4px 15px rgba(27,67,50,0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            📸 {isHi ? 'तस्वीरें' : 'Photos'}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            style={{
              padding: '12px 30px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'videos' ? 'none' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'videos' ? 'var(--primary-color)' : 'white',
              color: activeTab === 'videos' ? 'white' : '#64748b',
              boxShadow: activeTab === 'videos' ? '0 4px 15px rgba(27,67,50,0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            🎥 {isHi ? 'वीडियो' : 'Videos'}
          </button>
        </div>

        {/* Photos Grid */}
        {activeTab === 'photos' && (
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
        )}

        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {galleryVideos.map((video) => (
              <div
                key={video.id}
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
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                {/* Thumbnail Container */}
                <div style={{ width: '100%', height: '80%', position: 'relative' }}>
                  <Image
                    src={video.thumbnail}
                    alt={isHi ? video.titleHi : video.titleEn}
                    fill
                    style={{ objectFit: 'cover', opacity: 0.85 }}
                  />
                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.2)'
                  }}>
                    <div style={{
                      width: '60px', height: '60px', borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary-color)">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Title info */}
                <div style={{ padding: '12px 18px', height: '20%', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {isHi ? video.titleHi : video.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

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

      {/* Video Lightbox Modal */}
      {selectedVideo && (
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
          onClick={() => setSelectedVideo(null)}
        >
          <button
            style={{
              position: 'absolute', top: '20px', right: '30px',
              background: 'transparent', border: 'none', color: 'white',
              fontSize: '50px', cursor: 'pointer', zIndex: 10000,
            }}
            onClick={() => setSelectedVideo(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <div style={{ width: '100%', maxWidth: '850px', aspectRatio: '16/9', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="Census Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
}
