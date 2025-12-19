import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Eat & Drink' },
    { path: '/store', label: 'Store' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/locations', label: 'Locations' },
    { path: '/reviews', label: 'Reviews' },
]

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img
                        src={isScrolled ? "/images/logo/Logo Dark.png" : "/images/logo/Logo White.png"}
                        alt="Cuku Cafe"
                        className="logo-image"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="menu-toggle-text">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
                    <span className="menu-toggle-icon">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </span>
                </button>

                {/* Mobile Navigation */}
                <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
                    <div className="nav-mobile-content">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={closeMenu}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
