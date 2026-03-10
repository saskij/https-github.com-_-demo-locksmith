import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Meridian ID | 24/7 Emergency Service',
    description: 'Fast locksmith services in Meridian, ID. Specializing in home lockouts, car key programming, and business locks.',
};

export default function MeridianCityPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith in Meridian, ID"
                headlineAccent="Rapid Dispatch 24/7"
                subheadline="Locked out in Meridian? Our local experts are ready to assist you instantly with damage-free unlocking."
                showImage={false}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Emergency Locksmith Meridian</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Meridian is growing fast, and so is the need for reliable security. Whether you're locked out at the Village or need the locks changed on your new Meridian home, our technicians arrive equipped to handle the job immediately.</p>
                    <p>We understand that emergencies don't wait for business hours, which is why our Meridian lockout service operates 24/7, 365 days a year.</p>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
