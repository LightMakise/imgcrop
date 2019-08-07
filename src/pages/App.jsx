import React from 'react'
import {ReactRouteDom as Page} from '../router';
import './App.css';
import LeftMenu from './menu/LeftMenu.jsx';
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <LeftMenu></LeftMenu>
        <div className="main">
          <Page />
        </div>
      </div>
    )
  }
}
export default App 