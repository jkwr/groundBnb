import React, {Component} from 'react'
import HouseModel from '../models/House'
import Houses from '../components/house/Houses'


class HousesContainer extends Component {
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
 

    return (
      <div className='houseContainer'>
        <h2>This is the houses container</h2>
        <Houses
          houses={this.state.houses} />
      </div>
    )
  }
}

export default HousesContainer