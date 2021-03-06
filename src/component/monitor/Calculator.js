import React, { Component } from 'react';
class Calculator extends Component{
    showOrder(order){
        if(order.length===0){
          return  <li className='text-right'>Empty order</li>
        }else{
          return  order.map(idx=>{
               return ( 
               <li className='text-right text-success title'>
                    {idx.product.productName} x {idx.quantity} = {parseInt(idx.product.unitPrice) * idx.quantity}
                    <button className='btn btn-light btn-sm ml-1 ' onClick={()=>this.props.onDeleteOrder(idx.product)} >X</button>
                    {console.log(order.length)}
               </li>
                    )
            });
            
        }
    }
    
    render(){
        return(
            <div>
                <h1 className='text-right'>{this.props.totalPrice}</h1>
                <hr/>
                <ul className='list-unstyle'>
                   {this.showOrder(this.props.order)}

                </ul>
                <hr/>
                <button className='btn btn-block btn-danger title' onClick={this.props.onConfirmOrder}>Confirm</button>
                <button className='btn btn-block btn-secondary title'onClick={this.props.onCancelOrder} >Cancel</button>
            </div>
        );
    }
}
export default Calculator;