import React, { useState } from 'react'
import { CartItem } from '../../common/types/cartType'

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([])

  return <div>Cart UI</div>
}
