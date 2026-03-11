import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Eagle ID | Premium Security Services',
    description: 'Top-tier locksmith services for Eagle, ID. High-security locks, smart locks, and fast emergency lockouts.',
};

export default function EagleCityPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith in Eagle, ID"
                headlineAccent="Premium Lock Services"
                subheadline="Upgrading security for Eagle homes and responding 7 AM – 11 PM to lockout emergencies."
                showImage={false}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Eagle Residential & Auto Locksmith</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>For homes and businesses in Eagle, we specialize in high-security lock installations, smart home integrations, and damage-free lockout resolutions.</p>
                    <p>Whether you need a luxury vehicle unlocked or a commercial building rekeyed, our expert technicians deliver premium service.</p>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
