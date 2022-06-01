const PostCategory = (sequelize, DataTypes) => {
	const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
	}, {
		timestamps: false
	});
	PostCategory.associate = (models) => {
		models.Category.belongsToMany(models.BlogPost, 
          { as: 'blogsPost', 
          foreignKey:'categoryId', 
          otherKey: 'postId', });

        models.BlogPost.belongsToMany(models.Category, // association () pertence a muitos//
        { as: 'category', 
        through: PostCategory, 
        foreignKey: 'postId', 
        otherKey: 'categoryId',});
	};

	return PostCategory;
};
module.exports = PostCategory;