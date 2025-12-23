import { useState, useEffect } from 'react'
import './MenuPage.css'

// Hero image for Menu page
const menuHeroImage = 'https://images.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.000129059138.a6n4/catalogue/p-ramalingam-matunga-east-mumbai-sweet-shops-1bpegb3.jpg'

function MenuPage() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    // Load category data
    useEffect(() => {
        fetch('/appukart-categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error loading categories:', error)
                setLoading(false)
            })
    }, [])

    // Separate featured and regular categories
    const featuredCategories = categories.filter(cat => cat.featured)
    const regularCategories = categories.filter(cat => !cat.featured)

    if (loading) {
        return (
            <div className="menu-page">
                <section className="menu-hero">
                    <div className="menu-hero-bg" style={{ backgroundImage: `url(${menuHeroImage})` }}>
                        <div className="menu-hero-overlay"></div>
                    </div>
                    <div className="menu-hero-content">
                        <span className="menu-label">Products</span>
                        <h1 className="menu-title">Our Products</h1>
                        <p className="menu-subtitle">Loading categories...</p>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="menu-page">
            {/* Hero */}
            <section className="menu-hero">
                <div className="menu-hero-bg" style={{ backgroundImage: `url(${menuHeroImage})` }}>
                    <div className="menu-hero-overlay"></div>
                </div>
                <div className="menu-hero-content">
                    <span className="menu-label">Products</span>
                    <h1 className="menu-title">Our Products</h1>
                    <p className="menu-subtitle">
                        Authentic South Indian products for your kitchen
                    </p>
                </div>
            </section>

            {/* Featured Categories */}
            {featuredCategories.length > 0 && (
                <section className="featured-categories section">
                    <div className="container">
                        <div className="section-header text-center">
                            <span className="section-label">Our Specialties</span>
                            <h2 className="section-title">Featured Products</h2>
                            <p className="section-subtitle">
                                Premium quality products that P Ramalingam is known for
                            </p>
                        </div>
                        <div className="featured-grid">
                            {featuredCategories.map((category, index) => (
                                <a
                                    key={index}
                                    href={category.categoryLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="category-card category-card-featured"
                                >
                                    <div className="category-card-image">
                                        <img
                                            src={category.imageUrl}
                                            alt={category.category}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(category.category)
                                            }}
                                        />
                                        <div className="category-card-overlay"></div>
                                    </div>
                                    <div className="category-card-content">
                                        <h3 className="category-card-title">{category.category}</h3>
                                        {category.subcategories && category.subcategories.length > 0 && (
                                            <div className="category-subcategories">
                                                {category.subcategories.slice(0, 4).map((sub, i) => (
                                                    <span key={i} className="subcategory-pill">{sub}</span>
                                                ))}
                                            </div>
                                        )}
                                        <span className="category-card-link">
                                            Shop Now →
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Categories */}
            <section className="all-categories section">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-label">Browse</span>
                        <h2 className="section-title">All Categories</h2>
                    </div>
                    <div className="categories-grid">
                        {regularCategories.map((category, index) => (
                            <a
                                key={index}
                                href={category.categoryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="category-card"
                            >
                                <div className="category-card-image">
                                    <img
                                        src={category.imageUrl}
                                        alt={category.category}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(category.category)
                                        }}
                                    />
                                    <div className="category-card-overlay"></div>
                                </div>
                                <div className="category-card-content">
                                    <h3 className="category-card-title">{category.category}</h3>
                                    {category.subcategories && category.subcategories.length > 1 && (
                                        <p className="category-card-items">
                                            {category.subcategories.slice(0, 3).join(' • ')}
                                        </p>
                                    )}
                                    <span className="category-card-link">
                                        View Products →
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visit Store CTA */}
            <section className="menu-cta section">
                <div className="container container-narrow text-center">
                    <h2 className="menu-cta-title">Visit Our Store</h2>
                    <p className="menu-cta-text">
                        For the complete product range and best prices, visit our store in Matunga
                        or order online through our partner website.
                    </p>
                    <div className="menu-cta-buttons">
                        <a
                            href="https://www.appukart.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Shop Online
                        </a>
                        <a href="/locations" className="btn btn-outline">
                            Visit Store
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MenuPage

