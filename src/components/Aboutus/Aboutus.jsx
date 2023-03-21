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
  gap:'35px',
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
  gap:'50px',
  marginBottom:'7.6rem',//122px
}))
const LeftContent = styled.div(props => ({
  
}))
const RightImage = styled.div(props => ({
  
}))
const Image2 = styled.div(props => ({
  
}))

const Features = styled.div(props => ({
  display:'flex',
  flexDirection:'column',
  flexBasis:'80%',

}))
const Row1 = styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  marginTop:'89px',
  justifyContent:'space-between',
  alignItems:'center',

}))

const Content1 = styled.div(props => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  paddingBottom: '1rem',
  borderBottom: '1px solid #ccc',
  position: 'relative',
  //width: '225px',
  width:'61%',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '1px',
    height: '100%',
    backgroundColor: '#ccc',
    transform: 'translateX(-50px)',
  }
}));
const Content2 = styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  gap:'10px',
  paddingTop:'1rem',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '1px',
    height: '100%',
    backgroundColor: '#ccc',
    transform: 'translateX(60px)',
  }

}))
const Content3 = styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  gap:'10px',
  paddingBottom:'1rem',
  borderBottom:'1px solid #ccc',

}))
const Content4 = styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  gap:'8px',
  paddingTop:'1rem',

}))
const Title = styled.div(props => ({
  fontFamily:'Roboto',
  fontSize:'1rem',
  fontWeight:500,
  lineHeight:'124%',
  letterSpacing:'0.05rem',
  color:'#01147A',
  textTransform:'capitalize',

}))
const Row2 = styled.div(props => ({
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
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

            {/* <Image1>
              <img src='/image/who.png' alt='img' />
            </Image1> */}

            <Features>
              <Row1>
                <Content1>
                  <img src='/image/qualityJob.png' alt='icon' style={{height:'1.37rem',width:'1.37rem'}}/>
                  <Title>Quality Job</Title>
                </Content1>
                <Content3>
                  <img src='/image/qualityJob.png' alt='icon' style={{height:'1.37rem',width:'1.37rem'}}/>
                  <Title>Top Companies</Title>
                </Content3>
              </Row1>

              <Row2>
                <Content2>
                  <img src='/image/qualityJob.png' alt='icon' style={{height:'1.37rem',width:'1.37rem'}}/>
                  <Title>No Charges</Title>
                </Content2>
                <Content4>
                  <img src='/image/qualityJob.png' alt='icon' style={{height:'1.37rem',width:'1.37rem'}}/>
                  <Title>International Job</Title>
                </Content4>
              </Row2>
            </Features>
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
