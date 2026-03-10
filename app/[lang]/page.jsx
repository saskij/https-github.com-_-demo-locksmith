import HeroSection from '../../components/HeroSection';
import HowItWorks from '../../components/HowItWorks';
import TrustCounters from '../../components/TrustCounters';
import ServiceCards from '../../components/ServiceCards';
import WhyChooseUs from '../../components/WhyChooseUs';
import GallerySection from '../../components/GallerySection';
import BrandsCarousel from '../../components/BrandsCarousel';
import TrustSection from '../../components/TrustSection';
import ServiceAreaMap from '../../components/ServiceAreaMap';
import FAQ from '../../components/FAQ';
import CallToAction from '../../components/CallToAction';
import EmergencyBanner from '../../components/EmergencyBanner';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function Home({ params }) {
    const { lang } = await params;
    return (
        <>
            <HeroSection lang={lang} />
            <WhyChooseUs lang={lang} />
            <EmergencyBanner lang={lang} />
            <ServiceCards lang={lang} isHomepage={true} />
            <HowItWorks lang={lang} />
            <BrandsCarousel lang={lang} />
            <TrustCounters lang={lang} />
            <GallerySection lang={lang} />
            <TrustSection lang={lang} />
            <ServiceAreaMap lang={lang} />
            <FAQ lang={lang} />
            <CallToAction lang={lang} />
        </>
    );
}


