import React from 'react'
import { Router } from '../router';
import './App.css';
import LeftMenu from './menu/LeftMenu.jsx';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../store/store';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <LeftMenu></LeftMenu>
        <div className="main">
          <Router props={this.props}/>
        </div>
      </div>
    )
  }
}
export default App 