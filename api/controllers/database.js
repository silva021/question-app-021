const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
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
