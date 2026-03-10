import { img } from '../../../lib/basePath';
import HeroSection from '../../../components/HeroSection';
import ServiceCards from '../../../components/ServiceCards';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Professional Locksmith Services | Car Key Masters Boise',
    description: 'Expert locksmith services in Boise including car key replacement, house lockouts, lock rekeying, and commercial security solutions across the Treasure Valley.',
};

export default function ServicesPage() {
    return (
        <>
            <HeroSection
                headline="Locksmith Services"
                headlineAccent="Specialized Auto Locksmith"
                subheadline="Fast, reliable, and affordable automotive locksmith services for any vehicle."

                bgImage={img('/images/2.jpg')}
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
