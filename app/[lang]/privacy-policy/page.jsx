import HeroSection from '../../../components/HeroSection';
import { t } from '../../../lib/translations';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function PrivacyPolicyPage({ params }) {
    const { lang } = await params;
    const tr = t(lang).privacyPolicy;

    return (
        <>
            <HeroSection
                headline={tr.title}
                headlineAccent=""
                subheadline={tr.subtitle}
                showImage={false}
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
