import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import CallToAction from '../../components/CallToAction';
import TrustSection from '../../components/TrustSection';
import StickyBar from '../../components/StickyBar';
import Script from 'next/script';

export const metadata = {
    title: 'Car Key Replacement Boise ID | Fast Mobile Auto Locksmith',
    description: 'Need car key replacement in Boise, Idaho? Our mobile locksmiths provide on-site key cutting and programming for all vehicle makes. Fast arrival 7 AM – 11 PM.',
    alternates: {
        canonical: 'https://carkeymastersboise.com/car-key-replacement-boise',
    }
};

export default function CarKeyReplacementBoise() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Locksmith"],
        "name": "Car Key Masters Boise",
        "image": "https://carkeymastersboise.com/images/hero-homepage.jpg",
        "telephone": "+12086868099",
        "url": "https://carkeymastersboise.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Boise",
            "addressRegion": "ID",
            "postalCode": "83701",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.6150,
            "longitude": -116.2023
        },
        "servesDeliveryArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 43.6150,
                "longitude": -116.2023
            },
            "geoRadius": "40000"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "07:00",
            "closes": "23:00"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Locksmith Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Car Key Replacement"
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
                    headline="Car Key Replacement"
                    headlineAccent="Boise Idaho"
                    subheadline="Professional Mobile Key Cutting & Programming Services"
                    bgImage="/images/hero-services.jpg"
                />
                
                <section className="container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Car Key Replacement Boise</h2>
                    
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-dark)', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '24px' }}>
                            Losing your car keys or having them stop working can be a major disruption to your day in <strong>Boise, Idaho</strong>. Whether you are at home in the North End, working in Downtown Boise, or stuck in a parking lot near the Boise Towne Square, you need a reliable solution that doesn't involve expensive towing to a dealership. That's where <strong>Car Key Masters</strong> comes in. We specialize in providing professional <strong>car key replacement Boise</strong> residents can count on for speed, quality, and affordability.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>When Do You Need Professional Car Key Replacement?</h2>
                        <p style={{ marginBottom: '16px' }}>
                            There are several situations where a simple spare key isn't enough, and you require the expertise of an automotive locksmith:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Lost All Keys:</strong> If you have no working keys left, we can generate a new one using your vehicle's VIN or by decodfying the lock cylinders.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Damaged or Broken Keys:</strong> Keys can snap in the ignition or door. We extract the broken piece and cut a fresh blade.</span>
                            </li>
                            <li style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" style={{ flexShrink: 0, marginTop: '4px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span><strong>Electronic Failure:</strong> Modern transponder chips and smart fobs can fail internally. We program new electronics to sync perfectly with your car's computer.</span>
                            </li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>How Our Mobile Locksmith Service Works</h2>
                        <p style={{ marginBottom: '16px' }}>
                            We have optimized our process to be as stress-free as possible for our customers across the <strong>Treasure Valley</strong>:
                        </p>
                        <ol style={{ paddingLeft: '20px', marginBottom: '24px' }}>
                            <li style={{ marginBottom: '12px' }}><strong>Immediate Consultation:</strong> Call us with your vehicle's Year, Make, and Model. We'll provide a transparent quote right over the phone.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Rapid Dispatch:</strong> Our technician is dispatched immediately to your location in Boise, Meridian, or Nampa.</li>
                            <li style={{ marginBottom: '12px' }}><strong>On-Site Service:</strong> We arrive in a fully equipped mobile lab. We cut the physical key and program the transponder chip on the spot.</li>
                            <li style={{ marginBottom: '12px' }}><strong>Testing and Verification:</strong> We ensure the key starts the engine and all remote functions work perfectly before we leave.</li>
                        </ol>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Vehicle Brands We Support</h2>
                        <p style={{ marginBottom: '24px' }}>
                            Our advanced diagnostic equipment allows us to support over 95% of vehicles on the road today, including:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '40px' }}>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Toyota & Lexus</div>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Honda & Acura</div>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Ford & Lincoln</div>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Chevrolet & GMC</div>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Nissan & Infiniti</div>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Jeep, Dodge & RAM</div>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Hyundai & Kia</div>
                            <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center', fontWeight: '600' }}>Mazda</div>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '20px', marginTop: '40px' }}>Service Coverage: Boise and Surrounding Areas</h2>
                        <p style={{ marginBottom: '24px' }}>
                            While our name is centered in Boise, our mobile units cover the entire surrounding region to ensure no driver is left stranded. We provide rapid car key replacement in:
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', padding: 0, listStyle: 'none' }}>
                            <li>✓ Meridian, Idaho</li>
                            <li>✓ Nampa, Idaho</li>
                            <li>✓ Caldwell, Idaho</li>
                            <li>✓ Eagle, Idaho</li>
                            <li>✓ Kuna, Idaho</li>
                            <li>✓ Garden City, Idaho</li>
                        </ul>
                    </div>
                </section>

                <div style={{ background: '#f8faff', padding: '80px 20px' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ marginBottom: '48px' }}>Frequently Asked Questions</h2>
                        <div style={{ display: 'grid', gap: '24px' }}>
                            {[
                                { q: "How much does car key replacement in Boise cost?", a: "The cost varies depending on the technology required for your specific vehicle (e.g., standard key vs. smart fob). However, we are typically 50% more affordable than local Boise dealerships." },
                                { q: "Do you need the original key to make a copy?", a: "No! As pro locksmiths, we can generate a brand new key from scratch using your vehicle's computer system and lock codes, even if all keys are lost." },
                                { q: "How long does it take for a locksmith to arrive?", a: "Our average response time in the Boise area is between 15 and 45 minutes, depending on traffic and your specific location." },
                                { q: "Can you program key fobs on the spot?", a: "Yes, our mobile units are equipped with advanced OBDII programming tools that allow us to sync new fobs and smart keys right where you are." }
                            ].map((faq, idx) => (
                                <div key={idx} style={{ padding: '30px', background: 'white', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '12px', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: 'var(--orange)', fontWeight: '800' }}>Q.</span> {faq.q}
                                    </h3>
                                    <p style={{ color: 'var(--text-dark)', lineHeight: '1.6', display: 'flex', gap: '10px' }}>
                                        <span style={{ color: 'var(--navy)', fontWeight: '800' }}>A.</span> {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--navy)' }}>Quick Links & Related Services</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                            <a href="/en/services/car-key-programming" style={{ color: 'var(--orange)', fontWeight: '600' }}>Car Key Programming</a>
                            <a href="/en/services/car-lockout" style={{ color: 'var(--orange)', fontWeight: '600' }}>Vehicle Lockouts</a>
                            <a href="/en/services/ignition-repair" style={{ color: 'var(--orange)', fontWeight: '600' }}>Ignition Repair</a>
                            <a href="/en/service-areas/boise-locksmith" style={{ color: 'var(--orange)', fontWeight: '600' }}>Locksmith Boise</a>
                        </div>
                    </div>
                </div>

                <TrustSection lang="en" />
                <CallToAction lang="en" />
            </main>
            <Footer lang="en" />
            <StickyBar lang="en" />
            <Script
                id="schema-search"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
