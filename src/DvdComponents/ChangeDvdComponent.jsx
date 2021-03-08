import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DvdDataService from '../services/DvdDataService'

class ChangeDvdComponent extends Component{
    constructor(props){
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
            newDvd:[],
            dvd:[]
        }
        this.refresh = this.refresh.bind(this)
        this.change = this.change.bind(this)
        this.deleteDvd = this.deleteDvd.bind(this)
        this.updateDvd = this.updateDvd.bind(this)
    }
    componentDidMount(){
        this.refresh();
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

deleteDvd(id, name, genre, starring, director, format, rent, buy, Rprice, Bprice){
    DvdDataService.removeDvd(id)
    .then( response => {
        this.setState({message: `Removing Dvd from list`})
        })
    
}
refresh(){
    DvdDataService.retrieveAllDvd()
    .then(response => {
        this.setState({
            dvd: response.data,
            id: response.data.id,
            name: response.data.name,
            genre: response.data.genre,
            starring: response.data.starring,
            director: response.data.director,
            format: response.data.format,
            rent: response.data.rent,
            buy: response.data.buy,
            Rprice: response.data.Rprice,
            Bprice: response.data.Bprice,
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
        DvdDataService.updateDvd(dvd)
    
}


    render(){
        return(
            <div>
                <h1>Delete or Change Dvd Status</h1>
                     <form>
            <table>
                    {this.state.dvd.map(
                        dvd=>
                        <tr key = {dvd.id}>
                <td >{dvd.id} </td>
                <td onChange={this.change} contentEditable="true"> {dvd.name}  </td>
                <td onChange={this.change} contentEditable="true">{dvd.genre}</td>
                <td onChange={this.change} contentEditable="true">{this.state.starring}</td>
                <td onChange={this.change} contentEditable="true">{this.state.director}</td>
                <td onChange={this.change} contentEditable="true">{dvd.format}</td>
                <td ><input name="rent" type="text" value={dvd.rent} onChange={this.change} contentEditable="true"></input></td>
                <td ><input name="buy"type="text" value={dvd.buy} onChange={this.change} contentEditable="true"></input></td>
               <td ><input name="Rprice" type="text" value={dvd.rprice} onChange={this.change} contentEditable="true"></input></td>
               <td ><input name="Bprice"type="text" value={dvd.bprice} onChange={this.change} ></input></td>
               <button onClick ={()=>this.updateDvd} >Update</button>
               <button onClick = {()=>this.deleteDvd(dvd.id)}>Erase </button>
               
                        </tr>
                    )}
                
            </table>
           
            </form>   
            <table>
            <tr>
               
            </tr>
            </table>
            </div>
        )
    }

}
export default ChangeDvdComponent;