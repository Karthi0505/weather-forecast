import "./css/common.css";
import "./css/App.css";
import { useState } from "react";
import apiKeys from "./apiKeys";
import ForecastSearch from "./components/ForecastSearch";
import ForecastData from "./components/ForecastData";

function App() {

  const [cityName, setCityName] = useState("");
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState([]);

  
  function getForecast(e) {
    e.preventDefault();
    fetch(`${apiKeys.base}forecast?q=${cityName}&cnt=5&units=metric&appid=${apiKeys.key}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(data => { 
        setForecast(data.list);
        console.log(forecast);
        setError("");
      })
      .catch(err => {
        setCityName("");
        setForecast("");
        setError({message: "Not Found", cityName})
      });
  }

  return (
    <div className="App">
      <div className="container">

        <h1 className="text-c">5-Day Weather Forecast</h1>

        {/* ForecastSearch Component */}
        <ForecastSearch getForecastEvent={getForecast} setCityNameEvent={setCityName} cityNameProps={cityName} />

        <div className="text-c">
          <p>{cityName}</p>
          <p className="error-text">{error.message} {error.cityName}</p>
        </div>
       
                
        {forecast.length > 0 &&
          // forecastData Component
          <ForecastData forecastProps={forecast} />
        } 
      </div>
    </div>
  );
}

export default App;