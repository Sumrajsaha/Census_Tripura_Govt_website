export const metadata = {
  title: 'History of Census in India | DCO Tripura',
  description: 'Learn about the history and evolution of the Census in India from its ancient roots to the modern era.',
}

export default function HistoryPage() {
  return (
    <div className="container" style={{ padding: '50px 20px', minHeight: '60vh' }}>
      <h1
        style={{
          color: 'var(--primary-color)',
          borderBottom: '2px solid var(--secondary-color)',
          paddingBottom: '10px',
          display: 'inline-block',
          marginBottom: '30px'
        }}
      >
        History and Evolution of Census in India
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Ancient & Early Modern */}
        <section style={card}>
          <h2 style={sectionHeading}>Initiation of Census Exercise in India</h2>
          <p style={para}>
            There is textual evidence to suggest that, like in the ancient Roman Empire, population count was practiced in ancient India as well. The famed book of Arthashastra, written through 321- 296 BC by Kautilya (Chanakya) during the Maurya empire, narrated the conduct of Population Census as a part of governance for the purpose of taxation and implementation of state policy. The medieval age administrative report of 'Ain-e-Akbari' offered extensive statistics on population, industry, wealth, and many other characters of the society during the reign of Mughal Monarch Akbar.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            During modern times as part of British colonial rule, the practice of taking Census on regular intervals and in a methodical manner was initiated. Over a period of time, especially after India's independence, driven by the growing needs emanating from changes in the society, the procedures and objectives of Census has broadened manifold and has gone through a large-scale transformation. In addition to the Administrative requirements, Census data now caters to numerous requirements of development and welfare of the public. In the modern world, India is one among a few countries that has a long tradition of conducting Census at periodic intervals in an unbroken series since 1872. This is partly due to its colonial legacy and the Indian census therefore is in possession of a rich archival data throwing light on its past illuminating it very well.
          </p>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Initial Period of modern Census</h2>
          <p style={para}>
            Although the Census of 1871 is considered to be the first Modern Census of India under British regime; the initiations started many decades ago. First records of attempts to assess population are found in the city of Calcutta and Benaras in 1800. In 1814-15 a Census was conducted in the &quot;Island of Bombay&quot;, counting the population of the Fort as well as the rest of the residential areas in the island.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            In the subsequent years, in British Provinces, Princely states and several local Governments conducted their own procedures of Census taking, chiefly by the police and Chowkidars. Census in Calcutta city in 1821, 1831, 1837, 1850, 1866 and so on, in Bombay in 1833, 1844, 1849 and 1864; Madras in 1822, 1863, 1867, Punjab in 1855, 1868, Oudh in 1869 etc. are some of the examples of such efforts. In absence of any permanent legislation or Act for conduct of Census in India as a whole, a special Act would be passed before every individual Census exercise and the entire procedure would be governed under these temporary Acts.
          </p>
        </section>

        {/* The Decades */}
        <section style={card}>
          <h2 style={sectionHeading}>Census 1871</h2>
          <p style={para}>
            The first national Census of 1871 was an attempt by the British rulers of India to compile whole India statistics on age, sex, occupation, education, religion, caste and disability status of the population through compilation of Census Reports for various portions of the country during preceding few years. As a result, a uniform national standard methodology could not be followed across India. During listing of houses, attempts were made to distinguish houses based on materials like brick, thatch, mud etc. Land data was compiled into cultivated and uncultivated and various prospects of land revenue were investigated. The reports and data of census 1871 shows that, Sex Ratio of India was 105 females per 100 Indian males. This favourable outcome observed mainly in Assam, Bengal, Mysore and Madras provinces. Data on Occupation was classified in livelihood classes.
          </p>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Census 1881 &ndash; The first synchronous Census in India</h2>
          <p style={para}>
            The Census of 1881 was the first Census exercise conducted in the entire Indian sub-continent in a synchronous manner. Since then, Censuses have been undertaken uninterruptedly once in every ten years until 2011. 17th February, 1881 was declared as the Census Day when data collection took place through evening till midnight. Entire country was covered including 11 provinces under British and 7 Princely States except areas under French and Portuguese dominion. The methodology of Census 1881 formed the base for the subsequent systematic Census which is being practised till today.
          </p>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <section style={subCard}>
            <h3 style={subHeading}>Census 1891</h3>
            <p style={para}>
              The reference date of Census 1891 was 26th February, 1891. More efforts were given for hitherto uncovered and difficult areas (like Sikkim and Northern Myanmar (Burma)); areas under forests and hilly tracts, railway establishments, cantonments; seafaring and floating (Boat) population.
            </p>
          </section>

          <section style={subCard}>
            <h3 style={subHeading}>Census 1901</h3>
            <p style={para}>
              The third decadal Census of 1901 was held on 1st March, 1901. A Census Block consisting of 30-35 houses were allotted to each Enumerator under the Supervisors, where the Supervisory Circle contained 10-15 compact group of Blocks. Individual slips were introduced to prepare final tables.
            </p>
          </section>
        </div>

        <section style={card}>
          <h2 style={sectionHeading}>Census 1911</h2>
          <p style={para}>
            The Census of India 1911 was conducted on 10th March, 1911. Many new initiatives were implemented, such as fixing wooden slabs on walls for House Numbering. Special efforts included:
          </p>
          <ul style={listStyle}>
            <li><strong>Translation of Documents:</strong> Census schedules were translated into many vernacular languages, saving time and improving clarity.</li>
            <li><strong>Special Areas:</strong> Specific provisions for Tea Gardens, Mines, Factories, Ports, and Railway Settlements.</li>
            <li><strong>Rural-Urban Classification:</strong> The prime criteria of being a city was population over 1 lakh. Growth of Calcutta and Bombay was well documented.</li>
            <li><strong>Industrial Census:</strong> First Industrial Census was conducted to obtain information regarding industrial growth.</li>
          </ul>
          <div style={infoBox}>
            <strong>Partition of Bengal in 1905 and its impact:</strong> The fieldwork of 1911 was conducted on temporary jurisdictions due to the partition of Bengal, but during publication, data was recast to conform with the Administrative Divisions set in 1912 after the partition was annulled. Tripura's data was grouped under &quot;Princely States of Cooch Behar and Hill Tippera (Tripura)&quot;.
          </div>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Census 1921 & The Influenza Epidemic</h2>
          <p style={para}>
            18th March, 1921 was the Census day when Census was conducted overnight across India. The process was somewhat impacted by the ongoing Non-Cooperation movement.
          </p>
          <div style={infoBoxAccent}>
            <strong>Great Influenza epidemic of 1918:</strong> This census remains unique because the population count actually <em>fell</em> from the previous decade. Between 1.2 to 1.7 Crore deaths were reported due to &quot;Fever&quot; (Spanish flu / H1N1), deeply reflecting on the demographic curve.
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <section style={subCard}>
            <h3 style={subHeading}>Census 1931</h3>
            <p style={para}>
              Conducted safely on Feb 26th, 1931 under the Temporary Census Act 1929. Data on bilingualism/multilingualism, literacy, and detailed livelihoods were collected. Despite the Civil Disobedience Movement, it was largely successful.
            </p>
          </section>

          <section style={subCard}>
            <h3 style={subHeading}>Census 1941</h3>
            <p style={para}>
              The last pre-independence census! Held under the shadow of the Second World War. Financial crunches meant enumeration had to be executed in a phased manner and many subsidiary tables were unfortunately expunged.
            </p>
          </section>
        </div>

        <h2 style={{ ...sectionHeading, marginTop: '20px', borderLeft: 'none', paddingLeft: 0, borderBottom: '2px solid var(--secondary-color)', display: 'inline-block' }}>
          Census in Independent India
        </h2>

        <section style={card}>
          <h2 style={sectionHeading}>Census 1951 &ndash; The First Census after independence</h2>
          <p style={para}>
            The first decennial Census in independent India was conducted from 9th to 28th February 1951. After the handover of power, the Govt. of India enacted the permanent Census Act in 1948 and established the permanent Office of the Registrar General and Census Commissioner, India. Despite massive changes due to partition and displacement, it created an outstanding pathway for all future census exercises. First publications of District Census Handbooks occurred in this cycle.
          </p>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Decades of Innovation (1961 - 1991)</h2>
          <ul style={listStyle}>
            <li>
              <strong>Census 1961:</strong> Introduced a separate, systematic House listing and Housing Census prior to population enumeration. This vastly improved the baseline quality.
            </li>
            <li>
              <strong>Census 1971:</strong> The concept of `Standard Urban Area (SUA)` was introduced to measure urbanization. More complex economic and migration questions were queried.
            </li>
            <li>
              <strong>Census 1981:</strong> Data-entry centres were established to put data completely onto magnetic tape instead of punch cards. Spread via NICNET also began here.
            </li>
            <li>
              <strong>Census 1991:</strong> First in-house computer center established. Manual Processing involved 163 Regional Tabulation Offices. Electronic data dissemination (Floppy diskettes) took firm root.
            </li>
          </ul>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Census 2001</h2>
          <p style={para}>
            Marked a tech milestone. The entire 202 million schedules consisting of about 1028 million records were scanned using ICR and processed efficiently. A unique Permanent Location Code Number (PLCN) was assigned to every village and town. All Census Schedules were completely digitized through scanning for the first time in history.
          </p>
        </section>

        <section style={card}>
          <h2 style={sectionHeading}>Census 2011</h2>
          <p style={para}>
            Heralded the modern census era. Preparatory work included field trials in 2007. The Data Standards Coding (MDDS) heavily integrated e-governance systems. GIS-based maps were created for capital cities. Many new variables &mdash; including recognizing the Third Gender for the first time, and highlighting Female Headed Households &mdash; enriched the data sets significantly. All Census Data was hosted on official portals for free world-wide access.
          </p>
        </section>

        <section style={{ ...card, backgroundColor: '#f1f5f9' }}>
          <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#334155', marginBottom: '10px' }}>References:</h2>
          <ol style={{ paddingLeft: '20px', color: '#475569', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Report, The Census of Calcutta, 1866</li>
            <li>Memorandum on the Census of British India, 1871-72</li>
            <li>Census of India 1891 - Report 0002 pdf; Outline of Census</li>
            <li>Report on Census of India 1901, H. H. Risley, ICS &amp; E.A.Gait, ICS.</li>
            <li>Census of India 1911, City of Calcutta &amp; Bengal, Bihar, Orissa, Sikkim Vols</li>
            <li>Census of India 1921 &amp; 1931, Bengal &amp; Sikkim Vols, W.H. Thompson / A.E. Porter</li>
            <li>Census of India 1941, India, Part II, Administration Report</li>
            <li>Planning for the 2001 Census of India Based on 1991 Census; Dr. M. Vijayanunni</li>
            <li>Various Publications/Reports of the Census of India.</li>
          </ol>
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

const subCard: React.CSSProperties = {
  ...card,
  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  borderTop: '3px solid var(--secondary-color)',
}

const sectionHeading: React.CSSProperties = {
  color: 'var(--primary-color)',
  fontSize: '1.3rem',
  fontWeight: 700,
  borderLeft: '4px solid var(--secondary-color)',
  paddingLeft: '12px',
  marginBottom: '16px',
}

const subHeading: React.CSSProperties = {
  color: 'var(--primary-color)',
  fontSize: '1.15rem',
  fontWeight: 700,
  marginBottom: '10px',
}

const para: React.CSSProperties = {
  color: '#374151',
  lineHeight: '1.85',
  fontSize: '0.99rem',
}

const listStyle: React.CSSProperties = {
  paddingLeft: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '10px',
  color: '#374151',
  lineHeight: '1.6',
  fontSize: '0.95rem',
}

const infoBox: React.CSSProperties = {
  marginTop: '20px',
  padding: '16px 20px',
  backgroundColor: '#eef2ff',
  borderLeft: '4px solid #6366f1',
  borderRadius: '0 8px 8px 0',
  color: '#1e3a8a',
  fontSize: '0.92rem',
  lineHeight: '1.6',
}

const infoBoxAccent: React.CSSProperties = {
  ...infoBox,
  backgroundColor: '#fff1f2',
  borderLeftColor: '#f43f5e',
  color: '#881337',
}
