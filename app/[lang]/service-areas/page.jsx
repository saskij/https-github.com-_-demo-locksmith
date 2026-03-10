import HeroSection from '../../../components/HeroSection';
import { img } from '../../../lib/basePath';
import ServiceAreaMap from '../../../components/ServiceAreaMap';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Service Areas | Emergency Locksmith Treasure Valley',
    description: 'We provide fast, 24/7 emergency locksmith services to Boise, Meridian, Nampa, Caldwell, Eagle, and Kuna.',
};

export default function ServiceAreasPage() {
    return (
        <>
            <HeroSection
                headline="Service Areas"
                headlineAccent="Treasure Valley Wide"
                subheadline="Fast emergency locksmith service stationed across Boise and surrounding cities for rapid response times."
                bgImage={img('/images/5.jpg')}
            />
            <div style={{ paddingTop: '60px' }}>
                <ServiceAreaMap />
            </div>
            <CallToAction />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
