import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Create an action creator to intiate change on the redux side of our app
// to modify the state contained inside the redux store


// where states are stored
// first argument is reducer
// second argument, intial state - mostly releveant for server side rendering, so we're passing in a blank object
// third argument, middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

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
