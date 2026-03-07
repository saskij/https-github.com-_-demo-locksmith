import HeroSection from '../../components/HeroSection';
import ServiceAreaMap from '../../components/ServiceAreaMap';
import CallToAction from '../../components/CallToAction';

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
                bgImage="/https-github.com-_-demo-locksmith/images/hero-city.png"
            />
            <div style={{ paddingTop: '60px' }}>
                <ServiceAreaMap />
            </div>
            <CallToAction />
        </>
    );
}
