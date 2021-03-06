import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import './index.css';
import App from './App';

const initialState = {
  count: 0,
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  } else if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  } else if (action.type === RESET) {
    return {count: 0};
  }
  return state;
};

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
