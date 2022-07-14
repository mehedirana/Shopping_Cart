import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,{payload, type}) => {
            const product =  payload
            state.products.push(product)
        },
        emptycart: (state) => {
            // state.products = []
            // state.total = 0
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;