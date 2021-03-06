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
        this.decision = this.decision.bind(this)
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
        DvdDataService.updateDvd(dvd).then(()=> this.props.history.push('/ChangeDvdList'))
    
}
decision(num){
    if(num==1){
        this.updateDvd()
    }
    else if(num==2){
        this.deleteDvd()
    }
}

    render(){
        return(
            <div>
                <h1>Delete or Change Dvd Status</h1>
                     <form>
            <table>
                <tbody>
                    {this.state.dvd.map(
                        dvd=>
                        <tr key = {dvd.id}>
                <td >{dvd.id} </td>
                <td onChange={this.change} contentEditable="true"> {dvd.name} </td>
                <td onChange={this.change} contentEditable="true">{dvd.genre}</td>
                <td onChange={this.change} contentEditable="true">{dvd.starring}</td>
                <td onChange={this.change} contentEditable="true">{dvd.director}</td>
                <td onChange={this.change} contentEditable="true">{dvd.format}</td>
                <td onChange={this.change} contentEditable="true"><textarea value={dvd.rent} onChange={this.change}></textarea></td>
                <td onChange={this.change} contentEditable="true"><textarea value={dvd.buy} onChange={this.change}></textarea></td>
               <td onChange={this.change} contentEditable="true"><textarea value={dvd.rprice} onChange={this.change}></textarea></td>
               <td onChange={this.change} contentEditable="true"><textarea value={dvd.bprice} onChange={this.change}></textarea></td>
               <button onClick ={()=>this.updateDvd(dvd.id)} >Update</button>
               <button className= "button3" onClick = {()=>this.deleteDvd(dvd.id)}>Erase </button>
                        </tr>
                    )}
                
             </tbody>
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