import React from 'react'
import styled from 'styled-components'
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
  marginBottom:'180px',

  '@media (max-width: 600px)': {
    height:'400px',
    marginBottom:'70px'
  }

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
  '@media (max-width: 600px)': {
    '&': {
      width: '100%',
      height: '388px',
    }
  }
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
  
  [`@media (max-width: 600px)`]:
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
    marginTop:'4.6rem',
    width:'208px',
    gap:'1rem'
  }
}))
const RightBar = styled.div(props => ({
  // position:'relative',
  // top:'350px',
  // right:'50px'
}))

const Heading = styled.div(props => ({
  fontSize:'4rem',//64px
  lineHeight:'4.4rem',//71.36px
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
  fontFamily:'Roboto',
  textTransform:'capitalizer',

  [`@media (max-width: 600px)`]:
  {
    fontSize:'0.8rem',
    lineHeight:'150%',
    
  }
  
}))

export const HeroIndustry = (props) => {
  return (
    <>
    <NavbarComponent>
      <Navbar />
    </NavbarComponent>

    <HeroLayout>
      <HeroBackground imageUrl={props.image} />
      <HeroWrapper>
        <LeftBar>
          <Heading style={{ fontWeight: 600 }}>Loreim Ipsum Is here!</Heading>
          <Desc style={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pellentesque erat lectus cursus quisque faucibus vulputate.
          </Desc>
        </LeftBar>
        <RightBar>
          
        </RightBar>
      </HeroWrapper>
    </HeroLayout>
    </>
  );
};

