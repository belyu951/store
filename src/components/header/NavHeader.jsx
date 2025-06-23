import React from "react";

//импорт routerDom
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

//импорт компонентов
import SneakersCatalog from '../sneakersCatalog/SneakersCatalog'
import ClothCatalog from '../clothCatalog/ClothCatalog'
import AccessoriesCatalog from '../accessoriesCatalog/AccessoriesCatalog'
import Blog from '../blog/Blog'
import AboutUs from '../aboutUs/AboutUs'



//импорт стилей
import "./navHeaderStyled.scss";

//импорт иконок
import { GrCatalog } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

export default function NavHeader() {
  return (
    <>
      <div className="searchNavHeader">
        <div className="search">
          <div className="searchCatalog">
            <Link to='/'><h1 className="searchCatalog__logo" translate="no">хаус shop</h1></Link>
            <button className="searchCatalog__catalog">
              <GrCatalog className="searchCatalog__svgCatalog" />
              каталог
            </button>
          </div>

          <div className="searchInput">
            <input
              className="searchInput__input searchInputs"
              placeholder="искать на хаус shop"
              type="text"
            />
            <FaSearch className="searchInput__svgSeatch" />
          </div>

          <div className="searchSave">
            <Link to='/MyOrders'><button className="searchSave__orders">
              <FaBox className="searchSave__svgBox" /> заказы
            </button></Link>
            <div className="quantity">
              <span className="quantity__quan number">+3</span>
              <Link to='/Like'><button className="searchSave__like">
                <FaHeart className="searchSave__svgLike" /> избранное
              </button></Link>
            </div>
            <div className="quantity">
              <span className="quantity__quan">+3</span>
              <Link to='/Basket'><button className="searchSave__basket">
                <FaShoppingBasket className="searchSave__svgBasket" /> корзина
              </button></Link>
            </div>
          </div>
        </div>

        <div className="catalog">
          <Link to='/SneakersCatalog' className="namee"><button className="catalog__catalogSearch name">Кроссовки</button></Link>
          <Link to='/ClothCatalog' className="namee"><button className="catalog__catalogSearch name">Одежда</button></Link>
          <Link to='/AccessoriesCatalog' className="namee"><button className="catalog__catalogSearch name">Аксессуары</button></Link>
          <Link to='/Blog' className="namee"><button className="catalog__catalogSearch name">Блог</button></Link>
          <Link to='/AboutUs' className="namee"><button className="catalog__catalogSearch name">О нас</button></Link>
        </div>
      </div>

      <Routes>
        <Route path='/SneakersCatalog' element={<SneakersCatalog/>}/>
        <Route path='/ClothCatalog' element={<ClothCatalog/>}/>
        <Route path='/AccessoriesCatalog' element={<AccessoriesCatalog/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>
    </>
  );
}
