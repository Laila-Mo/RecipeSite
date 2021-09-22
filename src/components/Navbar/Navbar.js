
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
} from'./NavbarElements';

const Navbar = () => {
  
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
        <NavLinks to="home" smooth={true}
        duration={500}
        spy={true}
        exact='true'
        offset={-80}
        >Home</NavLinks>|
        <NavLinks to="recipes"smooth={true}
        duration={500}
        spy={true}
        exact='true'
         >Recipes</NavLinks>|
        <NavLinks to="about"smooth={true}
        duration={500}
        spy={true}
        exact='true'
         >About-Us</NavLinks>|
        <NavLinks to="contact"smooth={true}
        duration={500}
        spy={true}
        exact='true'
         >Contact-Us</NavLinks>
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

export default Navbar;



