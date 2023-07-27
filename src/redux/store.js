import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
// import contactsSliceReducer from './contactsSlice';
import filterSliceReducer from './filterSlice';
import authSliceReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authSliceReducer,
  // contacts: contactsSliceReducer,
  filtered: filterSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
