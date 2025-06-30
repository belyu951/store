import React from 'react'


//импорт компонентов

//импорт стилей
import './guarantee.scss'

//импорт иконок
import { SlLike } from "react-icons/sl";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";

function Guarantee() {
  return (
    <div className='guarantee'>

        <div className='quarantees'>
            <div className="quarantees__guaranteesDis"><SlLike  className='quarantees__svgLike'/></div>
            <span className='quarantees__discription'>Гарантируем <br /> качество <br /> товара</span>
        </div>

        <div className='question'>
            <div className="question__questionDis"><LuMessageCircleQuestion  className='question__svgQuestion'/></div>
            <span className='question__discription'>Поможем <br /> подобрать <br /> размер</span>
        </div>


        <div className='box'>
            <div className="box__boxDis"><BsBoxSeam  className='box__svgBox'/></div>
            <span className='box__discription'>Быстро <br /> доставим <br /> покупку</span>
        </div>


    </div>
  )
}

export default Guarantee