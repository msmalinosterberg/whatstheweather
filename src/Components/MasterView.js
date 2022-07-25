import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Weather from "./Weather";

export default function MasterView() {
  return (
    <>
      <Routes>
        <Route path="/weather" element={<Weather />} />{" "}
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </>
  );
}
