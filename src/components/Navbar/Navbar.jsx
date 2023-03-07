import React from 'react'
import styled from 'styled-components'

const NavbarLayout = styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '110px',
}))
const NavbarWrapper = styled.div(props=> ({
  display: 'flex',
  flexDirection: 'column',
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


export const Navbar = () => {
  return (
    <NavbarLayout>
    <NavbarBackground />
      <NavbarWrapper>
        <h1>navbear</h1>
      </NavbarWrapper>
    </NavbarLayout>
  )
}
