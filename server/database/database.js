const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const database = new Sequelize(
    process.env.DATABASE_url || `postgres://postgres:wong456876@localhost:5432/${pkg.name}`,
    {
        logging : false
    }
)

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = database