import { combineReducers } from 'redux';
import EventReducer from './events_reducer';
import ActiveEvent from './activeEventReducer';

const rootReducer = combineReducers({
  location: EventReducer,
  activeEvent: ActiveEvent
});

export default rootReducer;
