import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BookDataService from '../services/BookDataService'

class ChangeBookComponent extends Component{
    constructor(props){
        super(props)
        this.state= {
            book:[]
        }
        this.refresh = this.refresh.bind(this)
        this.change = this.change.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
        this.updateBook = this.updateBook.bind(this)
        this.updateTo = this.updateTo.bind(this)
    }
    componentDidMount(){
        this.refresh();
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

deleteBook(id){
    BookDataService.removeBook(id)
    .then( response => {
        this.setState({message: `Removing Book from list`})
        })
    
}
updateTo(id, name, genre, author, publisher, rent, buy, rprice, bprice){
this.props.history.push(`/UpdateBook/${id}/${name}/${genre}/${author}/${publisher}/${rent}/${buy}/${rprice}/${bprice}`)
}


refresh(){
    BookDataService.retrieveAllBook()
    .then(response => {
        this.setState({
            book: response.data,
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
updateBook(){
    let book = {
        id: this.state.id,
        url: this.state.url,
        name: this.state.name,
        genre: this.state.genre,
        author: this.state.author,
        publisher: this.state.publisher,
        format: this.state.format,
        rent: this.state.rent,
        buy: this.state.buy,
        Rprice: this.state.Rprice,
        Bprice: this.state.Bprice

    }
        BookDataService(book)
    
}


    render(){
        return(
            <div>
                <h1>Delete or Change Book Status</h1>
                     <form>
            <table id="dvd">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>genre</th>
                        <th>author</th>
                        <th>publisher</th>
                        <th>rent</th>
                        <th>buy</th>
                        <th>Rent Price</th>
                        <th>Buy Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.book.map(
                        book=>
                        <tr key = {book.id}>
                <td >{book.id} </td>
                {/* onChange={this.change} contentEditable="true" */}
                <td>{book.url}</td>
                <td > {book.name}  </td>
                <td >{book.genre}</td>
                <td >{book.author}</td>
                <td >{book.publisher}</td>
                <td ><input name="rent" type="text" value={book.rent} ></input></td>
                <td ><input name="buy"type="text" value={book.buy} ></input></td>
               <td >{book.rprice}</td>
               <td >{book.bprice}</td>
               <button onClick ={()=> this.updateTo(book.id, book.name, book.genre, book.author, book.publisher,  book.rent, book.buy, book.rprice, book.bprice)} >Update</button>
               <button onClick = {()=> this.deleteBook(book.id)}>Erase </button>
               
                        </tr>
                    )
                    }
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
export default ChangeBookComponent;