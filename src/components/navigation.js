import React, { Component } from 'react'
import './navigation.css';
export class navigation extends Component {
    render() {
        const sections=['Home','About','Languages','Portfolio','CV','Contact'];
        const navLinks=sections.map((section)=>
           { return <li><a href={'#'+section}>{section}</a></li>}
        );
        return (
            <nav>
               <h2 className="logo" >{this.props.logoTitle}</h2>
               <ul>
                   {
                       navLinks
                   }
                  
               </ul>
            </nav>
        )
    }
}

export default navigation
