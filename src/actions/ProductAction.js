import axios from 'axios';
import {PRODUCTS_FETCH, PRODUCT_CREATE,PRODUCT_FETCH,PRODUCT_UPDATE} from './type'

export const productFetch = id=>{
    return async dispatch => {
        const response = await axios.get('http://localhost:3000/products/'+id);
        dispatch({type: PRODUCT_FETCH, payload: response.data});
    }
} 
export const productsFetch =()=>{
   return async dispatch => {
      const response= await axios.get('http://localhost:3000/products/');
           dispatch({type:PRODUCTS_FETCH,payload: response.data});        
    } ;
};
export const productDelete =(id)=>{
    return async dispatch =>{
        await axios.delete('http://localhost:3000/products/'+id);
        const response = await axios.get('http://localhost:3000/products/');
        dispatch({type:PRODUCTS_FETCH,payload: response.data});
    }
};
export const productCreate = values =>{
    return async dispatch =>{
        await axios.post('http://localhost:3000/products/'.values);
        dispatch({type: PRODUCT_CREATE});
    }
};
export const productUpdate = (id,values) =>{
    return async dispatch =>{
        await axios.put('http://localhost:3000/products/'+id, values);
        dispatch({type:PRODUCT_UPDATE});
    }
};