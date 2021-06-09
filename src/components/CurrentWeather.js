import React, { Component } from "react";
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


class CurrentWeather extends Component {
    constructor(props){
        super(props)
        this.state = {
             
        }
        this.imageID = this.props.id
    }

    render() {
        return (
        <div className="current-weather">
            <div className="wrapper-current-weather">
                <img className="image mt-2" src={
                    this.imageID < 300 ? storm :
                    this.imageID >= 300 && this.imageID <= 499 ? drizzle :
                    this.imageID >= 500 && this.imageID <= 599 ? rain :
                    this.imageID >= 600 && this.imageID <= 699 ? snow :
                    this.imageID >= 700 && this.imageID <= 799 ? fog :
                    this.imageID === 800 ? clear :
                    this.imageID === 801 ? partlycloudy :
                    this.imageID > 801 && this.imageID <= 805 ? mostlycloudy :(<div></div>)
                } alt="icon of weather" />
                <p className="weather">{this.props.description}</p>
                <div className="info-current-weather">
                    <p className="temperature mt-2 bold">
                        <span className="s_50px">Temperature</span> <span>{this.props.tempK} &deg; to { this.props.tempC}&#8451;</span>
                    </p>
                    <div>
                        <p className="temperature mt-2 ">
                        <small className="bold">humidity</small> <span className="spacing"><small>{this.props.humidity}%</small></span>
                        <small className="bold">pressure</small><span className="spacing"><small>{this.props.pressure}</small></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default CurrentWeather;
