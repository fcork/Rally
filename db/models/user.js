const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    elo: {
      type: DataTypes.INTEGER
    }
  });

  return User;
};

module.exports = user;
