import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsApiSlice'
import cartReduser from './cartsSlice'

export const store = configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReduser
    }
})