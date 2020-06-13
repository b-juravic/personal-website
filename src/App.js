import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navigation from "./Navigation";
import Routes from "./Routes";

/** Renders Navigation and Routes*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
