import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Semi Truck Lockout Boise | Heavy Duty Towing Alternative',
    description: 'Locked out of your semi-truck or big rig in Boise? We provide fast, damage-free emergency lockout services for commercial trucks and fleets.',
};

export default async function SemiTruckLockoutPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.semiTruckLockout;
    const serviceImage = img('/images/service-semi-truck-lockout.jpg');

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
