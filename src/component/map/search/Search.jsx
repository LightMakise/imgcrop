import React from 'react';
import Component from '../../../extends/Component';
import './Search.css';
class Search extends Component{
  AMap = null // 父组件会在调用完API后给AMap赋值
  constructor(props) {
    super(props)
    this.state = {
      mapData:[]
    }
  }
  /**
   * 搜索
   */
  search() {
    if (this.seachVal.value) {
      this.props.search(this.seachVal.value)
    }
  }
  /**
   * 文本框值输入改变触发自动补全
   */
  change() {
    this.autoComplete(this.seachVal.value)
  }
  /**
   * 位置自动补全
   * @param {string} keywords 关键字 
   */
  autoComplete(keywords) {
    console.log(this.AMap);
    this.AMap.service(["AMap.Autocomplete"], () => {
      let autoOptions = {
        //city 限定城市，默认全国
        city: '天津',
        output: '#panel',
      }
      let autoComplete = new this.AMap.Autocomplete(autoOptions)
      autoComplete.search(keywords,(status, result) => {
        this.assData({status, result})
      })
    })
  }
  /**
   * 组装位置数据
   */
  assData({status, result}) {
    if (status === 'complete') {
      console.log('result', result);
      this.setState({mapData: result.tips})
    } else {
      this.setState({mapData: []})
    }
  }
  /**
   * 点击位置单元进行查询并清空自动补全
   */
  clickItem(name) {
    this.seachVal.value = name
    this.search()
    this.setState({mapData: []})
  }
  render() {
    return (
      <div className="map-search">
        <div className="input">
          <input type="text" placeholder="输入关键字" ref={input => this.seachVal = input} onChange={this.change.bind(this)}/>
          <span className="icon" onClick={this.search.bind(this)}>
            <i className="iconfont iconsousuo"></i>
          </span>
        </div>
        <div className="panel" id="panel">
          {this.state.mapData.map((data,index) => (
            <div className="panel-item" onClick={this.clickItem.bind(this, data.name)} key={index}>
              <span className="address-name">{data.name}</span>
              <span className="address-district">{data.district}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default Search