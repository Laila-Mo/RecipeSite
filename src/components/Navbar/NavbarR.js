import React from 'react';
import {animateScroll  as  scroll} from 'react-scroll';
import{
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMedia,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtn1Link,
  NavBtn2Link,
  NavIconFacebook,
  NavIconInstagram,
  NavIconTwitter,
  NavMediaLinks,
} from'./NavbarRElements';

const NavbarR = () => {
  
  const toggleHome = () =>{
    scroll.scrollToTop();
  };
  
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to = '/' onClick={toggleHome}>
        <NavIcon/>
          Delight 
        </NavLogo>
        <NavMenu>
        <NavLinks to='/' >Home</NavLinks>|
        <NavLinks to='/recipes' >Recipes</NavLinks>|
        <NavLinks to='/'>About-Us</NavLinks>|
        <NavLinks to='/'>Contact-Us</NavLinks>
        </NavMenu>
        <NavMedia>
        Follow us
        <NavMediaLinks href="//www.facebook.com" target="_blank" aria-label="Facebook"><NavIconFacebook/></NavMediaLinks>
        <NavMediaLinks href="//www.twitter.com" target="_blank" aria-label="Twitter"><NavIconTwitter/></NavMediaLinks>
        <NavMediaLinks href="//www.instagram.com" target="_blank" aria-label="Instagram"><NavIconInstagram/></NavMediaLinks>
        </NavMedia>
       
        
      </NavbarContainer>

    </Nav>
  )
}

export default NavbarR;



