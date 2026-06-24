"use client";

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function DirectorProfilePage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '85vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे बारे में' : 'About Us'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'निदेशक का परिचय (प्रोफ़ाइल)' : 'Meet the Director (Profile)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div className="premium-card" style={{ padding: '50px', maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Profile Card Left */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '220px',
              height: '240px',
              borderRadius: '16px',
              backgroundColor: '#fff',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              position: 'relative',
              border: '5px solid white'
            }}>
              <Image 
                src="/ratan_biswas.jpg" 
                alt="Director Shri Ratan Biswas, IAS" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            
            <div style={{
              marginTop: '25px',
              padding: '16px 20px',
              borderRadius: '12px',
              textAlign: 'center',
              width: '100%',
              background: '#f8fafc',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', margin: '0 0 6px', fontWeight: 700 }}>
                Shri Ratan Biswas, IAS
              </h3>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.88rem', margin: '0 0 10px 0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isHi ? 'निदेशक' : 'Director'}
              </p>
              <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0, fontWeight: 500 }}>
                {isHi ? 'जनगणना कार्य निदेशालय, त्रिपुरा' : 'Directorate of Census Operations, Tripura'}
              </p>
            </div>
          </div>

          {/* Message and Bio Right */}
          <div style={{ flex: '2 1 500px' }}>
            <h4 style={{ color: 'var(--secondary-color)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '15px' }}>
              {isHi ? 'निदेशक का संदेश' : "Director's Message"}
            </h4>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-color)', lineHeight: 1.25, marginBottom: '20px', fontWeight: 800 }}>
              {isHi ? 'गुणवत्तापूर्ण एवं सटीक जनगणना आंकड़ों के प्रति प्रतिबद्धता' : 'Committed to Quality & Accurate Census Data'}
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', marginBottom: '25px' }}></div>

            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#334155', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {isHi ? (
                <>
                  <p>
                    त्रिपुरा के जनगणना कार्यों के आधिकारिक पोर्टल पर आपका स्वागत है। हम मानते हैं कि सटीक सांख्यिकीय आंकड़े प्रभावी सार्वजनिक नीति और राज्य के समग्र नियोजन की आधारशिला हैं।
                  </p>
                  <p>
                    आगामी जनगणना 2027 के संचालन की दिशा में कदम बढ़ाते हुए, हमारी टीम डिजिटल पारदर्शिता और कार्यकुशलता के उच्चतम मानकों के प्रति समर्पित है। हम नागरिकों, शोधकर्ताओं और नीति निर्माताओं को त्रिपुरा की समृद्ध जनसांख्यिकीय विरासत के डिजिटल खजाने का लाभ उठाने के लिए आमंत्रित करते हैं।
                  </p>
                  <p style={{ marginTop: '20px', fontWeight: '700', color: 'var(--primary-color)' }}>
                    जीवनी (प्रोफ़ाइल):
                  </p>
                  <p>
                    श्री रतन विश्वास, भारतीय प्रशासनिक सेवा (IAS) के एक वरिष्ठ अधिकारी हैं। उन्होंने त्रिपुरा राज्य के विभिन्न महत्वपूर्ण प्रशासनिक विभागों में अनुकरणीय योगदान दिया है। वर्तमान में, वे निदेशक के रूप में निदेशालय का कुशल नेतृत्व कर रहे हैं।
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to the official portal of the Directorate of Census Operations, Tripura. We believe that accurate and transparent statistics are the bedrock of effective public policy, urban development, and social welfare programs in the state.
                  </p>
                  <p>
                    As we gear up for the upcoming Census 2027 operations, our team is deeply committed to ensuring digital excellence, robust monitoring of field activities, and complete transparency. We invite citizens, researchers, and planners to explore our digital repositories of Tripura's demographic legacy.
                  </p>
                  <p style={{ marginTop: '20px', fontWeight: '700', color: 'var(--primary-color)' }}>
                    Biography & Profile:
                  </p>
                  <p>
                    Shri Ratan Biswas, IAS is a senior administrative officer belonging to the Indian Administrative Service. With a distinguished career in public administration across various departments of the state government of Tripura, he oversees the operations and strategic planning of the decennial Census activities and Civil Registration Systems within the state.
                  </p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
