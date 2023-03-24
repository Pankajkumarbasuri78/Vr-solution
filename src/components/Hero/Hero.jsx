import React from 'react'
import styled from 'styled-components'
import Form from '../Form/Form';
//import { OfferingCard } from '../common/OfferingCard/OfferingCard';
//import { Form } from '../Form/Form';
import { Navbar } from '../Navbar/Navbar';



const NavbarComponent = styled.div(props => ({
  position:'fixed',
  //position:'relative',
  top:0,
  left:0,
  width:'100%',
  height:'6.8rem',//110px
  zIndex:1,
}))
const HeroLayout = styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '51.6rem',//826px
  position: 'relative',
  zIndex: 0,
  marginBottom:'340px'
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
  flexDirection: 'row',
  justifyContent:'space-between',//only for left
  position: 'absolute',
  top:'6.8rem',//110px
  width: '79%',
  height: '100%',
  margin: '0 auto',

  [`@media (max-width:600px)`]:
    {
        flexDirection:'column',
    }
}));

//Content
const LeftBar = styled.div(props => ({
  display:'flex',
  flexDirection:'column',
  flexBasis:'40%',
  marginTop:'12.1rem',//195px
  gap:'1.8rem',
  [`@media (max-width: 600px)`]:
  {
    flexBasis:'20%',
    marginTop:'2.3rem'
  }
}))
const RightBar = styled.div(props => ({
  position:'relative',
  top:'350px',
  right:'50px',
  [`@media (max-width: 600px)`]:
  {
    top:'50px',
    right:'30px'
    
  }
}))

const Heading = styled.div(props => ({
  fontSize:'4rem',//64px
  lineHeight:'4.4rem',//71.36px
  fontWeight: 600,
  color:'#ffffff',
  fontFamily:'Lora',
  textTransform:'capitalizer',

  [`@media (max-width: 600px)`]:
  {
    fontSize:'2rem',
    lineHeight:'111%',

  }
  
}))
const Desc = styled.div(props => ({
  fontSize:'1rem',
  lineHeight:'1.5rem',
  color:'#ffffff',
  fontWeight: 400,
  fontFamily:'Roboto',
  textTransform:'capitalizer',

  [`@media (max-width: 600px)`]:
  {
    fontSize:'0.8rem',
    lineHeight:'150%',
    
  }
  
}))
const Buttons = styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  gap:'0.8rem',
  [`@media (max-width: 600px)`]:
  {
    gap:'0.5rem'
    
  }
}))

export const Hero = (props) => {
  return (
    <>
    <NavbarComponent>
      <Navbar />
    </NavbarComponent>

    <HeroLayout>
      <HeroBackground imageUrl={props.image} />
      <HeroWrapper>
        <LeftBar>
          <Heading>Loreim Ipsum Is here!</Heading>
          <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pellentesque erat lectus cursus quisque faucibus vulputate.
          </Desc>
          <Buttons>
          <button 
           style={{
              height:'3rem',
              width:'10rem',
              fontSize:'1.2rem',
              backgroundColor:'#001379',
              border:'none',
              color:'#FFFFFF',
              cursor:'pointer',
              }}>Sign Up</button>

          <button 
           style={{
              height:'3rem',
              width:'10rem',
              fontSize:'1.2rem',
              backgroundColor:'transparent',
              border:'0.5px solid #ffffff',
              color:'#FFFFFF',
              cursor:'pointer',
              }}>Login</button>
          </Buttons>
        </LeftBar>
        <RightBar>
          <Form />
        </RightBar>
      </HeroWrapper>
    </HeroLayout>
    </>
  );
};

