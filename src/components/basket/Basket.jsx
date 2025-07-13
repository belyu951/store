import React from 'react'
import { useSelector } from 'react-redux';

function Basket() {
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + (parseFloat(item.price) * item.quantity);
    }, 0);
  
  return (
    <> 
    <div className='paddingTop'>
      {cartItems.map((productBasket, idx)=>{
        return (
          <>
          <p key={idx}>Brand-{productBasket.brand} Name{productBasket.name} количество:{productBasket.quantity} размер:{productBasket.selectedSize} цена:{productBasket.price}</p>

          </>
        )
      })}
      
      <hr />
      <div className="basket-total">
        <h3>Общая сумма: {totalPrice.toFixed(2)}</h3>
      </div>
      </div>
    </>
  )
}

export default Basket

