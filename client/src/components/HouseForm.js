import React, {Component} from 'react'
import {Button, Icon, NavItem, Navbar, Row, Input, Modal} from 'react-materialize'

class CreatHouseForm extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      title: '', 
      photos: '',
      bed: '', 
      bath: '', 
      address:'', 
      description: '', 
    }
  }

  updateField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  onFormSubmit(event){
    event.preventDefault()
    
    console.log("this is event ", event.target.value)
    this.props.createHouse(this.state)
    this.setState({
      title: "", 
      photos: '',
      bed: '', 
      bath: '', 
      address:'', 
      description: '', 
    })
  }


  render(){
    return (
      <div className='createForm houseForm'>
        <h2>edit House Here!</h2>
      <Row>
        <form onSubmit={event => this.onFormSubmit(event)}>
        <input onChange={ e => { this.updateField(e, 'title') } } type="text" placeholder="Title"/>
        <input onChange={ e => { this.updateField(e, 'photos') } } type="text" placeholder="Photos"/>
        <input onChange={ e => { this.updateField(e, 'bed') } } type="text" placeholder="Bed"/>
        <input onChange={ e => { this.updateField(e, 'bath') } } type="text" placeholder="bath"/>
        <input onChange={ e => { this.updateField(e, 'address') } } type="text" placeholder="address"/>
        <input onChange={ e => { this.updateField(e, 'description') } } type="text" placeholder="description"/>

        <button type='submit'>Save Changes</button>
        </form>
      </Row>

      </div>
    )
  }
}

export default CreatHouseForm