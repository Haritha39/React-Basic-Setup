import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {Input} from '../presentational/input.jsx';

class FormContainer extends Component{
    constructor(){
        super();
        this.state= {
          someTitle : "someTitle"  
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){ 
        this.setState({
            [event.target.id] : event.target.value 
        });    
    };

    render(){
        const { someTitle } = this.state;
        return (
            <form id="action-form">
                <input
                    type = "text"
                    label = "someLabel"
                    id = "someId"
                    value = "someValue"
                    onChange = {this.handleChange}                    
                />
            </form>
        );
    }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper?ReactDOM.render(<FormContainer /> , wrapper) : false;