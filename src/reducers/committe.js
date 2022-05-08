
import { FETCH_ALL_COMMITTE } from '../constants/actionTypes';

export default  (committes = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COMMITTE:
      return action.payload;

    default:
      return committes;
  }
};