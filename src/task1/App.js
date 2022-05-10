import React from 'react';
import logo from '../logo.svg';
import './App.css';
import ImageCarousel from "./ImageCarousel";

function App() {
  return (
      <div data-testid="home-container" style={{padding: "40px"}}>
        <ImageCarousel />
      </div>
  );
}

export default App;
