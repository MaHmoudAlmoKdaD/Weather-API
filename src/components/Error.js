 import React, { Component } from 'react';
 
 class Error extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="error">
                <p>{this.props.error}</p>
            </div>
        );
    }
 }
 
 export default Error;