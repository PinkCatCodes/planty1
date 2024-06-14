import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import PH from "./components/parameters/pH/pH";
import WaterTemp from "./components/parameters/waterTemp/WaterTemp";
import Home from "./components/home/Home";
import WaterLevelContainer from "./components/parameters/waterLevel/WaterLevelContainer";
import VPDContainer from "./components/parameters/VPD/VPDContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/waterTemp" element={<WaterTemp />} />
            <Route path="/pH" element={<PH />} />
            <Route path="/waterLevel" element={<WaterLevelContainer />} />
            <Route path="/VPD" element={<VPDContainer />} />
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
