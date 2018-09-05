import { combineReducers } from 'redux';
import authReducer from './authReducer';

// with the object we pass in, whatever keys we provide to this object,
// they will represent the keys that will exist inside the state object
export default combineReducers({
  // this state is being manufactured by the authReducer
  auth: authReducer
});
