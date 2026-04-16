import Image from 'next/image';

export default function MessagePage() {
  return (
    <div className="container" style={{ padding: '60px 24px', minHeight: '60vh' }}>
      <div className="premium-card" style={{ padding: '50px', maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ 
            width: '180px', 
            height: '180px', 
            borderRadius: '50%', 
            backgroundColor: '#fff', 
            overflow: 'hidden',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            position: 'relative',
            border: '5px solid white',
            margin: '0 auto'
          }}>
            <Image src="/ratan_biswas.jpg" alt="Director Ratan Biswas" fill style={{ objectFit: 'cover' }} />
          </div>
          {/* Badge under photo */}
          <div style={{ 
            marginTop: '20px', 
            padding: '12px 20px', 
            borderRadius: '8px', 
            textAlign: 'center', 
            width: '100%', 
            maxWidth: '220px', 
            background: '#f8fafc',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', margin: '0 0 4px', fontWeight: 700 }}>Shri Ratan Biswas, IAS</h3>
            <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0, fontWeight: 600, letterSpacing: '0.02em' }}>Director, DCO Tripura</p>
          </div>
        </div>
        
        <div style={{ flex: '2 1 500px' }}>
          <h4 style={{ color: 'var(--secondary-color)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '15px' }}>Director's Message</h4>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', lineHeight: 1.2, marginBottom: '25px' }}>Committed to Quality & Accurate Census Data</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', marginBottom: '25px' }}></div>
          
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
            Welcome to the official portal for Tripura's Census operations. We believe that accurate statistics are the bedrock of effective public policy and state planning. 
          </p>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#475569' }}>
            As we move toward the 2027 operations, our team is dedicated to digital transparency and excellence. We invite citizens and researchers to explore our digital repositories of Tripura's rich demographic legacy.
          </p>
        </div>
      </div>
    </div>
  );
}
