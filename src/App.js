import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navigation from "./Navigation";
import Routes from "./Routes";
import Footer from "./Footer";

/** Renders Navigation, Routes, and Footer*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
