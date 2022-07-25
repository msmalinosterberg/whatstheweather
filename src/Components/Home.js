import Weather from "./Weather";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1> What's the weather like? </h1>
        <div>
          <Button className="homeButton" type="text">
            <Link to={"/weather"}>Weather</Link>
          </Button>
          <button className="homeButton">Pollution</button>
        </div>
      </div>
    </div>
  );
}
