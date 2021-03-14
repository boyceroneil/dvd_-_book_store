import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DvdDataService from '../services/DvdDataService'

class AddDvdComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
            id: this.props.match.params.id,
            url:'',
            name: '',
            genre: '',
            starring: '',
            director: '',
            format: '',
            rent: '',
            buy: '',
            rprice: '',
            bprice: '',
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
            url: this.state.url,
            name: this.state.name,
            genre: this.state.genre,
            starring: this.state.starring,
            director: this.state.director,
            format: this.state.format,
            rent: this.state.rent,
            buy: this.state.buy,
            rprice: this.state.rprice,
            bprice: this.state.bprice
    
        }
        DvdDataService.registerDvd(dvd).then(this.props.history.push('/DonateDvd'))
    }

    render(){
        return(
            <div>
                        <h1>Donate Dvds</h1>                       

                <form onSubmit ={this.addDvd}>
               <div>
                   <div>
                       <label>Id:</label>
                       <input type ="text" value={this.state.id} disabled></input>
                       </div>

                       <div>
                       <label>picture:</label>
                       <input type ="text" name="url" onChange={this.change}></input>
                       </div>
                       
                       <div>
                       <label>name:</label>
                       <input type ="text" name="name" onChange={this.change}></input>
                       </div>

                       <div>
                       <label>genre:</label>
                       <input type ="text" name="genre" onChange={this.change}></input>
                       </div>
                       
                       <div>
                       <label>starring:</label>
                       <input type ="text" name="starring" onChange={this.change}></input>
                       </div>

                       <div>
                       <label>director:</label>
                       <input type ="text" name="director" onChange={this.change}></input>
                       </div>

                       <div>
                       <label>format:</label>
                       <input type ="text" name="format" onChange={this.change}></input>
                       </div>
                       
                       <div>
                       <label>rentable:</label>
                       <input type ="text" name="rent"  onChange={this.change}placeholder="false"></input>
                       </div>

                       <div>
                       <label>buyable:</label>
                       <input type ="text"name="buy" onChange={this.change} placeholder="true"></input>
                       </div>

                       <div>
                       <label>renting price:</label>
                       <input type ="text" name="rprice" onChange={this.change}></input>
                       </div>

                       <div>
                       <label>buying price:</label>
                       <input type ="text" name="bprice" onChange={this.change} ></input>
                       </div>

                       </div> 
                       <div>
                           <button type ="submit">Submit</button>
                       </div>
                           </form>
            </div>
        )
    }
}
export default AddDvdComponent;