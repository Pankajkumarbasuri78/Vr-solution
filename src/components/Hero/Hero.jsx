import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../Navbar/Navbar';



const NavbarComponent = styled.div(props => ({
  position:'fixed',
  top:0,
  left:0,
  width:'100%',
  height:'110px',
  zIndex:1,
}))
const HeroLayout = styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '826px',
  position: 'relative',
  zIndex: 0,
}));

const HeroBackground = styled.div(props => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${props.imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(142.46% 353.58% at -29.34% 110.47%, #1C1C1C 0.37%, rgba(0, 18, 35, 0.682292) 53.43%, rgba(1, 19, 35, 0.696577) 55.43%, rgba(0, 54, 102, 0.307514) 74.95%, rgba(0, 105, 200, 0) 95.58%)',
    backgroundBlendMode: 'normal',
  },
}));

const HeroWrapper = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top:'110px',
  width: '79%',
  height: '100%',
  margin: '0 auto',
}));

export const Hero = () => {
  return (
    <>
    <NavbarComponent>
      <Navbar />
    </NavbarComponent>
    <HeroLayout>
      <HeroBackground imageUrl="./pic.png" />
      <HeroWrapper>
        <h1>hello</h1>
      </HeroWrapper>
    </HeroLayout>
    </>
  );
};

