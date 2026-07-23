"use client";

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function WhoIsWhoPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '85vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे बारे में' : 'About Us'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'कौन कौन है (प्रशासनिक पदानुक्रम)' : 'Who is Who (Key Administration)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 16px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 800 }}>
              {isHi ? 'अधिकारी पदानुक्रम' : 'Hierarchy of Key Officers'}
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', margin: '15px auto 0' }}></div>
          </div>
          
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            minHeight: '900px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            padding: '20px',
            overflowX: 'auto',
            overflowY: 'auto'
          }}>
            <div style={{ position: 'relative', width: '100%', minWidth: '1000px', height: '1100px' }}>
              <Image 
                src="/Who is who.jpeg" 
                alt="Who is Who - Key Administration Hierarchy Chart" 
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
