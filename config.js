const env = process.env;

const config = {
  db: { /* don’t expose password or any sensitive info, done only for demo */
    host :'db4free.net',
    user:'familytree',
    password:'Password#01',
    database:'familytree',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
  
module.exports = config;