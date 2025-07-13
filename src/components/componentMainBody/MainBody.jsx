import React from 'react'

//import компонентов
import SliderSneakers from '../componentSliderSneakers/SliderSneakers'
import SliderTheBeast from '../componentSliderTheBeast/SliderTheBeast'
import Guarantee from '../guarantee/Guarantee'
import BlogFacts from '../blogFacts/BlogFacts'
import SliderBrand from '../componentSliderBrand/SliderBrand'
// import Footer from '../footer/Footer'

//импорт стилей

import '../../conteiner.css'


export const MainBody = () => {
  return (
    <>
    <div className='paddingTop conteiner'>
        <SliderSneakers/>
        <SliderTheBeast/>
        <Guarantee/>
        <BlogFacts/>
        <SliderBrand/>
        
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default MainBody
