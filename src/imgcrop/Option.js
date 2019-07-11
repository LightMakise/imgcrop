import React from 'react';
import './Option.css'

class Option extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      showDel: false
    }
  }
  delImg() {
    this.props.delImg()
    this.setState({
      showDel: false
    })
  }
  save() {
    this.props.save()
  }
  loadingImgFinish() {
    this.setState({
      showDel: true
    })
  }
  selectFile() {
    this.props.selectFile()
  }
  render() { 
    return (
      <div className="option">
        {this.state.showDel?null:<div className="button" onClick={this.selectFile.bind(this)}>选择一张图片(或者拖拽到上方)</div>}
        {this.state.showDel?<div className="button save" onClick={this.save.bind(this)}>保存</div>:null}
        {this.state.showDel?<div className="button del" onClick={this.delImg.bind(this)}>清除</div>:null}
      </div>
    )
  }
}
export default Option