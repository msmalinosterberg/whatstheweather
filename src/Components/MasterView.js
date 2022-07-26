import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Weather from "./Weather";
import Pollution from "./Pollution";

export default function MasterView() {
  return (
    <>
      <Routes>
        <Route path="/pollution" element={<Pollution />} />{" "}
        <Route path="/weather" element={<Weather />} />{" "}
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </>
  );
}
