'use strict';
module.exports = (sequelize, DataTypes) => {
	const PostView = sequelize.define(
		'PostView',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			country: {
				type: DataTypes.STRING,
			},
			postId: {
				type: DataTypes.UUID,
				allowNull: false,
			},
		},
		{
			tableName: 'PostViews',
		}
	);
	PostView.associate = function (models) {
		PostView.belongsTo(models.Post, {
			foreignKey: 'postId',
		});
	};
	return PostView;
};
