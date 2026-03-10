import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Car Key Replacement Boise | Cut & Program New Keys',
    description: 'Lost your car keys in Boise? Our mobile auto locksmiths can cut and program a brand new transponder, fob, or smart key on the spot for all vehicle makes.',
};

export default function CarKeyReplacementPage() {
    return (
        <>
            <HeroSection
                headline="Car Key Replacement"
                headlineAccent="Lost Keys? No Problem."
                subheadline="We cut and program new car keys on location. Avoid the dealership tow and save money with our mobile auto locksmith service."

                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/services-hero.jpeg' : '/images/services-hero.jpeg'}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Mobile Car Key Making Service</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Losing the only key to your vehicle is stressful, but you don't need to tow your car to a dealership. Our fully equipped mobile locksmith vans come directly to your location in the Boise Metro Area to generate a brand new key from scratch.</p>
                    <p style={{ marginBottom: '16px' }}>Our licensed automotive technicians have the specialized tools and software required to cut high-security laser keys and program transponder chips directly to your car's computer system (ECU).</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Transponder chip key programming</li>
                        <li>High-security laser cut keys</li>
                        <li>Proximity / Smart Key Fob generation</li>
                        <li>Key generation from VIN or door lock decoding</li>
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
