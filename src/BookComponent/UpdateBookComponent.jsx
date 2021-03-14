import React, { Component } from 'react'
import BookDataService from '../services/BookDataService'
import { Formik, Form, Field } from 'formik'

class UpdateBookComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            url:'',
            name: this.props.match.params.name,
            genre: this.props.match.params.genre,
            author: this.props.match.params.author,
            publisher: this.props.match.params.publisher,
            rent: this.props.match.params.rent,
            buy: this.props.match.params.buy,
            rprice: this.props.match.params.rprice,
            bprice: this.props.match.params.bprice,
            
        }
        this.update = this.update.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    update(values){
        let book = {
            id: values.id,
            url: values.url,
            name: values.name,
            genre: values.genre,
            author: values.author,
            publisher: values.publisher,
            rent: values.rent,
            buy: values.buy,
            rprice: values.rprice,
            bprice: values.bprice
    
        }
        BookDataService.updateBook(book).then(()=> this.props.history.push('/ChangeBookList'))
    }
    render(){
        let {id, url, name, genre, author, publisher, rent, buy, rprice, bprice}= this.state
        return(
<div>
        <div>
            <div>
            <h2>Update values </h2>
            </div>
<Formik
initialValues={{id, url, name, genre, author, publisher, rent, buy, rprice, bprice}}
onSubmit={this.update}
enableReinitialize={true}
>
{
    (props) => (
        <Form>
            <fieldset>
                <label>Id</label>
                <Field type="text" name="id" disabled />
            </fieldset>

            <fieldset>
                <label>picture link</label>
                <Field type="text" name="url"  />
            </fieldset>

            <fieldset>
                <label>name</label>
                <Field type="text" name="name"  />
            </fieldset>
            
            <fieldset>
                <label>genre</label>
                <Field type="text" name="genre" />
            </fieldset>
            
            <fieldset>
                <label>author</label>
                <Field type="text" name="author"  />
            </fieldset>

            <fieldset>
                <label>publisher</label>
                <Field type="text" name="publisher"  />
            </fieldset>

            

            <fieldset>
                <label>rent</label>
                <Field type="text" name="rent"  />
            </fieldset>

            <fieldset>
                <label>buy</label>
                <Field type="text" name="buy"  />
            </fieldset>

            <fieldset>
                <label>renting price</label>
                <Field type="text" name="rprice" />
            </fieldset>

            <fieldset>
                <label>buying price</label>
                <Field type="text" name="bprice" />
            </fieldset>
            <button type="submit"> Update</button>
        </Form>
    )
}
</Formik>

       
        </div>
        </div>
        )
    }
}
export default UpdateBookComponent;




