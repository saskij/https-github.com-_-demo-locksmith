import { t } from '../../../lib/translations';
import HeroSection from '../../../components/HeroSection';
import { img } from '../../../lib/basePath';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Contact Us | Emergency Locksmith Boise',
    description: 'Need a locksmith now? Contact our 24/7 emergency team in Boise for immediate assistance with car, home, or commercial lockouts.',
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

                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/hero-services.jpg' : '/images/hero-services.jpg'}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '16px' }}>{tr.sectionSubtitle}</p>

                <div style={{ marginTop: '48px', padding: '40px', background: 'var(--white)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--navy)', fontSize: '1.5rem', marginBottom: '16px' }}>{tr.cardTitle}</h3>
                    <p style={{ color: 'var(--text-dark)', marginBottom: '24px' }}>{tr.serving}</p>
                    <a href="tel:2086868099" className="btn btn--primary btn--large" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                        📞 (208) 686-8099
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
