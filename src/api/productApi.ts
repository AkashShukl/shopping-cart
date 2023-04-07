import axios from "axios";
import { Product } from "../common/types/productType";


export const getProducts = async ():Promise<Product[]> => {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await axios.get(url);
    return  response.data
  } catch (error) {
    throw new Error(`Failed to retrieve products: ${error}`);
  }
};


export const getProductById= async (productId : number): Promise<Product> => {
  try{
    const response = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to retrieve products: ${error}`);
  }  
};
  

