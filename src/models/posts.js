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
				type: DataTypes.TEXT,
				allowNull: false,
			},
			userId: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			categoryId: {
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
			foreignKey: 'userId',
			as: 'author',
			hooks: true,
		});
		Post.belongsTo(models.Category, {
			foreignKey: 'categoryId',
			as: 'category',
		});
		Post.hasMany(models.Comment, {
			foreignKey: 'postId',
			onDelete: 'CASCADE',
			as: 'comments',
			hooks: true,
		});
	};
	return Post;
};
