//импорт компонентов
import NavHeader from './components/header/NavHeader';
// import SliderSneakers from './components/componentSliderSneakers/SliderSneakers'
import MainBody from './components/componentMainBody/MainBody'
import Basket from './components/basket/Basket'
import Like from './components/Likes/Likes'
import MyOrders from './components/myOrders/MyOrders'

import { Routes, Route } from 'react-router-dom';


//импорт стилей
import './resetStyles.css';
import './conteiner.css';

function App() {
  
  return (
    <div className="conteiner">

      <NavHeader/>

      <Routes>
        <Route path='/' element={<MainBody/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        <Route path='/Like' element={<Like/>}/>
        <Route path='/MyOrders' element={<MyOrders/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
