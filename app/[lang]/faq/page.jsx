import React from 'react';
import FAQ from '../../../components/FAQ';
import HeroSection from '../../../components/HeroSection';
import CallToAction from '../../../components/CallToAction';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function FAQPage({ params }) {
    const { lang } = await params;
    
    return (
        <main>
            <div style={{ paddingTop: '80px', backgroundColor: 'var(--navy)', color: '#fff', textAlign: 'center', paddingBottom: '40px' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
                        FAQ
                    </h1>
                    <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                        Find answers to the most common questions about our automotive locksmith services.
                    </p>
                </div>
            </div>
            
            < FAQ lang={lang} />
            
            <CallToAction lang={lang} />
        </main>
    );
}
