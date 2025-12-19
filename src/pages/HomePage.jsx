import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

// Hero image
const heroImage = '/images/hero/home-hero.webp'
// Local images for food, community, and comfort sections
const foodImage = '/images/food.jpg'
const communityImage = '/images/Community.jpg'
const comfortImage = '/images/comfort.jpg'
// Location images
const mainLocationImage = '/images/locations/cuku-main.webp'
const lalpurLocationImage = '/images/locations/cuku-2.0.webp'

function HomePage() {
    const revealRefs = useRef([])

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        revealRefs.current.forEach(ref => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [])

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }
    }

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}>
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <div className="hero-logo">
                        <img
                            src="/images/logo/Logo White.png"
                            alt="Cuku Cafe"
                            className="hero-logo-image"
                        />
                    </div>
                    <p className="hero-subtitle">Where tradition meets innovation</p>
                    <div className="hero-scroll">
                        <div className="scroll-indicator"></div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro section" ref={addToRefs}>
                <div className="container container-narrow">
                    <div className="intro-content reveal" ref={addToRefs}>
                        <h2 className="intro-heading">A Cherished Culinary Haven</h2>
                        <p className="intro-text">
                            Nestled in the heart of Ranchi, Cuku Cafe is where tradition meets innovation.
                            We craft experiences around high-quality ingredients, served in a cozy yet refined
                            atmosphere that invites you to linger, connect, and savor every moment.
                        </p>
                        <p className="intro-tagline">
                            From the first sip to the last bite — it's more than a meal, it's a memory.
                        </p>
                        <Link to="/our-story" className="btn btn-outline">
                            Discover Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature: The Food */}
            <section className="feature feature-food section-sm" ref={addToRefs}>
                <div className="feature-grid reveal" ref={addToRefs}>
                    <div className="feature-image">
                        <img src={foodImage} alt="Signature coffee and desserts" />
                    </div>
                    <div className="feature-content">
                        <span className="feature-label">Eat & Drink</span>
                        <h2 className="feature-title">The Food</h2>
                        <p className="feature-text">
                            Our menu is a celebration of global flavors — from rich Italian pastas and Korean-inspired
                            buns to our signature Pistachio Mocha Latte. Every dish is crafted with love and the
                            finest ingredients.
                        </p>
                        <Link to="/menu" className="btn btn-primary">
                            Explore Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature: The Space */}
            <section className="feature feature-space section-sm" ref={addToRefs}>
                <div className="feature-split reveal" ref={addToRefs}>
                    <div className="feature-split-image">
                        <img src={communityImage} alt="Community at Cuku Cafe" />
                        <span className="feature-split-caption">Community</span>
                    </div>
                    <div className="feature-split-image">
                        <img src={comfortImage} alt="Comfort and warmth at Cuku Cafe" />
                        <span className="feature-split-caption">Comfort</span>
                    </div>
                </div>
                <div className="container container-narrow text-center">
                    <h3 className="feature-split-title">A Space to Breathe</h3>
                    <p className="feature-split-text">
                        Elegantly designed interiors with warm lighting and tasteful decor —
                        perfect for quick bites or leisurely gatherings.
                    </p>
                </div>
            </section>



            {/* Experience Locations */}
            <section className="locations-preview section" ref={addToRefs}>
                <div className="container">
                    <div className="locations-header text-center">
                        <span className="locations-label">Visit Us</span>
                        <h2 className="locations-title">Experience Cuku</h2>
                    </div>
                    <div className="locations-masonry reveal" ref={addToRefs}>
                        <div className="locations-item locations-item-large">
                            <img src={mainLocationImage} alt="Cuku Cafe - New Barhi Toli" />
                            <div className="locations-item-overlay">
                                <h3>Cuku Cafe</h3>
                                <p>Our Flagship Location</p>
                            </div>
                        </div>
                        <div className="locations-item">
                            <img src={lalpurLocationImage} alt="Cuku 2.0 - Lalpur" />
                            <div className="locations-item-overlay">
                                <h3>Cuku 2.0</h3>
                                <p>Cafe and Bakehaus</p>
                            </div>
                        </div>
                    </div>
                    <div className="locations-cta text-center">
                        <Link to="/locations" className="btn btn-outline">
                            View All Locations
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta section">
                <div className="container container-narrow text-center">
                    <h2 className="cta-title">Ready to Experience Cuku?</h2>
                    <p className="cta-text">
                        Drop by for a cup of our signature coffee, explore our diverse menu,
                        or simply unwind in our cozy space.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/menu" className="btn btn-primary">View Menu</Link>
                        <Link to="/locations" className="btn btn-outline">Find Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
