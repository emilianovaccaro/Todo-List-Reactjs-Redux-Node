import server from "../../apis/server"

export const fetchUser = ( ) => async ( dispatch ) => {
  const response = await server.get('/api/current_user');

  dispatch({ type: 'FETCH_USER', payload: response.data });
}

export const getTodos = ( ) => async dispatch => {
  const res = await server.get("/api/todos");

  dispatch({ type: 'GET_TODOS', payload: res.data });
};

export const addTodo = ( values ) => async ( dispatch, getState ) => {
  const res = await server.post('/api/todos', values);
  
  dispatch({ type: 'ADD_TODO', payload: res.data });
};

export const deleteTodo = ( id ) => async ( dispatch ) => {
  await server.delete(`/api/todos/${id}`, id);
  
  dispatch({ type: 'DEL_TODO', payload: id });
};

export const updateTodo = ( id, values ) => async ( dispatch ) => {
  const res = await server.put(`/api/todos/${id}`, values);

  dispatch({ type: 'DEL_TODO', payload: res.data });
};
