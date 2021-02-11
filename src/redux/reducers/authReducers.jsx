import * as actionType from '../actions/actionTypes';
const initialState = {
  username: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        username: action.username,
      };
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        username: null,
      };
    case actionType.CHECK_AUTH:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};
export default reducer;
