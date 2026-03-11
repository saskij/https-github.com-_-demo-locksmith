import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Car Key Replacement Boise | Cut & Program New Keys',
    description: 'Lost your car keys in Boise? Our mobile auto locksmiths can cut and program a brand new transponder, fob, or smart key on the spot for all vehicle makes.',
};

export default async function CarKeyReplacementPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.carKeyReplacement;
    const serviceImage = img('/images/service-car-key-copy.jpg');

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
