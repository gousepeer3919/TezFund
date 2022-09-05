import React from 'react';
import { Button, Container, MainHeading } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper } from './HeroStyles';
const Hero = () => {
  return (
    <HeroSection>
    <HeroVideo src = "./assets/hands.mov" />
        <Container>
            <MainHeading>TezFund</MainHeading>
            <HeroText>
            Actions speak louder than words! Give today.
            </HeroText>
            <ButtonWrapper>
                <Link to ="Donate">
                    <Button>DONATE</Button>
                </Link>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero;