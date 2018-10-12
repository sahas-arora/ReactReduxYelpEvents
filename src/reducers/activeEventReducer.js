import { FETCH_EVENTS } from '../actions/index';

export default function(state=null, action){


  switch(action.type){
    case FETCH_EVENTS:
      return action.payload.data["events"];
  }

  return state;
}
