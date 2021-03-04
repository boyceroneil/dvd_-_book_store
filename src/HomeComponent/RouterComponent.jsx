import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './CheckoutComponent'
import Welcome from './WelcomeComponent'
import AllDvd from '../DvdComponents/AllDvdComponent'
import AddDvd from '../DvdComponents/AddDvdComponent'
import ChangeDvd from '../DvdComponents/ChangeDvdComponent'
import RemoveDvd from '../DvdComponents/RemoveDvdComponent'
import DvdDirector from '../DvdComponents/DvdDirectorComponent'
import DvdGenre from '../DvdComponents/DvdGenreComponent'
import DvdStar from '../DvdComponents/DvdStarComponent'
import HeaderComponent from './HeaderComponent';

class RouterComponent extends Component {
    render(){
        return(
            <Router>
                <HeaderComponent />
                <Switch>
                    <Route exact path="/"><Welcome/></Route>
                    <Route path="/DvdList" exact component = {AllDvd}></Route>
                    <Route path="/"></Route>
                </Switch>
                
            </Router>
        )
    }
}