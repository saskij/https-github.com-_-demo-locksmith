import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import TrustCounters from '../components/TrustCounters';
import ServiceCards from '../components/ServiceCards';
import WhyChooseUs from '../components/WhyChooseUs';
import BrandsCarousel from '../components/BrandsCarousel';
import TrustSection from '../components/TrustSection';
import ServiceAreaMap from '../components/ServiceAreaMap';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';

export default function Home() {
    return (
        <>
            <HeroSection />
            <HowItWorks />
            <TrustCounters />
            <ServiceCards />
            <WhyChooseUs />
            <BrandsCarousel />
            <TrustSection />
            <ServiceAreaMap />
            <FAQ />
            <CallToAction />
        </>
    );
}
