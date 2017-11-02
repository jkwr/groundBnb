import React, {Component} from 'react'
import HouseModel from '../models/House'
import HouseShow from '../components/HouseShow'


class HouseContainer extends Component {
  constructor(){
    super()
    this.state = {
      house: {}
    }
  }


  componentWillMount(){
    let houseId= this.getCurrentHouseId.bind(this)()
    this.fetchData(houseId)
  }

  getCurrentHouseId () {
    return this.props.location.pathname.split('/')[2]
  }

  fetchData(houseId){
    // let houseId = this.getCurrentHouseId.bind(this)()
    let p = HouseModel.show(houseId).then( (res) => {
      console.log("got res", res)
      this.setState ({
        house: res.data
      })
    });
    p.catch(function(error) {
      console.log("got an error", error)
    })
  }





  
  render() {
    console.log(this.state)
    return (
      <div className="HouseContainer">
        <div className="HouseContainer-content">
          <HouseShow {...this.state } />
          
      
        </div>
      </div>
    );
  }
}

export default HouseContainer;