import React from 'react'
import MainCarousel from '../../HomeCarousal/MainCarousal'
import HomeSectionCarousel from '../../HomeSectionCaraousel/HomeSectionCarousel'
import { mens_kurta } from '../../../../Data/Mens_Kurta'

const HomePage = () => {
  return (
    <div>
       <div>
        <MainCarousel/>
        </div>

     <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
        </div>
    </div>
    
  )
}

export default HomePage