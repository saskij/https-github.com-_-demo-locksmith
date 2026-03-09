"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { servicesData } from './ServiceCards';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

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
                <Link href="/" className="header__logo">
                    <img
                        src="/https-github.com-_-demo-locksmith/images/logo1.png"
                        alt="Car Key Masters Logo"
                        className="header__logo-img"
                    />
                </Link>

                <nav className="header__nav">
                    <div className="header__nav-group header__nav-group--left">
                        <Link href="/" className={`header__nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>

                        <div className="header__nav-dropdown">
                            <Link href="/services" className={`header__nav-link ${pathname.startsWith('/services') ? 'active' : ''}`}>
                                Services
                                <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </Link>

                            <div className="dropdown-menu">
                                {servicesData.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={service.path}
                                        className={`dropdown-link ${pathname === service.path ? 'active' : ''}`}
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="header__nav-spacer"></div>

                    <div className="header__nav-group header__nav-group--right">
                        <Link href="/service-areas" className={`header__nav-link ${pathname.startsWith('/service-areas') ? 'active' : ''}`}>Service Areas</Link>
                        <Link href="/reviews" className={`header__nav-link ${pathname === '/reviews' ? 'active' : ''}`}>Reviews</Link>
                        <Link href="/contact" className={`header__nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </div>
                </nav>

                <a href="tel:+12085551234" className="header__cta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <span>(208) 555-1234</span>
                </a>

                <button
                    className={`header__menu-btn ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link href="/" className="mobile-menu__link">Home</Link>
                <Link href="/services" className="mobile-menu__link">Services</Link>
                <Link href="/service-areas" className="mobile-menu__link">Service Areas</Link>
                <Link href="/reviews" className="mobile-menu__link">Reviews</Link>
                <Link href="/contact" className="mobile-menu__link">Contact</Link>
                <a href="tel:+12085551234" className="mobile-menu__call btn btn--primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    Call (208) 555-1234
                </a>
            </div>
        </header>
    );
}
