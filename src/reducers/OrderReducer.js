import {ORDER_FETCH} from '../actions/type';
export default  function(state =[],action){
    switch(action.type){
        case ORDER_FETCH:
        return action.payload;
        default :
        return state;
    }
};