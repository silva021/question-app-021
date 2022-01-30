const express = require('express');
const app = express();
const config = require('./default.json')
const routes = require('../api/routes/apiRoutes')
module.exports = () => {
    app.set('port', process.env.PORT || config.server.port);
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true })); 
    app.use(routes)
    return app;
};