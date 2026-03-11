import { img } from '../../../lib/basePath';
import { t } from '../../../lib/translations';
import HeroSection from '../../../components/HeroSection';
import ServiceCards from '../../../components/ServiceCards';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Professional Locksmith Services | Car Key Masters Boise',
    description: 'Expert locksmith services in Boise including car key replacement, house lockouts, lock rekeying, and commercial security solutions across the Treasure Valley.',
};

export default async function ServicesPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.services;
    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}

                bgImage={img('/images/hero-services.jpg')}
            />
            <div style={{ paddingTop: '60px' }}>
                <ServiceCards lang={lang} />
            </div>
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
