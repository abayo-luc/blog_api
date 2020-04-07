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
			post: {
				type: DataTypes.UUID,
				allowNull: false,
			},
		},
		{
			tableName: 'Comments',
		}
	);
	Comment.associate = function (models) {
		Comment.belongsTo(models.Post, {
			foreignKey: 'article',
		});
	};
	return Comment;
};
