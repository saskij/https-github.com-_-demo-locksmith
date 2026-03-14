import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Trunk Unlock Service Boise | Safe Trunk Opening',
    description: 'Keys locked in the trunk? Our Boise locksmiths provide non-destructive trunk opening services for all vehicle makes and models.',
};

export default async function TrunkUnlockPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.trunkUnlock;
    const serviceImage = img('/images/safe-and-rapid-trunk-opening.jpg');

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
