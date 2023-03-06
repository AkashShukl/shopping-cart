type Rating = {
  rate: number
  count: number
}

type Product = {
  id: number
  title: string
  description: string
  price: number
  category: string
  qty?: number
  image?: string
  rating?: Rating
  discount?: string
}

export { type Product, type Rating }
