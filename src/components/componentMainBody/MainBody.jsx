import React from 'react'

//import компонентов
import SliderSneakers from '../componentSliderSneakers/SliderSneakers'
import SliderTheBeast from '../componentSliderTheBeast/SliderTheBeast'
import Guarantee from '../guarantee/Guarantee'
import BlogFacts from '../blogFacts/BlogFacts'


export const MainBody = () => {
  return (
    <div className='paddingTop'>
        <SliderSneakers/>
        <SliderTheBeast/>
        <Guarantee/>
        <BlogFacts/>
    </div>
  )
}

export default MainBody
