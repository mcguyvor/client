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
                    <Field 
                        key={idx.name} 
                        id ={idx.id}
                        label={idx.label} 
                        name={idx.name} 
                        type={idx.text} 
                        required={idx.required} 
                        component={FormField}  
                         />
                </div>
            )
        })
    }
    render(){
        const {onProductSubmit} = this.props;
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    <div>{this.renderField(productFormField)}</div>
                    <div>
                    <button className='btn btn-block btn-info title 'type='submit' name='action'>
                        Save
                    </button>
                    </div>
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
function mapStatetoProps({products}){
    if(products && products.id){
        return {initialValue : products}
    }else{
        return{};
    }
}
ProductForm = reduxForm({validate, form:'productForm'})(ProductForm);
export default connect(mapStatetoProps)(ProductForm);