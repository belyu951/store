import React from 'react'

//import компонентов
import SliderSneakers from '../componentSliderSneakers/SliderSneakers'
import SliderTheBeast from '../componentSliderTheBeast/SliderTheBeast'

export const MainBody = () => {
  return (
    <div>
        <SliderSneakers/>
        <SliderTheBeast/>
    </div>
  )
}

export default MainBody
