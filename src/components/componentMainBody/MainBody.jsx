import React from 'react'

//import компонентов
import SliderSneakers from '../componentSliderSneakers/SliderSneakers'
import SliderTheBeast from '../componentSliderTheBeast/SliderTheBeast'
import Guarantee from '../guarantee/Guarantee'
import BlogFacts from '../blogFacts/BlogFacts'
import SliderBrand from '../componentSliderBrand/SliderBrand'


export const MainBody = () => {
  return (
    <div className='paddingTop'>
        <SliderSneakers/>
        <SliderTheBeast/>
        <Guarantee/>
        <BlogFacts/>
        <SliderBrand/>
    </div>
  )
}

export default MainBody
