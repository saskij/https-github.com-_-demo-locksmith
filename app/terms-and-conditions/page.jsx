import HeroSection from '../../components/HeroSection';

export const metadata = {
    title: 'Terms and Conditions | Car Key Masters Boise',
    description: 'Terms and Conditions for Car Key Masters locksmith services in Boise, Idaho.',
};

export default function TermsAndConditionsPage() {
    return (
        <>
            <HeroSection
                headline="Terms and Conditions"
                headlineAccent=""
                subheadline="Please read these terms carefully before using our services."
                showImage={false}
            />
            <section className="container" style={{ padding: '80px 20px', maxWidth: '800px', lineHeight: '1.8' }}>
                <h2 style={{ marginBottom: '24px' }}>1. Agreement to Terms</h2>
                <p style={{ marginBottom: '24px' }}>By requesting service from Car Key Masters, you agree to be bound by these Terms and Conditions. Our services include auto, residential, and commercial locksmith assistance.</p>

                <h2 style={{ marginBottom: '24px' }}>2. Proof of Ownership</h2>
                <p style={{ marginBottom: '24px' }}>Before we unlock a vehicle or property, you must provide valid identification and proof of ownership or authorization to access the property. If you cannot provide this, we reserve the right to refuse service.</p>

                <h2 style={{ marginBottom: '24px' }}>3. Service Pricing</h2>
                <p style={{ marginBottom: '24px' }}>All pricing provided over the phone is an estimate based on the information provided. The final price may vary depending on the actual lock hardware, vehicle make/model, and complexity of the job when our technician arrives on-site.</p>

                <h2 style={{ marginBottom: '24px' }}>4. Liability</h2>
                <p style={{ marginBottom: '24px' }}>While we strive for damage-free entry and use professional techniques, some highly secure or damaged locks must be drilled or bypassed destructively. We will inform you before proceeding. We are not liable for pre-existing damage to your locks, doors, or vehicles.</p>

                <h2 style={{ marginBottom: '24px' }}>5. Payment</h2>
                <p>Payment is due immediately upon completion of the service. We accept major credit cards and cash.</p>
            </section>
        </>
    );
}
