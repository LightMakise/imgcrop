import React from 'react';
// import logo from './logo.svg';
import './index.css';
import Imgcrop from '../../component/imgcrop/Imgcrop.jsx';
function Index() {
  return (
    <div className="imgcrop-page">
      <canvas id="result">浏览器不支持canvas</canvas>
      <Imgcrop></Imgcrop>
    </div>
  );
}
export default Index;
