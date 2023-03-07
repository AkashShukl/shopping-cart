import React, { useEffect, useState } from 'react'
import Button from '../../common/Button'
import { CartItem } from '../../common/types/cartType'
import { Product } from '../../common/types/productType'
import { selectCartItems } from '../../redux/cartSlice'
import { useAppSelector } from '../../redux/hooks'
import DisplayCartItem from './DisplayCartItem'

export default function Cart() {
  const [items, setItems] = useState<Product[]>([])
  const cartSelector = useAppSelector(selectCartItems)
  useEffect(() => {
    setItems(cartSelector)
    console.log('rerender')
  }, [cartSelector])

  function handleCheckout() {
    console.log('checking out')
  }

  return (
    <div className="container mx-auto flex flex-row justify-between">
      {items.length ? (
        <>
          <div className="w-3/4 ">
            {' '}
            {items.map((item) => (
              <DisplayCartItem key={item.id} item={item} />
            ))}
          </div>
          <div>
            <Button onClick={handleCheckout}>Checkout</Button>
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
