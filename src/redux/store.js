import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
  },
});

import {createStore} from 'redux';
import {counterSlice} from '../sreens/Counter';
export const stores = createStore(counterSlice);
