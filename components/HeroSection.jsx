import Image from 'next/image';
import TopBar from './TopBar';
import { img } from '../lib/basePath';
import { t } from '../lib/translations';
import BrandsCarousel from './BrandsCarousel';

export default function HeroSection({
    lang = 'en',
    headline,
    headlineAccent = "",
    subheadline,
    bgImage = img("/images/hero-homepage.jpg"),
    showImage = true,
    isHomepage = false
}) {
    const tr = t(lang).hero;
    const resolvedHeadline = headline || tr.headline;
    const resolvedSubheadline = subheadline || tr.subheadline;

    return (
        <>
            <section className="hero" id="hero">
                {showImage && (
                    <div className="hero__bg">
                        <Image
                            src={bgImage}
                            alt="Professional locksmith technician"
                            fill
                            sizes="100vw"
                            priority
                            fetchPriority="high"
                            style={{ objectFit: 'cover', objectPosition: 'center right' }}
                        />
                    </div>
                )}
                <div className="hero__overlay" style={!showImage ? { background: 'var(--navy)' } : {}}></div>
                <div className="hero__content">
                    {/* --- DESKTOP VERSION (Restored from Step 309) --- */}
                    <div className="desktop-only">
                        <h1 className="hero__title">
                            <span className="hero__title-line">{resolvedHeadline}</span>
                            {headlineAccent && <span className="hero__title-line hero__title-line--accent">{headlineAccent}</span>}
                        </h1>

                        <div className="hero__subtitle-group" style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.2s forwards', marginBottom: '32px' }}>
                            <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>
                                {resolvedSubheadline}
                            </p>
                            {!isHomepage && (
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', marginBottom: '24px', maxWidth: '600px', lineHeight: '1.6' }}>
                                    {tr.description}
                                </p>
                            )}
                        </div>

                        <div className="hero__actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
                            <a href="tel:+12086868099" className="btn btn--primary btn--lg" style={{ fontSize: '1.1rem', padding: '16px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '12px', fontWeight: '700' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                {tr.callBtn}
                            </a>
                            <a href="#contact" className="btn btn--outline btn--lg" style={{ fontSize: '1.1rem', padding: '16px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '12px', fontWeight: '700', border: '2px solid white', color: 'white' }}>
                                {tr.getHelpBtn}
                            </a>
                        </div>
                        
                        <p className="hero__serving-line" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' }}>
                            {tr.servingLine}
                        </p>

                        <div className="hero__badges" style={{ marginTop: '32px' }}>
                            <div className="hero__badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                <span>{tr.badgeExperience}</span>
                            </div>
                            <div className="hero__badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                <span>{tr.badgeLicensed}</span>
                            </div>
                            <div className="hero__badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                <span>{tr.badgeArrival}</span>
                            </div>
                            <div className="hero__badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>{tr.badgeArea}</span>
                            </div>
                        </div>
                    </div>

                    {/* --- MOBILE VERSION (Simplified & Conversion Focused) --- */}
                    <div className="mobile-only">
                        <span className="hero__small-text">{tr.mobileSmallText}</span>
                        <h1 className="hero__title">{tr.mobileHeadline}</h1>
                        <p className="hero__subtitle">{tr.mobileSubheadline}</p>

                        <div className="hero__actions">
                            <a href="tel:+12086868099" className="btn btn--primary btn--lg" style={{ fontSize: '1.1rem', padding: '16px 24px', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '12px', fontWeight: '700' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                {tr.callBtn} (208) 686-8099
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <TopBar lang={lang} />
            <BrandsCarousel lang={lang} />
        </>
    );
}
