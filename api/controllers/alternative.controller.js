const db = require("./database");
const alternative = db.alternative;


exports.findAlternative = (req, res) => {
    const questionId = req.query.questionId
    alternative.findAll({
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