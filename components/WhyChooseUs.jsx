"use client";
import { t } from '../lib/translations';

export default function WhyChooseUs({ lang = 'en' }) {
    const tr = t(lang).whyChooseUs;

    const icons = [
        <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
        <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
        <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" /><line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" /><line x1="12" y1="22" x2="12" y2="18" /></svg>,
        <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
        <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
        <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    ];

    return (
        <section className="why-choose" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title">{tr.sectionTitle} <span style={{ color: 'var(--orange)' }}>{tr.sectionTitleAccent}</span></h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>{tr.sectionSubtitle}</p>
                </div>

                <div className="bento-grid">
                    {tr.reasons.map((reason, index) => {
                        return (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 80} data-aos-duration="800" data-aos-easing="ease-out-cubic" className="bento-card">
                                <div className="bento-icon-wrapper">
                                    {icons[index]}
                                </div>
                                <h3 className="bento-title">{reason.title}</h3>
                                <p className="bento-desc">{reason.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-auto-rows: min-content;
                    gap: 24px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .bento-card {
                    background: #ffffff;
                    padding: 32px;
                    border-radius: 24px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.01);
                    border: 1px solid rgba(0, 0, 0, 0.03);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease;
                    height: 100%;
                }

                .bento-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.02);
                }

                .bento-icon-wrapper {
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: rgba(255, 106, 0, 0.08);
                    color: var(--orange);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    transition: transform 0.5s ease, background 0.5s ease;
                }

                .bento-icon-wrapper :global(svg) {
                    width: 28px;
                    height: 28px;
                }

                .bento-card:hover .bento-icon-wrapper {
                    transform: scale(1.05) rotate(-5deg);
                }

                .bento-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: var(--navy);
                    line-height: 1.3;
                }

                .bento-desc {
                    color: var(--text-light);
                    line-height: 1.6;
                    margin: 0;
                    font-size: 0.95rem;
                }

                /* Bento Highlight Variants */

                .highlight-main {
                    grid-column: span 2;
                    grid-row: span 2;
                    background: linear-gradient(135deg, rgba(255, 106, 0, 0.08) 0%, rgba(255, 106, 0, 0.02) 100%);
                    border: 1px solid rgba(255, 106, 0, 0.15);
                    justify-content: center;
                    padding: 48px;
                }

                .highlight-main .bento-icon-wrapper {
                    width: 80px;
                    height: 80px;
                    background: var(--orange);
                    color: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 25px rgba(255, 106, 0, 0.3);
                }

                .highlight-main .bento-icon-wrapper :global(svg) {
                    width: 40px;
                    height: 40px;
                }

                .highlight-main .bento-title {
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                }

                .highlight-main .bento-desc {
                    font-size: 1.15rem;
                    max-width: 90%;
                }

                .highlight-wide {
                    grid-column: span 2;
                    flex-direction: row;
                    align-items: center;
                    gap: 32px;
                    background: var(--navy);
                    color: white;
                }

                .highlight-wide .bento-title {
                    color: white;
                    margin-bottom: 8px;
                    font-size: 1.5rem;
                }
                
                .highlight-wide .bento-desc {
                    color: rgba(255,255,255,0.8);
                }

                .highlight-wide .bento-icon-wrapper {
                    margin-bottom: 0;
                    flex-shrink: 0;
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--orange);
                    width: 72px;
                    height: 72px;
                }

                .highlight-wide .bento-icon-wrapper :global(svg) {
                    width: 32px;
                    height: 32px;
                }

                /* Responsive */
                @media (max-width: 1024px) {
                    .highlight-main .bento-title { font-size: 1.75rem; }
                    .highlight-main { padding: 36px; }
                    .highlight-wide { flex-direction: column; align-items: flex-start; gap: 24px; }
                }

                @media (max-width: 991px) {
                    .bento-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .highlight-wide {
                        grid-column: span 2;
                    }
                }

                @media (max-width: 767px) {
                    .bento-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .bento-card, .highlight-main, .highlight-wide {
                        grid-column: span 1 !important;
                        grid-row: span 1 !important;
                        padding: 24px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0;
                    }
                    
                    .highlight-main .bento-title {
                        font-size: 1.5rem;
                    }
                    .highlight-wide .bento-title {
                        font-size: 1.35rem;
                    }
                    .highlight-wide .bento-icon-wrapper {
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </section>
    );
}
