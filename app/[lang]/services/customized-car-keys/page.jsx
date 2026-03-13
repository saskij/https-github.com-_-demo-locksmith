import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Customized Car Keys Boise | Personalized Key Designs',
    description: 'Upgrade your vehicle keys with our customization service in Boise. From flip-key conversions to colorful shells, we make your keys unique.',
};

export default async function CustomizedCarKeysPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.customizedCarKeys;
    const serviceImage = img('/images/card7.png');

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
