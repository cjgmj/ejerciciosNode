import { MongoClient } from 'https://deno.land/x/mongo@v0.22.0/mod.ts';
import { Database } from 'https://deno.land/x/mongo@v0.22.0/src/database.ts';

let db: Database;

export async function connect() {
  const client = new MongoClient();
  // await client.connect(
  //   'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net/?retryWrites=true&w=majority'
  // );

  await client.connect({
    db: 'todo-app',
    tls: true,
    servers: [
      {
        host: 'cluster0-shard-00-02.a2uzr.mongodb.net',
        port: 27017,
      },
    ],
    credential: {
      username: 'node',
      password: 'dqoOedTlawu9fJI4',
      db: 'todo-app',
      mechanism: 'SCRAM-SHA-1',
    },
  });

  db = client.database('todo-app');
}

export function getDb() {
  return db;
}
