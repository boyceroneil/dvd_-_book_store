import axios from 'axios';

class DvdDataServices{

    retrieveAllDvd(){
        return axios.get(`http://localhost:8080/receiveAllDvd`)
    }

    retrieveSpecificDirector(director){
        return axios.get(`http://localhost:8080/receiveDvdDirector/${director}`)
    }

    retrieveSpecificGenre(genre){
        return axios.get(`http://localhost:8080/receiveDvdGenre/${genre}`)
    }

    retrieveSpecificStar(star){
        return axios.get(`http://localhost:8080/receiveDvdStar/${star}`)
    }

    registerDvd(dvd) {
        return axios.post(`http://localhost:8080/registerDvd/`, dvd)
    }

    updateDvd(dvd){
        return axios.put(`http://localhost:8080/updateDvd/${dvd}`)
    }

    removeDvd(id){
        return axios.delete(`http://localhost:8080/deleteDvd/${id}`)
    }
}
export default new DvdDataServices();