// features/products/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 🔄 Асинхронный thunk для получения товаров
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    console.log('закрузка');
    try {
      const response = await fetch('http://127.0.0.1:5500/shop-sneakers/src/dataProducts.json')
      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export default productsSlice.reducer