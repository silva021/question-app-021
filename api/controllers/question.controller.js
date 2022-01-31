const db = require("./database");
const question = db.question;
const alternative = db.alternative;


exports.findQuestions = (req, res) => {
    const categoryId = req.query.categoryId
    question.findAll({
        where: {
            codigoCategoria: categoryId
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