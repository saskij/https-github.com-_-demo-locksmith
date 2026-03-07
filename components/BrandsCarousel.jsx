export default function BrandsCarousel() {
    const brands = [
        "Toyota", "Ford", "Honda", "Chevrolet", "Nissan", "Jeep", "Subaru",
        "Hyundai", "Kia", "Dodge", "Lexus", "BMW", "Audi", "Schlage", "Kwikset", "Yale"
    ];

    return (
        <section className="brands-carousel">
            <div className="container">
                <p className="brands-title">We Service All Major Vehicle & Lock Brands</p>
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
