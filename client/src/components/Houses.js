import React, {Component} from 'react'
import House from './House'

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
      <div className="houses">
        {houses}
      </div>
    )
  }
}

export default Houses