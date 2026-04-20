export const metadata = {
  title: 'Tripura Gazette | DCO Tripura',
}

export default function TripuraGazettePage() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '5rem', marginBottom: '20px' }}>📄</div>
      <h1
        style={{
          color: 'var(--primary-color)',
          fontSize: '2rem',
          marginBottom: '12px',
        }}
      >
        Tripura Gazette
      </h1>
      <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', lineHeight: 1.6 }}>
        Detailed information regarding the Tripura gazettes will be updated soon.
      </p>
    </div>
  )
}
