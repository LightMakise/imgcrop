import React from 'react';
import './Imgcrop.css';
import Droparea from './Droparea'
import Option from './Option'
// import { createHashHistory } from 'history'
// createHashHistory().push()
class Imgcrop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  delImg() {
    this.droparea.delImg()
  }
  save() {
    this.droparea.save()
  }
  loadingImgFinish() {
    this.option.loadingImgFinish()
  }
  selectFile() {
    this.droparea.selectFile()
  }
  render(e) {
    return (
      <div className="imgcrop">
        <Droparea size={10*1024*1024} ref={r=>{ this.droparea = r }} loadingImgFinish={this.loadingImgFinish.bind(this)}></Droparea>
        <Option selectFile={this.selectFile.bind(this)} delImg={this.delImg.bind(this)} save={this.save.bind(this)} ref={r=>{ this.option = r }}></Option>
      </div>
    )
  }
}
export default Imgcrop