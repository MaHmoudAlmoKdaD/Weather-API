import React, { Component } from "react";
import '../App.css'

import WeatherItem from "./WeatherItem";
class WeatherComingHours extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      // <div className="weather-coming-hours">
          <WeatherItem id={this.props.id} time={this.props.time} temp={this.props.temp} />  
      //{/* </div> */}
    );
  }
}

export default WeatherComingHours;