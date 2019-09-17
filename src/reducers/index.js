import {combineReducers} from'redux'
import ProductReducer from './ProductReducer'
import OrderReducer from'./OrderReducer'
import {reducer as reduxForm} from 'reduc-form';
const rootReducer = combineReducers({
    order : OrderReducer,
    products : ProductReducer,
    form : reduxForm
});
export default rootReducer;