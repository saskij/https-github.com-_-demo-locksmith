import { t } from '../lib/translations';

export default function TopBar({ lang = 'en' }) {
    const tr = t(lang).topBar;
    
    return (
        <div className="top-bar">
            <div className="container top-bar__inner">
                <div className="top-bar__left">
                    <span className="top-bar__item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {tr.fastResponse}
                    </span>
                    <span className="top-bar__item hidden-mobile">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        CarKeyMastersBoise@Gmail.com
                    </span>
                </div>
                <div className="top-bar__right">
                    <a href="tel:+12086868099" className="top-bar__link">
                        {tr.freeQuote}
                    </a>
                </div>
            </div>
        </div>
    );
}
