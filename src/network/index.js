/*
 *
 */

import axios from 'axios';
import {BASE_SERVER_URL} from '../utils/api-endpoints';

const instance = axios.create({
  baseURL: BASE_SERVER_URL,
  timeout: 1000,
});

const networkCall = async (config) => {
  let response = {};
  try {
    response = await instance(config);
    console.log('--NETWORK-RESPONSE--', response);
  } catch (error) {
    console.error(error);
    if (error.response) {
      response.message = defaultErrorString;
      response.status = 500;
    } else {
      response.message = error.message;
      response.status = 500;
    }
  }
  return response;
};

function makeNetworkCall(config) {
  return networkCall(config);
}

export {makeNetworkCall};
