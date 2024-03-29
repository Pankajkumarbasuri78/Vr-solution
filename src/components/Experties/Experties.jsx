import React from 'react';
import styled from 'styled-components';
import { IndustryCard } from '../IndustryCard/IndustryCard';

const ExpertiesLayout = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'auto',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'5.6rem',
    marginBottom:'19.6rem',

    '@media (max-width: 600px)': {
      marginTop:'1.8rem',
      marginBottom:'2.25rem',
    }
}))
const ExpertiesWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    width:'79%',
    height:'100%',
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:'30px',
    
    '@media (max-width: 600px)': {
      gap:'20px'
    }

}))

export const Experties = () => {
  return (
    <ExpertiesLayout>
        <ExpertiesWrapper>
            <IndustryCard />
            <IndustryCard />
            <IndustryCard />
            <IndustryCard />
            <IndustryCard />
            <IndustryCard />
        </ExpertiesWrapper>
    </ExpertiesLayout>
  )
}
