import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Imgcrop from './imgcrop/imgcrop.jsx';
function App() {
  return (
    <div className="App">
      <canvas id="result">浏览器不支持canvas</canvas>
      <Imgcrop></Imgcrop>
    </div>
  );
}

export default App;