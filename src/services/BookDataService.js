import axios from 'axios';

class BookDataServices{

    retrieveAllBook(){
        return axios.get(`http://localhost:8080/receiveAllBook`)
    }

    registerBook(book) {
        return axios.post(`http://localhost:8080/registerBook/`, book)
    }

    updateBook(book){
        return axios.put(`http://localhost:8080/updateBook/`, book)
    }

    removeBook(id){
        return axios.delete(`http://localhost:8080/deleteBook/${id}`)
    }
}
export default new BookDataServices();