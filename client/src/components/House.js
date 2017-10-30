import React, {Component} from 'react'

class House extends Component {
  render(){
    return(
      <p data-houses-index={this.props.house.id}>
        <span>{this.props.house.title}</span>
      </p>
    )
  }
}

export default House