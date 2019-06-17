import * as TYPES from '../constants/actionTypes';

/**
 * Generates an object that the redux could interpret.
 * Appends type: ADD_ITEM to trigger saving of item in redux.
 *
 * @param {string} item
 * String value you want to the list of items
 */
export const addItem = item => {
  console.log('Action - addItem()');
  return {
    type: TYPES.ADD_ITEM,
    payload: item,
  };
};

/**
 * Appends type: REMOVE_ITEM to trigger removal of item
 *
 * @param {number} itemIndex
 * String value you want to the list of items
 */
export const removeItem = itemIndex => {
  console.log('Action - removeItem()');
  return {
    type: TYPES.REMOVE_ITEM,
    payload: itemIndex,
  };
};

