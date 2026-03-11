import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';

export const metadata = {
    title: 'Car Key Duplication Boise | Spare Auto Keys Made',
    description: 'Need a spare car key in Boise? We offer fast and affordable car key cloning, transponder key duplication, and fobs cloning for all major vehicle brands.',
};

export default async function CarKeyCopyPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.carKeyCopy;
    const serviceImage = img('/images/service-car-key-replacement.jpg');

    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}
                bgImage={serviceImage}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <div style={{ marginBottom: '40px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <Image 
                        src={serviceImage} 
                        alt={tr.title} 
                        width={800} 
                        height={450} 
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    {tr.paragraphs.map((p, i) => (
                        <p key={i} style={{ marginBottom: '16px' }}>{p}</p>
                    ))}
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        {tr.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
            <TrustSection lang={lang} />
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
