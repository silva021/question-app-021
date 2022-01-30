const Sequelize = require('sequelize')
require('dotenv').config()
const fs = require('fs');

try {
    var config = JSON.parse(fs.readFileSync('C:\\Users\\Silva\\Desktop\\database-config.json', 'utf8').toString());
} catch (e) {
}

const sequelize = new Sequelize(
    process.env.DATABASE_NAME || config.databaseName,
    process.env.DATABASE_USERNAME || config.username,
    process.env.DATABASE_PASSWORD || config.password,
    {
        host: process.env.DATABASE_HOST || config.host,
        dialect: "mysql"
    })

sequelize.authenticate()

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.subjects = require("../model/subject")(sequelize, Sequelize);
// db.question = require("../model/question")(sequelize, Sequelize);
sequelize.sync();

module.exports = db
