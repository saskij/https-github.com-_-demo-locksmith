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
                    gap: 30px;
                }
                
                .features-row {
                    display: flex;
                    gap: 30px;
                    justify-content: center;
                }
                
                .features-row--bottom {
                    flex-wrap: nowrap;
                }

                .feature-card {
                    background: linear-gradient(145deg, #ffffff 0%, #fafcff 100%);
                    padding: 40px 32px;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0,0,0,0.02);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    border: 1px solid rgba(226, 232, 240, 0.8);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
                    flex: 1;
                    max-width: 500px;
                    height: 100%;
                }

                .feature-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0,0,0,0.04);
                    border-color: rgba(255, 106, 0, 0.2);
                }

                .feature-icon {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(255, 106, 0, 0.15) 0%, rgba(255, 106, 0, 0.05) 100%);
                    color: var(--orange);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    transition: transform 0.3s ease;
                }
                
                .feature-icon :global(svg) {
                    width: 32px;
                    height: 32px;
                }

                .feature-card:hover .feature-icon {
                    transform: scale(1.1);
                    background: linear-gradient(135deg, rgba(255, 106, 0, 0.2) 0%, rgba(255, 106, 0, 0.1) 100%);
                }

                .feature-title {
                    font-size: 1.35rem;
                    font-weight: 800;
                    margin-bottom: 12px;
                    color: var(--navy);
                    line-height: 1.3;
                }

                .feature-desc {
                    color: var(--text-light);
                    line-height: 1.65;
                    margin: 0;
                    font-size: 1.05rem;
                }

                @media (max-width: 991px) {
                    .features-row {
                        flex-wrap: wrap;
                    }
                    .feature-card {
                        min-width: calc(50% - 15px);
                    }
                }

                @media (max-width: 767px) {
                    .features-layout {
                        gap: 20px;
                    }
                    .features-row {
                        flex-direction: column;
                        gap: 20px;
                    }
                    .feature-card {
                        min-width: 100%;
                        padding: 32px 24px;
                    }
                }
            `}</style>
        </section>
    );
}
