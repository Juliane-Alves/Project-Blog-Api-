// segue a ordem do Readme
'use strict'
const User = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true, 
          primaryKey: true
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
      }, {
      timestamps: false
    })
    user.associate = (models) => {
      user.hasMany(models.BlogPost, // association (tem muitos)
        { as: 'blogsPost', foreignKey: 'userId' });
    };
  
    return user;
};


module.exports = User


  