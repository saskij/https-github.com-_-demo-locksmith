import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToAction from '../../components/CallToAction';
import TrustSection from '../../components/TrustSection';
import StickyBar from '../../components/StickyBar';
import Script from 'next/script';

export const metadata = {
    title: 'Car Key Programming Boise ID | Professional Remote & Fob Sync',
    description: 'Need car key programming in Boise, ID? Our mobile locksmith technicians program transponder keys, high-security laser keys, and smart fobs on-site. Fast 7 AM – 11 PM service.',
    alternates: {
        canonical: 'https://carkeymastersboise.com/car-key-programming-boise',
    }
};

export default function CarKeyProgrammingBoise() {
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
                        "name": "Car Key Programming"
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
                    headline="Car Key Programming"
                    headlineAccent="Boise Idaho"
                    subheadline="On-Site Transponder & Smart Key Syncing Service"
                    bgImage="/images/hero-services.jpg"
                />
                
                <section className="container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Car Key Programming Boise</h1>
                    
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '24px' }}>
                            Modern vehicles rely on complex electronic security systems to prevent theft. If your key's transponder chip isn't correctly synced with your car's engine control unit (ECU), your vehicle simply won't start. For professional <strong>car key programming Boise</strong> drivers trust, <strong>Car Key Masters</strong> provides a specialized mobile service that brings dealership-level technology directly to you. From the quiet streets of Meridian to the busiest parts of Nampa and Caldwell, we ensure your keys work perfectly with your car's immobilizer system.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>What is Professional Car Key Programming?</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Unlike traditional metal keys, modern automotive keys contain a tiny chip that transmits a unique code to your car. Programming is the process of teaching your car to recognize that specific chip. This is required for:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>New Transponder Keys:</strong> When you get a new key cut, the chip must be introduced to the vehicle's security module.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Key Fobs & Smart Remotes:</strong> Push-to-start fobs and proximity keys require deep-level system access to sync correctly.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>De-programming Lost Keys:</strong> If a key is stolen, we can wipe its data from your car so it can no longer be used to start the vehicle.</span>
                            </li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Why Choose a Mobile Locksmith Over a Boise Dealership?</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Many residents in the <strong>Treasure Valley</strong> assume the dealership is the only place for key programming. However, there are significant advantages to using our mobile service:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '30px', marginBottom: '40px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>100% Mobile Service</h3>
                                <p>We come to you. No need to pay for a tow truck to haul your "immobile" car to a dealership service center across town.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Fair, Transparent Pricing</h3>
                                <p>Dealerships often charge a premium for "labor" and specialized tools. We offer the same results at a fraction of the cost.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Same-Day Dispatch</h3>
                                <p>While dealerships might require an appointment days in advance, we offer same-day service from 7 AM to 11 PM.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>All Makes & Models</h3>
                                <p>Unlike brand-specific dealers, we carry software for virtually every vehicle on the road in Idaho.</p>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>The Mobile Programming Process</h2>
                        <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>OBDII Connection:</strong> We connect our professional diagnostic tablet to your vehicle's communication port.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Security Verification:</strong> We bypass the immobilizer using secure protocols (ensuring you are the rightful owner).</li>
                            <li style={{ marginBottom: '12px' }}><strong>Key Sinking:</strong> We program the unique 40, 80, or 128-bit encrypted code into the vehicle.</li>
                            <li style={{ marginBottom: '12px' }}><strong>System Check:</strong> We verify all functions: ignition start, lock/unlock, and panic alarms.</li>
                        </ol>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Serving the Entire Treasure Valley</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Distance is never an issue. Our technicians are constantly patrolling the metro area to ensure fast arrival times in:
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', padding: 0, listStyle: 'none', fontWeight: '600', color: 'var(--navy)' }}>
                            <li>✓ Boise (Downtown & Bench)</li>
                            <li>✓ Meridian (The Village Area)</li>
                            <li>✓ Eagle (Foothills & River)</li>
                            <li>✓ Nampa & Caldwell</li>
                            <li>✓ Kuna & Star</li>
                        </ul>
                    </div>
                </section>

                <div style={{ background: '#f8f9fa', padding: '80px 20px' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '48px' }}>FAQs About Car Key Programming</h2>
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {[
                                { q: "Can you program a key I bought online?", a: "Yes, in many cases we can. However, be aware that many 'aftermarket' keys from large online retailers are often incompatible or defective. We recommend using our high-quality, guaranteed keys for the best results." },
                                { q: "Will car key programming work if my car battery is dead?", a: "No. Key programming requires a stable voltage to write data to the ECU. We carry jumper packs to ensure your vehicle has the power needed for a successful sync." },
                                { q: "How much does programming cost vs. the dealership?", a: "Boise dealerships often charge $150-$250 for programming alone. Our fees are significantly lower, and we save you the towing cost." },
                                { q: "Is mobile programming safe for my car's computer?", a: "Absolutely. We use professional-grade diagnostic tools (like Autel and IM608) that are designed specifically for vehicle electronics without any risk of damage." }
                            ].map((faq, idx) => (
                                <div key={idx} style={{ padding: '24px', background: 'white', borderLeft: '4px solid var(--orange)', borderRadius: '0 12px 12px 0', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{faq.q}</h3>
                                    <p style={{ color: 'var(--text-dark)' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Related Boise Services</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                            <a href="/en/services/key-fob-replacement" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Key Fob Replacement</a>
                            <a href="/en/services/car-key-replacement" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Key Cutting</a>
                            <a href="/en/services/car-lockout" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Locked Out?</a>
                            <a href="/en/service-areas/boise-locksmith" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Boise Service Area</a>
                        </div>
                    </div>
                </div>

                <TrustSection lang="en" />
                <CallToAction lang="en" />
            </main>
            <Footer lang="en" />
            <StickyBar lang="en" />
            <Script
                id="schema-programming"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
