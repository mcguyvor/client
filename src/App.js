import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './container/Home'
import About from './container/About'
import Order from './container/order/Order'




class App extends Component{
  renderRouter(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/order' component={Order}/>

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
