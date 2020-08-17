import React, { Component } from "react";
import history from '../services/history'
import { submitButton } from "../actions/productActions";



         


class SubmitButton extends Component {

    submitButton = (e) =>{
       history.push("/user")

       }
        
  render() {
 
    return (
        <div>
            <div>        
                 <button type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={(e) => submitButton()}>Next</button>
             </div>
        </div>
    )
  }
}

export default SubmitButton