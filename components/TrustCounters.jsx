export default function TrustCounters() {
    const counters = [
        { value: "15+", label: "Min Response Time" },
        { value: "10k+", label: "Happy Customers" },
        { value: "24/7", label: "Emergency Service" },
        { value: "100%", label: "Licensed & Bonded" }
    ];

    return (
        <section className="counters-section">
            <div className="container">
                <div className="counters-grid">
                    {counters.map((counter, idx) => (
                        <div key={idx} className="counter-item">
                            <div className="counter-value">{counter.value}</div>
                            <div className="counter-label">{counter.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
