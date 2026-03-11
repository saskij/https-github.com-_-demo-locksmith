import { t } from '../lib/translations';
import { img } from '../lib/basePath';

export default function CallToAction({ lang = 'en' }) {
    const tr = t(lang).cta;

    return (
        <section
            className="emergency-cta parallax"
            id="contact"
            style={{
                padding: '80px 0',
                backgroundImage: `url(${img('/images/cta-background.jpg')})`
            }}
        >
            <div className="emergency-cta__inner container">
                <div className="emergency-cta__pulse"></div>
                <h2 className="emergency-cta__title" style={{ fontSize: '2.5rem' }}>{tr.title}</h2>
                <p className="emergency-cta__subtitle" style={{ marginBottom: '40px', fontSize: '1.15rem' }}>{tr.subtitle}</p>
                <a href="tel:+12085551234" className="btn btn--primary btn--lg" style={{ fontSize: '1.1rem', padding: '16px 36px', display: 'inline-flex' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    {tr.callBtn}
                </a>
            </div>
        </section>
    );
}
