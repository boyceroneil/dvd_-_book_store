import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DvdDataService from '../services/DvdDataService'
import { SearchBar } from 'react-native-elements';

class DvdCategorySearch extends component{
    constructor(){
        super(props)
        this.state={
            search: '',
            dvd:[]
        }
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    componentDidMount(props){
        this.refresh(0);
        
    }
    refresh(props){
        if(props ==1){
            
        }
    }

    clickDirector(object){
        DvdDataService.retrieveSpecificDirector(object)
        .then(response => {
            dvd: response.data,
            this.refresh(1);
        })
    }
    clickGenre(object){
        DvdDataService.retrieveSpecificGenre(object)
        .then( response => {
            dvd: response.data,
            this.refresh(2);
        })
    }
    clickStar(object){
        DvdDataService.retrieveSpecificStar(object)
        .then( resposne => {
            dvd: resposne.data,
            this.refresh(3);
        })
    }

    render(){
        return(
            <div>
                
                <form>
            <input type="text" onChange={this.change}></input>
            <button onClick={this.clickDirector()}>filter Director</button>
            <button onClick={this.clickGenre()}>filter Genre</button>
            <button onClick={this.clickStar()}>filter Star</button>
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