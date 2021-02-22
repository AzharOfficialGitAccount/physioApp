import axios from 'axios';

export default axios.create({
  baseURL: `http://shrisaisumiran.com/rest-api/api/book`
});