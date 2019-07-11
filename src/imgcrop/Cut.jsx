import React from 'react';
import './Cut.css';
class Cut extends React.Component {
  cutMoving = false // 开始移动剪裁框
  stretchMoving = false // 开始拉伸剪裁框
  // 开始拉伸剪裁框的初始位置
  stratPosition = {
    x: 0,
    y: 0
  }
  // 剪裁框移动数据
  translate = {
    x: 0,
    y: 0
  }
  // 样式
  style = {
    width: 150,
    height: 150,
    left: 0,
    top: 0,
  }
  canvasSource = document.createElement('canvas')
  constructor(props) {
    super(props)
    this.init()
    this.state = {
      style: this.style,
      cutImgUrl: ''
    }
    document.addEventListener('mouseup', () => {
      this.cutMoving = false
      this.stretchMoving = false
      this.cutImg(this.props.imgUrl)
    })
  }
  /**
   * 初始化数据
   */
  init() {
    this.cutMoving = false
    this.stretchMoving = false
    this.style = {
      width: 150,
      height: 150,
      left: 0,
      top: 0,
    }
    // 开始拉伸剪裁框的初始位置
    this.stratPosition = {
      x: 0,
      y: 0
    }
    // 剪裁框移动数据
    this.translate = {
      x: 0,
      y: 0
    }
    this.setState({
      style: this.style,
      cutImgUrl: ''
    })
  }
  getCutDomPosition() {
    let cutDom = document.querySelector('.cut')
    let width = cutDom.offsetWidth || this.style.width
    let height = cutDom.offsetHeight || this.style.height
    let left = cutDom.offsetLeft || this.style.left
    let top = cutDom.offsetTop || this.style.top
    let right = left + width
    let bottom = top + height
    return { width, height, left, top, right, bottom }
  }
  componentDidMount() {
    // console.log('this.cutPostion', this.cutPostion);
  }
  componentWillReceiveProps(props) {
    // console.log('父值改变了', props);
    if (props.showCut && props.imgUrl !== '') {
      this.cutImg(props.imgUrl)
    }
  }
  cutMouseDown(arg, e) {
    this.cutMoving = true
  }
  cutMouseMove(arg, e) {
    if (this.cutMoving) {
      this.translate = {
        x: e.movementX,
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
    this.stratPosition = {
      x: e.clientX,
      y: e.clientY
    }
    e.stopPropagation()
  }
  stretchMouseMove(arg, e) {
    e.stopPropagation()
    if (this.stretchMoving) {
      this.stretchCutDom(e.movementX, e.movementY)
    }
  }
  stretchMouseUp(arg, e) {
    this.stretchMoving = false
    e.stopPropagation()
  }
  /**
   * 拉伸剪裁框
   */
  stretchCutDom(x, y) {
    let cutPostion = this.getCutDomPosition()
    console.log('this.props.limit', this.props.limit);
    this.style.width += x
    this.style.height += y
    if (cutPostion.right > this.props.limit.width - 5) {
      this.style.width = this.props.limit.width - cutPostion.left - 5
    }
    if (cutPostion.bottom > this.props.limit.height - 5) {
      this.style.height = this.props.limit.height - cutPostion.top - 5
    }
    this.setState({
      style: this.style
    })
    this.cutImg(this.props.imgUrl)
  }
  /**
   * 剪裁框进行移动
   */
  move() {
    let cutPostion = this.getCutDomPosition()
    this.style.left += this.translate.x
    this.style.top += this.translate.y
    if (this.style.left < 0) {
      this.style.left = 0
    }
    if (this.style.left + cutPostion.width >= this.props.limit.width - 4) {
      this.style.left = this.props.limit.width - cutPostion.width - 4
    }
    if (this.style.top < 0) {
      this.style.top = 0
    }
    if (this.style.top + cutPostion.height >= this.props.limit.height - 4) {
      this.style.top = this.props.limit.height - cutPostion.height - 4
    }
    this.setState({
      style: this.style
    })
    this.cutImg(this.props.imgUrl)
  }
  /**
   * 图像剪裁
   */
  cutImg(imgUrl) {
    let cutPostion = this.getCutDomPosition()
    let sourceCanvae = this.canvasSource
    let cutResultCanvas = document.querySelector('#result')
    sourceCanvae.width = this.props.limit.width
    sourceCanvae.height = this.props.limit.height
    cutResultCanvas.width = cutPostion.width
    cutResultCanvas.height = cutPostion.height
    let cxtSourceCanvae = sourceCanvae.getContext('2d')
    let cxtCutResultCanvas = cutResultCanvas.getContext('2d')
    let img = new Image()
    img.src = imgUrl
    img.width = sourceCanvae.width
    img.height = sourceCanvae.height
    img.onload = () => {
      cxtSourceCanvae.drawImage(img, 0, 0, sourceCanvae.width, sourceCanvae.height)
      var imgData = cxtSourceCanvae.getImageData(cutPostion.left, cutPostion.top, cutResultCanvas.width, cutResultCanvas.height)
      cxtCutResultCanvas.putImageData(imgData, 0, 0, 0, 0, cutResultCanvas.width, cutResultCanvas.height)
      var cutImgUrl = cutResultCanvas.toDataURL('image/png')
      this.setState({
        cutImgUrl: cutImgUrl
      })
    }
  }
  cutImgMouseDown(arg, e) {
    e.preventDefault()
  }
  cutImgMouseMove(arg, e) {
    e.preventDefault()
  }
  cutImgMouseUp(arg, e) {
    e.preventDefault()
  }
  render(e) {
    return (
      <div className={`cut ${this.props.showCut ? '' : 'hide'}`}
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
        {this.state.cutImgUrl !== '' ? <img src={this.state.cutImgUrl}
          id="result_img"
          onMouseDown={this.cutImgMouseDown.bind(this, e)}
          onMouseMove={this.cutImgMouseMove.bind(this, e)}
          onMouseUp={this.cutImgMouseUp.bind(this, e)} /> : ''}
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