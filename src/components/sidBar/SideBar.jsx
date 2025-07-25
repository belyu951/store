import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../../redux/productsApiSlice';


//импорт стилей
import './sideBar.scss'

function SideBar() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products)
  
    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchProducts());
      }
    }, [dispatch, status]);
  
    if (status === "loading") return <p>Загрузка...</p>;
    if (status === "failed") return <p>Ошибка: {error}</p>;
    
    // const size = [...new Set(items.map((item)=> item.size))]
    const season = [...new Set(items.map((item)=> item.season))]
    const product = [...new Set(items.map((item)=> item.name.toLowerCase()))].filter(function(item) { return item !== 'очки'}) + ', ';
    const color = [...new Set(items.map((item)=> item.color))]
    console.log(season);
  return (
    <>
    <div className="sideBar">
        <div className='size'>
            <span className="size__sizeText">размер</span>

        </div>
        <div className='season'>{season}</div>
        <div className='price'></div>
        <div className='product'>{product}</div>
        <div className='color'>
            {color?.map((col)=>{ return <div style={{backgroundColor : `${col}` , width : '30px' , height : '30px' , borderRadius : '50%'}}></div> })}
        </div>
    </div>
    </>
  )
}

export default SideBar