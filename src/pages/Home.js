import React from 'react';
import HeroSection from '../components/HeroSection/Hero';
import Info from '../components/InfoSection/Info';
import Navbar from '../components/Navbar/Navbar';
import { homeObj1,homeObj2 } from '../components/InfoSection/Data';
import Recipes from '../components/Recipes/Recipes';
import Footer from '../components/Footer/Footer';
const Home = () => {
    return (
     <>
     <Navbar/>
     <HeroSection/>
     <Recipes/>
     <Info {...homeObj1}/>
     <Info {...homeObj2}/>
     <Footer/>
    </>
    )
}

export default Home;
