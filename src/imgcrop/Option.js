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
  loadingImgFinish() {
    this.setState({
      showDel: true
    })
  }
  render() {
    return (
      <div className="option">
        {this.state.showDel?<button onClick={this.delImg.bind(this)}>清除图片</button>:null}
      </div>
    )
  }
}
export default Option