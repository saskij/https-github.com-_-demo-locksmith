import HeroSection from '../../../components/HeroSection';
import ServiceCards from '../../../components/ServiceCards';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Automotive Locksmith Services | Car Key Masters Boise',
    description: 'Our professional automotive locksmith services include car lockouts, key replacement, fob programming, and ignition repair across the Boise Metro Area.',
};

export default function ServicesPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith Services"
                headlineAccent="Specialized Auto Locksmith"
                subheadline="Fast, reliable, and affordable automotive locksmith services for any vehicle."

                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/services-hero.jpeg' : '/images/services-hero.jpeg'}
            />
            <div style={{ paddingTop: '60px' }}>
                <ServiceCards />
            </div>
            <CallToAction />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
