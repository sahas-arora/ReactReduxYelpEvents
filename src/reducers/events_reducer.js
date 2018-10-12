
import { FETCH_EVENTS } from '../actions/index';

export default function(state=[], action) {

  switch (action.type) {

    case FETCH_EVENTS:
    let myArray = action.payload.data["events"];

      let counter = 0;

      myArray.forEach((object) => {
        object.id = counter;
        counter++;
      });
      console.log("My array is: ", myArray);
      return state.concat(myArray) ;
    }
    console.log("state is ", state);
    return state;

  }
