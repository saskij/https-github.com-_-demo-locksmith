import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Car Key Programming Boise | Transponder & Fob Syncing',
    description: 'Expert car key programming in Boise. We sync transponder chips, smart keys, and remote fobs to your vehicle’s immobilizer system. Dealer quality at lower prices.',
};

export default function CarKeyProgrammingPage() {
    return (
        <>
            <HeroSection
                headline="Car Key Programming"
                headlineAccent="Fobs & Transponders Synced"
                subheadline="Purchased a key online or need a new fob synced to your car? We offer dealer-level key programming directly at your vehicle's location."

                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/services-hero.jpeg' : '/images/services-hero.jpeg'}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Advanced Auto Key Programming</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Modern vehicles use complex immobilizer systems. A physically cut key will turn the ignition, but the engine won't start unless the transponder chip inside the key is electronically programmed to match your car’s Engine Control Unit (ECU).</p>
                    <p style={{ marginBottom: '16px' }}>Our automotive locksmiths carry advanced OBD2 programming tools to pair new remote fobs, smart proximity keys, and standard transponder keys to over 95% of vehicles on the road today—at a fraction of dealership prices.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Push-to-start smart key programming</li>
                        <li>Transponder immobilizer syncing</li>
                        <li>Remote keyless entry pairing</li>
                        <li>Erasing old or stolen keys from memory</li>
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
