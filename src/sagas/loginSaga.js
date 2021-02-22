import {put, call, takeLatest} from 'redux-saga/effects';
import {API_RESPONSE_SUCCESS} from '../utils/constants';
import {makeNetworkCall} from '../network';
import {LOGIN_ENDPOINT} from '../utils/api-endpoints';
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from '../redux/actions';


/**
 * *************************************
 * LOGIN API
 * *************************************
 */
export function login(action) {
  console.log('--LOGIN-API-CALL--');
  const {data} = action.payload;
  const {headers} = data || {};

  const config = {
    headers,
    method: 'POST',
    url: LOGIN_ENDPOINT,
  };
  return makeNetworkCall(config);
}

export function* loginApi(action) {
  try {
    const response = yield call(login, action);
    const {data = {}} = response;
    console.log('--LOGIN-API-CALL-RESPONSE--', JSON.stringify(data));
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put({
        type: LOGIN_REQUEST_SUCCESS,
        payload: {categories: data},
      });
    } else {
      yield put({
        type: LOGIN_REQUEST_ERROR,
        payload: {error: response},
      });
    }
  } catch (error) {
    console.log(error);
    yield put({type: LOGIN_REQUEST_ERROR, payload: {error: response}});
  }
}

export function* loginWatcherSaga() {
  yield takeLatest(LOGIN_REQUEST, loginApi);
}
