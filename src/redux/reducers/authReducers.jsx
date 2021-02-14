import * as actionType from '../actions/actionTypes';

const initialState = {
  username: null,
  userID: null,
  userRole: null,
  isLoading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        username: action.username,
        userID: action.userID,
        isLoading: false
      };
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        username: null,
        userID: null,
        userRole: null,
        isLoading: false,
      };
    case actionType.CHECK_AUTH:
      return {
        ...state,
        username: action.username,
        userID: action.userID,
        userRole: action.userRole,
        isLoading: false
      };
      case actionType.SET_ROLES:
        return {
          ...state,
          userRole: action.userRole,
          isLoading: false
        };
        case actionType.IS_LOADING:
          return {
            ...state,
            isLoading: true
          }
    default:
      return state;
  }
};
export default reducer;
