import './globals.css';
import NavigationLinks from '@/components/NavigationLinks';
import AccessibilityToggles from '@/components/AccessibilityToggles';
import GovLinksBar from '@/components/GovLinksBar';
import LanguageProviderWrapper from '@/components/LanguageProviderWrapper';
import LanguageSelector from '@/components/LanguageSelector';
import TranslatedText from '@/components/TranslatedText';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export const metadata = {
  title: 'Directorate of Census Operations, Tripura',
  description: 'Official Government Portal for Census Data of Tripura state',
  icons: { icon: '/favicon.ico' }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProviderWrapper>
          {/* Top Accessibility Bar */}
          <div style={{ background: 'linear-gradient(90deg, #0D1F15 0%, #1B4332 100%)', color: '#A7C5B4', padding: '7px 0', fontSize: '0.78rem', fontWeight: 600, borderBottom: '1px solid rgba(201,169,75,0.25)' }}>
            <div className="container top-bar-container">
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
                <TranslatedText text="GOVERNMENT OF INDIA" style={{ color: '#ffffff', fontWeight: 600 }} />
                <span style={{ opacity: 0.5, display: 'none' }} className="mobile-hide">|</span>
                <span style={{ display: 'flex', gap: '5px' }}>| <TranslatedText text="MINISTRY OF HOME AFFAIRS" /></span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Social Media Links */}
                <div className="top-bar-social" style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingRight: '15px', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                  <a href="https://www.facebook.com/share/1AWTLCmCxt/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#e2e8f0' }} className="hover:text-white" aria-label="Facebook Page" title="Facebook Page">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/dco_tripura?igsh=MW40bmpoYTh1enh6Yw==" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#e2e8f0' }} className="hover:text-white" aria-label="Instagram Page" title="Instagram Page">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 2.162c-2.67 0-3 .01-4.053.058-.96.045-1.48.211-1.828.346a2.768 2.768 0 00-1.58 1.58c-.134.347-.3 .868-.345 1.828-.048 1.053-.058 1.383-.058 4.053s.01 3 .058 4.053c.045.96.211 1.48.346 1.828a2.768 2.768 0 001.58 1.58c.347.134.868.3 1.828.345 1.053.048 1.383.058 4.053.058s3-.01 4.053-.058c.96-.045 1.48-.211 1.828-.346a2.768 2.768 0 001.58-1.58c.134-.347.3-.868.345-1.828.048-1.053.058-1.383.058-4.053s-.01-3-.058-4.053c-.045-.96-.211-1.48-.346-1.828a2.768 2.768 0 00-1.58-1.58c-.347-.134-.868-.3-1.828-.345-1.053-.048-1.383-.058-4.053-.058zm0 4.89a5.352 5.352 0 100 10.704 5.352 5.352 0 000-10.704zm0 8.541a3.189 3.189 0 110-6.378 3.189 3.189 0 010 6.378zm5.281-9.921a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z" /></svg>
                  </a>
                  <a href="https://x.com/DCOTRIPURA?s=09" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#e2e8f0' }} className="hover:text-white" aria-label="X (Twitter) Handle" title="X (Twitter)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                </div>
                <AccessibilityToggles />
                <span style={{ opacity: 0.3 }}>|</span>
                <LanguageSelector />
              </div>
            </div>
          </div>

          {/* Sticky Regal Header */}
          <header style={{
            background: 'linear-gradient(160deg, #1B4332 0%, #0D1F15 60%, #0A1A0F 100%)',
            color: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3), 0 1px 0 rgba(201,169,75,0.3)'
          }}>
            {/* Main Branding Area - CENTERED */}
            <div className="container brand-header">
              <div style={{ width: '80px', height: '95px', minWidth: '60px', position: 'relative', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <img src="/emblem.svg" alt="Emblem of India" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <TranslatedText
                  text="Directorate of Census Operations"
                  elementType="h1"
                  style={{ fontSize: '1.5rem', margin: '0 0 4px', letterSpacing: '0.02em', color: '#fff', textTransform: 'uppercase', fontWeight: 700, lineHeight: 1.2 }}
                />
                <TranslatedText
                  text="TRIPURA | GOVERNMENT OF INDIA"
                  elementType="p"
                  style={{ margin: 0, fontSize: '0.85rem', color: 'var(--secondary-color)', fontWeight: 700, letterSpacing: '0.15em' }}
                />
              </div>
              <div style={{ width: '180px', height: '110px', position: 'relative', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                <img src="/census_logo.png" alt="Census 2027 Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))' }} />
              </div>
            </div>

            {/* Dedicated Full-Width Navigation Row */}
            <div style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.3))', borderTop: '1px solid rgba(201,169,75,0.15)', borderBottom: '3px solid #C9A94B', overflow: 'visible', position: 'relative', zIndex: 999 }}>
              <div className="container" style={{ display: 'flex', justifyContent: 'center', overflow: 'visible', position: 'relative' }}>
                <Suspense fallback={<div style={{ padding: '10px' }}>Loading Navigation...</div>}>
                  <NavigationLinks />
                </Suspense>
              </div>
            </div>
          </header>


          <main id="main-content" style={{ minHeight: '80vh' }}>
            {children}
          </main>

          <Footer />
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
