import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Key Fob Replacement Boise | Smart Key & Remote Programming',
    description: 'Lost or broken car remote? We provide full key fob replacement and programming services in Boise for all major vehicle brands.',
};

export default async function KeyFobReplacementPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.keyFobReplacement;
    const serviceImage = img('/images/complete-auto-remote-solutions.jpg');

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
