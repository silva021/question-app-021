const db = require("./database");
const subject = db.subjects;

exports.findAll = (req, res) => {
    subject.findAll().then(
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