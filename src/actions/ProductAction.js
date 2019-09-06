import axios from 'axios';
import {PRODUCT_FETCH} from './type'
export const productFetch =()=>{
   return async dispatch => {
      const response= await axios.get('http://localhost:3000/products')
           dispatch({type:PRODUCT_FETCH,payload: response.data});        
    } ;
};
export const productDelete =(id)=>{
    return async dispatch =>{
        await axios.delete('http://localhost:3000/products/'+id);
        const response = await axios.get('http://localhost:3000/products/');
        dispatch({type:PRODUCT_FETCH,payload: response.data})
         
        
        
    }
};