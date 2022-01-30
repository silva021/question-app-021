const subjectController = require("../controllers/subjects.controller");
let router = require('express').Router();

router.get("/subjects", subjectController.findAll);

module.exports = router;