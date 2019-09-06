import axios from'axios'
import {ORDER_FETCH} from './type'
export const   orderFetch =()=>{
   return  async dispatch=>{
       const response = await axios.get('http://localhost:3000/orders');
        dispatch({type:ORDER_FETCH,payload : response.data});
   }
};

export const orderDelete = id=>{
    return async dispatch=>{
        await axios.delete('http://localhost:3000/orders/'+id);
        const response = await axios.get('http://localhost:3000/orders');
        dispatch({type:ORDER_FETCH,payload:response.data});
    }
};