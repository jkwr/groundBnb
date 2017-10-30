import React, {Component} from 'react'
import HouseModel from '../models/House'
import Houses from '../components/Houses'

class HousesContainer extends Component {
	constructor(){
    super()
    this.state = {
      houses: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    let p = HouseModel.all().then( (res) => {
    	console.log("got res", res)
      this.setState ({
        houses: res.data.houses,
        house: ''
      })
    });
    p.catch(function(error) {
      console.log("got an error", error)
    })
  }

  render(){

    return (
      <div className='housesContainer'>
        <h2>This is the houses container</h2>
        <Houses
          houses={this.state.houses} />
      </div>
    )
  }
}

export default HousesContainer