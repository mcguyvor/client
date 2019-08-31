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
        this.deleteOrder= this.deleteOrder.bind(this);
    }
  addOrder(product){
        let findOrder = this.state.order.find(idx=> idx.product.productId == product.productId);//check the order list, if it has thr product already by checking the product id
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.setState()
            this.state.order.push({product : product, quantity:1});
            console.log({product : product, quantity:1});
            console.log(this.state.order);
        }
        const totalPrices = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({
            totalPrice : totalPrices,   
        });
    }
 deleteOrder(product){
        console.log(`product : ${product.product}`);
        let findOrder = this.state.order.find(idx=> idx.product.productId == product.productId);
        console.log(`findOrder ${findOrder}`);
        let resultOrder = this.state.order.filter(idx => idx.product.productId!= product.productId);// remaining order 
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.unitPrice));   
        this.setState({
            totalPrice: totalPrice,
            order : resultOrder
        });
 } 
    
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-9'>
                    <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                    </div>
                    <div className='col-md-3'>
                    <Calculator totalPrice={this.state.totalPrice} order={this.state.order} onDeleteOrder={this.deleteOrder}/>
                    </div>  
                    {console.log(`state: ${this.state.order}`)}
                </div>
            </div>
        );
    }
}
export default Monitor;