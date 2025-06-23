import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/productsApiSlice'
import { addToCart } from '../../../redux/cartsSlice'

// импорт иконок
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//импорт стилей
import './sliderItem.scss'


function SliderItem() {

  const dispatch = useDispatch()
  const { items, status, error } = useSelector(state => state.products)
  const [sizes, setSizes] = useState([])

  console.log(sizes[0]);

  useEffect(()=>{
    if(status === 'idle'){
    dispatch(fetchProducts())
  }
  },[dispatch, status])

  if (status === 'loading') return <p>Загрузка...</p>
  if (status === 'failed') return <p>Ошибка: {error}</p>

  const size = items.map((size)=>{
    return size.size[0]
  })


  const sizeCategory = [size[0],size[1]]
  const noSizeCategory = [39]
  
  const formatted = Array.from({ length: sizeCategory[1] - sizeCategory[0] + 1 }, (_, i) => sizeCategory[0] + i)
  .reduce((acc, num) => {
    if (!noSizeCategory.includes(num)) {
      acc.push(`${num} eur`);
    }
    return acc;
  }, []);

  return (
    <>
      {[...items]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4)
.map((products)=>{
        return (
          <div className="sliderItem">

            <div className="sliderItemImagesSneakers">
              {/* {products.images.slice(0,1).map((imgg)=>{
                return <img src={imgg} className="sliderItemImages__images" alt="" />
              })} */}
                <img src={products.images[0]} className="sliderItemImages__images" alt="" />
            </div>

            <div className="sliderItemNameSneakers">
                <span className="sliderItemNameSneakers__nameSneakers">{products.name}</span>
                <span className="sliderItemNameSneakers__articleSneakers">артикул 19666</span>
            </div>

            <div className="sliderItemPriceSneakers" >
              <div className="sliderItemPriceSneakers__borderRadiusPrise"><span className="sliderItemPriceSneakers__price">{products.price}</span></div>
              <div onClick={()=> dispatch(addToCart(products))} className="sliderItemPriceSneakers__borderRadiusLikes">
              <FontAwesomeIcon className='sliderItemPriceSneakers__svgLike like' icon={faHeart} />
              </div>
            </div>

            <div className="sliderItemSizeSneakers">
              <span className='sliderItemSizeSneakers__size'>размер</span>
              <div className='sliderItemSizeSneakers__flex'>
              {formatted.map((item)=>{
                return <p className='sliderItemSizeSneakers__sizes sizesHover'>{item}</p>
              })}
              </div>
            </div>

          </div>
        )
      })}
        {/* <div className="sliderItem">

            <div className="sliderItemImagesSneakers">
                <img src="https://cdn.sanity.io/images/c1chvb1i/production/a0479c253b26a9fec066b696305577ab9836f48a-1100x735.jpg?w=1760&h=1176&q=75&fit=max&auto=format" className="sliderItemImages__images" alt="" />
            </div>

            <div className="sliderItemNameSneakers">
                <span className="sliderItemNameSneakers__nameSneakers">кроссовки Nike Super</span>
                <span className="sliderItemNameSneakers__articleSneakers">артикул 19666</span>
            </div>

            <div className="sliderItemPriceSneakers" >
              <div className="sliderItemPriceSneakers__borderRadiusPrise"><span className="sliderItemPriceSneakers__price">3200</span></div>
              
              <div className="sliderItemPriceSneakers__borderRadiusLikes">
              <FontAwesomeIcon className='sliderItemPriceSneakers__svgLike like' icon={faHeart} />
              </div>
              
            </div>

            <div className="sliderItemSizeSneakers">
              <span className='sliderItemSizeSneakers__size'>размер</span>
              <div className='sliderItemSizeSneakers__flex'>
              {formatted.map((item)=>{
                return <p className='sliderItemSizeSneakers__sizes sizesHover'>{item}</p>
              })}
              </div>
            </div>
        </div> */}
    </>
  )
}

export default SliderItem