"use client";

import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const card = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  padding: '35px',
  marginBottom: '24px',
};

const sectionHeading = {
  fontSize: '1.4rem',
  color: 'var(--primary-color)',
  fontWeight: '700',
  marginBottom: '15px',
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
};

const para = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: '#334155',
  margin: 0,
};

export default function SRSPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'नमूना पंजीकरण प्रणाली (एसआरएस) | जनगणना कार्य निदेशालय' 
      : 'Sample Registration System (SRS) | DCO Tripura';
  }, [isHi]);

  const tableData = [
    { sl: 1, districtEn: 'West Tripura', districtHi: 'पश्चिम त्रिपुरा', rural: 5, urban: 14, total: 19 },
    { sl: 2, districtEn: 'Sepahijala', districtHi: 'सेपाहीजला', rural: 8, urban: 1, total: 9 },
    { sl: 3, districtEn: 'Khowai', districtHi: 'खोवाई', rural: 7, urban: 0, total: 7 },
    { sl: 4, districtEn: 'Gomati', districtHi: 'गोमती', rural: 8, urban: 3, total: 11 },
    { sl: 5, districtEn: 'South Tripura', districtHi: 'दक्षिण त्रिपुरा', rural: 8, urban: 1, total: 9 },
    { sl: 6, districtEn: 'Dhalai', districtHi: 'धलाई', rural: 14, urban: 3, total: 17 },
    { sl: 7, districtEn: 'North Tripura', districtHi: 'उत्तर त्रिपुरा', rural: 5, urban: 1, total: 6 },
    { sl: 8, districtEn: 'Unokoti', districtHi: 'उनाकोटि', rural: 10, urban: 2, total: 12 },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '75vh', paddingBottom: '60px' }}>
      {/* Page Title Banner */}
      <div style={{ backgroundColor: 'var(--primary-color)', padding: '40px 0', borderBottom: '4px solid var(--secondary-color)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <p style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
            {isHi ? 'हमारे अनुभाग' : 'Our Sections'}
          </p>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>
            {isHi ? 'नमूना पंजीकरण प्रणाली (एसआरएस)' : 'Sample Registration System (SRS)'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'परिचय एवं महत्व' : 'Overview & Significance'}</h2>
            <p style={para}>
              {isHi ? (
                `नमूना पंजीकरण प्रणाली (एसआरएस) एक बड़े पैमाने पर जनसांख्यिकीय सर्वेक्षण है, जिसे राष्ट्रीय और उप-राष्ट्रीय दोनों स्तरों पर जन्म दर, मृत्यु दर और अन्य प्रजनन और मृत्यु दर संकेतकों के विश्वसनीय वार्षिक अनुमान प्रदान करने के लिए डिज़ाइन किया गया है। यह जनसंख्या संरचना, प्रजनन क्षमता, मृत्यु दर और जन्म या मृत्यु के समय चिकित्सा ध्यान के वार्षिक अनुमान प्रदान करता है। यह डेटा उपलब्ध चिकित्सा देखभाल तक पहुंच को समझने और स्वास्थ्य हस्तक्षेपों की योजना बनाने में सहायक है। त्रिपुरा जैसे विकासशील राज्य के लिए, जन्म और मृत्यु का पंजीकरण सटीक सांख्यिकीय डेटा उत्पन्न करने और सामाजिक-आर्थिक विकास का समर्थन करने के लिए एक प्रमुख कारक है। एसआरएस परिवार नियोजन, टीकाकरण, मातृ और प्रजनन स्वास्थ्य पहल, और समग्र स्वास्थ्य क्षेत्र योजना जैसे कार्यक्रमों के मूल्यांकन का भी समर्थन करता है। राज्य और राष्ट्रीय दोनों स्तरों पर प्रभावी नीति निर्माण के लिए विश्वसनीय, अद्यतन प्रजनन और मृत्यु दर डेटा आवश्यक है।`
              ) : (
                `The Sample Registration System (SRS) is a large-scale demographic survey designed to provide reliable annual estimates of birth rate, death rate, and other fertility and mortality indicators at both the national and sub-national levels. It provides annual estimates of population composition, fertility, mortality, and medical attention at the time of birth or death. This data is instrumental in understanding access to available medical care and planning health interventions. For a developing state like Tripura, the registration of births and deaths is a prime factor for generating accurate statistical data and supporting socioeconomic development. SRS also supports the evaluation of programs such as family planning, immunization, maternal and reproductive health initiatives, and overall health sector planning. Reliable, up-to-date fertility and mortality data is essential for effective policy making at both state and national levels.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'पृष्ठभूमि' : 'Background'}</h2>
            <p style={para}>
              {isHi ? (
                `एसआरएस, जिसे दोहरी रिकॉर्ड प्रणाली भी कहा जाता है, जन्म और मृत्यु के विश्वसनीय पंजीकरण की कमी के कारण भारत में विकसित किया गया था। प्रारंभ में, पंजीकरण विभिन्न क्षेत्रों में स्वायत्त रूप से शुरू हुआ, जिसके परिणामस्वरूप अपूर्ण कवरेज और असंगत परिणाम हुए। नागरिक पंजीकरण को एकीकृत करने के लिए, जन्म और मृत्यु पंजीकरण अधिनियम, 1969 लागू किया गया था। भारत के महापंजीयक कार्यालय ने 1964-65 में पायलट आधार पर एसआरएस शुरू किया और 1969-70 से इसे राष्ट्रव्यापी स्तर पर विस्तारित किया। तब से, एसआरएस लगातार जनसांख्यिकीय डेटा प्रदान कर रहा है। जनसांख्यिकीविदों, स्वास्थ्य प्रशासकों और योजनाकारों के लिए विकासात्मक और स्वास्थ्य कार्यक्रमों के मूल्यांकन के लिए आयु और लिंग के आधार पर जनसंख्या डेटा का संग्रह महत्वपूर्ण है। ग्रामीण/शहरी निवास, लिंग और वैवाहिक स्थिति द्वारा वर्गीकरण जनसंख्या संरचना में अंतर्दृष्टि प्रदान करता है और लक्ष्य-उन्मुख परियोजनाओं का समर्थन करता है।`
              ) : (
                `SRS, also called a dual record system, was developed in India due to the lack of reliable registration of births and deaths. Initially, registration began autonomously in different regions, resulting in incomplete coverage and inconsistent results. To unify civil registration, the Registration of Births & Deaths Act, 1969 was enacted. The Office of the Registrar General, India initiated SRS in 1964–65 on a pilot basis and expanded it nationwide from 1969–70. Since then, SRS has been continuously providing demographic data. The collection of population data by age and sex is vital for demographers, health administrators, and planners for evaluating developmental and health programs. Classification by rural/urban residence, sex, and marital status provides insights into population composition and supports target-oriented projects.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'त्रिपुरा में कार्यप्रणाली' : 'Methodology in Tripura'}</h2>
            <p style={para}>
              {isHi ? (
                `त्रिपुरा में, एसआरएस डेटा नमूना इकाइयों में सभी घरेलू सदस्यों के लिए संदर्भ अवधि जनवरी-जून और जुलाई-दिसंबर को कवर करते हुए पूर्वव्यापी अर्ध-वार्षिक सर्वेक्षणों के माध्यम से एकत्र और अद्यतन किया जाता है। यह राज्य स्तर पर वर्तमान और विश्वसनीय जनसांख्यिकीय जानकारी सुनिश्चित करता है। त्रिपुरा में एसआरएस दोहरे रिकॉर्डिंग आधार पर चयनित नमूना गांवों और शहरी ब्लॉकों में जन्म और मृत्यु की निरंतर गणना के माध्यम से आयोजित किया जाता है: 1. अंशकालिक प्रगणक (PTE): एक निवासी प्रगणक अपने निर्दिष्ट क्षेत्र में लगातार जन्म और मृत्यु दर्ज करता है। 2. पर्यवेक्षक: एक स्वतंत्र छह-मासिक पूर्वव्यापी सर्वेक्षण करता है। दोनों स्रोतों से डेटा का मिलान किया जाता है, और बेजोड़ या आंशिक रूप से मेल खाने वाली घटनाओं को क्षेत्र में फिर से सत्यापित किया जाता है। यह दृष्टिकोण दोहराव को समाप्त करता है और त्रुटियों का मात्रात्मक मूल्यांकन प्रदान करता है, जिससे एसआरएस एक स्व-मूल्यांकन तकनीक बन जाती है। वर्तमान में, एसआरएस सभी राज्यों और केंद्र शासित प्रदेशों में चालू है, जो देश भर में लगभग 8.2 मिलियन लोगों को कवर करता है। त्रिपुरा में, ग्रामीण और शहरी इकाइयों सहित 90 नमूना इकाइयाँ हैं, जो लगभग 1.2 लाख को कवर करती हैं, जिसमें ग्रामीण क्षेत्रों में 1.03 लाख और शहरी क्षेत्रों में 1.7 लाख शामिल हैं। (स्रोत: एसआरएस बुलेटिन, सितंबर 2025, संदर्भ वर्ष 2023)।`
              ) : (
                `In Tripura, SRS data is collected and updated through retrospective half-yearly surveys, covering the reference periods January–June and July–December for all household members in the sample units. This ensures current and reliable demographic information at the state level. SRS in Tripura is conducted through continuous enumeration of births and deaths in selected sample villages and urban blocks on a dual recording basis: 1. Part-Time Enumerator (PTE): A resident enumerator records births and deaths continuously in their assigned area. 2. Supervisor: Conducts an independent six-monthly retrospective survey. The data from both sources are matched, and unmatched or partially matched events are re-verified in the field. This approach eliminates duplication and provides a quantitative assessment of errors, making SRS a self-evaluating technique. Currently, SRS is operational across all States and Union Territories, covering about 8.2 million people nationwide. In Tripura, there are 90 sample units, including rural and urban units, covering approximately 1.2 lakh, with 1.03 lakh in rural areas and 1.7 lakh in urban areas. (Source: SRS Bulletin, September 2025, reference year 2023).`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'जनसांख्यिकीय परिदृश्य' : 'Demographic Scenario'}</h2>
            <p style={para}>
              {isHi ? (
                `नमूना पंजीकरण प्रणाली (एसआरएस) की स्थापना के बाद से भारत में जनसांख्यिकीय परिदृश्य में महत्वपूर्ण बदलाव हुए हैं। पिछले पांच दशकों में, जनसंख्या और स्वास्थ्य के प्रमुख संकेतकों में उल्लेखनीय सुधार दिखा है। अशोधित जन्म दर 1971 में 36.9 प्रति 1,000 जनसंख्या से घटकर 2023 में 18.4 हो गई है, जबकि इसी अवधि में अशोधित मृत्यु दर 14.9 से घटकर 6.4 प्रति 1,000 हो गई है। शिशु मृत्यु दर (IMR), जो स्वास्थ्य स्थिति का एक महत्वपूर्ण संकेतक है, 1971 में 129 प्रति 1,000 जीवित जन्मों से गिरकर 2023 में 25 हो गई है, और कुल प्रजनन दर (TFR) 5.2 से कम होकर 1.4 हो गई है। एसआरएस नमूना इकाइयों को लगभग दस वर्षों तक बनाए रखा जाता है, जिससे यह एक पैनल घरेलू सर्वेक्षण बन जाता है जो समय के साथ महत्वपूर्ण संकेतकों में बदलाव की निगरानी करने की अनुमति देता है। जन्म और मृत्यु दर के साथ-साथ शिशु मृत्यु दर में लगातार गिरावट स्वास्थ्य हस्तक्षेपों की प्रभावशीलता और विकासात्मक और स्वास्थ्य कार्यक्रमों की योजना बनाने और मूल्यांकन करने के लिए एसआरएस डेटा के मूल्य को दर्शाती है।`
              ) : (
                `The demographic scenario in India has undergone significant changes since the inception of the Sample Registration System (SRS). Over the last five decades, key indicators of population and health have shown remarkable improvement. The crude birth rate has declined from 36.9 per 1,000 population in 1971 to 18.4 in 2023, while the crude death rate decreased from 14.9 to 6.4 per 1,000 in the same period. The infant mortality rate (IMR), a critical indicator of health status, has fallen from 129 per 1,000 live births in 1971 to 25 in 2023, and the total fertility rate (TFR) has reduced from 5.2 to 1.4. SRS sampling units are retained for about ten years, making it a panel household survey that allows monitoring changes in vital indicators over time. The steady decline in birth and death rates, as well as in infant mortality, demonstrates the effectiveness of health interventions and the value of SRS data for planning and evaluating developmental and health programs.`
              )}
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'त्रिपुरा के जिला-वार एसआरएस सैंपल यूनिट' : 'District-wise SRS Sample Units in Tripura'}</h2>
            
            <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', backgroundColor: '#fff' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                    <th style={{ padding: '14px' }}>{isHi ? 'क्र.सं.' : 'Sl. No.'}</th>
                    <th style={{ padding: '14px', textAlign: 'left' }}>{isHi ? 'जिला' : 'District'}</th>
                    <th style={{ padding: '14px' }}>{isHi ? 'ग्रामीण' : 'Rural'}</th>
                    <th style={{ padding: '14px' }}>{isHi ? 'शहरी' : 'Urban'}</th>
                    <th style={{ padding: '14px' }}>{isHi ? 'कुल' : 'Total'}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.sl} className="circular-row" style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', color: '#64748b' }}>{row.sl}</td>
                      <td style={{ padding: '12px', textAlign: 'left', fontWeight: 600, color: 'var(--primary-color)' }}>
                        {isHi ? row.districtHi : row.districtEn}
                      </td>
                      <td style={{ padding: '12px' }}>{row.rural}</td>
                      <td style={{ padding: '12px' }}>{row.urban}</td>
                      <td style={{ padding: '12px', fontWeight: 700, backgroundColor: 'rgba(0,0,0,0.01)' }}>{row.total}</td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: '#f1f5f9', fontWeight: '700', borderTop: '2px solid #cbd5e1' }}>
                    <td colSpan={2} style={{ padding: '14px' }}>{isHi ? 'कुल' : 'Total'}</td>
                    <td style={{ padding: '14px' }}>65</td>
                    <td style={{ padding: '14px' }}>25</td>
                    <td style={{ padding: '14px', color: 'var(--primary-color)' }}>90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
