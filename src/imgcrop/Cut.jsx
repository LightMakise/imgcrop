import React from 'react';
import './Cut.css';
class Cut extends React.Component {
  cutMoving = false
  stretchMoving = false
  limit = {}
  stratPosition = {
    x: 0,
    y: 0
  }
  translate = {
    x: 0,
    y: 0
  }
  style = {
    width: 50,
    height: 50,
    left: 30,
    top: 0,
  }
  constructor(props) {
    super(props)
    this.state = {
      style: this.style
    }
    document.addEventListener('mouseup', () => {
      this.cutMoving = false
      this.stretchMoving = false
    })
  }
  cutMouseDown(arg, e) {
    this.cutMoving = true
    this.stratPosition = {
      x: e.clientX - this.style.width,
      y: e.clientY - this.style.height
    }
  }
  cutMouseMove(arg, e) {
    if (this.cutMoving) {
      this.translate = {
        // x: e.clientX - this.stratPosition.x - this.style.width,
        x: e.movementX,
        // y: e.clientY - this.stratPosition.x 
        y: e.movementY
      }
      this.move()
    }
  }
  cutMouseUp(arg, e) {
    this.cutMoving = false
  }
  stretchMouseDown(arg, e) {
    this.stretchMoving = true
    e.stopPropagation()
    console.log(e);
  }
  stretchMouseMove(arg, e) {
    e.stopPropagation()
    if (this.stretchMoving) {
      console.log(e.movementX, e.movementY);
      this.stretchCutDom(e.movementX, e.movementY)
    }
  }
  stretchMouseUp(arg, e) {
    this.stretchMoving = false
    e.stopPropagation()
    console.log(e);
  }
  /**
   * 拉伸剪裁框
   */
  stretchCutDom(x,y) {
    this.style.width += -x
    this.style.height += -y
    this.setState({
      style: this.style
    })
  }
  /**
   * 剪裁框进行移动
   */
  move() {
    this.style.left += this.translate.x
    this.style.top += this.translate.y
    let cutDom = document.querySelector('.cut')
    if (this.style.left < 0) {
      this.style.left = 0
    }
    if (this.style.left + cutDom.offsetWidth >= this.props.limit.width) {
      this.style.left = this.props.limit.width - cutDom.offsetWidth
    }
    if (this.style.top < 0) {
      this.style.top = 0
    }
    if (this.style.top + cutDom.offsetHeight >= this.props.limit.height) {
      this.style.top = this.props.limit.height - cutDom.offsetHeight
    }
    this.setState({
      style: this.style
    })
  }
  render(e) {
    return (
      <div className="cut"
        onMouseDown={this.cutMouseDown.bind(this, e)}
        onMouseMove={this.cutMouseMove.bind(this, e)}
        onMouseUp={this.cutMouseUp.bind(this, e)}
        style={{
          width: this.state.style.width + 'px',
          height: this.state.style.height + 'px',
          left: this.state.style.left + 'px',
          top: this.state.style.top + 'px',
        }}
      >
        <div
          className="stretch l-t"
          onMouseDown={this.stretchMouseDown.bind(this, e)}
          onMouseMove={this.stretchMouseMove.bind(this, e)}
          onMouseUp={this.stretchMouseUp.bind(this, e)}
        ></div>
      </div>
    )
  }
}
export default Cut