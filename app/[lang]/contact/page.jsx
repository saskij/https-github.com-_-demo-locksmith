import { t } from '../../../lib/translations';
import HeroSection from '../../../components/HeroSection';
import { img } from '../../../lib/basePath';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Contact Us | Emergency Locksmith Boise',
    description: 'Need a locksmith now? Contact our 7 AM – 11 PM emergency team in Boise for immediate assistance with car, home, or commercial lockouts.',
};

export default async function ContactPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.contact;
    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}

                bgImage={img('/images/hero-contact.jpg')}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '16px' }}>{tr.sectionSubtitle}</p>

                <div style={{ marginTop: '48px', padding: '40px', background: 'var(--white)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--navy)', fontSize: '1.5rem', marginBottom: '16px' }}>{tr.cardTitle}</h3>
                    <p style={{ color: 'var(--text-dark)', marginBottom: '24px' }}>{tr.serving}</p>
                    <a href="tel:2086868099" className="btn btn--primary" style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '12px',
                        fontSize: '1.25rem',
                        padding: '18px 40px',
                        borderRadius: '50px',
                        boxShadow: '0 10px 25px rgba(249, 115, 22, 0.3)',
                        transition: 'all 0.3s ease'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        (208) 686-8099
                    </a>
                </div>
            </section>
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
