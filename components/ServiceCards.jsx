import Link from 'next/link';

export const servicesData = [
    {
        id: 'car-key-replacement',
        title: 'Car Key Replacement',
        desc: "Lost your exclusively only key? We cut and program new keys on the spot.",
        path: '/services/car-key-replacement',
        backgroundImage: '/images/hero-residential.png',
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
        desc: "Need a spare? We duplicate all types of transponder and smart keys.",
        path: '/services/car-key-copy',
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
        desc: "We program chip keys, key fobs, and push-to-start smart keys.",
        path: '/services/car-key-programming',
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
        desc: "Broken shell or dead buttons? We refurbish and repair damaged fobs.",
        path: '/services/car-key-repair',
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
        desc: "Key won't turn? We repair damaged ignitions directly at your location.",
        path: '/services/ignition-repair',
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
        desc: "Match a new ignition cylinder to your existing door keys for convenience.",
        path: '/services/ignition-rekey',
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
        desc: "Keys locked inside? We safely open all vehicle makes and models.",
        path: '/services/car-lockout',
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
        desc: "Heavy-duty truck lockouts. We get big rigs back on the road fast.",
        path: '/services/semi-truck-lockout',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="12" fill="#FFF3E8" />
                <path d="M38 18H33V12C33 10.9 32.1 10 31 10H15C13.9 10 13 10.9 13 12V34H11V38H37V34H35V22H38V18ZM29 22H17V14H29V22ZM15 34V26H31V34H15ZM19 32C17.9 32 17 31.1 17 30C17 28.9 17.9 28 19 28C20.1 28 21 28.9 21 30C21 31.1 20.1 32 19 32ZM27 32C25.9 32 25 31.1 25 30C25 28.9 25.9 28 27 28C28.1 28 29 28.9 29 30C29 31.1 28.1 32 27 32Z" fill="#FF6A00" />
            </svg>
        )
    }
];

export default function ServiceCards({ lang = 'en' }) {
    const langPrefix = `/${lang}`;
    const tr = require('../lib/translations').t(lang).serviceCards;

    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title">{tr.sectionTitle}</h2>
                <p className="section-subtitle">{tr.sectionSubtitle}</p>
                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <Link
                            href={`${langPrefix}${service.path}`}
                            key={service.id}
                            className={`service-card animate-in ${service.backgroundImage ? 'service-card--has-bg' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={service.backgroundImage ? {
                                backgroundImage: `linear-gradient(rgba(10, 14, 23, 0.75), rgba(10, 14, 23, 0.85)), url(${service.backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            } : {}}
                        >
                            <div className="service-card__icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card__title">{tr.cards[index].title}</h3>
                            <p className="service-card__desc">{tr.cards[index].desc}</p>
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
