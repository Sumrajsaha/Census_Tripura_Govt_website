export const metadata = {
  title: 'Accounts, Establishment & Store | DCO Tripura',
  description: 'Information regarding the Accounts, Establishment and Store sections of the Directorate of Census Operations, Tripura.',
}

export default function AccountsEstablishmentStorePage() {
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
        Accounts, Establishment &amp; Store
      </h1>

      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Accounts Section */}
        <section style={card}>
          <h2 style={sectionHeading}>Accounts Section</h2>
          <p style={para}>
            The Accounts Section plays a vital role in maintaining, financial discipline and transparency within the organization. It is responsible for proper accounting of all financial transactions in accordance with prescribed rules and government regulations.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The section handles processing of bills, preparation and maintenance of accounts, and timely disbursement of payments through various modes including cheques. It also manages collection and accounting of license fees and other receipts.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            In addition, the Accounts Section deals with various types of claims such as Medical Reimbursement, Leave Travel Concession (LTC), Travelling Allowance (TA), and other related claims, ensuring their timely processing and settlement.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The section also handles important service-related financial matters including General Provident Fund (GPF), pension cases, and leave encashment, ensuring accurate processing and compliance with applicable rules.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            Further, it is responsible for handling statutory financial matters such as deduction and deposit of taxes, including Income Tax and other applicable taxes, in compliance with relevant laws and guidelines.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The Accounts Section undertakes budget monitoring, expenditure control, and preparation of financial reports. Regular monitoring of expenditure is carried out through preparation of weekly statements (Weekly LOP) as well as monthly returns, ensuring efficient utilization of funds and proper financial control.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The section also assists in internal and external audits and works in close coordination with other sections to ensure smooth financial operations and effective financial management.
          </p>
        </section>

        {/* Establishment Section */}
        <section style={card}>
          <h2 style={sectionHeading}>Establishment Section</h2>
          <p style={para}>
            The Establishment Section of the Directorate of Census Operations, Tripura plays a broad support and regulatory role within the office. In addition to core administrative duties, it also handles several general and important matters on behalf of the Office of the Registrar General, India.
          </p>
          
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 600, color: 'var(--primary-color)', marginBottom: '12px' }}>
              Here’s a clearer breakdown of its responsibilities:
            </p>
            <ul style={listStyle}>
              <li style={listItem}>
                <strong>Court Cases:</strong> Managing legal matters involving the department, including coordination with legal authorities and maintaining case records.
              </li>
              <li style={listItem}>
                <strong>Receipt and Dispatch:</strong> Handling all incoming and outgoing official correspondence, ensuring proper documentation and timely communication.
              </li>
              <li style={listItem}>
                <strong>Vigilance Matters:</strong> Dealing with issues related to integrity, discipline, and prevention of corruption within the department.
              </li>
              <li style={listItem}>
                <strong>Departmental Enquiries:</strong> Conducting or assisting in internal investigations related to employee conduct and service matters.
              </li>
              <li style={listItem}>
                <strong>Employee Grievances:</strong> Addressing complaints and concerns raised by staff, ensuring fair resolution mechanisms.
              </li>
              <li style={listItem}>
                <strong>Other General Administrative Work:</strong> Supporting overall office functioning through coordination, record-keeping, and compliance with government procedures.
              </li>
            </ul>
          </div>

          <p style={para}>
            The e-office system was introduced in the office of the DCO Tripura in 2021. Since then, all files have been processed through the e-office module, which aims to enhance productivity, improve quality, optimize resource management, reduce turnaround time, and promote transparency by replacing the traditional manual system with an electronic file management system.
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            Both physical and electronic files are now routed through the e-office platform. The e-Leave module is used for processing leave applications of all officials. Additionally, the Receipt and Dispatch Section of the office operates through the e-Receipt and Dispatch module.
          </p>
        </section>

        {/* Store Section */}
        <section style={card}>
          <h2 style={sectionHeading}>Store Section</h2>
          <p style={para}>
            The Store Section of this Directorate is responsible for the procurement, receipt, storage, and distribution of materials required for official work, ensuring compliance with rules such as the General Financial Rules (GFR) and procurement through platforms like the Government e-Marketplace (GeM). In addition to routine purchases, it also handles procurement related to the other logistical materials required during census activities. 
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The section maintains proper stock records, verifies the quality and quantity of received items, and issues materials to various sections against authorized requisitions. It also functions as a repository of important publications of the ORGI for this Directorate, maintaining and managing a library of books and documents related to the Census of India, Sample Registration System (SRS), Civil Registration System (CRS), and Medical Certification of Cause of Death (MCCD), ensuring their proper cataloguing, preservation, and accessibility for official reference. 
          </p>
          <p style={{ ...para, marginTop: '14px' }}>
            The section also handles disposal of obsolete or unserviceable items, thereby ensuring efficient inventory management as well as effective support to census and other demographic operations of the Directorate. More than 300 books are available in the library.
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
  marginBottom: '14px',
}

const para: React.CSSProperties = {
  color: '#374151',
  lineHeight: '1.85',
  fontSize: '0.97rem',
}

const listStyle: React.CSSProperties = {
  paddingLeft: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '10px',
}

const listItem: React.CSSProperties = {
  color: '#374151',
  lineHeight: '1.6',
  fontSize: '0.95rem',
}
