import React, { Component } from 'react';
import Header from'../component/Header';
import Footer from'../component/Footer';
import Monitor from'../component/monitor/Monitor';
import axios from 'axios';
import About from './About'



class Home extends Component{
  constructor(props){
    super(props);
    this.state={
        products: []
        
    }
  }
  //fetch api
    async componentDidMount(){
     // fetch("http://localhost:3000/products",{method: "GET"}).then(res => res.json()).then(res=>{this.setState({products: res})});
       const products =  await axios.get('http://localhost:3000/products');
      this.setState({
        products : products.data
      });
      console.log(`from product.data `,products.data);
      console.log(this.state);
    

  }
  render(){
    
    return(
      <div className="Home">
        <Header/>
        <Monitor products={this.state.products}/>
        <Footer owner="Mac" Email="noppawatchotiwan@gmail.com"/>
      </div>
    );
  }
}
export default Home;
