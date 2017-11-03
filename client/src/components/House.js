import React, {Component} from 'react'
// import $ from 'jquery'
import {Col, Card, Row, CardTitle, CardPanel, Button} from 'react-materialize'
import HouseForm from '../components/HouseForm'
import "./House.css"
class House extends Component {








  render(){
    if (this.props.editingHouseId === this.props.house._id){
        //if we see this console.log, we know that Todo-props are being
        // passed into TodosContainer, and being set as the
        // TodosContainer-state, and then trickling down as props to
        // the Todo component. 
        console.log(`${this.props.house.body} is being edited`);
        return (
          <HouseForm
            autoFocus={true}
            onUpdateTodo={this.props.onUpdateHouse}
            buttonName="Update House!"/>
        )
      }





    console.log(this.props)
    const housePhoto = this.props.house.photos ? this.props.house.photos : "http://resources.phrasemix.com/img/full/suburban-houses.jpg"
    const houseLink = `houses/${this.props.house._id}`;
    console.log(houseLink)
    return(
    <div data-houses-index={this.props.house._id} > 
			<Col s={6}>
		      <a href={houseLink}>
            <Card header={<CardTitle image={housePhoto} >{this.props.house.title}</CardTitle>}>
              <span>Bathrooms: {this.props.house.bathrooms}</span> <span>Bedrooms: {this.props.house.bedrooms}</span>
            </Card>
          </a>


          <span onClick={() => this.props.onEditHouse(this.props.house)}>
            {this.props.house.body}

          </span>
          <span
            className='deleteButton'
            onClick={ () => this.props.onDeleteHouse(this.props.house._id) }>
              <Button>Delete House</Button>
          </span>
			</Col>
    </div>
    )
  }
}

export default House
 /*<Button>Edit</Button>*/

