import React from 'react'
import { Heading } from '../common/Heading/Heading'
import { Footer } from '../Footer/Footer'
import { HeroTraining } from '../HeroTraining/HeroTraining'
import { TrainingCourse } from '../TrainingCourse/TrainingCourse'

export const TrainingPage = () => {
  return (
    <>
        <HeroTraining image='/image/trainingpic.png'/>
        <Heading name='Trainings we Provide'/>
        <TrainingCourse />
        <Footer />
    </>
  )
}
