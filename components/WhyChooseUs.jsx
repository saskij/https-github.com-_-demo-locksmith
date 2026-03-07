import Image from 'next/image';

export default function WhyChooseUs() {
    return (
        <section className="why-choose">
            <div className="container">
                <div className="why-grid">
                    <div className="why-content fade-up">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose <span style={{ color: 'var(--orange)' }}>Car Key Masters</span></h2>
                        <p className="why-desc">When you're locked out or need critical security upgrades, you need a team you can trust. Here is why Boise relies on us.</p>

                        <ul className="why-list">
                            <li>
                                <div className="why-list-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div>
                                    <h4>Unmatched Speed</h4>
                                    <p>Our distributed mobile units ensure we reach most locations within 15-20 minutes.</p>
                                </div>
                            </li>
                            <li>
                                <div className="why-list-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div>
                                    <h4>Honest Pricing</h4>
                                    <p>No hidden fees or bait-and-switch tactics. We provide clear estimates over the phone.</p>
                                </div>
                            </li>
                            <li>
                                <div className="why-list-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div>
                                    <h4>Expert Technicians</h4>
                                    <p>Fully licensed, bonded, and insured professionals with years of specialized training.</p>
                                </div>
                            </li>
                        </ul>

                        <div style={{ marginTop: '32px' }}>
                            <a href="tel:+12085551234" className="btn btn--primary btn--md">Request Service Now</a>
                        </div>
                    </div>

                    <div className="why-image fade-up">
                        {/* Using a placeholder tech image. You can replace it with a real one later */}
                        <div className="why-image-wrapper">
                            <Image
                                src="/https-github.com-_-demo-locksmith/images/hero.png"
                                alt="Professional Locksmith working on a lock"
                                fill
                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                            />
                            <div className="why-image-badge">
                                <strong>5.0★</strong>
                                <span>Top Rated Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
