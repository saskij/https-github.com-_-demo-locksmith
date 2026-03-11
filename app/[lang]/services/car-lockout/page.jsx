import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import Image from 'next/image';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Car Lockout Service Boise | 7 AM – 11 PM Emergency Auto Locksmith',
    description: 'Locked out of your car in Boise? Our emergency auto locksmiths provide rapid response car lockout and key replacement services 7 AM – 11 PM.',
};

export default async function CarLockoutPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.carLockout;
    const serviceImage = img('/images/service-car-lockout.jpg');

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
