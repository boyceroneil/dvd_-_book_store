import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">MainPage</Link></li>
                        <li><Link className="nav-link" to="/DvdList">Dvd List</Link></li>
                        <li><Link className="nav-link" to="/DonateDvd">Donate Dvd</Link></li>
                        <li><Link className="nav-link" to="/ChangeDvdList">Change DvdList</Link></li>
                        <li><Link className="nav-link" to="/SearchDvd">Search Dvds</Link></li>
                        <li><Link className="nav-link" to="/Checkout">Checkout</Link></li>
                        
                    </ul>
                </nav>
            </header>
        )
    }
}
export default HeaderComponent; 