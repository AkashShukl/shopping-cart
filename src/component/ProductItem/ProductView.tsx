import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api/productApi'
import { Product } from '../../common/types/productType'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { price } from '../../common/helper'
import SelectItemCount from '../../common/SelectItemCount'
import { addItemToCart } from '../../redux/cartSlice'
import { useAppDispatch } from '../../redux/hooks'

type productViewParams = {
  id: string | undefined
}

export default function ProuctView() {
  const dispatch = useAppDispatch()

  const { id } = useParams<productViewParams>()
  const [item, setItem] = useState<Product>({ qty: 1 } as Product)

  const setQuantity = (count: number) => {
    setItem((item) => ({ ...item, qty: count }))
  }

  const addToCart = () => {
    dispatch(addItemToCart(item))
  }

  useEffect(() => {
    async function fetchData() {
      const data: Product = await getProductById(parseInt(id || '0'))
      setItem({ ...data, qty: 1 })
    }
    fetchData()
  }, [])

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="mx-auto mt-6 max-w-2xl bg-white sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className="product-showcase ">
        <div className="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4 sm:overflow-hidden sm:rounded-lg">
          <img
            src={item?.image}
            alt={'product images'}
            className="h-50% w-50% object-cover object-center"
          />
        </div>
      </div>
      <div className="product-info mt-4 flex flex-col justify-start lg:row-span-3 lg:mt-0">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {item?.title}
          </h1>
        </div>
        <p className="mt-2 mb-2 text-3xl tracking-tight text-gray-900">
          {price(item?.price || 0)}
        </p>

        <div className="mt-6 mb-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    Math.floor(item?.rating?.rate || 0) > rating
                      ? 'text-gray-900'
                      : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{item?.rating?.rate} out of 5 stars</p>
            <a
              // href={reviews.href}
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              {item?.rating?.count} reviews
            </a>
          </div>
        </div>
        <div>
          <h3 className="sr-only">Description</h3>

          <div className="mt-2 mb-2 space-y-6">
            <p className="text-base text-gray-900">{item?.description}</p>
          </div>
        </div>

        <SelectItemCount quantity={item?.qty || 1} setQuantity={setQuantity} />

        <button
          type="submit"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
