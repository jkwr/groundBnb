import React, {Component} from 'react'
import HouseModel from '../models/House'
import Houses from '../components/Houses'
import CreateHouseForm from '../components/CreateHouseForm'


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

createHouse(house) {
  HouseModel.create(house).then((res) => {
      console.log(res)
      let houses = this.state.houses
      let newHouses = houses.push(res.data)
      this.setState({newHouses})
  })
}
deleteHouse(house) {
    HouseModel.delete(house).then((res) => {
        let houses = this.state.houses.filter(function(house) {
            return house._id !== res.data._id
        });
        this.setState({houses})
    })
}
updateHouse(houseBody) {
    var houseId = this.state.editingHouseId
    function isUpdatedHouse(house) {
        return house._id === houseId;
    }
    HouseModel.update(houseId, houseBody).then((res) => {
        let houses = this.state.houses
        houses.find(isUpdatedHouse).body = houseBody
        this.setState({houses: houses, editingHouseId: null, editing: null})
    })
}
editHouse(house) {
    this.setState({editingHouseId: house._id})
}









  render(){

    return (
      <div className='housesContainer'>
        <h2>This is the houses container</h2>
        <Houses
          houses={this.state.houses}
          editingHouseId={this.state.editingHouseId}
          onEditHouse={this.editHouse.bind(this)}
          onDeleteHouse={this.deleteHouse.bind(this)}
          onUpdateHouse={this.updateHouse.bind(this)} />
          <CreateHouseForm createHouse={this.createHouse.bind(this)}/>
      </div>
    )
  }
}

export default HousesContainer