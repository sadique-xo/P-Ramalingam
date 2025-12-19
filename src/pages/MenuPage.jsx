import { useState, useEffect, useMemo } from 'react'
import MenuItem from '../components/MenuItem'
import MenuFilters from '../components/MenuFilters'
import './MenuPage.css'

// Hero image for Menu page
const menuHeroImage = '/images/hero/menu-hero.webp'

function MenuPage() {
    const [menuData, setMenuData] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters] = useState({
        vegOnly: false,
        nonVegOnly: false,
        badges: []
    })

    // Load menu data
    useEffect(() => {
        fetch('/cuku-cafe-menu-data (4).json')
            .then(res => res.json())
            .then(data => {
                setMenuData(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error loading menu:', error)
                setLoading(false)
            })
    }, [])

    // Get all categories
    const categories = useMemo(() => {
        if (!menuData.length) return []
        return [
            { id: 'all', name: 'All Items', count: menuData.reduce((sum, cat) => sum + cat.itemCount, 0) },
            ...menuData.map(cat => ({
                id: cat.category.toLowerCase().replace(/\s+/g, '-'),
                name: cat.category,
                count: cat.itemCount
            }))
        ]
    }, [menuData])

    // Filter items
    const filteredItems = useMemo(() => {
        let allItems = []

        // Get items from selected category
        if (activeCategory === 'all') {
            menuData.forEach(category => {
                allItems.push(...category.items.map(item => ({ ...item, category: category.category })))
            })
        } else {
            const category = menuData.find(cat =>
                cat.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
            )
            if (category) {
                allItems = category.items.map(item => ({ ...item, category: category.category }))
            }
        }

        // Apply search filter
        if (searchQuery) {
            allItems = allItems.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        // Apply veg/non-veg filter
        if (filters.vegOnly) {
            allItems = allItems.filter(item => item.isVeg === true)
        } else if (filters.nonVegOnly) {
            allItems = allItems.filter(item => item.isVeg === false || item.isVeg === null)
        }

        // Apply badge filters
        if (filters.badges.length > 0) {
            allItems = allItems.filter(item =>
                filters.badges.some(badge => item.badges && item.badges.includes(badge))
            )
        }

        return allItems
    }, [menuData, activeCategory, searchQuery, filters])

    const hasActiveFilters = filters.vegOnly || filters.nonVegOnly || filters.badges.length > 0

    const clearSearch = () => setSearchQuery('')

    const removeFilter = (type, value) => {
        if (type === 'veg') {
            setFilters({ ...filters, vegOnly: false })
        } else if (type === 'nonVeg') {
            setFilters({ ...filters, nonVegOnly: false })
        } else if (type === 'badge') {
            setFilters({ ...filters, badges: filters.badges.filter(b => b !== value) })
        }
    }

    if (loading) {
        return (
            <div className="menu-page">
                <section className="menu-hero">
                    <div className="menu-hero-bg" style={{ backgroundImage: `url(${menuHeroImage})` }}>
                        <div className="menu-hero-overlay"></div>
                    </div>
                    <div className="menu-hero-content">
                        <span className="menu-label">Eat & Drink</span>
                        <h1 className="menu-title">Our Menu</h1>
                        <p className="menu-subtitle">Loading delicious items...</p>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="menu-page">
            {/* Hero */}
            <section className="menu-hero">
                <div className="menu-hero-bg" style={{ backgroundImage: `url(${menuHeroImage})` }}>
                    <div className="menu-hero-overlay"></div>
                </div>
                <div className="menu-hero-content">
                    <span className="menu-label">Eat & Drink</span>
                    <h1 className="menu-title">Our Menu</h1>
                    <p className="menu-subtitle">
                        A celebration of global flavors crafted with love
                    </p>
                </div>
            </section>

            {/* Search & Filters */}
            <section className="menu-controls section">
                <div className="container">
                    <div className="controls-bar">
                        <div className="search-bar">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search menu items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                            {searchQuery && (
                                <button className="search-clear" onClick={clearSearch}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <MenuFilters onFilterChange={setFilters} activeFilters={filters} />
                    </div>

                    {/* Active Filters */}
                    {(hasActiveFilters || searchQuery) && (
                        <div className="active-filters">
                            <span className="active-filters-label">Active filters:</span>
                            {searchQuery && (
                                <span className="filter-tag">
                                    Search: "{searchQuery}"
                                    <button onClick={clearSearch}>×</button>
                                </span>
                            )}
                            {filters.vegOnly && (
                                <span className="filter-tag">
                                    🟢 Veg Only
                                    <button onClick={() => removeFilter('veg')}>×</button>
                                </span>
                            )}
                            {filters.nonVegOnly && (
                                <span className="filter-tag">
                                    🔴 Non-Veg Only
                                    <button onClick={() => removeFilter('nonVeg')}>×</button>
                                </span>
                            )}
                            {filters.badges.map(badge => (
                                <span key={badge} className="filter-tag">
                                    {badge}
                                    <button onClick={() => removeFilter('badge', badge)}>×</button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Category Tabs */}
            <section className="menu-categories">
                <div className="container">
                    <div className="category-tabs">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className="category-name">{category.name}</span>
                                <span className="category-count">{category.count}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Menu Items */}
            <section className="menu-items-section section">
                <div className="container">
                    {filteredItems.length > 0 ? (
                        <>
                            <div className="menu-items-header">
                                <p className="items-count">
                                    Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                                </p>
                            </div>
                            <div className="menu-items-grid">
                                {filteredItems.map((item, index) => (
                                    <MenuItem key={`${item.name}-${index}`} item={item} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="empty-state">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 15s1.5 1 4 1 4-1 4-1M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <h3>No items found</h3>
                            <p>Try adjusting your search or filters</p>
                            <button
                                className="btn btn-outline"
                                onClick={() => {
                                    setSearchQuery('')
                                    setFilters({ vegOnly: false, nonVegOnly: false, badges: [] })
                                }}
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default MenuPage
