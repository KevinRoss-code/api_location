module.exports = (sequelize, DataTypes) => {
  const Litige = sequelize.define("litige", {
    identifiantUser: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  });

  return Litige;
};
