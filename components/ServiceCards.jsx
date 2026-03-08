import Link from 'next/link';

export const servicesData = [
    {
        id: 'car-lockout',
        title: 'Car Lockout',
        desc: "Locked out of your vehicle? We'll get you back in fast.",
        path: '/services/car-lockout',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M34 20H32V17C32 12.58 28.42 9 24 9C19.58 9 16 12.58 16 17V20H14C12.9 20 12 20.9 12 22V36C12 37.1 12.9 38 14 38H34C35.1 38 36 37.1 36 36V22C36 20.9 35.1 20 34 20ZM24 31C22.9 31 22 30.1 22 29C22 27.9 22.9 27 24 27C25.1 27 26 27.9 26 29C26 30.1 25.1 31 24 31ZM29 20H19V17C19 14.24 21.24 12 24 12C26.76 12 29 14.24 29 17V20Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'house-lockout',
        title: 'House Lockout',
        desc: "Locked out of your home? Our techs arrive in minutes.",
        path: '/services/house-lockout',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M34 18H30V14C30 12.9 29.1 12 28 12H20C18.9 12 18 12.9 18 14V18H14C12.9 18 12 18.9 12 20V34C12 35.1 12.9 36 14 36H34C35.1 36 36 35.1 36 34V20C36 18.9 35.1 18 34 18ZM20 14H28V18H20V14ZM24 32C21.24 32 19 29.76 19 27C19 24.24 21.24 22 24 22C26.76 22 29 24.24 29 27C29 29.76 26.76 32 24 32ZM24 24C22.34 24 21 25.34 21 27C21 28.66 22.34 30 24 30C25.66 30 27 28.66 27 27C27 25.34 25.66 24 24 24Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'lock-rekey',
        title: 'Lock Rekey',
        desc: "Change your locks for new keys without full replacement.",
        path: '/services/lock-rekey',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M24 10C17.38 10 12 15.38 12 22C12 28.62 17.38 34 24 34H25V38H27C31.96 34.96 36 28.62 36 22C36 15.38 30.62 10 24 10ZM17 23C15.9 23 15 22.1 15 21C15 19.9 15.9 19 17 19C18.1 19 19 19.9 19 21C19 22.1 18.1 23 17 23ZM21 17C19.9 17 19 16.1 19 15C19 13.9 19.9 13 21 13C22.1 13 23 13.9 23 15C23 16.1 22.1 17 21 17ZM27 17C25.9 17 25 16.1 25 15C25 13.9 25.9 13 27 13C28.1 13 29 13.9 29 15C29 16.1 28.1 17 27 17ZM31 23C29.9 23 29 22.1 29 21C29 19.9 29.9 19 31 19C32.1 19 33 19.9 33 21C33 22.1 32.1 23 31 23Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'lock-installation',
        title: 'Lock Installation',
        desc: "New lock installation for homes and commercial properties.",
        path: '/services/lock-installation',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M24 12L12 20V36H20V28H28V36H36V20L24 12Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'broken-key-extraction',
        title: 'Broken Key Extraction',
        desc: "Key stuck or broken in the lock? We extract it safely.",
        path: '/services/broken-key-extraction',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M26 10H22L14 24H20L18 38L34 20H26L30 10H26Z" fill="#FF6A00" />
            </svg>
        )
    },
    {
        id: 'commercial-locksmith',
        title: 'Commercial Locksmith',
        desc: "Full commercial lock services for offices and storefronts.",
        path: '/services/commercial-locksmith',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M36 14H12C10.9 14 10 14.9 10 16V32C10 33.1 10.9 34 12 34H36C37.1 34 38 33.1 38 32V16C38 14.9 37.1 14 36 14ZM36 32H12V16H36V32ZM28 22H18V20H28V22ZM34 26H18V24H34V26ZM30 30H18V28H30V30Z" fill="#FF6A00" />
            </svg>
        )
    }
];

export default function ServiceCards() {
    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">Locksmith Services</h2>
                <p className="section-subtitle">Professional solutions for every lockout and lock-related need.</p>
                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <Link
                            href={service.path}
                            key={service.id}
                            className="service-card animate-in"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-card__icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__desc">{service.desc}</p>
                            <div className="service-card__arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
