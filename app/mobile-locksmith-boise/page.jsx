import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToAction from '../../components/CallToAction';
import TrustSection from '../../components/TrustSection';
import StickyBar from '../../components/StickyBar';
import Script from 'next/script';

export const metadata = {
    title: 'Mobile Locksmith Boise ID | Fast On-Site Keys & Lockouts',
    description: 'Looking for a mobile locksmith in Boise, Idaho? We bring the shop to you! Fast on-site car key replacement, programming, and lockout services across the Treasure Valley. Available 7 AM – 11 PM.',
    alternates: {
        canonical: 'https://carkeymastersboise.com/mobile-locksmith-boise',
    }
};

export default function MobileLocksmithBoise() {
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
                        "name": "Mobile Locksmith"
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
                    headline="Mobile Locksmith"
                    headlineAccent="Boise Idaho"
                    subheadline="Professional Lock & Key Services Delivered to Your Door"
                    bgImage="/images/hero-services.jpg"
                />
                
                <section className="container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Mobile Locksmith Boise</h1>
                    
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '24px' }}>
                            Gone are the days when you had to take your car to a mechanic for a simple key issue or wait hours for a tow truck. For the best <strong>mobile locksmith Boise</strong> drivers and business owners can hire, <strong>Car Key Masters</strong> offers a fully mobile operation designed for your convenience. We bring dealership-grade technology, precision laser cutters, and expert technicians directly to your location in <strong>Boise, Meridian, Nampa</strong>, and beyond. Whether you're stranded at a shopping center or need help in your own driveway, we come to you.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>What Makes Our Mobile Service Different?</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Our "shop on wheels" philosophy means we are equipped to handle complex automotive and commercial lock issues on the spot:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Full Equipment Inventory:</strong> Our vans carry computer-controlled laser cutters and OBDII diagnostic tablets for on-site key programming.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Instant Key Generation:</strong> We don't just cut copies; we can create original, high-security transponder keys from scratch in our mobile lab.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Commercial Solutions:</strong> Need high-security locks installed or a master key system set up at your business? We do it all on-site.</span>
                            </li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>The Benefits of On-Site Locksmithing</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Choosing a mobile service like Car Key Masters saves you time, money, and frustration. Here's why Boise residents prefer us:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                            <div style={{ padding: '24px', background: '#f8faff', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '10px' }}>Save on Towing</h3>
                                <p>Towing a car to a dealership in Boise can cost $100+. We eliminate that cost by coming directly to your vehicle's location.</p>
                            </div>
                            <div style={{ padding: '24px', background: '#f8faff', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '10px' }}>Rapid Turnaround</h3>
                                <p>Most of our onsite services, including key cutting and programming, are completed in under 45 minutes from our arrival.</p>
                            </div>
                            <div style={{ padding: '24px', background: '#f8faff', borderRadius: '16px' }}>
                                <h3 style={{ marginBottom: '10px' }}>Transparent Estimates</h3>
                                <p>We provide clear, upfront pricing before we start any work, so there are never any "mobile dispatch" surprises.</p>
                            </div>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>How We Serve the Treasure Valley</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Our mobile locksmith units are strategically positioned across the metro area to ensure the fastest possible response times in:
                        </p>
                        <div style={{ columns: '2', gap: '20px', fontWeight: '500' }}>
                            <p>• Boise (North End to South Bench)</p>
                            <p>• Meridian (The Village & Ten Mile)</p>
                            <p>• Nampa & Caldwell</p>
                            <p>• Eagle (Island Park & Foothills)</p>
                            <p>• Kuna & Star</p>
                            <p>• Garden City & Hidden Springs</p>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Specialized Mobile Automotive Support</h2>
                        <p style={{ marginBottom: '16px' }}>
                            We specialize in advanced mobile automotive solutions for all makes, including high-security European, Domestic, and Japanese brands:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            <li style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px' }}>Toyota/Lexus</li>
                            <li style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px' }}>Honda/Acura</li>
                            <li style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px' }}>Ford/Lincoln</li>
                            <li style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px' }}>GM/Chevy</li>
                            <li style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px' }}>Nissan/Infiniti</li>
                            <li style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px' }}>Mazda</li>
                            <li style={{ background: '#eee', padding: '5px 15px', borderRadius: '20px' }}>Hyundai/Kia</li>
                        </ul>
                    </div>
                </section>

                <div style={{ background: '#fff', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '80px 20px' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '48px' }}>Mobile Locksmith FAQ</h2>
                        <div style={{ display: 'grid', gap: '24px' }}>
                            {[
                                { q: "Are mobile locksmiths more expensive?", a: "Actually, mobile locksmiths like us are often cheaper because we don't have the massive overhead of a physical storefront, and we save you the cost of towing your car." },
                                { q: "What information do I need to provide for a mobile service?", a: "For car keys, we need the Year, Make, and Model. For lockouts, we need your exact location and a valid ID to verify ownership." },
                                { q: "Can you provide service during bad weather?", a: "Yes! Our mobile labs are covered and climate-controlled inside, allowing us to cut and program keys even in the Boise snow or rain." },
                                { q: "Do you offer mobile services for businesses?", a: "Absolutely. We provide commercial rekeying, high-security lock installation, and master key system setup for Boise area businesses on-site." }
                            ].map((faq, idx) => (
                                <div key={idx} style={{ borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '10px' }}>{faq.q}</h3>
                                    <p style={{ color: 'var(--text-dark)' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '24px' }}>Quick Navigation</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                            <a href="/en/services/car-key-replacement" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Car Key Replacement</a>
                            <a href="/en/services/commercial-locksmith" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Commercial Services</a>
                            <a href="/en/services/car-lockout" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Auto Lockout</a>
                            <a href="/en/service-areas/boise-locksmith" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Boise Service Areas</a>
                        </div>
                    </div>
                </div>

                <TrustSection lang="en" />
                <CallToAction lang="en" />
            </main>
            <Footer lang="en" />
            <StickyBar lang="en" />
            <Script
                id="schema-mobile"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
