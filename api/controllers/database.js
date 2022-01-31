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

db.alternative = require("../model/alternative")(sequelize, Sequelize);
db.answers = require("../model/answers")(sequelize, Sequelize);
db.category = require("../model/category")(sequelize, Sequelize);
db.question = require("../model/question")(sequelize, Sequelize);
db.subjects = require("../model/subject")(sequelize, Sequelize);

module.exports = db