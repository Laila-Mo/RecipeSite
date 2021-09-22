import React from 'react'
import Footer from '../components/Footer/Footer';
import NavbarR from '../components/Navbar/NavbarR';
import OneRecipePage from '../components/OneRecipePage/OneRecipePage';
import ScrollToTop from '../components/ScrollToTop';
const Details = () => {
  
    return (
        <>
        <ScrollToTop/>
        <NavbarR/>
        <OneRecipePage  />
        <Footer/>
        </>

    )
}

export default Details;