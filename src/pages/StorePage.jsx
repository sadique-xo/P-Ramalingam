import './StorePage.css'

// Hero image for Store page
const storeHeroImage = '/images/hero/store-hero.webp'

const storeItems = [
    {
        id: 1,
        name: 'Coimbatore Ghee',
        category: 'Dairy Products',
        description: 'Our signature ghee from our own dairy in Coimbatore. Pure, sweet, and unlike any other ghee you\'ve tasted.',
        price: 'Contact for Price',
    },
    {
        id: 2,
        name: 'Coimbatore Butter',
        category: 'Dairy Products',
        description: 'Fresh farm butter sourced directly from our Coimbatore dairy. Rich and creamy.',
        price: 'Contact for Price',
    },
    {
        id: 3,
        name: 'Filter Coffee Powder',
        category: 'Coffee',
        description: 'Authentic South Indian filter coffee blend. The aroma of tradition in every cup.',
        price: 'Contact for Price',
    },
    {
        id: 4,
        name: 'Idli / Dosa Mix',
        category: 'Ready Mixes',
        description: 'Traditional ready-to-make mixes for perfect idlis and crispy dosas at home.',
        price: 'Contact for Price',
    },
    {
        id: 5,
        name: 'Mixed Pickle',
        category: 'Condiments',
        description: 'Traditional South Indian pickle made with authentic spices and recipes.',
        price: 'Contact for Price',
    },
    {
        id: 6,
        name: 'Premium Papad',
        category: 'Snacks',
        description: 'Crispy papads in various flavors. Perfect accompaniment to any meal.',
        price: 'Contact for Price',
    },
]

const partners = [
    {
        name: 'Coimbatore Dairy',
        description: 'Our own dairy ensuring premium quality ghee and butter',
    },
    {
        name: 'South Indian Farms',
        description: 'Direct sourcing from farmlands for freshest products',
    },
    {
        name: 'Traditional Spice Mills',
        description: 'Authentic spices ground using time-honored methods',
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
                    <span className="store-label">Our Specialties</span>
                    <h1 className="store-title">Featured Products</h1>
                    <p className="store-subtitle">
                        Premium South Indian products for your kitchen
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
                        <span className="partners-label">Our Sources</span>
                        <h2 className="partners-title">Quality You Can Trust</h2>
                        <p className="partners-subtitle">
                            Direct sourcing ensures freshness and authenticity in every product
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
                        Our full range of products is available at our Matunga store.
                        Visit us or give us a call for bulk orders and inquiries.
                    </p>
                    <a href="tel:+919999999999" className="btn btn-primary">
                        Call to Order
                    </a>
                </div>
            </section>
        </div>
    )
}

export default StorePage

