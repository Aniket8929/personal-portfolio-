import Navbar from '../Components/Navbar'
import Portfolio from '../Components/Portfolio'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import Contact from "../Components/Contact"
import { Outlet } from 'react-router-dom'
function Mainlayout() {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Mainlayout