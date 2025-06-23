import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 5
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: state => {
            state.value += 1
        },
        dicrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }

})
export const {increment,dicrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer