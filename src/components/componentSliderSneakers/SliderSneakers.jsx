import React, { useState } from 'react'


//импорт иконок
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";


//импорт стилей
import './SliderSneakers.scss'

// import fotosnek from '../../fotoSneakers/nike_banner_1000x400.PNG'



function SliderSneakers() {


const [idx, setIdx] = useState(0)
let total = 4


const prevSlide = () => {
  setIdx((prev) => (prev - 1 + total) % total)
}

const nextSlide = () => {
  setIdx((prev) => (prev + 1) % total)
}


// useEffect(()=>{
//   const interval = setInterval(()=>{
//     nextSlide()
//   },4000)
//   return () => clearInterval(interval)
// },[])




  return (
    <>
    <div className="coruselImagesSneakers">
    
        <div className="corusel" style={{transform: `translateX(-${idx * 25}%)`}}>
        
          <div className="images">
            <img className="images__sneakersImg imgSneakers" src='https://www.tradeinn.com/f/14147/141475597_3/calvin-klein-%D0%9A%D1%80%D0%BE%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-ym0ym01119.webp' alt="" />
            {/* <img src={fotosnek} alt="" /> */}
            <h1 className="images__sneakersName sneakersNameCalvinKlein">Calvin Klein Jax White - стиль в каждом шаге</h1>
            <h1 className="images__sneakersDiscription sneakersDiscriptionCalvinKlein">Повысь свой стиль до нового уровня с мужскими кроссовками Calvin Klein Jax White.Лаконичный белый цвет в сочетании с фирменным логотипом придает образу чистоту и элегантность.Модель выполнена из качественных материалов, обеспечивающихкомфорт в течении всего дня. Универсальный дизаин легко сочитается как с джинсами, так и с классическими брюками - идеально для города, офиса и прогулок. Calvin Klein Jax - когда минимализм встречается с премиум классом.</h1>
          </div>

          <div className="images">
            <img className="images__sneakersImg imgSneakers" src='https://hips.hearstapps.com/hmg-prod/images/5-662020b809d39.jpg' alt="" />
            <h1 className="images__sneakersName sneakersNameNike ">Стиль и комфорт на каждом шаге — кроссовки Nike в бело-синем исполнении</h1>
            <h1 className="images__sneakersDiscription  sneakersDiscriptionNike">Открой для себя идеальное сочетание классики и современного стиля с кроссовками Nike в бело-темно-синем цвете. Чистый белый тон придаёт свежесть образу, а глубокий тёмно-синий акцент добавляет спортивной строгости и уверенности. Эти кроссовки созданы для тех, кто ценит комфорт, качество и безупречный внешний вид — как в повседневной жизни, так и на тренировках. Лёгкие, дышащие материалы и фирменная подошва Nike обеспечивают удобство даже при длительной носке. Будь в движении — будь в стиле с Nike.</h1>
          </div>

          <div className="images">
            <img className="images__sneakersImg imgSneakers" src='https://www.mytheresa.com/media/1094/1238/100/f8/P00868584_d2.jpg' alt="" />
            <h1 className="images__sneakersName sneakersNameNewBelans">New balance - стиль в каждом шаге</h1>
            <h1 className="images__sneakersDiscription sneakersDiscriptionNewBelans">Повысь свой стиль до нового уровня с мужскими кроссовками new balance.Лаконичный белый цвет в сочетании с фирменным логотипом придает образу чистоту и элегантность.Модель выполнена из качественных материалов, обеспечивающихкомфорт в течении всего дня. Универсальный дизаин легко сочитается как с джинсами, так и с классическими брюками - идеально для города, офиса и прогулок. new balance - когда минимализм встречается с премиум классом.</h1>
          </div>

          <div className="images">
            <img className="images__sneakersImg imgSneakers" src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1714165983-free-metcon-5-mens-workout-shoes-662c18d6def65.jpg?crop=1.00xw:0.801xh;0,0.171xh&resize=980:*' alt="" />
            <h1 className="images__sneakersName sneakersNameNike">Стиль и комфорт на каждом шаге — кроссовки Nike</h1>
            <h1 className="images__sneakersDiscription sneakersDiscriptionNike">Повысь свой стиль до нового уровня с мужскими кроссовками Nike.Лаконичный белый цвет в сочетании с фирменным логотипом придает образу чистоту и элегантность.Модель выполнена из качественных материалов, обеспечивающихкомфорт в течении всего дня. Универсальный дизаин легко сочитается как с джинсами, так и с классическими брюками - идеально для города, офиса и прогулок. Nike - когда минимализм встречается с премиум классом.</h1>
          </div>

      </div>
      
        <div className="slideNavigation">
        <GrLinkPrevious onClick={prevSlide} className="slideNavigation__buttonPrev buttonSlideNav"/>
          <div className="slideNavigation__element">
            <div className={idx === 0 ? "active" : "dontActive"}></div>
            <div className={idx === 1 ? "active" : "dontActive"}></div>
            <div className={idx === 2 ? "active" : "dontActive"}></div>
            <div className={idx === 3 ? "active" : "dontActive"}></div>
          </div>
        <GrLinkNext onClick={nextSlide} className="slideNavigation__buttonNext buttonSlideNav"/>
        </div>
      
    </div>

    
    </>
  )
}

export default SliderSneakers