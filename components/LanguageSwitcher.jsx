"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Extract current language from URL (e.g., /es/services -> es)
    const currentLang = pathname.split("/")[1] || "en";

    const languages = [
        {
            code: "en",
            name: "English",
            flag: "🇺🇸"
        },
        {
            code: "es",
            name: "Español",
            flag: "🇪🇸"
        }
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const switchLanguage = (newLang) => {
        // Set cookie to remember user preference
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

        setIsOpen(false);

        if (newLang === currentLang) return;

        // Construct the new path
        // Remove the current language from the path if it exists
        const segments = pathname.split("/");
        const firstSegment = segments[1];

        let newPath;
        if (["en", "es"].includes(firstSegment)) {
            // Replace existing language code
            segments[1] = newLang;
            newPath = segments.join("/");
        } else {
            // Prepend new language code
            newPath = `/${newLang}${pathname === "/" ? "" : pathname}`;
        }

        // Import BASE_PATH dynamically or from static if available
        // Since we are inside the component, let's just require it to avoid adding top level imports that might conflict
        const { BASE_PATH } = require('../lib/basePath');

        // Ensure we don't double up BASE_PATH if it's somehow already there, though unlikely
        const finalPath = newPath.startsWith(BASE_PATH) ? newPath : `${BASE_PATH}${newPath}`;

        router.push(finalPath);
        router.refresh();
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const activeLangData = languages.find(l => l.code === currentLang) || languages[0];

    return (
        <div className="language-switcher" ref={dropdownRef} style={{ position: 'relative', marginLeft: '16px' }}>
            <button
                onClick={toggleDropdown}
                aria-label="Select Language"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'none',
                    border: isOpen ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.2)',
                    padding: '8px 14px',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: isOpen ? 'var(--navy)' : '#ffffff',
                    backgroundColor: isOpen ? '#f5f5f5' : 'transparent',
                    transition: 'all 0.2s ease'
                }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>{activeLangData.code}</span>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease',
                        opacity: 0.6,
                        marginLeft: '2px'
                    }}
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    minWidth: '150px',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang.code)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                background: currentLang === lang.code ? '#f8f9fa' : 'none',
                                border: 'none',
                                width: '100%',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                color: currentLang === lang.code ? 'var(--orange)' : 'var(--navy)',
                                fontWeight: currentLang === lang.code ? '600' : '400',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f3f5'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentLang === lang.code ? '#f8f9fa' : 'transparent'}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
