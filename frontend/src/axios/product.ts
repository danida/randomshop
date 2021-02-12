import axios from 'axios';
import { ProductsType } from '../components/Main/types/ProductType';

export const getProducts = async (): Promise<ProductsType> => {
  let url = process.env.API_URL + "products"
  let result = await axios.get<ProductsType>(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return  error
    })
  return result
}
