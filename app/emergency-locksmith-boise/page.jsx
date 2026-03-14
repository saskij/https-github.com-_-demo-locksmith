import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToAction from '../../components/CallToAction';
import TrustSection from '../../components/TrustSection';
import StickyBar from '../../components/StickyBar';
import Script from 'next/script';

export const metadata = {
    title: 'Emergency Locksmith Boise | 24/7 Mobile Lockout Services',
    description: 'Stuck without a key? Emergency locksmith service in Boise, ID. We offer rapid response for car lockouts, trunk opening, and broken key extraction 7 AM – 11 PM daily.',
    alternates: {
        canonical: 'https://carkeymastersboise.com/emergency-locksmith-boise',
    }
};

export default function EmergencyLocksmithBoise() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Locksmith"],
        "name": "Car Key Masters Boise",
        "telephone": "+12086868099",
        "url": "https://carkeymastersboise.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Boise",
            "addressRegion": "ID",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.6150,
            "longitude": -116.2023
        },
        "openingHours": "Mo-Su 07:00-23:00",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Locksmith Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Emergency Locksmith"
                    }
                }
            ]
        }
    };

    return (
        <div lang="en">
            <Header lang="en" />
            <main>
                <HeroSection 
                    lang="en"
                    headline="Emergency Locksmith"
                    headlineAccent="Boise Idaho"
                    subheadline="Fast Mobile Response for Commercial & Automotive Emergencies"
                    bgImage="/images/hero-services.jpg"
                />
                
                <section className="container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Emergency Locksmith Boise</h1>
                    
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '24px' }}>
                            Lock and key emergencies don't wait for convenient business hours. Whether it's a freezing morning in <strong>Caldwell</strong>, a busy afternoon at the <strong>Boise Airport</strong>, or a late evening in <strong>Nampa</strong>, being locked out of your vehicle or business is a high-stress situation. As the leading <strong>emergency locksmith Boise</strong> provider, <strong>Car Key Masters</strong> is committed to rapid response times and damage-free solutions. We understand that "emergency" means you need a technician on-site <em>now</em>, not tomorrow.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Urgent Situations We Handle Daily</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Our team is equipped to handle a wide range of critical locksmith needs across the Treasure Valley:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Car Lockouts:</strong> Keys locked in the cabin or trunk? We use non-destructive entry methods to get you back in.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Broken Key Extraction:</strong> Snapped your key in the door or ignition? We extract the fragment and cut a new key on-site.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Lost Master Keys:</strong> Total loss of all keys for your car or business? We can regenerate them from scratch.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Business Security Breach:</strong> Immediate rekeying services if your commercial keys have been compromised.</span>
                            </li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>The "Car Key Masters" Emergency Advantage</h2>
                        <div style={{ background: '#f8faff', padding: '40px', borderRadius: '24px', marginBottom: '40px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '10px' }}>15-45 Min Response</h3>
                                    <p>We leverage local technicians stationed throughout Boise and Meridian to ensure the fastest possible arrival.</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '10px' }}>Specialized Mobile Units</h3>
                                    <p>Our vans are literal mobile locksmith shops, carrying thousands of key blanks and high-end laser cutters.</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '10px' }}>Verified Professionals</h3>
                                    <p>Every technician is licensed, insured, and background-checked for your absolute peace of mind.</p>
                                </div>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Supported Vehicle Brands & Systems</h2>
                        <p style={{ marginBottom: '24px' }}>
                            We provide emergency support for nearly all automotive systems in Idaho, including:
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', padding: 0, listStyle: 'none' }}>
                            <li style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>Toyota / Lexus</li>
                            <li style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>Ford / Lincoln</li>
                            <li style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>Honda / Acura</li>
                            <li style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>Nissan / Infinity</li>
                            <li style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>GM / Chevy / Cadillac</li>
                            <li style={{ padding: '12px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>Chrysler / Jeep / Dodge</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Our Coverage in Boise, Idaho</h2>
                        <p style={{ marginBottom: '24px' }}>
                            No matter where you are in the <strong>Treasure Valley</strong>, we have you covered. Our emergency services extend to:
                        </p>
                        <div style={{ columns: '2', gap: '20px' }}>
                            <p><strong>• Downtown Boise</strong></p>
                            <p><strong>• Boise Bench & West Boise</strong></p>
                            <p><strong>• Meridian & Eagle</strong></p>
                            <p><strong>• Nampa & Caldwell</strong></p>
                            <p><strong>• Kuna & Star</strong></p>
                            <p><strong>• Garden City</strong></p>
                        </div>
                    </div>
                </section>

                <div style={{ background: 'var(--navy)', padding: '80px 20px', color: 'white' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', textAlign: 'center', marginBottom: '48px' }}>Emergency Service FAQ</h2>
                        <div style={{ display: 'grid', gap: '30px' }}>
                            {[
                                { q: "Do you offer emergency services on weekends?", a: "Yes! We are available 7 days a week, including holidays, from 7 AM to 11 PM to handle any lock or key emergency in Boise." },
                                { q: "Can you unlock my car without causing damage?", a: "ABSOLUTELY. We use professional entry tools like air wedges and specialized long-reach tools that are designed to unlock vehicles without scratching paint or damaging seals." },
                                { q: "How do I prove I own the vehicle or business?", a: "For your safety and ours, we require a valid ID and proof of ownership (like a registration or business license) before performing any emergency entry or key generation." },
                                { q: "What should I do if my key is stuck in the ignition?", a: "Do NOT force it! Wiggling or pulling with pliers can damage the delicate internal wafers of the ignition cylinder. Call us immediately for a safe extraction." }
                            ].map((faq, idx) => (
                                <div key={idx}>
                                    <h3 style={{ color: 'var(--orange)', fontSize: '1.3rem', marginBottom: '12px' }}>{faq.q}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.7' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Related Services</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                            <a href="/en/services/car-lockout" style={{ color: 'var(--orange)', fontWeight: '700' }}>Car Lockout Service</a>
                            <a href="/en/services/broken-key-extraction" style={{ color: 'var(--orange)', fontWeight: '700' }}>Broken Key Extraction</a>
                            <a href="/en/services/car-key-replacement" style={{ color: 'var(--orange)', fontWeight: '700' }}>New Key Generation</a>
                            <a href="/en/service-areas/boise-locksmith" style={{ color: 'var(--orange)', fontWeight: '700' }}>Boise Service Area</a>
                        </div>
                    </div>
                </div>

                <TrustSection lang="en" />
                <CallToAction lang="en" />
            </main>
            <Footer lang="en" />
            <StickyBar lang="en" />
            <Script
                id="schema-emergency"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
