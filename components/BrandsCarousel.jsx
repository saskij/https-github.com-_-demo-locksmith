import { t } from '../lib/translations';

export default function BrandsCarousel({ lang = 'en' }) {
    const tr = t(lang).brandsCarousel;
    const brands = [
        "Toyota", "Ford", "Honda", "Chevrolet", "Nissan", "Jeep", "Subaru",
        "Hyundai", "Kia", "Dodge", "Lexus", "BMW", "Audi", "Schlage", "Kwikset", "Yale"
    ];

    return (
        <section className="brands-carousel">
            <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 className="section-title">{tr.title}</h2>
                <p className="section-subtitle">{tr.subtitle}</p>
            </div>
            <div className="marquee">
                <div className="marquee-content">
                    {brands.map((brand, idx) => (
                        <span key={idx} className="brand-item">{brand}</span>
                    ))}
                    {brands.map((brand, idx) => (
                        <span key={idx + brands.length} className="brand-item">{brand}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
