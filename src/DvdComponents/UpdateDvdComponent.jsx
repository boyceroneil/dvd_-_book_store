import React, { Component } from 'react'
import DvdDataService from '../services/DvdDataService'
import { Formik, Form, Field } from 'formik'

class UpdateDvdComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: this.props.match.params.id,
            name: this.props.match.params.name,
            genre: this.props.match.params.genre,
            starring: this.props.match.params.starring,
            director: this.props.match.params.director,
            format: this.props.match.params.format,
            rent: this.props.match.params.rent,
            buy: this.props.match.params.buy,
            rprice: this.props.match.params.rprice,
            bprice: this.props.match.params.bprice,
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.update = this.update.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    update(value){
        let dvd = {
            id: this.state.id,
            name: value.name,
            genre: value.genre,
            starring: value.starring,
            director: value.director,
            format: value.format,
            rent: value.rent,
            buy: value.buy,
            rprice: value.rprice,
            bprice: value.bprice
    
        }
        DvdDataService.updateDvd(dvd).then(()=> this.props.history.push('/ChangeDvdList'))
    }
    render(){
        let {id, name, genre, starring, director, format, rent, buy, rprice, bprice}= this.state
        return(

        <div>
            <div>
            <h2>Update values </h2>
            </div>
<Formik
initialValues={[id,name,genre,starring,director,format,rent,buy,rprice,bprice]}
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
                <label>name</label>
                <Field type="text" name="name"  />
            </fieldset>
            
            <fieldset>
                <label>genre</label>
                <Field type="text" name="genre" />
            </fieldset>
            
            <fieldset>
                <label>starring</label>
                <Field type="text" name="starring"  />
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

        {/* <form onSubmit={this.update}>
            <div>
                <div>
                    <label>Id: </label>
                    <input type="text" value={this.state.id} disabled></input>
                </div>
                <div>
                    <label>name: </label>
                    <input type="text" name="name" onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>genre: </label>
                    <input type="text" name="genre"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>starring: </label>
                    <input type="text"  name="starring" onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>format: </label>
                    <input type="text" name="format"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>rent: </label>
                    <input type="text" name="rent"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>buy: </label>
                    <input type="text" name="buy"  onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>renting price: </label>
                    <input type="text"  name="Rprice" onChange={this.handleChange}></input>
                </div>
                <div>
                    <label>buying price: </label>
                    <input type="text"  name="Bprice" onChange={this.handleChange}></input>
                </div>
                <div>
                    <button type="submit">Update</button>
                </div>
            </div>
        </form> */}
        </div>
        )
    }
}
export default UpdateDvdComponent;