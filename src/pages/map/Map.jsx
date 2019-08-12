import React from 'react';
import './Map.css';
import Component from '../../extends/Component';
import Search from '../../component/map/search/Search.jsx';
class Map extends Component {
  key = '82c49231a3d2b7e5b4879b8bd82000bd'
  AMap = null
  map = null
  config = {
    zoom: 20,//级别
    viewMode: '3D'//使用3D视图
  }
  constructor(props) {
    super(props)
    this.state = {

    }
    console.log('constructor');
    this.createMapLink()
  }
  createMapLink() {
    let url = 'https://webapi.amap.com/maps?v=1.4.15&key=' + this.key
    let script = document.createElement('script')
    script.charset = 'utf-8'
    script.src = url
    script.onload = () => {
      this.createMap()
    }
    document.head.appendChild(script)
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  createMap() {
    this.AMap = this.search.AMap = window.AMap
    this.map = new this.AMap.Map('container', this.config)
  }
  search(content) {
    let map = this.map
    this.AMap.service(["AMap.PlaceSearch"], () => {
      let placeSearch = new this.AMap.PlaceSearch({
        pageSize: 5, // 单页显示结果条数
        pageIndex: 1, // 页码
        city: "022", // 兴趣点城市
        citylimit: true,  //是否强制限制在设置的城市内搜索
        map: map, // 展现结果的地图实例
        // panel: "panel", // 结果列表将在此容器中进行展示。
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      })
      placeSearch.search(content)
    })
  }
  render() {
    return (
      <div>
        <Search search={this.search.bind(this)} ref={search => this.search = search}></Search>
        {/* <div className="search" onClick={this.search.bind(this)}>查询</div> */}
        <div className={`map`} id="container"></div>
        <div id="panel"></div>
      </div>
    )
  }
}
export default Map