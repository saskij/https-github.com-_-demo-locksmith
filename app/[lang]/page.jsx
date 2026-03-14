import HeroSection from '../../components/HeroSection';
import ServiceCards from '../../components/ServiceCards';
import EmergencyBanner from '../../components/EmergencyBanner';
import HowItWorks from '../../components/HowItWorks';
import TrustCounters from '../../components/TrustCounters';
import WhyChooseUs from '../../components/WhyChooseUs';
import TrustSection from '../../components/TrustSection';
import CallToAction from '../../components/CallToAction';
import ContactSection from '../../components/ContactSection';
import FAQ from '../../components/FAQ';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function Home({ params }) {
    const { lang } = await params;
    return (
        <main>
            {/* 1️⃣ HERO SECTION */}
            <HeroSection lang={lang} isHomepage={true} />

            {/* 2️⃣ PROFESSIONAL LOCKSMITH SERVICES */}
            <ServiceCards lang={lang} isHomepage={true} />

            {/* ➕ EMERGENCY BANNER DIVIDER */}
            <EmergencyBanner lang={lang} />

            {/* 3️⃣ HOW IT WORKS */}
            <HowItWorks lang={lang} />

            {/* ➕ TRUST COUNTERS DIVIDER */}
            <TrustCounters lang={lang} />

            {/* 4️⃣ WHY CHOOSE CAR KEY MASTERS */}
            <WhyChooseUs lang={lang} />

            {/* 5️⃣ CUSTOMER STORIES/REVIEWS */}
            <TrustSection lang={lang} />

            {/* ➕ CALL TO ACTION DIVIDER */}
            <CallToAction lang={lang} />

            {/* 6️⃣ CONTACT FORM */}
            <ContactSection lang={lang} />

            {/* ❓ FAQ SECTION */}
            <FAQ lang={lang} />
        </main>
    );
}


