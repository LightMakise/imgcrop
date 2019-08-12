import React from 'react';
import ImgwallComponent from '../../component/imgwall/Imgwall.jsx'
import Component from '../../extends/Component';
class Imgwall extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // this.props.history.push({pathname:'/imgcrop',state:{a:'22'}})
  }
  render() {
    return (
      <div className="Imgwall-page">
        <ImgwallComponent></ImgwallComponent>
      </div>
    )
  }
}
export default Imgwall