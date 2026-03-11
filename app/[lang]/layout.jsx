import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AOSInit from '../../components/AOSInit';
import StickyBar from '../../components/StickyBar';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

export async function generateMetadata({ params }) {
    const { lang } = await params;
    return {
        title: 'Emergency Locksmith Boise | 24/7 Lockout Service',
        description: '24/7 Emergency Locksmith in Boise, Idaho. Car lockouts, house lockouts, lock rekey & installation. Licensed & insured. 15-minute response time. Call now!',
        icons: {
            icon: [
                { url: `${process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith' : ''}/favicon-16.png`, sizes: '16x16', type: 'image/png' },
                { url: `${process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith' : ''}/favicon-32.png`, sizes: '32x32', type: 'image/png' },
                { url: `${process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith' : ''}/favicon.ico` },
            ],
            apple: [
                { url: `${process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith' : ''}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
            ],
        },
        openGraph: {
            title: 'Emergency Locksmith Boise | 24/7 Lockout Service',
            description: 'Locked out? We\'re already on the way. 24/7 emergency locksmith service across the Treasure Valley. Call now for fast response.',
            type: 'website',
        }
    };
}

export default async function RootLayout({ children, params }) {
    const { lang } = await params;
    return (
        <html lang={lang} className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <link
                    rel="preload"
                    as="image"
                    href={`${process.env.NODE_ENV === 'production' ? '/https-github.com-_-demo-locksmith' : ''}/images/hero-homepage.jpg`}
                    fetchPriority="high"
                />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
                <StickyBar lang={lang} />
                <AOSInit />
            </body>
        </html>
    );
}
