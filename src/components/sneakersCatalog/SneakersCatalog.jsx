import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../../redux/productsApiSlice';

// импорт компонентов 
import SneakersCatalogCard from './sneakersCatalogCard/SneakersCatalogCard';
import SideBar from '../sidBar/SideBar';

//импорт стилей
import './sneakersCatalog.scss'
import { Link } from 'react-router-dom';




function SneakersCatalog() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Загрузка...</p>;
  if (status === "failed") return <p>Ошибка: {error}</p>;

  // console.log(items);

  let sneakers = items.map((catalogSneakers)=>{
    return catalogSneakers.category === 'кроссовки' ? catalogSneakers : ''
  })

  // console.log(sneakers);
    

  return (
    <>
    <div className='conteiner paddingTop' style={{display : 'flex'}}>
    <SideBar/>
    
        <div >
          {
            sneakers.map((sneakersNoneDiskont)=>{
            
              return (
                <Link to={`/Products/${sneakersNoneDiskont.id}`}>
                <SneakersCatalogCard props={sneakersNoneDiskont}/>
                </Link>
              )
            })
          }
        </div>
        </div>
    </>
  )
}
export default SneakersCatalog