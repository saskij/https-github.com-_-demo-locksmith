import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOSInit from '../components/AOSInit';
import StickyBar from '../components/StickyBar';

export const metadata = {
    title: 'Emergency Locksmith Boise | 24/7 Lockout Service',
    description: '24/7 Emergency Locksmith in Boise, Idaho. Car lockouts, house lockouts, lock rekey & installation. Licensed & insured. 15-minute response time. Call now!',
    openGraph: {
        title: 'Emergency Locksmith Boise | 24/7 Lockout Service',
        description: 'Locked out? We\'re already on the way. 24/7 emergency locksmith service across the Treasure Valley. Call now for fast response.',
        type: 'website',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
                <StickyBar />
                <AOSInit />
            </body>
        </html>
    );
}
