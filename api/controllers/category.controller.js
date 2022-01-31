const db = require("./database");
const category = db.category;

exports.findCategory = (req, res) => {
    const subjectId = req.query.subjectId
    category.findAll({
        where: {
            codigoMateria : subjectId
        }
    }).then(
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