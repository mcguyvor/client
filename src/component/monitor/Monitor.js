import React, { Component } from 'react';
import Calculator from'./Calculator';
import ProductList from '../product/ProductList'
class Monitor extends Component{
    constructor(props){
        super(props);
        this.state={
            totalPrice : 0,
            order : []
        };
        this.addOrder = this.addOrder.bind(this);
    }
  addOrder(product){
        let findOrder = this.state.order.find(idx=> idx.product.productId == product.productId);//check the order list, if it has thr product already by checking the product id
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.order.push({product : product, quantity:1});
            console.log({product : product, quantity:1});
            console.log(this.state.order);
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        console.log(`total price : ${totalPrice}`);
        console.log(parseInt(product.unitPrice));
        console.log(product);
        this.setState=({
            totalPrice: totalPrice,
            order: this.state.order
        });
        console.log(this.state);



    }
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-9'>
                    <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                    </div>
                    <div className='col-md-3'>
                    <Calculator totalPrice={this.state.totalPrice} order={this.state.order}/>
                    </div>  
                    
                </div>
            </div>
        );
    }
}
export default Monitor;