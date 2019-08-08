import React from 'react';
import './Imgwall.css';
import { random } from '../../utils/number';
import Component from '../../extends/Component.jsx';

class Imagewall extends Component {
  contentNode = null
  imgLoadNum = 0
  imgRandom = [
    'http://img2.imgtn.bdimg.com/it/u=1827962122,3613379018&fm=26&gp=0.jpg',
    'http://img3.imgtn.bdimg.com/it/u=3139953554,3011511497&fm=26&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=1688026885,2773767715&fm=26&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=4064075977,3738371861&fm=26&gp=0.jpg',
    'http://img0.imgtn.bdimg.com/it/u=2786741331,312930537&fm=26&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=15576430,1042561804&fm=26&gp=0.jpg',
    'http://img3.imgtn.bdimg.com/it/u=702732967,177725924&fm=26&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=2170217910,293575024&fm=26&gp=0.jpg',
    'http://img1.imgtn.bdimg.com/it/u=184317050,1666959161&fm=26&gp=0.jpg',
  ]
  imgs = (() => {
    let imgs = []
    for (let i = 1; i <= 30; i++) {
      let num = random(0, 8)
      imgs.push(this.imgRandom[num])
    }
    return imgs
  })()
  resizeEvent = ()=> {this.resize()}
  scrollEvent = ()=> {this.scroll()}
  constructor(props) {
    super(props)
    this.state = {
      imgs: this.imgs,
      loaded : false
    }
  }
  componentDidMount() {
    this.contentNode.addEventListener('scroll', this.scrollEvent)
    window.addEventListener('resize', this.resizeEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeEvent);
    window.removeEventListener('scroll', this.scrollEvent);
  }
  scroll() {
    let imgwall = document.querySelector('.img-wall')
    if (imgwall.clientHeight + imgwall.scrollTop === imgwall.scrollHeight) {
      let imgs =  this.state.imgs
      for (let i = 1; i <= 4; i++) {
        let num = random(0, 8)
        imgs.push(this.imgRandom[num])
      }
      this.setState({imgs})
    }
  }
  resize() {
    if (this.imgLoadNum >= this.imgs.length) {
      this.waterFlow()
    }
  }
  handleImageLoaded() {
    this.imgLoadNum += 1
    if (this.imgLoadNum >= this.imgs.length) {
      this.waterFlow()
      this.setState({loaded: true})
    } 
    console.log('handleImageLoaded', this.imgLoadNum);
  }
  /**
   * 方式一
   * 先布局第一行 然后第二行根据第一行的位置依次固定位置
   */
  waterFlow() {
    let imgwall = document.querySelector('.img-wall')
    console.dir(imgwall.scrollTop);
    let allImgItem = Array.from(document.querySelectorAll('.img-item'))
    // console.log('allImgItem', allImgItem);
    let screenWidth = imgwall.clientWidth
    // console.log('screenWidth', screenWidth);
    // 一行4个
    let rol = 4
    // 一共多少行
    let row = Math.ceil(allImgItem.length / rol)
    for (let i = 1; i <= row; i++) {
      if (i === 1) continue
      let perRowTop = this.getRowTop(allImgItem, i - 1, rol)
      for (let j = (i - 1) * rol, k = 0; j <= i * rol - 1; j++ , k++) {
        if (j < allImgItem.length) {
          allImgItem[j].style.top = perRowTop[k].top + 'px'
          allImgItem[j].style.left = perRowTop[k].left - 5 + 'px'
          allImgItem[j].style.position = 'absolute'
        } else {
          break
        }
      }
    }
  }
  // 获取指定行的所有容器的位置
  getRowTop(items, row, rol) {
    let start = (row - 1) * rol
    let end = row * rol - 1
    let onlyOneColsArr = []
    for (let j = start; j <= end; j++) {
      let top = items[j].offsetTop + items[j].offsetHeight
      let left = items[j].offsetLeft
      onlyOneColsArr.push({ top, left })
    }
    // console.log('onlyOneColsArr', onlyOneColsArr);
    return onlyOneColsArr
  }
  render() {
    return (
      <div className={`img-wall`} ref={ node => this.contentNode = node }>
        {this.state.loaded ? null:<div className="loading"></div>}
        {
          this.state.imgs.map((item, index) => (
            <div className="img-item" key={index}>
              {/* <img src={require('../../image/imgwall/' + item + '.jpg')}
                onLoad={this.handleImageLoaded.bind(this)}
              /> */}
              <img src={item}
                onLoad={this.handleImageLoaded.bind(this)}
              />
            </div>
          ))
        }
      </div>
    )
  }
}
export default Imagewall