"use client";
import React from 'react';
import { t } from '../lib/translations';

export default function ContactSection({ lang = 'en' }) {
    const tr = t(lang).contactSection;

    return (
        <section className="contact-section" id="contact" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="contact-layout" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
                    <div className="contact-info-panel" style={{ flex: '1 1 400px' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 20px 0' }}>{tr.sectionTitle}</h2>
                        <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 40px 0', maxWidth: '100%' }}>{tr.sectionSubtitle}</p>
                        
                        <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div className="info-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255, 106, 0, 0.1)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <a href="tel:+12086868099" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--navy)', textDecoration: 'none' }}>(208) 686-8099</a>
                            </div>
                            <div className="contact-info-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div className="info-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255, 106, 0, 0.1)', color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <span style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>Boise, Meridian, Nampa & surrounding areas</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel" style={{ flex: '1 1 500px', backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--navy)' }}>{tr.form.name}</label>
                                <input type="text" placeholder={tr.form.namePlaceholder} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} required />
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--navy)' }}>{tr.form.phone}</label>
                                <input type="tel" placeholder={tr.form.phonePlaceholder} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} required />
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--navy)' }}>{tr.form.email}</label>
                                <input type="email" placeholder={tr.form.emailPlaceholder} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} required />
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--navy)' }}>{tr.form.vehicle}</label>
                                <input type="text" placeholder={tr.form.vehiclePlaceholder} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
                            </div>
                            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--navy)' }}>{tr.form.message}</label>
                                <textarea rows="4" placeholder={tr.form.messagePlaceholder} style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'none' }} required></textarea>
                            </div>
                            <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', padding: '16px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: '700', marginTop: '10px' }}>
                                {tr.form.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .contact-section { padding: 60px 0 !important; }
                    .contact-section > .container > div { gap: 40px !important; }
                    div[style*="flex: 1 1 500px"] { padding: 30px 20px !important; }
                }
            `}</style>
        </section>
    );
}
