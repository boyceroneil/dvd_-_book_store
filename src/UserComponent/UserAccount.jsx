import { Alert } from 'bootstrap'
import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import UserDataServices from '../service/UserDataServices'

class UserAccount extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:''
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
        this.create = this.create.bind(this)
    }
    change(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submit(name,password){
        if(UserDataServices.retrieveAccount(name,password) === true){
            this.props.history.push('/Main')
        }
        else{
            alert("Incorrect username and or password")
            console.log("Incorrect username and or password")
        }
    }
    create(){
        let account ={
            id: this.state.id,
            name: this.state.name,
            password: this.state.password
        }
        UserDataServices.createAccount(account).then(this.props.history.push('/Main'))
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
                        <td><button button className= "button3" onClick ={this.submit}>submit</button></td>
                        <td><button className= "button4" onClick ={this.create}>Create Account</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default UserAccount;