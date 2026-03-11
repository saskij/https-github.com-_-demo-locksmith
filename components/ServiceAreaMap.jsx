import Link from 'next/link';
import { t } from '../lib/translations';
import { BASE_PATH } from '../lib/basePath';

export const serviceAreasData = [
    { id: 'boise', path: '/service-areas/boise-locksmith' },
    { id: 'meridian', path: '/service-areas/meridian-locksmith' },
    { id: 'nampa', path: '/service-areas/nampa-locksmith' },
    { id: 'eagle', path: '/service-areas/eagle-locksmith' },
    { id: 'caldwell', path: '/service-areas/caldwell-locksmith' },
    { id: 'garden-city', path: '/service-areas/garden-city-locksmith' },
    { id: 'kuna', path: '/service-areas/kuna-locksmith' },
];

export default function ServiceAreaMap({ lang = 'en' }) {
    const tr = t(lang).serviceAreaMap;
    const langPrefix = `/${lang}`;

    return (
        <section className="area" id="service-area">
            <div className="container">
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <p className="section-subtitle">{tr.sectionSubtitle}</p>

                <div className="area__content">
                    <div className="area__map" style={{ overflow: 'hidden', borderRadius: '12px', height: '100%', minHeight: '350px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371458.1251392652!2d-116.63469145952011!3d43.43572851173822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aeff1660bdc79b%3A0x67ebd504d602a8b9!2sAda%20County%2C%20ID!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="area__info">
                        <ul className="area__cities">
                            {serviceAreasData.map((city) => (
                                <li key={city.id}>
                                    <Link href={`${langPrefix}${city.path}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                        {tr.cities[city.id]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: '16px', marginBottom: '24px', fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                            {tr.arrivalText}
                        </p>
                        <a href="tel:+12086868099" className="btn btn--primary btn--lg" style={{ fontSize: '1.1rem', padding: '16px 36px', display: 'inline-flex' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            {tr.callNow}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
