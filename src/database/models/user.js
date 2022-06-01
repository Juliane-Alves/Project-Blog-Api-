// segue a ordem do Readme
const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTEGER, 
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
      }, {
      timestamps: false
    })
    User.associate = (models) => {
      User.hasMany(models.BlogPost, // association (tem muitos)
        { as: 'blogsPost', foreignKey: 'userId' });
    };
  
    return User;
};



module.exports = User


  