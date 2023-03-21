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

}))
const OfferingWrapper = styled.div(props => ({
    display:'flex',
    flexDirection:'row',
    width:'79%',
    height:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    
    
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
    top:'120px'
}))
const Card3 = styled.div(props => ({
    position:'relative',
    top:'240px',
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
                image='/image/JobSeekers.png'
                heading='Job Seekers'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum tristique varius turpis egestas. Tellus gravida venenatis, nibh pellentesque imperdiet enim, dolor, suspendisse urna. Lobortis dictum arcu eu a vehicula a nibh risus.'
                button='Apply Now'
                />
            </Card1>
            <Card2>
            <OfferingCard 
                image='/image/industry.png'
                heading='Industry Segments'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum tristique varius turpis egestas. Tellus gravida venenatis, nibh pellentesque imperdiet enim, dolor, suspendisse urna. Lobortis dictum arcu eu a vehicula a nibh risus.'
                button='Explore ->'
                />

            </Card2>
            <Card3>
            <OfferingCard 
                image='/image/copera.png'
                heading='Corporrate Technical Trainings'
                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus dictum tristique varius turpis egestas. Tellus gravida venenatis, nibh pellentesque imperdiet enim, dolor, suspendisse urna. Lobortis dictum arcu eu a vehicula a nibh risus.'
                button='View ->'
                />
            </Card3>
        </OfferingWrapper>
    </OfferingLayout>
  )
}
