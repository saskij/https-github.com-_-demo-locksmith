import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Caldwell ID | 24/7 Car & Home Lockouts',
    description: 'Fast, affordable locksmith in Caldwell, ID. Emergency auto unlocks, home rekeying, and commercial security.',
};

export default function CaldwellCityPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith in Caldwell, ID"
                headlineAccent="24/7 Local Technicians"
                subheadline="Caldwell's trusted source for emergency lockout services and lock replacements."
                bgImage="/images/hero-city.png"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Caldwell Lock & Key Services</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Serving Caldwell and the greater 2C area, we ensure you're never stranded during a lockout. We pride ourselves on transparent pricing and rapid arrival times.</p>
                    <p>Our services include auto key programming, residential lock installations, and commercial master key systems.</p>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
