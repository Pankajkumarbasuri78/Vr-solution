import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardLayout = styled.div(props => ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    //height:'auto',
    width:'330px',
    background: '#FFFFFF',
    boxShadow:'0px 0px 30px rgba(0, 0, 0, 0.15)',

}))
const CardWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    flexBasis:'77%',
    //height:'auto',
    // paddingTop:'3.75rem',
    // paddingBottom:'3.9rem',
    marginTop:'3.75rem',
    marginBottom:'3.9rem',

}))



const Image = styled.div(props => ({
    '& img': {
        height:'3.75rem',
        width:'3.9rem',
        paddingBottom:'1.6rem',
    }
}))
const Title = styled.div(props => ({
    fontFamily:'Lora',
    fontSize:'1.5rem',
    fontWeight:700,
    paddingBottom:'1.5rem',
    color:'#001379'
}))
const Desc = styled.div(props => ({
    fontFamily:'Poppins',
    fontSize:'1rem',//16px
    lineHeight:'156%',//24px
    color:'#000000',
    fontWeight:400,
    textTransform:'capitalize',
    fontStyle:'normal',
    paddingBottom:'2.6rem',
}))
const Button = styled.div(props => ({
    '& button': {
        height: '3rem',//61px
        width: '15.8rem',//263px
        background:'#001379',
        outline: 'none',
        cursor:'pointer',
        border:'none',
        color:'#ffffff',
        fontWeight:500,
        fontSize:'1.25rem',
        fontFamily:'Roboto',
        lineHeight:'132%',
        textTransform:'capitalize',
        
    },
}))



export const OfferingCard = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if(props.button === 'Explore ->'){
            navigate('/industry');
        }
        if (props.button === 'View ->') {
            navigate('/training');
        } 
    }

  return (
    <CardLayout>
        <CardWrapper>
            <Image>
                <img src={props.image} alt='logo' />
            </Image>
            <Title>{props.heading}</Title>
            <Desc>
              {props.desc}
            </Desc>
            <Button>
              <button onClick={handleClick}>{props.button}</button>
            </Button>
        </CardWrapper>
    </CardLayout>
  )
}
