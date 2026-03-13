import { t } from '../../../../lib/translations';
import { img } from '../../../../lib/basePath';
import HeroSection from '../../../../components/HeroSection';
import TrustSection from '../../../../components/TrustSection';
import CallToAction from '../../../../components/CallToAction';
import ServicePageLayout from '../../../../components/ServicePageLayout';

export const metadata = {
    title: 'Broken Key Extraction Boise | Safe Key Fragment Removal',
    description: 'Key snapped in your lock or ignition? Our Boise locksmiths safely extract broken keys and cut new replacements on the spot.',
};

export default async function BrokenKeyExtractionPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.brokenKeyExtraction;
    const serviceImage = img('/images/card11.png');

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
