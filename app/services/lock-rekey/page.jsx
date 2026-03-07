import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Lock Rekeying Service Boise | Affordable Key Replacements',
    description: 'Fast and affordable lock rekeying services in Boise. Keep your existing hardware while ensuring old keys no longer work. 24/7 service.',
};

export default function LockRekeyPage() {
    return (
        <>
            <HeroSection
                headline="Lock Rekey Service"
                headlineAccent="New Keys, Same Locks"
                subheadline="Moved into a new home or lost a key? We rekey your existing locks so old keys no longer work, saving you money on full lock replacements."
            
                bgImage="/https-github.com-_-demo-locksmith/images/services-hero.jpg"
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Professional Lock Rekeying</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Rekeying is the most cost-effective way to secure your home or business after a change in occupancy or a lost key. Instead of replacing the entire lock mechanism, our technicians adjust the internal pins to fit a brand new key.</p>
                    <p style={{ marginBottom: '16px' }}>Whether you’ve just purchased a new house, experienced a break-in, or need to restrict access for former employees, our mobile rekeying service provides immediate peace of mind.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Master key systems setup</li>
                        <li>Cost-effective alternative to replacement</li>
                        <li>Same-day mobile service</li>
                        <li>Residential and commercial grade locks</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
