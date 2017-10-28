import React, {Component} from 'react'
import House from './house'
import HouseModel from '../../models/House'

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    HouseModel.all().then( (res ) => {
      console.log("got res", res)
      this.setState ({
        houses: res.data.houses, 
        house: ''
      })
    })
  }
  render(){
    // console.log("houses is", this.props.houses)
    // let houses = this.props.houses.map( (house) => {
    //   return (
    //     <House
    //       key={house._id}
    //       house={house}/>
    //   )
    // })
    // let houses = [(
    //   <House key="12" house={ {title: "cool house", bedrooms: 4, bathrooms: 2} } />
    //   )]
    return(
      <div className="houses">
        Hello World
      </div>
    )
  }
}

export default Houses