import path from 'path';

// Knex do not recognize the new syntax export default.
module.exports = {
  client: 'sqlite3', 
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};