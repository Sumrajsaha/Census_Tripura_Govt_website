import MapsClientWrapper from '@/components/MapsClientWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Maps | DCO Tripura',
  description: 'Explore district-level maps and GIS data for Tripura',
};

export default function InteractiveMaps() {
  return (
    <div className="container" style={{ padding: '50px 20px' }}>
      <h1 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '10px', display: 'inline-block' }}>
        Interactive GIS Maps — Tripura
      </h1>
      <p style={{ marginTop: '10px', color: '#666', maxWidth: '800px', lineHeight: '1.6' }}>
        Explore the administrative boundaries and demographic distribution of Tripura through our interactive district map. Hover over any district to view 2011 Census statistics.
      </p>

      <MapsClientWrapper />

      <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '20px', backgroundColor: '#f0f8ff', borderLeft: '4px solid #0056b3', borderRadius: '4px' }}>
          <h3 style={{ color: '#0056b3' }}>Download Static Maps</h3>
          <ul style={{ marginTop: '10px', lineHeight: '2' }}>
            <li><a href="#" style={{ color: '#333' }}>Tripura Administrative Map 2011 (PDF)</a></li>
            <li><a href="#" style={{ color: '#333' }}>District Boundaries Map (PDF)</a></li>
          </ul>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#e6ffe6', borderLeft: '4px solid #28a745', borderRadius: '4px' }}>
          <h3 style={{ color: '#28a745' }}>GIS Shapefiles</h3>
          <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#555' }}>
            Official shapefiles for research and analysis require a formal request to the Director&apos;s Office.
          </p>
        </div>
      </div>
    </div>
  );
}
