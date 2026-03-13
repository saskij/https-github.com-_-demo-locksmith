import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Car Key Cloning Boise | Quick Transponder Duplication',
    description: 'Get a fast spare key with our car key cloning service in Boise. We accurately clone transponder chips and signals for immediate vehicle access.',
};

export default async function CarKeyCloningPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.carKeyCloning;
    const serviceImage = img('/images/car-key-cloning.png');

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
