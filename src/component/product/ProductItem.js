import React, { Component } from 'react';
class ProductItem extends Component{
    constructor(props){
        super(props);
       this.handleClick=this.handleClick.bind(this);
       this.handleDelete = this.handleDelete.bind(this);
    }
    handleClick(){
        this.props.onAddOrder();
    }
    handleDelete(e){
        this.props.onDeleteProduct(e.target.value);
        console.log('value',e.target.value)
    }
    render(){
        return(
            <div className='col-md-3 col-sm-6 mb-3'>
                <img className='img-fluid img-thumbnail' src={this.props.thumbnail}/>
                <h5 className='mt-3'>{this.props.productName}</h5>
                <p className='title text-right mr-2'>{this.props.unitePrice} THB</p>
                {this.props.onAddOrder &&
                <button className='btn btn-block btn-secondary title' onClick={()=> this.props.onAddOrder(this.props.product)} value={this.props.unitePrice}>Buy</button>
                }
                {(this.props.onEditProduct || this.props.onDeleteProduct) && 
                <button className='btn btn-info title col-5 '>Edit</button>
                }
                {this.props.onDeleteProduct &&
                <button className='btn  btn-danger title col-5 float-right' value={this.props.product.productId} onClick={this.handleDelete}>Delete</button>
                }
            </div>
        );

    }
}
export default ProductItem;