'use strict';
module.exports = (sequelize, DataTypes) => {
	const Post = sequelize.define(
		'Post',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			content: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			author: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			category: {
				type: DataTypes.UUID,
				allowNull: false,
			},
		},
		{
			tableName: 'Posts',
		}
	);
	Post.associate = function (models) {
		Post.belongsTo(models.User, {
			foreignKey: 'author',
		});
		Post.belongsTo(models.Category, {
			foreignKey: 'category',
		});
	};
	return Post;
};
