import React from 'react';
import Component from '../../extends/Component';
import './Selection.css';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/store';
class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: []
    }
  }
  setSeat(row, col) {
    let status = this.props.seat.map[row][col]
    let position = row + '-' + col
    let selected = this.state.selected
    if (status === -1) {
      return
    }
    if (status === 2) {
      let index = selected.findIndex(seat => (seat.position === position))
      selected.splice(index, 1)
      this.props.setSeat({ position, status: 1 })
    } else if (status === 1) {
      selected.push({ row, col, position })
      this.props.setSeat({ position, status: 2 })
    }
    this.setState({ selected })
  }
  componentDidUpdate(props) {

  }
  render() {
    const { seat } = this.props
    return (
      <div className="selection">
        <div className="screen"></div>
        <div className="seats">
          {
            seat.map.map((seats, indexRow) => (
              <div className="seat-row" key={indexRow}>
                {seats.map((seat, indexCol) => (
                  <span key={indexRow + indexCol}
                    className={`seat ${seat === 0 ? 'none' : ''}  ${seat === -1 ? 'disabled' : ''} ${seat === 2 ? 'selected' : ''}`} onClick={this.setSeat.bind(this, indexRow, indexCol)}><i className="iconfont icondingzuo-"></i></span>
                ))}
              </div>
            ))
          }
        </div>
        <div className="info">
          {this.state.selected.map((seat, index) => (
            <span className="label" key={index}>第{seat.row + 1}排 第{seat.col + 1}座</span>
          ))}
        </div>
      </div>
    )
  }
}
const selectPage = connect(mapStateToProps, mapDispatchToProps)(Selection)
export default selectPage