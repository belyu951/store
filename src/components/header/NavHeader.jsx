import React from "react";

//импорт routerDom
import { Link, NavLink } from 'react-router-dom'

//импорт компонентов



//импорт стилей
import "./navHeaderStyled.scss";

//импорт иконок
import { GrCatalog } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function NavHeader() {


const totalQuantity = useSelector(state =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, null)
)

// console.log(totalQuantity > 9 ? '9+' : totalQuantity);

  return (
    <>
    <div className="searchNavHeader1">
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
              <span className="quantity__quan number">+0</span>
              <Link to='/Like'><button className="searchSave__like">
                <FaHeart className="searchSave__svgLike" /> избранное
              </button></Link>
            </div>
            <div className="quantity">
              <span className="quantity__quan">{totalQuantity > 9 ? '9+' : totalQuantity}</span>
              <Link to='/Basket'><button className="searchSave__basket">
                <FaShoppingBasket className="searchSave__svgBasket" /> корзина
              </button></Link>
            </div>
          </div>
        </div>

        <div className="catalog">
          <NavLink to='/SneakersCatalog' className={({ isActive }) => (isActive ? "nav-link activee" : "nav-link")}><button className="catalog__catalogSearch name">Кроссовки</button></NavLink>
          <NavLink to='/ClothCatalog' className={({ isActive }) => (isActive ? "nav-link activee" : "nav-link")}><button className="catalog__catalogSearch name">Одежда</button></NavLink>
          <NavLink to='/AccessoriesCatalog' className={({ isActive }) => (isActive ? "nav-link activee" : "nav-link")}><button className="catalog__catalogSearch name">Аксессуары</button></NavLink>
          <NavLink to='/Blog' className={({ isActive }) => (isActive ? "nav-link activee" : "nav-link")}><button className="catalog__catalogSearch name">Блог</button></NavLink>
          <NavLink to='/AboutUs' className={({ isActive }) => (isActive ? "nav-link activee" : "nav-link")}><button className="catalog__catalogSearch name">О нас</button></NavLink>
          {/* <NavLink to='/AboutUs' className="namee"><button className="catalog__catalogSearch name">О нас</button></NavLink> */}
        </div>
      </div>
      </div>
    </>
  );
}
