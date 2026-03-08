export default function FAQ() {
    const faqs = [
        {
            q: "How much does a car lockout cost?",
            a: "Pricing depends on the vehicle make and model, as well as the time of day. We always provide a clear, upfront estimate when you call before dispatching a technician."
        },
        {
            q: "Can you make a car key without the original?",
            a: "Yes! Our mobile units are fully equipped with advanced key cutting and programming technology to create a brand new key from scratch directly at your vehicle."
        },
        {
            q: "Do you service commercial locks and access control?",
            a: "Absolutely. We specialize in high-security commercial locks, master key systems, panic bars, and commercial rekeying for businesses across the Treasure Valley."
        },
        {
            q: "Will my lock be damaged during unlocking?",
            a: "In 99% of cases, no. Our technicians are trained in non-destructive entry methods. If a lock is completely broken and must be drilled, we will inform you beforehand and offer replacement options."
        }
    ];

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">Common <span style={{ color: 'var(--orange)' }}>Questions</span></h2>
                <div className="faq-grid">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="faq-item"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <summary className="faq-question">
                                {faq.q}
                                <span className="faq-icon">+</span>
                            </summary>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
