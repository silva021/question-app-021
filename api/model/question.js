module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define("questao", {
    codigo: {
      type: Sequelize.INTEGER,
      primaryKey: true

    },
    descricao: Sequelize.STRING,
    codigoCategoria: Sequelize.INTEGER,
  },
    {
      timestamps: false,
      tableName: 't_questao'
    });
    
  return Question;
};