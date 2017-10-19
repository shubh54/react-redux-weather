import React, {Component} from "react";
import { connect } from "react-redux";
import Chart from "../components/chart"

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        
        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart color="red" data={temps} unit="K"/>
                </td>
                <td>
                    <Chart color="blue" data={pressure} unit="hPa"/>
                </td>
                <td>
                    <Chart color="orange" data={humidity} unit="%"/>
                </td>                
            </tr>
        )
    }
    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps ({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);