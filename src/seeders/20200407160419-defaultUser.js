'use strict';
const dotenv = require('dotenv');
const uuid = require('uuid').v4;
const bcrypt = require('bcrypt');
dotenv.config();
const {
	ADMIN_NAME,
	ADMIN_EMAIL,
	ADMIN_PASSWORD,
	BCRYPT_SALT_FACTOR,
} = process.env;
module.exports = {
	up: async (queryInterface, Sequelize) => {
		const password = await bcrypt.hash(
			ADMIN_PASSWORD,
			parseInt(BCRYPT_SALT_FACTOR, 10)
		);
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					id: uuid(),
					firstName: ADMIN_NAME,
					lastName: ADMIN_NAME,
					email: ADMIN_EMAIL,
					password,
					confirmed: true,
					role: 'admin',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
