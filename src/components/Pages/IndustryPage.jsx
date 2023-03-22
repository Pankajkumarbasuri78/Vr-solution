import React from 'react'
import { Heading } from '../common/Heading/Heading'
import { Experties } from '../Experties/Experties'
import { Footer } from '../Footer/Footer'
import { HeroIndustry } from '../HeroIndustry/HeroIndustry'
//import { Hero } from '../Hero/Hero'

export const IndustryPage = () => {
  return (
    <>
        <HeroIndustry image='/image/industryPic.png'/>
        {/* <Hero image='/image/industryPic.png'/> */}
        <Heading name='OUR EXPERTIES'/>
        <Experties />
        <Footer />
    </>
  )
}
