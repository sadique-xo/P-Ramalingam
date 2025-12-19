import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            {/* Map Section */}
            <div className="footer-map">
                <iframe
                    title="Cuku Cafe Location"
                    src="https://maps.google.com/maps?q=Cuku+2.0+(Cafe+and+Bakehaus),+Ranchi&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                        src="/images/logo/Logo Dark.png"
                        alt="Cuku Cafe"
                        className="footer-logo-image"
                    />
                </div>
                <div className="footer-container">
                    {/* Contact Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Contact</h4>
                        <div className="footer-links">
                            <a href="mailto:hello@cukucafe.com" className="footer-link">
                                hello@cukucafe.com
                            </a>
                            <a href="tel:+917908676707" className="footer-link">
                                +91 7908 676 707
                            </a>
                        </div>
                    </div>

                    {/* Locations Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Our Locations</h4>
                        <div className="footer-address">
                            <p className="footer-location-name">New Barhi Toli</p>
                            <p>Sharma Building, Above Bakers Fresh</p>
                            <p>Next to Central Bank ATM</p>
                            <p>Ranchi, Jharkhand - 734301</p>
                        </div>
                        <div className="footer-address">
                            <p className="footer-location-name">Lalpur</p>
                            <p>Shop No. 1, 1st Floor</p>
                            <p>Bimal Complex, Lalpur</p>
                            <p>Ranchi</p>
                        </div>
                    </div>

                    {/* Follow Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Follow</h4>
                        <div className="footer-social">
                            <a
                                href="https://instagram.com/cukucafe"
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
                                href="https://facebook.com/cukucafe"
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
                            <span>10:00 AM — 10:00 PM</span>
                            <span className="footer-hours-days">Daily</span>
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Cuku Cafe. All rights reserved.
                    </p>
                    <nav className="footer-nav">
                        <Link to="/our-story">Our Story</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/locations">Visit Us</Link>
                    </nav>
                </div>
            </div>
        </footer >
    )
}

export default Footer
