"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import TranslatedText from './TranslatedText';

export default function Breadcrumb() {
  const pathname = usePathname();
  const { language } = useLanguage();

  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', padding: '10px 0', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, fontSize: '0.85rem' }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'var(--primary-color)', textDecoration: 'none' }} aria-label={language === 'hi' ? 'होम पेज पर जाएं' : 'Go to Home'}>
                {language === 'hi' ? 'होम' : 'Home'}
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const isLast = index === pathSegments.length - 1;
              const formattedSegment = segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

              return (
                <li key={href} style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>/</span>
                  {isLast ? (
                    <span style={{ color: 'var(--text-dark)', fontWeight: 600 }} aria-current="page">
                      {formattedSegment}
                    </span>
                  ) : (
                    <Link href={href} style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                      {formattedSegment}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
