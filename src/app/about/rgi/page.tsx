"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function RGIProfilePage() {
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
            {isHi ? 'भारत के महारजिस्ट्रार एवं जनगणना आयुक्त' : 'Registrar General & Census Commissioner, India'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div className="premium-card" style={{ padding: '50px', maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '50px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Profile Card Left */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              width: '220px',
              height: '270px',
              borderRadius: '16px',
              backgroundColor: '#f1f5f9',
              overflow: 'hidden',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              position: 'relative',
              border: '4px solid white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/emblem.svg" 
                alt="Emblem of India" 
                style={{ width: '80%', height: '80%', objectFit: 'contain', opacity: 0.85 }} 
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
                Shri Mritunjay Kumar Narayan, IAS
              </h3>
              <p style={{ color: 'var(--secondary-color)', fontSize: '0.88rem', margin: '0 0 10px 0', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isHi ? 'महारजिस्ट्रार एवं जनगणना आयुक्त, भारत' : 'Registrar General & Census Commissioner, India'}
              </p>
              <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0, fontWeight: 500 }}>
                Ministry of Home Affairs, Government of India
              </p>
            </div>
          </div>

          {/* Details Section Right */}
          <div style={{ flex: '2 1 500px' }}>
            <h4 style={{ color: 'var(--secondary-color)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '15px' }}>
              {isHi ? 'शीर्ष नेतृत्व' : 'Apex Leadership'}
            </h4>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-color)', lineHeight: 1.25, marginBottom: '20px', fontWeight: 800 }}>
              {isHi ? 'कार्यालय का परिचय और दायित्व' : 'Introduction & Responsibilities of the Office'}
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', marginBottom: '25px' }}></div>

            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#334155', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {isHi ? (
                <>
                  <p>
                    भारत के महारजिस्ट्रार एवं जनगणना आयुक्त (आरजीआई) का पद भारत सरकार के गृह मंत्रालय के अंतर्गत एक अत्यंत महत्वपूर्ण और वरिष्ठ प्रशासनिक पद है। इस गरिमामयी पद का दायित्व देश की जनसांख्यिकीय संरचना का वैज्ञानिक रूप से आंकलन और पंजीकरण प्रणाली को सुदृढ़ बनाना है।
                  </p>
                  <p>
                    <strong>मुख्य जिम्मेदारियां:</strong>
                  </p>
                  <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><strong>दशकीय जनगणना संचालन:</strong> पूरे भारतवर्ष में दस वर्षीय राष्ट्रीय जनसंख्या जनगणना का योजनाबद्ध नियोजन, संचालन और पर्यवेक्षण करना।</li>
                    <li><strong>नागरिक पंजीकरण प्रणाली (CRS):</strong> जन्म और मृत्यु पंजीकरण अधिनियम, 1969 के अंतर्गत देश में जन्म, मृत्यु और मृत जन्म के पंजीकरण कार्यों का समन्वय और एकीकरण करना।</li>
                    <li><strong>नमूना पंजीकरण प्रणाली (SRS):</strong> देश में जन्म दर, मृत्यु दर और शिशु मृत्यु दर के विश्वसनीय वार्षिक अनुमान प्रदान करने हेतु वृहद जनसांख्यिकीय सर्वेक्षण का संचालन सुनिश्चित करना।</li>
                    <li><strong>राष्ट्रीय जनसंख्या रजिस्टर (NPR):</strong> देश के सभी सामान्य निवासियों के व्यापक पहचान डेटाबेस के निर्माण संबंधी कार्यों का पर्यवेक्षण करना।</li>
                  </ul>
                  <p>
                    आरजीआई के मार्गदर्शन में, देश की नीतियां, योजनाएं और सामाजिक-आर्थिक विकास के विभिन्न कार्यक्रमों का निर्धारण करने के लिए अत्यंत सटीक जनसांख्यिकीय आंकड़े उपलब्ध कराए जाते हैं।
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The Office of the Registrar General and Census Commissioner, India (ORGI) was established in 1961 under the Ministry of Home Affairs, Government of India. It provides vital leadership for conducting the decennial population Census and managing demographic surveys across the nation.
                  </p>
                  <p>
                    <strong>Key Responsibilities:</strong>
                  </p>
                  <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li><strong>Decennial Population Census:</strong> Directing and executing the Census of India, which is one of the largest administrative and statistical exercises in the world.</li>
                    <li><strong>Civil Registration System (CRS):</strong> Coordinating birth and death registration throughout the country under the Registration of Births and Deaths (RBD) Act, 1969.</li>
                    <li><strong>Sample Registration System (SRS):</strong> Publishing annual demographic indicators like birth rates, death rates, and infant mortality rates through comprehensive survey systems.</li>
                    <li><strong>National Population Register (NPR):</strong> Supervising the creation and maintenance of the National Population Register containing demographic information of residents.</li>
                  </ul>
                  <p>
                    Under the visionary leadership of the Registrar General of India, the organization strives to ensure the highest standards of data integrity, supporting national planning, evidence-based policy formulation, and research.
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
