import HeroSection from '../../components/HeroSection';

export const metadata = {
    title: 'Privacy Policy | Car Key Masters Boise',
    description: 'Privacy Policy for Car Key Masters in Boise, Idaho.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <HeroSection
                headline="Privacy Policy"
                headlineAccent=""
                subheadline="How we handle and protect your information."
                showImage={false}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px', lineHeight: '1.8' }}>
                <h2 style={{ marginBottom: '24px' }}>1. Information We Collect</h2>
                <p style={{ marginBottom: '24px' }}>We collect information from you when you call us for service, schedule an appointment, or use our website. This includes your name, phone number, lock/vehicle details, and service location. We only collect data necessary to provide emergency locksmith services.</p>

                <h2 style={{ marginBottom: '24px' }}>2. How We Use Your Information</h2>
                <p style={{ marginBottom: '24px' }}>We use your information exclusively to dispatch technicians to your location, communicate about your service request, process payments, and provide customer support.</p>

                <h2 style={{ marginBottom: '24px' }}>3. Information Sharing</h2>
                <p style={{ marginBottom: '24px' }}>We do not sell, trade, or rent your personal information to third parties. We may share necessary details only with our dispatched technicians or third-party payment processors required to complete your transaction securely.</p>

                <h2 style={{ marginBottom: '24px' }}>4. Security</h2>
                <p style={{ marginBottom: '24px' }}>We implement standard security measures to protect your personal information against unauthorized access or disclosure.</p>

                <h2 style={{ marginBottom: '24px' }}>5. Contact Us</h2>
                <p>If you have questions about this privacy policy, please contact us at the phone number listed on our website.</p>
            </section>
        </>
    );
}
