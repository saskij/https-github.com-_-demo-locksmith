"use client";

import { useState, useEffect, useRef } from 'react';
import { t } from '../lib/translations';
import { img } from '../lib/basePath';

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

export default function TrustCounters({ lang = 'en' }) {
    const tr = t(lang).trustCounters;

    return (
        <section
            className="counters-section parallax"
            style={{ backgroundImage: `url(${img('/images/block3.jpg')})` }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="counters-grid">
                    {tr.items.map((counter, idx) => (
                        <CounterItem key={idx} {...counter} />
                    ))}
                </div>
            </div>
        </section>
    );
}
