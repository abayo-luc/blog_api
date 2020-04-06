'use strict';
import encrypt from '../utils/encrypt';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			phoneNumber: {
				type: DataTypes.STRING,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			role: {
				type: DataTypes.ENUM('admin', 'author'),
				defaultValue: 'author',
			},
			blocked: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			confirmed: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			avatar: DataTypes.STRING,
		},
		{
			tableName: 'Users',
		}
	);
	User.beforeSave(async (user, _options) => {
		const hashedPwd = await encrypt(user.password);
		user.setDataValue('password', hashedPwd);
	});
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
