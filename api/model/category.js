module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categoria", {
    codigo: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nome: Sequelize.STRING,
    codigoMateria: Sequelize.INTEGER
  }, {
    timestamps: false,
    tableName: 't_categoria'
  });

  return Category;
};