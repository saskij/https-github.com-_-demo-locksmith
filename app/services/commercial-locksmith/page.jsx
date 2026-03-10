import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Commercial Locksmith Boise | Business Security Services',
    description: 'Protect your business with our commercial locksmith services in Boise. Master keys, panic bars, electronic access, and high-security locks.',
};

export default function CommercialLocksmithPage() {
    return (
        <>
            <HeroSection
                headline="Commercial Locksmith"
                headlineAccent="Business Security Solutions"
                subheadline="Comprehensive locksmith services for offices, retail stores, and commercial properties. Secure your business with our expert local technicians."
                bgImage="/images/hero-commercial.png"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Commercial Hardware & Security</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Your business requires tailored security solutions to protect your assets, employees, and data. As a fully licensed commercial locksmith in Boise, we provide enterprise-grade lock hardware and access control solutions tailored to your building’s specific needs.</p>
                    <p style={{ marginBottom: '16px' }}>From rekeying entire office floors to repairing push-bars on emergency exits to ensure fire code compliance, we are equipped to handle commercial jobs of all sizes with minimal disruption to your daily operations.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Master key system design and implementation</li>
                        <li>Panic bar / Crash bar installation and repair</li>
                        <li>High-security commercial cylinders</li>
                        <li>Keypad and electronic access control setups</li>
                        <li>Storefront and glass door lock repair</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
