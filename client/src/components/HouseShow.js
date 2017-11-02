import React, {Component} from 'react'
import "./HouseShow.css";
import {Col, Card, Row, CardTitle, CardPanel, Carousel, Icon} from 'react-materialize'


class HouseShow extends Component {








  render(){
    console.log(this.props)
    const housePhoto = this.props.house.photos ? this.props.house.photos : "http://resources.phrasemix.com/img/full/suburban-houses.jpg"
    return(



      <div data-houses-index={this.props.house.id}> 

      <link href="https://fonts.googleapis.com/css?family=Arvo|Kanit" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet"/>


          <Carousel options={{ fullWidth: true }} images={housePhoto} />

                   
       <div className="AboutBox"> 
                <div className="Title"> <span>{this.props.house.title}</span></div>
                <span className="Bathrooms">Bathrooms: {this.props.house.bathrooms}</span><Icon>insert_chart</Icon>
                <span  className="Bedrooms">Bedrooms: {this.props.house.bedrooms}</span>
                <Icon>people</Icon><span  className="Guest">Guest: 8</span>

                <div className="Description">Description: <span>{this.props.house.description}</span></div>
        </div>      
        



	










      </div>
    )
  }
}

export default HouseShow


