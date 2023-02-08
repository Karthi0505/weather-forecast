const ForecastSearch = ({getForecastEvent, setCityNameEvent, cityNameProps}) => {
  return (
    <div className="forecastSearch-section d-flex justify-content-c pt-3">
      <form onSubmit={getForecastEvent}>
        <label htmlFor="city">Enter City</label>
        <div>
          <input
            className="input-text"
            id="city"
            type="text"
            onChange={(e) => setCityNameEvent(e.target.value)}
            value={cityNameProps}
          />
          <button type="submit" className="btn-blue">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForecastSearch;
