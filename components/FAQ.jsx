import { t } from '../lib/translations';

export default function FAQ({ lang = 'en' }) {
    const tr = t(lang).faq;

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">{tr.sectionTitle} <span style={{ color: 'var(--orange)' }}>{tr.sectionTitleAccent}</span></h2>
                <div className="faq-grid">
                    {tr.items.map((faq, idx) => (
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
