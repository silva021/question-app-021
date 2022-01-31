const db = require("./database");
const answers = db.answers;

exports.findAnswers = (req, res) => {
    const questionId = req.query.questionId
    answers.findAll({
        where: {
            codigoQuestao: questionId
        }
    }
    ).then(
        data => {
            res.json(data);
        }
    ).catch(function (error) {
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving tutorials."
        });
    })
};