import React from 'react'

//иморт стилей
import './sliderTheBeast.scss'

//импорт компонентов
import SliderItem from './componentSliderItem/SliderItem'

function SliderTheBeast() {
  return (
    <>
    <div className="sliderTheBeast">
        <h1 className='theBeastLogo'>Лучшие из лучших</h1>
        <div className="slider">
          <SliderItem/>
        </div>
        
    </div>
    
    </>
  )
}

export default SliderTheBeast