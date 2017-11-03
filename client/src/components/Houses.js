import React, {Component} from 'react'
import House from './House'
import Map from './template/Map';
import {Col,Row} from 'react-materialize'
import  "./Houses.css";

class Houses extends Component {
  render(){
    let houses = this.props.houses.map( (house) => {
      return (
        <House
          key={house._id}
          house={house}

          editingHouseId={this.props.editingHouseId}
          onEditHouse={this.props.onEditHouse}
          onDeleteHouse={this.props.onDeleteHouse}
          onUpdateHouse={this.props.onUpdateHouse}



          />
      )
    })
    return(
    <Row >
      
      <Col s={8} className="houses">
         <div>
            {houses}
         </div>
      </Col>
      <Col s={4} className="MapControl">
          <Map 
            center= {{lat:37.7576793, lng: -122.5076404}}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />} />
      </Col>
    </Row>
    )
  }
}

export default Houses