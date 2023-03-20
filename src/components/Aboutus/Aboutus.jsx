import React from 'react'
import styled from 'styled-components'

const AboutLayout = styled.div(props => ({
  display:'flex',
  width:'100%',
  height:'auto',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#D9E7F4',

}))
const AboutWrapper = styled.div(props => ({
  display:'flex',
  flexDirection:'column',
  width:'79%',
  height:'100%',
  justifyContent:'space-between',
  alignItems:'center',

}))

//topmenu
const TopMenu = styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginTop:'7.6rem',//122px
  marginBottom:'10rem'//218px
}))
const LeftImage = styled.div(props => ({
  
}))
const RightContent = styled.div(props => ({
  
}))

const Heading = styled.div(props => ({
  fontFamily:'Roboto',
  fontSize:'1.9rem',//31px
  lineHeight:'3.2rem',//51.46px
  color:'#000000',
  textTransform:'capitalize',
}))
const Desc = styled.div(props => ({
  fontFamily:'Roboto',
  fontSize:'1rem',//16px
  lineHeight:'1.6rem',//51.46px
  color:'#000000',
  textTransform:'capitalize',
}))
const Image1 = styled.div(props => ({
  marginTop:'2rem'
}))

//buttom menu
const BottomMenu =styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginBottom:'7.6rem',//122px
}))
const LeftContent = styled.div(props => ({
  
}))
const RightImage = styled.div(props => ({
  
}))
const Image2 = styled.div(props => ({
  
}))





export const Aboutus = (props) => {
  return (
    <AboutLayout>
      <AboutWrapper>

        <TopMenu>
          <LeftImage>
            <img src='/image/aboutus.svg' alt='pic' />
          </LeftImage>
          <RightContent>
            <Heading style={{ fontWeight: 500 }}>Who Are We?</Heading>
            <Desc style={{ fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pellentesque erat lectus cursus quisque faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pellentesque erat lectus cursus quisque faucibus vulputate.
            </Desc>
            <Image1>
              <img src='/image/who.png' alt='img' />
            </Image1>
          </RightContent>
        </TopMenu>

        <BottomMenu>
          <LeftContent>
            <Heading style={{ fontWeight: 500 }}>Who Are We?</Heading>
            <Desc style={{ fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pellentesque erat lectus cursus quisque faucibus vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pellentesque erat lectus cursus quisque faucibus vulputate.
            </Desc>
            <Image1>
              <img src='/image/who.png' alt='img' />
            </Image1>
          </LeftContent>

          <RightImage>
          <Image2>
              <img src='image/aboutus.svg' alt='img' />
            </Image2>
          </RightImage>
        </BottomMenu>

      </AboutWrapper>
    </AboutLayout>
  )
}
