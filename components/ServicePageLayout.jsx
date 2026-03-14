"use client";
import React from 'react';
import Image from 'next/image';
import { t } from '../lib/translations';

export default function ServicePageLayout({ tr, serviceImage, lang }) {
    const commonTr = t(lang);
    const callBtnText = lang === 'es' ? `${commonTr.hero.callNow} / Obtener Cotización` : `${commonTr.hero.callNow} / Get a Quote`;

    return (
        <section className="service-page-content" style={{ padding: '80px 0', background: 'var(--white)' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div className="service-layout-grid">
                    <div className="service-layout-image">
                        <div className="service-image-container">
                            <Image 
                                src={serviceImage} 
                                alt={tr.title} 
                                width={800} 
                                height={600} 
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="service-layout-text">
                        <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 24px 0' }}>{tr.sectionTitle}</h2>
                        <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                            {tr.paragraphs.map((p, i) => (
                                <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
                            ))}
                            <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0' }}>
                                {tr.list.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', fontWeight: '600', color: 'var(--navy)' }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '4px', flexShrink: 0 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            
                            <div style={{ marginTop: '48px' }}>
                                <a href="tel:+12086868099" className="btn btn--primary btn--lg">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <span style={{ marginLeft: '4px' }}>{callBtnText}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New SEO Section 1 */}
                {tr.seoSection1 && (
                    <div style={{ marginTop: '100px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>{tr.seoSection1.title}</h2>
                        <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                            {tr.seoSection1.paragraphs.map((p, i) => (
                                <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
                            ))}
                        </div>
                    </div>
                )}

                {/* New SEO Section 2 */}
                {tr.seoSection2 && (
                    <div style={{ marginTop: '80px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', padding: '40px', background: '#f8faff', borderRadius: '24px' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>{tr.seoSection2.title}</h2>
                        <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '24px' }}>{tr.seoSection2.text}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                {tr.seoSection2.list.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '500' }}>
                                        <div style={{ width: '8px', height: '8px', background: 'var(--orange)', borderRadius: '50%' }}></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* New SEO Section 3 */}
                {tr.seoSection3 && (
                    <div style={{ marginTop: '80px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>{tr.seoSection3.title}</h2>
                        <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                            {tr.seoSection3.paragraphs.map((p, i) => (
                                <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
                            ))}
                        </div>
                    </div>
                )}

                {/* FAQ Section */}
                {tr.faqSection && (
                    <div style={{ marginTop: '100px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <h2 className="section-title" style={{ marginBottom: '16px' }}>{tr.faqSection.title}</h2>
                            <div style={{ width: '60px', height: '4px', background: 'var(--orange)', margin: '0 auto', borderRadius: '2px' }}></div>
                        </div>
                        <div className="faq-grid" style={{ display: 'grid', gap: '24px' }}>
                            {tr.faqSection.items.map((item, i) => (
                                <div key={i} className="faq-item" style={{ 
                                    padding: '32px', 
                                    background: 'var(--white)', 
                                    borderRadius: '20px', 
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <h3 style={{ 
                                        fontSize: '1.25rem', 
                                        color: 'var(--navy)', 
                                        marginBottom: '16px', 
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start'
                                    }}>
                                        <span style={{ color: 'var(--orange)', fontWeight: '800' }}>Q.</span>
                                        {item.q}
                                    </h3>
                                    <p style={{ 
                                        fontSize: '1.05rem', 
                                        color: 'var(--text-dark)', 
                                        lineHeight: '1.7',
                                        display: 'flex',
                                        gap: '12px',
                                        alignItems: 'flex-start'
                                    }}>
                                        <span style={{ color: 'var(--navy)', fontWeight: '800' }}>A.</span>
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <style jsx>{`
                .service-layout-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 40px;
                    align-items: start;
                }
                
                .service-image-container {
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }

                @media (max-width: 991px) {
                    .service-layout-grid {
                        display: flex;
                        flex-direction: column;
                    }
                    .service-layout-image {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        margin-bottom: 30px;
                        order: -1;
                    }
                    .service-image-container {
                        width: 70%;
                    }
                    .section-title {
                        text-align: center !important;
                        font-size: 2rem !important;
                    }
                    .service-layout-text {
                        text-align: center;
                    }
                    .service-layout-text ul {
                        display: inline-block;
                        text-align: left;
                    }
                    .btn--lg {
                        width: 100%;
                        justify-content: center;
                    }
                }

                @media (min-width: 992px) {
                    .service-layout-grid {
                        grid-template-columns: 1.1fr 0.9fr;
                        gap: 80px;
                    }
                    .service-layout-text {
                        order: -1;
                    }
                }
            `}</style>
        </section>
    );
}
