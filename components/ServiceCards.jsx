"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { img } from '../lib/basePath';

export const servicesData = [
    {
        id: 'car-key-replacement',
        title: 'Car Key Replacement',
        desc: "Lost your exclusively only key? We cut and program new keys on the spot. Modern vehicles use specialized transponder systems, and our technicians carry the exact equipment needed to generate a brand new key for you.",
        path: '/services/car-key-replacement',
        image: img('/images/7.jpg'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M28.5 13.5C25.46 13.5 23 15.96 23 19C23 20.32 23.46 21.53 24.23 22.46L14 32.69V36H17.31L18.84 34.47H21.5V31.81L23.03 30.28H25.69L26.54 29.42C27.17 29.79 27.81 30 28.5 30C31.54 30 34 27.54 34 24.5C34 21.46 31.54 13.5 28.5 13.5ZM28.5 20.5C27.4 20.5 26.5 19.6 26.5 18.5C26.5 17.4 27.4 16.5 28.5 16.5C29.6 16.5 30.5 17.4 30.5 18.5C30.5 19.6 29.6 20.5 28.5 20.5Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'car-key-copy',
        title: 'Car Key Copy',
        desc: "Need a spare? We duplicate all types of transponder and smart keys. Getting a copy before you lose your only key is the smartest and most affordable way to prevent emergency lockout situations.",
        path: '/services/car-key-copy',
        image: img('/images/8.jpg'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M30 12H16C14.9 12 14 12.9 14 14V34H18V16H30V12ZM34 20H22C20.9 20 20 20.9 20 22V38C20 39.1 20.9 40 22 40H34C35.1 40 36 39.1 36 38V22C36 20.9 35.1 20 34 20ZM34 38H22V22H34V38Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'car-key-programming',
        title: 'Car Key Programming',
        desc: "We program chip keys, key fobs, and push-to-start smart keys. If you purchased an aftermarket key online, our diagnostic computers can safely pair it with your vehicle's immobilizer system.",
        path: '/services/car-key-programming',
        image: img('/images/9.jpg'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M19 28H29V32H19V28ZM19 16H29V24H19V16ZM34 10H14C12.9 10 12 10.9 12 12V36C12 37.1 12.9 38 14 38H34C35.1 38 36 37.1 36 36V12C36 10.9 35.1 10 34 10ZM32 34H16V14H32V34Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'car-key-repair',
        title: 'Car Key Repair',
        desc: "Broken shell or dead buttons? We refurbish and repair damaged fobs. Instead of paying for a complete replacement, we can often swap the internal electronics into a fresh casing and replace the battery.",
        path: '/services/car-key-repair',
        image: img('/images/10.jpg'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M31.42 21.58L26.42 16.58L27.84 15.16C28.62 14.38 29.88 14.38 30.66 15.16L32.84 17.34C33.62 18.12 33.62 19.38 32.84 20.16L31.42 21.58ZM14 34V29L25 18L30 23L19 34H14V34Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'ignition-repair',
        title: 'Ignition Repair',
        desc: "Key won't turn? We repair damaged ignitions directly at your location. Over time, the internal wafers wear down, preventing the key from turning. We rebuild ignitions so they work like new.",
        path: '/services/ignition-repair',
        image: img('/images/hero-residential.png'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M22.7 19.3C22 19.7 21.5 20.5 21.5 21.5C21.5 22.9 22.6 24 24 24C25.4 24 26.5 22.9 26.5 21.5C26.5 20.5 26 19.7 25.3 19.3L26.8 17.8C28.1 18.6 29 20 29 21.5C29 24.3 26.8 26.5 24 26.5C21.2 26.5 19 24.3 19 21.5C19 20 19.9 18.6 21.2 17.8L22.7 19.3ZM24 11C28.2 11 31.8 13.5 33.3 17H30.6C29.6 15 27.2 13.5 24 13.5C20.8 13.5 18.4 15 17.4 17H14.7C16.2 13.5 19.8 11 24 11ZM24 37C19.8 37 16.2 34.5 14.7 31H17.4C18.4 33 20.8 34.5 24 34.5C27.2 34.5 29.6 33 30.6 31H33.3C31.8 34.5 28.2 37 24 37ZM34.4 25.1C34.5 23.9 34.5 22.8 34.4 21.7L36.8 19.8L34.4 15.6L31.6 16.7C30.6 15.9 29.5 15.3 28.3 14.8L27.9 11.8H23.1L22.7 14.8C21.5 15.3 20.4 15.9 19.4 16.7L16.6 15.6L14.2 19.8L16.6 21.7C16.5 22.9 16.5 24 16.6 25.1L14.2 27L16.6 31.2L19.4 30C20.4 30.9 21.5 31.5 22.7 32L23.1 35H27.9L28.3 32C29.5 31.5 30.6 30.9 31.6 30L34.4 31.2L36.8 27L34.4 25.1Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'ignition-rekey',
        title: 'Ignition Rekey',
        desc: "Match a new ignition cylinder to your existing door keys for convenience. If your ignition lock is completely unrepairable, we replace it and rekey the new lock so you don't have to carry two separate keys.",
        path: '/services/ignition-rekey',
        image: img('/images/hero-main.jpg'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M25 18C28.87 18 32 21.13 32 25C32 28.87 28.87 32 25 32C21.13 32 18 28.87 18 25H16C16 29.97 20.03 34 25 34C29.97 34 34 29.97 34 25C34 20.03 29.97 16 25 16V12L20 17L25 22V18Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'car-lockout',
        title: 'Car Lockout Service',
        desc: "Keys locked inside? We safely open all vehicle makes and models. Fast, damage-free unlocking techniques used to retrieve items from the passenger cabin or trunk without scratching your paint or bending the doors.",
        path: '/services/car-lockout',
        image: img('/images/hero-residential.png'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M34 20H32V17C32 12.58 28.42 9 24 9C19.58 9 16 12.58 16 17V20H14C12.9 20 12 20.9 12 22V36C12 37.1 12.9 38 14 38H34C35.1 38 36 37.1 36 36V22C36 20.9 35.1 20 34 20ZM24 31C22.9 31 22 30.1 22 29C22 27.9 22.9 27 24 27C25.1 27 26 27.9 26 29C26 30.1 25.1 31 24 31ZM29 20H19V17C19 14.24 21.24 12 24 12C26.76 12 29 14.24 29 17V20Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'semi-truck-lockout',
        title: 'Semi Truck Lockout',
        desc: "Heavy-duty truck lockouts. We get big rigs back on the road fast. Commercial drivers rely on our prompt response specifically tailored for Freightliner, Peterbilt, Kenworth, Volvo, and Mack trucks.",
        path: '/services/semi-truck-lockout',
        image: img('/images/hero-main.jpg'),
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M38 18H33V12C33 10.9 32.1 10 31 10H15C13.9 10 13 10.9 13 12V34H11V38H37V34H35V22H38V18ZM29 22H17V14H29V22ZM15 34V26H31V34H15ZM19 32C17.9 32 17 31.1 17 30C17 28.9 17.9 28 19 28C20.1 28 21 28.9 21 30C21 31.1 20.1 32 19 32ZM27 32C25.9 32 25 31.1 25 30C25 28.9 25.9 28 27 28C28.1 28 29 28.9 29 30C29 31.1 28.1 32 27 32Z" fill="#FF6A00" />
            </svg>
        )
    }
];

export default function ServiceCards({ lang = 'en', isHomepage = false }) {
    const langPrefix = `/${lang}`;
    const tr = require('../lib/translations').t(lang).serviceCards;

    // State to toggle showing all services on the homepage
    const [isExpanded, setIsExpanded] = useState(false);

    // If on homepage and not expanded, show only 4. Otherwise show all.
    const visibleServices = (isHomepage && !isExpanded)
        ? servicesData.slice(0, 4)
        : servicesData;

    return (
        <section className="services" id="services">
            <div className="container" style={{ maxWidth: '1200px' }}>
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <p className="section-subtitle">{tr.sectionSubtitle}</p>

                <div className="services-grid">
                    {visibleServices.map((service, index) => (
                        <div key={service.id} className="service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                            <div
                                className="service-card__image"
                                style={{ backgroundImage: `url(${service.image})` }}
                            ></div>
                            <div className="service-card__body">
                                <div className="service-card__icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-card__title">{tr.cards[index].title}</h3>
                                <p className="service-card__desc">{tr.cards[index].desc}</p>
                                <div className="service-card__actions">
                                    <a href="tel:+12085551234" className="btn btn--primary service-card__call-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        Call Now
                                    </a>
                                    <Link href={`${langPrefix}${service.path}`} className="service-card__link">
                                        Learn More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button - Only shows on homepage when collapsed */}
                {isHomepage && !isExpanded && (
                    <div style={{ textAlign: 'center', marginTop: '40px' }} data-aos="fade-up">
                        <button
                            className="btn btn--secondary"
                            onClick={() => setIsExpanded(true)}
                            style={{
                                padding: '16px 40px',
                                fontSize: '1.1rem',
                                backgroundColor: 'var(--navy)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(10, 14, 23, 0.2)',
                                transition: 'all 0.3s ease',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontWeight: '600'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(10, 14, 23, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(10, 14, 23, 0.2)';
                            }}
                        >
                            View All Services
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

