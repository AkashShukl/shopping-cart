import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'
import { price } from '../common/helper'
import { Product } from '../common/types/productType'
import { addItemToCart } from '../redux/cartSlice'
import { useAppDispatch } from '../redux/hooks'

interface ProductProps {
  product: Product
}

export default function ProductItem({ product }: ProductProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function addToCart(product: Product) {
    dispatch(addItemToCart(product))
  }

  function navigateToProduct(productId: number) {
    navigate(`/product/${productId}`)
  }

  return (
    <div
      key={product.id}
      className="group flex flex-col justify-end rounded border p-2 hover:cursor-pointer"
    >
      <div
        onClick={() => navigateToProduct(product.id)}
        className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg "
      >
        <img
          src={product.image}
          alt={product.title}
          className=" h-48  w-96 object-scale-down
                  group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4  text-sm text-gray-500">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {price(product.price)}
      </p>

      <Button type="button" onClick={() => addToCart(product)}>
        Add To Cart
      </Button>
    </div>
  )
}
