/* eslint-disable react/react-in-jsx-scope */
import Imgcrop from './pages/imgcrop';
import Imgwall from './pages/imgwall/Imgwall.jsx';
import Arkanoid from './pages/arkanoid/Arkanoid.jsx';
import Map from './pages/map/Map.jsx';
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
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
]
const SliderComponent = () => (
  <Switch>
    {routeConfig.map((route, i) => (
      <Route path={route.path} component={route.component} key={i}></Route>
    ))}
    <Redirect from="/" to="/imgcrop" />
  </Switch>
)
export const ReactRouteDom = () => (
  <HashRouter >
      <SliderComponent />
  </HashRouter>
)

