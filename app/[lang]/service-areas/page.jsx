import { t } from '../../../lib/translations';
import HeroSection from '../../../components/HeroSection';
import { img } from '../../../lib/basePath';
import ServiceAreaMap from '../../../components/ServiceAreaMap';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Service Areas | Emergency Locksmith Treasure Valley',
    description: 'We provide fast, 7 AM – 11 PM emergency locksmith services to Boise, Meridian, Nampa, Caldwell, Eagle, and Kuna.',
};

export default async function ServiceAreasPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.serviceAreas;
    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}
                bgImage={img('/images/hero-service-areas.jpg')}
            />
            <ServiceAreaMap lang={lang} />
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
