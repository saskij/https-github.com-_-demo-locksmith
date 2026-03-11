import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';

export const metadata = {
    title: 'Ignition Repair Boise | Ignition Switch Fixes',
    description: 'Key won\'t turn in the ignition? Our mobile locksmiths repair and replace jammed or broken automotive ignitions directly at your location in Boise.',
};

export default function IgnitionRepairPage() {
    return (
        <>
            <HeroSection
                headline="Ignition Repair"
                headlineAccent="Key Won't Turn?"
                subheadline="If your key is stuck, hard to turn, or completely jammed, our experts can rebuild or replace your vehicle's ignition cylinder on-site."

                bgImage={img('/images/hero-services.jpg')}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
                <h2 className="section-title">Mobile Automotive Ignition Solutions</h2>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginTop: '24px', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '16px' }}>Over time, the internal wafers inside your vehicle's ignition cylinder can wear down, bend, or break. When this happens, your key might get stuck, or the ignition will refuse to turn, leaving you stranded. Don't force it—forcing the key can snap it off entirely.</p>
                    <p style={{ marginBottom: '16px' }}>Instead of paying a premium for a dealership tow and repair, our mobile locksmiths come directly to you. We'll carefully remove the steering column housing to extract the damaged cylinder, clean and rebuild the internal tumblers, or install a brand-new ignition assembly.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '24px', margin: '24px 0', color: 'var(--navy)', fontWeight: '600' }}>
                        <li>Ignition cylinder rebuilding</li>
                        <li>Stuck key extraction</li>
                        <li>Full ignition switch replacement</li>
                        <li>Steering wheel lock release</li>
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
