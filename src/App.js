import React, { Component } from 'react';
import './App.css';
import Header from'./component/Header';
import Footer from'./component/Footer';
import ProductItem from'./component/product/ProductItem';
import Monitor from'./component/monitor/Monitor';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
        products:[ { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
        { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
        { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
        { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
        { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
        { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }]
    }
  }
  
  render(){
    
    return(
      <div className="App">
        <Header/>
        <Monitor products={this.state.products}/>
        <Footer owner="Mac" email="noppawatchotiwan@gmail.com"/>
      </div>
    );
  }
}
export default App;
