"use client";
import { useState, useEffect } from 'react';
import { t } from '../lib/translations';

export default function StickyBar({ lang = 'en' }) {
    const [isVisible, setIsVisible] = useState(false);
    const tr = t(lang).header;

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero section (approx 400px)
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Also show immediately on mobile, rely on CSS media queries for desktop behavior
    return (
        <div className={`sticky-bar ${isVisible ? 'visible' : ''}`}>
            <a href="tel:+12086868099" className="sticky-bar__btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span>CALL NOW</span>
                <span className="sticky-bar__phone">(208) 686-8099</span>
            </a>
        </div>
    );
}
