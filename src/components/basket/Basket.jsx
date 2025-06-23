import React from 'react'
import { useSelector } from 'react-redux';

function Basket() {
    const cartItems = useSelector(state => state.cart.items)
    // console.log(cartItems);
  return (
    <div>{console.log(cartItems)}</div>
  )
}

export default Basket