export const dynamic = 'force-static';

export default function sitemap() {
    const baseUrl = 'https://www.carkeymastersboise.com';

    const staticPaths = [
        '',
        '/services',
        '/service-areas',
        '/reviews',
        '/contact',
        '/privacy-policy',
        '/terms-and-conditions',
    ];

    const services = [
        '/services/car-lockout',
        '/services/house-lockout',
        '/services/lock-rekey',
        '/services/lock-installation',
        '/services/broken-key-extraction',
        '/services/commercial-locksmith',
        '/services/car-key-replacement',
        '/services/car-key-copy',
        '/services/car-key-programming',
        '/services/car-key-cutting',
        '/services/car-key-cloning',
        '/services/car-key-repair',
        '/services/customized-car-keys',
        '/services/key-fob-replacement',
        '/services/trunk-unlock',
        '/services/semi-truck-lockout',
        '/services/ignition-repair'
    ];

    const cities = [
        '/service-areas/boise-locksmith',
        '/service-areas/meridian-locksmith',
        '/service-areas/nampa-locksmith',
        '/service-areas/caldwell-locksmith',
        '/service-areas/eagle-locksmith',
        '/service-areas/kuna-locksmith',
    ];

    const seoLandingPages = [
        '/car-key-replacement-boise',
        '/car-key-programming-boise',
        '/emergency-locksmith-boise',
        '/mobile-locksmith-boise',
        '/lost-car-key-boise',
    ];

    const baseRoutes = [...staticPaths, ...services, ...cities, ...seoLandingPages];
    
    // Generate localized versions for each route
    const allRoutes = [];
    baseRoutes.forEach(route => {
        allRoutes.push(route); // Non-prefixed (fallback/default)
        allRoutes.push(`/en${route}`);
        allRoutes.push(`/es${route}`);
    });

    // Remove duplicates (e.g., if any route was already prefixed or empty)
    const uniqueRoutes = [...new Set(allRoutes)];

    return uniqueRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' || route === '/en' || route === '/es' ? 'weekly' : 'monthly',
        priority: route === '' || route === '/en' || route === '/es' ? 1 : 0.8,
    }));
}
