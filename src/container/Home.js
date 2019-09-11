import React, { Component } from 'react';
import Header from'../component/Header';
import Footer from'../component/Footer';
import Monitor from'../component/monitor/Monitor';
import About from './About'
import {connect} from 'react-redux';
import {productFetch } from '../actions/index';



class Home extends Component{
  constructor(props){
    super(props);
  }
     componentDidMount(){
      this.props.productFetch();
  }
  render(){
    
    return(
      <div className="Home">
        <Header/>
        <Monitor products={this.props.products}/>
        {console.log('console',this.props.products)}
        <Footer owner="Mac" Email="noppawatchotiwan@gmail.com"/>
      </div>
    );
  }
}
function mapStatetoProps(state){
  console.log(state)
  return{products : state.products }
};
export default connect(mapStatetoProps,{productFetch})(Home);
