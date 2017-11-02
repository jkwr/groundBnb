import React, {Component} from 'react'
// import $ from 'jquery'
import {Col, Card, Row, CardTitle, CardPanel} from 'react-materialize'


class House extends Component {








  render(){
    console.log(this.props)
    const housePhoto = this.props.house.photos ? this.props.house.photos : "http://resources.phrasemix.com/img/full/suburban-houses.jpg"
    const houseLink = `houses/${this.props.house._id}`;
    console.log(houseLink)
    return(
      <div data-houses-index={this.props.house._id} > 
			<Col s={6}>

		      <a href={houseLink}>

            <Card header={<CardTitle image={housePhoto} >{this.props.house.title}</CardTitle>}>
              <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
            </Card>
          </a>
			</Col>



      </div>
    )
  }
}

export default House

/*header={<CardTitle image={housePhoto} >{this.props.house.title}</CardTitle>}>*/