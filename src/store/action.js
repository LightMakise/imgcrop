import {SET_STATE} from './menu';
export const setSeat = ({position,status}) => {
  return {
    type: SET_STATE,
    position,
    status
  }
}