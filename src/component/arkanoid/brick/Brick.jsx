import React from 'react';
import Component from '../../../extends/Component';
import './Brick.css';
class Brick extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className={`brick ${this.props.isHide?'brick-hide':''}`}>

      </div>
    )
  }
}
export default Brick