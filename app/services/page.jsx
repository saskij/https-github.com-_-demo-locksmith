import HeroSection from '../../components/HeroSection';
import ServiceCards from '../../components/ServiceCards';
import CallToAction from '../../components/CallToAction';

export const metadata = {
    title: 'Locksmith Services | Emergency Locksmith Boise',
    description: 'Our professional locksmith services include car lockouts, house lockouts, lock rekeying, and commercial lock services across the Treasure Valley.',
};

export default function ServicesPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith Services"
                headlineAccent="7 AM – 11 PM Professional Solutions"
                subheadline="Fast, reliable, and affordable locksmith services for your home, business, or vehicle."
            
                bgImage="/https-github.com-_-demo-locksmith/images/services-hero.jpeg"
            />
            <div style={{ paddingTop: '60px' }}>
                <ServiceCards />
            </div>
            <CallToAction />
        </>
    );
}
