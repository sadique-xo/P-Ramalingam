import { useState } from 'react'
import './MenuFilters.css'

function MenuFilters({ onFilterChange, activeFilters }) {
    const [isOpen, setIsOpen] = useState(false)

    const availableBadges = ['Bestseller', 'New', 'Seasonal', 'Offer', 'Special']

    const toggleVeg = () => {
        onFilterChange({
            ...activeFilters,
            vegOnly: !activeFilters.vegOnly,
            nonVegOnly: false
        })
    }

    const toggleNonVeg = () => {
        onFilterChange({
            ...activeFilters,
            nonVegOnly: !activeFilters.nonVegOnly,
            vegOnly: false
        })
    }

    const toggleBadge = (badge) => {
        const badges = activeFilters.badges.includes(badge)
            ? activeFilters.badges.filter(b => b !== badge)
            : [...activeFilters.badges, badge]

        onFilterChange({
            ...activeFilters,
            badges
        })
    }

    const clearAll = () => {
        onFilterChange({
            vegOnly: false,
            nonVegOnly: false,
            badges: []
        })
        setIsOpen(false)
    }

    const hasActiveFilters = activeFilters.vegOnly || activeFilters.nonVegOnly || activeFilters.badges.length > 0

    return (
        <div className="menu-filters">
            <button
                className={`filter-toggle ${isOpen ? 'active' : ''} ${hasActiveFilters ? 'has-filters' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4h18M3 12h12M3 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Filters</span>
                {hasActiveFilters && <span className="filter-count">{(activeFilters.vegOnly || activeFilters.nonVegOnly ? 1 : 0) + activeFilters.badges.length}</span>}
            </button>

            {isOpen && (
                <div className="filter-panel">
                    <div className="filter-header">
                        <h3>Filter Menu</h3>
                        <div className="filter-header-actions">
                            {hasActiveFilters && (
                                <button className="clear-filters" onClick={clearAll}>Clear All</button>
                            )}
                            <button className="close-filters" onClick={() => setIsOpen(false)} aria-label="Close filters">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="filter-section">
                        <h4>Dietary</h4>
                        <div className="filter-options">
                            <button
                                className={`filter-chip ${activeFilters.vegOnly ? 'active' : ''}`}
                                onClick={toggleVeg}
                            >
                                🟢 Veg Only
                            </button>
                            <button
                                className={`filter-chip ${activeFilters.nonVegOnly ? 'active' : ''}`}
                                onClick={toggleNonVeg}
                            >
                                🔴 Non-Veg Only
                            </button>
                        </div>
                    </div>

                    <div className="filter-section">
                        <h4>Special Tags</h4>
                        <div className="filter-options">
                            {availableBadges.map(badge => (
                                <button
                                    key={badge}
                                    className={`filter-chip ${activeFilters.badges.includes(badge) ? 'active' : ''}`}
                                    onClick={() => toggleBadge(badge)}
                                >
                                    {badge}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuFilters
