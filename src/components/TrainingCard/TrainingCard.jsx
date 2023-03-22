import React from 'react'
import styled from 'styled-components'
import {AiOutlineStar} from 'react-icons/ai';

const CardLayout = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'331px',
    height:'380px',
    backgroundColor:'#ffffff',
    boxShadow:'0px 0px 18px rgba(0, 0, 0, 0.08)',

    transform:'all 0.2s ease-in-out',
    '&:hover':{
        transform:'scale(1.1)',
    }
}))
const CardWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'column',
    width:'90%',
    height:'100%',
    padding:'1rem 0'
    //gap:'26px'
}))

const Image = styled.div(props => ({
    width:'100%',
    height:'156px',
    backgroundColor:'#FBB1BF',
    marginBottom:'1.8rem',
    '& img':{
        position:'relative',
        top:'1.5rem',
        left:'28%'
    }
    
}))
const RatingRow = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingBottom:'1.25rem'
    
}))
const Left = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    gap:'9px',
    paddingRight:'6.5rem'
}))
const Title = styled.div(props => ({
  fontSize:'0.75rem',
  fontWeight:400,
  lineHeight:'129%',
  color:'#555555',
  fontFamily:'Inter',

}))
const Rate = styled.div(props => ({
    width:'35px',
    height:'13px',
    border:'0.205556px solid #EF4565',
    borderRadius:'4.1px',
    fontSize:'0.75rem',
    fontWeight:400,
    lineHeight:'129%',
    color:'#555555',
    fontFamily:'Inter',
    

}))


const Heading = styled.div(props => ({
    fontFamily:'Inter',
    fontSize:'1.36rem',
    lineHeight:'129%',
    fontWeight:'500',
    color:'#000000',
    paddingBottom:'40px',

}))
const Button = styled.div(props => ({
    '& button':{
        width:'125px',
        height:'30.47px',
        backgroundColor:'#01147A',
        fontSize:'0.8rem',
        fontWeight:500,
        fontFamily:'Inter',
        color:'#ffffff',
        border:'none',
        cursor:'pointer',

    }
}))

export const TrainingCard = () => {
  return (
    <CardLayout>
        <CardWrapper>
        <Image>
            <img src='/image/react.png' alt='logo' style={{width:'126px',height:'112.1px'}}/>
        </Image>
        <RatingRow>
            <Left>
            <img src='/image/uim_graph-bar.png' alt='logo' style={{width:'12px',height:'12px'}}/>
            <Title>Intermediate / Advance</Title>
            </Left>
            <Rate><AiOutlineStar style={{backgroundColor:'yellow',width:'10px',height:'10px'}}/> 4.8</Rate>
        </RatingRow>
        <Heading>Full Stack Development-Using React</Heading>
        <Button>
            <button>Contact us</button>
        </Button>
        </CardWrapper>
    </CardLayout>
  )
}
