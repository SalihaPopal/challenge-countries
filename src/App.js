import './App.css';
import React from 'react';
import CountriesData from './CountriesData';
// import ToggleSwitch from "./ToggleSwitch";
import ThemeWrapper from "./ThemeWrapper";



function App() {
  return (
    <div>
    <CountriesData />
    {/* <ToggleSwitch /> */}
    <ThemeWrapper />
    </div>

  );
}

export default App;
