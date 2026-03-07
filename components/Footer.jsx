import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__container">
                    {/* Column 1: Brand */}
                    <div className="footer__brand-col">
                        <Link href="/" className="footer__logo-link">
                            <img
                                src="/https-github.com-_-demo-locksmith/images/logo.jpg"
                                alt="Car Key Masters Logo"
                                className="footer__logo-img"
                            />
                        </Link>
                        <p className="footer__tagline">24/7 emergency locksmith service serving the entire Treasure Valley. Licensed, insured, and locally owned.</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <nav className="footer__nav">
                            <Link href="/" className="footer__link">Home</Link>
                            <Link href="/services" className="footer__link">Services</Link>
                            <Link href="/service-areas" className="footer__link">Service Areas</Link>
                            <Link href="/reviews" className="footer__link">Reviews</Link>
                            <Link href="/contact" className="footer__link">Contact</Link>
                        </nav>
                    </div>

                    {/* Column 3: Service Area */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Service Area</h4>
                        <nav className="footer__nav">
                            <Link href="/service-areas/boise-locksmith" className="footer__link">Boise</Link>
                            <Link href="/service-areas/meridian-locksmith" className="footer__link">Meridian</Link>
                            <Link href="/service-areas/nampa-locksmith" className="footer__link">Nampa</Link>
                            <Link href="/service-areas/caldwell-locksmith" className="footer__link">Caldwell</Link>
                            <Link href="/service-areas/eagle-locksmith" className="footer__link">Eagle</Link>
                            <Link href="/service-areas/kuna-locksmith" className="footer__link">Kuna</Link>
                        </nav>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Contact</h4>
                        <div className="footer__contact-info">
                            <div className="footer__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                <div>
                                    <span className="footer__contact-label">Business Hours</span>
                                    <span className="footer__contact-value">24/7 · Including Holidays</span>
                                </div>
                            </div>
                            <div className="footer__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <div>
                                    <span className="footer__contact-label">Phone</span>
                                    <a href="tel:+12085551234" className="footer__phone">(208) 555-1234</a>
                                </div>
                            </div>
                            <div className="footer__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <div>
                                    <span className="footer__contact-label">Area</span>
                                    <span className="footer__contact-value">Ada & Canyon County, ID</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="footer__bottom-inner">
                    <p className="footer__copyright">&copy; {new Date().getFullYear()} Car Key Masters Boise. All rights reserved.</p>
                    <nav className="footer__legal">
                        <Link href="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
                        <span className="footer__legal-sep">·</span>
                        <Link href="/terms-and-conditions" className="footer__legal-link">Terms & Conditions</Link>
                        <span className="footer__legal-sep">·</span>
                        <Link href="/sitemap.xml" className="footer__legal-link">Sitemap</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
