import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Kuna ID | 24/7 Fast Local Service',
    description: 'Emergency locksmith in Kuna, ID. Available 24/7 for house lockouts, car unlocks, and new lock installation.',
};

export default function KunaCityPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith in Kuna, ID"
                headlineAccent="Your Local Security Experts"
                subheadline="Fast and friendly locksmith services available 24/7 for the growing Kuna community."
                bgImage="/images/hero-city.png"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Kuna Emergency Locksmith</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>As Kuna expands, we’re committed to providing the community with reliable, around-the-clock locksmith services. We dispatch technicians quickly so you aren't left waiting.</p>
                    <p>We handle everything from simple residential lockouts and rekeys to extracting broken keys from ignitions.</p>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
