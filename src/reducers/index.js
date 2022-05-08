
import { combineReducers } from 'redux';

import commite from './committe';
import event from './event';

export const reducers = combineReducers({ commite, event });