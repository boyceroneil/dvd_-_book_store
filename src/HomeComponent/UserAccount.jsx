import { Alert } from 'bootstrap'
import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import UserDataServices from '../services/UserDataServices'

class UserAccount extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:''
        }
        this.change = this.change.bind(this)
        this.create = this.create.bind(this)
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    create(){
        let account ={
            id: this.state.id,
            name: this.state.name,
            password: this.state.password
        }
        UserDataServices.createAccount(account).then(this.props.history.push('/Main'))
        alert("you've created your account")
    }
    render() {
        return(
            <div>
                <h1>Create your account or sign in to bookerD Store</h1>
                <table id = "welcomeTable">
                    <tr>
                        <td><h3>username:</h3></td>
                        <td><input type = "text" name = "name" placeholder = "username" onChange={this.change}/></td>
                    </tr>
                    <tr>
                        <td><h3>password:</h3></td>
                        <td><input type = "password" name = "password" placeholder = "password" onChange={this.change}/></td>
                    </tr>
                    <tr>
                        <td><button className= "button4" onClick ={this.create}>Subscribe</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default UserAccount;