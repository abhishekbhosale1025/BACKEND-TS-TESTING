// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {

  development: {
    client: 'pg',
    connection: "postgress://postgres:password@localhost:5432/users",
    migrations : {
      directory : path.join(BASE_PATH,'migrations')
    },
    seeds : {
      directory : path.join(BASE_PATH,'seeds')
    }
  }
}