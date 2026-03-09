import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'New Lock Installation Boise | Deadbolts & Smart Locks',
    description: 'Professional hardware and lock installation in Boise. Secure your home or business with high-quality deadbolts, smart locks, and keyless entry systems.',
};

export default function LockInstallationPage() {
    return (
        <>
            <HeroSection
                headline="Lock Installation"
                headlineAccent="Hardware Upgrades & Installs"
                subheadline="Improve your security with professional lock installations. We install deadbolts, smart locks, and high-security systems for homes and businesses."
            
                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/services-hero.jpeg' : '/images/services-hero.jpeg'}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Professional Lock Installation</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Upgrading your security is a crucial step in protecting your property. We offer professional installation services for all major brands and types of locks, ensuring they are fitted perfectly to your doors for maximum security.</p>
                    <p style={{ marginBottom: '16px' }}>From standard deadbolt reinforcements on residential front doors to complex electronic access control systems for commercial properties, our locksmiths handle installations with precision and care.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Smart locks and keyless entry systems</li>
                        <li>High-security deadbolt installation</li>
                        <li>Fresh door preparations and drilling</li>
                        <li>Commercial panic bars and exit devices</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
