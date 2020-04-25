import { combineReducers } from 'redux';
import statusReducer from './statusReducer';
import countryReducer from './countryReducer';

export default combineReducers({
  connection: statusReducer,
  country: countryReducer,
});
