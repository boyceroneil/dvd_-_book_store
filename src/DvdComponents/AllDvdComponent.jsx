import React, { Component } from 'react'
import DvdDataService from '../services/DvdDataService'
import {Link} from 'react-router-dom';

class AllDvdComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            dvd: [],
            search:'',
            filterData: []
            
        }
        this.refreshList = this.refreshList.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.getData = this.getData.bind(this)
    }
        handleInput(event){
            const search = event.target.value;
            this.setState(prevState => {
                const filterData = prevState.dvd.filter(element => {
                    return element.name.toLowerCase().includes(search.toLowerCase()) ||
                     element.genre.toLowerCase().includes(search.toLowerCase()) ||
                     element.starring.toLowerCase().includes(search.toLowerCase())||
                     element.director.toLowerCase().includes(search.toLowerCase())||
                     element.format.toLowerCase().includes(search.toLowerCase());
                });
                return{
                    search,
                    filterData
                };
            });
    }

    getData(){
        fetch(`http://localhost:3000/DvdList`).then
        (response => response.json()).then(dvd => {
            const{search} = this.state;
            const filterData = dvd.filter(element => {
                return element.name.toLowerCase().includes(search.toLowerCase())||
                 element.genre.toLowerCase().includes(search.toLowerCase())||
                 element.starring.toLowerCase().includes(search.toLowerCase())||
                 element.director.toLowerCase().includes(search.toLowerCase())||
                 element.format.toLowerCase().includes(search.toLowerCase())
            });
            this.setState({
                dvd,
                filterData
            });
        });    
    }


componentWillMount(){
    this.getData();
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
            
            <form>
                <input placeholder="search by name, star, director, or genre"
                value = {this.state.search}
                onChange={this.handleInput}/>
            </form>
            <div> 
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
                {this.state.filterData.map(
                    i=> 
                    <tr key={i.id}>
                <td><picture><source media="()" srcset={i.url}></source></picture></td>
                <td>{i.name}</td>        
                <td>{i.genre}</td>
                <td>{i.starring}</td>
                <td>{i.director}</td>
                <td>{i.format}</td>
                <td ><input name="rent" type="text" value={i.rent} onChange={this.change} contentEditable="false"></input></td>
                <td ><input name="buy"type="text" value={i.buy} onChange={this.change} contentEditable="false"></input></td>
                <td>{i.rprice}</td>
                <td>{i.bprice}</td>
                </tr>)}
                </tbody>
                </table></div>





            <table id="dvd">
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>picture</th>
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
                            <td><img src={dvd.url} width="200" height="200"/> </td>
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