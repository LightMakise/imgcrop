/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Droparea.css';
import Cut from './Cut.jsx';
class Droparea extends React.Component {
  // 图片类型
  imgsType = ['image/jpeg', 'image/png']
  // 图片大小
  imgsSize = 10*1024*1024
  constructor(props) {
    console.log('props', props)
    super(props);
    this.state = {
      limit: {}, // 当前dom的四个边界
      fileEnterArea: false, // 是否有文件进入区域
      imgUrl: '' // 图片地址 BASE64
    }
  } 
  componentDidMount() {
    let droparea = document.querySelector('.droparea')
    let limit = {
      left:droparea.offsetLeft,
      top:droparea.offsetTop,
      bottom:droparea.offsetTop + droparea.offsetHeight,
      right:droparea.offsetLeft + droparea.offsetWidth,
      width:droparea.offsetWidth,
      height:droparea.offsetHeight,
    }
    this.setState({
      limit: limit
    })
  }
  delImg() {
    console.log('delImg');
    this.setState({
      imgUrl: '',
      fileEnterArea: false
    })
  }
  /**
   * 图片显示在页面
   */
  imgShow(imgUrl) {
    console.log('imgUrl', imgUrl)
    this.setState({
      imgUrl: imgUrl
    })
    this.props.loadingImgFinish()
  }
  /**
   * 处理文件
   */
  processFile(files) {
    files = this.getFile(files)
    console.log('files', files)
    if (files.length === 0 ) return
    let file = new FileReader()
    file.readAsDataURL(files[0])
    console.log('开始读取文件');
    file.onload = ()=> {
      console.log('文件读取完成');
      this.imgShow(file.result)
    }
  }
  /**
   * 获取文件
   */
  getFile(files) {
    let filesResult = []
    filesResult = Array.from(files).filter( file => {
      return this.checkFile(file)
    })
    return filesResult
  }
  /**
   * 校验文件类型
   */
  checkFile(file) {
    let type = file.type // 文件类型
    let size = file.size // 文件大小
    let res = true
    if(!this.imgsType.includes(type)) {
      res = false
      console.error(`文件不是图片类型 ${type}`);
    }
    if (size >= this.imgsSize) {
      res = false
      console.error(`文件超过${size}`);
    }
    return res
  }
  onDragOver(e) {
    e.preventDefault();
  }
  onDrop(arg,e) {
    e.preventDefault();
    if (this.state.imgUrl) return 
    this.setState({
      fileEnterArea: false
    })
    console.log('onDrop',arg,e);
    this.processFile(e.dataTransfer.files)
  }
  /**
   * 文件进入
   */
  onDragEnter() {
    if (this.state.imgUrl) return 
    this.setState({
      fileEnterArea: true
    })
    console.log('onDragEnter');
  }
  /**
   * 文件离开
   */
  onDragLeave() {
    if (this.state.imgUrl) return 
    this.setState({
      fileEnterArea: false
    })
    console.log('onDragLeave');
  }
  render(e) {
    return (
      <div
      className={`droparea ${this.state.fileEnterArea ? 'file-hover' : ' '}`} 
      onDragOver={this.onDragOver.bind(this)}  
      onDragEnter={this.onDragEnter.bind(this)}  
      onDragLeave={this.onDragLeave.bind(this)}  
      onDrop={this.onDrop.bind(this,e)}>
        {this.state.imgUrl? <img src={this.state.imgUrl} /> : null}
        <Cut limit={this.state.limit}></Cut>
      </div>
    )
  }
}
export default Droparea