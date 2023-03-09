const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: 'string',
  description: 'string',
  status: 'string'
}, { timeStamps: true });

const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;