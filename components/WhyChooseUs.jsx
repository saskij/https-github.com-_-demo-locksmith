"use client";
import { t } from '../lib/translations';

export default function WhyChooseUs({ lang = 'en' }) {
    const tr = t(lang).whyChooseUs;

    const icons = [
        <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
        <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
        <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 15 15" /></svg>,
        <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
        <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    ];

    // Helper to render a card
    const renderCard = (reason, index) => (
        <div className="feature-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="feature-icon">
                {icons[index]}
            </div>
            <h3 className="feature-title">{reason.title}</h3>
            <p className="feature-desc">{reason.desc}</p>
        </div>
    );

    return (
        <section className="why-choose" style={{ padding: '100px 0', backgroundColor: 'var(--bg-light)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '70px' }}>
                    <h2 className="section-title">{tr.sectionTitle} <span style={{ color: 'var(--orange)' }}>{tr.sectionTitleAccent}</span></h2>
                    <p className="section-subtitle">{tr.sectionSubtitle}</p>
                </div>

                <div className="features-layout">
                    {/* Top Row: 2 cards centered */}
                    <div className="features-row features-row--top">
                        {tr.reasons.slice(0, 2).map((reason, index) => renderCard(reason, index))}
                    </div>

                    {/* Bottom Row: 3 cards evenly spaced */}
                    <div className="features-row features-row--bottom">
                        {tr.reasons.slice(2, 5).map((reason, index) => renderCard(reason, index + 2))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .features-layout {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                
                .features-row {
                    display: flex;
                    gap: 24px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .feature-card {
                    background: #ffffff;
                    padding: 24px 20px;
                    border-radius: 16px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0,0,0,0.02);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    border: 1px solid rgba(0, 0, 0, 0.04);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    flex: 1 1 280px;
                    max-width: 320px;
                    height: 100%;
                }

                .feature-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06), 0 2px 5px rgba(0,0,0,0.02);
                    border-color: rgba(255, 106, 0, 0.15);
                }

                .feature-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: rgba(255, 106, 0, 0.08);
                    color: var(--orange);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 16px;
                    transition: transform 0.3s ease, background 0.3s ease;
                }
                
                .feature-icon :global(svg) {
                    width: 24px;
                    height: 24px;
                }

                .feature-card:hover .feature-icon {
                    transform: scale(1.05);
                    background: rgba(255, 106, 0, 0.12);
                }

                .feature-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: var(--navy);
                    line-height: 1.3;
                }

                .feature-desc {
                    color: var(--text-light);
                    line-height: 1.5;
                    margin: 0;
                    font-size: 0.95rem;
                    opacity: 0.9;
                }

                @media (max-width: 767px) {
                    .features-layout {
                        gap: 16px;
                    }
                    .features-row {
                        flex-direction: column;
                        gap: 16px;
                    }
                    .feature-card {
                        min-width: 100%;
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
