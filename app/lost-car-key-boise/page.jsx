import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToAction from '../../components/CallToAction';
import TrustSection from '../../components/TrustSection';
import StickyBar from '../../components/StickyBar';
import Script from 'next/script';

export const metadata = {
    title: 'Lost Car Key Boise ID | Replace Missing Keys Fast On-Site',
    description: 'Lost your only car key in Boise, Idaho? Don\'t panic! We provide same-day lost car key replacement for all makes and models. Fast mobile response 7 AM – 11 PM.',
    alternates: {
        canonical: 'https://carkeymastersboise.com/lost-car-key-boise',
    }
};

export default function LostCarKeyBoise() {
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
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Locksmith Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lost Car Key Replacement"
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
                    headline="Lost Your Car Keys?"
                    headlineAccent="Boise Idaho"
                    subheadline="Don't Tow It! We Replace All Lost Keys at Your Location"
                    bgImage="/images/hero-services.jpg"
                />
                
                <section className="container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Lost Car Key Boise</h2>
                    
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '24px' }}>
                            Discovering that you've <strong>lost your car keys</strong> is a sinking feeling that usually happens at the worst possible time. Whether you were hiking up Table Rock, shopping at The Village in <strong>Meridian</strong>, or just finished a shift in <strong>Downtown Boise</strong>, being without your only set of keys means you're stranded. For the fastest solution to a <strong>lost car key Boise</strong> situation, <strong>Car Key Masters</strong> offers a specialized "All Keys Lost" service. We eliminate the need for an expensive dealership tow by cutting and programming brand new keys right where your car is parked.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>What to Do When All Keys Are Lost?</h2>
                        <p style={{ marginBottom: '24px' }}>
                            If you've searched everywhere and still can't find your keys, don't worry. Our automotive locksmiths follow a proven process to get you back on the road in the <strong>Treasure Valley</strong>:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Non-Destructive Entry:</strong> If your car is locked, we'll safely unlock it using professional tools without damaging the door or window seals.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Lock Decoding:</strong> We use Lishi tools or specialized software to decode the wafers in your lock cylinder, determining the exact mechanical bitting for your new key.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Precision Key Cutting:</strong> Our mobile units are equipped with CNC laser cutters that produce a "factory fresh" key that works as well as the original.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Full Electronic Sync:</strong> Once the mechanical key is ready, we program the transponder chip or smart fob to your car's computer.</span>
                            </li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Why You Should NEVER Call a Dealership First</h2>
                        <div style={{ background: '#fff5f0', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255, 107, 0, 0.1)', marginBottom: '40px' }}>
                            <p style={{ marginBottom: '16px' }}>While your local Boise dealership can replace keys, the process is often a logistical nightmare for a customer who has lost all their keys:</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div><strong>Dealership Hassle:</strong> Requires you to tow your car to them, often takes 3-5 business days to order parts, and charges premium "service center" rates.</div>
                                <div><strong>The Locksmith Advantage:</strong> We come to your driveway, finish the job in about 45 minutes, and usually cost 30-50% less than the total dealer bill.</div>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Lost Smart Keys & Proximity Fobs</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Modern "Push-to-Start" vehicles present a unique challenge when all keys are lost. These systems require advanced security bypass procedures. Our technicians are trained in high-level programming for:
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', padding: 0, listStyle: 'none' }}>
                            <li>✓ Toyota Smart Keys (including proxies)</li>
                            <li>✓ Ford Intelligent Access Fobs</li>
                            <li>✓ Nissan Intelligent Keys</li>
                            <li>✓ Chrysler/Jeep/Dodge FOBIK Keys</li>
                            <li>✓ Honda Sensing Keyless Remotes</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Rapid Lost Key Response in Boise</h2>
                        <p style={{ marginBottom: '24px' }}>
                            We know that time is of the essence when your vehicle is unusable. Our mobile units are ready for immediate dispatch across:
                        </p>
                        <p><strong>Boise • Meridian • Eagle • Nampa • Caldwell • Kuna • Garden City</strong></p>
                    </div>
                </section>

                <div style={{ background: '#f8f9fb', padding: '80px 20px' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '48px' }}>Lost Car Key FAQ</h2>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {[
                                { q: "Can you make a key if I don't have the original?", a: "Yes! We specialize in 'All Keys Lost' situations. We generate the key data directly from your car's lock cylinder or computer system." },
                                { q: "Do I need to tow my car to you?", a: "NEVER. We are a 100% mobile service. We bring the tools, the technology, and the key blanks directly to wherever your vehicle is located in Boise." },
                                { q: "What should I have ready when I call?", a: "Please have your vehicle's Year, Make, Model, and your exact location. You will also need to show a valid ID and proof of ownership when we arrive." },
                                { q: "Can you delete my lost key so no one else can use it?", a: "Yes. During the programming process, we can erase all previously stored keys from your car's memory, ensuring that only the new keys we provide will start the engine." }
                            ].map((faq, idx) => (
                                <div key={idx} style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid #eee' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--navy)' }}>{faq.q}</h3>
                                    <p style={{ color: 'var(--text-dark)' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '24px', fontStyle: 'italic' }}>Don't let a lost key ruin your week. Call Car Key Masters for immediate Boise service.</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                            <a href="/en/services/car-key-replacement" style={{ color: 'var(--orange)', fontWeight: '600' }}>New Replacement Keys</a>
                            <a href="/en/services/car-key-programming" style={{ color: 'var(--orange)', fontWeight: '600' }}>Electronic Key Sync</a>
                            <a href="/en/services/car-lockout" style={{ color: 'var(--orange)', fontWeight: '600' }}>Safe Vehicle Entry</a>
                            <a href="/en/service-areas/boise-locksmith" style={{ color: 'var(--orange)', fontWeight: '600' }}>Boise Service Areas</a>
                        </div>
                    </div>
                </div>

                <TrustSection lang="en" />
                <CallToAction lang="en" />
            </main>
            <Footer lang="en" />
            <StickyBar lang="en" />
            <Script
                id="schema-lost"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
