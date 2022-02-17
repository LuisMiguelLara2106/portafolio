import React, {useState} from 'react';
import AboutSection from '../components/AboutSaction';
import Footer from '../components/Footer';
import HereSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import InfoSection from '../components/InfoSection';

// import { 
//     homeObjectOne, 
//     homeObjectThree, 
//     homeObjectTwo,
//     homeObjectFour 
// } from '../components/InfoSection/Data';

// import Services from '../components/Services';
// import Footer from '../components/Footer';


const Home = () => {

    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HereSection />
            <AboutSection />
            <Footer />

        </>
    )
}

export default Home