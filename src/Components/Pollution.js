import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Pollution() {
  const [data, setData] = useState({});
  const [location, setNewLocation] = useState("");

  const navigate = useNavigate();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&cnt=14&units=metric&appid=183d218b925add2d7a08f0db03161a01`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setNewLocation("");
    }
  };
  return (
    <div className="weather">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setNewLocation(event.target.value)}
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
            <div className="temp">
              <p>14days forcast</p>
              <p className="bold">{data.weather.list}°C</p>
              {/* {data.sys ? <p className="bold">{data.sys.list.temp}°C</p> : null} */}
            </div>
            <div className="Sunrise">
              <p>
                Sunrise:{" "}
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
              </p>
            </div>
            <div className="Sunset">
              <p>
                Sunset:{" "}
                {new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN")}
              </p>
            </div>

            <div className="temp">
              <p>Min temp:</p>
              {data.main ? (
                <p className="bold">{data.main.temp_min.toFixed()}°C</p>
              ) : null}
            </div>

            <div className="temp">
              <p>Max temp:</p>

              {data.main ? (
                <p className="bold">{data.main.temp_max.toFixed()}°C</p>
              ) : null}
            </div>

            {/* <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div> */}
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
            </div>
          </div>
        )}
        {data.name !== undefined && (
          <>
            <p>More on the location</p>
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
          </>
        )}
      </div>
      <button className="gobackbtn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default Pollution;
