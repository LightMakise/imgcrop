/* eslint-disable react/react-in-jsx-scope */
import Imgcrop from './pages/imgcrop';
import Imgwall from './pages/imgwall/Imgwall.jsx';
import Arkanoid from './pages/arkanoid/Arkanoid.jsx';
import Map from './pages/map/Map.jsx';
import Selection from './pages/selection/Selection.jsx';
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider, connect } from 'react-redux';
import { reducer, mapDispatchToProps, mapStateToProps } from './store/store';
export const routeConfig = [
  {
    path: '/imgcrop',
    component: Imgcrop,
    name: '图片剪裁'
  },
  {
    path: '/imgwall',
    component: Imgwall,
    name: '不规则图片墙'
  },
  {
    path: '/arkanoid',
    component: Arkanoid,
    name: '打砖块'
  },
  {
    path: '/map',
    component: Map,
    name: '高德地图'
  },
  {
    path: '/selection',
    component: Selection,
    name: '选座位'
  },
]
class SliderComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
      <Switch>
        {routeConfig.map((route, i) => (
          <Route path={route.path} component={route.component} key={i}></Route>
        ))}
        <Redirect from="/" to="/imgcrop" />
      </Switch>
    )
  }
}
export const Router = () => (
  <HashRouter >
    <SliderComponent />
  </HashRouter>
)

