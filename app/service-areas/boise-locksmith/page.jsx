import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import ServiceCards from '../../../components/ServiceCards';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Boise ID | 24/7 Fast Emergency Service',
    description: 'Need a locksmith in Boise, ID? We offer 24/7 emergency auto, residential, and commercial locksmith services with rapid dispatch.',
};

export default function BoiseCityPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith in Boise, ID"
                headlineAccent="Local & Fast Response"
                subheadline="Your trusted local locksmith in Boise. Available 24/7 for car lockouts, house unlocking, and lock rekeying."
                bgImage="/https-github.com-_-demo-locksmith/images/hero-city.png"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">24/7 Locksmith Services in Boise</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>When you are locked out in Boise, you need a local locksmith who can arrive quickly. Our mobile units are stationed throughout the city, from Downtown and the North End to Southeast Boise and the Bench.</p>
                    <p>We provide full-service solutions including auto lockouts, residential rekeying, and commercial security upgrades specifically tailored to Boise residents and businesses.</p>
                </div>
            </section>
            <ServiceCards />
            <TrustSection />
            <CallToAction />
        </>
    );
}
