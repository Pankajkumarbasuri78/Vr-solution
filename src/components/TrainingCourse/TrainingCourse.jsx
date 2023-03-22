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
    marginBottom:'13.4rem'
}))
const TrainingCourseWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    width:'79%',
    height:'100%',
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:'30px'
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
