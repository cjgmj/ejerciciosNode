import { Router } from 'express';

import { Todo } from '../models/todo';

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ todos });
});

router.post('/todo', (req, res, next) => {
  const newTodo: Todo = { id: Date.now().toString(), text: req.body.text };

  todos.push(newTodo);

  res.status(201).json({ message: 'Added Todo', todo: newTodo, todos });
});

router.put('/todo/:todoId', (req, res, next) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);

  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };

    return res.status(200).json({ message: 'Updated todo', todos });
  }

  res.status(404).json({ message: 'Could not find todo for this id.' });
});

router.delete('/todo/:todoId', (req, res, next) => {
  const tid = req.params.todoId;

  todos = todos.filter((todoItem) => todoItem.id !== tid);

  res.status(404).json({ message: 'Deleted todo', todos });
});

export default router;
