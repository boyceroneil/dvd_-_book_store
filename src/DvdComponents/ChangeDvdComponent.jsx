import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DvdDataService from '../services/DvdDataService'

class ChangeDvdComponent extends Component{
    constructor(){
        super(props)
        this.state= {
            id: this.props.match.params.id,
            name: this.props.match.params.name,
            genre: this.props.match.params.genre,
            starring: this.props.match.params.starring,
            director: this.props.match.params.director,
            format: this.props.match.params.format,
            rent: this.props.match.params.rent,
            buy: this.props.match.params.buy,
            Rprice: this.props.match.params.Rprice,
            Bprice: this.props.match.params.Bprice,

            dvd:[]
        }
        this.change = this.change.bind(this)
        this.deleteDvd = this.deleteDvd.bind(this)
        this.updateDvd = this.updateDvd.bind(this)
    }
    componentDidMount(){
        this.refreshListFlashcard();
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

deleteDvd(id){
    DvdDataService.deleteDvd(id)
    .then( response => {
        this.setState({message: `Removing Dvd from list`})
            this.refresh();
        })
    
}
refresh(){
    DvdDataService.retrieveAllDvd.then( response =>
        {
            this.setState({
                dvd: response.data
            })
        })
}
updateDvd(){
    let dvd = {
        id: this.state.id,
        name: this.state.name,
        genre: this.state.genre,
        starring: this.state.starring,
        director: this.state.director,
        format: this.state.format,
        rent: this.state.rent,
        buy: this.state.buy,
        Rprice: this.state.Rprice,
        Bprice: this.state.Bprice

    }
        DvdDataService.updateDvd(dvd). then(()=> this.props.history.push(''))
    
}

    render(){
        return(
            <div>
                <h1>Delete or Change Dvd Status</h1>
                <li><Link className="nav-link" to="/Main">MainPage</Link></li>
                <li><Link className="nav-link" to="/DvdList">Dvd List</Link></li>
                <li><Link className="nav-link" to="/DonateDvd">Donate Dvd</Link></li>
                <li><Link className="nav-link" to="/ChangeDvdList">Change DvdList</Link></li>
                <li><Link className="nav-link" to="/SearchDvd">Search Dvds</Link></li>
                <li><Link className="nav-link" to="/Checkout">Checkout</Link></li>
                        
            <table>
                <tr>
                <td><textarea value={this.state.name} onChange={this.change}></textarea> </td>
                <td><textarea value={this.state.genre} onChange={this.change}></textarea></td>
                <td><textarea value={this.state.starring} onChange={this.change}></textarea></td>
                <td><textarea value={this.state.director} onChange={this.change}></textarea></td>
                <td><textarea value={this.state.format} onChange={this.change}></textarea></td>
                <td><textarea value={this.state.rent} onChange={this.change}></textarea></td>
                <td><textarea value={this.state.buy} onChange={this.change}></textarea></td>
               <td><textarea value={this.state.Rprice} onChange={this.change}></textarea></td>
               <td><textarea value={this.state.Bprice} onChange={this.change}></textarea></td>
               <button className= "button3" onClick ={this.updateDvd} >Update</button>
               <button className= "button3" onClick = {this.deleteDvd}>Erase </button> 
             </tr>
            </table>

            <table>
            <tr>
            
            </tr>
            </table>
            </div>
        )
    }

}
export default ChangeDvdComponent;