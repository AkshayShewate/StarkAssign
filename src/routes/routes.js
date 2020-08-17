import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../components/Products'
import Cart from '../components/Cart'
import User from '../components/User'

export default class Routes extends React.Component {
    render(){
    return(
        <Switch>
            <Route exact path="/"  component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/user" component={User} />           
         </Switch>
         
    )
   }
}