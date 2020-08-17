import React from 'react';
import { render } from 'react-dom';
import {createStore,applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import Products from './components/Products'
import User from './components/User'
import Cart from './components/Cart'
import thunkMiddleware from 'redux-thunk'

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const history = createHistory();
const store = createStore(
   combineReducers({
       reducer,
       routing: routerReducer,
    }),
applyMiddleware(thunkMiddleware, logger, routerMiddleware(history)),
);
render(
<Provider store={store}>
   <Router history={history}>
      <Switch>
         <Route exact path="/products" component={Products} />
         <Route path="/user" component={User} />
         <Route path="/cart" component={Cart} />
      </Switch>
   </Router>
</Provider>,
document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
