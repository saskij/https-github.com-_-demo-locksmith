import HeroSection from '../../components/HeroSection';
import { img } from '../../lib/basePath';
import TrustSection from '../../components/TrustSection';
import CallToAction from '../../components/CallToAction';

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
                bgImage={img('/images/4.jpg')}
            />
            <div style={{ paddingTop: '60px' }}>
                <TrustSection />
            </div>
            <CallToAction />
        </>
    );
}
