import {takeEvery, put, call, takeLatest} from 'redux-saga/effects';
import {API_RESPONSE_SUCCESS} from '../../utils/constants';
import {makeNetworkCall} from '../';
import {Log} from '@/src/utils';
import {CATEGORY_ENDPOINT} from '@/src/utils/apiEndpoints';
import {
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from '@/src/redux/actions';

const mockData = [
  {
    id: '7',
    title: 'Shri Sai Gyaneshwari',
    media_link: 'NA',
    has_subcategory: 'yes',
  },
  {
    id: '8',
    title: 'Shri Sai Gyaneshwari Mahakavy',
    media_link: 'NA',
    has_subcategory: 'yes',
  },
  {
    id: '9',
    title: 'Shri Sai Gyaneshwari Ashtottarshti',
    media_link: 'NA',
    has_subcategory: 'yes',
  },
  {
    id: '10',
    title: 'Sabka Malik Sai Hindi',
    media_link:
      'https://www.shrisaisumiran.com/wp-content/uploads/2016/07/sabka-malik-sai.pdf',
    has_subcategory: 'no',
  },
  {
    id: '11',
    title: 'Jail Me Sai Sakshatkar Hindi',
    media_link:
      'https://www.shrisaisumiran.com/wp-content/uploads/2016/07/Jail-Mai-Sai.pdf',
    has_subcategory: 'no',
  },
  {
    id: '12',
    title: 'Sai Sarnam Dukh Harnam Hindi',
    media_link:
      'https://www.shrisaisumiran.com/wp-content/uploads/2016/07/Sai-sarnam-dukh-harnam-1.pdf',
    has_subcategory: 'no',
  },
  {
    id: '13',
    title: 'Sai Hi Kyon Hindi',
    media_link:
      'https://www.shrisaisumiran.com/wp-content/uploads/2016/07/Sai-Hi-Kyon-Complete.pdf',
    has_subcategory: 'no',
  },
];

/**
 * *************************************
 * GET BOOK CATEGORY API
 * *************************************
 */
export function getCategories(action) {
  Log('API-CALL:BOOK-CATEGORY');
  const {data} = action.payload;
  const {headers} = data || {};

  const config = {
    headers,
    method: 'GET',
    url: CATEGORY_ENDPOINT,
  };
  return makeNetworkCall(config);
}

export function* getCategoriesApi(action) {
  try {
    const response = yield call(getCategories, action);
    //***Remove mock data */
    // const response = {data: {data: mockData}, status: 200};
    const {data = {}} = response;
    Log('API-CALL:BOOK-CATEGORY:RESPONSE', JSON.stringify(data));
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put({
        type: GET_CATEGORIES_SUCCESS,
        payload: {categories: data},
      });
    } else {
      yield put({
        type: GET_CATEGORIES_ERROR,
        payload: {error: response},
      });
    }
  } catch (error) {
    console.log(error);
    yield put({type: GET_CATEGORIES_ERROR, payload: {error: response}});
  }
}

export function* categoryWatcherSaga() {
  yield takeLatest(GET_CATEGORIES_REQUEST, getCategoriesApi);
}
