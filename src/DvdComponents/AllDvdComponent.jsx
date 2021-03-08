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
                dvd: response.data,
            })
        })
    }
    render(){
        return(
            <div>
            <h1>Dvd Collection</h1>
            <table>
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>name</th>
                        <th>genre</th>
                        <th>starring</th>
                        <th>director</th>
                        <th>format</th>
                        <th>rentable</th>
                        <th>buyable</th>
                        <th>renting price</th>
                        <th>buying price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dvd.map(
                        dvd =>
                        <tr key ={dvd.id}>
                            <td>{dvd.name}</td>
                            <td>{dvd.genre}</td>
                            <td>{dvd.starring}</td>
                            <td>{dvd.director}</td>
                            <td>{dvd.format}</td>
                            <td ><input name="rent" type="text" value={dvd.rent} onChange={this.change} contentEditable="false"></input></td>
                <td ><input name="buy"type="text" value={dvd.buy} onChange={this.change} contentEditable="false"></input></td>
                            <td>{dvd.rprice}</td>
                            <td>{dvd.bprice}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        )
    }
}
export default AllDvdComponent;