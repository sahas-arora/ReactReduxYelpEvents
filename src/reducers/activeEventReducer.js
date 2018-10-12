import { CURRENT_EVENT } from '../actions/index';

export default function(state=null, action){


  switch(action.type) {
    case CURRENT_EVENT:
    console.log("Action is: ", action.payload);
      return action.payload;

  }

  return state;
}
