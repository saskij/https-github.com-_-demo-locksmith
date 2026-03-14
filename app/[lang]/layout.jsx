import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AOSInit from '../../components/AOSInit';
import StickyBar from '../../components/StickyBar';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

import translations from '../../lib/translations';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const t = translations[lang] || translations.en;
    
    // Fallback for metadata if not explicitly defined in translations for a specific page
    // but here we use it for the layout (homepage)
    const title = t.metadata?.title || 'Emergency Locksmith Boise | 7 AM – 11 PM Lockout Service';
    const description = t.metadata?.description || "Locked out? We're already on the way. Fast mobile locksmith service across the Boise metro area. Available daily from 7 AM to 11 PM. Licensed & insured.";

    return {
        metadataBase: new URL('https://www.carkeymastersboise.com'),
        title: title,
        description: description,
        alternates: {
            canonical: `/${lang}`,
            languages: {
                'en': '/en',
                'es': '/es',
                'x-default': '/en',
            },
        },
        icons: {
            icon: [
                { url: `${(process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1') ? '/https-github.com-_-demo-locksmith' : ''}/favicon-16.png`, sizes: '16x16', type: 'image/png' },
                { url: `${(process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1') ? '/https-github.com-_-demo-locksmith' : ''}/favicon-32.png`, sizes: '32x32', type: 'image/png' },
                { url: `${(process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1') ? '/https-github.com-_-demo-locksmith' : ''}/favicon.ico` },
            ],
            apple: [
                { url: `${(process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1') ? '/https-github.com-_-demo-locksmith' : ''}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
            ],
        },
        openGraph: {
            title: title,
            description: description,
            type: 'website',
        }
    };
}

export default async function RootLayout({ children, params }) {
    const { lang } = await params;
    return (
        <>
            <Header lang={lang} />
            <main>{children}</main>
            <Footer lang={lang} />
            <StickyBar lang={lang} />
            <AOSInit />
        </>
    );
}

// Triggering fresh deck with metadata fixes
