import React, { Component } from 'react';
import Calculator from'./Calculator';
import ProductList from '../product/ProductList'
import axios from 'axios';
class Monitor extends Component{
    constructor(props){
        super(props);
        this.state={
            totalPrice : 0,
            order : [],
            confirm : false,
            message : ''
        };
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder= this.deleteOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.comfirmOrder = this.comfirmOrder.bind(this);

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
            totalPrice : totalPrices, confirm : false 
        });
    }
 deleteOrder(product){
        console.log(`product : ${product.product}`);
        let findOrder = this.state.order.find(idx=> idx.product.productId == product.productId);
        console.log(`findOrder ${findOrder}`);
        let resultOrder = this.state.order.filter(idx => idx.product.productId!= product.productId);// remaining order 
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));   
        console.log('total price', parseInt(findOrder.product.unitPrice),findOrder.quantity);
        this.setState({
            totalPrice: totalPrice,
            order : resultOrder,
            confirm:false
        });
 }
 cancelOrder(){
     this.setState({
         totalPrice : 0,
         order : [],
         confirm : false
     });   
 } 
 comfirmOrder(){
     if(this.state.order.length>0){
    axios.post(process.env.REACT_APP_API_URL+'/orders',{
        orderDate : new Date(),
        totalPrice :this.state.totalPrice,
        order : this.state.order
    }).then(res=>{
        this.setState({
            totalPrice : 0,
            order : [],
            confirm:true,
            message : ' saved order', 
        });   
    })
    setInterval(() => {
        this.setState({
            confirm:false
        })
    }, 2000);
    console.log('confirm order', this.state.order)
} else{
    this.setState({
        totalPrice : 0,
        order : [],
        confirm:true,
        message : ' Please order something in your cart before confirm', 
    }); 
    setInterval(() => {
        this.setState({
            confirm:false
        })
    }, 2000);
}
 }
    
    render(){
        return(
            <div className='container-fluid'>
                {this.state.confirm &&
                    <div className='alert alert-secondary title text-right mt-2 mb-2 ' role='alert'>    
                    {this.state.message}
                    </div>
                }
                <div className='row'>
                    <div className='col-md-9'>
                    <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                    </div>
                    <div className='col-md-3'>
                    <Calculator totalPrice={this.state.totalPrice} order={this.state.order} onDeleteOrder={this.deleteOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.comfirmOrder}/>
                    </div>  
                    {console.log(`state: ${this.state.order}`)}
                </div>
            </div>
        );
    }
}
export default Monitor;