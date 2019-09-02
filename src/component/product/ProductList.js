import React, { Component } from 'react';
import ProductItem from './ProductItem'
import uuid from 'uuid'
class ProductList extends Component{
    showProduct(){
            if(this.props.products){
                return(this.props.products.map(idx=>(
                    <ProductItem product={idx} 
                     key={idx.productId} 
                     productName={idx.productName} 
                     unitePrice={idx.unitPrice} 
                     thumbnail={idx.thumbnail} 
                     onAddOrder={this.props.onAddOrder}
                    onDeleteProduct ={this.props.onDeleteProduct}
                     /> 
                                                    )
                                                )
                    );
                }
            }
    
    render(){
        return(
            <div className='row'>
                {this.showProduct()}
            </div>
        );
    }
}
export default ProductList;