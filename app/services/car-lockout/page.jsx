import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Car Lockout Service Boise | 7 AM – 11 PM Emergency Auto Locksmith',
    description: 'Locked out of your car in Boise? Our emergency auto locksmiths provide rapid response car lockout and key replacement services 7 AM – 11 PM.',
};

export default function CarLockoutPage() {
    return (
        <>
            <HeroSection
                headline="Car Lockout Service"
                headlineAccent="Fast Auto Unlocking"
                subheadline="Locked your keys in the car? We offer damage-free auto lockout services with a 15-minute response time in Boise."
                bgImage="/images/hero-auto.png"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Emergency Auto Locksmith</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Being locked out of your vehicle is frustrating and dangerous. Our mobile locksmith technicians are stationed throughout the Treasure Valley to provide the fastest car lockout service possible.</p>
                    <p style={{ marginBottom: '16px' }}>We use advanced, damage-free tools to unlock all makes and models, from older vehicles to modern cars with high-security locks. We can also handle trunk lockouts and broken key extractions on the spot.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Damage-free vehicle entry</li>
                        <li>Trunk unlocking</li>
                        <li>Transponder key programming available</li>
                        <li>All makes and models (Domestic & Imported)</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
