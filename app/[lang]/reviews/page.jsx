import { t } from '../../../lib/translations';
import HeroSection from '../../../components/HeroSection';
import { img } from '../../../lib/basePath';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Customer Reviews | Emergency Locksmith Boise',
    description: 'Read what our customers in Boise and the Treasure Valley say about our fast, reliable 24/7 emergency locksmith services.',
};

export default async function ReviewsPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.reviews;
    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}
                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/hero-services.jpg' : '/images/hero-services.jpg'}
            />
            <TrustSection lang={lang} />
            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
