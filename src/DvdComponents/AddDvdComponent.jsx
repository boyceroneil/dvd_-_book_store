import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DvdDataService from '../services/DvdDataService'

class AddDvdComponent extends Component{
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
        }
        this.change= this.change.bind(this)
        this.addDvd =this.addDvd.bind(this)
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addDvd(){
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
        DvdDataService.registerDvd(dvd).then(this.props.history.push(''))
    }

    render(){
        return(
            <div>
                        <h1>Donate Dvds</h1>
                        <li><Link className="nav-link" to="/Main">MainPage</Link></li>
                        <li><Link className="nav-link" to="/DvdList">Dvd List</Link></li>
                        <li><Link className="nav-link" to="/DonateDvd">Donate Dvd</Link></li>
                        <li><Link className="nav-link" to="/ChangeDvdList">Change DvdList</Link></li>
                        <li><Link className="nav-link" to="/SearchDvd">Search Dvds</Link></li>
                        <li><Link className="nav-link" to="/Checkout">Checkout</Link></li>
                        

                <form onSubmit ={this.addDvd}>
               <div>
                   <div>
                       <label>Id:</label>
                       <input type ="text" value={this.state.id}></input>
                       </div>

                       <div>
                       <label>name:</label>
                       <input type ="text"></input>
                       </div>

                       <div>
                       <label>genre:</label>
                       <input type ="text"></input>
                       </div>
                       
                       <div>
                       <label>starring:</label>
                       <input type ="text"></input>
                       </div>

                       <div>
                       <label>director:</label>
                       <input type ="text"></input>
                       </div>

                       <div>
                       <label>format:</label>
                       <input type ="text"></input>
                       </div>
                       
                       <div>
                       <label>rentable:</label>
                       <input type ="text"></input>
                       </div>

                       <div>
                       <label>buyable:</label>
                       <input type ="text"></input>
                       </div>

                       <div>
                       <label>renting price:</label>
                       <input type ="text"></input>
                       </div>

                       <div>
                       <label>buying price:</label>
                       <input type ="text"></input>
                       </div>

                       </div> 
                       <div>
                           <button type ="submit">Upload</button>
                       </div>
                           </form>
            </div>
        )
    }
}
export default AddDvdComponent;