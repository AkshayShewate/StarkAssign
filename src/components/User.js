'use strict';
import React from 'react'
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Dropdown from 'react-dropdown';
import '../App.css'



class User extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                address1:'',
                address2:'',
                countries : [],
                states : [],
                cities : [],
                selectedCountry : '--Choose Country--',
                selectedState : '--Choose State--'
            };
        }
      
        componentDidMount() {
            this.setState({
                countries : [
                    { name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
                    { name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
                    { name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
                    { name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
                    { name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
                ]
            });
        }
      
        changeCountry=(event)=> {
            this.setState({selectedCountry: event.target.value});
            this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
        }
    
        changeState=(event)=> {
            this.setState({selectedState: event.target.value});
            const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
            this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
        }
        handleAdd1Change = (event) => {
             this.setState({address1: event.target.value})
        }
        
        handleAdd2Change = (event) => {
             this.setState({address2: event.target.value})
        }
        
         handleSubmit = (event) => {
                this.setState({selectedState: event.target.value});
                this.props.history.push('/cart');
        }
        
        render() {

            const { userDATA } = this.props;

            return (
                <div id="container">
                   <div>
                   <input type="text" placeholder="Address1"  value={this.state.address1} onChange={this.handleAdd1Change}/> 
                   <input type="text" placeholder="Address2"  value={this.state.address2} onChange={this.handleAdd2Change} />
                    </div>
                    <div>
                        <label>Country</label>
                        <select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                            <option>--Choose Country--</option>
                            {this.state.countries.map((e, key) => {
                                return <option key={key}>{e.name}</option>;
                            })}
                        </select>
                    </div>
    
                    <div>
                        <label>State</label>
                        <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                            <option>--Choose State--</option>
                            {this.state.states.map((e, key) => {
                                return <option key={key}>{e.name}</option>;
                            })}
                        </select>
                    </div>
                    
                    <div>
                        <label>City</label>
                        <select placeholder="City">
                            <option>--Choose City--</option>
                            {this.state.cities.map((e, key) => {
                                return <option key={key}>{e}</option>;
                            })}
                        </select>
                    </div>
                    <div>        
                 <button type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={this.handleSubmit}>Submit</button>
                </div>
                </div>
            )
        }
    }

export default User