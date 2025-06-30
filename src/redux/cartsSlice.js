import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] // массив товаров
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const index = state.items.findIndex(
        item => item.id === product.id && item.selectedSize === product.selectedSize
      );
    
      if (index !== -1) {
        // Копируем элемент и массив, чтобы не мутировать напрямую
        const updatedItem = {
          ...state.items[index],
          quantity: state.items[index].quantity + 1
        };
        const updatedItems = [...state.items];
        updatedItems[index] = updatedItem;
        state.items = updatedItems; // 🔁 перезаписываем массив (гарантированная реактивность)
      } else {
        state.items = [...state.items, { ...product, quantity: 1 }];
      }
    }
    // по желанию: removeFromCart, clearCart и т.д.
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer