import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Semi Truck Lockout Boise | Heavy Duty Towing Alternative',
    description: 'Locked out of your semi-truck or big rig in Boise? We provide fast, damage-free emergency lockout services for commercial trucks and fleets.',
};

export default function SemiTruckLockoutPage() {
    return (
        <>
            <HeroSection
                headline="Semi Truck Lockout"
                headlineAccent="Fast Service For Big Rigs"
                subheadline="Time is money. When you're locked out of your semi-truck or commercial vehicle, we provide rapid, damage-free entry to get you moving again."

                bgImage={img('/images/2.jpg')}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Commercial Truck Unlocking</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>For commercial truck drivers, every minute spent locked out of the cab means lost revenue and delayed shipments. We understand the urgency and provide priority dispatch for semi-trucks, box trucks, and commercial fleets.</p>
                    <p style={{ marginBottom: '16px' }}>Heavy-duty trucks have different locking mechanisms and significantly sturdier doors than standard passenger vehicles. Our technicians carry specialized long-reach and heavy-duty air wedge tools designed explicitly for commercial cabs like Freightliner, Peterbilt, Kenworth, Volvo, and Mack.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Non-destructive cab unlocking</li>
                        <li>Service for all major commercial truck brands</li>
                        <li>Trailer lock removal and replacement</li>
                        <li>Fleet account billing available</li>
                    </ul>
                </div>
            </section>
            <TrustSection />
            <CallToAction />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
