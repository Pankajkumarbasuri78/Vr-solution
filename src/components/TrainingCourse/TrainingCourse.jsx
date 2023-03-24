import React from 'react'
import styled from 'styled-components'
import { TrainingCard } from '../TrainingCard/TrainingCard'

const TrainingCourseLayout = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'auto',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'1.87rem',
    marginBottom:'13.4rem',

    '@media (max-width: 600px)': {
      marginTop:'1.8rem',
      marginBottom:'2.25rem',
    }
}))
const TrainingCourseWrapper = styled.div(props => ({
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

export const TrainingCourse = () => {
  return (
    <TrainingCourseLayout>
        <TrainingCourseWrapper>
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
        </TrainingCourseWrapper>
    </TrainingCourseLayout>
  )
}
