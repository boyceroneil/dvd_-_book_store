import React, {Component} from 'react'
import UserDataServices from '../services/UserDataServices'

class UserModify extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            password: '',
            newPassword:''
        }
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
        this.delete = this.delete.bind(this)
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
    delete(){

    }

    render(){
        return(
            <div>
                <h1>Modify your account</h1>
                <table>
                    <tr>
                    <td><h3>username:</h3></td>
                        <td><input type = "text" name = "name" placeholder = "username" onChange={this.change}/></td>
                    </tr>
                    <tr>
                        <td><h3>password:</h3></td>
                        <td><input type = "password" name = "password" placeholder = "password" onChange={this.change}/></td>
                    </tr>
                    <tr>
                        <td><h3>new password:</h3></td>
                        <td><input type = "newPassword" name = "new password" placeholder = "new password" onChange={this.change}/></td>
                    </tr>
                    <tr>
                        <td><button button className= "button3" onClick ={this.submit}>Update</button></td>
                        <td><button className= "button4" onClick ={this.delete}>delete</button></td>
                     
                    </tr>
                </table>
            </div>
        )
    }
}
export default UserModify;