import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BookDataService from '../services/BookDataService'

class AddBookComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
            id: this.props.match.params.id,
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
        this.addBook =this.addBook.bind(this)
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addBook(){
        let book = {
            id: this.state.id,
            name: this.state.name,
            genre: this.state.genre,
            author: this.state.author,
            publisher: this.state.publisher,
            rent: this.state.rent,
            buy: this.state.buy,
            rprice: this.state.rprice,
            bprice: this.state.bprice
    
        }
        BookDataService.updateBook(book).then(this.props.history.push('/DonateBook'))
    }

    render(){
        return(
            <div>
                        <h1>Donate Book</h1>                       

                <form onSubmit ={this.addBook}>
               <div>
                   <div>
                       <label>Id:</label>
                       <input type ="text" value={this.state.id} disabled></input>
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
                       <label>author:</label>
                       <input type ="text" name="author" onChange={this.change}></input>
                       </div>

                       <div>
                       <label>publisher:</label>
                       <input type ="text" name="publisher" onChange={this.change}></input>
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
export default AddBookComponent;