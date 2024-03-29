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
    width: 50,
    height: 50,
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
    // * 要注意绑定this 不然会有指向问题
    document.addEventListener('mouseup', this.mouseupEvent.bind(this))
  }
  // 鼠标点击抬起事件
  mouseupEvent() {
    this.cutMoving = false
    this.stretchMoving = false
    this.cutImg()
  }
  /**
   * 页面清除
   */
  componentWillUnmount() {
    // 移除点击事件 不移除的话可能导致别的页面有问题
    document.removeEventListener('mouseup', this.mouseupEvent)
  }
  /**
   * 初始化数据
   */
  init() {
    this.cutMoving = false
    this.stretchMoving = false
    this.style = {
      width: 50,
      height: 50,
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
    if (!cutDom) return null
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
    // 点击左键
    if (e.button === 0) {
      this.cutMoving = true
    }
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
  /**
   * 按下剪裁框右下角
   */
  stretchMouseDown(arg, e) {
    // 不是点击左键直接返回
    if (e.button !== 0) {
      return
    }
    this.stretchMoving = true
    this.stratPosition = {
      x: e.pageX,
      y: e.pageY
    }
    let stretchMouseMove = (e) => {
      this.stretchMouseMove(e)
    }
    /**
     * 创建一个全局的鼠标移动事件
     * 鼠标抬起的时候在移除该事件
     */
    document.addEventListener('mousemove', stretchMouseMove, true)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', stretchMouseMove, true)
    })
    e.stopPropagation()
  }
  /**
   * 剪裁框右下角拖拽进行扩大或缩小
   * 实际的扩大或缩小的就是鼠标移动的距离
   * movementX,movementY 扩大为正 缩小为负
   */
  stretchMouseMove(e) {
    this.stretchCutDom(e.movementX, e.movementY)
  }
  stretchMouseUp(arg, e) {

  }
  /**
   * 拉伸剪裁框
   * 不能超出图片的范围
   */
  stretchCutDom(x, y) {
    let cutPostion = this.getCutDomPosition()
    // console.log('this.props.limit', this.props.limit);
    this.style.width += x
    this.style.height += y
    if (cutPostion.right > this.props.limit.width) {
      this.style.width = this.props.limit.width - cutPostion.left
    }
    if (cutPostion.bottom > this.props.limit.height) {
      this.style.height = this.props.limit.height - cutPostion.top
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
    if (this.style.left + cutPostion.width >= this.props.limit.width) {
      this.style.left = this.props.limit.width - cutPostion.width
    }
    if (this.style.top < 0) {
      this.style.top = 0
    }
    if (this.style.top + cutPostion.height >= this.props.limit.height) {
      this.style.top = this.props.limit.height - cutPostion.height
    }
    this.setState({
      style: this.style
    })
    this.cutImg(this.props.imgUrl)
  }
  /**
   * 图像剪裁
   */
  cutImg(imgUrl = this.props.imgUrl) {
    let cutPostion = this.getCutDomPosition()
    if (!cutPostion) return
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
        <div className="size-text"> {this.state.style.width + ' x ' + this.state.style.height}</div>
        {this.state.cutImgUrl !== '' ? <img src={this.state.cutImgUrl}
          id="result_img"
          onMouseDown={this.cutImgMouseDown.bind(this, e)}
          onMouseMove={this.cutImgMouseMove.bind(this, e)}
          onMouseUp={this.cutImgMouseUp.bind(this, e)} /> : ''}
        <div
          className="stretch l-t"
          onMouseDown={this.stretchMouseDown.bind(this, e)}
          // onMouseMove={this.stretchMouseMove.bind(this, e)}
          onMouseUp={this.stretchMouseUp.bind(this, e)}
        >
        </div>
      </div>
    )
  }
}
export default Cut