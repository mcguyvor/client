import {combineReducers} from'redux'
import ProductReducer from './ProductReducer'
import OrderReducer from'./OrderReducer'
const rootReducer = combineReducers({
    order : OrderReducer,
    products : ProductReducer
});
export default rootReducer;