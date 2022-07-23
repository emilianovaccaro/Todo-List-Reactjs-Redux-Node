const { Router } = require('express');
const { getTodos, createTodo, deleteTodo, updateTodo } = require('../controllers/todoController');


const todoRoutes = Router();


todoRoutes.get('/', getTodos );
todoRoutes.post('/', createTodo );
todoRoutes.put('/:id', updateTodo );
todoRoutes.delete('/:id', deleteTodo );


module.exports = {
  todoRoutes
}