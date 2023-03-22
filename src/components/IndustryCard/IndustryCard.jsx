import React from 'react';
import styled from 'styled-components';

const CardLayout = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'327px',
    height:'297px',
    backgroundColor:'#ffffff',
    boxShadow:'0px 0px 25px rgba(0, 0, 0, 0.09)',

    transform:'all 0.2s ease-in-out',
    '&:hover':{
        transform:'scale(1.1)',
    }

}))
const CardWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'79%',
    height:'100%',
    gap:'26px'

}))

const Circle = styled.div(props => ({
    width:'105px',
    height:'105px',
    borderRadius:'50%',
    backgroundColor:'#001379',
    '& img':{
        position:'relative',
        top:'2.7rem',
        left:'0.7rem'
    },
}))

const Heading = styled.div(props => ({
  fontSize:'2rem',
  fontWeight:700,
  lineHeight:'132%',
  color:'#000000',
  fontFamily:'Lora',
  textTransform:'capitalizer',

}))

export const IndustryCard = () => {
  return (
    <CardLayout>
        <CardWrapper>
          <Circle>
            <img src='/image/FloxusLogo.png' alt='logo' style={{width:'83px',height:'24.45px'}}/>
          </Circle>
          <Heading>FLOXUS</Heading>
        </CardWrapper>
    </CardLayout>
  )
}
