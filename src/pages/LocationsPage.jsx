import './LocationsPage.css'

// Hero image for Locations page
const locationsHeroImage = '/images/hero/home-hero.webp'

const locations = [
    {
        name: 'P Ramalingam',
        tagline: 'Since 1956',
        address: [
            'Near Matunga (Central) Railway Station',
            'Matunga',
            'Mumbai, Maharashtra, India'
        ],
        hours: '9:00 AM — 9:00 PM',
        phone: '+91 82202 90717',
        features: ['Since 1956', 'Wide Product Range', 'Bulk Orders', 'Quality Guaranteed'],
        mapUrl: 'https://maps.google.com/maps?q=P+Ramalingam+Matunga+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed',
        directionsUrl: 'https://maps.google.com/maps?q=P+Ramalingam+Matunga+Mumbai',
        image: 'https://images.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.000129059138.a6n4/catalogue/p-ramalingam-matunga-east-mumbai-sweet-shops-2w1v4ag.jpg'
    }
]

function LocationsPage() {
    return (
        <div className="locations-page">
            {/* Hero */}
            <section className="locations-hero">
                <div className="locations-hero-bg" style={{ backgroundImage: `url(${locationsHeroImage})` }}>
                    <div className="locations-hero-overlay"></div>
                </div>
                <div className="locations-hero-content">
                    <span className="locations-label">Find Us</span>
                    <h1 className="locations-title">Visit Us</h1>
                    <p className="locations-subtitle">
                        Visit our store in the heart of Matunga
                    </p>
                </div>
            </section>

            {/* Locations List */}
            <section className="locations-list section">
                <div className="container">
                    {locations.map((location, index) => (
                        <div key={index} className={`location-card ${index % 2 === 1 ? 'reversed' : ''}`}>
                            <div className="location-image">
                                <img src={location.image} alt={location.name} />
                            </div>
                            <div className="location-details">
                                <span className="location-tagline">{location.tagline}</span>
                                <h2 className="location-name">{location.name}</h2>

                                <div className="location-info">
                                    <div className="location-info-item">
                                        <div className="location-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                        <div className="location-text">
                                            {location.address.map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="location-info-item">
                                        <div className="location-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <div className="location-text">
                                            <p className="location-hours">{location.hours}</p>
                                            <p className="location-days">Open Daily</p>
                                        </div>
                                    </div>

                                    <div className="location-info-item">
                                        <div className="location-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                        <div className="location-text">
                                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="location-phone">
                                                {location.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="location-features">
                                    {location.features.map((feature, i) => (
                                        <span key={i} className="location-feature">{feature}</span>
                                    ))}
                                </div>

                                <a
                                    href={location.directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="locations-contact section">
                <div className="container container-narrow text-center">
                    <span className="contact-label">Get in Touch</span>
                    <h2 className="contact-title">We'd Love to Hear From You</h2>
                    <p className="contact-text">
                        Have questions about our products, need bulk orders, or just want to say hello?
                        Reach out to us anytime.
                    </p>
                    <div className="contact-methods">
                        <a href="tel:+918220290717" className="contact-method">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <span>+91 82202 90717</span>
                        </a>
                        <a href="mailto:vaibhav@appukart.in" className="contact-method">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span>vaibhav@appukart.in</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="locations-services section">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>In-Store Shopping</h3>
                            <p>Visit our store to explore our complete range of authentic South Indian products.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Bulk Orders</h3>
                            <p>Special pricing for restaurants, caterers, and bulk purchases. Contact us for details.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Quality Guaranteed</h3>
                            <p>50+ years of trust. Every product meets our exacting standards of freshness and authenticity.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LocationsPage

