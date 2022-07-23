const todosReducer = ( state = [], action ) => {
  switch( action.type ) {
    case 'GET_TODOS':
        return action.payload || false;
    case 'ADD_TODO':
        return [ ...state, action.payload ];
    case 'DEL_TODO':
        return state = state.filter(({ id }) => id !== action.payload);
    case 'UPDATE_TODO':
        return [ ...state, action.payload ];
    default: 
        return state;
  }
};

export default todosReducer;