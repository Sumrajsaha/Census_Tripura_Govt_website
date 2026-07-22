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
  textAlign: 'justify',
};

export default function CensusTabulationPage() {
  const { language } = useLanguage();
  const isHi = language === 'hi';

  useEffect(() => {
    document.title = isHi 
      ? 'जनगणना एवं सारणीकरण | जनगणना कार्य निदेशालय' 
      : 'Census & Tabulation | DCO Tripura';
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
            {isHi ? 'जनगणना और सारणीकरण अनुभाग' : 'Census & Tabulation Section'}
          </h1>
        </div>
      </div>

      <div className="container" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'जनगणना कार्य' : 'Census Operations'}</h2>
            <p style={para}>
              Census Division assists the Registrar General and Census Commissioner, India for timely and successful conduct of Census Operations once in ten years in the country under the legal authority of the Census Act, 1948 and the Census Rules, 1990 and amendments made thereunder. The Directors of Census operations co-ordinate the work of census taking in the respective States/Union Territories. The last decennial population Census of India was conducted during 9th–28th February 2011 with a revisional round during 1st -5th March, 2011. The next Census was due in 2021 but the same has been postponed due to Covid-19 pandemic.
            </p>
            <p style={para}>
              All matters relating to Census including planning, preparations, pre-testing of questions/ schedules, conduct of Census, tabulation from Census data and its dissemination are dealt with in this Division.
            </p>
            <p style={para}>
              Population Census provides basic statistics on state of human resources, demography, culture and economic structure at local, regional and national level. All this information is vital to guide and shape the future course of the nation. Universality and simultaneity are the two key features of census. Therefore, taking count of a large population on India’s size is a phenomenal task. The ensuing decadal Census of India will be the 16th in series and 8th after independence. This is indeed a gigantic operation for which nearly thirty lakh Enumerators and Supervisors will be engaged to enumerate almost 135 crore (1.35 billion) people across the country. The enumerators and supervisors are mainly drawn from local school teachers, Central and State/UT government officials and officials of local bodies who will be visiting every household to canvass census schedules.
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'जनगणना के चरण' : 'Phases of Census'}</h2>
            <p style={para}>
              The Census Operations in India have been carried out in two phases: - i) Houselisting and Housing Census and ii) Population Enumeration. During Houselisting and Housing Census, all buildings, Census Houses and Households are identified and systematically listed in the relevant schedules. It provides comprehensive data on the conditions of human settlements, housing deficit and consequently the housing requirements to be taken care of in the formulation of housing policies. This will also provide a wide range of data/information on amenities and assets available to the Households. This would also provide the base for Population Enumeration by giving a more realistic idea of the population size of the Houselisting blocks, thereby ensuring the more practical carving of the blocks for Population Enumeration.
            </p>
            <p style={para}>
              The Population Enumeration follows the Housing Census within a gap of six to eight months. During the second phase of census taking, each person is enumerated and her/his individual particulars like Age, Marital status, Religion, Schedule Cast/Schedule Tribe, Mother tongue, Education level, Disability, Economic activity, Migration, Fertility (for female) are collected.
            </p>
            <p style={para}>
              It has been the practice to undertake pre-test of census schedules about two years prior to the conduct of the census.
            </p>
          </section>

          <section style={card}>
            <h2 style={sectionHeading}>{isHi ? 'डिजिटल जनगणना' : 'Digital Census'}</h2>
            <p style={para}>
              In the history of Indian Census, for the first time, the Census data will be collected digitally i.e. on Mobile App in the ensuing census. The Mobile app for Census purpose has been devised to be very simple, convenient and user friendly to ensure its maximum acceptability by all the Enumerators and Supervisors. With the help of mobile app, all the data will be instantaneously ready for processing, without any need of extra Logistics for schedules and ICR processing. Also, self-enumeration facility will be provided for the first time in the forthcoming Census. The Population Census of India is transforming into ‘Digital Census’. Adopting a scientific approach, the CMMS portal has been developed by ORGI for smooth conduct and effective management and monitoring of forthcoming Census exercise.
            </p>
            <p style={para}>
              For the first time, a separate code directory will be provided for several questions asked in second phase of forthcoming Census. For the questions involving descriptive/non-numeric entries, a separate Code Directory, containing possible responses and codes for each such questions, has been prepared for use by the enumerators. The Code Directory will have codes in respect of Relationship to head, Mother Tongue and Other languages known, Occupation, Nature of industry, trade or service, Birth place/Place of last residence and Scheduled Caste (SC)/Scheduled Tribe (ST) etc.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
