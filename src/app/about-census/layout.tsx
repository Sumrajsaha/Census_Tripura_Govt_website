import type { ReactNode } from 'react';

/**
 * Shared layout for all /information/* pages.
 * Injects a JSON-LD BreadcrumbList so that Google shows
 * "Home › About Census › [Page]" instead of "Home › Information › [Page]"
 * in search results.
 */
export default function InformationLayout({ children }: { children: ReactNode }) {
  const baseUrl = 'https://census-tripura-govt-website.vercel.app';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Census',
        item: `${baseUrl}/about-census`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
