import React, { useEffect, useState } from 'react'
import Button from '../../common/Button'
import { price } from '../../common/helper'
import { CartItem } from '../../common/types/cartType'
import { Product } from '../../common/types/productType'
import {
  removeItemFromCart,
  selectCartItems,
  selectCartTotalPrice,
} from '../../redux/cartSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import DisplayCartItem from './DisplayCartItem'

export default function Cart() {
  const [items, setItems] = useState<Product[]>([])
  const cartSelector = useAppSelector(selectCartItems)
  const cartTotalPrice = useAppSelector(selectCartTotalPrice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setItems(cartSelector)
  }, [cartSelector])

  function handleCheckout() {
    alert('Congrats! check out done!')
  }

  function removeItem(id: number) {
    dispatch(removeItemFromCart(id))
  }

  return (
    <div style={{ maxWidth: '800px' }} className="container mx-auto">
      {items.length ? (
        <>
          <div style={{ maxHeight: '50%' }} className="mx-auto overflow-auto">
            {' '}
            {items.map((item) => (
              <DisplayCartItem
                key={item.id}
                item={item}
                removeItem={removeItem}
              />
            ))}
          </div>
          <div className="flex flex-col items-end">
            <table className=" w-96 border-separate border-spacing-3">
              <tbody>
                <tr className="">
                  <td>Total Amount</td>
                  <td className="text-right">
                    {price(Number(cartTotalPrice.toFixed(2)))}
                  </td>
                </tr>
                <tr className="">
                  <td>Discount</td>
                  <td className="text-right">5%</td>
                </tr>
                <tr className="">
                  <td>Net Amount</td>
                  <td className="text-right">
                    {price(Number((cartTotalPrice * 0.95).toFixed(2)))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mx-auto p-2 text-right">
            <Button style={{ width: '22rem' }} onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-80 w-full text-center text-4xl  text-gray-500">
          Your cart is empty
        </div>
      )}
    </div>
  )
}
