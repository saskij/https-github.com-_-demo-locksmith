'use client';

import React from 'react';

export default function LocationSEOLayout({ tr, lang }) {
  if (!tr.seoSection1) return null;

  return (
    <>
      {/* SECTION 1: Automotive Locksmith Services in [City Name] */}
      <section className="location-seo-section" style={{ padding: '80px 20px', backgroundColor: 'var(--gray-bg)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>
            {tr.seoSection1.title}
          </h2>
          <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
            {tr.seoSection1.paragraphs.map((p, i) => (
              <p key={i} style={{ marginBottom: '20px' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Car Key Services We Provide in [City Name] */}
      <section className="location-seo-section" style={{ padding: '80px 20px', backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>
            {tr.seoSection2.title}
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '25px', fontWeight: '600', color: 'var(--navy)' }}>
            {tr.seoSection2.text}
          </p>
          <ul style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px',
            paddingLeft: '0',
            listStyle: 'none'
          }}>
            {tr.seoSection2.list.map((item, i) => (
              <li key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                fontSize: '1rem',
                color: 'var(--text-dark)',
                fontWeight: '500'
              }}>
                <span style={{ color: 'var(--orange)', fontSize: '1.5rem', lineHeight: '1' }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3: Mobile Locksmith Near You */}
      <section className="location-seo-section" style={{ padding: '80px 20px', backgroundColor: 'var(--gray-bg)', marginBottom: '0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>
            {tr.seoSection3.title}
          </h2>
          <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
            {tr.seoSection3.paragraphs.map((p, i) => (
              <p key={i} style={{ marginBottom: '20px' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
