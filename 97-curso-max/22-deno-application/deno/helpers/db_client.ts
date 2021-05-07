import {
  Bson,
  MongoClient,
  Database,
} from 'https://deno.land/x/mongo@v0.22.0/mod.ts';

let db: Database;

export async function connect() {
  const client = new MongoClient();
  await client.connect(
    'mongodb+srv://node:dqoOedTlawu9fJI4@cluster0.a2uzr.mongodb.net?retryWrites=true&w=majority'
  );

  db = client.database('todos');
}

export function getDb() {
  return db;
}
