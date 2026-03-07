export default function sitemap() {
    const baseUrl = 'https://carkeymastersboise.com'; // Replace with actual domain later

    const staticPages = [
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
    ];

    const cities = [
        '/service-areas/boise-locksmith',
        '/service-areas/meridian-locksmith',
        '/service-areas/nampa-locksmith',
        '/service-areas/caldwell-locksmith',
        '/service-areas/eagle-locksmith',
        '/service-areas/kuna-locksmith',
    ];

    const allRoutes = [...staticPages, ...services, ...cities];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
