import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

// where states are stored
// first argument is reducer
// second argument, intial state - mostly releveant for server side rendering, so we're passing in a blank object
// third argument, middleware
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  // Provider is a react tag that can read changes from the redux store
  <Provider
    // This will update all child components (App) of any state changes store={
    store={store}
  >
    <App />
  </Provider>,
  document.querySelector('#root')
);
