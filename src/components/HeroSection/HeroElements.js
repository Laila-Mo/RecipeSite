import styled from 'styled-components';
import ImgBg from '../../images/HomePage3.png';
import {Link} from 'react-router-dom';
import {BsFillTriangleFill} from "react-icons/bs";

export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height:100vh;
  background-position: center;
  background-size: 100% 100%;
  position:relative;
  margin-top:-64px;
`;
export const HomeBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5px;
  font-size: 0.9rem;
  position: absolute;
  right:    5% ;
  bottom:   10% ;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HomeBtnLink = styled(Link)`
  vertical-align:center;
  border-radius: 4px;
  background: #FEA600;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.5rem;
  
  &:hover {
    transition: all 0.2s ease-in-out;
   background: white;
   color:#FEA600;
  
  }
`;
export const ButtonIcon = styled(BsFillTriangleFill)`
color: white;
margin-right: 0rem;
margin-left: 0rem;
transform: rotate(90deg);
margin-bottom:-2px;
`;