"use client";

const portalLinks = [
  {
    name: 'ORGI Intranet',
    url: 'https://intranet.census.gov.in/',
    icon: '🏛️',
    description: 'Office of the Registrar General of India internal network and resources.',
    color: '#1B4332',
    external: true,
  },
  {
    name: 'E-mail Services',
    url: 'https://accounts.mgovcloud.in/signin?servicename=VirtualOffice&serviceurl=https%3A%2F%2Fmail.mgovcloud.in%2F',
    icon: '📧',
    description: 'Official Government of India email portal for NIC email accounts.',
    color: '#1d4ed8',
    external: true,
  },
  {
    name: 'E-office',
    url: 'https://parichay.nic.in/pnv1/assets/login?sid=1234567899',
    icon: '🗂️',
    description: 'Digital workplace solution for paperless file and correspondence management.',
    color: '#0891b2',
    external: true,
  },
  {
    name: 'E-HRMS',
    url: 'https://e-hrms.gov.in/home',
    icon: '👤',
    description: 'Electronic Human Resource Management System for service record management.',
    color: '#7c3aed',
    external: true,
  },
  {
    name: 'E-Sparrow (APAR)',
    url: 'https://parichay.nic.in/pnv1/assets/login?sid=SPARROWORGI',
    icon: '📊',
    description: 'Smart Performance Appraisal Report Recording Online Window for annual reports.',
    color: '#059669',
    external: true,
  },
  {
    name: 'E-Purti',
    url: 'https://epurti.census.gov.in/',
    icon: '🛒',
    description: 'Government procurement portal for stationery and office supplies.',
    color: '#d97706',
    external: true,
  },
  {
    name: 'CollabFiles',
    url: 'https://collabfiles.gov.in/',
    icon: '📁',
    description: 'NIC secure file sharing and collaboration platform for government offices.',
    color: '#0891b2',
    external: true,
  },
  {
    name: 'CGHS',
    url: 'https://cghs.mohfw.gov.in/AHIMSG5/hissso/Login',
    icon: '🏥',
    description: 'Central Government Health Scheme portal for medical facilities and claims.',
    color: '#db2777',
    external: true,
  },
  {
    name: 'MHA (I-Card Creation)',
    url: 'https://validation.mha.gov.in/',
    icon: '🪪',
    description: 'Ministry of Home Affairs portal for identity card creation and management.',
    color: '#1B4332',
    external: true,
  },
  {
    name: 'PFMS (Salary Slip / GPF)',
    url: 'https://gifmis.cga.gov.in/Home.aspx',
    icon: '💰',
    description: 'Public Financial Management System for salary slips and GPF account details.',
    color: '#059669',
    external: true,
  },
  {
    name: 'PDF Tools',
    url: 'https://nicpdftools.nic.in/',
    icon: '📄',
    description: 'Online utilities for merging, splitting, compressing, and converting PDF files.',
    color: '#dc2626',
    external: true,
  },
  {
    name: 'Transfer Policy',
    url: 'https://censusindia.gov.in/census.website/node/473',
    icon: '🔄',
    description: 'Guidelines and rules governing transfer and posting of DCO Tripura staff.',
    color: '#7c3aed',
    external: true,
  },
  {
    name: 'Recruitment Rules',
    url: 'https://censusindia.gov.in/census.website/node/369',
    icon: '📋',
    description: 'Official recruitment rules, eligibility criteria, and selection procedures.',
    color: '#1d4ed8',
    external: true,
  },
  {
    name: 'Proforma',
    url: 'https://censusindia.gov.in/census.website/node/314',
    icon: '📝',
    description: 'Standard forms and proformas for various service-related applications.',
    color: '#d97706',
    external: true,
  },
  {
    name: 'SHe-Box (Online Complaint Management System)',
    url: 'https://shebox.wcd.gov.in/',
    icon: '🛡️',
    description: 'Sexual Harassment Electronic Box — online complaint management system for women employees.',
    color: '#db2777',
    external: true,
  },
];

export default function EmployeePage() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '80vh', paddingBottom: '60px' }}>

      {/* ── Hero Header ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
        padding: '50px 24px 40px',
        textAlign: 'center',
        borderBottom: '3px solid #C9A94B',
      }}>
        <h1 style={{ color: '#fff', fontSize: '2.4rem', fontWeight: 800, marginBottom: '12px', fontFamily: 'Cormorant Garamond, serif' }}>
          Employee Corner
        </h1>
        <div style={{ width: '80px', height: '4px', backgroundColor: '#C9A94B', margin: '0 auto 18px', borderRadius: '2px' }} />
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto', lineHeight: '1.7' }}>
          Internal portals, HR resources, and services exclusively for staff of the Directorate of Census Operations, Tripura.
        </p>
      </div>

      {/* ── Portal Cards Grid ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {portalLinks.map((link) => (
            <PortalCard key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PortalCard({ link }: { link: typeof portalLinks[number] }) {
  return (
    <a
      href={link.url}
      target={link.external ? '_blank' : '_self'}
      rel={link.external ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 24px',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderRadius: '14px',
        border: '1px solid #e8ede8',
        borderTop: '3px solid ' + link.color,
        boxShadow: '0 1px 4px rgba(27,67,50,0.07)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-5px)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 18px 40px rgba(27,67,50,0.14)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 4px rgba(27,67,50,0.07)';
      }}
    >
      {/* Icon badge */}
      <div style={{
        fontSize: '1.8rem',
        width: '52px',
        height: '52px',
        borderRadius: '12px',
        backgroundColor: link.color + '18',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        flexShrink: 0,
      }}>
        {link.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#1B4332',
        marginBottom: '8px',
        lineHeight: '1.45',
      }}>
        {link.name}
      </h3>

      {/* Description */}
      <p style={{
        color: '#64748b',
        fontSize: '0.86rem',
        lineHeight: '1.6',
        flex: 1,
        marginBottom: '18px',
      }}>
        {link.description}
      </p>

      {/* CTA row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontWeight: 700,
        fontSize: '0.78rem',
        textTransform: 'uppercase',
        color: link.color,
        letterSpacing: '0.05em',
      }}>
        {link.external ? 'Open Portal' : 'View'}
      </div>

      {/* Decorative bg circle */}
      <div style={{
        position: 'absolute',
        bottom: '-15px',
        right: '-15px',
        width: '70px',
        height: '70px',
        backgroundColor: link.color,
        opacity: 0.06,
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
    </a>
  );
}
