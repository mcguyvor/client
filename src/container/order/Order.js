 import React, { Component } from 'react';
 import Header from '../../component/Header'
 import Footer from '../../component/Footer'
 import {connect} from 'react-redux';
 import {orderFetch,orderDelete} from '../../actions/index'
import axios from 'axios'
 class Order extends Component{
     constructor(props){
         super(props);
         
         this.deleteOrder = this.deleteOrder.bind(this);
         this.showOrder = this.showOrder.bind(this);
         this.handleClick=this.handleClick.bind(this);

     }
     componentDidMount(){
         this.props.orderFetch();
         
     }
     handleClick(e){
         this.deleteOrder(e.target.value);// send value which is list id
         
     }
     deleteOrder(id){
        this.props.orderDelete(id);
     }
     showOrder(){
        return this.props.order && this.props.order.map(idx => {
            const date = new Date(idx.orderDate);
            
            return(
                
                <div key={idx.id} className='col-md-3 mt-4'>
                    <div className='card text-white bg-success md-3 shadow-lg'>
                        <div className='card-body'>
                            <hr/>
                            <div className='d-flex justify-content-between'>
                                <h5>Date {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                                <p className='text-right'>
                                    <button className='btn btn-danger  title' onClick={this.handleClick} value={idx.id}>X</button>
                                </p>
                            
                            </div>
                            {console.log(`date : ${date.toLocaleDateString}`)}
                            <ul>
                                {idx.order && idx.order.map(idx=>{
                                    return(
                                        <li key = {idx.id}>
                                            {idx.product.productName} x {idx.quantity} = {parseInt(idx.product.unitPrice) * idx.quantity}
                                        </li>
                                    );
                                }) }
                            </ul> 
                            <p className="title">Total : {idx.totalPrice}</p>
                        </div>
                    </div>
                </div>
            
            )
        });
     }
     render(){
         return(
             <div>
                 <Header/>
                    <div className='container-fluid'>
                        <h1 className='title'>Cart</h1>
                        <div className='row'>
                            {this.showOrder()}
                        </div>
                        
                    </div>
                 <Footer Email='noppawatchotiwan@gmail.com'/>
             </div>
         );
     }
 }
 function mapStateToProps({order}){
     return {order};
 }
 export default connect(mapStateToProps,{orderFetch,orderDelete})(Order);