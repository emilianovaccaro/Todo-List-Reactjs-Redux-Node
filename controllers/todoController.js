const { User } = require('../models/User');
const { Todo } = require('../models/Todo');


//getTodos
const getTodos = async ( req, res ) => {
  const user = req.user;
  try {
    const todos = await Todo.findAll({
      attributes: ["id", "title", "description", "userId", "success" ],
      where: { userId: user.id },
    });
    res.json(todos);

  } catch ( error ) {
    return res.status(500).json({ message: error.message });
  }
}


//create new Todo
//needs not completed, needs user info
const createTodo = async ( req, res ) => {
  
  try{
    const { title, success, userId, description } = req.body;
    const newTodo = await Todo.create({
      title,
      success,
      description,
      userId
    });
    
    res.json(newTodo);

  } catch ( error ) {
    return res.status(500).json({ message: error.message });
  }
};


/* const updateTodo = async ( req, res ) => {
  const { id } = req.params;

  try{
    const Todo = await Todo.findByPk()



  } catch ( error ) {
    return res.status(500).json({ message: error.message })
  }
} */

const deleteTodo = async ( req, res ) => {
  const { id } = req.params;

  try{
    const Delete = await Todo.destroy({
      where: { id: id },
    });
    console.log(Delete);

    res.json('msg: borrado');

  } catch ( error ) {
    return res.status(500).json({ message: error.message })
  }
}

const updateTodo = async ( req, res ) => {
    const { id } = req.params;

  try{
    const todo = await Todo.findOne({
      attributes: ["title", "userId", "description", "success", "id"],
      where: { id },
    });

    todo.set(req.body);
    
    await todo.save();

    res.json(todo);

  } catch ( error ) {
    return res.status(500).json({ message: error.message });
  }
}


module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
}