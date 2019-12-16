import axios from 'axios';
import { ProductsType } from '../components/Products/types/ProductType';

 export const getProducts =   ():any =>  {
  let url = process.env.API_URL + "products"
  axios.get<ProductsType>(url)
    .then(response => {
      console.log(response.data)
      return  response.data
    })
    .catch(error => {
      console.log(error);
      return
    })
   
}
