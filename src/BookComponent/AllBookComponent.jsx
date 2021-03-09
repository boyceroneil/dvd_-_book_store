import React, { Component } from 'react'
import BookDataService from '../services/BookDataService'
import {Link} from 'react-router-dom';

class AllBookComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            book: []
        }
        this.refreshList = this.refreshList.bind(this)
    }
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){
        BookDataService.retrieveAllBook()
        .then(response => {
            this.setState({
                book: response.data,
            })
        })
    }
    render(){
        return(
            <div>
            <h1>Book Collection</h1>
            <table id="dvd">
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>name</th>
                        <th>genre</th>
                        <th>author</th>
                        <th>publisher</th>
                        <th>rentable</th>
                        <th>buyable</th>
                        <th>renting price</th>
                        <th>buying price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.book.map(
                        book =>
                        <tr key ={book.id}>
                            <td>{book.name}</td>
                            <td>{book.genre}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td ><input name="rent" type="text" value={book.rent} onChange={this.change} contentEditable="false"></input></td>
                <td ><input name="buy"type="text" value={book.buy} onChange={this.change} contentEditable="false"></input></td>
                            <td>{book.rprice}</td>
                            <td>{book.bprice}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        )
    }
}
export default AllBookComponent;