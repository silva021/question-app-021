const express = require('express');
require('dotenv').config()
const app = express();
const routes = require('../api/routes/apiRoutes')
module.exports = () => {
    app.set('port', process.env.PORT || 8080);
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true })); 
    app.use(routes)
    return app;
};