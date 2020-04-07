'use strict';
module.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define(
		'Comment',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			username: DataTypes.STRING,
			postId: {
				type: DataTypes.UUID,
				allowNull: false,
			},
		},
		{
			tableName: 'Comments',
		}
	);
	Comment.associate = function (models) {
		// Comment.belongsTo(models.Post, {
		// 	foreignKey: 'postId',
		// 	as: 'post',
		// });
	};
	return Comment;
};
