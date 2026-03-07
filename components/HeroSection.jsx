import Image from 'next/image';
import TopBar from './TopBar';

export default function HeroSection({
    headline = "Locked Out?",
    headlineAccent = "We're Already On The Way.",
    subheadline = "24/7 Emergency Locksmith\nFast arrival anywhere in Boise.",
    bgImage = "/images/hero.png",
    showImage = true
}) {
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
                            style={{ objectFit: 'cover', objectPosition: 'center right' }}
                        />
                    </div>
                )}
                <div className="hero__overlay" style={!showImage ? { background: 'var(--navy)' } : {}}></div>
                <div className="hero__content">
                    <h1 className="hero__title">
                        <span className="hero__title-line">{headline}</span>
                        {headlineAccent && <span className="hero__title-line hero__title-line--accent">{headlineAccent}</span>}
                    </h1>
                    <p className="hero__subtitle" style={{ whiteSpace: 'pre-line' }}>{subheadline}</p>

                    <a href="tel:+12085551234" className="hero__cta btn btn--primary btn--lg">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        Call Now (208) 555-1234
                    </a>

                    <div className="hero__badges">
                        <div className="hero__badge">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            <span>Licensed & Insured</span>
                        </div>
                        <div className="hero__badge">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <span>15 Min Response</span>
                        </div>
                        <div className="hero__badge">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>Local Technicians</span>
                        </div>
                    </div>
                </div>
            </section>
            <TopBar />
        </>
    );
}
