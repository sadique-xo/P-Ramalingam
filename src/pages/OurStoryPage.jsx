import './OurStoryPage.css'

// Hero image for Our Story page
const storyHeroImage = 'https://images.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.000129059138.a6n4/catalogue/p-ramalingam-mumbai-2pr3j.jpg'

// Placeholder images
const founderImage = '/images/about.jpg'

function OurStoryPage() {
    return (
        <div className="story-page">
            {/* Hero */}
            <section className="story-hero">
                <div className="story-hero-bg" style={{ backgroundImage: `url(${storyHeroImage})` }}>
                    <div className="story-hero-overlay"></div>
                </div>
                <div className="story-hero-content">
                    <span className="story-label">Our Legacy</span>
                    <h1 className="story-title">Since 1956</h1>
                    <p className="story-subtitle">
                        A trusted South Indian food brand for over 50 years
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="story-mission section">
                <div className="container container-narrow">
                    <div className="mission-content text-center">
                        <h2 className="mission-title">A Legacy Born in 1956</h2>
                        <p className="mission-text">
                            P Ramalingam was established in 1956, right here near Matunga Central Railway Station.
                            What began as a small shop dedicated to bringing authentic South Indian products
                            to Mumbai has grown into a trusted name that spans generations.
                        </p>
                        <p className="mission-text">
                            Our specialty lies in our Coimbatore ghee and butter — sourced directly from our
                            own dairy in Coimbatore. This unique connection to the source ensures quality that
                            no other brand can match. Customers tell us, "Once you try our ghee, you'll never go back."
                        </p>
                        <p className="mission-text">
                            Over the decades, we've expanded to include farsan, idli/dosa/upma mixes, spices,
                            papad, pickles, condiments, and our beloved filter coffee powder — all carefully
                            curated for the South Indian palate.
                        </p>
                        <div className="brand-badges">
                            <span className="brand-badge">APPU Brand</span>
                            <span className="brand-badge">PR Brand</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="story-values section">
                <div className="container">
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="value-title">Farm Fresh Origins</h3>
                            <p className="value-desc">
                                Sourced directly from South Indian farmlands, our products guarantee
                                freshness and authenticity you can taste.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <h3 className="value-title">50+ Years of Trust</h3>
                            <p className="value-desc">
                                Three generations of customers trust us for quality that never compromises.
                                Our reputation speaks for itself.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="9" cy="9" r="1" fill="currentColor" />
                                    <circle cx="15" cy="9" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="value-title">From Our Dairy to Your Home</h3>
                            <p className="value-desc">
                                Our Coimbatore dairy ensures every batch of ghee and butter meets our
                                exacting standards of quality and purity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="story-founder section">
                <div className="container">
                    <div className="founder-grid">
                        <div className="founder-image">
                            <img src={founderImage} alt="P Ramalingam Store" />
                        </div>
                        <div className="founder-content">
                            <span className="founder-label">Our Heritage</span>
                            <h2 className="founder-title">The P Ramalingam Story</h2>
                            <p className="founder-text">
                                "As you walk down the road that leads from the exit of Matunga (Central)
                                railway station, you're bound to catch a whiff of the aromas emanating
                                from filter coffee. Follow your nose to reach a string of shops that make
                                you feel as if you're in a small town somewhere in South India."
                            </p>
                            <p className="founder-text">
                                "Right here is where you spot the board of P Ramalingam. The butter and ghee
                                available here is not available anywhere else, and draws people from all
                                over Mumbai to buy it."
                            </p>
                            <p className="founder-signature">— As featured in Mid-Day</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="story-timeline section">
                <div className="container container-narrow">
                    <div className="timeline-header text-center">
                        <h2 className="timeline-title">Our Journey</h2>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">1956</span>
                                <p>P Ramalingam opens its doors near Matunga Central Railway Station, bringing authentic South Indian products to Mumbai.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">1960s-70s</span>
                                <p>Our signature Coimbatore ghee and butter become famous across Mumbai. Word spreads about quality that can't be found elsewhere.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">1980s-90s</span>
                                <p>We expand our range to include farsan, idli/dosa mixes, spices, pickles, and filter coffee powder — becoming a one-stop South Indian grocery.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">1996</span>
                                <p>Expansion into manufacturing and exports under Ramalingam Agro Products Pvt. Ltd., with operations in Tiruppur and Coimbatore.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">Today</span>
                                <p>Exporting to UK, USA, UAE, Singapore, and Malaysia while continuing to serve Matunga's South Indian community with unwavering quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurStoryPage

