// Because the knexfile is in here, we'll need to add
// a flag to our knex run. For example:

// knex --knexfile ./config/knexfile.js migrate:make

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gif_archive'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};