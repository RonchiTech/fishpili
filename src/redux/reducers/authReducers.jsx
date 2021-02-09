import React from 'react';
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {};
    default:
      return state;
  }
};
export default reducer;
