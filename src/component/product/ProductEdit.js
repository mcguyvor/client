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
        const {match} = this.props;
        console.log(this.props);
        console.log(match);
;        return(
            <div>
                <Header/>
                    <div className='container col-md-5'>
                        {match.path.indexOf('add')>0 && (
                            <div>
                            <h2>Add</h2>
                            <ProductForm onProductSubmit ={()=>this.props.productCreate(this.props.formValues)}/>
                            </div>
                        )}
                        {match.path.indexOf('edit')>0 &&(
                            <div>
                            <h2>Edit</h2>
                            <ProductForm onProductUpdate={()=>this.props.productUpdate(this.props.products.id,this.props.formValues)}/>
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
      formValues:  form.productForm ? form.productForm.value : null,
        products
    };
}
export default connect(mapStatetoProps,{productFetch,productCreate,productUpdate})(ProductEdit);