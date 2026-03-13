import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Car Key Programming Boise | Transponder & Fob Syncing',
    description: 'Expert car key programming in Boise. We sync transponder chips, smart keys, and remote fobs to your vehicle’s immobilizer system. Dealer quality at lower prices.',
};

export default async function CarKeyProgrammingPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.carKeyProgramming;
    const serviceImage = img('/images/service-car-key-programming.jpg');

    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}
                bgImage={img('/images/hero-services.jpg')}
            />
            <ServicePageLayout 
                tr={tr} 
                serviceImage={serviceImage} 
                lang={lang} 
            />
            <TrustSection lang={lang} />
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
