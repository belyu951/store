//импорт компонентов
import NavHeader from './components/header/NavHeader';
// import SliderSneakers from './components/componentSliderSneakers/SliderSneakers'
import MainBody from './components/componentMainBody/MainBody'
import Basket from './components/basket/Basket'
import Like from './components/Likes/Likes'
import MyOrders from './components/myOrders/MyOrders'
import SneakersCatalog from './components/sneakersCatalog/SneakersCatalog'
import ClothCatalog from './components/clothCatalog/ClothCatalog'
import AccessoriesCatalog from './components/accessoriesCatalog/AccessoriesCatalog'
import Blog from './components/blog/Blog'
import AboutUs from './components/aboutUs/AboutUs'
import Footer from './components/footer/Footer'

import { Routes, Route } from 'react-router-dom';


//импорт стилей
import './resetStyles.css';
import './conteiner.css';

function App() {
  
  return (
    <>
      <NavHeader/>
      
      <Routes>
        <Route path='/' element={<MainBody/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        <Route path='/Like' element={<Like/>}/>
        <Route path='/MyOrders' element={<MyOrders/>}/>
        <Route path='/SneakersCatalog' element={<SneakersCatalog/>}/>
        <Route path='/ClothCatalog' element={<ClothCatalog/>}/>
        <Route path='/AccessoriesCatalog' element={<AccessoriesCatalog/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
