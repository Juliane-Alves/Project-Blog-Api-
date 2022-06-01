'use strict'
const PostCategory = (sequelize, DataTypes) => {
	const postCategory = sequelize.define('PostCategory', {
    postId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
	}, {
		timestamps: false
	});
	postCategory.associate = (models) => {
		models.Category.belongsToMany(models.BlogPost, 
          { as: 'blogsPost', 
          through: postCategory,
          foreignKey:'categoryId', 
          otherKey: 'postId', });

        models.BlogPost.belongsToMany(models.Category, // association () pertence a muitos//
        { as: 'category', 
        through: postCategory, 
        foreignKey: 'postId', 
        otherKey: 'categoryId',});
	};

	return postCategory;
};
module.exports = PostCategory;