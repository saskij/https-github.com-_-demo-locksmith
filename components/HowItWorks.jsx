import { t } from '../lib/translations';

export default function HowItWorks({ lang = 'en' }) {
    const tr = t(lang).howItWorks;

    const icons = [
        <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
        <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
        <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>,
    ];

    return (
        <section className="how-it-works">
            <div className="container">
                <h2 className="section-title">{tr.sectionTitle} <span style={{ color: 'var(--orange)' }}>{tr.sectionTitleAccent}</span></h2>
                <p className="section-subtitle">{tr.sectionSubtitle}</p>
                <div className="hiw-grid">
                    {tr.steps.map((step, idx) => (
                        <div key={idx} className="hiw-step fade-up">
                            <div className="hiw-step__icon-wrapper">
                                <div className="hiw-step__icon">{icons[idx]}</div>
                                <div className="hiw-step__num">{idx + 1}</div>
                            </div>
                            <h3 className="hiw-step__title">{step.title}</h3>
                            <p className="hiw-step__desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
