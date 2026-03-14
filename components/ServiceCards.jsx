"use client";
import React from 'react';
import Link from 'next/link';
import { img } from '../lib/basePath';

export const servicesData = [
    {
        id: 'car-key-replacement',
        title: 'Car Key Replacement',
        path: '/services/car-key-replacement',
        image: img('/images/card1.png?v=2'),
    },
    {
        id: 'car-key-copy',
        title: 'Car Key Copy',
        path: '/services/car-key-copy',
        image: img('/images/card2.png?v=2'),
    },
    {
        id: 'car-key-programming',
        title: 'Car Key Programming',
        path: '/services/car-key-programming',
        image: img('/images/card3.png?v=2'),
    },
    {
        id: 'car-key-cutting',
        title: 'Car Key Cutting',
        path: '/services/car-key-cutting',
        image: img('/images/card4.png?v=4'),
    },
    {
        id: 'car-key-cloning',
        title: 'Car Key Cloning',
        path: '/services/car-key-cloning',
        image: img('/images/car-key-cloning.png?v=2'),
    },
    {
        id: 'car-key-repair',
        title: 'Car Key Repair',
        path: '/services/car-key-repair',
        image: img('/images/car-key-repair.png?v=3'),
    },
    {
        id: 'customized-car-keys',
        title: 'Customized Car Keys',
        path: '/services/customized-car-keys',
        image: img('/images/card7.png?v=3'),
    },
    {
        id: 'key-fob-replacement',
        title: 'Key Fob Replacement',
        path: '/services/key-fob-replacement',
        image: img('/images/card8.png?v=2'),
    },
    {
        id: 'car-lockout',
        title: 'Vehicle Lockouts',
        path: '/services/car-lockout',
        image: img('/images/card9.1.png?v=2'),
    },
    {
        id: 'trunk-unlock',
        title: 'Trunk Unlock Service',
        path: '/services/trunk-unlock',
        image: img('/images/card10.png?v=3'),
    },
    {
        id: 'broken-key-extraction',
        title: 'Broken Key Extraction',
        path: '/services/broken-key-extraction',
        image: img('/images/card12.1.png?v=2'),
    },
    {
        id: 'ignition-repair',
        title: 'Ignition Repair',
        path: '/services/ignition-repair',
        image: img('/images/card12.png?v=2'),
    }
];

export default function ServiceCards({ lang = 'en', isHomepage = false }) {
    const langPrefix = `/${lang}`;
    const tr = require('../lib/translations').t(lang).serviceCards;

    return (
        <section className="services" id="services">
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title">{tr.sectionTitle}</h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>{tr.sectionSubtitle}</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <Link key={service.id} href={`${langPrefix}${service.path}`} className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="service-card" data-aos="fade-up" data-aos-delay={index * 50}>
                                <div className="service-card__image-wrapper">
                                    {!service.iconPos ? (
                                        <div className="service-card__image-container">
                                            <img 
                                                src={service.image} 
                                                alt={service.title} 
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="service-card__image"
                                            style={{ 
                                                backgroundImage: `url(${service.iconPos ? img('/images/icons-for card.png') : service.image})`,
                                                backgroundPosition: service.iconPos || 'center',
                                                backgroundSize: service.iconPos ? '600% 360%' : '110%',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundColor: '#fff',
                                                borderBottom: '1px solid rgba(0,0,0,0.06)',
                                                height: '100%'
                                            }}
                                        ></div>
                                    )}
                                </div>
                                <div className="service-card__body">
                                    <h3 className="service-card__title">{tr.cards[index].title}</h3>
                                    <div className="service-card__actions">
                                        <span className="service-card__link">
                                            {lang === 'es' ? 'Saber Más' : 'Learn More'}
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </span>
                                    </div>
                                    <div className="service-card__desc-wrapper">
                                        <p className="service-card__desc">{tr.cards[index].desc}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

