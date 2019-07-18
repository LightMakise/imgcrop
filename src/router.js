/* eslint-disable react/react-in-jsx-scope */
import App from './pages/App.jsx';
import Imgcrop from './pages/imgcrop';
import Imgwall from './pages/imgwall/Imgwall.jsx';
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
const routeConfig = [
  {
    path: '/imgcrop',
    component: Imgcrop,
  }, {
    path: '/imgwall',
    component: Imgwall,
  }
]
const SliderComponent = () => (
  <Switch>
    {routeConfig.map((route, i) => (
      <Route path={route.path} component={route.component} key={i}></Route>
    ))}
    <Redirect from="/" to="/imgcrop" />
  </Switch>
)
const ReactRoutDom = () => (
  <HashRouter >
      <SliderComponent />
  </HashRouter>
)
export default ReactRoutDom
