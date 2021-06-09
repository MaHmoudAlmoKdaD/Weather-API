import React, { Component } from 'react';
import  mostlycloudy  from "../img/weather-icons/mostlycloudy.svg";
import  clear  from "../img/weather-icons/clear.svg";
import  cloudy  from "../img/weather-icons/cloudy.svg";
import  drizzle  from "../img/weather-icons/drizzle.svg";
import  fog  from "../img/weather-icons/fog.svg";
import  partlycloudy  from "../img/weather-icons/partlycloudy.svg";
import  rain  from "../img/weather-icons/rain.svg";
import  snow  from "../img/weather-icons/snow.svg";
import  storm  from "../img/weather-icons/storm.svg";
import '../App.css'
class WeatherItem extends Component {
  constructor(props){
    super(props)
    this.imageID = this.props.id
  }
  render() {
    return (
      <div className="weather-item mt-4">
        <div className="item">
          <p><time dateTime="03:00">{this.props.time.substring(10, 16)}</time></p>
          <img src={
                    this.imageID < 300 ? storm :
                    this.imageID >= 300 && this.imageID <= 499 ? drizzle :
                    this.imageID >= 500 && this.imageID <= 599 ? rain :
                    this.imageID >= 600 && this.imageID <= 699 ? snow :
                    this.imageID >= 700 && this.imageID <= 799 ? fog :
                    this.imageID === 800 ? clear :
                    this.imageID === 801 ? partlycloudy :
                    this.imageID > 801 && this.imageID <= 805 ? mostlycloudy :(<div></div>)
                } alt="icon of weather" className="image-item"/>
          <p>{this.props.temp}&#8451;</p>
        </div>
      </div>
    );
  }
}
export default WeatherItem;