import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import ServiceCards from '../../../../components/ServiceCards';
import CallToAction from '../../../../components/CallToAction';
import LocationSEOLayout from '../../../../components/LocationSEOLayout';

export const metadata = {
    title: 'Locksmith Boise ID | 7 AM – 11 PM Fast Emergency Service',
    description: 'Need a locksmith in Boise, ID? We offer 7 AM – 11 PM emergency auto, residential, and commercial locksmith services with rapid dispatch.',
};

export default async function BoiseCityPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.boise;
    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}
                bgImage={img('/images/hero-homepage.jpg')}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    {tr.paragraphs.map((p, i) => (
                        <p key={i} style={{ marginBottom: i === 0 ? '16px' : '0' }}>{p}</p>
                    ))}
                </div>
            </section>
            
            <LocationSEOLayout tr={tr} lang={lang} />

            <ServiceCards lang={lang} />
            <TrustSection lang={lang} />
            
            <section style={{ padding: '60px 0', background: 'var(--white)', borderTop: '1px solid #eee' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Discover More in Boise</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                        <a href="/car-key-replacement-boise" style={{ color: 'var(--orange)', fontWeight: '600' }}>Car Key Replacement Boise</a>
                        <a href="/car-key-programming-boise" style={{ color: 'var(--orange)', fontWeight: '600' }}>Car Key Programming Boise</a>
                        <a href="/emergency-locksmith-boise" style={{ color: 'var(--orange)', fontWeight: '600' }}>Emergency Locksmith Boise</a>
                        <a href="/mobile-locksmith-boise" style={{ color: 'var(--orange)', fontWeight: '600' }}>Mobile Locksmith Boise</a>
                        <a href="/lost-car-key-boise" style={{ color: 'var(--orange)', fontWeight: '600' }}>Lost Car Key Boise</a>
                    </div>
                </div>
            </section>

            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
