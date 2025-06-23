import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import productsReducer from './productsApiSlice'
import cartReduser from './cartsSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        products: productsReducer,
        cart: cartReduser
    }
})