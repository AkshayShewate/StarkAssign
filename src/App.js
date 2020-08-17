import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./store";
import SubmitButton from "./components/SubmitButton";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>EKART</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <SubmitButton/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;





















// import React from 'react';
// import { Router } from 'react-router-dom';

// import './App.css';
// import Routes from './routes/routes'
// import history from './services/history'


// export default class App extends React.Component{
//   constructor(props){
//     super(props);
//   }
// render(){
//   return (
    
//     <Router history={history}>
//        <Routes />
//     </Router>

//   );
// }
// }