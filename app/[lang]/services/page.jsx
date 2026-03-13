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
            <section className="services-seo" style={{ padding: '80px 0 20px' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>{tr.seo.title}</h2>
                        <div className="seo-text" style={{ textAlign: 'left', color: 'var(--text-light)', lineHeight: '1.8' }}>
                            {tr.seo.paragraphs.map((para, idx) => (
                                <p key={idx} style={{ marginBottom: '20px', fontSize: '1.1rem' }}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ paddingTop: '20px' }}>
                <ServiceCards lang={lang} />
            </div>
            <section className="services-seo-secondary" style={{ padding: '60px 0 80px' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>{tr.seoSecondary.title}</h2>
                        <div className="seo-text" style={{ textAlign: 'left', color: 'var(--text-light)', lineHeight: '1.8' }}>
                            {tr.seoSecondary.paragraphs.map((para, idx) => (
                                <p key={idx} style={{ marginBottom: '20px', fontSize: '1.1rem' }}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction lang={lang} />

            <section className="services-service-area" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>{tr.serviceAreaSeo.title}</h2>
                        <div className="seo-text" style={{ textAlign: 'left', color: 'var(--text-light)', lineHeight: '1.8' }}>
                            {tr.serviceAreaSeo.paragraphs.map((para, idx) => (
                                <p key={idx} style={{ marginBottom: '20px', fontSize: '1.1rem' }}>{para}</p>
                            ))}
                            <div style={{ marginTop: '30px' }}>
                                <p style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--brand-orange)', fontSize: '1.3rem' }}>Locations We Serve:</p>
                                <ul style={{ 
                                    listStyleType: 'none', 
                                    padding: '0 0 30px 0', 
                                    display: 'flex', 
                                    flexWrap: 'wrap', 
                                    justifyContent: 'center',
                                    gap: '10px 25px',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    color: 'var(--text-light)',
                                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                                }}>
                                    {tr.serviceAreaSeo.cities.map((city, idx) => (
                                        <li key={idx}>• {city}</li>
                                    ))}
                                </ul>

                                <p style={{ fontWeight: '700', marginTop: '30px', marginBottom: '15px', color: 'var(--brand-orange)', fontSize: '1.3rem' }}>Services Provided:</p>
                                <ul style={{ 
                                    listStyleType: 'none', 
                                    padding: 0, 
                                    display: 'flex', 
                                    flexWrap: 'wrap', 
                                    justifyContent: 'center',
                                    gap: '10px 25px',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    color: 'var(--text-light)'
                                }}>
                                    {tr.serviceAreaSeo.services.map((service, idx) => (
                                        <li key={idx}>• {service}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}
