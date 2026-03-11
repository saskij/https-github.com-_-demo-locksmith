import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import ServiceCards from '../../../../components/ServiceCards';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Boise ID | 24/7 Fast Emergency Service',
    description: 'Need a locksmith in Boise, ID? We offer 24/7 emergency auto, residential, and commercial locksmith services with rapid dispatch.',
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
                bgImage={img('/images/hero-city.png')}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    {tr.paragraphs.map((p, i) => (
                        <p key={i} style={{ marginBottom: i === 0 ? '16px' : '0' }}>{p}</p>
                    ))}
                </div>
            </section>
            <ServiceCards lang={lang} />
            <TrustSection lang={lang} />
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
