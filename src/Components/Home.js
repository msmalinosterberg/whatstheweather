import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1> What's the weather like? </h1>
        <div>
          <Button className="homeButton" type="text">
            <Link to={"/weather"} style={{ color: "black" }}>
              Right now
            </Link>
          </Button>
          {/* <Button className="homeButton" type="text">
            <Link to={"/pollution"}> In two weeks</Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
