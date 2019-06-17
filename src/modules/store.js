import { createStore, applyMiddleware, combineReducers } from 'redux';

// Logger with default options
import logger from 'redux-logger';

import itemsReducer from './itemsReducer';
import colorsReducer from './colorsReducer';

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      colors: colorsReducer,
      // Define more reducers here
    }),
    initialState,
    applyMiddleware(logger)
  );
  return store;
}
