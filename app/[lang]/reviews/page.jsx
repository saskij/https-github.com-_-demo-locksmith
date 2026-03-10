import HeroSection from '../../../components/HeroSection';
import TrustSection from '../../../components/TrustSection';
import CallToAction from '../../../components/CallToAction';

export const metadata = {
    title: 'Customer Reviews | Emergency Locksmith Boise',
    description: 'Read what our customers in Boise and the Treasure Valley say about our fast, reliable 24/7 emergency locksmith services.',
};

export default function ReviewsPage() {
    return (
        <>
            <HeroSection
                headline="Customer Reviews"
                headlineAccent="Trusted Across Boise"
                subheadline="See why we are the top-rated emergency locksmith in the Treasure Valley."
                bgImage={process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith/images/reviews-hero.jpg' : '/images/reviews-hero.jpg'}
            />
            <div style={{ paddingTop: '60px' }}>
                <TrustSection />
            </div>
            <CallToAction />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
