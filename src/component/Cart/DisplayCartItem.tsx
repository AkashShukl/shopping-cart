import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { price } from '../../common/helper'
import { CartItem } from '../../common/types/cartType'
import { Product } from '../../common/types/productType'

export default function DisplayCartItem({
  item,
  removeItem,
}: {
  item: Product
  removeItem: (id: number) => void
}) {
  return (
    <div
      className="flex flex-row items-center justify-between border-b-2 border-x-current 
    p-4 text-lg font-light"
    >
      <div
        className="cart-item-product-info flex flex-row items-center
       gap-2 text-gray-700"
      >
        <span
          style={{
            height: 100,
            width: 100,
          }}
        >
          <img
            className="max-h-full max-w-full"
            src={item?.image}
            alt={item?.title}
          />
        </span>
        <span>
          {item?.title}
          <br />
          <span className="text-sm">Qty: {item?.qty}</span>
        </span>
      </div>

      <div className="cart-item-product-price flex flex-row items-center font-medium">
        {price(item?.price)}
        <XMarkIcon
          style={{ color: 'gray' }}
          className="ml-2 h-6 w-6 cursor-pointer font-light"
          aria-hidden="true"
          onClick={() => removeItem(item?.id)}
        />
      </div>
    </div>
  )
}
