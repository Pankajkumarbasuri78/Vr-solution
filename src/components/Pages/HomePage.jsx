import React from 'react'
import { Aboutus } from '../Aboutus/Aboutus'
import { Heading } from '../common/Heading/Heading'
import { Footer } from '../Footer/Footer'
import { Hero } from '../Hero/Hero'
import { Offering } from '../Offering/Offering'

export const HomePage = () => {
  return (
    <>
        <Hero image='/pic.png'/>
        <Heading name='OUR OFFERINGS '/>
        <Offering />
        <Heading name='About Us'/>
        <Aboutus />
        <Footer />
    </>
  )
}
