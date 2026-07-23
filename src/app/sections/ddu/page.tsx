"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const card: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  padding: '35px',
  marginBottom: '24px',
};

const sectionHeading: React.CSSProperties = {
  fontSize: '1.4rem',
  color: 'var(--primary-color)',
  fontWeight: '700',
  marginBottom: '15px',
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
};

const para: React.CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: '#334155',
  margin: '0 0 16px 0',
};

export default function DDUPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'डेटा प्रसार इकाई (डीडीयू) | जनगणना कार्य निदेशालय' 
      : 'Data Dissemination Unit (DDU) | DCO Tripura';
  }, [isHi]);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '75vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे अनुभाग' : 'Our Sections'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'डेटा प्रसार इकाई (डीडीयू)' : 'Data Dissemination Unit (DDU)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'परिचय एवं उद्देश्य' : 'Overview & Mission'}</h2>
            {isHi ? (
              <>
                <p style={para}>भारत के महारजिस्ट्रार कार्यालय, नई दिल्ली में डेटा प्रसार इकाई (डीडीयू) जिला जनगणना पुस्तिका (DCHB) पर डेटा एकत्र करने के लिए क्षेत्र कार्य करने और भारत और विदेशों में डेटा उपयोगकर्ताओं के लिए ORGI के सभी प्रभागों के प्रकाशनों/रिपोर्टों और दशकीय जनगणना के परिणामों के प्रसार के लिए जिम्मेदार है। इनमें सरकारी विभागों, विश्वविद्यालयों, राष्ट्रीय और अंतर्राष्ट्रीय संगठनों, निजी और सार्वजनिक उद्यमों, व्यक्तिगत शोध विद्वानों और अन्य के उपयोगकर्ता शामिल हैं।</p>
                <p style={para}>संयुक्त राष्ट्र के जनसंख्या और आवास जनगणना के सिद्धांतों और सिफारिशों के अनुसार: - 'एक जनगणना तब तक पूरी नहीं मानी जाती है जब तक कि एकत्र की गई जानकारी संभावित उपयोगकर्ताओं को उनकी आवश्यकताओं के अनुरूप उपलब्ध न कराई जाए। जानकारी सामान्य वितरण के लिए प्रकाशित तालिकाओं और रिपोर्टों में शामिल की जा सकती है, सीमित वितरण के लिए अप्रकाशित रूप में तालिकाओं के रूप में उत्पादित की जा सकती है या डेटाबेस में संग्रहीत और अनुरोध पर आपूर्ति की जा सकती है, या ऑनलाइन प्रसारित की जा सकती है।'</p>
                <p style={para}>भारत में उपरोक्त सिफारिशों का उद्देश्य उपलब्ध सभी साधनों का उपयोग करके डेटा उपयोगकर्ताओं की बढ़ती संख्या को जनगणना डेटा प्रसारित करके प्राप्त किया जाता है। इनमें मुद्रित रिपोर्ट और टेबल, सीडी में डेटा और भारत की जनगणना वेबसाइट पर मुफ्त डाउनलोड लिंक के रूप में होस्ट किया गया डेटा शामिल है। इस उद्देश्य के लिए, जनगणना निदेशालयों में डेटा प्रसार इकाइयां (DDU) स्थापित की गई हैं जो प्रसार गतिविधियों के केंद्र के रूप में कार्य करती हैं। त्रिपुरा में जनगणना निदेशालय में स्थापित सूचना केंद्र उपयोगकर्ताओं को जनगणना डेटा उपलब्ध कराता है और सर्वोत्तम उपलब्ध जानकारी प्रदान करने की सुविधा के लिए नोडल बिंदु के रूप में काम करता है।</p>
                <p style={{ ...para, marginBottom: 0 }}>गाँव या वार्ड-इन-टाउन स्तर तक उपलब्ध जनगणना डेटासेट स्थानीय सरकारों और प्रशासनिक अधिकारियों को लोगों के कल्याण के लिए कार्यक्रम विकसित करने में सूचित निर्णय लेने में सुविधा प्रदान करते हैं। कंप्यूटिंग सुविधा और संचार सुविधा की बढ़ती लोकप्रियता के साथ जनगणना डेटा की मांग और उपयोग में काफी वृद्धि हुई है। डीडीयू अनुभाग विविध तरीकों के माध्यम से जनगणना डेटा उपयोगकर्ताओं की बिरादरी के उपयोग के लिए जनगणना और ORG और CCI के तत्वावधान में आयोजित विभिन्न सर्वेक्षणों की प्रक्रिया के दौरान एकत्र की गई जानकारी के प्रसार को शामिल करता है।</p>
              </>
            ) : (
              <>
                <p style={para}>The Data Dissemination Unit in the Office of the Registrar General, New Delhi, India is responsible for conducting the field work for collection of data on District Census Handbook (DCHB) and the dissemination of the publications/reports of all divisions of ORGI and results of decennial Census for use by the fraternity of data users in the country and abroad. They include users from Government Departments, Universities, National and International Organizations, Private and Public Enterprises, Individual Research Scholars and other users.</p>
                <p style={para}>According to the United Nations' Principles and Recommendations for Population and Housing Censuses: - 'A Census will not be completed until the information collected is made available to the potential users in a form tailored to their needs. The information may be included in published tables and reports for general distribution, produced as tables in unpublished form for limited distribution or stored in a database and supplied upon request, or disseminated on-line (in this case it will be available only to connected population)’.</p>
                <p style={para}>The objective of the above Recommendations is achieved in India by disseminating the census data to the ever-growing number of data users using all available modes. These include printed reports and tables, data in CD and as free download link hosted at the Census of India website. For this purpose, Data Dissemination Units (DDU) have been set up in the Census Directorates serving as hubs of dissemination activities. The information hub thus established at the Census Directorate in Tripura make Census data available to the users and works as the Nodal Point to facilitate providing the best available information.</p>
                <p style={{ ...para, marginBottom: 0 }}>The Census Datasets available up to the Village or Ward-in-Town level facilitate local governments and administrative authorities in taking informed decisions in developing programmes for the welfare of the people. With the growing popularity of the computing facility and communication facility the demand and use of census data has increased substantially. The DDU section encompasses dissemination of the information gathered during the process of Census and various surveys conducted under the aegis of ORG & CCI, for use of the fraternity of Census data users through diverse methods.</p>
              </>
            )}
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'डिजिटल पहल और वेब प्रसार' : 'Digital Initiatives & Web Dissemination'}</h2>
            <ul style={{ ...para, paddingLeft: '20px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 0 }}>
              {isHi ? (
                <>
                  <li>वेबसाइट पर डेटा प्रकाशन, साथ ही ORGI और राज्य जनगणना निदेशालयों में विशेष डेटा प्रसार इकाइयाँ 2001 की जनगणना के बाद स्थापित की गई हैं। तब से आधिकारिक वेबसाइट पर प्रकाशन उपलब्ध कराए गए हैं।</li>
                  <li>आधिकारिक वेबसाइट (<a href="https://censusindia.gov.in/census.website/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>https://censusindia.gov.in</a>) जनगणना डेटा तालिकाओं, प्रकाशनों, मानचित्र डेटा उत्पादों के साथ-साथ जनगणना डिजिटल पुरालेख को होस्ट करती है, जिसमें 1871 से जनगणना प्रकाशनों की स्कैन की गई प्रतियां हैं।</li>
                  <li>अनुकूलन योग्य डेटा विज़ुअलाइज़ेशन के साथ बुनियादी जनगणना टेबल, विश्लेषणात्मक रिपोर्ट, डेटा शीट उपलब्ध हैं।</li>
                  <li>विषय विशिष्ट सीडी, पुस्तिकाएं, मानचित्र उत्पाद और विभिन्न प्रचार उत्पाद।</li>
                  <li>योजना में उपयोग के लिए जिला, सीडी ब्लॉक, गांव/कस्बे स्तर पर नवीनतम जनगणना डेटा तक पहुंच। भारत की जनगणना की वेबसाइट समय-समय पर मुफ्त डाउनलोडिंग के लिए उच्च मात्रा में डेटा प्रदान करने के लिए अपडेट की जाती है।</li>
                </>
              ) : (
                <>
                  <li>Data publication on the website, as well as specialised data dissemination Units at ORGI and State Census Directorates have been established succeeding to Census 2001. Publications have been made available on the official website since then.</li>
                  <li>The official website (<a href="https://censusindia.gov.in/census.website/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>https://censusindia.gov.in</a>) hosts the Census data tables, Publications, map data products as well as Census Digital Archive having scanned copies of Census publications since 1871.</li>
                  <li>Basic Census tables, analytical reports, data sheets are available along with customisable data visualisations.</li>
                  <li>Subject specific CDs, Booklets, Map products and different publicity products are available.</li>
                  <li>To access latest Census data at District, CD Block, Village/Town level for use in planning. The website of the Census of India is updated from time to time to provide a higher volume of data for free downloading. The usage of summary data at the country, state, and district levels has been supplied.</li>
                </>
              )}
            </ul>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'डिजिटल आर्काइव और लाइब्रेरी' : 'Digital Archive & Library'}</h2>
            {isHi ? (
              <>
                <p style={para}>कार्यालय के डिजिटल संग्रह में प्रकाशनों की सॉफ्ट प्रतियां हैं जिन्हें डेटा उपयोगकर्ताओं द्वारा डिजिटल रूप से एक्सेस किया जा सकता है। इस उद्देश्य के लिए रीडिंग स्पेस में समर्पित हार्डवेयर उपलब्ध कराया गया है।</p>
                <p style={para}>जनगणना निदेशालयों के साथ-साथ भारत के महारजिस्ट्रार कार्यालय द्वारा अनुरक्षित जनगणना वेबसाइट पर डिजिटल लाइब्रेरी होस्ट की गई है और इसे इस लिंक के माध्यम से एक्सेस किया जा सकता है: <a href="https://censusindia.gov.in/nada/index.php/home" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>https://censusindia.gov.in/nada/index.php/home</a></p>
                <p style={{ ...para, marginBottom: 0 }}>डिजिटल लाइब्रेरी 1991 से 2011 की जनगणना तक प्रकाशित सभी जनगणना तालिकाओं, 1871-72 में पहली आधुनिक जनगणना के बाद से पुरानी जनगणना रिपोर्टों/पुस्तकों/प्रकाशनों की स्कैन की गई छवियों और सॉफ्ट कॉपी प्रारूप में मुफ्त डाउनलोड के लिए अन्य डिजिटल फ़ाइलों को उपलब्ध कराती है।</p>
              </>
            ) : (
              <>
                <p style={para}>The digital archive of the office consists of soft copies of publications which can be accessed digitally by the data users. Dedicated hardware has been made available in reading space for this purpose.</p>
                <p style={para}>The digital library is hosted at the Census Directorates as well as in the Census website, maintained by the Office of the Registrar General, India is accessible through the link: <a href="https://censusindia.gov.in/nada/index.php/home" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>https://censusindia.gov.in/nada/index.php/home</a></p>
                <p style={{ ...para, marginBottom: 0 }}>Digital Library makes available all Census Tables published from 1991 to 2011 Censuses, scanned images of old Census Reports/Books/publications since first modern Census in 1871-72 and other digital files for free download in soft copy format.</p>
              </>
            )}
          </section>

        </div>
      </div>
    </div>
  );
}
