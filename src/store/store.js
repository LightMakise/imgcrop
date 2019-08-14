import {
  setSeat
} from './action';
import {deepCopy} from '../utils/object';
import {SET_STATE} from './menu';
const stroe = {
  seat: {
    map: [
      [1, 1, 1, -1, -1, 1, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, -1, 1, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, -1, -1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ]
  }
}


export const reducer = (state = stroe, action) => {
  switch (action.type) {
    case SET_STATE:
      let position = action.position.split('-')
      stroe.seat.map[position[0]][position[1]] = action.status
      return deepCopy(stroe)
    default:
      return stroe
  }
}

export const mapStateToProps = (state) => {
  return {
    seat: state.seat
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setSeat: ({position,status}) => dispatch(setSeat({position,status}))
  }
}