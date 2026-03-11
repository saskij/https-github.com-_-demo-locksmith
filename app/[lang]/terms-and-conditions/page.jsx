import HeroSection from '../../../components/HeroSection';
import { t } from '../../../lib/translations';
import { img } from '../../../lib/basePath';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function TermsAndConditionsPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).terms;

    return (
        <>
            <HeroSection
                headline={tr.title}
                headlineAccent=""
                subheadline={tr.subtitle}
                bgImage={img('/images/hero-homepage.jpg')}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px', lineHeight: '1.8' }}>
                {tr.sections.map((section, index) => (
                    <div key={index} style={{ marginBottom: '40px' }}>
                        <h2 style={{ marginBottom: '24px', color: 'var(--primary)' }}>{section.title}</h2>
                        <p>{section.content}</p>
                    </div>
                ))}
            </section>
        </>
    );
}
