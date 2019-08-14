import React from 'react';
import { createHashHistory } from 'history'

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  /**
   * 页面跳转
   * @param {*} path 默认为 / 
   */
  push(pathname = '/') {
    createHashHistory().push(pathname)
  }
}
export default Component