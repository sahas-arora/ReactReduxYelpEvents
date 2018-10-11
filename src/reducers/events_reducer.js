
import { FETCH_EVENTS } from '../actions/index';

export default function(state=[], action) {


  switch (action.type) {
    case FETCH_EVENTS:
      return state.concat([action.payload.data["events"]]) ;
    }
    console.log("state is ", state);
    return state;

  }
