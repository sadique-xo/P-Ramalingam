import './StorePage.css'

// Hero image for Store page
const storeHeroImage = '/images/hero/store-hero.webp'

const storeItems = [
    {
        id: 1,
        name: 'Cuku House Blend',
        category: 'Coffee Beans',
        description: 'Our signature medium roast blend with notes of chocolate and caramel. Sourced from the finest estates.',
        price: '₹650',
    },
    {
        id: 2,
        name: 'Single Origin Ethiopian',
        category: 'Coffee Beans',
        description: 'Light roast with floral and fruity notes. Perfect for pour-over enthusiasts.',
        price: '₹850',
    },
    {
        id: 3,
        name: 'Artisan Ceramic Mug',
        category: 'Drinkware',
        description: 'Handcrafted by local potters. Each piece is unique with our minimal logo.',
        price: '₹450',
    },
    {
        id: 4,
        name: 'Pour Over Kit',
        category: 'Brewing',
        description: 'Complete home brewing kit with ceramic dripper, carafe, and filters.',
        price: '₹2,200',
    },
    {
        id: 5,
        name: 'Cuku Tote Bag',
        category: 'Merchandise',
        description: 'Organic cotton tote with our geometric logo. Perfect for market runs.',
        price: '₹350',
    },
    {
        id: 6,
        name: 'Biscoff Cookie Jar',
        category: 'Treats',
        description: 'Take home our famous Lotus Biscoff cookies. Glass jar with 15 pieces.',
        price: '₹480',
    },
]

const partners = [
    {
        name: 'Blue Tokai',
        description: 'Premium Indian specialty coffee roasters',
    },
    {
        name: 'Jharkhand Honey Co.',
        description: 'Wild forest honey from local beekeepers',
    },
    {
        name: 'Ranchi Pottery',
        description: 'Handcrafted ceramics by local artisans',
    },
    {
        name: 'Mountain Spice',
        description: 'Organic spices from the Chota Nagpur plateau',
    },
]

function StorePage() {
    return (
        <div className="store-page">
            {/* Hero */}
            <section className="store-hero">
                <div className="store-hero-bg" style={{ backgroundImage: `url(${storeHeroImage})` }}>
                    <div className="store-hero-overlay"></div>
                </div>
                <div className="store-hero-content">
                    <span className="store-label">Take Home</span>
                    <h1 className="store-title">The Store</h1>
                    <p className="store-subtitle">
                        Curated goods to bring the Cuku experience home
                    </p>
                </div>
            </section>

            {/* Store Items */}
            <section className="store-items section">
                <div className="container">
                    <div className="store-grid">
                        {storeItems.map(item => (
                            <div key={item.id} className="store-card">
                                <div className="store-card-image">
                                    <div className="store-card-placeholder">
                                        <span>{item.category}</span>
                                    </div>
                                </div>
                                <div className="store-card-content">
                                    <span className="store-card-category">{item.category}</span>
                                    <h3 className="store-card-name">{item.name}</h3>
                                    <p className="store-card-desc">{item.description}</p>
                                    <div className="store-card-footer">
                                        <span className="store-card-price">{item.price}</span>
                                        <button className="btn btn-outline btn-sm">Inquire</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="store-partners section">
                <div className="container">
                    <div className="partners-header text-center">
                        <span className="partners-label">Our Partners</span>
                        <h2 className="partners-title">Local Artisans We Love</h2>
                        <p className="partners-subtitle">
                            We proudly source from and collaborate with these incredible local makers
                        </p>
                    </div>

                    <div className="partners-grid">
                        {partners.map((partner, index) => (
                            <div key={index} className="partner-card">
                                <div className="partner-logo">
                                    <span>{partner.name.charAt(0)}</span>
                                </div>
                                <h3 className="partner-name">{partner.name}</h3>
                                <p className="partner-desc">{partner.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="store-cta section">
                <div className="container container-narrow text-center">
                    <h2 className="store-cta-title">Visit Us In Store</h2>
                    <p className="store-cta-text">
                        Our full collection is available at both Cuku locations.
                        Can't make it? Give us a call and we'll arrange delivery within Ranchi.
                    </p>
                    <a href="tel:+919934627281" className="btn btn-primary">
                        Call to Order
                    </a>
                </div>
            </section>
        </div>
    )
}

export default StorePage
