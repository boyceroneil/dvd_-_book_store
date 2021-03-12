import axios from 'axios';

class UserDataServices{

    retrieveAccount(name, password){
        return axios.get(`http://localhost:8080/retrieveAccount/${name}/${password}`)
    }

    createAccount(user) {
        return axios.post(`http://localhost:8080/createAccount/`, user)
    }

    updateAccount(user){
        return axios.put(`http://localhost:8080/updateAccount/`, user)
    }

    removeAccount(id){
        return axios.delete(`http://localhost:8080/deleteAccount/${id}`)
    }
}
export default new UserDataServices();