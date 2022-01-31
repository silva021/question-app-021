const subjectController = require("../controllers/subjects.controller");
const categoryController = require("../controllers/category.controller");
const questionController = require("../controllers/question.controller");
const answersController = require("../controllers/answers.controller");


let router = require('express').Router();

router.get("/subjects", subjectController.findAll);

router.get("/category", categoryController.findCategory);

router.get("/questions", questionController.findQuestions);

router.get("/answers", answersController.findAnswers);

module.exports = router;