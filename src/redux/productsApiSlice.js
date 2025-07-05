import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

// 🔄 Асинхронный thunk для получения товаров
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://127.0.0.1:5500/store/src/dataProducts.json')
      const data = await response.json()

      // 👇 Добавляем уникальный id каждому товару
      const productsWithId = data.map(product => ({
        ...product,
        id: nanoid(),
      }))

      return productsWithId
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