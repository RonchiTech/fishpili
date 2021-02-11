import * as actionType from '../actions/actionTypes';
const initialState = {
  username: null,
  userID: null,
  userRole: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        username: action.username,
        userID: action.userID
      };
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        username: null,
        userID: null,
      };
    case actionType.CHECK_AUTH:
      return {
        ...state,
        username: action.username,
        userID: action.userID,
      };
    default:
      return state;
  }
};
export default reducer;
