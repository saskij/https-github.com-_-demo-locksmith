"use client";

import { useState, useEffect, useRef } from 'react';

function CounterItem({ value, label }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);
    const animatedRef = useRef(false);

    // Parsing logic
    const isStatic = value.includes('/');
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animatedRef.current) {
                    setIsVisible(true);
                    animatedRef.current = true;
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || isStatic) return;

        let startTimestamp = null;
        const duration = 2000; // 2 seconds

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // easeOutQuart easing for a smoother, more natural feel
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            const currentCount = Math.floor(easeProgress * numericValue);
            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, numericValue, isStatic]);

    return (
        <div ref={counterRef} className="counter-item">
            <div className="counter-value">
                {isStatic ? value : `${count}${suffix}`}
            </div>
            <div className="counter-label">{label}</div>
        </div>
    );
}

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
                        <CounterItem key={idx} {...counter} />
                    ))}
                </div>
            </div>
        </section>
    );
}
