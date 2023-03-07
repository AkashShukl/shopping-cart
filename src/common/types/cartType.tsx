import { Product } from './productType'

export type CartItem = {
  id: number
  product: Product
  discount: number
  netPrice: number
}
