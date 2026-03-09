import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Broken Key Extraction Boise | Key Removal Services',
    description: 'Key broken in the lock or ignition? We safely extract broken keys without damaging your locks and can cut a replacement on the spot in Boise.',
};

export default function BrokenKeyExtractionPage() {
    return (
        <>
            <HeroSection
                headline="Broken Key Extraction"
                headlineAccent="Safe Key Removal Service"
                subheadline="Did your key snap off in the door, ignition, or padlock? We safely extract broken pieces and can cut you a new key immediately."
            
                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/services-hero.jpeg' : '/images/services-hero.jpeg'}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Emergency Key Extraction</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>A key snapping off inside a lock is a frustrating experience that can happen to anyone due to wear, tear, or extreme weather. Trying to dig it out yourself usually pushes the broken piece further in and ruins the lock mechanism.</p>
                    <p style={{ marginBottom: '16px' }}>Our specialists use professional extraction tools to safely grip and remove broken key fragments from house doors, business entryways, and vehicle ignitions without damaging the internal lock pins.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Safe extraction from all lock types</li>
                        <li>Ignition key removal</li>
                        <li>On-site replacement key cutting</li>
                        <li>Lock cylinder repair and lubrication</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}
