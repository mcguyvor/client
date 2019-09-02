import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import axios from 'axios';
import ProductList from '../../component/product/ProductList';

class Product extends Component {
    constructor (props) {
        super(props)
        this.state={
            products : []
        };
        this.deleteProduct=this.deleteProduct.bind(this);
    }
    async componentDidMount(){
        const products = await axios.get('http://localhost:3000/products');
        this.setState({
            products : products.data
        });
    }
    async deleteProduct(productId){
        console.log(productId);
        await axios.delete('http://localhost:3000/products/'+productId ); //product id 
         const response =  await axios.get('http://localhost:3000/products/');
        this.setState({
            products : response.data
        })
        
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
                                <button className='btn  btn-success title float-right'>Add</button>
                            </div>
                        </div>   
                        <ProductList products={this.state.products} onDeleteProduct ={this.deleteProduct}/>
                    </div>
                <Footer Email='noppawatchotiwan@gmail.com'/>
            </div>
        );
    }
}
export default Product;