module.exports = (sequelize, Sequelize) => {
  const Subject = sequelize.define("materia", {
    codigo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nome: Sequelize.STRING
  }, {
    timestamps: false,
    tableName: 't_materia'
  });

  return Subject;
};