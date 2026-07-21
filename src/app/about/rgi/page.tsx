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
                src="/Mrutunjay.png"
                alt="Shri Mritunjay Kumar Narayan"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
              {isHi ? 'महारजिस्ट्रार का परिचय' : 'Meet the Registrar General & Census Commissioner'}
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary-color)', marginBottom: '25px' }}></div>

            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#334155', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {isHi ? (
                <>
                  <p>श्री मृत्युंजय कुमार नारायण ने 1 नवंबर, 2022 से भारत के महारजिस्ट्रार एवं जनगणना आयुक्त के रूप में कार्यभार ग्रहण किया। भारत के महारजिस्ट्रार के कार्यालय में कार्यभार ग्रहण करने से पूर्व वे गृह मंत्रालय में अपर सचिव थे। गृह मंत्रालय में अपर सचिव के रूप में पदोन्नति से पूर्व, वे वर्ष 2019-2021 में विद्युत मंत्रालय में संयुक्त सचिव थे।</p>
                  <p>श्री नारायण उत्तर प्रदेश कैडर के 1995 बैच के भारतीय प्रशासनिक सेवा अधिकारी हैं। 25 से अधिक वर्षों के करियर में, उन्होंने उत्तर प्रदेश राज्य सरकार और भारत सरकार में विभिन्न भूमिकाओं और पदों पर विशिष्टता के साथ कार्य किया है। उन्हें लोक प्रशासन, नीति निर्माण, कराधान, स्वास्थ्य, कानून और व्यवस्था, आंतरिक सुरक्षा, पुलिसिंग और संबंधित क्षेत्रों में व्यापक अनुभव है।</p>
                  <p>श्री नारायण ने आईआईटी कानपुर से इलेक्ट्रिकल इंजीनियरिंग में बी.टेक और एम.टेक, किंग्स कॉलेज लंदन से लोक नीति और प्रबंधन में एमएससी और लखनऊ विश्वविद्यालय से एलएलबी की डिग्री प्राप्त की है।</p>
                </>
              ) : (
                <>
                  <p>
                    Shri Mritunjay Kumar Narayan assumed the charge as Registrar General & Census Commissioner of India w.e.f. November 1, 2022. He has been Additional Secretary in the Ministry of Home Affairs before joining the office of Registrar General of India. Before his elevation as Additional Secretary in MHA, he was Joint Secretary in the Ministry of Power in the year 2019-2021.
                  </p>
                  <p>
                    Mr Narayan is 1995 batch Indian Administrative Service officer of Uttar Pradesh Cadre. In the career spanning more than 25 years, he has served with distinction in various roles and positions in the State Government of Uttar Pradesh and also in the Government of India. He has wide experience in Public Administration, Policy Making, Taxation, Health, Law & Order, Internal Security, Policing and related fields.
                  </p>
                  <p>
                    Mr Narayan holds the degree of B.Tech and M.Tech in Electrical Engineering from IIT Kanpur, M.Sc. in Public Policy & Management from King's College London and LL.B from Lucknow University.
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
