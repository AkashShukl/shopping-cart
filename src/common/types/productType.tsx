type Rating = {
    rate: number
    count: number
}

type Quantity = {
    max: number
    min: number
}

type Product = {
    id: number
    title: string
    description: string
    price: number
    category: string
    image?: string
    rating?: Rating
    discount?: string
}

export { type Product, type Rating }
