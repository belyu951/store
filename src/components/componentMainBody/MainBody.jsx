import React from 'react'

//import компонентов
import SliderSneakers from '../componentSliderSneakers/SliderSneakers'
import SliderTheBeast from '../componentSliderTheBeast/SliderTheBeast'
import Guarantee from '../guarantee/Guarantee'


export const MainBody = () => {
  return (
    <div className='paddingTop'>
        <SliderSneakers/>
        <SliderTheBeast/>
        <Guarantee/>
    </div>
  )
}

export default MainBody
