"use client";

import { useLanguage } from '@/context/LanguageContext';
import React from 'react';

export default function RajbhashaPage() {
  const { language } = useLanguage();

  const isHi = language === 'hi';

  return (
    <div className="container" style={{ padding: '50px 20px', minHeight: '60vh' }}>
      <h1
        style={{
          color: 'var(--primary-color)',
          borderBottom: '2px solid var(--secondary-color)',
          paddingBottom: '10px',
          display: 'inline-block',
        }}
      >
        {isHi ? 'राजभाषा अनुभाग' : 'Rajbhasha / Official Language Section'}
      </h1>

      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Intro Section */}
        <section style={card}>
          <p style={para}>
            {isHi 
              ? 'जनगणना कार्य निदेशालय, त्रिपुरा का हिंदी/राजभाषा अनुभाग भारत के संविधान के अनुच्छेद 343 से 351 तक के प्रावधानों, राजभाषा अधिनियम, 1963, राजभाषा नियम, 1976 तथा गृह मंत्रालय, राजभाषा विभाग द्वारा समय-समय पर जारी निर्देशों के अनुरूप कार्य करते हुए कार्यालय में राजभाषा हिंदी के प्रगतिशील प्रयोग को सुनिश्चित करने हेतु निरंतर प्रयासरत है। यह अनुभाग निदेशालय के प्रशासनिक एवं तकनीकी कार्यों में हिंदी के प्रयोग को बढ़ावा देने तथा कर्मचारियों के मध्य राजभाषा संबंधी जागरूकता विकसित करने में महत्वपूर्ण भूमिका निभाता है।'
              : 'The Hindi/Official Language Section of the Directorate of Census Operations, Tripura functions in accordance with the provisions of Articles 343 to 351 of the Constitution of India, the Official Languages Act, 1963, the Official Language Rules, 1976, and the instructions issued from time to time by the Department of Official Language, Ministry of Home Affairs. The Section continuously strives to ensure the progressive use of Official Language Hindi in the office and plays an important role in promoting the use of Hindi in administrative and technical work as well as in creating awareness among employees regarding Official Language policy.'
            }
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            {isHi 
              ? 'राजभाषा अधिनियम की धारा 3(3) के अंतर्गत आने वाले समस्त दस्तावेज, संकल्प, सामान्य आदेश, नियम, अधिसूचनाएँ, प्रशासनिक एवं अन्य प्रतिवेदन, प्रेस विज्ञप्तियाँ, सरकारी पत्राचार, अनुबंध, करार, अनुज्ञप्तियाँ, निविदा सूचनाएँ एवं निविदा प्रपत्र आदि द्विभाषी रूप में जारी किए जाते हैं।'
              : 'All documents covered under Section 3(3) of the Official Languages Act, including resolutions, general orders, rules, notifications, administrative and other reports, press releases, official correspondence, contracts, agreements, licenses, tender notices, and tender forms, are issued bilingually.'
            }
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            {isHi 
              ? 'राजभाषा नियम, 1976 के अंतर्गत हिंदी के प्रयोग की दृष्टि से देश के राज्यों एवं केंद्रशासित प्रदेशों को क्षेत्र ‘A’, ‘B’ एवं ‘C’ में वर्गीकृत किया गया है। त्रिपुरा राज्य क्षेत्र ‘C’ के अंतर्गत आता है। कार्यालय राजभाषा नियमों के अनुरूप हिंदी में प्राप्त पत्रों का उत्तर हिंदी में प्रदान करने तथा कार्यालयीन टिप्पणियों एवं पत्राचार में हिंदी के प्रयोग को बढ़ाने का सतत प्रयास करता है।'
              : 'Under the Official Language Rules, 1976, States and Union Territories have been classified into Regions ‘A’, ‘B’, and ‘C’ for the purpose of implementation of Official Language Hindi. Tripura falls under Region ‘C’. In accordance with the Official Language Rules, replies to communications received in Hindi are furnished in Hindi, and continuous efforts are made to increase the use of Hindi in office noting, drafting, and correspondence.'
            }
          </p>
        </section>

        {/* Major Activities Section */}
        <section style={card}>
          <h2 style={sectionHeading}>
             {isHi ? 'राजभाषा हिंदी के संवर्धन हेतु प्रमुख गतिविधियाँ' : 'Major Activities for Promotion of Official Language Hindi'}
          </h2>
          
          <div style={activitiesContainer}>
            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '1. राजभाषा नीति का अनुपालन' : '1. Implementation of Official Language Policy'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'कार्यालय में राजभाषा नीति एवं सरकारी दिशा-निर्देशों के अनुपालन को सुनिश्चित करना हिंदी अनुभाग का प्रमुख दायित्व है। अनुभाग कार्यालय की विभिन्न शाखाओं के साथ समन्वय स्थापित कर राजभाषा संबंधी कार्यों का मार्गदर्शन एवं निगरानी करता है।'
                  : 'Ensuring compliance with Official Language policy and Government instructions regarding the use of Hindi in office work is the primary responsibility of the Hindi Section. The Section coordinates with various branches of the Directorate and provides guidance on matters related to Official Language implementation.'
                }
              </p>
            </div>
            
            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '2. हिंदी प्रशिक्षण' : '2. Hindi Training'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'अधिकारियों एवं कर्मचारियों को हिंदी का कार्यसाधक ज्ञान प्रदान करने हेतु हिंदी भाषा, हिंदी टंकण एवं आशुलिपि प्रशिक्षण कार्यक्रम पात्रता एवं आवश्यकता के अनुसार आयोजित किए जाते हैं।'
                  : 'Hindi language, Hindi typing, and stenography training programmes are organized for officers and staff, as per eligibility and requirement, to provide working knowledge of Hindi.'
                }
              </p>
            </div>

            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '3. त्रैमासिक बैठकें एवं समीक्षा' : '3. Quarterly Meetings and Review'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'राजभाषा विभाग के निर्देशानुसार निदेशालय में नियमित अंतराल पर विभागीय राजभाषा कार्यान्वयन समिति की बैठकें आयोजित की जाती हैं, जिनमें वार्षिक कार्यक्रम के लक्ष्यों की समीक्षा की जाती है तथा हिंदी कार्यों की प्रगति पर चर्चा कर आवश्यक निर्णय लिए जाते हैं।'
                  : 'Departmental Official Language Implementation Committee meetings are held at regular intervals in accordance with the instructions of the Department of Official Language. Progress towards annual targets is reviewed and necessary decisions are taken to promote the use of Hindi in office work.'
                }
              </p>
            </div>

            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '4. त्रैमासिक प्रगति प्रतिवेदन' : '4. Quarterly Progress Reports'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'निदेशालय के विभिन्न अनुभागों से हिंदी प्रयोग संबंधी आंकड़ों का संकलन कर प्रत्येक तिमाही में प्रगति प्रतिवेदन तैयार किया जाता है तथा सक्षम प्राधिकारी/पोर्टल पर प्रेषित/अपलोड किया जाता है।'
                  : 'Data regarding the use of Hindi in various sections of the Directorate are compiled every quarter, and Quarterly Progress Reports are prepared and submitted/uploaded to the competent authority/portal.'
                }
              </p>
            </div>

            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '5. निरीक्षण एवं मूल्यांकन' : '5. Inspection and Evaluation'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'भारत के महारजिस्ट्रार कार्यालय, नई दिल्ली तथा गृह मंत्रालय, राजभाषा विभाग द्वारा समय-समय पर निदेशालय के हिंदी कार्यों का निरीक्षण किया जाता है। निरीक्षण के दौरान प्राप्त सुझावों एवं टिप्पणियों के आधार पर कमियों को दूर करने हेतु आवश्यक कार्यवाही की जाती है।'
                  : 'Hindi implementation work in the Directorate is inspected from time to time by the Office of the Registrar General, India and the Department of Official Language, Ministry of Home Affairs. Necessary corrective action is taken based on the observations and suggestions made during such inspections.'
                }
              </p>
            </div>

            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '6. हिंदी कार्यशालाएँ' : '6. Hindi Workshops'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'कार्यालयीन कार्यों में हिंदी के प्रयोग को प्रोत्साहित करने तथा कर्मचारियों की कार्यकुशलता बढ़ाने हेतु समय-समय पर हिंदी कार्यशालाओं का आयोजन किया जाता है।'
                  : 'Hindi workshops are organized periodically to improve employees’ proficiency in performing official work in Hindi and to promote greater use of Hindi in day-to-day administration.'
                }
              </p>
            </div>

            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '7. हिंदी पखवाड़ा एवं हिंदी दिवस' : '7. Hindi Pakhwada and Hindi Day'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'प्रत्येक वर्ष 14 सितंबर से 28 सितंबर तक हिंदी पखवाड़ा आयोजित किया जाता है तथा 14 सितंबर को हिंदी दिवस मनाया जाता है। इस अवसर पर हिंदी निबंध, टिप्पण लेखन, प्रश्नोत्तरी, वाद-विवाद, आशुभाषण एवं अन्य प्रतियोगिताओं का आयोजन किया जाता है तथा विजेताओं को पुरस्कृत किया जाता है।'
                  : 'Hindi Pakhwada is organized every year from 14th to 28th September, and Hindi Day is celebrated on 14th September. Various competitions such as essay writing, noting and drafting, quiz, debate, extempore speech, etc. are conducted, and winners are awarded prizes.'
                }
              </p>
            </div>

            <div style={activityItem}>
              <h3 style={activityTitle}>{isHi ? '8. नगर राजभाषा कार्यान्वयन समिति में सहभागिता' : '8. Participation in Town Official Language Implementation Committee'}</h3>
              <p style={activityPara}>
                {isHi 
                  ? 'निदेशालय द्वारा नगर राजभाषा कार्यान्वयन समिति की बैठकों में नियमित सहभागिता सुनिश्चित की जाती है, जिससे विभिन्न केंद्रीय कार्यालयों के मध्य राजभाषा कार्यान्वयन संबंधी अनुभवों का आदान-प्रदान हो सके।'
                  : 'The Directorate regularly participates in meetings of the Town Official Language Implementation Committee to facilitate exchange of best practices and experiences relating to Official Language implementation among Central Government offices.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section style={card}>
          <p style={{...para, fontWeight: 500, color: 'var(--primary-color)' }}>
            {isHi 
              ? 'विगत वर्षों में निदेशालय में राजभाषा हिंदी के प्रयोग में निरंतर वृद्धि हुई है। हिंदी अनुभाग कार्यालय में हिंदी के प्रगतिशील प्रयोग एवं राजभाषा नीति के प्रभावी क्रियान्वयन हेतु सतत प्रयासरत है तथा आशा है कि निकट भविष्य में निदेशालय राजभाषा विभाग द्वारा निर्धारित सभी लक्ष्यों की पूर्ण प्राप्ति करेगा।'
              : 'Over the years, there has been a steady increase in the use of Official Language Hindi in the Directorate. The Hindi/Official Language Section remains committed to the effective implementation of Official Language policy and the progressive use of Hindi in official work, with the objective of achieving all targets prescribed by the Department of Official Language.'
            }
          </p>
        </section>
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '28px 30px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
}

const sectionHeading: React.CSSProperties = {
  color: 'var(--primary-color)',
  fontSize: '1.2rem',
  fontWeight: 700,
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
  marginBottom: '20px',
}

const para: React.CSSProperties = {
  color: '#374151',
  lineHeight: '1.85',
  fontSize: '0.97rem',
}

const activitiesContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}

const activityItem: React.CSSProperties = {
  backgroundColor: '#f8fafc',
  padding: '16px 20px',
  borderRadius: '8px',
  borderLeft: '4px solid var(--primary-color)'
}

const activityTitle: React.CSSProperties = {
  fontSize: '1.05rem',
  fontWeight: 600,
  color: 'var(--primary-color)',
  marginBottom: '8px'
}

const activityPara: React.CSSProperties = {
  ...para,
  fontSize: '0.93rem',
  margin: 0
}
