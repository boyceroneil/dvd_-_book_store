import React, { Component } from 'react'
import DvdDataService from '../services/DvdDataService'

class UpdateDvdComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            name: this.props.match.params.name,
            genre: this.props.match.params.genre,
            starring: this.props.match.params.starring,
            director: this.props.match.params.director,
            format: this.props.match.params.format,
            rent: this.props.match.params.rent,
            buy: this.props.match.params.buy,
            rprice: this.props.match.params.Rprice,
            bprice: this.props.match.params.Bprice,
            newDvd:[],
            dvd:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.update = this.update.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    update(){
        let dvd = {
            id: this.state.id,
            name: this.state.name,
            genre: this.state.genre,
            starring: this.state.starring,
            director: this.state.director,
            format: this.state.format,
            rent: this.state.rent,
            buy: this.state.buy,
            rprice: this.state.Rprice,
            bprice: this.state.Bprice
    
        }
        DvdDataService.updateDvd(dvd).then(()=> this.props.history.push('/ChangeDvdList'))
    }
    render(){
        return(

        
        <form onSubmit={this.update}>
            <div>
                <div>
                    <label>Id: </label>
                    <input type="text" value={this.state.id} disabled></input>
                </div>
                <div>
                    <label>name: </label>
                    <input type="text" name="name" onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>genre: </label>
                    <input type="text" name="genre"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>starring: </label>
                    <input type="text"  name="starring" onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>format: </label>
                    <input type="text" name="format"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>rent: </label>
                    <input type="text" name="rent"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>buy: </label>
                    <input type="text" name="buy"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>renting price: </label>
                    <input type="text"  name="Rprice" onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>buying price: </label>
                    <input type="text"  name="Bprice" onChange={this.handleChange}></input>
                </div>
                <div>
                    <button type="submit">Update</button>
                </div>
            </div>
        </form>
        )
    }
}
export default UpdateDvdComponent;