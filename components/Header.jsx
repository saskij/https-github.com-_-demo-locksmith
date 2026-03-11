"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { servicesData } from './ServiceCards';
import { img, BASE_PATH } from '../lib/basePath';
import LanguageSwitcher from './LanguageSwitcher';
import { t } from '../lib/translations';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Derive current locale from pathname, default to 'en'
    const currentLang = pathname.split('/')[1] || 'en';
    const isLangSupported = ['en', 'es'].includes(currentLang);
    const langPrefix = isLangSupported ? `/${currentLang}` : '';
    const nav = t(currentLang).header;
    const mob = t(currentLang).mobileMenu;

    // Helper to generate localized paths with BASE_PATH
    const getLocalizedPath = (path) => {
        // If path is exactly '/', just return the prefix or '/' if no prefix
        if (path === '/') return `${BASE_PATH}${langPrefix || '/'}`;
        // Otherwise append the path to the prefix
        return `${BASE_PATH}${langPrefix}${path}`;
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
    }, [pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__inner">
                <a href={getLocalizedPath('/')} className="header__logo">
                    <img
                        src={img("/images/logo-carkeymasters.png")}
                        alt="Car Key Masters Logo"
                        className="header__logo-img"
                    />
                </a>

                <nav className="header__nav">
                    <div className="header__nav-group header__nav-group--right">
                        <a href={getLocalizedPath('/')} className={`header__nav-link ${pathname === getLocalizedPath('/') ? 'active' : ''}`}>{nav.home}</a>

                        <div className="header__nav-dropdown">
                            <a href={getLocalizedPath('/services')} className={`header__nav-link ${pathname.includes('/services') ? 'active' : ''}`}>
                                {nav.services}
                                <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </a>

                            <div className="dropdown-menu">
                                {servicesData.map((service, idx) => (
                                    <a
                                        key={service.id}
                                        href={getLocalizedPath(service.path)}
                                        className={`dropdown-link ${pathname === getLocalizedPath(service.path) ? 'active' : ''}`}
                                    >
                                        {t(currentLang).serviceCards.cards[idx].title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a href={getLocalizedPath('/service-areas')} className={`header__nav-link ${pathname.includes('/service-areas') ? 'active' : ''}`}>{nav.serviceAreas}</a>
                        <a href={getLocalizedPath('/reviews')} className={`header__nav-link ${pathname === getLocalizedPath('/reviews') ? 'active' : ''}`}>{nav.reviews}</a>
                        <a href={getLocalizedPath('/contact')} className={`header__nav-link ${pathname === getLocalizedPath('/contact') ? 'active' : ''}`}>{nav.contact}</a>
                    </div>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <a href="tel:+12086868099" className="header__cta">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <span>(208) 686-8099</span>
                    </a>

                    <LanguageSwitcher />

                    <button
                        className={`header__menu-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <a href={getLocalizedPath('/')} className="mobile-menu__link">{mob.home}</a>
                <a href={getLocalizedPath('/services')} className="mobile-menu__link">{mob.services}</a>
                <a href={getLocalizedPath('/service-areas')} className="mobile-menu__link">{mob.serviceAreas}</a>
                <a href={getLocalizedPath('/reviews')} className="mobile-menu__link">{mob.reviews}</a>
                <a href={getLocalizedPath('/contact')} className="mobile-menu__link">{mob.contact}</a>
                <a href="tel:+12086868099" className="mobile-menu__call btn btn--primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    {mob.call}
                </a>
            </div>
        </header>
    );
}
