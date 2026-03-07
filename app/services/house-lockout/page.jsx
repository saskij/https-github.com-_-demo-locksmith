import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'House Lockout Service Boise | 24/7 Residential Locksmith',
    description: 'Locked out of your house in Boise? Our emergency residential locksmiths provide fast, damage-free home unlocking services 24/7.',
};

export default function HouseLockoutPage() {
    return (
        <>
            <HeroSection
                headline="House Lockout Service"
                headlineAccent="We'll Get You Back Inside"
                subheadline="Locked out of your home? Our residential technicians provide fast, damage-free entry to get you safely back inside your house."
            
                bgImage="/images/services-hero.jpg"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Emergency Residential Unlocking</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>There’s nothing worse than arriving home only to realize you’ve lost your keys or left them inside. Our emergency house lockout service is designed to get you back indoors quickly and safely, no matter the time of day.</p>
                    <p style={{ marginBottom: '16px' }}>Our licensed technicians are trained in picking all types of residential locks, including deadbolts, smart locks, and high-security cylinders. We prioritize non-destructive entry methods to save you the cost of replacing your hardware.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Non-destructive lock picking</li>
                        <li>Keyless entry bypass</li>
                        <li>Broken key extraction from house locks</li>
                        <li>On-site key duplication and lock replacement if needed</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
