import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Nampa ID | Lockouts & Rekeying',
    description: 'Top-rated emergency locksmith serving Nampa, ID. Professional auto and home unlocking with local technicians.',
};

export default function NampaCityPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith in Nampa, ID"
                headlineAccent="Trusted Canyon County Service"
                subheadline="Providing affordable and fast emergency locksmith services to all of Nampa and Canyon County."
                bgImage="/https-github.com-_-demo-locksmith/images/hero-city.png"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Reliable Nampa Locksmith</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Nampa residents deserve a locksmith they can trust. We offer upfront pricing and lightning-fast response times for car lockouts, lost keys, and broken deadbolts.</p>
                    <p>From downtown Nampa to the rural outskirts, our mobile service vehicles are fully stocked to fix your lock issue on the first visit.</p>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
