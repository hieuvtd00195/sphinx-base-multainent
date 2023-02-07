import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from 'slices/counter';
import menuReducer from 'slices/menu';
import notificationReducer from 'slices/notification';

const rootReducer = combineReducers({
  counter: counterReducer,
  menu: menuReducer,
  notification: notificationReducer,
});

export default rootReducer;
