import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Car Key Duplication Boise | Spare Auto Keys Made',
    description: 'Need a spare car key in Boise? We offer fast and affordable car key cloning, transponder key duplication, and fobs cloning for all major vehicle brands.',
};

export default function CarKeyCopyPage() {
    return (
        <>
            <HeroSection
                headline="Car Key Copying"
                headlineAccent="Get a Spare Before You Need It"
                subheadline="Protect yourself against lockouts by getting a duplicate car key. We clone and duplicate transponder keys, fobs, and standard mechanical keys for all vehicles."

                bgImage={img('/images/hero-services.jpg')}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Professional Car Key Duplication</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Having only one key for your vehicle is a huge risk. If it's lost or broken, generating a key from scratch is significantly more expensive than duplicating an existing one. We make getting a spare key quick and affordable.</p>
                    <p style={{ marginBottom: '16px' }}>Whether you need a basic metal door key cut, a chipped transponder key cloned, or an extra push-to-start proximity fob programmed, our technicians can handle the duplication right at your location or home.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Cost-effective spare key creation</li>
                        <li>Transponder chip cloning</li>
                        <li>Laser key duplication</li>
                        <li>Smart key and fob duplication</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
