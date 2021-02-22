import {LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_ERROR, TEMP_REQUEST} from '../actions';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  loginInfo: null,
  isLoggedIn: false,
}
const loginReducer = (state = initialState, action) => {
  const {payload, type} = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isRequesting: true,
        isSuccess: false,
        isError: false,
        error: null,
      }
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        error: null,
        loginInfo: payload.loginInfo,
      }
    case LOGIN_REQUEST_ERROR:
      return {
        ...state,
        isRequesting: false,
        isSuccess: false,
        isError: true,
        error: payload.error,
        loginInfo: null,
      }
      case TEMP_REQUEST:
      return {
        ...state,
        isLoggedIn: true
      }
      default:
        return state;
  }
}

export default loginReducer;