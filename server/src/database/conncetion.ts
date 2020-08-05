import knex from 'knex';
// Abtrasct folder/file path
import path from 'path';

const db = knex ({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

export default db;