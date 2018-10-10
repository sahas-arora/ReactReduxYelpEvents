
import { FETCH_EVENTS } from '../actions/index';

export default function(state=[], action) {

  console.log("Action Received: ", action);

  switch (action.type) {
    case FETCH_EVENTS:
      return state.concat([action.payload.data]) ;
    }
    return state;

  }
