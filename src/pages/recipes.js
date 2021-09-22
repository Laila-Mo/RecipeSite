import React from 'react'
import Footer from '../components/Footer/Footer';
import NavbarR from '../components/Navbar/NavbarR';
import RecipesPage from '../components/RecipesPage/RecipesPage';
import ScrollToTop from '../components/ScrollToTop';
const recipes = () => {
    return (
        <>
        <ScrollToTop/>
        <NavbarR/>
        <RecipesPage/>
        <Footer/>
        </>

    )
}

export default recipes;
