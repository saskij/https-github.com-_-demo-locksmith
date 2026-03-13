import { t } from '../../../lib/translations';
import HeroSection from '../../../components/HeroSection';
import { img } from '../../../lib/basePath';
import CallToAction from '../../../components/CallToAction';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
    title: 'Contact Us | Emergency Locksmith Boise',
    description: 'Need a locksmith now? Contact our 7 AM – 11 PM emergency team in Boise for immediate assistance with car, home, or commercial lockouts.',
};

export default async function ContactPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).pages.contact;
    return (
        <>
            <HeroSection lang={lang}
                headline={tr.title}
                headlineAccent={tr.headlineAccent}
                subheadline={tr.subtitle}

                bgImage={img('/images/hero-contact.jpg')}
            />
            
            <ContactSection lang={lang} />

            <CallToAction lang={lang} />
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
