import { Application } from 'https://deno.land/x/oak/mod.ts';
import todosRoutes from './routes/todos.ts';

const app = new Application();

// Si tenemos funciones asíncronas a los middleware intermedios
// debemos ponerle async y esperar al siguiente, en caso contrario
// devolverá una promesa
app.use(async (ctx, next) => {
  console.log('Middleware!');

  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });
