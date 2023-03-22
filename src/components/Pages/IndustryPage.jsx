import React from 'react'
import { Heading } from '../common/Heading/Heading'
import { Experties } from '../Experties/Experties'
import { Footer } from '../Footer/Footer'
import { Hero } from '../Hero/Hero'

export const IndustryPage = () => {
  return (
    <>
        <Hero image='/image/industryPic.png'/>
        <Heading name='OUR EXPERTIES'/>
        <Experties />
        <Footer />
    </>
  )
}
