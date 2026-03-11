import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';

export const metadata = {
    title: 'Ignition Repair Boise | Ignition Switch Fixes',
    description: 'Key won\'t turn in the ignition? Our mobile locksmiths repair and replace jammed or broken automotive ignitions directly at your location in Boise.',
};

export default async function IgnitionRepairPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.ignitionRepair;
    const serviceImage = img('/images/service-ignition-repair.jpg');

    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}
                bgImage={img('/images/hero-services.jpg')}
            />
            <section className="container" style={{ position: 'relative', zIndex: '10', maxWidth: '800px' }}>
                <div style={{ 
                    marginTop: '-120px', 
                    marginBottom: '40px', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    border: '4px solid white',
                    backgroundColor: 'white',
                    maxWidth: '266px',
                    margin: '-120px auto 40px'
                }}>
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
