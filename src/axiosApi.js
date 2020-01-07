import axios from 'axios';

const axiosRequest = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
});

export default axiosRequest;