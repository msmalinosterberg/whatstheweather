import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=183d218b925add2d7a08f0db03161a01`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="weather">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
            <div className="icon">
              {/* {data.weather ? (
                <p className="bold">{data.weather[0].icon} </p>
              ) : null} */}
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
            </div>
          </div>
        )}
        {data.name !== undefined && (
          <div class="historyOfCity">
            <div className="country">
              {data.sys ? <p className="bold">{data.sys.country}</p> : null}
              <p>Country</p>
            </div>
            <div className="latitude">
              {data.coord ? <p className="bold">{data.coord.lat}</p> : null}
              <p>Latitude</p>
            </div>
            <div className="longitude">
              {data.coord ? <p className="bold">{data.coord.lon}</p> : null}
              <p>Longitude</p>
            </div>
          </div>
        )}
      </div>
      <button className="gobackbtn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default Weather;
