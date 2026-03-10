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
                    {tr.reasons.map((reason, index) => renderCard(reason, index))}
                </div>
            </div>

            <style jsx>{`
                .features-layout {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 32px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .feature-card {
                    background: #ffffff;
                    padding: 36px 32px;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.01);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    border: 1px solid rgba(0, 0, 0, 0.03);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    flex: 1 1 calc(33.333% - 22px); 
                    max-width: 350px;
                    min-width: 280px;
                    height: 100%;
                }

                .feature-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.03);
                }

                .feature-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: rgba(255, 106, 0, 0.1);
                    color: var(--orange);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    transition: transform 0.3s ease, background 0.3s ease;
                }
                
                .feature-icon :global(svg) {
                    width: 32px;
                    height: 32px;
                }

                .feature-card:hover .feature-icon {
                    background: rgba(255, 106, 0, 0.15);
                }

                .feature-title {
                    font-size: 1.25rem;
                    font-weight: 700; /* Bold */
                    margin-bottom: 12px;
                    color: var(--navy);
                    line-height: 1.3;
                }

                .feature-desc {
                    color: var(--text-light);
                    line-height: 1.6;
                    margin: 0;
                    font-size: 0.95rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2; /* Max 2 lines */
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                @media (max-width: 991px) {
                    .feature-card {
                        flex: 1 1 calc(50% - 16px);
                    }
                }

                @media (max-width: 767px) {
                    .features-layout {
                        flex-direction: column;
                        gap: 24px;
                        align-items: center;
                    }
                    .feature-card {
                        flex: 1 1 100%;
                        width: 100%;
                        max-width: 400px;
                    }
                    .feature-desc {
                        -webkit-line-clamp: 3; /* Allow slightly more text on mobile if needed */
                    }
                }
            `}</style>
        </section>
    );
}
