import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './CheckoutComponent'
import Welcome from './WelcomeComponent'
import AllDvd from '../DvdComponents/AllDvdComponent'
import AddDvd from '../DvdComponents/AddDvdComponent'
import ChangeDvd from '../DvdComponents/ChangeDvdComponent'
import UpdateDvd from '../DvdComponents/UpdateDvdComponent'
import SearchDvd from '../DvdComponents/DvdCategorySearch'
import HeaderComponent from './HeaderComponent';
import AllBook from '../BookComponent/AllBookComponent'
import AddBook from '../BookComponent/AddBookComponent'
import ChangeBook from '../BookComponent/ChangeBookComponent'
import UpdateBook from '../BookComponent/UpdateBookComponent'
import SearchBook from '../BookComponent/BookSearch'
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
                    <Route path="/UpdateDvd/:id/:name/:genre/:starring/:director/:format/:rent/:buy/:rprice/:bprice" component ={UpdateDvd}></Route>
                    <Route path="/SearchDvd" component ={SearchDvd}></Route>
                    <Route exact path="/Main"><Welcome/></Route>
                    <Route path="/BookList"  component = {AllBook}></Route>
                    <Route path="/ChangeBookList" component ={ChangeBook}></Route>
                    <Route path="/DonateBook" component ={AddBook}></Route>
                    <Route path="/UpdateBook/:id/:name/:genre/:author/:publisher/:rent/:buy/:rprice/:bprice" component ={UpdateBook}></Route>
                    <Route path ="/Checkout" component = {Checkout}></Route>

                </Switch>
                
            </Router>
        )
    }
}
export default RouterComponent;