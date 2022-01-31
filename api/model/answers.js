module.exports = (sequelize, Sequelize) => {
  const Answers = sequelize.define("resolucao", {
    codigo: {
      type: Sequelize.INTEGER,
      primaryKey: true

    },
    explicacao: Sequelize.STRING,
    codigoQuestao: Sequelize.INTEGER,
  },
    {
      timestamps: false,
      tableName: 't_resolucao'
    });
    
  return Answers;
};