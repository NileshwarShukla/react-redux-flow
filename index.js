import React, { Component } from 'react';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import './style.css';

import UserTiles from './UserTiles';
import GridLayout from './GridLayout'
import store from './reducers';


render( 
   <Provider store={store}>
   <UserTiles /> 
   <GridLayout />
   
   </Provider>
   , document.getElementById('root')
  );
