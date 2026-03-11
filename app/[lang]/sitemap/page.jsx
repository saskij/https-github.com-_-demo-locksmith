"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import HeroSection from '../../../components/HeroSection';
import { t } from '../../../lib/translations';

export default function SitemapPage() {
    const params = useParams();
    const lang = params?.lang || 'en';
    const tr = t(lang).sitemap;
    
    const getPath = (path) => `/${lang}${path}`;

    const mainPages = [
        { name: t(lang).nav.home, path: '/' },
        { name: t(lang).nav.services, path: '/services' },
        { name: t(lang).nav.serviceAreas, path: '/service-areas' },
        { name: t(lang).nav.contact, path: '/contact' },
        { name: t(lang).privacyPolicy.title, path: '/privacy-policy' },
        { name: t(lang).terms.title, path: '/terms-and-conditions' },
    ];

    const services = [
        { name: 'Car Key Replacement', path: '/services/car-key-replacement' },
        { name: 'Car Key Copy', path: '/services/car-key-copy' },
        { name: 'Car Key Programming', path: '/services/car-key-programming' },
        { name: 'Car Key Repair', path: '/services/car-key-repair' },
        { name: 'Ignition Repair', path: '/services/ignition-repair' },
        { name: 'Ignition Rekey', path: '/services/ignition-rekey' },
        { name: 'Car Lockout', path: '/services/car-lockout' },
        { name: 'Semi Truck Lockout', path: '/services/semi-truck-lockout' },
        { name: 'House Lockout', path: '/services/house-lockout' },
        { name: 'Lock Rekey', path: '/services/lock-rekey' },
        { name: 'Lock Installation', path: '/services/lock-installation' },
        { name: 'Broken Key Extraction', path: '/services/broken-key-extraction' },
        { name: 'Commercial Locksmith', path: '/services/commercial-locksmith' },
    ];

    const areas = [
        { name: 'Boise', path: '/service-areas/boise-locksmith' },
        { name: 'Meridian', path: '/service-areas/meridian-locksmith' },
        { name: 'Nampa', path: '/service-areas/nampa-locksmith' },
        { name: 'Caldwell', path: '/service-areas/caldwell-locksmith' },
        { name: 'Eagle', path: '/service-areas/eagle-locksmith' },
        { name: 'Kuna', path: '/service-areas/kuna-locksmith' },
    ];

    const sectionStyle = {
        marginBottom: '24px',
        color: 'var(--primary)',
        borderBottom: '2px solid var(--orange)',
        paddingBottom: '8px',
        display: 'inline-block'
    };

    const linkStyle = {
        color: 'var(--text-dark)',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'color 0.2s'
    };

    return (
        <>
            <HeroSection
                headline={tr.title}
                headlineAccent=""
                subheadline={tr.subtitle}
                showImage={false}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '1000px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                    <div>
                        <h2 style={sectionStyle}>{tr.sections.main}</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {mainPages.map((page, i) => (
                                <li key={i} style={{ marginBottom: '12px' }}>
                                    <Link href={getPath(page.path)} style={linkStyle}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 style={sectionStyle}>{tr.sections.services}</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {services.map((page, i) => (
                                <li key={i} style={{ marginBottom: '12px' }}>
                                    <Link href={getPath(page.path)} style={linkStyle}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 style={sectionStyle}>{tr.sections.areas}</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {areas.map((page, i) => (
                                <li key={i} style={{ marginBottom: '12px' }}>
                                    <Link href={getPath(page.path)} style={linkStyle}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
