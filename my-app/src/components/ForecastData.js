const ForecastData = ({forecastProps}) => {

    return (
        <div>
           <ul className="forecastData-section list-card">
                {forecastProps.map((a, index) => (
                    <li key={index}>
                        <div className="card-head">
                            <img
                                className="forecastIcon"
                                src={`http://openweathermap.org/img/w/${a.weather[0].icon}.png`}
                                alt={a.weather[0].icon}
                            />

                            {/* Timestamp conversion */}
                            <span>{new Date(a.dt * 1000).toDateString()}</span>
                        </div>

                        <div className="card-body">
                            <div className="celsius-clouds">
                                <span className="celsius">{Math.round(a.main.temp)}°c</span>
                                <span className="clouds">{a.weather[0].description}</span>
                            </div>

                            <div className="listView-wrapper">
                                <div>
                                    Humidity: {a.main.humidity}
                                </div>

                                <div>Temp Min: {Math.round(a.main.temp_min)}°c</div>

                                <div>Temp Max: {Math.round(a.main.temp_max)}°c</div>

                                <div>Wind Degree: {a.wind.deg}</div>

                                <div>Wind Speed: {a.wind.speed}</div>

                                <div>Pressure: {a.main.pressure}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>;


        </div>
    );
};

export default ForecastData;