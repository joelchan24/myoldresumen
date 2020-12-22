import React, { Component } from 'react'
import backgroundImg from '../assets/backimg.jpg'

import  './header.css';

//`url(${Background})`
const mystyles={
    'backgroundImage':`url(${backgroundImg})`,
    'height':'45vh',
    'backgrondSize':'cover'
};

export class header extends Component {
   

    render() {
        return (
            <header style={mystyles}> 
                <h1>{this.props.title}</h1>
                <p>this my portfolio, Im Joel Aldair Chan Tec</p>
                <a href="#button">Find our more</a>
            </header>
        )
    }
}

export default header
