import React from 'react'
import styled from 'styled-components'
import { OfferingCard } from '../common/OfferingCard/OfferingCard'


// const Data = [
//     {
//         id:'1',
//         image:'/image/JobSeekers.png',
//         heading:'job seekers',
//         desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum tristique varius turpis egestas. Tellus gravida venenatis, nibh pellentesque imperdiet enim, dolor, suspendisse urna. Lobortis dictum arcu eu a vehicula a nibh risus.',
//         button:'Apply Now',
//     },
//     {
//         id:'2',
//         image:'/image/JobSeekers.png',
//         heading:'industry Segments',
//         desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum tristique varius turpis egestas. Tellus gravida venenatis, nibh pellentesque imperdiet enim, dolor, suspendisse urna. Lobortis dictum arcu eu a vehicula a nibh risus.',
//         button:'Explore ->',
//     },
//     {
//         id:'3',
//         image:'/image/JobSeekers.png',
//         heading:'Corporrate technical trainings',
//         desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum tristique varius turpis egestas. Tellus gravida venenatis, nibh pellentesque imperdiet enim, dolor, suspendisse urna. Lobortis dictum arcu eu a vehicula a nibh risus.',
//         button:'View ->',
//     },
// ]


const OfferingLayout = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'auto',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'2.5rem',
    marginBottom:'22rem',//235px

    [`@media (max-width: 600px)`]:
  {
    marginTop:'1rem',
    flexDirection:'column',
    marginBottom:'100px'

  }

}))
const OfferingWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    width:'79%',
    height:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    [`@media (max-width: 600px)`]:
    {
        flexDirection:'column'
    }
    
    
}))
const Background = styled.div(props => ({
    position:'absolute',
    width:'84%',
    height:'480px',
    left:'16%',
    top:'1570px',
    background:'rgba(190, 224, 255, 0.307514)',
    borderRadius:'0px 0px 180px 0px',
    zIndex:-1,


}))

const Card1 = styled.div(props => ({
    //marginBottom:'40px'
}))
const Card2 = styled.div(props => ({
    position:'relative',
    top:'120px',

    '@media (max-width: 600px)': {
        top:'1.56rem'
      }
}))
const Card3 = styled.div(props => ({
    position:'relative',
    top:'240px',

    '@media (max-width: 600px)': {
        top:'3rem'
      }

}))

export const Offering = () => {
  return (
    <OfferingLayout>
        <Background />
        <OfferingWrapper>
          {/* {Data.map((data) => {
                return(
                    <OfferingCard 
                      image={data.image} 
                      heading={data.heading}
                      desc={data.desc}
                      button={data.button}
                      id={data.id}
                      />
                    
                )
            })} */}
            <Card1>
            <OfferingCard 
                id='1'
                image='/image/CraeteProfile.png'
                heading='Job Seekers'
                desc='At VR The Solutions, we help you open your doors to the organization you aspire and deserve to work with. Our connections with organizations globally and continuous efforts to cater to the demands across the various industry segments helps us align the need of the job seekers and the various organizations across different sectors. Mapping the right skills to appropriate requirements and helping the youth with their carrer growth is our prime motto.'
                button='Apply Now'
                />
            </Card1>
            <Card2>
            <OfferingCard 
                id='2'
                image='/image/ExplorePic.png'
                heading='Industry Segments'
                desc='At VR The Solutions, we help you find the correct talent with skills needed to meet your requirements. With our intense screening process and  in house trainings, we target to identify the correct skills aligned with the need of the hour. Helping your business growth by providing you the correct resources is our prime motto.'
                button='Explore ->'
                />

            </Card2>
            <Card3>
            <OfferingCard 
                id='3'
                image='/image/ViewPic.png'
                heading='Corporrate Technical Trainings'
                desc='At VR The Solutions, we help facilitate industry specific trainings to help nurture the talent and prepare you for the corporate world. Based on emerging industry needs and evolving technology, our structured programs focus on creating professionals who can help meet the organizatinal goals and values.'
                button='View ->'
                />
            </Card3>
        </OfferingWrapper>
    </OfferingLayout>
  )
}
