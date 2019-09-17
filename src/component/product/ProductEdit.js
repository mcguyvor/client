import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ProductForm from '../../component/product/ProductForm';
import {connect } from 'react-redux';
import {productCreate,productUpdate,productFetch} from '../../actions/index'

class ProductEdit extends Component{
    componentDidMount(){
        if(this.props.match.params.id){
            this.props.productFetch(this.props.match.params.id);
        }
    }
    render(){
        const {match, formValues, products,productCreate,productUpdate} = this.props;
        
;        return(
            <div>
                <Header/>
                    <div className='container col-md-5'>
                        {match.path.indexOf('add')>0 && (
                            <div>
                                <h2>Add</h2>
                                {
                                    products.saved &&(
                                        <div className='alert alert-secondary title' role='alert'>
                                            {products.message}
                                            {console.log('products',products)}
                                        </div>
                                    )
                                }
                                <ProductForm onProductSubmit ={()=>productCreate(formValues)}/>
                            </div>
                        )}

                        {match.path.indexOf('edit')>0 && products && products.id &&(
                            <div>
                                <h2>Edit</h2>
                                {
                                    products.saved &&(
                                        <div className='alert alert-secondary title' role='alert'>
                                            {products.message}
                                            {console.log('products',products)}
                                        </div>
                                    )
                                }
                                <ProductForm onProductSubmit={()=>productUpdate(products.id,formValues)}/>
                            </div>
                        )}
                    </div>
                <Footer Email='noppawatchotiwan@gmail.com'/>
            </div>
        );
    }
}
function mapStatetoProps({form,products}){
    return {
      formValues:  form.productForm ? form.productForm.values : null,
        products
    };
}
export default connect(mapStatetoProps,{productFetch,productCreate,productUpdate})(ProductEdit);