import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, { payload, type }) => {
            const product = payload
            state.products.push(product)

            state.total =
                +state.total +
                (+payload.discount_price
                    ? +payload?.discount_price
                    : +payload?.price)
        },
        cartQtyUp: (state, { payload }) => {
            state.products = state.products.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item)
            state.total = +state.total +
                (+payload.discount_price
                    ? +payload?.discount_price
                    : +payload?.price)

        },
        cartQtyDown: (state, { payload }) => {
            let addedItem = state.products.find(item => +item.id === +payload.id,);
            if (addedItem?.qty <= 1) {
                const removedItemPrice = addedItem?.qty * (addedItem?.discount_price ? addedItem?.discount_price : addedItem?.price);

                state.products = state?.products.filter((item, i) => item?.id !== payload.id),
                    state.total = state.products?.length >= 1 ? state?.total - removedItemPrice : 0
            }
            else {
                state.products = state.products.map(item => +item.id === +payload.id
                    ? { ...item, qty: +item.qty !== 1 ? +item.qty - 1 : 1 }
                    : item
                ),
                    state.total = +addedItem.qty === 1 ? +state.total : +state.total
                        - (+addedItem.discount_price
                            ? +addedItem.discount_price
                            : +addedItem.price)
            }

        },
        emptycart: (state) => {
            state.products = []
            state.total = 0
        }
    }
})

export const { addToCart, cartQtyUp, cartQtyDown } = cartSlice.actions;
export default cartSlice.reducer;