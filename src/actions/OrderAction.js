import axios from'axios'
import {ORDER_FETCH} from './type'
export const   orderFetch =()=>{
   return  async dispatch=>{
       const response = await axios.get(process.env.REACT_APP_API_URL+'/orders');
        dispatch({type:ORDER_FETCH,payload : response.data});
   }
};

export const orderDelete = id=>{
    return async dispatch=>{
        await axios.delete(process.env.REACT_APP_API_URL+'orders/'+id);
        const response = await axios.get(process.env.REACT_APP_API_URL+'/orders');
        dispatch({type:ORDER_FETCH,payload:response.data});
    }
};