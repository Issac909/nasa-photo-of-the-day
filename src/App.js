import React, { useState, useEffect} from "react";
import "./App.css";
import MarsPhotos from "./components/NasaPhotos";
import logo from "../assets/logo.png"

function App() {

  return (
    <div className="App">
      <img className = "logo" src = {logo}/>
      <h1>Nasa Photo of the Day</h1>
      <div className = "container">
          <MarsPhotos />
      </div>
    </div>
  );
}

export default App;
