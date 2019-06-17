import initialState from './initialState';
import * as TYPES from '../constants/actionTypes';

const colorsReducer = (state = initialState.color, action) => {
  switch (action.type) {
    case TYPES.SET_COLOR:
      const color = action.payload;
      return color;

    default:
      return state;
  }
};

export default colorsReducer;
