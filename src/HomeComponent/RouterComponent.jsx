import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './CheckoutComponent'
import Welcome from './WelcomeComponent'
import AllDvd from '../DvdComponents/AllDvdComponent'
import AddDvd from '../DvdComponents/AddDvdComponent'
import ChangeDvd from '../DvdComponents/ChangeDvdComponent'
import RemoveDvd from '../DvdComponents/RemoveDvdComponent'
import HeaderComponent from './HeaderComponent';

class RouterComponent extends Component {
    render(){
        return(
            <Router>
                <HeaderComponent />
                <Switch>
                    <Route exact path="/Main"><Welcome/></Route>
                    <Route path="/DvdList"  component = {AllDvd}></Route>
                    <Route path="/ChangeDvdList" component ={ChangeDvd}></Route>
                    <Route path="/DonateDvd" component ={AddDvd}></Route>
                    {/* <Route path="/SearchDvd" component ={SearchList}></Route> */}
                    <Route path ="/Checkout" component = {Checkout}></Route>

                </Switch>
                
            </Router>
        )
    }
}
export default RouterComponent;