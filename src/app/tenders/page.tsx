export const metadata = {
  title: 'Tenders | DCO Tripura',
}

export default function Tenders() {
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
      <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🚧</div>
      <h1
        style={{
          color: 'var(--primary-color)',
          fontSize: '2rem',
          marginBottom: '12px',
        }}
      >
        Under Construction
      </h1>
      <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '480px' }}>
        The Tenders &amp; Notices page is currently under construction. Please check back soon.
      </p>
    </div>
  )
}
