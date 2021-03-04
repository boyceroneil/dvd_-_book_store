import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
           <div>
               <h1>Welcome to the Book and DVD store! Browse by genre, and by name</h1>
            <div>
               <h2>If you want to donate or buy books and or Dvds then you can too </h2>
            </div>
           </div> 
        )
    }
}
export default WelcomeComponent;