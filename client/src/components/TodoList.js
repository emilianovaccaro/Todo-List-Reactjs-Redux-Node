import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getTodos } from '../redux/actions';
import TodoItem from './TodoItem';
import { Card } from "semantic-ui-react";



const TodoList = ( { todos } ) => {
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(getTodos());
  }, [dispatch]);

  const todosMap = () => {
    return todos.map( (todo) => {
      return(
          <Card fluid  key={todo.id}>
            <TodoItem props={todo}/>
          </Card>
    );
    });
  }

  return(<div>
      {todosMap()}
    </div>
  )
};

function mapStateToProps(state) {
  return { todos: state.todos };
}


export default connect(mapStateToProps, { getTodos })( TodoList );