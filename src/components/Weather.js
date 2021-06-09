import React, { Component } from 'react';
import Search from "./Search";
import CurrentWeather from "./CurrentWeather"
import WeatherComingHours from "./WeatherComingHours"
import Error from '../components/Error'
import axios from 'axios'
import watherLoading from '../img/weather-loading.gif'
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name : '',
          data : '',
          forecast : '',
          loading: '',
          loadingForecast: '',
          error : null,
        };
        this.hourlyForecastComponents = []
        this.keyAPI = 'e85f957ce88c8f96bdb799773b6beee2'
        this.showCurrentWeather = this.showCurrentWeather.bind(this);
        this.showDataWeatherComingHours = this.showDataWeatherComingHours.bind(this)
        this.handleError = this.handleError.bind(this);
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.name != this.state.name ){
            this.fetchDataCurrentWeather()
            this.fetchDataWeatherComingHours()
        }
        
    }
    
    handleInputChange = value => {
        this.setState({ name: value });
    }

    handleError = () =>{
        this.setState({ 
            error: <Error error="This Isn't City Make Sure You Wrote the Name correct!"/>
        })
    }

    async fetchDataCurrentWeather(){
        let URL    = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&appid=${this.keyAPI}`
        this.setState({ loading: true })
        await axios.get(URL)
            .then(result => {
                this.setState({data: result, loading: false})
            }).catch(e => {
                console.log('error')
                this.setState({ loading: '' })
                this.handleError()
            })
    }
    async fetchDataWeatherComingHours(){
        let URL    = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.name}&cnt=8&units=metric&appid=${this.keyAPI}`
        this.setState({ loadingForecast: true })       
        await axios.get(URL)
            .then(result => {
                this.setState({forecast: result, loadingForecast: false})
                console.log(this.state.forecast)
                
            }).catch(e => {
                console.log('error')
                this.setState({ loadingForecast: '' })
                this.handleError()
            })
        
    }
    showCurrentWeather = () => {
        
        return <CurrentWeather 
            key         = { this.state.data.data.weather[0].id }
            id          = { this.state.data.data.weather[0].id }
            description = { this.state.data.data.weather[0].description }
            tempC       = { this.state.data.data.main.temp }
            tempK       = { (this.state.data.data.main.temp - 273.15).toFixed(2) }
            humidity    = { this.state.data.data.main.humidity }
            pressure    = { this.state.data.data.main.pressure }
        />
    }    

    showDataWeatherComingHours = (datas) => {
        this.hourlyForecastComponents = []
        for (let i = 0; i < 7; i++) {
            this.hourlyForecastComponents.push(
                <WeatherComingHours 
                    key  = { i }
                    id   = { datas[i].weather[0].id }
                    time = { datas[i].dt_txt }
                    temp = { datas[i].main.temp }
                />
            )

        }
        return this.hourlyForecastComponents
    }
    
    render() {
        
        return (
            <div className="app">
                <Search handleInput={this.handleInputChange} />
                {
                    this.state.loading === '' && this.state.loadingForecast === '' ? (<div>{ this.state.error }</div>)  :
                    !this.state.loading && !this.state.loadingForecast ? 
                        (<div>
                            <div> { this.showCurrentWeather() } </div>
                            <div className="weather-coming-hours"> { this.showDataWeatherComingHours(this.state.forecast.data.list)}</div>
                        </div>) : 
                        (<div className="loading-image" ><img src={watherLoading} /></div>)
                }
                {/* {this.fetchDataWeatherComingHours()} */}
            </div>
        );
    }
}

export default Weather;