import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Car Key Repair Boise | Broken Fobs & Shells Fixed',
    description: 'Why buy new when you can repair? We fix broken car key fobs, replace worn buttons, and swap damaged key shells in Boise for a fraction of the cost.',
};

export default async function CarKeyRepairPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.carKeyRepair;
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
