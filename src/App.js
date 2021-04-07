import React, { Component } from 'react'
import Header from './container/Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductList from './container/ProductList';
import ProductDetail from './container/ProductDetail';
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
           <Header/>
           <Switch>
             <Route path='/' exact component={ProductList}/>
             <Route path='/Product/:productId' component={ProductDetail}/>
             <Route>404 not found!</Route>
           </Switch>
        </Router>
      
      </div>
    )
  }
}

// this my first app