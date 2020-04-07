'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Comments', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			content: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			username: {
				type: Sequelize.STRING,
			},
			postId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: { model: 'Posts', key: 'id' },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Comments');
	},
};
