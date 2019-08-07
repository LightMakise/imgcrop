import React from 'react';
import Component from '../../../extends/Component';
import './Ball.css';
import { impactCheckWall, impactChecking, impactReturn } from '../../../utils/imact.js';
class Ball extends Component {
  interval = null
  angle = 80 // 飞行角度
  ballDom = null // 球 DOM
  bricksDom = null // 砖块 DOM
  bricks = null
  times = 1 // 倍速
  // 方向
  position = {
    x: 1,
    y: -1
  }
  constructor(props) {
    super(props)
    // 初始点
    this.state = {
      x: 250,
      y: 330
    }
    this.angle = props.angle
  }
  componentWillReceiveProps(props) {
    this.bricks = props.bricks
    if (props.start) {
      this.click()
    }
  }
  componentDidMount() {
    this.ballDom = document.querySelector('.ball' + this.props.num)
    this.bricksDom = document.querySelectorAll('.brick')
    this.bricks = this.props.bricks
    // this.ball.addEventListener('transitionend', this.transitionend.bind(this))
  }
  sin(angle) {
    return Math.sin(((2 * Math.PI) / 360) * angle);
  }
  cos(angle) {
    return Math.cos(((2 * Math.PI) / 360) * angle);
  }
  transitionend() {
    console.log('transitionend');
  }
  // 检测 球碰砖块
  moveToBricks() {
    let x = this.state.x
    let y = this.state.y
    let ball = {
      left: x,
      right: x + Number(this.ballDom.offsetWidth),
      top: y,
      bottom: y + Number(this.ballDom.offsetHeight)
    }
    Array.from(this.bricksDom).map((item, index) => {
      let birck = {
        left: item.offsetLeft,
        right: item.offsetLeft + item.offsetWidth,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight,
      }
      if (this.bricks[index].state === 1) {
        let check = impactChecking(birck, ball)
        if (check.state) {
          console.log(`碰撞了第 ${index} 砖 碰撞 ${check.direction}`)
          this.props.impact(index)
          this.position = impactReturn(check, this.position)
        }
      }
    })
  }
  // 检测 球碰墙
  moveToWall() {
    let x = this.state.x
    let y = this.state.y
    let ball = {
      left: x,
      right: x + 5,
      top: y,
      bottom: y + 5
    }
    let wall = {
      left: 0,
      top: 0,
      right: 505,
      bottom: 500
    }
    if (impactCheckWall(ball, wall).collides) {
      switch (impactCheckWall(ball, wall).collidesPosition) {
        case 'right':
          this.position.x = - this.position.x
          break;
        case 'top':
          this.position.y = -this.position.y
          break;
        case 'left':
          this.position.x = -this.position.x
          break;
        case 'bottom':
          this.position.y = -this.position.y
          break;
        default:
          break;
      }
    }
  }
  move() {
    let x = this.state.x
    let y = this.state.y
    this.moveToWall()
    this.moveToBricks()
    x += this.sin(this.angle) * this.position.x * this.times
    y += this.cos(this.angle) * this.position.y * this.times
    this.setState({ x, y })
  }
  click() {
    if (this.interval === null) {
      this.interval = setInterval(() => {
        this.move()
      })
    }
  }
  render() {
    return (
      <div className={`ball ball${this.props.num}`} style={{
        transform: "translate(" + this.state.x + "px," + this.state.y + "px)"
      }} onClick={this.click.bind(this)}></div>
    )
  }
}
export default Ball