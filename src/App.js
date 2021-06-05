
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Login from './Login';

import Navbar from './Navbar';
import Product from './Product';
import Store from './Store';
import Slider from './Slider';
import Productdesc from './Productdesc';
const App = ()=> {
 
return (
   <Router>
       <div className="app">
           <Switch>
               <Route path='/checkout'>
                   <h1>Checkout</h1>
               </Route>
               <Route path='/login'>
                    <h1>Login</h1>
               </Route>
               <Route path='/register'>
                    <h1>Register</h1>
               </Route>
               <Route path="/productdesc">
                   <Navbar/>
                   <Productdesc/>
               </Route>
               <Route path='/'>
                   <Navbar/>
                   <Store/>
                   <Product/>
               </Route>
           </Switch>
       </div>
   </Router>  
)
};
export default App;

