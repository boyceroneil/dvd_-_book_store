import React, { Component } from 'react'
import DvdDataService from '../services/DvdDataService'
import {Link} from 'react-router-dom';

class AllDvdComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            dvd: []
        }
        this.refreshList = this.refreshList.bind(this)
    }
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){
        DvdDataService.retrieveAllDvd()
        .then(response => {
            this.setState({
                dvd: response.data
            })
        })
    }
    render(){
        return(
            <div>
            <h1>Dvd Collection</h1>
            <li><Link className="nav-link" to="/Main">MainPage</Link></li>
            <li><Link className="nav-link" to="/DvdList">Dvd List</Link></li>
            <li><Link className="nav-link" to="/DonateDvd">Donate Dvd</Link></li>
            <li><Link className="nav-link" to="/ChangeDvdList">Change DvdList</Link></li>
            <li><Link className="nav-link" to="/SearchDvd">Search Dvds</Link></li>
            <li><Link className="nav-link" to="/Checkout">Checkout</Link></li>
            <table>
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th></th>
                        <th>name</th>
                        <th>genre</th>
                        <th>starring</th>
                        <th>director</th>
                        <th>format</th>
                        <th>rentable</th>
                        <th>renting price</th>
                        <th>buyable</th>
                        <th>buying price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dvd.map(
                        dvd =>
                        <tr key ={dvd.id}>
                            <td></td>
                            <td>{dvd.name}</td>
                            <td>{dvd.genre}</td>
                            <td>{dvd.starring}</td>
                            <td>{dvd.director}</td>
                            <td>{dvd.format}</td>
                            <td>{dvd.rent}</td>
                            <td>{dvd.Rprice}</td>
                            <td>{dvd.buy}</td>
                            <td>{dvd.Bprice}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        )
    }
}
export default AllDvdComponent;