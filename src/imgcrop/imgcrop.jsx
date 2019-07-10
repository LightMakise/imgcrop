import React from 'react';
import './imgcrop.css';
import Droparea from './Droparea'
import Option from './Option'
class Imgcrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  delImg() {
    this.droparea.delImg()
  }
  loadingImgFinish() {
    this.option.loadingImgFinish()
  } 
  render(e) {
    return (
      <div className="imgcrop">
        <Option delImg={this.delImg.bind(this)} ref={r=>{ this.option = r }}></Option>
        <Droparea size={10*1024*1024} ref={r=>{ this.droparea = r }} loadingImgFinish={this.loadingImgFinish.bind(this)}></Droparea>
      </div>
    )
  }
}
export default Imgcrop