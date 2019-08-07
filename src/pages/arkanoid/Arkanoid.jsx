import React from 'react';
import './Arkanoid.css';
import Ball from '../../component/arkanoid/ball/Ball.jsx';
import Brick from '../../component/arkanoid/brick/Brick.jsx';
import Component from '../../extends/Component.jsx';
class Imagewall extends Component {
  bricks = [
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
    {state:1},
  ]
  balls = [
    {angle:30},
  ]
  constructor(props) {
    super(props)
    let bricks = this.bricks
    this.state = {
      bricks,
      start: false
    }
  }
  impact(index) {
    let bricks = this.bricks
    bricks[index].state = 0
    this.setState({bricks})
    console.log(`第 ${index} 砖消失`)
  }
  start() {
    this.setState({start:true})
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="imgwall">
        <div className="area">
          {this.bricks.map((item,index)=>(
            <Brick key={index} isHide={item.state === 0}></Brick>
          ))}
          {this.balls.map((item,index)=>(
            <Ball key={index} num={index} impact={this.impact.bind(this)} bricks={this.state.bricks} angle={item.angle} start={this.state.start}></Ball>
          ))}
        </div>
        <div className="button" onClick={this.start.bind(this)} >开始</div>
      </div>
    )
  }
}
export default Imagewall