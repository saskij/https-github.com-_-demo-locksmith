import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Ignition Rekey Boise | Match Keys to Ignition',
    description: 'Ignition replaced? We rekey ignition cylinders to match your existing car door keys, saving you the hassle of carrying two different keys.',
};

export default function IgnitionRekeyPage() {
    return (
        <>
            <HeroSection
                headline="Ignition Rekeying"
                headlineAccent="One Key For Everything"
                subheadline="If your ignition was replaced, we can rekey the new cylinder to match your original door keys so you don't have to carry two keys."

                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/services-hero.jpeg' : '/images/services-hero.jpeg'}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Automotive Cylinder Rekeying</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>When an ignition cylinder fails and needs to be replaced, the new part comes with its own unique set of keys. This leaves you in the annoying position of needing one key to unlock the doors and a completely different key to start the engine.</p>
                    <p style={{ marginBottom: '16px' }}>Our automotive locksmiths solve this problem by rekeying the new ignition cylinder. We disassemble the ignition and swap out the internal wafers to perfectly match the cuts of your original key, restoring a seamless, single-key experience.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Ignition cylinder rekeying</li>
                        <li>Door lock cylinder rekeying</li>
                        <li>Trunk lock matching</li>
                        <li>Eliminate the need for two separate keys</li>
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
