const { Router } = require('express');
const { getTodos, createTodo, deleteTodo } = require('../controllers/todoController');


const todoRoutes = Router();


todoRoutes.get('/', getTodos );
todoRoutes.post('/', createTodo );
//todoRoutes.put('/:id', editTodo );
todoRoutes.delete('/:id', deleteTodo );


module.exports = {
  todoRoutes
}