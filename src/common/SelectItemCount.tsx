import { PlusCircleIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

interface SelectItemCountProps {
  quantity: number
  setQuantity: (count: number) => void
}

const SelectItemCount = ({ quantity, setQuantity }: SelectItemCountProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(event.target.value)
    setQuantity(count)
  }

  return (
    <div className="relative">
      <span
        className="flex w-32 items-center justify-between rounded-md border
         border-gray-200 bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        // onClick={() => setIsOpen(!isOpen)}
      >
        <button
          className="border-r-[2px] border-solid p-2 font-medium hover:bg-gray-200"
          onClick={handleIncrement}
        >
          +
        </button>
        <span>Qty : {quantity}</span>
        <button
          className="border-l-[2px] border-solid p-2 font-medium hover:bg-gray-200"
          onClick={handleDecrement}
        >
          -
        </button>
      </span>
    </div>
  )
}

export default SelectItemCount
