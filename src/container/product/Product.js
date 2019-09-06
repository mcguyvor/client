import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import axios from 'axios';
import ProductList from '../../component/product/ProductList';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {productFetch,productDelete} from '../../actions';
class Product extends Component {
    constructor (props) {
        super(props)
        this.deleteProduct=this.deleteProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }
     componentDidMount(){
        this.props.productFetch();
    }
     deleteProduct(id){
        this.props.productDelete(id);
        
        
     }
     editProduct(id){
        this.props.history.push('products/edit'+id);
     }
    
    render(){
        return(
            <div>
                <Header/>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <h1>Products</h1>
                            </div>
                            <div className='col-6'>
                                <button className='btn  btn-success title float-right' 
                                onClick={()=>this.props.history.push('products')}>Add</button>
                            </div>
                        </div>   
                        <ProductList products={this.props.products} 
                        onDeleteProduct ={this.deleteProduct} 
                        onEditProduct={this.editProduct}/>
                        </div>
                <Footer Email='noppawatchotiwan@gmail.com'/>
            </div>
        );
    }
}
function mapStateToProps({products}){
    return {products};
}
export default  withRouter(connect(mapStateToProps,{productFetch,productDelete})(Product));