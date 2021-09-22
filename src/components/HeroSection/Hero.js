import React from 'react'
import {HomeContainer,HomeBtn,HomeBtnLink,ButtonIcon} from './HeroElements';
const HeroSection = () => {
    return (
    <HomeContainer id="home">
       <HomeBtn>
          <HomeBtnLink to='/cuisines'>Get Started <ButtonIcon/></HomeBtnLink>
        </HomeBtn>
     </HomeContainer>
    )
}

export default HeroSection;
