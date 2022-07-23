import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  users: usersReducer,
  todos: todosReducer
});