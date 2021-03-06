

import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';

let ROOT_URL = 'https://api.yelp.com/v3/events';
let thingProxyURL = 'https://cors-anywhere.herokuapp.com/';
let API_KEY = 'e4V6qrpBih4kTczhWIjkU7AlTNe9-ocf96YAMqgM0n-1NkzstuwXL0--vj71j4zKYPaLPLyOHfudNpqK0736W1hJR26m9DyzkmZdaX_I4QOixSpAFvhBb-boKbS7W3Yx';
export const CURRENT_EVENT = 'CURRENT_EVENT';


export function fetchList(location) {
  let url = `${thingProxyURL}${ROOT_URL}`;
  let request = axios.get(
      url, {
        headers: { Authorization: `Bearer ${API_KEY}` },
        params: { location : location, limit:5}
      });

  console.log("Request:", request);

 return {

   type: FETCH_EVENTS,
   payload: request
 }
}

export function currentEvent(event){
  console.log("event is :", event);
 return {
   type: CURRENT_EVENT,
   payload: event
 }
}
