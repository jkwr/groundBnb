import React, {Component} from 'react'
import {Button, Icon, NavItem, Navbar, Row, Input, Modal, Col} from 'react-materialize'
import './CreateHouseForm.css'
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
      <div className='CreateForm'>
        
      <Row>
        <form onSubmit={event => this.onFormSubmit(event)}>

          <Col s={3} className="Inputs">
           <h4>Add House!</h4>
            <input onChange={ e => { this.updateField(e, 'title') } } type="text" placeholder="Title"/>
            <input onChange={ e => { this.updateField(e, 'photos') } } type="text" placeholder="Photos"/>       
            <input onChange={ e => { this.updateField(e, 'bedrooms') } } type="number" placeholder="Bed"/>
            <input onChange={ e => { this.updateField(e, 'bathrooms') } } type="number" placeholder="bath"/>
            <input onChange={ e => { this.updateField(e, 'address') } } type="text" placeholder="address"/>
            <input onChange={ e => { this.updateField(e, 'description') } } type="text" placeholder="description"/>
            <Button type='submit'>Create House!</Button>
          </Col>
     

        
        </form>
      </Row>
      




   
      </div>
    )
  }
}

export default CreatHouseForm



































/*      <div className={`TextPostNewContainer ${ this.props.visible ? '' : 'hide'}` }>
        <div className="TextPostNewContainer-content">
          <button onClick={ this.props.hide }>Close</button>
          <form onSubmit={ () => { this.props.onSubmit(this.state) } }>
            <input onChange={ e => { this.updateField(e, 'title') } } type="text" placeholder="Title"/>
            <input onChange={ e => { this.updateField(e, 'content') } } type="text" placeholder="Content"/>
            <input onChange={ e => { this.updateField(e, 'thumbnail_image_url') } } type="text" placeholder="Thumbnail Image URL"/>
            <input type="submit"/>
          </form>
        </div>
      </div>

*/





/* // <Input s={6} label="Photo" />
        // <Input placeholder="Bed" s={6} label="Bed" /> <Input s={6} label="Bath" />

        // <Input placeholder="address" label="address" s={12} />
        // <Input placeholder="description" label="description" s={12} />*/


/*
        // <form onSubmit={event => this.onFormSubmit(event)}>
        //   <input onChange={event => this.onInputChange(event)} placeholder='Write a house here ...'type='text' value={this.state.house} />
        //   <input onChange={event => this.onInputChange(event)} placeholder='House Input'type='text' value={this.state.house.title} />

        //   <button type='submit'>Create House!</button>
        // </form>
*/
