import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Car Key Repair Boise | Fob & Shell Fixes',
    description: 'Broken car key or damaged fob? We repair cracked shells, replace dead batteries, and fix unresponsive buttons for all vehicle remotes in Boise.',
};

export default function CarKeyRepairPage() {
    return (
        <>
            <HeroSection
                headline="Car Key Repair"
                headlineAccent="Fob & Shell Restoration"
                subheadline="Don't spend hundreds on a new key if your current one can be fixed. We repair cracked shells, broken blades, and unresponsive remote buttons."

                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/services-hero.jpeg' : '/images/services-hero.jpeg'}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Professional Key Refurbishing</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Car keys go through a lot. Whether the plastic shell has cracked, the metal blade has snapped, or the lock/unlock buttons have stopped working, a full replacement isn't always necessary. We offer expert key repair and refurbishing services.</p>
                    <p style={{ marginBottom: '16px' }}>Our technicians can extract a snapped metal blade from your ignition, transplant the internal electronics into a brand-new, durable plastic shell, and solder broken micro-switches to restore full functionality to your expensive smart key.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Broken shell replacement</li>
                        <li>Button tact-switch soldering and repair</li>
                        <li>Transponder chip transplantation</li>
                        <li>Snapped blade extraction and replacement</li>
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
