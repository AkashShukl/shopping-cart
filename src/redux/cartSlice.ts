
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../common/types/productType";
import { RootState } from "./store";

type CartState = {
    cartItems: Product[]
}

const initialState: CartState = {
    cartItems: Array<Product>(),
}

export const counterSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      // TODO: Add only if the item is not already in the store
      addItemToCart: (state, action: PayloadAction<Product>) => {
        // state.cartItems.push(action.payload)
        state.cartItems = [...state.cartItems, action.payload];
      },
      removeItemFromCart: (state, action: PayloadAction<Product>) => {
        state.cartItems = state.cartItems.filter( item => item.id != action.payload.id)
      },
    },
  })

  export const { addItemToCart, removeItemFromCart} = counterSlice.actions

  // Other code such as selectors can use the imported `RootState` type
  export const selectCartItems = (state: RootState) => state.cart.cartItems
  
  export default counterSlice.reducer