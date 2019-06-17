import * as TYPES from '../constants/actionTypes';

export const setColor = color => {
  console.log('Action - setColor()');
  return {
    type: TYPES.SET_COLOR,
    payload: color,
  };
};
