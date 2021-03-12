import React, { Component } from 'react'
import BookDataService from '../services/BookDataService'

class AllBookComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            book:[],
            search:'',
            filterData: []
        }
        this.handleInput = this.handleInput.bind(this)
        this.getData = this.getData.bind(this)
        this.referesh = this.refresh.bind(this)
    }
    handleInput(event){
        const search = event.target.value;
        this.setState(prevState => {
            const filterData = prevState.book.filter(element => {
                return element.name.toLowerCase().includes(search.toLowerCase()) ||
                 element.genre.toLowerCase().includes(search.toLowerCase()) ||
                 element.author.toLowerCase().includes(search.toLowerCase())||
                 element.publisher.toLowerCase().includes(search.toLowerCase());
            });
            return{
                search,
                filterData
            };
        });
}

getData(){
    fetch(`http://localhost:3000/BookList`).then
    (response => response.json()).then(book => {
        const{search} = this.state;
        const filterData = book.filter(element => {
            return element.name.toLowerCase().includes(search.toLowerCase())||
             element.genre.toLowerCase().includes(search.toLowerCase())||
             element.author.toLowerCase().includes(search.toLowerCase())||
             element.publisher.toLowerCase().includes(search.toLowerCase())
        });
        this.setState({
            book,
            filterData
        });
    });    
}


componentWillMount(){
this.getData();
}
    componentDidMount(){
        this.refresh()
    }
    refresh(){
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

            <form>
                <input placeholder=" search by name, author, publisher, or genre"
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
                        <th>author</th>
                        <th>publisher</th>
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
                <td>{i.name}</td>        
                <td>{i.genre}</td>
                <td>{i.author}</td>
                <td>{i.publisher}</td>
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