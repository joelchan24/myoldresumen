import React, { Component } from 'react'
import './languajes.css'
export class languajes extends Component {
    render() {
        return (
            <div className="languajes">
                <h3>Languajes</h3>
                <h2>Joel</h2>
                <div className="row">
                     <Icons/>
                   
                </div>
            </div>
        )
    }
}

const IconsObj=[
    {
        id:1,
        icon:"fab fa-js-square",
        languaje:"Javascript",
        description:"experience using Javascript with Node JS and Jquery"

    },
    {
        id:2,
        icon:"fab fa-js-square",
        languaje:"Python",
        description:"with python have made some API and several exercises to improve my skills"
    },
    {
        id:3,
        icon:"fab fa-js-square",
        languaje:"C#",
        description:"with this languaje I've worked with its 3 platforms "
    },
    {
        id:4,
        icon:"fab fa-js-square",
        languaje:"React JS",
        description:"with react I've used to make web pages like this and recovery data from API"
    }
]

class Icons extends Component{
    render(){
        return (
            IconsObj.map((data)=>{
             return   <div key={data.id}>
                        <span> <i class={data.icon}></i>
                        </span>
                        <h4>{data.languaje}</h4>
            <p>{data.description}</p>
                 </div>
            })
           
        )
    }
}

export default languajes
