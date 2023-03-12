import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/productApi'
import { Product } from '../common/types/productType'
import ProductItem from './ProductItem'

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    async function fetchData() {
      const data = await getProducts()
      setProducts(data)
    }
    fetchData()
  }, [])

  return (
    <div
      className="mx-auto max-w-2xl py-16 px-4 sm:py-24 
    sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 className="sr-only">Products</h2>
      <div
        className="grid grid-cols-1 gap-y-10 gap-x-6 
    sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
    xl:gap-x-8"
      >
        {products.map((item) => {
          return <ProductItem key={item?.id} product={item} />
        })}
      </div>
    </div>
  )
}
