import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

// Hero image
const heroImage = '/images/hero/home-hero.webp'
// Local images for products and store sections
const foodImage = 'https://images.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.000129059138.a6n4/catalogue/p-ramalingam-matunga-east-mumbai-ladoo-retailers-mgii19ls62.jpg'
const communityImage = 'https://images.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.000129059138.a6n4/catalogue/p-ramalingam-mumbai-0uvscd3bs3.jpg'
const comfortImage = 'https://images.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.000129059138.a6n4/catalogue/p-ramalingam-mumbai-6wsoj.jpg'
// Location image
const mainLocationImage = 'https://images.jdmagicbox.com/v2/comp/mumbai/n4/022pxx22.xx22.000129059138.a6n4/catalogue/p-ramalingam-mumbai-0tmfskkuwq.jpg'

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
                            src="/images/logo/white logo main.png"
                            alt="P Ramalingam"
                            className="hero-logo-image"
                        />
                    </div>
                    <p className="hero-subtitle">From South Indian Farmlands to Your Doorstep</p>
                    <div className="hero-scroll">
                        <div className="scroll-indicator"></div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="intro section" ref={addToRefs}>
                <div className="container container-narrow">
                    <div className="intro-content reveal" ref={addToRefs}>
                        <h2 className="intro-heading">50+ Years of Authentic South Indian Flavors</h2>
                        <p className="intro-text">
                            Nestled near Matunga Central Railway Station since 1956, P Ramalingam brings you
                            the finest South Indian products. Our signature Coimbatore ghee and butter,
                            sourced directly from our dairy, are a testament to generations of quality and trust.
                        </p>
                        <p className="intro-tagline">
                            "Try our ghee; you will see how sweet it is — and you won't want any other."
                        </p>
                        <Link to="/our-story" className="btn btn-outline">
                            Discover Our Legacy
                        </Link>
                    </div>
                </div>
            </section>

            {/* As Seen On Press Section */}
            <section className="press-section section-sm" ref={addToRefs}>
                <div className="container">
                    <div className="press-header text-center reveal" ref={addToRefs}>
                        <span className="press-label">As Seen On</span>
                        <h2 className="press-title">Featured In</h2>
                    </div>
                    <div className="press-logos reveal" ref={addToRefs}>
                        <a
                            href="https://www.mid-day.com/mumbai-guide/mumbai-food/article/mumbai-chhaap--p-ramalingam-in-matunga-15950171"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="press-logo-item"
                        >
                            <img src="/images/mid-day-logo.png" alt="Mid-Day" />
                            <span className="press-logo-name">Mid-Day</span>
                        </a>
                        <a
                            href="https://www.justdial.com/Mumbai/P-Ramalingam-Near-Matunga-Station-Matunga-East/022PXX22-XX22-000129059138-A6N4_BZDET/photos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="press-logo-item"
                        >
                            <img src="/images/Justdial_Logo.svg.png" alt="JustDial" />
                            <span className="press-logo-name">4.6★ Rating</span>
                        </a>
                        <a
                            href="https://www.indiamart.com/ms-p-ramalingam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="press-logo-item"
                        >
                            <img src="/images/IndiaMART_logo.svg.png" alt="IndiaMart" />
                            <span className="press-logo-name">IndiaMart</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Feature: Our Products */}
            <section className="feature feature-food section-sm" ref={addToRefs}>
                <div className="feature-grid reveal" ref={addToRefs}>
                    <div className="feature-image">
                        <img src={foodImage} alt="Premium South Indian products" />
                    </div>
                    <div className="feature-content">
                        <span className="feature-label">Our Products</span>
                        <h2 className="feature-title">Authentic South Indian Goods</h2>
                        <p className="feature-text">
                            From our signature Coimbatore ghee and butter to authentic filter coffee powder,
                            farsan, spice mixes, pickles, and papads — every product is carefully curated
                            to bring the taste of South India to your home.
                        </p>
                        <Link to="/menu" className="btn btn-primary">
                            Explore Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature: Heritage & Quality */}
            <section className="feature feature-space section-sm" ref={addToRefs}>
                <div className="feature-split reveal" ref={addToRefs}>
                    <div className="feature-split-image">
                        <img src={communityImage} alt="P Ramalingam heritage" />
                        <span className="feature-split-caption">Heritage</span>
                    </div>
                    <div className="feature-split-image">
                        <img src={comfortImage} alt="Quality products" />
                        <span className="feature-split-caption">Quality</span>
                    </div>
                </div>
                <div className="container container-narrow text-center">
                    <h3 className="feature-split-title">Trusted for Generations</h3>
                    <p className="feature-split-text">
                        More than just a store — P Ramalingam has been a part of Matunga's
                        South Indian community for over five decades. Step inside to experience
                        products you won't find anywhere else.
                    </p>
                </div>
            </section>

            {/* Experience Location */}
            <section className="locations-preview section" ref={addToRefs}>
                <div className="container">
                    <div className="locations-header text-center">
                        <span className="locations-label">Visit Us</span>
                        <h2 className="locations-title">Experience P Ramalingam</h2>
                    </div>
                    <div className="locations-masonry reveal" ref={addToRefs}>
                        <div className="locations-item locations-item-large">
                            <img src={mainLocationImage} alt="P Ramalingam Store - Matunga" />
                            <div className="locations-item-overlay">
                                <h3>P Ramalingam</h3>
                                <p>Since 1956 • Matunga</p>
                            </div>
                        </div>
                    </div>
                    <div className="locations-cta text-center">
                        <Link to="/locations" className="btn btn-outline">
                            Get Directions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta section">
                <div className="container container-narrow text-center">
                    <h2 className="cta-title">Experience Authentic South Indian Flavors</h2>
                    <p className="cta-text">
                        Visit our store in Matunga for our signature Coimbatore ghee, butter,
                        filter coffee powder, and a curated selection of South Indian delicacies.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/menu" className="btn btn-primary">View Products</Link>
                        <Link to="/locations" className="btn btn-outline">Visit Us</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage

