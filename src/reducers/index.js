import { combineReducers } from 'redux';
import EventReducer from './events_reducer';

const rootReducer = combineReducers({
  location: EventReducer
});

export default rootReducer;
