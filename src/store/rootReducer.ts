import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from 'slices/counter';
import menuReducer from 'slices/menu';

const rootReducer = combineReducers({
  counter: counterReducer,
  menu: menuReducer,
});

export default rootReducer;
