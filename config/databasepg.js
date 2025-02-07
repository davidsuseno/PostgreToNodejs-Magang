const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});
