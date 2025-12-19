import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import StorePage from './pages/StorePage'
import OurStoryPage from './pages/OurStoryPage'
import LocationsPage from './pages/LocationsPage'
import ReviewsPage from './pages/ReviewsPage'
import './App.css'

function App() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div className="app">
            <ScrollToTop />
            <Header />
            <main className={`main-content ${isHome ? 'home' : ''}`}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/our-story" element={<OurStoryPage />} />
                    <Route path="/locations" element={<LocationsPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
