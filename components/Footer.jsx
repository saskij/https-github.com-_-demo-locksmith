"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { img, BASE_PATH } from '../lib/basePath';
import { t } from '../lib/translations';

export default function Footer() {
    const pathname = usePathname();
    const currentLang = pathname?.split('/')[1] || 'en';
    const isLangSupported = ['en', 'es'].includes(currentLang);
    const lang = isLangSupported ? currentLang : 'en';
    const langPrefix = isLangSupported ? `/${currentLang}` : '';

    const getLocalizedPath = (path) => {
        if (path === '/') return `${BASE_PATH}${langPrefix || '/'}`;
        return `${BASE_PATH}${langPrefix}${path}`;
    };

    const tr = t(lang).footer;
    const navTr = t(lang).header;
    const mapTr = t(lang).serviceAreaMap;

    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__container">
                    {/* Column 1: Brand */}
                    <div className="footer__brand-col">
                        <Link href={getLocalizedPath('/')} className="footer__logo-link">
                            <img
                                src={img("/images/logo-carkeymasters.png")}
                                alt="Car Key Masters Logo"
                                className="footer__logo-img"
                            />
                        </Link>
                        <p className="footer__tagline">{tr.tagline}</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">{tr.quickLinksTitle}</h4>
                        <nav className="footer__nav">
                            <Link href={getLocalizedPath('/')} className="footer__link">{navTr.home}</Link>
                            <Link href={getLocalizedPath('/services')} className="footer__link">{navTr.services}</Link>
                            <Link href={getLocalizedPath('/service-areas')} className="footer__link">{navTr.serviceAreas}</Link>
                            <Link href={getLocalizedPath('/reviews')} className="footer__link">{navTr.reviews}</Link>
                            <Link href={getLocalizedPath('/contact')} className="footer__link">{navTr.contact}</Link>
                        </nav>
                    </div>

                    {/* Column 3: Service Area */}
                    <div className="footer__col">
                        <h4 className="footer__heading">{tr.serviceAreaTitle}</h4>
                        <nav className="footer__nav">
                            <Link href={getLocalizedPath('/service-areas/boise-locksmith')} className="footer__link">{mapTr.cities.boise}</Link>
                            <Link href={getLocalizedPath('/service-areas/meridian-locksmith')} className="footer__link">{mapTr.cities.meridian}</Link>
                            <Link href={getLocalizedPath('/service-areas/nampa-locksmith')} className="footer__link">{mapTr.cities.nampa}</Link>
                            <Link href={getLocalizedPath('/service-areas/caldwell-locksmith')} className="footer__link">{mapTr.cities.caldwell}</Link>
                            <Link href={getLocalizedPath('/service-areas/eagle-locksmith')} className="footer__link">{mapTr.cities.eagle}</Link>
                            <Link href={getLocalizedPath('/service-areas/kuna-locksmith')} className="footer__link">{mapTr.cities.kuna}</Link>
                        </nav>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="footer__col">
                        <h4 className="footer__heading">{tr.contactTitle}</h4>
                        <div className="footer__contact-info">
                            <div className="footer__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                <div>
                                    <span className="footer__contact-label">{tr.businessHoursLabel}</span>
                                    <span className="footer__contact-value">{tr.businessHoursValue}</span>
                                </div>
                            </div>
                            <div className="footer__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <div>
                                    <span className="footer__contact-label">{tr.phoneLabel}</span>
                                    <a href="tel:+12086868099" className="footer__phone">(208) 686-8099</a>
                                </div>
                            </div>
                            <div className="footer__contact-item" style={{ marginTop: '-4px', opacity: 0.8, fontSize: '0.9rem' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <div>
                                    <span style={{ display: 'block', color: 'var(--text-light)' }}>CarKeyMastersBoise@Gmail.com</span>
                                </div>
                            </div>
                            <div className="footer__contact-item" style={{ marginTop: '-4px', opacity: 0.8, fontSize: '0.9rem' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ opacity: 0 }}><circle cx="12" cy="12" r="10" /></svg>
                                <div>
                                    <span style={{ display: 'block', color: 'var(--text-light)' }}>{tr.immediateService}</span>
                                </div>
                            </div>
                            <div className="footer__contact-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <div>
                                    <span className="footer__contact-label">{tr.areaLabel}</span>
                                    <span className="footer__contact-value">{tr.areaValue}</span>
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
                        <Link href={getLocalizedPath('/privacy-policy')} className="footer__legal-link">{tr.privacyPolicy}</Link>
                        <span className="footer__legal-sep">·</span>
                        <Link href={getLocalizedPath('/terms-and-conditions')} className="footer__legal-link">{tr.terms}</Link>
                        <span className="footer__legal-sep">·</span>
                        <Link href={getLocalizedPath('/sitemap')} className="footer__legal-link">{tr.sitemap}</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
