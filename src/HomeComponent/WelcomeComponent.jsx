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
               <h2>If you want to donate, browse or buy books and or Dvds then you can too </h2>

               <h3><a href="http://localhost/login1.php">Sign in Here</a></h3>
               <h3> Create an account <Link to= "/Signin">here</Link></h3>
            </div>
           </div> 
        )
    }
}
export default WelcomeComponent;