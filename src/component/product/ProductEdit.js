import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ProductForm from '../../component/product/ProductForm';
class ProductEdit extends Component{
    render(){
        const {match} = this.props;
        console.log(this.props);
        console.log(match);
;        return(
            <div>
                <Header/>
                    <div className='container col-md-5'>
                    <ProductForm/>
                    </div>
                <Footer Email='noppawatchotiwan@gmail.com'/>
            </div>
        );
    }
}
export default ProductEdit;