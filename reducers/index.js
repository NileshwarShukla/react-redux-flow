import { combineReducers } from 'redux'
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import grid from './grid';
import tiles from './tiles';


 const store = createStore(
  combineReducers({ 
     grid,
     tiles}),
  applyMiddleware(thunk)
);
export default store;