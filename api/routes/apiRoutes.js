const subjectController = require("../controllers/subjects.controller");
let router = require('express').Router();

router.get("/", subjectController.findAll);

module.exports = router;