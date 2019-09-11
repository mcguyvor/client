import {PRODUCTS_FETCH, PRODUCT_CREATE,PRODUCT_FETCH,PRODUCT_UPDATE} from '../actions/type';
export default function(state=[],action){
    switch(action.type){
        case PRODUCT_FETCH:
        return action.payload;
        case PRODUCTS_FETCH:
            return action.payload;
        case PRODUCT_CREATE:
            return {saved: true, message:'saved product'};
        case PRODUCT_UPDATE:
            return {...state,saved: true,message:'saved product'};  
        default: return state;
    }
}