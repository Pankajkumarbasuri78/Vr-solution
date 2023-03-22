import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarLayout = styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height:'6.8rem',//110px

}))
const NavbarWrapper = styled.div(props=> ({
  display: 'flex',
  justifyContent:'space-between',
  width: '79%',
  height: '100%',
  margin: '0 auto',
}))
const NavbarBackground = styled.div(props =>({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#021266',
    opacity:0.7,
    backgroundBlendMode: 'multiply',
  },
}))

const Logo = styled.div(props => ({
  display:'flex',
  justifyContent:'flex-start',
  alignItems:'center',
  cursor:'pointer'

}))
const Button = styled.div(props => ({
  display:'flex',
  alignItems:'center',
  
}))


export const Navbar = () => {
  return (
    <NavbarLayout>
    <NavbarBackground />
      <NavbarWrapper>
        <Logo>
        <Link to='/'>
        <img src='image/logo (temporary.svg' alt='logos' style={{height:'2.75rem',width:'8.6rem'}}/>
        </Link>
        </Logo>
        <Button>
        <button 
           style={{
              height:'3rem',
              width:'10rem',
              fontSize:'1.2rem',
              backgroundColor:'#ffffff',
              border:'none',
              color:'#002D54',
              cursor:'pointer',
              }}>Contact us</button>
        </Button>
      </NavbarWrapper>
    </NavbarLayout>
  )
}
