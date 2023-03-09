const express = require('express');
const todoController = require('../controller/todo.controllers');
const Todo = require('../models/Todo');
const webRouter = express.Router();

webRouter.get('/', todoController.getAllTodos);
webRouter.post('/todo', todoController.createNewTodo);
webRouter.post('/todo/:idTodo', todoController.editTodoById);
webRouter.get('/todo/:id', todoController.getTodoById);
webRouter.get('/delete/:id', todoController.deleteTodoById);

module.exports = webRouter;