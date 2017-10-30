import React, {Component} from 'react'
import House from './House'

class Houses extends Component {
  render(){
    let houses = this.props.houses.map( (house) => {
      return (
        <House
          key={house._id}
          house={house}/>
      )
    })
    return(
      <div className="houses">
        {houses} console.log("yes")
      </div>
    )
  }
}

export default Houses