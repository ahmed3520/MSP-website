
import { FETCH_ALL_EVENTS } from '../constants/actionTypes';

export default  (events = [], action) => {
  switch (action.type) {
    case FETCH_ALL_EVENTS:
      return action.payload;
    default:
      return events;
  }
};