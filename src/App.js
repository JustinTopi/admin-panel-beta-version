import React from "react";
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home";
import Customer from "./components/Customer/Customer";
import Map from "./components/Map/Map";
import './App.scss'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="customers" element={<Customer />} />
              <Route path="map" element={<Map />} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
