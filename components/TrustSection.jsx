export default function TrustSection() {
    return (
        <section className="trust" id="reviews">
            <div className="container">
                <h2 className="section-title">Trusted by Local Customers</h2>
                <p className="section-subtitle">See why Boise residents choose us in their time of need.</p>

                {/* Google Rating */}
                <div className="trust__rating">
                    <div className="trust__rating-badge animate-in">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                        <div className="trust__rating-info">
                            <span className="trust__rating-score">4.9</span>
                            <div className="trust__stars">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                ))}
                            </div>
                            <span className="trust__rating-count">Based on 200+ reviews</span>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="trust__testimonials">
                    <div className="testimonial animate-in">
                        <div className="testimonial__header">
                            <div className="testimonial__avatar" style={{ background: '#4285F4' }}>JM</div>
                            <div>
                                <p className="testimonial__name">John M.</p>
                                <div className="testimonial__stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial__text">"Arrived in 10 minutes and unlocked my car quickly. Highly recommended — professional, fast, and affordable."</p>
                    </div>

                    <div className="testimonial animate-in">
                        <div className="testimonial__header">
                            <div className="testimonial__avatar" style={{ background: '#34A853' }}>SR</div>
                            <div>
                                <p className="testimonial__name">Sarah R.</p>
                                <div className="testimonial__stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial__text">"Locked out of my house at midnight. They showed up quickly and were incredibly kind. Best locksmith in Boise!"</p>
                    </div>

                    <div className="testimonial animate-in">
                        <div className="testimonial__header">
                            <div className="testimonial__avatar" style={{ background: '#EA4335' }}>DT</div>
                            <div>
                                <p className="testimonial__name">David T.</p>
                                <div className="testimonial__stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial__text">"Needed my office locks rekeyed after losing a set of keys. Same-day service and very reasonable pricing. Five stars!"</p>
                    </div>
                </div>

                {/* Security Badges */}
                <div className="trust__badges animate-in">
                    <div className="trust__badge-item">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F2A44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                        <span>Licensed Locksmith</span>
                    </div>
                    <div className="trust__badge-item">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F2A44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" /></svg>
                        <span>Secure Service</span>
                    </div>
                    <div className="trust__badge-item">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0F2A44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        <span>Verified Local Business</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
