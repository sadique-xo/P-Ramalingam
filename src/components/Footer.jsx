import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            {/* Map Section */}
            <div className="footer-map">
                <iframe
                    title="P Ramalingam Matunga Location"
                    src="https://maps.google.com/maps?q=P+Ramalingam+Matunga+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            {/* Footer Content */}
            <div className="footer-content">
                <div className="footer-logo">
                    <img
                        src="/images/logo/Logo PR.png"
                        alt="P Ramalingam"
                        className="footer-logo-image"
                    />
                </div>
                <div className="footer-container">
                    {/* Contact Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Contact</h4>
                        <div className="footer-links">
                            <a href="mailto:vaibhav@appukart.in" className="footer-link">
                                vaibhav@appukart.in
                            </a>
                            <a href="tel:+918220290717" className="footer-link">
                                +91 82202 90717
                            </a>
                        </div>
                    </div>

                    {/* Location Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Our Store</h4>
                        <div className="footer-address">
                            <p className="footer-location-name">P Ramalingam</p>
                            <p>Near Matunga (Central) Railway Station</p>
                            <p>Matunga, Mumbai</p>
                            <p>Maharashtra, India</p>
                        </div>
                    </div>

                    {/* Follow Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Follow</h4>
                        <div className="footer-social">
                            <a
                                href="https://www.instagram.com/pramalingam_/?igsh=ZDdxenhmbjFtYzJ2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/pramalingam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Facebook"
                            >
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <p className="footer-hours">
                            <span className="footer-hours-label">Hours</span>
                            <span>9:00 AM — 9:00 PM</span>
                            <span className="footer-hours-days">Daily</span>
                        </p>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="footer-trust">
                    <span className="footer-trust-label">Featured On</span>
                    <div className="footer-trust-logos">
                        <a
                            href="https://www.mid-day.com/mumbai-guide/mumbai-food/article/mumbai-chhaap--p-ramalingam-in-matunga-15950171"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-trust-item"
                        >
                            <img src="/images/mid-day-logo.png" alt="Mid-Day" />
                        </a>
                        <a
                            href="https://www.justdial.com/Mumbai/P-Ramalingam-Near-Matunga-Station-Matunga-East/022PXX22-XX22-000129059138-A6N4_BZDET/photos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-trust-item"
                        >
                            <img src="/images/Justdial_Logo.svg.png" alt="JustDial" />
                            <span>4.6★</span>
                        </a>
                        <a
                            href="https://www.indiamart.com/ms-p-ramalingam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-trust-item"
                        >
                            <img src="/images/IndiaMART_logo.svg.png" alt="IndiaMart" />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} P Ramalingam. Since 1956. All rights reserved.
                    </p>
                    <nav className="footer-nav">
                        <Link to="/our-story">Our Legacy</Link>
                        <Link to="/menu">Products</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/locations">Visit Us</Link>
                    </nav>
                </div>
            </div>
        </footer >
    )
}

export default Footer

