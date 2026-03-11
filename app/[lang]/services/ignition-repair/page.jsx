import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Ignition Repair Boise | Ignition Switch Fixes',
    description: 'Key won\'t turn in the ignition? Our mobile locksmiths repair and replace jammed or broken automotive ignitions directly at your location in Boise.',
};

export default async function IgnitionRepairPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.ignitionRepair;
    const serviceImage = img('/images/service-ignition-repair.jpg');

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
