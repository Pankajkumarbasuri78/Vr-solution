import React from 'react'
import styled from 'styled-components';

const HeadingContainer = styled.div(props => ({
    position:'relative',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    height:'9rem',//152px
    marginLeft:'10%',
    [`@media (max-width:600px)`]:
    {
      overflow:'hidden'

    }
}))

const HeadingText = styled.div(props => ({
    fontFamily:'Lora',
    fontSize:'7.2rem',//115.05px
    margin:'0',
    position:'absolute',
    top:0,
    left:0,
    zIndex:2,
    color:'rgba(1, 20, 122, 0.05)',
}))

const SubheadingText = styled.div(props => ({
    fontFamily:'Lora',
    fontSize:'3rem',//48px
    margin:'0',
    zIndex:1,
    color:'#01147A',
    position:'relative'
}))

export const Heading = (props) => {
  return (
            <HeadingContainer>
              <HeadingText style={{ fontWeight: 700 }}>{props.name}</HeadingText>
              <SubheadingText style={{ fontWeight: 600 }}>{props.name}</SubheadingText>
            </HeadingContainer>
  )
}
