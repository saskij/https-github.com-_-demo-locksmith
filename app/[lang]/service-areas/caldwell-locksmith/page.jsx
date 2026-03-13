import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import ServiceCards from '../../../../components/ServiceCards';
import LocationSEOLayout from '../../../../components/LocationSEOLayout';

export const metadata = {
    title: 'Locksmith Caldwell ID | 7 AM – 11 PM Car & Home Lockouts',
    description: 'Fast, affordable locksmith in Caldwell, ID. Emergency auto unlocks, home rekeying, and commercial security.',
};

export default async function CaldwellCityPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.caldwell;
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
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
