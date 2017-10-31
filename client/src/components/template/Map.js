import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, Marker}  from "react-google-maps";
import {Link} from 'react-router'
// AIzaSyDz6s2PWu2EXzXVwrf9zSWyM8wVIWG8vbo
import HousesContainer from "../../containers/HousesContainer"
import HouseModel from '../../models/House'
import House from '../House'

class Map extends Component{
 constructor(props) {
   super(props);
   this.state = {
     map: null, 
     houses:[]
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



  mapMoved (map) {
    console.log("MapMoved:" + JSON.stringify(this.state.map.getCenter()))
  }
  zoomChanged() {
    console.log("ZoomChanged: " + this.state.map.getZoom() )
  }
  mapLoaded(map){
    if(this.state.map != null)
      return 
    this.setState({
      map:map 
    })
  }

  render(){
  	const markers = this.props.markers || []
       let houses = this.state.houses.map( (house) => {
      return (
        <Marker
         key={house._id}
         position= {{lat: house.lat, lng: house.lng}}/>
      )
    })

    return (
    
    	 <GoogleMap
      ref= {this.mapLoaded.bind(this)}
      onDragEnd= { this.mapMoved.bind(this)}
      onZoomChanged={this.zoomChanged.bind(this)}
	    defaultZoom={10}
		  defaultCenter={this.props.center}>  
		  {/*markers.isMarkerShown && */  }
      {houses}
		  </GoogleMap> 
			
    )
  }
}

export default withGoogleMap(Map)
