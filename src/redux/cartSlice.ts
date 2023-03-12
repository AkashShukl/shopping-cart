import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../common/types/productType'
import { RootState } from './store'

type CartState = {
  cartItems: Product[]
  totalPrice: number
}

const initialState: CartState = {
  cartItems: Array<Product>(),
  totalPrice: 0,
}



export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const currentItem = action.payload
      currentItem.qty = currentItem.qty || 1

      if (state.cartItems.find((item) => item.id === currentItem.id)) {
        state.cartItems.forEach((item) => {
          if (item?.id === currentItem.id) {
            item.qty = (currentItem.qty || 1) + (item.qty || 1)
            item.price = currentItem.price * item.qty
          }

        })
      } else {
        currentItem.price = currentItem.price * currentItem.qty
        state.cartItems = [...state.cartItems, currentItem]
      }
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price,
        0
      )

    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload
      )
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price,
        0
      )
    },
  },
})

export const { addItemToCart, removeItemFromCart } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.cartItems
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice

export default counterSlice.reducer
