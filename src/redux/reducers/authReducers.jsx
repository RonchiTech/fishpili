import React from 'react';
import * as actionType from '../actions/actionTypes'
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        userName: action.userName
      };
    default:
      return state;
  }
};
export default reducer;
