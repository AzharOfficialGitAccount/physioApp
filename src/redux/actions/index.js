export const LOGIN_REQUEST =  'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_REQUEST_ERROR = 'REGISTER_REQUEST_ERROR';
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS';

export const TEMP_REQUEST = 'LOGIN_REQUEST_TEMP';


export const signIn = (data) => {
  return {
    type: TEMP_REQUEST,
    payload: {data},
  }
}