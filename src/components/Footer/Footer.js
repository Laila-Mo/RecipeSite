import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa'
import {animateScroll  as  scroll} from 'react-scroll';

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
      };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/login">Contact Us</FooterLink>
                            <FooterLink to="/login">Press Center</FooterLink>
                            <FooterLink to="/login">Newsletters</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/login">Contact Us</FooterLink>
                            <FooterLink to="/login">Press Center</FooterLink>
                            <FooterLink to="/login">Newsletters</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/login">Contact Us</FooterLink>
                            <FooterLink to="/login">Press Center</FooterLink>
                            <FooterLink to="/login">Newsletters</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/login">Contact Us</FooterLink>
                            <FooterLink to="/login">Press Center</FooterLink>
                            <FooterLink to="/login">Newsletters</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = '/' onClick={toggleHome}>
                            Delight
                        </SocialLogo>
                        <WebsiteRights>Delight © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

