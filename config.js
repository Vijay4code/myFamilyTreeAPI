const env = process.env;

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'db4free.net',
    user: env.DB_USER || 'familytree',
    password: env.DB_PASSWORD || 'Password#01',
    database: env.DB_NAME || 'familytree',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;