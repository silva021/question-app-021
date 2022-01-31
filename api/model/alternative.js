module.exports = (sequelize, Sequelize) => {
  const Alternative = sequelize.define("alternativa", {
    codigo: {
      type: Sequelize.INTEGER,
      primaryKey: true

    },
    descricao: Sequelize.STRING,
    certo: Sequelize.BOOLEAN,
    codigoQuestao: Sequelize.INTEGER,
  },
    {
      timestamps: false,
      tableName: 't_alternativa'
    });
  return Alternative;
};