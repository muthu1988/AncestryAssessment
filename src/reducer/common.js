import { createReducer } from 'redux-act';
import * as CommonAction from '../actions/common';

export default createReducer({
  [CommonAction.setReduxState]: (state, action) => {
    const newState = Object.assign({}, state, action);
    return newState;
  },
}, {});