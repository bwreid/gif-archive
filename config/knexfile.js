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