import './App.css';
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import WeatherWidget from './components/Weather/WeatherWidget'
import Clock from './components/Clock'

function App() {
  

  return (
    <div className="App">
      <WeatherWidget/>
      <Clock/>
    </div>
  );
}

export default App;
