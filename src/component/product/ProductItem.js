import React, { Component } from 'react';
class ProductItem extends Component{
    constructor(props){
        super(props);
       this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onAddOrder();
    }
    
    render(){
        return(
            <div className='col-md-3 col-sm-6 mb-3'>
                <img className='img-fluid img-thumbnail' src={this.props.thumbnail}/>
                <h5 className='mt-3'>{this.props.productName}</h5>
                <p className='title text-right mr-2'>{this.props.unitePrice} THB</p>
                <button className='btn btn-block btn-secondary title' onClick={()=> this.props.onAddOrder(this.props.product)} value={this.props.unitePrice}>Buy</button>
            </div>
        );

    }
}
export default ProductItem;