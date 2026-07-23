"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type NavChild = { name: string; path: string };
type NavItem = { name: string; path: string; children?: NavChild[] };

function DropdownItem({ item, pathname }: { item: NavItem; pathname: string | null }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = pathname
    ? pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
    : false;

  const isHome = item.path === '/';

  const linkStyle: React.CSSProperties = {
    fontWeight: 750,
    fontSize: '0.78rem',
    textDecoration: 'none',
    color: isActive ? '#E65100' : '#002147',
    padding: '8px 10px',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: isActive ? '2px solid #FF9933' : '2px solid transparent',
    transition: 'color 0.2s ease, border-color 0.2s ease',
    letterSpacing: '0.03em',
    textTransform: 'uppercase' as const,
    whiteSpace: 'nowrap' as const,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    boxShadow: 'none',
    outline: 'none',
  };

  const homeIcon = isHome ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={isActive ? '#E65100' : '#002147'} stroke="none">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ) : null;

  if (!item.children) {
    return (
      <Link href={item.path} style={linkStyle} className="nav-link-hover">
        {homeIcon}
        {t(item.name)}
      </Link>
    );
  }

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          ...linkStyle,
          background: 'transparent',
          borderBottom: open || isActive ? '2px solid #FF9933' : '2px solid transparent',
          color: open || isActive ? '#E65100' : '#002147',
        }}
        className="nav-link-hover"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {homeIcon}
        {t(item.name)}
        <svg
          width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: '1px' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="dropdown-menu-box">
          {item.children.map(child => (
            <Link
              key={child.path}
              href={child.path}
              target={child.path.startsWith('http') ? '_blank' : undefined}
              rel={child.path.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={() => setOpen(false)}
              className="dropdown-menu-link"
            >
              {t(child.name)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavigationLinks() {
  const pathname = usePathname();

  const navStructure: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      children: [
        { name: 'Meet the Registrar General of India', path: '/about/rgi' },
        { name: 'Meet the Director (Profile)', path: '/about/message' },
        { name: 'Who is Who', path: '/about/who-is-who' },
        { name: 'Organization Chart', path: '/about/org-chart' },
        { name: 'List of Directors', path: '/about/directors' },
        { name: 'DCO Functions', path: '/about/functions' },
        { name: 'Directory (of Current Officials)', path: '/about/directory' },
      ],
    },
    {
      name: 'Our Sections',
      path: '/sections',
      children: [
        { name: 'Census', path: '/sections/census-tabulation' },
        { name: 'Data Dissemination Unit (DDU)', path: '/sections/ddu' },
        { name: 'Civil Registration System (CRS)', path: '/sections/crs' },
        { name: 'Sample Registration System (SRS)', path: '/sections/srs' },
        { name: 'Map', path: '/sections/mapping' },
        { name: 'Accounts, Establishment & Store', path: '/sections/accounts' },
        { name: 'Rajbhasha', path: '/sections/rajbhasha' },
      ],
    },
    {
      name: 'About Census',
      path: '/information',
      children: [
        { name: 'History of Census in India', path: '/information/history' },
        { name: 'House Listing Operations', path: '/information/hlo' },
        { name: 'Population Enumeration', path: '/information/pe' },
        { name: 'Census Hierarchy in the State', path: '/information/hierarchy' },
      ],
    },
    { name: 'Circulars', path: '/circulars' },
    { name: 'Data & Resources', path: '/data' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Tenders', path: '/tenders' },
    { name: 'RTI', path: '/rti' },
    {
      name: 'Employee Corner',
      path: '/employee-corner',
      children: [
        { name: 'ORGI Intranet', path: 'https://intranet.census.gov.in/' },
        { name: 'E-mail Services', path: 'https://accounts.mgovcloud.in/signin?servicename=VirtualOffice&serviceurl=https%3A%2F%2Fmail.mgovcloud.in%2F' },
        { name: 'E-office', path: 'https://parichay.nic.in/pnv1/assets/login?sid=1234567899' },
        { name: 'E-HRMS', path: 'https://e-hrms.gov.in/home' },
        { name: 'E-Sparrow (APAR)', path: 'https://parichay.nic.in/pnv1/assets/login?sid=SPARROWORGI' },
        { name: 'E-Purti', path: 'https://epurti.census.gov.in/' },
        { name: 'CollabFiles', path: 'https://collabfiles.gov.in/' },
        { name: 'CGHS', path: 'https://cghs.mohfw.gov.in/AHIMSG5/hissso/Login' },
        { name: 'MHA (I-Card Creation)', path: 'https://validation.mha.gov.in/' },
        { name: 'PFMS (Salary Slip/GPF)', path: 'https://gifmis.cga.gov.in/Home.aspx' },
        { name: 'Pdf Tools', path: 'https://nicpdftools.nic.in/' },
        { name: 'Transfer Policy', path: 'https://censusindia.gov.in/census.website/node/473' },
        { name: 'Recruitment Rules', path: 'https://censusindia.gov.in/census.website/node/369' },
        { name: 'Proforma', path: 'https://censusindia.gov.in/census.website/node/314' },
        { name: 'SHe-Box (Online Complaint Management)', path: 'https://shebox.wcd.gov.in/' },
      ],
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '10px' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {mobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {navStructure.map(item => (
          <DropdownItem key={item.name} item={item} pathname={pathname} />
        ))}
      </nav>
    </>
  );
}


