import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CheckoutComponent extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
           <div className ='body1'>
               <h1>Thank you for being at my shop. Feel free to come back</h1>
            <div>
               <h2></h2>
            </div>
           </div> 
        )
    }
}
export default CheckoutComponent;