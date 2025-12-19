import './MenuItem.css'

function MenuItem({ item }) {
    const isLikelyNonVeg = (name) => {
        const keywords = ['chicken', 'egg', 'mutton', 'fish', 'prawn', 'meat', 'beef', 'pork', 'ham', 'bacon', 'sausage', 'keema', 'pepperoni', 'salami', 'hot dog', 'tuna', 'salmon']
        const lowerName = name.toLowerCase()
        return keywords.some(keyword => lowerName.includes(keyword))
    }

    const vegIndicator = item.isVeg === true ? '🟢' : (item.isVeg === false || isLikelyNonVeg(item.name)) ? '🔴' : '⚪'
    const hasImage = item.imageUrl && item.imageUrl.trim() !== ''

    return (
        <div className="menu-item-card">
            <div className="menu-item-image">
                {hasImage ? (
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        loading="lazy"
                        onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                        }}
                    />
                ) : null}
                <div className="menu-item-placeholder" style={{ display: hasImage ? 'none' : 'flex' }}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 19h20L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M15 15l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M5 9v8a3 3 0 003 3h6a3 3 0 003-3V9" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </div>
                <div className="menu-item-veg-indicator">{vegIndicator}</div>
            </div>

            <div className="menu-item-content">
                <h3 className="menu-item-name">{item.name}</h3>
                <div className="menu-item-footer">
                    <span className="menu-item-price">₹{item.price}</span>
                    {item.badges && item.badges.length > 0 && (
                        <div className="menu-item-badges">
                            {item.badges.map((badge, index) => (
                                <span key={index} className={`badge badge-${badge.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {badge}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MenuItem
