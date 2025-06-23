import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // массив товаров
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload
      const exists = state.items.find(item => item.id === product.id)

      if (!exists) {
        state.items.push(product)
      }
    },
    // по желанию: removeFromCart, clearCart и т.д.
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer