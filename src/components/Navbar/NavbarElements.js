import styled from 'styled-components';
import {GiSpoon} from "react-icons/gi";
import {AiFillTwitterCircle,AiFillInstagram,AiFillFacebook} from "react-icons/ai";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {Container} from '../../globalStyles';


export const Nav = styled.nav`
  background: white;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  margin: 0 ;
  padding: 0;
`;

export const NavbarContainer = styled(Container)`
  margin: 0 ;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  height: 50 px;
  
  ${Container}
`;

export const NavLogo = styled(LinkR)`
  vertical-align:middle;
  padding: 0;
  color: #3986A8;
  justify-content:center;
  margin-right: auto;
  cursor: pointer;
  text-decoration:none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-family: 'Apple Chancery ', cursive;
`;

export const NavIcon = styled(GiSpoon)`
color: orange;
margin-right: 0rem;
margin-left: 0rem;
transform: rotate(25deg);
`;
export const NavMedia = styled.div`
vertical-align:middle;
color: #3986A8;
display: flex;
align-items: center;
font-size: 0.8rem;
margin-left:150px;
`;
export const NavIconTwitter = styled(AiFillTwitterCircle)`
color: orange;
margin-left: 0;
vertical-align:middle;
font-size: 1.2rem;
margin-right: -24px;
`;
export const NavIconInstagram = styled(AiFillInstagram)`
color: orange;
vertical-align:middle;
margin-left: 0;
font-size: 1.2rem;
`;
export const NavIconFacebook = styled(AiFillFacebook)`
color: orange;
vertical-align:middle;
margin-left:0;
font-size: 1.2rem;
margin-right: -24px;
`;
export const NavMediaLinks = styled.a`
  color: orange;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem ;
  height: 100%;
  cursor: pointer;
  margin-right:10px;
  margin-left:10px;
`;

export const NavLinks = styled(LinkS)`

  color: #3986A8;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem ;
  height: 100%;
  cursor: pointer;
  margin-right:10px;
  margin-left:10px;
  &:hover {
      color: #FEA600;
      transition: all 0.3s ease;
    }

`;
export const NavMenu = styled.div`
  vertical-align: middle;
  margin: 0 auto;
  color: #3986A8;
  display: flex;
  align-items: center;
  font-size: 1rem;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

