import { useEffect, useRef } from 'react'
import './ReviewsPage.css'

// Hero image
const heroImage = '/images/hero/home-hero.webp'

// Reviews data
const reviews = [
    {
        id: 1,
        name: 'Soni Kumari lal',
        review: 'Cozy vibes and adorable decor make this cafe a must-visit! The food is delicious, and the service is top-notch. From fluffy pancakes to rich coffee, every bite and sip is a delight. The perfect spot to relax and unwind. Highly recommend!',
        color: 'yellow',
        rotation: -2
    },
    {
        id: 2,
        name: 'Deepa Mardi',
        review: 'Amazing experience! Worth it❤️ Had ordered caramel biscoff waffle, potato wedges, cappuccino… the food was really tasty and budget friendly. Highly recommended Cuku cafe❣️ the place is really cozy and cute, beautiful and aesthetic💗 the staffs were friendly and helpful.',
        color: 'pink',
        rotation: 1
    },
    {
        id: 3,
        name: 'Sonali Aind',
        review: 'The vibe was really good: cozy, boho, and chill. The pizza was amazing, and there were lots of fun games to play. It\'s a very photogenic and aesthetic place. The coffee and drinks was also great. The staff treated us very well — friendly, helpful, and kind.',
        color: 'blue',
        rotation: -1
    },
    {
        id: 4,
        name: 'Pragati Ghosh',
        review: 'This cafe has really nice ambience and is full of good vibes, a feel good cafe and the food was also amazing, highly recommended for girls day out!',
        color: 'green',
        rotation: 2
    },
    {
        id: 5,
        name: 'Priyanka Sharma',
        review: 'Great ambiance! There are lots of games available, I have enjoyed a lot with my friend. You can spend a quality time here.',
        color: 'orange',
        rotation: -3
    },
    {
        id: 6,
        name: 'Riya Hansdak',
        review: 'I come here often and vibe is soothing. Ive celebrated birthdays here and spent a lot of alone time. Everyone is so nice here. Most recommended as a student you must visit.',
        color: 'yellow',
        rotation: 1
    },
    {
        id: 7,
        name: 'Abhavya Jha',
        review: 'It was a great place, the atmosphere was good, the food was good and the service was really appreciable. You can do a lot of fun things there — games, sticky notes to add, and lots of places to take photos!',
        color: 'pink',
        rotation: -2
    },
    {
        id: 8,
        name: 'Sandeep Sarkar',
        review: 'I loved the place, it was just as I imagined a cosy aesthetic cafe. I loved the vibe and the service was also really nice.',
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
                    <h1 className="reviews-hero-title">What Our Guests Say</h1>
                    <p className="reviews-hero-subtitle">Real stories from our beloved customers</p>
                </div>
            </section>

            {/* Reviews Board Section */}
            <section className="reviews-board section">
                <div className="container">
                    <div className="reviews-intro text-center reveal" ref={addToRefs}>
                        <p className="reviews-intro-text">
                            Every visit creates a memory. Here's what our guests have shared about their Cuku experience.
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
                    <h2 className="reviews-cta-title">Create Your Own Memory</h2>
                    <p className="reviews-cta-text">
                        Visit us and experience the warmth, flavors, and vibes that make Cuku special.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ReviewsPage
