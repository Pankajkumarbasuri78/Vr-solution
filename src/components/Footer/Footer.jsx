import React from 'react'
import styled from 'styled-components';

const FooterLayout = styled.div(props => ({
  display:'flex',
  width:'100%',
  height:'auto',
  justifyContent:'center',
  alignItems:'center',
  background:'linear-gradient(1.06deg, #000000 -87.96%, #001379 84.76%)',
}))
const FooterWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    width:'79%',
    height:'100%',
    justifyContent:'space-between',
    //alignItems:'center',
    paddingTop:'5.6rem',//90px
    paddingBottom:'7.25rem',//116px

    [`@media (max-width:600px)`]:
    {
        flexDirection:'column',
        gap:'5.37rem',
        
    }
    
}))

const LeftContent = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    flexBasis:'40%',
    gap:'1.87rem',


}))
const Logo = styled.div(props => ({
    
}))
const Desc = styled.div(props => ({
  fontFamily:'roboto',
  fontSize:'1rem',//16px
  lineHeight:'150%',//24px
  color:'#ffffff',
  textTransform:'capitalize',
  fontStyle:'normal'
}))
const Icon = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    gap:'1rem',
    cursor:'pointer'

}))


const RightContent = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    //justifyContent:'flex-start',
    //flexBasis:'40%',
    gap:'0.75rem',
}))
const Heading = styled.div(props => ({
  fontFamily:'Roboto',
  fontSize:'1.56rem',//25px
  lineHeight:'132%',//33px
  color:'#ffffff',
  fontStyle:'normal',
  textTransform:'capitalize',
}))
const Input = styled.div(props => ({
    '& input': {
        height: '3.8rem',//61px
        width: '13.2rem',//263px
        border: '2px solid #CBCBCB',
        color:'#ffffff',
        padding:' 0 1.5rem',
        backgroundColor: 'transparent',
        outline: 'none',
        marginBottom:'1rem',
        '&::placeholder': {
            color: '#BCB9B9',
            fontFamily:'Roboto',
            fontWeight:400,
            lineHeight:'132%',
            fontSize:'1rem',
            //padding:'0 1.5rem'

        },
    },
    '& button': {
        height: '3.8rem',//61px
        width: '16.4rem',//263px
        color:'#001379',
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight: 500,
        fontSize:'1.25rem',
        lineHeight:'132%',
        cursor:'pointer'
    },
}))


export const Footer = () => {
  return (
    <FooterLayout>
        <FooterWrapper>
            <LeftContent>
                <Logo>
                    <img src='/image/logo (temporary.svg' alt='logo' style={{height:'3.6rem',width:'11.5rem'}}/>
                </Logo>
                <Desc style={{ fontWeight: 400 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pellentesque erat lectus cursus quisque faucibus vulputate.
                </Desc>
                <Icon>
                  <img src='/image/carbon_logo-instagram.png' alt='insta' style={{height:'1.5rem',width:'1.5rem'}}/>
                  <img src='/image/jam_facebook-square.png' alt='fb' style={{height:'1.5rem',width:'1.5rem'}}/> 
                  <img src='/image/jam_twitter-square.png' alt='twitter' style={{height:'1.5rem',width:'1.5rem'}}/>
                  <img src='/image/jam_linkedin-square.png' alt='linkedIn' style={{height:'1.5rem',width:'1.5rem'}}/>
                </Icon>
            </LeftContent>

            <RightContent>
                <Heading style={{ fontWeight: 600 }}>Subscribe now!</Heading>
                <Input>
                    <form>
                        <input 
                            type="email"
                            id="email"
                            placeholder='Enter your email address here'
                            required
                        />
                        
                    </form>
                    <button type='submit'>Subscribe</button>
                </Input>
            </RightContent>
        </FooterWrapper>
    </FooterLayout>
  )
}
