 import React, { Component } from 'react';
 import {reduxForm,Field} from 'redux-form';
 import {connect} from 'react-redux'
 import FormField from '../common/FormField'
 import {productFormField} from './formFields';
class ProductForm extends Component{
    renderField(formFields){
        return formFields.map(idx=>{
            return(
                <div>
                    <Field key={idx.name} id ={idx.id}label={idx.label} name={idx.name} type={idx.text} required={idx.required} component={FormField}  placeholder='name' />
                </div>
            )
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onProductSubmit)}>
                    {this.renderField(productFormField)}
                    <button className='btn btn-block btn-info title 'type='submit'>
                        Save
                    </button>
                </form>
               
            </div>
        );
    }
}
function validate(values){
    console.log(values);
    const error ={};
    productFormField.forEach(({name,required}) => {
        if(!values[name] && required){
            error[name]= 'Enter description '
        }
    });
    return error;
}
ProductForm = reduxForm({validate, form:'productForm'})(ProductForm);
function mapStatetoProps({products}){
    if(products && products.id){
    return {initialValue : products}
    }else{
        return{};
    }
}
export default connect(mapStatetoProps)(ProductForm);