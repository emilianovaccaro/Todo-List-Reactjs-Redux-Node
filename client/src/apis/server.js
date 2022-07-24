import axios from 'axios';

export default axios.create({
  baseURL: 'https://todo-list-emi.herokuapp.com/'
});