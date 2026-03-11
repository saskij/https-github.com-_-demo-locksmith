"use client";
import React from 'react';
import { img } from '../lib/basePath';

export default function GallerySection({ lang = 'en' }) {
    const tr = t(lang).gallery;

    // Local images for "Our Work" section
    const workImages = [
        img("/images/1.9.jpeg"),
        img("/images/2.1.jpg"),
        img("/images/2.2.jpg"),
        img("/images/2.3.jpg"),
        img("/images/2.4.jpg"),
        img("/images/2.6.jpg")
    ];

    return (
        <section className="photo-gallery" style={{ padding: '80px 0', backgroundColor: 'var(--bg-light)' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 className="section-title">{tr.sectionTitle}</h2>
                    <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        {tr.sectionSubtitle}
                    </p>
                </div>

                <div className="gallery-grid">
                    {workImages.map((src, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <Image
                                src={src}
                                alt={`Locksmith Work Example ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                className="gallery-img"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }

                .gallery-item {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 4 / 3;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
                    background-color: #e5e7eb; /* Fallback placeholder color */
                    cursor: pointer;
                }

                .gallery-item :global(.gallery-img) {
                    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .gallery-item:hover :global(.gallery-img) {
                    transform: scale(1.08);
                }

                /* Tablet Layout */
                @media (max-width: 991px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                /* Mobile Layout - Fully visible now, single column stack */
                @media (max-width: 767px) {
                    .photo-gallery {
                        padding: 60px 0 !important;
                    }
                    .gallery-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    /* Optional: If we want horizontal scroll instead of stack on mobile */
                    /*
                    .gallery-grid {
                        display: flex;
                        flex-wrap: nowrap;
                        overflow-x: auto;
                        scroll-snap-type: x mandatory;
                        padding-bottom: 20px;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none; // Firefox
                    }
                    .gallery-grid::-webkit-scrollbar {
                        display: none; // Chrome/Safari
                    }
                    .gallery-item {
                        flex: 0 0 85%;
                        scroll-snap-align: center;
                        aspect-ratio: 16 / 9;
                    }
                    */
                }
            `}</style>
        </section>
    );
}
