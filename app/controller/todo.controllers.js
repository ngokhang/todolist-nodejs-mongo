const Todo = require("../models/Todo");

const todoController = {
  createNewTodo: async (req, res) => {
    const newTodo = await Todo.create({
      title: req.body.todoName
    });
    return res.render('todoList.ejs', {todos: await Todo.find()});
  },
  getAllTodos: async (req, res) => {
    const todos = await Todo.find();
    return res.render('todoList.ejs', {todos: todos});
  },
  getTodoById: async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    return res.render('editTodo.ejs', {todoData: todo, idTodo: req.params.id});
  },
  editTodoById: async (req, res) => {
    const {newTodoTitle, newTodoDescription} = req.body;
    await Todo.updateOne({_id: req.params.idTodo}, {
      title: newTodoTitle,
      description: newTodoDescription
    });

    return res.redirect('/');
  },
  deleteTodoById: async (req, res) => {
    await Todo.deleteOne({_id: req.params.id});
    return res.render('todoList.ejs', {todos: await Todo.find()});
  }
};

module.exports = todoController;