import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Weather from "./app_component/weather.component";
import Form from "./app_component/form.component";

//api call api.openweathermap.org/data/2.5/weather?q=London,uk

const API_KEY = "c08036d1bbf9639ff858855956a2ad1c";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
    );

    const response = await api_call.json();

    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_min: this.calCelsius(response.main.temp_min),
      temp_max: this.calCelsius(response.main.temp_max),
      description: response.weather[0].description,
      icon: this.weatherIcon.Thunderstorm
    });

    this.get_weatherIcon(this.weatherIcon, response.weather[0].id);
  };

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_weatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 621:
        this.setState({ icon: this.weatherIcon.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ icons: this.weatherIcon.Clouds });
    }
  }
  render() {
    return (
      <div className="App">
        <Form />
        <Weather
          city={this.state.city}
          country={this.state.country}
          weatherIcon={this.state.icon}
          main={this.state.main}
          celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
