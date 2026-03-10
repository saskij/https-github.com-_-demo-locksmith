import '../../app/globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AOSInit from '../../components/AOSInit';

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }];
}

export async function generateMetadata({ params }) {
    const { lang } = await params;
    return {
        title: 'Emergency Locksmith Boise | 24/7 Lockout Service',
        description: '24/7 Emergency Locksmith in Boise, Idaho. Car lockouts, house lockouts, lock rekey & installation. Licensed & insured. 15-minute response time. Call now!',
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
        <div className="scroll-smooth" lang={lang}>
            <main>{children}</main>
        </div>
    );
}
