import './OurStoryPage.css'

// Hero image for Our Story page
const storyHeroImage = '/images/hero/story-menu.webp'

// Placeholder images
const founderImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'

const teamMembers = [
    {
        name: 'Chef Ingredients',
        role: 'Head Chef',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
    },
    {
        name: 'Master Barista',
        role: 'Head Barista',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80',
    },
    {
        name: 'Creative Soul',
        role: 'Experience Manager',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
        name: 'Warm Welcome',
        role: 'Guest Relations',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
]

function OurStoryPage() {
    return (
        <div className="story-page">
            {/* Hero */}
            <section className="story-hero">
                <div className="story-hero-bg" style={{ backgroundImage: `url(${storyHeroImage})` }}>
                    <div className="story-hero-overlay"></div>
                </div>
                <div className="story-hero-content">
                    <span className="story-label">About Us</span>
                    <h1 className="story-title">Our Story</h1>
                    <p className="story-subtitle">
                        Where tradition meets innovation in the heart of Ranchi
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="story-mission section">
                <div className="container container-narrow">
                    <div className="mission-content text-center">
                        <h2 className="mission-title">A Cherished Culinary Haven</h2>
                        <p className="mission-text">
                            Cuku Cafe was born from a simple dream — to create a space where people could
                            gather, connect, and experience the joy of exceptional food and coffee. We believe
                            that every cup tells a story, every dish carries tradition, and every visit
                            becomes a cherished memory.
                        </p>
                        <p className="mission-text">
                            Our journey began with a commitment to quality that remains unwavering. From
                            sourcing the finest ingredients to crafting each beverage with precision, we
                            pour our passion into everything we do.
                        </p>
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
                            <h3 className="value-title">Quality First</h3>
                            <p className="value-desc">
                                We never compromise on ingredients. Every dish is made with the finest,
                                freshest components we can source.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <h3 className="value-title">Made with Love</h3>
                            <p className="value-desc">
                                Every cup, every plate is crafted with genuine care. We treat each customer
                                like family.
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
                            <h3 className="value-title">Community Hub</h3>
                            <p className="value-desc">
                                More than a cafe, we're a gathering place for friends, families, and
                                creative minds.
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
                            <img src={founderImage} alt="Our Founder" />
                        </div>
                        <div className="founder-content">
                            <span className="founder-label">Our Founder</span>
                            <h2 className="founder-title">The Vision Behind Cuku</h2>
                            <p className="founder-text">
                                "When I first imagined Cuku, I saw more than just a cafe. I envisioned a
                                sanctuary where the aroma of freshly brewed coffee mingles with the warmth
                                of genuine hospitality. A place where tradition meets innovation, and where
                                every guest leaves with a smile."
                            </p>
                            <p className="founder-text">
                                "Ranchi deserved a space that celebrates both its rich culinary heritage
                                and the exciting flavors of the world. That's what we strive to deliver
                                every single day."
                            </p>
                            <p className="founder-signature">— The Cuku Family</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="story-team section">
                <div className="container">
                    <div className="team-header text-center">
                        <span className="team-label">The People</span>
                        <h2 className="team-title">Meet Our Team</h2>
                        <p className="team-subtitle">
                            The passionate individuals who bring the Cuku experience to life
                        </p>
                    </div>

                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        ))}
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
                                <span className="timeline-year">The Beginning</span>
                                <p>Cuku Cafe opens its doors in New Barhi Toli, Ranchi, with a dream to serve exceptional coffee and food.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">Growing Community</span>
                                <p>Word spreads about our unique fusion menu and cozy atmosphere. We become a local favorite with 4.6★ rating.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">Lalpur Opens</span>
                                <p>We expand to a second location in Lalpur, bringing the Cuku experience to more neighborhoods.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">Today & Beyond</span>
                                <p>Continuing to innovate while honoring tradition. Every day we strive to make your visit memorable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurStoryPage
