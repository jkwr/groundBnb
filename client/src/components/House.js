import React, {Component} from 'react'
// import $ from 'jquery'
import {Col, Card, Row, CardTitle} from 'react-materialize'


class House extends Component {

  render(){
    const housePhoto = this.props.house.photos ? this.props.house.photos : "http://resources.phrasemix.com/img/full/suburban-houses.jpg";

    return(
      <div data-houses-index={this.props.house.id}>
        <span></span>
			<Row>
				<Card className='small'
	header={<CardTitle image={housePhoto} >{this.props.house.title}</CardTitle>}>
</Card>
			</Row>



      </div>
    )
  }
}

export default House

