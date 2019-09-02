import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './container/Home'
import About from './container/About'
import Order from './container/order/Order'
import Product from './container/product/Product'




class App extends Component{
  renderRouter(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/order' component={Order}/>
        <Route exact path='/product' component={Product}/>

      </Switch>
    )
  }
  render(){
    
    return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}
export default App;
