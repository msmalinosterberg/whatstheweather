import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Pollution() {
  const [data, setData] = useState({});
  const [lat, setLat] = useState("");

  const navigate = useNavigate();

  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=50&appid=183d218b925add2d7a08f0db03161a01`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLat("");
    }
  };
  return (
    <div className="pollution">
      <div className="search">
        <input
          value={lat}
          onChange={(event) => setLat(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p> {data.coord.lat}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <button className="gobackbtn" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default Pollution;
