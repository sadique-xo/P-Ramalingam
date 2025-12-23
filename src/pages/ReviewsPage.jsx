import { useEffect, useRef } from 'react'
import './ReviewsPage.css'

// Hero image
const heroImage = '/images/hero/home-hero.webp'

// Reviews data - Placeholder reviews focused on P Ramalingam products
const reviews = [
    {
        id: 1,
        name: 'Store Attendant',
        review: 'Try our ghee; you will see how sweet it is and then not be open to buy any other ghee. Our customers keep coming back for the authentic taste.',
        color: 'yellow',
        rotation: -2
    },
    {
        id: 2,
        name: 'Loyal Customer',
        review: 'I have been buying ghee and butter from P Ramalingam for over 20 years. The quality has never changed. It\'s the best Coimbatore ghee in Mumbai!',
        color: 'pink',
        rotation: 1
    },
    {
        id: 3,
        name: 'Home Chef',
        review: 'The filter coffee powder from P Ramalingam is incredible. Every morning starts with that authentic South Indian aroma. Simply the best in Matunga.',
        color: 'blue',
        rotation: -1
    },
    {
        id: 4,
        name: 'Restaurant Owner',
        review: 'We source all our ghee and spices from P Ramalingam. The consistency and quality is unmatched. Our customers notice the difference!',
        color: 'green',
        rotation: 2
    },
    {
        id: 5,
        name: 'Mumbai Resident',
        review: 'As you walk near Matunga station, follow the aroma of filter coffee — it will lead you to P Ramalingam. A piece of South India in Mumbai.',
        color: 'orange',
        rotation: -3
    },
    {
        id: 6,
        name: 'Family Customer',
        review: 'My grandmother used to buy from P Ramalingam, my mother continued the tradition, and now I do the same. Three generations trust this store.',
        color: 'yellow',
        rotation: 1
    },
    {
        id: 7,
        name: 'Food Enthusiast',
        review: 'The butter and ghee here is not available anywhere else in Mumbai. People come from all over the city just for their products. Truly special!',
        color: 'pink',
        rotation: -2
    },
    {
        id: 8,
        name: 'Regular Visitor',
        review: 'Every time I visit Matunga, P Ramalingam is a must-stop. Their pickles, papads, and mixes are as authentic as it gets. 50+ years of trust!',
        color: 'blue',
        rotation: 3
    }
]

function ReviewsPage() {
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
        <div className="reviews-page">
            {/* Hero Section */}
            <section className="reviews-hero">
                <div className="reviews-hero-bg" style={{ backgroundImage: `url(${heroImage})` }}>
                    <div className="reviews-hero-overlay"></div>
                </div>
                <div className="reviews-hero-content">
                    <h1 className="reviews-hero-title">What Our Customers Say</h1>
                    <p className="reviews-hero-subtitle">Trusted by families for 50+ years</p>
                </div>
            </section>

            {/* Reviews Board Section */}
            <section className="reviews-board section">
                <div className="container">
                    <div className="reviews-intro text-center reveal" ref={addToRefs}>
                        <p className="reviews-intro-text">
                            For over five decades, families across Mumbai have trusted P Ramalingam for authentic South Indian products. Here's what they have to say.
                        </p>
                    </div>

                    <div className="sticky-notes-grid reveal" ref={addToRefs}>
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className={`sticky-note sticky-note-${review.color}`}
                                style={{
                                    '--rotation': `${review.rotation}deg`,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="sticky-note-pin"></div>
                                <div className="sticky-note-content">
                                    <p className="sticky-note-text">"{review.review}"</p>
                                    <span className="sticky-note-author">— {review.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="reviews-cta section">
                <div className="container container-narrow text-center">
                    <h2 className="reviews-cta-title">Experience the P Ramalingam Difference</h2>
                    <p className="reviews-cta-text">
                        Visit our Matunga store and discover why families have trusted us for over 50 years.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ReviewsPage

