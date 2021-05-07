import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

interface Todo {
  id: string;
  text: string;
}

let todos: Todo[] = [];

router.get('/todos', (ctx, next) => {
  ctx.response.body = { todos };
});

router.post('/todos', async (ctx, next) => {
  const result = ctx.request.body();
  const data = await result.value;

  const newTodo: Todo = {
    id: Date.now().toString(),
    text: data.text,
  };

  todos.push(newTodo);

  ctx.response.status = 201;
  ctx.response.body = { message: 'Todo created!', todo: newTodo };
});

router.put('/todos/:todoId', async (ctx, next) => {
  const tid = ctx.params.todoId;

  const result = ctx.request.body();
  const data = await result.value;

  const todoIndex = todos.findIndex((todo) => todo.id === tid);

  todos[todoIndex] = { id: todos[todoIndex].id, text: data.text };

  ctx.response.body = { message: 'Updated todo!' };
});

router.delete('/todos/:todoId', (ctx, next) => {
  const tid = ctx.params.todoId;

  todos = todos.filter((todo) => todo.id !== tid);

  ctx.response.body = { message: 'Todo deleted!' };
});

export default router;
