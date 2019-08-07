import React from 'react';
import Component from '../../extends/Component';
import { routeConfig } from '../../router';
import './LeftMenu.css';
class LeftMenu extends Component {
  constructor(props) {
    super(props)
    let currentRoutePath = window.location.hash.substring(1) 
    let active = routeConfig.findIndex(r => r.path === currentRoutePath)
    console.log(active);
    this.state = {
      active
    }
  }
  link(path, i) {
    this.push(path)
    this.setState({
      active : i
    })
  }
  render() {
    return (
      <div className="left-menu">
        <ul>
          {
            routeConfig.map((menuItem, index) => (
              <li onClick={this.link.bind(this, menuItem.path, index)} key={index}
               className={this.state.active === index?'active':''}
              >{menuItem.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default LeftMenu