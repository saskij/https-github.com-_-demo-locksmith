import HeroSection from '../../../components/HeroSection';
import { img } from '../../../lib/basePath';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Contact Us | Emergency Locksmith Boise',
    description: 'Need a locksmith now? Contact our 24/7 emergency team in Boise for immediate assistance with car, home, or commercial lockouts.',
};

export default function ContactPage() {
    return (
        <>
            <HeroSection
                headline="Contact Us"
                headlineAccent="Available 24/7"
                subheadline="Need immediate assistance? We are always on call and ready to dispatch a technician to your location."
                bgImage={img('/images/6.jpg')}
            />
            <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">We don't use contact forms for emergencies. For the fastest response, please call us directly.</p>

                <div style={{ maxWidth: '400px', margin: '0 auto', background: 'var(--gray-bg)', padding: '40px', borderRadius: 'var(--radius)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--navy)' }}>24/7 Dispatch Center</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--orange)', marginBottom: '8px' }}>(208) 555-1234</p>
                    <p style={{ color: 'var(--gray-text)' }}>Serving Boise, Meridian, Nampa, Caldwell, Eagle, and Kuna.</p>
                </div>
            </section>
            <CallToAction />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
