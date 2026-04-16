"use client";

import dynamic from 'next/dynamic';

const TripuraInteractiveMap = dynamic(
  () => import('./TripuraInteractiveMap'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        height: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eef7fa',
        borderRadius: '8px',
        fontSize: '1.1rem',
        color: '#0a3d62'
      }}>
        ⏳ Loading Tripura District Map...
      </div>
    )
  }
);

export default function MapsClientWrapper() {
  return (
    <div style={{ marginTop: '30px', backgroundColor: 'white', padding: '20px', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <TripuraInteractiveMap />
    </div>
  );
}
