import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import DvdDataService from '../services/DvdDataService'

class DvdCategorySearch extends Component{
    constructor(props){
        super(props)
        this.state={
            search: '',
            dvd:[],
            newDvd: []
        }
        this.change = this.change.bind(this)
        this.refresh = this.refresh.bind(this)
        this.clickDirector = this.clickDirector.bind(this)
        this.clickGenre = this.clickGenre.bind(this)
        this.clickStar = this.clickStar.bind(this)
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    componentDidMount(){
        this.refresh();
        
    }
    refresh(){
        DvdDataService.retrieveAllDvd()
        .then(response => {
            this.setState({
                dvd: response.data,
                // id: response.data.id,
                // name: response.data.name,
                // genre: response.data.genre,
                // starring: response.data.starring,
                // director: response.data.director,
                // format: response.data.format,
                // rent: response.data.rent,
                // buy: response.data.buy,
                // Rprice: response.data.Rprice,
                // Bprice: response.data.Bprice,
            })
        })     
    }

    clickDirector(object){
        DvdDataService.retrieveSpecificDirector(object)
        .then(response => {
            this.setState({
                dvd: response.data
            })
        })
        
    }
    clickGenre(object){
        DvdDataService.retrieveSpecificGenre(object)
        .then(response => {
            this.setState({
                dvd: response.data
            })
        })
    }
    clickStar(object){
        DvdDataService.retrieveSpecificStar(object)
        .then(response => {
            this.setState({
                dvd: response.data
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Search for your interest</h1>
                <form>
            <input type="text" onChange={this.change} name="search"></input>
            <button type="submit" onClick={this.clickDirector}>filter Director</button>
            <button type="submit" onClick={this.clickGenre}>filter Genre</button>
            <button type="submit" onClick={this.clickStar}>filter Star</button>
            </form>
            <div>
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
            </div>
            
        )
    }
}
export default DvdCategorySearch;